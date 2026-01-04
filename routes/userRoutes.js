const express  = require ('express'); 
const router   = express.Router();
const User     = require('./../models/User');

// POST route to add a user
router.post('/', async (req, res) => {

    try{
        const data      = req.body 
        const savedUser = new User(data);

        const response  = await savedUser.save();
        console.log('data saved');
        res.status(200).json(response)
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// GET route to get a user
router.get('/:id', async (req, res) => {
    try{
        const data = await User.findById(req.params.id);
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = router;