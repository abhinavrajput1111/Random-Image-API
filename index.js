import express, { json, response } from "express";
import axios from "axios";

async function getImage() {
    const res = await axios.get("https://picsum.photos/200", { responseType: 'arraybuffer' })
    return res.data;   
}

const app = express();

let port = 6969;
let hostname = "127.0.0.1";
app.use(express.json());
// getImage();

app.get("/images", async(request, response) => {
   try{
    let imageData = await getImage();
       response.set("Content-Type", "image/jpeg");
       console.log(imageData);
       response.send(imageData);
    }
    
   catch (err) {

       if (err) {
           console.log(err);
       }
       
       response.status(400).send("there is some error")
    }
})

app.listen(port, () => {
    console.log("server started at port " + port);
})
