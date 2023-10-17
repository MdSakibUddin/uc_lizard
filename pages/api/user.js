// pages/api/user.js

import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "georges.biomatix.org",
  user: "weber",
  password: "weberly",
  database: "Team_Pogona_Weber",
});

export default async (req, res) => {
  try {
    const [rows, fields] = await connection.query("SELECT * FROM H_cages");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};
