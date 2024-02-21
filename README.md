# JsonToFlatten

mongo 数据转换成扁平化的普通对象

```javascript
import main from "./index";
const url = "mongodb://admin:admin@localhost:27017";
const mysqldb = {
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "test",
  synchronize: true,
  dropSchema: true,
  cache: true,
};
/**
 * @param {number} mongo驱动版本 3｜4｜5｜6
 * @param {string} mongo连接字符串
 * @param {string} mongo链接表
 * @param {object} mysql驱动配置
 */
const tool = new main(3, url, "lesschat", mysqldb);
tool.start();
```
