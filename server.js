const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (images, CSS, etc.)
app.use(express.static("public"));

// Move static assets to public folder
app.use("/crate.png", express.static("crate.png"));
app.use("/demos", express.static("demos"));
app.use("/demo-library.json", express.static("demo-library.json"));
app.use("/apple-library.json", express.static("apple-library.json"));
app.use("/version.json", express.static("version.json"));

// Routes for clean URLs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/details", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "details.html"));
});

app.get("/privacy", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "privacy.html"));
});

app.get("/terms", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "terms.html"));
});

// Handle 404s
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`CrateLink website running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
