// Use of this weird re-exporting shim described here:
// https://github.com/developit/workerize-loader/issues/5#issuecomment-570663710
// Workaround for typescript

// block for `time` ms, then return the number of loops we could run in that time:
export function expensive(time: number) {
  let start = Date.now(),
    count = 0;
  while (Date.now() - start < time) count++;
  return count;
}
