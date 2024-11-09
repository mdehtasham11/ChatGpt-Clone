 import { Configuration, OpenAIApi } from 'openai';
 const configuration = new Configuration({
   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
 });
 const openai = new OpenAIApi(configuration);

export async function getChatGpt(message) {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return res.data.choices[0].text;
  } catch (error) {
    console.error('Error with OpenAi Api',error);
  }
}
const result = await getChatGpt("What is the capital of the United States?");
console.log(result);