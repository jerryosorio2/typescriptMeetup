import ILog from "./ILog";
import AmazonS3Log from "./AmazonS3Log";
import DatabaseLog from "./DatabaseLog";
import TextFileLog from "./TextFileLog";

class LoadProcess {
  amazonS3Log: ILog;
  databaseLog: ILog;
  textFileLog: ILog;

  constructor() {
    this.amazonS3Log = new AmazonS3Log();
    this.databaseLog = new DatabaseLog();
    this.textFileLog = new TextFileLog();
  }

  loadProcess() {
    console.log(this.amazonS3Log.logError("Item code error"));
    console.log(this.databaseLog.logError("Item code error"));
    console.log(this.textFileLog.logError("Item code error"));
  }
}

let loadProcess = new LoadProcess();
loadProcess.loadProcess();
