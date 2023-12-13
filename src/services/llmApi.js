import OpenAI from "openai";

const openai = new OpenAI({apiKey:import.meta.env.VITE_GPT_API_SECRET});

export async function generateDogDescription(dogName) {
  let message = "Write a short description of a "+ dogName + ", around 100 words, that will make people want one as a pet.";
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": message}
      ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}