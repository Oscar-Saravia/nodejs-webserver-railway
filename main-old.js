const http = require("http");

http
  .createServer((req, res) => {
    // console.log(req);
    // res.writeHead(200, {"Content-Type" : "application/json"})

    // const people = {
    //     id: 1,
    //     name: "Antoni"
    // }
    // res.write(JSON.stringify(people));

    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("id, name\n");
    res.write("1, TEST\n");
    res.end();
  })
  .listen(4000);
console.log("Listed port: ", 4000);
