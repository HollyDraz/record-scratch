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
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
  });



module.exports = router;