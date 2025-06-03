import fs from "fs";

export default function handler(req, res) {
  const { license } = req.query;
  const db = JSON.parse(fs.readFileSync("database.json"));

  if (db.includes(license)) {
    res.status(200).json({ status: true, license });
  } else {
    res.status(403).json({ status: false, message: "License invalid" });
  }
}
