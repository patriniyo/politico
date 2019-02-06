/**
 * Class is representing parties
 * @exports
 * @class
 */
class Party {
  constructor() {
    this.parties = [];
  }

  /**
   * Create new party
   * @param {Object} data - Party
   * @returns {Object} Some data of a new party
   */
  createParty(data) {
    const party = data;
    const id = this.parties.length === 0 ? 1 : this.parties[this.parties.length - 1].id + 1;
    party.createdOn = new Date();
    party.id = id;
    this.parties.push(data);
    return { id: party.id, name: party.name };
  }

  /**
   * Get party by name
   * @param {String} name - Party name
   */
  getByName(name) {
    const data = this.parties.find(party => party.name === name);
    return data;
  }
}

export default new Party();
