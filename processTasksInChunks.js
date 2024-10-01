// Utility functions DO NOT MODIFY.
const CHUNKS = 3;
const TASKS = ["A", "B", "C", "D", "E"];

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const FakeAPI = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), 1000));

// Expected output:
//   Sending request for: A
//   Sending request for: B
//   Sending request for: C
//   Task A completed
//   Task B completed
//   Task C completed
//   Sending request for: D
//   Sending request for: E
//   Task D completed
//   Task E completed
//   All tasks completed

async function processTasksInChunks(tasks, chunkSize) {
  for (let i = 0; i < tasks.length; i += chunkSize) {
    const chunk = tasks.slice(i, i + chunkSize);

    const requests = chunk.map((task) => {
      console.log(`Sending request for: ${task}`);
      return FakeAPI(task);
    });

    const results = await Promise.all(requests);

    results.forEach((task) => console.log(`Task ${task} completed`));
  }

  console.log("All tasks completed");
}

processTasksInChunks(TASKS, CHUNKS);
// processTasksInChunks(["A", "B"], 5);

module.exports = { processTasksInChunks, FakeAPI, sleep, CHUNKS, TASKS };
