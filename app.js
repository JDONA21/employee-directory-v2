import express from "express";

const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

import employeesRouter from "#api/employees";
app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Come back later.");
});
