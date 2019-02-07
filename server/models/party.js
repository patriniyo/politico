/**
 * Class represents party
 * @exports
 * @class
 */
class Party {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.parties = [];
  }

  /**
   * Create new party
   * @param {Object} data
   *
   * @returns {Object} party object
   */
  createParty(data) {
    const newParty = {
      id: 1,
      name: data.name,
      hqAddress: data.hqAddress,
      logoUrl: data.logoUrl
    };
    this.parties.push(newParty);
    return newParty;
  }

  /**
   * Get party by name
   * @param {String} name - Party name
   */
  getByName() {

  }
}

export default new Party();
