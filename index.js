import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Post array
const posts = [];

// Home page
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts});
  });

// Post page
app.get("/post", (req, res) => {

  res.render("post.ejs");
  });


// Submit posts
app.post("/posts", (req, res) => {

  const { btitle, bcontent, bimage } = req.body;

  const newPost = {
    title: btitle,
    content: bcontent,
    image: bimage,
    date: new Date().toLocaleString(),
  };

  console.log(bimage);
  posts.push(newPost);

  res.redirect("/");
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

