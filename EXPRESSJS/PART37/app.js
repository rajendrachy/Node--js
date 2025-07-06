import express from "express";
import { PORT } from "./env.js";

const app = express(); // create a instance


app.get("/", (req, res) => { // / -> path
  res.send("<h1>Hello World Rajendra</h1>");

})

app.get("/about", (req, res) => res.send("<h3> This is About page </h3>"))



app.get("/contact", (req, res) => { // / -> path
  return res.send(`
    <div class="container">
      <h1>URL Shortener</h1>
      <form method="POST" action="/shorten">
        <label for="url">Original URL:</label>
        <input type="url" id="url" name="url" required />
        <label for="shortCode">Short Code:</label>
        <input type="text" id="shortCode" name="shortCode" required />
        <button type="submit">Create Short URL</button>
      </form>
    </div>
    `);
})

// console.log(process);



// const PORT = 3000; 



// ------------this dont need in part 40--------const PORT = process.env.PORT || 3001;--------------
// const PORT = process.env.PORT || 3001; // using a  environment variable makeing a port no private and (||3001) is adding default port number if your want to add this add or not add

app.listen(PORT, () => {
  console.log(`Server is running at port : http:localhost:${PORT}`);
})





