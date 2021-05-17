import ILog from "./ILog";

export default class TextFileLog implements ILog {
  logError(message: string): string {
    return `error logged into txt file [${message}]`;
  }
  logWarning(message: string): string {
    return `warning logged into txt file [${message}]`;
  }
  logInfo(message: string): string {
    return `info logged into txt file [${message}]`;
  }
}
