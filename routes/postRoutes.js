const express  = require ('express'); 
const router   = express.Router();
const Post     = require('./../models/Post');

// CREATE POST FOR A USER
router.post('/', async (req, res) => {
    try {
      const post      = new Post(req.body);
      const savedPost = await post.save();
      res.status(201).json(savedPost);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // GET ALL POSTS OF A USER
  router.get('/user/:userId', async (req, res) => {
    try {
      const posts = await Post.find({ user: req.params.userId })
        .populate('user');
  
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });  

module.exports = router;