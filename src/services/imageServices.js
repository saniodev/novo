// const { token } = require('../middlewares/authMiddleware');
const Replicate = require("replicate");
const { translateOutput } = require("./translateService");

const HTTP_OK_STATUS = 200;

require("dotenv").config();

const postImage = async (req, res, _next) => {
  const {
    img,
    max_length,
    temperature,
    top_p,
    top_k,
    penalty_alpha,
    repetition_penalty,
    length_penalty,
    no_repeat_ngram_size,
    seed,
  } = req.body;

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const output = await replicate.run(
    "joehoover/instructblip-vicuna13b:c4c54e3c8c97cd50c2d2fec9be3b6065563ccf7d43787fb99f84151b867178fe",
    {
      input: {
        prompt: "...",
        img: img,
        max_length: max_length,
        temperature: temperature,
        top_p: top_p,
        top_k: top_k,
        penalty_alpha: penalty_alpha,
        repetition_penalty: repetition_penalty,
        length_penalty: length_penalty,
        no_repeat_ngram_size: no_repeat_ngram_size,
        seed: seed,
      },
    }
  );

  const result = await translateOutput(output.join(" "));

  return res.status(HTTP_OK_STATUS).json({ result });
};

module.exports = {
  postImage,
};
