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
    console.log('testing', req.body );
    console.log('user id is', req.user.id)
    const queryText = `INSERT INTO "song" ("user_id", "title", "artist", "album", "description")
                       VALUES (${req.user.id}, $1, $2, $3, $4)`;
    pool.query(queryText, [newSong.title, newSong.artist, newSong.album, newSong.description])
    .then((result) => {
      res.sendStatus(200);
    }).catch(error => {
      console.log('error adding a new song', error);
      res.sendStatus(500)
    })
  });

//update the song post
router.put('/:id', (req, res) => {
  // let songId = req.params.id;
  // let songArtist = req.body.artist;
  // let songAlbum = req.body.album;
  // let songDescription = req.body.description;
  console.log(req.body, req.params.id);
  const queryText = `UPDATE "song" SET 
                    "title" = $1, 
                    "artist" = $2, 
                    "album" = $3,
                    "description" = $4
                    WHERE 'id' = $5; `;
  pool.query(queryText, 
    [req.body.title, 
      req.body.artist, 
      req.body.album, 
      req.body.description, 
      req.params.id])
      .then((results) => {
        console.log('im working..i think?')
        res.sendStatus(200);
      }).catch((error) => {
        console.log(error)
        res.sendStatus(500);
      });
})

  // delete song




module.exports = router;