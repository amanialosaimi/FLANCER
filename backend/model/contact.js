const mongoose = require('mongoose')


/* Contact Schema */
const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    message: String,
},
{ timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
)


/* Create Model From Schema */
const ContactModel = mongoose.model('Contact', contactSchema)

/* Export Model */
module.exports = ContactModel
