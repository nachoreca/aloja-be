const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} = require('../services/propertyService');

const services = require('../services/propertyService');

const errorHandler = require('../utils/errorHandler');

const createPropertyHandler = async (req, res) => {
  try {
    // const property = await createProperty(req.body, req.user.id);
    const property = await createProperty(req.body);
    res.status(201).json(property);
  } catch (error) {
    //errorHandler(res, error);
    console.log(error);
  }
};

const getAllPropertiesHandler = async (req, res) => {
  try {
    const properties = await services.getAllProperties;
    res.json(properties);
  } catch (error) {
    //errorHandler(res, error);
    console.log(error);
  }
};

const getPropertyByIdHandler = async (req, res) => {
  try {
    const property = await getPropertyById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    //errorHandler(res, error);    
    console.log(error);
  }
};

const updatePropertyHandler = async (req, res) => {
  try {
    const property = await updateProperty(req.params.id, req.body, req.user.id);
    res.json(property);
  } catch (error) {
    //errorHandler(res, error);
    console.log(error);
  }
};

const deletePropertyHandler = async (req, res) => {
  try {
    const message = await deleteProperty(req.params.id, req.user.id);
    res.json(message);
  } catch (error) {
    //errorHandler(res, error);
    console.log(error);
  }
};

module.exports = {
  createPropertyHandler,
  getAllPropertiesHandler,
  getPropertyByIdHandler,
  updatePropertyHandler,
  deletePropertyHandler
}
