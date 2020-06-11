const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(cors());

morgan.token("body", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :response-time ms - :res[content-length] :body")
);

let persons = [
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];
// https://stackoverflow.com/questions/33593676/how-to-get-timezone-string-from-javascript-date-object

let x = new Date();

let tz = x.toTimeString().match(/\((.+)\)/)[1];

let month = x.getMonth() + 1;
month = month < 10 ? "0" + month : month.toString();

let date = x.getDate() < 10 ? "0" + x.getDate() : x.getDate().toString();

let hour = x.getHours() < 10 ? "0" + x.getHours() : x.getHours().toString();

let min =
  x.getMinutes() < 10 ? "0" + x.getMinutes() : x.getMinutes().toString();

let sec =
  x.getSeconds() < 10 ? "0" + x.getSeconds() : x.getSeconds().toString();

let output =
  month +
  ":" +
  date +
  ":" +
  x.getFullYear() +
  " " +
  hour +
  ":" +
  min +
  ":" +
  sec +
  " " +
  tz;

app.get("/info", (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p> \n
            <p>${output}</p>`);
});

const generateId = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name && !body.number) {
    return response.status(400).json({
      error: "name and number missing",
    });
  }
  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }

  if (persons.some((person) => person.name === body.name)) {
    return response.status(400).json({
      error: "person already exists",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(700),
  };

  persons = persons.concat(person);

  response.json(person);
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
