const { processTasksInChunks } = require("./processTasksInChunks");

describe("processTasksInChunks", () => {
  beforeEach(() => {
    jest.spyOn(global.console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it("should process tasks in chunks of the specified size", async () => {
    const TASKS = ["A", "B", "C", "D", "E"];
    const CHUNKS = 3;

    await processTasksInChunks(TASKS, CHUNKS);

    expect(console.log).toHaveBeenCalledWith("Sending request for: A");
    expect(console.log).toHaveBeenCalledWith("Sending request for: B");
    expect(console.log).toHaveBeenCalledWith("Sending request for: C");
    expect(console.log).toHaveBeenCalledWith("Task A completed");
    expect(console.log).toHaveBeenCalledWith("Task B completed");
    expect(console.log).toHaveBeenCalledWith("Task C completed");
    expect(console.log).toHaveBeenCalledWith("Sending request for: D");
    expect(console.log).toHaveBeenCalledWith("Sending request for: E");
    expect(console.log).toHaveBeenCalledWith("Task D completed");
    expect(console.log).toHaveBeenCalledWith("Task E completed");
    expect(console.log).toHaveBeenCalledWith("All tasks completed");
  });

  it("should handle an empty task list", async () => {
    const TASKS = [];
    const CHUNKS = 2;

    await processTasksInChunks(TASKS, CHUNKS);

    expect(console.log).toHaveBeenCalledWith("All tasks completed");
  });

  it("should handle tasks less than chunk size", async () => {
    const TASKS = ["A", "B"];
    const CHUNKS = 3;

    await processTasksInChunks(TASKS, CHUNKS);

    expect(console.log).toHaveBeenCalledWith("Sending request for: A");
    expect(console.log).toHaveBeenCalledWith("Sending request for: B");
    expect(console.log).toHaveBeenCalledWith("Task A completed");
    expect(console.log).toHaveBeenCalledWith("Task B completed");
    expect(console.log).toHaveBeenCalledWith("All tasks completed");
  });
});
