// Use of this weird re-exporting shim described here:
// https://github.com/developit/workerize-loader/issues/5#issuecomment-570663710
// Workaround for typescript

// eslint-disable-next-line import/no-webpack-loader-syntax
import createWorker from "workerize-loader!./worker";
import * as Worker from "./worker";

const sampleWorker = createWorker<typeof Worker>();

export const useWorker = () => sampleWorker;
