export default interface ILog {
  logError(message: string): string;
  logWarning(message: string): string;
  logInfo(message: string): string;
}
