export default {
  client: "postgres",
  connection: {
    host: "host.docker.internal",
    port: 5434,
    database: "sample",
    user: "postgres",
    password: "postgres",
  },
  useNullAsDefault: true,
  migrations: {
    tableName: "migrations",
    directory: "../migrations",
    extension: "ts",
  },
  seeds: {
    directory: "../seeds",
    extension: "ts",
  },
};
