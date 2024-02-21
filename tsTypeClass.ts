export type MysqlConnectionOptions = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  type?: "mysql";
  entities?: any[];
  synchronize?: boolean;
  logging?: boolean;
  dropSchema?: boolean;
  cache?: boolean;
};

export type mongo_version = 3 | 4 | 5 | 6;
export type collectionName = {
  name: string;
  options: any;
};
