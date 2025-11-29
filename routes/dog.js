const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res)=> {
    const url = `https://dog.ceo/api/breeds/image/random`;
   
    request(url,function (error, response, body){
        if (!error){
            const data = JSON.parse(body);
            const match = data.message.match(/breeds\/([^\/]+)\//);
            const breed = match ? match[1] : null;
            res.render('dog', { title: breed, imageURL: data.message});
        } else {
            res.render('error', { message: 'not found', error:{status: 404, stack:"not found"} });
        }
    })
})

module.exports = router;