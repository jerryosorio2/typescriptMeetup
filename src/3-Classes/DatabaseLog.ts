import ILog from "./ILog";

export default class DatabaseLog implements ILog {
  logError(message: string): string {
    return `error logged into data base [${message}]`;
  }
  logWarning(message: string): string {
    return `warning logged into data base [${message}]`;
  }
  logInfo(message: string): string {
    return `info logged into data base [${message}]`;
  }
}
