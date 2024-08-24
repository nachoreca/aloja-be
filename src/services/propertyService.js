const Property = require('../models/property');

class PropertyService {
  async createProperty(data) {
    return await Property.create(data);
  }

  async getProperties() {
    return await Property.findAll();
  }

  async getPropertyById(id) {
    return await Property.findByPk(id);
  }

  async updateProperty(id, data) {
    const property = await Property.findByPk(id);
    if (!property) {
      throw new Error('Property not found');
    }
    return await property.update(data);
  }

  async deleteProperty(id) {
    const property = await Property.findByPk(id);
    if (!property) {
      throw new Error('Property not found');
    }
    return await property.destroy();
  }
}

module.exports = new PropertyService();
