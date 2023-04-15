const Chance = require("chance")
const chance = new Chance()

function randomEmail(){
    return chance.email();
}

const axios = require("axios")
const FormData = require("form-data")
const { File } = require("file-api")

const pepURl = ""
// const video = new File({
//     path:".pepperoni.mp4"
// })

var formData = new FormData()
// formData.append("name", "Whollip")
// formData.append("email", "whollipingyourmom@gmail.com")
// formData.append("video", )

console.log(randomEmail())

// axios.post(pepURL, formData, {
//     headers: {
//         'Content-type': "multipart/form-data"
//     }
// })