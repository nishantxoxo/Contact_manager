//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = async (req, res) => {
    res.status(200).json({ message: "get all contacts" })
}
const createContact = async(req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all feilds are mandatory") //this is how u format a error
    }
    res.status(201).json({ message: "create contacts" })
}

const getContact = async(req, res) => {

    res.status(200).json({ message: `get contact for ${req.params.id}` })
}

const updateContact = async(req, res) => {
    res.status(201).json({ message: `update contact for ${req.params.id}` })
}


const deleteContact = async(req, res) => {
    res.status(201).json({ message: `delete contact for ${req.params.id}` })
}


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }