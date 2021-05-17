import ILog from "./ILog";

export default class AmazonS3Log implements ILog {
  logError(message: string): string {
    return `error logged into amazon S3 [${message}]`;
  }
  logWarning(message: string): string {
    return `warning logged into amazon S3 [${message}]`;
  }
  logInfo(message: string): string {
    return `info logged into amazon S3 [${message}]`;
  }
}
