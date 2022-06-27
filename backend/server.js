const jsonServer = require("json-server");
const {
  passHandler,
  likeHandler,
} = require("./routeHandler");

const { defaultPort, databaseFile } = require("./config.json");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(databaseFile);
const db = low(adapter);

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || defaultPort;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Handle POST, PUT and PATCH request
server.use(jsonServer.bodyParser);

// Register request
server.post("/pass", (req, res) => {
  passHandler(db, req, res);
});

// Login in request
server.post("/like", (req, res) => {
  likeHandler(db, req, res);
});

// Setup others routes
server.use(router);

// Start server
server.listen(port, () => {
  console.log("Server is running on port " + port);
});
