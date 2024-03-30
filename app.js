import express from "express"
const app = express();
const port = 3000
app.set('view engine', 'ejs');
const server = app.listen(port,()=>{
    console.log("Node.js is listening to PORT:" + server.address().port)
})

const photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

app.get("/api/photo/list", function(req, res, next){
    res.json(photoList);
});

app.get("/api/photo/:photoId", function(req, res, next){
    var photo;
    for (i = 0; i < photoList.length; i++){
        if (photoList[i].id == req.params.photoId){
            var photo = photoList[i];
        }
    }
    res.json(photo);
    console.log(photo)
});

app.get("/", function(req, res, next){
    res.render("index", {});
});