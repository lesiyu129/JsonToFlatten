import { MongoClient as MongoClient4, ObjectId as ObjectId4 } from "mongodb4";
import { MongoClient as MongoClient5, ObjectId as ObjectId5 } from "mongodb5";
import { MongoClient as MongoClient6, ObjectId as ObjectId6 } from "mongodb6";
import { AppDataSource } from "./models/db";
import {
  mongo_version,
  collectionName,
  MysqlConnectionOptions,
} from "./tsTypeClass";
const mongoose = require("mongoose");
const mongodb3 = require("mongodb3");
const MongoClient3 = mongodb3.MongoClient;
const ObjectId3 = mongodb3.ObjectId;
const ObjectId = mongoose.Types.ObjectId;
const Cardinality = 100;
import {
  Property1,
  Property2,
  Property3,
  Property4,
  Property5,
  Property6,
  Property7,
  Property8,
  Property9,
  Property10,
  Property11,
  Property12,
  Property13,
  Property14,
  Property15,
  Property16,
} from "./models/entitys/Property";

/**
 * @param v 3|4|5|6 mongo版本小于3.6 使用 3 如何选择版本可参考 https://www.npmjs.com/package/mongodb
 * @param url mongo链接字符串 例:'mongodb://localhost:27017'
 * @param dbName
 */
export default class main {
  private version: mongo_version;
  private url: string;
  private dbName: string;
  private client: any;
  private ObjectID: any;
  private AppDataSource: any;
  constructor(
    v: mongo_version,
    url: string,
    dbName: string,
    mysqldb: MysqlConnectionOptions
  ) {
    this.version = v;
    this.url = url;
    this.dbName = dbName;
    this.AppDataSource = new AppDataSource(
      mysqldb.host,
      mysqldb.port,
      mysqldb.username,
      mysqldb.password,
      mysqldb.database,
      mysqldb.synchronize,
      mysqldb.dropSchema,
      mysqldb.cache
    ).init();
  }
  /**
   * 连接mongo
   * @returns Db
   */
  public async connect(): Promise<any> {
    try {
      await this.AppDataSource.initialize();
      console.log("Data Source has been initialized!");
    } catch (error) {
      console.error("Error during Data Source initialization", error);
    }
    if (typeof this.url !== "string") {
      throw new Error("url must be string");
    }
    if (typeof this.dbName !== "string") {
      throw new Error("dbName must be string");
    }
    if (typeof this.version !== "number") {
      throw new Error("version must be number");
    }
    let client;
    if (this.version == 6) {
      this.client = await MongoClient6.connect(this.url);
      this.ObjectID = () => new ObjectId6();
    } else if (this.version == 5) {
      this.client = await MongoClient5.connect(this.url);
      this.ObjectID = () => new ObjectId5();
    } else if (this.version == 4) {
      this.client = await MongoClient4.connect(this.url);
      this.ObjectID = () => new ObjectId4();
    } else if (this.version == 3) {
      this.client = await MongoClient3.connect(this.url, {
        useUnifiedTopology: true,
      });
      this.ObjectID = () => new ObjectId3();
    } else {
      throw new Error("version not supported");
    }
    return this.client.db(this.dbName);
  }

  /**
   * 获取所有集合
   * @param db
   * @returns collectionName[]
   */
  public async collectionNames(db: any): Promise<Array<collectionName>> {
    const collectionNames: Array<collectionName> = await db
      .listCollections()
      .toArray();
    return collectionNames;
  }

  public async getCollectionAllData(db: any, collectionName: string) {
    const countNum = await db.collection(collectionName).countDocuments();
    const pageNum: number = Math.ceil(countNum / Cardinality);
    for (let i = 0; i < pageNum; i++) {
      const data = await this.getCollectionData(db, collectionName, i);
      const propertys: Array<any> = [];
      for (const element of data) {
        const flattenArray: any[] = [];
        await this.jsonToFlatten(element, flattenArray);
        for (const flatten of flattenArray) {
          for (const key of Object.keys(flatten)) {
            if (key != "lest_flatten_id") {
              const value = flatten[key];
              const lest_flatten_id = flatten["lest_flatten_id"];
              const _oid = String(this.ObjectID());
              const Property = await this.getProperty(
                lest_flatten_id ? String(lest_flatten_id) : _oid
              );
              const property = new Property(
                key,
                String(value),
                lest_flatten_id ? String(lest_flatten_id) : _oid,
                lest_flatten_id ? false : true
              );
              propertys.push(property);
            }
            // await AppDataSource.manager.save(property)
          }
        }
      }
      await this.AppDataSource.manager.save(propertys);
    }
    return countNum;
  }

  private async getCollectionData(
    db: any,
    collectionName: string,
    pageNum: number
  ) {
    const skipNum = pageNum * Cardinality;
    const data = await db
      .collection(collectionName)
      .find()
      .skip(skipNum)
      .limit(Cardinality)
      .toArray();
    return data;
  }

  private async jsonToFlatten(data: any, flattenArray: Array<any>) {
    const _this = this;
    const keys = Object.keys(data);
    for (const key of keys) {
      const isValidObjectId = await this.isValidObjectId.call(_this, data[key]);
      if (
        data[key] != null &&
        typeof data[key] === "object" &&
        !isValidObjectId
      ) {
        const oid = _this.ObjectID();
        data[key]["lest_flatten_id"] = oid;
        await this.jsonToFlatten.call(_this, data[key], flattenArray);
        data[key] = oid;
      }
    }
    flattenArray.push(data);
  }
  /**
   * 关闭连接
   */
  public async close() {
    if (this.client) {
      await this.client.close();
    }
  }

  private async isValidObjectId(id: any) {
    if (ObjectId.isValid(id)) {
      // 额外的检查以确保 id 是合法的 ObjectId
      if (String(new ObjectId(id)) === String(id)) {
        return true;
      }
    }
    return false;
  }

  private async getProperty(lest_flatten_id: string = "0") {
    const n = parseInt(lest_flatten_id[lest_flatten_id.length - 1], 16) + 1;
    switch (n) {
      case 1:
        return Property1;
      case 2:
        return Property2;
      case 3:
        return Property3;
      case 4:
        return Property4;
      case 5:
        return Property5;
      case 6:
        return Property6;
      case 7:
        return Property7;
      case 8:
        return Property8;
      case 9:
        return Property9;
      case 10:
        return Property10;
      case 11:
        return Property11;
      case 12:
        return Property12;
      case 13:
        return Property13;
      case 14:
        return Property14;
      case 15:
        return Property15;
      case 16:
        return Property16;
    }
    return Property1;
  }
  public async start() {
    const connect = this.connect();
    connect
      .then(async (db: any) => {
        const collectionNames: Array<{ name: string; options: any }> =
          await this.collectionNames(db);
        let i = 0;
        await collectionNames.forEach(async (collectionName) => {
          if (collectionName.name !== "mission_task_update_records") {
            return;
          }
          const startTime = Date.now();
          const countNum = await this.getCollectionAllData(
            db,
            collectionName.name
          );
          const endTime = Date.now();
          console.log(
            `${i}/${collectionNames.length - 1}`,
            collectionName.name,
            countNum,
            (endTime - startTime) / 1000 + "s"
          );
          i += 1;
        });
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }
}
