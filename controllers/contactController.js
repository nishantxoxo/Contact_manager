const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find();
   
    res.status(200).json(contacts)
})
const createContact = asyncHandler( async(req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all feilds are mandatory") //this is how u format a error
    }
    const contact  = await Contact.create({
        name: name, email: email, phone: phone
    })
    res.status(201).json(contact)
})

const getContact = asyncHandler( async(req, res) => {
    const contact  = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
})

const updateContact = asyncHandler( async(req, res) => {
    const contact  = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(201).json(updatedContact)
})


const deleteContact = asyncHandler(async(req, res) => {
    const contact  = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    await Contact.remove(contact)
    res.status(201).json(contact)
})


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }