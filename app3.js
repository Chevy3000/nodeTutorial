const fs = require("fs");

fs.writeFile("example.txt", "This is an example", (err) => {
  if (err) console.log(err);
  else {
    console.log("file created");
    fs.readFile("example.txt", "utf8", (err, file) => {
      if (err) {
        console.log(err);
      } else {
        console.log(file);
      }
    });
  }
});

fs.rename("example.txt", "example2.txt", (err) => {
  if (err) console.log(err);
  else console.log("renamed");
});

fs.appendFile("example2.txt", "this is the newest appended data", (err) => {
  if (err) console.log(err);
  else console.log("appended");
});

fs.unlink("example2.txt", (err) => {
  if (err) console.log(err);
  else console.log("deleted");
});

fs.mkdir("tutorial", (err) => {
  if (err) console.log(err);
  else {
    fs.writeFile("./tutorial/example.txt", "this is the data", (err) => {
      if (err) console.log(err);
      else console.log("success");
    });
  }
});
fs.readdir("tutorial", (err, files) => {
  if (err) console.log(err);
  else {
    for (let file of files) {
      fs.unlink("./tutorial/" + file, (err) => {
        if (err) console.log(err);
        else console.log("deleted file");
      });
    }
    fs.rmdir("tutorial", (err) => {
      if (err) console.log(err);
      else console.log("deleted");
    });
  }
});
