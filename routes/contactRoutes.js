const express = require("express")
const router = express.Router();

router.route('/').get( (req, res)=> {
    // res.send("Get all contacts")
    res.status(200).json({message : "get all contacts"})
})

router.route('/').post( (req, res)=> {
    // res.send("Get all contacts")
    res.status(200).json({message : "create contacts"})
})

router.route('/:id').put( (req, res)=> {
    // res.send("Get all contacts")
    res.status(200).json({message : `update contacts ${req.params.id}`})
})

router.route('/:id').delete( (req, res)=> {
    // res.send("Get all contacts")
    res.status(200).json({message : `delete contacts of  ${req.params.id}`})
})

module.exports = router;