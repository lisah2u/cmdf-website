// Mailchimp newsletter subscribe function
// Uses Mailchimp Marketing API v3 directly via fetch (Node 18 built-in)
// Required env vars: MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_AUDIENCE_ID

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let email, website;
  try {
    const body = JSON.parse(event.body);
    email = (body.email || '').trim().toLowerCase();
    website = body.website || ''; // honeypot field
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  // Honeypot: silently succeed so bots think they worked
  if (website) {
    return { statusCode: 200, body: JSON.stringify({ message: 'Success!' }) };
  }

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'A valid email address is required.' }) };
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !server || !audienceId) {
    console.error('Mailchimp env vars not configured');
    return { statusCode: 503, body: JSON.stringify({ error: 'Service not configured' }) };
  }

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
  const auth = Buffer.from('anystring:' + apiKey).toString('base64');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + auth,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    if (response.ok) {
      return { statusCode: 200, body: JSON.stringify({ message: 'Success!' }) };
    }

    const data = await response.json();

    // Already subscribed — treat as success for UX
    if (response.status === 400 && data.title === 'Member Exists') {
      return { statusCode: 200, body: JSON.stringify({ message: 'already_subscribed' }) };
    }

    console.error('Mailchimp error:', data.detail || data.title);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not subscribe. Please try again.' }),
    };
  } catch (error) {
    console.error('Subscribe function error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not subscribe. Please try again.' }),
    };
  }
};
