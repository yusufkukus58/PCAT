const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require('method-override');
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const Photo = require("./models/Photo");
const photoController=require('./controllers/photoController');
const pageController=require('./controllers/pageController');

const app = express();

//connect db
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
});

app.set("view engine", "ejs");
//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:['POST','GET']
}));
app.get("/", photoController.getAllPPhotos );
app.get("/photos/:id", photoController.getPhoto);
app.post("/photos", photoController.createPhoto);
app.delete('/photos/id',photoController.deletePhoto)

app.get("/about", pageController.getAboutPage );
app.get("/add", pageController.getAddPage);

app.get('/photos/edit/:id',pageController.getEditPage);



const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
