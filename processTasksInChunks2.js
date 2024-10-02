const CHUNKS = 3;
const TASKS = ["A", "B", "C", "D", "E"];
const DELAY = 2000;

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const FakeAPI = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), 1000));

// Main function to process tasks in chunks.
async function processTasksInChunks(tasks, chunkSize) {
  const chunkedTasks = chunkify(tasks, chunkSize); // Separate tasks into chunks
  for (const chunk of chunkedTasks) {
    await handleTaskChunk(chunk);
    await sleep(DELAY);
  }
  console.log("All tasks completed");
}

// Split the tasks array into chunks of specified size
function chunkify(tasks, chunkSize) {
  const chunks = [];
  for (let i = 0; i < tasks.length; i += chunkSize) {
    chunks.push(tasks.slice(i, i + chunkSize));
  }
  return chunks;
}

// Process each chunk of tasks
async function handleTaskChunk(chunk) {
  const taskPromises = chunk.map((task) => sendTaskRequest(task)); // Map chunk tasks to promises
  await Promise.all(taskPromises);
}

// Send a request for each task and log the output once completed
async function sendTaskRequest(task) {
  console.log(`Sending request for: ${task}`);
  await FakeAPI(task); // Mock API call for the task
  console.log(`Task ${task} completed`);
}

// Run the main function
processTasksInChunks(TASKS, CHUNKS);

module.exports = { processTasksInChunks, FakeAPI, sleep, CHUNKS, TASKS, DELAY };
