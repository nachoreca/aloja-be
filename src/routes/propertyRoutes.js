const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.post('/properties', propertyController.createPropertyHandler);
router.get('/properties', propertyController.getAllPropertiesHandler);
router.get('/properties/:id', propertyController.getPropertyByIdHandler);
router.put('/properties/:id', propertyController.updatePropertyHandler);
router.delete('/properties/:id', propertyController.deletePropertyHandler);

module.exports = router;
