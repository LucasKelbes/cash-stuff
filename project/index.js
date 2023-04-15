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
  const fileName = email + chance.integer({ min: 0 })

  var formData = new FormData()
  formData.append("name", "Floopsy Noodle")
  formData.append("email", email)
  formData.append("video", videoFile, fileName)
  const response = await axios.post(pepperoniUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: () => {
        process.stdout.write(".")
      }
  })
  console.log(response.data.code)
}

upload().then((code, err) => {
    console.log(code)
    if(err){
        console.log(err)
    }
})