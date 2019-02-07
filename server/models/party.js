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
}

export default new Party();
