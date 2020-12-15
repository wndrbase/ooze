const AWS = require("aws-sdk")
const fs = require("fs")

const imagesFolder = "images"
const Config = {
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || "ooze.design",
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY || "AKIA4DHTHDAINI23EQUZ",
  S3_SECRET:
    process.env.S3_SECRET || "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",
}

function retrieveObject(bucketName, fileName) {
  s3.getObject({ Bucket: bucketName, Key: fileName }, (err, data) => {
    if (err) throw err

    fs.writeFile(`${imagesFolder}/${fileName}`, data.Body, () =>
      console.log("Retrieved from S3: " + fileName),
    )
  })
}

/**
 * This script fetches all the objects from the specified S3 bucket
 * so you can store lossless images in S3 and fetch them prior to build
 * to be optimized by Next plugins
 */
Object.keys(Config).forEach((key) => {
  if (!Config[key]) {
    throw new Error(`Environment variable ${key} is not set!`)
  }
})

AWS.config.update({
  accessKeyId: Config.S3_ACCESS_KEY,
  secretAccessKey: Config.S3_SECRET,
})

const s3 = new AWS.S3()

if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder)
}

s3.listObjects({ Bucket: Config.S3_BUCKET_NAME }, function (err, data) {
  if (err) throw err

  console.log(
    `${data.Contents.length} objects found in ${Config.S3_BUCKET_NAME} bucket`,
  )

  data.Contents.forEach((currentObject) => {
    const fileName = currentObject.Key

    if (!fs.existsSync(`${imagesFolder}/${fileName}`)) {
      retrieveObject(Config.S3_BUCKET_NAME, fileName)
    }
  })
})
