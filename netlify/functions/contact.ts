exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = event.body;
  // Process the form data

  console.log(params);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form data received" }),
  };
};
