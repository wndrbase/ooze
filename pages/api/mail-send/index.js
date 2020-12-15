import nodemailer from "nodemailer"
import geoip from "geoip-lite"
import getExpr from "email-regex"
import { getName } from "country-list"
import blacklist from "./email-blacklist.json"
import auth from "./mail-auth-config.json"

const emailRegex = getExpr({ exact: true })
const transport = nodemailer.createTransport({ auth, service: "gmail" })

function getPayload({ name, email, text, location }) {
  const address = `${name} <${email}>`
  const country = location && location.country && getName(location.country)
  const message = [
    `Name: ${name}`,
    `E-mail: ${email}`,
    country && `Country: ${country}`,
    "Text:\n",
    text,
  ]

  return {
    from: address,
    replyTo: address,
    to: auth.user,
    text: message.filter(Boolean).join("\n"),
  }
}

export default function (req, res) {
  if (req.method !== "POST") {
    return res.send(405).send("Method not allowed")
  }

  const { name, email, text } = req.body
  const { requestType } = req.query

  if (!name || !email || !text) {
    return res.status(400).send("Some fields are missing")
  }

  if (emailRegex.test(email) === false) {
    return res.status(400).send("Invalid email address")
  }

  if (requestType === "business") {
    const [, domain] = email.split("@")
    if (blacklist.includes(domain)) {
      res.status(400).send("Forbidden email address ", domain)
    }
  }

  const payload = getPayload({
    name,
    email,
    text,
    location: geoip.lookup(req.ip),
  })

  console.log("Sending an email with payload", payload)

  transport.sendMail(payload, (error) =>
    error ? res.status(503).json({ error }) : res.send(200),
  )
}
