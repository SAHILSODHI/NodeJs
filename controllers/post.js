exports.getPost = (req, res) => {
    res.json({
        posts: [
            {'title' : 'first post'},
            {'title' : 'second post'}
        ]
    });
};