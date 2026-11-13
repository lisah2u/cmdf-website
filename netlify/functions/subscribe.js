// Newsletter subscribe function — adds the email as a contact in Zeffy
// (moved from Mailchimp in Nov 2026 when the free Mailchimp list filled up).
// Uses Zeffy's public API: PUT /api/v1/contacts (upsert by email).
// Docs: https://www.zeffy.com/api/docs  — writes require a Stripe-verified org.
// Required env var: ZEFFY_API_KEY (Zeffy → Settings → Integrations → API key)

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

  const apiKey = process.env.ZEFFY_API_KEY;
  if (!apiKey) {
    console.error('ZEFFY_API_KEY not configured');
    return { statusCode: 503, body: JSON.stringify({ error: 'Service not configured' }) };
  }

  try {
    // PUT = create-or-update matched on email. Only the email is sent, so an
    // existing contact's name/address in Zeffy is never overwritten.
    const response = await fetch('https://api.zeffy.com/api/v1/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 201) {
      return { statusCode: 200, body: JSON.stringify({ message: 'Success!' }) };
    }
    // 200 = contact already existed in Zeffy — treat as success for UX
    if (response.status === 200) {
      return { statusCode: 200, body: JSON.stringify({ message: 'already_subscribed' }) };
    }

    const data = await response.json().catch(() => ({}));
    console.error('Zeffy error:', response.status, data.error && (data.error.code + ': ' + data.error.message));
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
