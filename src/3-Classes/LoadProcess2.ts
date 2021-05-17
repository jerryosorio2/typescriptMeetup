import ILog from "./ILog";
import AmazonS3Log from "./AmazonS3Log";
import DatabaseLog from "./DatabaseLog";
import TextFileLog from "./TextFileLog";

class LoadProcess {
  constructor() {}

  loadProcess(log: ILog) {
    console.log(log.logError("Item code error"));
  }
}

let loadProcess = new LoadProcess();
let amazonS3Log = new AmazonS3Log();
let databaseLog = new DatabaseLog();
let textFileLog = new TextFileLog();

loadProcess.loadProcess(amazonS3Log);
loadProcess.loadProcess(databaseLog);
loadProcess.loadProcess(textFileLog);
