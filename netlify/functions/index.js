exports.handler = async function (event, context) {
    const value = Netlify.env.get("GOOGLE_SHEETS_API_KEY");

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
    };
};