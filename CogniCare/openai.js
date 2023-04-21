const { Configuration, OpenAIApi } = require("openai");
async function generateMedicationPlan() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  // Define the prompt to be sent to the OpenAI API
  const prescription =
    "Aricept 5mg, once a day; Asprin 325mg every 4-6 hours; ibuprofen 200mg, every 5 hours";
  const diagnosis =
    "mild Alzheimer's and Mild to moderate pain in the lower back";
  const prompt = `You are HealthGPT. Patient prescription: ${prescription}
  Patient diagnosis: ${diagnosis}
  Generate a medication plan for the week, that keeps in mind drug contradictions and tells the patient the exact time to take medication along with how much. Output the plan in a tabular format.`;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(completion.data.choices[0].message);
}
generateMedicationPlan();
