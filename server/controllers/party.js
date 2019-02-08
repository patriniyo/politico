import partyModel from '../models/party';

/**
 * Class is controlling parties
 * @exports
 * @class
 */
class Party {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} party object
   */
  createParty(req, res) {
    if (Object.getOwnPropertyNames(req.body).length === 0) {
      return res.status(400).send({
        status: 400,
        error: 'Invalid data'
      });
    }
    if (partyModel.findPartyByName(req.body.name) === undefined) {//check if the party already exist
      const party = partyModel.createParty(req.body);
      return res.status(200).send({
        status: 200,
        data: party
      });
    }
    return res.status(400).send({
      status: 400,
      error: `Party with name ${req.body.name} is already created.`
    });
  }

  findPartyByName(req, res) {
    const data = [];
    const party = partyModel.findPartyByName(req.body.name);
    data.push(party);
    return res.status(200).send({
      status: 200,
      data
    });
  }
  /**
   * @returns {object} returns all parties
   */
  getAllParties(req, res) {
    const parties = partyModel.getAllParties();
    return res.status(200).send({
      status: 200,
      data: parties
    });
  }

  /**
   * @returns {object} returns specifc party
   */
  getSpecificParty(req, res) {
    const data = [];
    const party = partyModel.getSpecificParty(req.params.id);
    if (!party) {
      return res.status(400).send({
        status: 400,
        error: 'Party not found'
      });
    }
    data.push(party);
    return res.status(200).send({
      status: 200,
      data
    });
  }

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated party
   */
  updateParty(req, res) {
    const party = partyModel.getSpecificParty(req.params.id);
    if (!party) {
      return res.status(400).send({
        status: 400,
        error: 'Party not found'
      });
    }
    const updatedParty = partyModel.updateParty(req.params.id, req.body)
    return res.status(200).send({
      status: 200,
      data: updatedParty
    });
  }

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  deleteParty(req, res) {
    const party = partyModel.getSpecificParty(req.params.id);
    if (!party) {
      return res.status(400).send({
        status: 400,
        error: 'Party not found'
      });
    }
    if (partyModel.deleteParty(req.params.id)) {
      return res.status(200).send({
        status: 200,
        data: 'The Party deleted'
      });
    }
  }

}

export default new Party();
