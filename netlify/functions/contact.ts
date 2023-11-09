exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = event.body;
  // Process the form data

  console.log(params);

  // redirect to https://main--clever-tapioca-642c60.netlify.app/contact?success=true
  return {
    statusCode: 302,
    headers: {
      Location: `https://main--clever-tapioca-642c60.netlify.app/contact?success=true`,
    },
    body: "",
  }
};
