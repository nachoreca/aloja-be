const property = require('../models/Property');

class PropertyService {
  async createProperty(data) {
    return await property.create(data);
  }

  async getProperties() {
    return await property.findAll();
  }

  async getPropertyById(id) {
    return await property.findByPk(id);
  }

  async updateProperty(id, data) {
    const property = await property.findByPk(id);
    if (!property) {
      throw new Error('Property not found');
    }
    return await property.update(data);
  }

  async deleteProperty(id) {
    const property = await property.findByPk(id);
    if (!property) {
      throw new Error('Property not found');
    }
    return await property.destroy();
  }
}

module.exports = new PropertyService();
