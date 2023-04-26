const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

app.get("/medication-plan", async (req, res) => {
  const prescription =
    "Aricept 5mg, once a day; Metaformin 500mg 2 times a day; Glutarol 5mg once a day";
  const diagnosis =
    " Alzheimer's and Type 2 Diabetes";
  const prompt = `You are HealthGPT. Patient prescription: ${prescription}
  Patient diagnosis: ${diagnosis}
  Generate a medication plan with no drug contradictions for the week (Monday-Friday). For each day, Indicate drug name, specific military time to take, dosage, and instructions. Out the plan in a JSON format like the following for each day of the week: {
  "day": [
    {
      "drugName": "",
      "time": "",
      "dosage": "",
      "instructions": ""
  ],`;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  const medicationPlan = completion.data.choices[0].message.content;

res.send(medicationPlan) ; //res.send(`<pre>${medicationPlan}</pre>`);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});

//app.post("/medication-plan/:userId", async (req, res) => {
//const { userId } = req.params;
//const { drugs } = req.body;

//const db = getDatabase();
//for (const drug of drugs) {
// set(ref(db, `users/${userId}/${drug.name}`), {
//  amount: drug.dosage,
//     directions: drug.instructions,
//   });
// }
// console.log("Prescriptions uploaded");

// const prescriptionList = drugs.map(drug => `${drug.name} ${drug.dosage}, ${drug.instructions}`).join("; ");
