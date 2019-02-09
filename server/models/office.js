/**
 * @class
 * @description models Political Office
 */

class Offices {
  constructor() {
    this.offices = [];
  }

  /**
   * @function
   * @description creates a political office
   * @argument data a new political office
   * @returns {object} representing office
   */
  createPoliticalOffice(data) {
    const id = this.offices.length === 0 ? 1 : this.offices[this.offices.length - 1].id + 1;
    const newPoliticalOffice = {
      id,
      type: data.type,
      name: data.name
    };
    this.offices.push(newPoliticalOffice);
    return newPoliticalOffice;
  }

  findOfficeByName(officeName) {
    return this.offices.find(office => office.name === officeName);
  }

  /**
   * @function
   * @description selects all political offices
   * @returns {object} representing all offices
   * @argument data
   */

  getAllPoliticalOffices(data) {
    return this.offices;
  }

  /**
   * @method
   * @description selects specific office
   * @argument id
   * @returns {object} an office
   */
  getSpecificOffice(id) {
    return this.offices.find(office => office.id == id);
  }
}

export default new Offices();
