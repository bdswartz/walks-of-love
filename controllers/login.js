const router = require('express').Router();
const {Owner, Walker} = require('../../models');

router.post('/login', async(req, res) => {
    const ownerData = await Owner.findOne({
        where: {
            email: req.body.email
        }
    })
    const walkerData = await Walker.findOne({
        where: {
            email: req.body.email
        }
    })

    if(!ownerData && !walkerData) {
        res.status(400).json({message: 'Incorrect email trying to log in'})
    }

    //to do valid password situation for making sure they give you the correct password


    if(!ownerData){
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = walkerData.id;
            req.session.email = walkerData.email;
            req.session.isWalker = true;
        })

        return res.status(200).json({ user: walkerData, message: 'logged in as walker'})
    }
    
    req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = ownerData.id;
        req.session.email = ownerData.email;
        req.session.isWalker = false;
    })
    
    console.log(ownerData, req.session)
    return res.status(200).json({ user: ownerData, message: 'logged in as owner'})
})

module.exports = router;