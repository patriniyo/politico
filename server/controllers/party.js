import party from '../models/party';

/**
 * Class is controlling parties
 * @exports
 * @class
 */
class Party {
  createParty(req, res) {
    const retrievedParty = party.getByName(req.body.name);
    if (retrievedParty === undefined) {
      const savedParty = party.createParty(req.body);
      return res.status(201).send({
        status: 201,
        data: [{ savedParty }]
      });
    }
    return res.status(400).send({
      status: 400,
      error: `Party with name ${req.body.name} is already created.`
    });
  }
}

export default new Party();
