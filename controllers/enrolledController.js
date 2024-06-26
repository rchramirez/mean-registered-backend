const Enrolled = require("../models/Enrolled");


exports.createEnrolled = async (req, res) => {
    try {
        let enrolled;

        enrolled = new Enrolled(req.body);

        enrolled.age = _calculateAge(req.body.birthDate);

        await enrolled.save();
        res.send(enrolled);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was a mistake')
    }
}

exports.getEnrolleds = async (req, res) => {
    try {
        const enrolleds = await Enrolled.find();
        res.json(enrolleds);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was a mistake');
    }
}

exports.updateEnrolled = async (req, res) => {
    try {
        const { name, lastName, birthDate, cellphone, cellule, annex, guest, busNumber } = req.body;
        let enrolled = await Enrolled.findById(req.params.id);

        if(!enrolled) {
            res.status(404).json({ msg: 'Enrolled not found' });
        }

        enrolled.name = name;
        enrolled.lastName = lastName;
        enrolled.birthDate = birthDate;
        enrolled.cellphone = cellphone;
        enrolled.cellule = cellule;
        enrolled.annex = annex;
        enrolled.guest = guest;
        enrolled.busNumber = busNumber;

        enrolled.age = _calculateAge(birthDate);

        enrolled = await Enrolled.findOneAndUpdate({ _id: req.params.id }, enrolled, { new: true });
        res.json(enrolled);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was a mistake');
    }
}

exports.getEnrolled = async (req, res) => {
    try {
        let enrolled = await Enrolled.findById(req.params.id);

        if(!enrolled) {
            res.status(404).json({ msg: 'Enrolled not found' });
        }

        res.json(enrolled);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was a mistake');
    }
}

exports.deleteEnrolled = async (req, res) => {
    try {
        let enrolled = await Enrolled.findById(req.params.id);

        if(!enrolled) {
            res.status(404).json({ msg: 'Enrolled not found' });
        }

        await Enrolled.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Enrolled deleted successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was a mistake');
    }
}

function _calculateAge(birthDate) {
    const dateParts = birthDate.split("-");
    return Math.floor((new Date() - new Date(Date.UTC(dateParts[2], dateParts[1]-1, dateParts[0])).getTime()) / 3.15576e+10);
}