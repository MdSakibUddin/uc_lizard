/* eslint-disable import/no-anonymous-default-export */
// pages/api/user.js

import mysql from 'mysql2/promise';

export default async (req, res) => {
    try {
        const searchValue = req.query.search;

        const connection = mysql.createPool({
            host: 'georges.biomatix.org',
            user: 'weber',
            password: 'weberly',
            database: 'Team_Pogona_Weber',
        });

        const query = `
        SELECT 
            *
        FROM A_specimens
        WHERE
            Species = ? OR Subspecies = ? OR Mark = ? OR mSystem = ? OR PitTag = ?
            OR Sex = ? OR SexBasis = ? OR SexStatus = ? OR Genotype = ? OR GenBasis = ? OR GenStatus = ?
            OR Maturity = ? OR MatBasis = ? OR ClutchID = ? OR IncTemp = ? OR IncVar = ? OR Source = ?
            OR Mother = ? OR Father = ? OR PatBasis = ? OR Collector = ? OR Country = ?
            OR State = ? OR LocLabel = ? OR LocDesc = ? OR LocBasis = ?
            OR LocAccuracy = ? OR Fate = ? OR Museum = ? OR Voucher = ? OR CauseOfDeath = ?
            OR Custodian = ? OR Comments = ? OR Project = ? OR SubProject = ? OR EnteredBy = ?
            OR RecordStatus = ?
        `;
        const query2 = `
        SELECT 
            *
        FROM B_samples
        WHERE
            SpecimenID = ? OR SampleID = ? OR Genus = ? OR Species = ? OR Freezer = ? OR Stem = ?
            OR Box = ? OR Position = ? OR Label = ? OR Tissue = ? OR Medium = ? OR AntiCoag = ?
            OR Storage = ? OR SampleStatus = ? OR SampledBy = ? OR Comments = ? OR Project = ? 
            OR SubProject = ? OR Purpose = ? OR DArTService = ? OR DArTStatus = ?
            OR EnteredBy = ? OR RecordStatus = ? OR VerifiedBy = ?
        `;
        const query3 = `
        SELECT * FROM F_cultures WHERE
            SpecimenID = ? OR CultureID = ? OR AltCultureID = ?
            OR Genus = ?
            OR Species = ?
            OR Storage = ?
            OR Stem = ?
            OR Box = ?
            OR Position = ?
            OR Tissue = ?
            OR SampledBy = ?
            OR Passage = ?
            OR Status = ?
            OR Custodian = ?
            OR Comments = ?
            OR Project = ?
            OR SubProject = ?
            OR EnteredBy = ?
            OR RecordStatus = ?
            OR VerifiedBy = ?
        `;
        const query4 = `
        SELECT * FROM G_genomics WHERE
        SampleID = ?
        OR Genus = ?
        OR Species = ?
        OR Tissue = ?
        OR Molecule = ?
        OR Provider = ?
        OR Platform = ?
        OR Service = ?
        OR Ref = ?
        OR Storage = ?
        OR Filename = ?
        OR Path = ?
        OR Repository = ?
        OR Accession = ?
        OR RepFilename = ?
        OR Comments = ?
        OR Project = ?
        OR SubProject = ?
        OR Purpose = ?
        OR EnteredBy = ?
        OR RecordStatus = ?
        OR VerifiedBy = ?
        

        `;
        const query5 = `
        SELECT * FROM H_cages WHERE
        SpecimenID = ?
        OR Genus = ?
        OR Species = ?
        OR RoomID = ?
        OR NewCageID = ?
        OR Purpose = ?
        OR MovedFrom = ?
        OR DateMoved = ?
        OR MovedBy = ?
        OR Comments = ?       
        OR EnteredBy = ?
        OR RecordStatus = ?
        OR VerifiedBy = ?
        
        `;
        let [rows1] = await connection.execute(query, [
            ...Array(37).fill(searchValue),
        ]);

        let [rows2] = await connection.execute(query2, [
            ...Array(24).fill(searchValue),
        ]);
        let [rows3] = await connection.execute(query3, [
            ...Array(20).fill(searchValue),
        ]);
        let [rows4] = await connection.execute(query4, [
            ...Array(22).fill(searchValue),
        ]);
        let [rows5] = await connection.execute(query5, [
            ...Array(13).fill(searchValue),
        ]);
        await connection.end();
        res.json({
            result1: rows1,
            result2: rows2,
            result3: rows3,
            result4: rows4,
            result5: rows5,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error connecting to db', error });
    }
};
