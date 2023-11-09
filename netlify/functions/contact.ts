import querystring from "querystring";
import sendMessage from "src/utils/discord";

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);
  // Process the form data

  console.log(params);

  const paramsObject = {
    name: params.name as string,
    email: params.email as string,
    message: params.message as string,
    disclaimer: params.disclaimer as string,
  };

  sendMessage(paramsObject);

  // redirect to https://main--clever-tapioca-642c60.netlify.app/contact?success=true
  return {
    statusCode: 302,
    headers: {
      Location: `https://main--clever-tapioca-642c60.netlify.app/success`,
    },
    body: "",
  }
};
