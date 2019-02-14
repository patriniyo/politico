import partyModel from '../models/party';
import joi from 'joi';
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
    const schema = joi.object().keys({
      name: joi.string().min(2).required(),
      hqAddress: joi.string().min(2).required(),
      logoUrl: joi.string().min(3).required()
    });

    const validationError = joi.validate(req.body, schema, {
      abortEarly: false
    });

    if (validationError.error != null) {
      const errors = [];
      for (let index = 0; index < validationError.error.details.length; index++) {
        errors.push(validationError.error.details[index].message);
      }

      return res.status(400).send({
        status: res.statusCode,
        error: errors
      });
    }
    if (partyModel.findPartyByName(req.body.name) === undefined) {// check if the party already exist
      const party = partyModel.createParty(req.body);
      return res.status(201).send({
        status: 201,
        data: [party]
      });
    }
    return res.status(400).send({
      status: 400,
      error: `${req.body.name} already exists`
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
      return res.status(404).send({
        status: 404,
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
    const schema = joi.object().keys({
      name: joi.string().min(2).required(),
      hqAddress: joi.string().min(2).required(),
      logoUrl: joi.string().min(3).required()
    });

    const validationError = joi.validate(req.body, schema, {
      abortEarly: false
    });

    if (validationError.error != null) {
      const errors = [];
      for (let index = 0; index < validationError.error.details.length; index++) {
        errors.push(validationError.error.details[index].message);
      }

      return res.status(400).send({
        status: res.statusCode,
        error: errors
      });
    }
    const party = partyModel.getSpecificParty(req.params.id);
    if (!party) {
      return res.status(404).send({
        status: 404,
        error: 'Party not found'
      });
    }
    const updatedParty = partyModel.updateParty(req.params.id, req.body);
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
      return res.status(404).send({
        status: 404,
        error: 'Party not found'
      });
    }
    if (partyModel.deleteParty(req.params.id)) {
      return res.status(200).send({
        status: 200,
        error: 'The Party deleted'
      });
    }
  }
}

export default new Party();
