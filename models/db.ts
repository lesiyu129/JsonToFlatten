import { DataSource } from "typeorm";
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
} from "./entitys/Property";

export class AppDataSource {
  private host: string;
  private port: number;
  private username: string;
  private password: string;
  private database: string;
  private synchronize: boolean;
  private dropSchema: boolean;
  private cache: boolean;
  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    synchronize: boolean = false,
    dropSchema: boolean = false,
    cache: boolean = true
  ) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.database = database;
    this.synchronize = synchronize;
    this.dropSchema = dropSchema;
    this.cache = cache;
  }
  init() {
    const AppDataSource = new DataSource({
      type: "mysql",
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.database,
      synchronize: this.synchronize,
      //   logging: "all",
      entities: [
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
      ],
      dropSchema: this.dropSchema,
      cache: this.cache,
      logger: "advanced-console",
    });
    return AppDataSource;
  }
}
