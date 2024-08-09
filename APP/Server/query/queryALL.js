// 通用的資料查詢函數

const db = require('../config/db');

function queryDatabase(tableName, res){
    db.query(`SELECT * FROM ${tableName}`, (err, results) => {
        if (err) {
            console.error(`Failed to query ${tableName}:`, err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
};

function queryMatchingData(templeID, res){
    const query = `SELECT MC.tID AS TEMPLE_ID, MC.wID AS WELFARE_ID, MC.MATCHING_STATUS, SW.NAME, SW.IMAGE, SW.ADDRESS
                   FROM 媒合 AS MC
                   JOIN 社福機構 AS SW 
                       ON SW.wId = MC.wId
                   WHERE tID = ?`;

    db.query(query, [templeID], (err, results) => {
            if(err){
                console.error(err);
                console.error(`Failed to query 媒合資訊`);
                res.status(500).json({error: "Internal Server Error"});
                return;
            }
            res.json(results);
        }
    )
}

module.exports = {
    queryDatabase,
    queryMatchingData
};