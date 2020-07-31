const Post = require("../models/post");

exports.getPosts = (req, res) => {
    // res.json({
    //     posts: [
    //         {'title' : 'first post'},
    //         {'title' : 'second post'}
    //     ]
    // });
    const posts = Post.find().select("_id title body")
    .then((posts) => {
        // res.status(200).json({
        // we get the same response as 200 is default
        res.json({posts})
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("Creating Post: ", post);
    // post.save((err, result) => {
    //     if(err){
    //         return res.status(400).json({
    //             error : err
    //         })
    //     }
    //     res.status(200).json({
    //         post : result
    //     });
    // });
    post.save().then( result => {
        res.status(200).json({
            post: result
        });
    });
};
