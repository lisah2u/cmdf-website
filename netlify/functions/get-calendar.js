exports.handler = async (event) => {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const CALENDAR_ID = 'cacaponmusicanddancefoundation@gmail.com';

  if (!API_KEY) {
    return {
      statusCode: 503,
      body: JSON.stringify({ error: 'Calendar not configured' }),
    };
  }

  // Forward the date-range query params the EventCalendar library sends
  const { timeMin, timeMax, singleEvents, orderBy, maxResults } =
    event.queryStringParameters || {};

  let url =
    'https://www.googleapis.com/calendar/v3/calendars/' +
    encodeURIComponent(CALENDAR_ID) +
    '/events?key=' + API_KEY;

  if (timeMin)       url += '&timeMin='       + encodeURIComponent(timeMin);
  if (timeMax)       url += '&timeMax='       + encodeURIComponent(timeMax);
  if (singleEvents)  url += '&singleEvents='  + encodeURIComponent(singleEvents);
  if (orderBy)       url += '&orderBy='       + encodeURIComponent(orderBy);
  if (maxResults)    url += '&maxResults='    + encodeURIComponent(maxResults);

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: response.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch calendar data' }),
    };
  }
};
