const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

// const handler = (req,res) => {
//     res.send('Hello from Node');
// }

// app.get('/',handler);

app.get("/", (req, res) => {
  res.send("Hello from my first ever node");
});

const users = [
  { id: 0, name: "shabana", email: "shabana@gmail.com", phone: "017888888" },
  { id: 1, name: "shabnur", email: "shabanur@gmail.com", phone: "017888888" },
  {
    id: 2,
    name: "shrabanti",
    email: "shrabanti@gmail.com",
    phone: "017888888",
  },
  {
    id: 3,
    name: "shuchorita",
    email: "shuchorita@gmail.com",
    phone: "017888888",
  },
  { id: 4, name: "sonia", email: "sonia@gmail.com", phone: "017888888" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  //use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  //res.send(JSON.stringify(newUser));
  res.json(newUser);
});

//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy mangoes");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
