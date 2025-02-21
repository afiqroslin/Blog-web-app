import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// Post array
const posts = [];

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// Multer middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});


// Home page
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts});
  });

// Post page
app.get("/post", (req, res) => {

  res.render("post.ejs");
  });


// Submit posts
app.post("/posts", upload.single("bimage"), (req, res) => {

  const { btitle, bcontent } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  const newPost = {
    title: btitle,
    content: bcontent,
    image: imagePath,
    date: new Date().toLocaleString(),
  };

  console.log(imagePath);
  posts.push(newPost);

  res.redirect("/");
});


// Delete posts
app.delete("/:id", (req, res) => {
  const {id} = req.params;

  posts.splice(id, 1);
  res.sendStatus(200);

});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

