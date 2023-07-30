console.log("started: ", new Date());
import express from "express";
const app = express();
const recordedMessages: string[] = [];

app.use(express.json());
// app.use(express.json);
app.get<{ name?: string; age: number }>("/", (req, res) => {
    // console.log("req: ", req.headers);
    console.log(req.query);
    const queryParams = req.query;
    if (queryParams.name === "neill") {
        res.json("hello Neill!");
    } else {
        res.json("hello");
    }
});
app.get("/messages", (req, res) => {
    res.json(recordedMessages);
});
app.post<{ name?: string; age: number }>("/messages", (req, res) => {
    const msg = req.body;
    if (msg) {
        recordedMessages.push(msg);
        const len = recordedMessages.length;
        res.json("message recorded! " + len);
    } else {
        res.json("no message supplied!");
    }
});
app.listen(3001, () => {
    console.log("running");
});
