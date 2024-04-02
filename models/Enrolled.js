const mongoose = require('mongoose');
const ar = 'August 20, 2021 22:31:30 GMT-03:00';

const EnrolledSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    cellphone: {
        type: Number,
        required: true
    },
    cellule: {
        type: String,
        required: true
    },
    annex: {
        type: String,
        required: true
    },
    guest: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Enrolled', EnrolledSchema)