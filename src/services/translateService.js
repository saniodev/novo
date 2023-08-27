const translate = require('translate-google-api');

const translateOutput = async (output) => {

  try {
    const translatedText = await translate(output.toString(), {
      from: "en",
      to: "pt",
    });

    return translatedText;

  } catch (e) {
    console.error("Erro na tradução:", e);
  }
};

module.exports = {
  translateOutput
};