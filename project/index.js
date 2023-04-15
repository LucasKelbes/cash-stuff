const Chance = require("chance")
const axios = require("axios")
const FormData = require("form-data")
const path = require("path")
const fs = require("fs").promises

const chance = new Chance()

function randomEmail(){
    return chance.email();
}

const upload = async () => {
  const videoPath = path.join(__dirname, "./pepperoni-video.mp4")

  const pepperoniUrl = 'https://us-central1-caseys-pepperoni.cloudfunctions.net/pepperoniBackend/upload/version2'
  const videoFile = await fs.readFile(videoPath);

  const email = randomEmail()
  const name = chance.name()
  const fileName = email + chance.integer({ min: 0 })

  var formData = new FormData()
  formData.append("name", name)
  formData.append("email", email)
  formData.append("video", videoFile, fileName)
  console.log("Sending request...", {name, email, fileName})
  const response = await axios.post(pepperoniUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
  return response.data.code
}

// This code deletes the contents of the codes file before generating new ones
// fs.writeFile(__dirname + "/codes.txt", "", (err) => {
//     if(err){
//         console.error(err)
//     }
// })

for(var i = 0; i < 50; i++){
    upload().then((code, err) => {
        console.log(code)
        if(err){
            console.error(err)
        }

        fs.appendFile(__dirname + "/codes.txt", code + "\n", (err) => {
            if(err){
                console.error(err)
            }
        })
    })
}

