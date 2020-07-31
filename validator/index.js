exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', 'title cannot be blank').notEmpty();
    req.check('title', 'length of the title should be between 4 and 150').isLength({
        min: 4,
        max: 150
    });

    // body
    req.check('body', 'body cannot be blank').notEmpty();
    req.check('body', 'length of the body should be between 4 and 2000').isLength({
        min: 4,
        max: 2000
    });

    // check for errors and show the first error as they happen

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((err) => err.msg)[0]
        return res.status(400).json({error: firstError})
    }
    // proceed to next middleware
    next();
}