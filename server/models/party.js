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
    const id = this.parties.length === 0 ? 1 : this.parties[this.parties.length - 1].id + 1;
    const newParty = {
      id,
      name: data.name,
      hqAddress: data.hqAddress,
      logoUrl: data.logoUrl
    };
    this.parties.push(newParty);
    return newParty;
  }
  /**
   * @returns {object} returns all parties
   */

  getAllParties() {
    return this.parties;
  }

  /**
   * @returns {object} returns specific party
   */
  getSpecificParty(id) {
    return this.parties.find(party => party.id == id);
  }

  /**
   * 
   * @param {id} id
   * @param {object} data 
   */

  updateParty(id, data) {
    const party = this.getSpecificParty(id);
    const index = this.parties.indexOf(party);
    this.parties[index].id = data['id'] || party.id;
    this.parties[index].name = data['name'] || party.name;
    this.parties[index].hqAddress = data['hqAddress'] || party.hqAddress;
    this.parties[index].logoUrl = data['logoUrl'] || party.logoUrl;
    return this.parties[index];
  }

  /**
   * 
   * @param {id} id 
   */
  deleteParty(id) {
    const party = this.getSpecificParty(id);
    const index = this.parties.indexOf(party);
    this.parties.splice(index, 1);
    return true;
  }

  findPartyByName(PartyName) {
    return this.parties.find(party => party.name === PartyName);
  }
}

export default new Party();
