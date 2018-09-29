var express = require("express"); // 加载express模块
var app = express(); // 创建服务器实例
app.set("port", process.env.PORT || 6060); // 配置全局变量 post

// 设置 handlebars 视图引擎
var handlebars = require("express3-handlebars") // 加载handlebars
  .create({ defaultLayout: "main" }); // 设置默认布局
app.engine("handlebars", handlebars.engine); //设置express模板引擎
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("home");
});
app.get("/about", function(req, res) {
  res.type("text/plain");
  res.send("About Meadowlark Travel");
});

// 定制 404 页面
app.use(function(req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});
// 定制 500 页面
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});
app.listen(app.get("port"), function() {
  // 获取全局变量post并作为服务器端口
  console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.");
});
