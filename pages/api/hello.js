// pages/api/user.js

import nextConnect from "next-connect";
import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    const [rows, fields] = await connection.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
});

export default handler;
