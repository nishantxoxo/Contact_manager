const asyncHandler = require("express-async-handler")


//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req, res) => {
    res.status(200).json({ message: "get all contacts" })
})
const createContact = asyncHandler( async(req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all feilds are mandatory") //this is how u format a error
    }
    res.status(201).json({ message: "create contacts" })
})

const getContact = asyncHandler( async(req, res) => {

    res.status(200).json({ message: `get contact for ${req.params.id}` })
})

const updateContact = asyncHandler( async(req, res) => {
    res.status(201).json({ message: `update contact for ${req.params.id}` })
})


const deleteContact = asyncHandler(async(req, res) => {
    res.status(201).json({ message: `delete contact for ${req.params.id}` })
})


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }