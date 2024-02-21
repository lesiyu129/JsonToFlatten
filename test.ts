import main from "./index";
const url = "mongodb://admin:lsy1995129.@10.0.11.240:27018";
const mysqldb = {
  host: "localhost",
  port: 3306,
  username: "root",
  password: "lsy1995129.",
  database: "test",
  synchronize: true,
  dropSchema: true,
  cache: true,
};
const tool = new main(3, url, "lesschat", mysqldb);
tool.start();
