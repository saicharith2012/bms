import express from "express";
import cors from "cors";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("hi there...");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUser = await client.user.create({
      data: {
        username,
        password,
      },
    });

    res.json({
      message: "signedup successfully.",
      id: newUser.id,
    });
  } catch (error) {
    res.json({
      message:
        error instanceof Error ? error.message : "error while signing up.",
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
