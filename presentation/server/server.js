import http from "http";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { buildInitialState } from "./utils";
import render from "./render.jsx";

const PORT = process.env.NODE_PORT || 3000;

const app = express();
const server = http.Server(app);

app
  .use(bodyParser.json())
  .use(morgan("combined"))

  .post("/render", function(req, res) {
    try {
      const url = req.body.url;

      const initialState = buildInitialState(req.body);

      const result = render(url, initialState);
      console.log(result);

      res.json({
        html: result.html,
        finalState: result.finalState
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: 404,
        error: error.message
      });
    }
  });

server.listen(PORT, () => {
  console.log(`Render server listening at http://localhost:${3000}`);
});
