// const os = require("os");
// const path = require("path");
// const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

//* OS
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.freemem())
// console.log(os.machine())
// console.log(os.cpus())

//* path

// directory name - current folder - location
//D:\Entri-Session\Entri-Batch\B47 Session\Backend

// console.log(__dirname);
// console.log()

// console.log(path.basename(__filename));
// const validFormat = path.extname(
//   "D:\Entri-Session\Entri-Batch\B47 Session\Backend\nodejs.pdf",
// );

// if (validFormat === ".js") {
//   console.log("Supported Format");
// } else {
//   console.log("Not Supported Format!");
// }

// file read :

// const text = fs.readFileSync(
//   ,
//   "utf-8",
// );
// console.log(text);

// File Write :

// const fillePath =
//   "D:/Entri-Session/Entri-Batch/B47 Session/Backend/Introduction/test.txt";

// fs.writeFileSync(
//   "test.txt",
//   "Hi Everyone, Hope you got it how to write content in a file",
//   "utf-8",
// );

// Event : Declare
emitter.on("Notification-Email", () => {
  console.log("Email Sent! To client");
});

// Event : Call
emitter.emit("Notification-Email");
// emitter.emit("Notification-Email");
// emitter.emit("Notification-Email");
// emitter.emit("Notification-Email");
// emitter.emit("Notification-Email");