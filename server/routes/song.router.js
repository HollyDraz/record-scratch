const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//

router.get('/', (req, res) => {
    // Find all songs and return them 
    pool.query('SELECT * FROM "song";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/song', error);
        res.sendStatus(500);  
    });
})
  
  /**
   * Create new song to add to the database 
   */
router.post('/', (req, res) => {
    const newSong = req.body;
    const queryText = `INSERT INTO "songs" (""title", "artist", "album", "description")
                    VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [newSong.title, newSong.artist, newSong.album, newSong.description])
    .then((result) => {
      res.sendStatus(200);
    }).catch(error => {
      console.log('error adding a new song', error);
      res.sendStatus(500)
    })
  });



module.exports = router;