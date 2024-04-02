const express = require('express');
const router = express.Router();
const enrolledController = require('../controllers/enrolledController')

//api/productos
router.post('/', enrolledController.createEnrolled);
router.get('/', enrolledController.getEnrolleds);
router.put('/:id', enrolledController.updateEnrolled);
router.get('/:id', enrolledController.getEnrolled);
router.delete('/:id', enrolledController.deleteEnrolled);

module.exports = router;