# PROCESS TASKS IN CHUNKS SOLUTION

## TASK

Create a function which processes tasks in chanks.

```js
// Utility functions DO NOT MODIFY.
const CHUNKS = 3;
const TASKS = ["A", "B", "C", "D", "E"];

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const FakeAPI = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), 1000));

// processTasksInChunks(TASKS, CHUNKS);

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
```

## Installing

```
$ npm install
```

## Running tests

```
npm test
```