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
    const searchQuery = `
        (SELECT AltSpecimenID AS result FROM A_specimens WHERE AltSpecimenID LIKE ? OR Status LIKE ? OR Priority LIKE ? OR Category LIKE ? OR Family LIKE ? OR ... )
        UNION
        (SELECT SpecimenID AS result FROM B_samples WHERE SpecimenID LIKE ? OR SampleID LIKE ? OR Genus LIKE ? OR Species LIKE ? OR ...)
        UNION
        (SELECT ClutchID AS result FROM C_clutches WHERE ClutchID LIKE ? OR AltClutchID LIKE ? OR Genus LIKE ? OR Species LIKE ? OR ...)
        UNION
        (SELECT Record_ID AS result FROM D_metrics WHERE SpecimenID LIKE ? OR Genus LIKE ? OR Species LIKE ? OR ...)
        UNION
        (SELECT RefID AS result FROM E_sextests WHERE SpecimenID LIKE ? OR Genus LIKE ? OR Species LIKE ? OR ...)
        UNION
        (SELECT SpecimenID AS result FROM F_cultures WHERE SpecimenID LIKE ? OR CultureID LIKE ? OR Genus LIKE ? OR ...)
        UNION
        (SELECT Key AS result FROM G_genomics WHERE SampleID LIKE ? OR Genus LIKE ? OR Species LIKE ? OR ...)
        UNION
        (SELECT RecNo AS result FROM H_cages WHERE SpecimenID LIKE ? OR Genus LIKE ? OR Species LIKE ? OR ...)
        UNION
        (SELECT RefID AS result FROM I_treatments WHERE SpecimenID LIKE ? OR Genus LIKE ? OR Species LIKE ? OR ...)
        UNION
        (SELECT Ref AS result FROM Z_cagelist WHERE Room LIKE ? OR Cage LIKE ?)
        UNION
        (SELECT UC_ID AS result FROM Z_freezerlist WHERE UC_ID LIKE ? OR Freezer LIKE ?)
    `;

    const queryParams = Array(120).fill(`%${searchValue}%`); // This should be the total number of columns you're searching across all tables

    db.query(searchQuery, queryParams, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error." });
      }
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};
