import joi from 'joi';
import officeModel from '../models/office';

/**
 * @class
 * @description controls endpoints for offices
 */
class Offices {
  /**
   * @augments res
   * @augments req
   * @returns response
   */
  createPoliticalOffice(req, res) {
    const schema = joi.object().keys({
      name: joi.string().min(2).required(),
      type: joi.string().min(2).required()
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

    if (officeModel.findOfficeByName(req.body.name) === undefined) {//check if the party already exist
      const office = officeModel.createPoliticalOffice(req.body);
      return res.status(201).send({
        status: 201,
        data: [office]
      });
    }
    return res.status(400).send({
      status: 400,
      error: `Polical Office with name ${req.body.name} is already created.`
    });
  }

  /**
   * @function
   * @description controlls getting all political offices
   * @argument req
   * @argument res
   */

  getAllPoliticalOffices(req, res) {
    const offices = officeModel.getAllPoliticalOffices();
    return res.status(200).send({
      status: 200,
      data: offices
    });
  }
  /**
   * @function
   * @description retrieves a specific office by id
   * @argument res
   * @argument req
   * @returns {object} an office
   */

  getSpecificOffice(req, res) {
    const data = [];
    const office = officeModel.getSpecificOffice(req.params.id);
    if (!office) {
      return res.status(404).send({
        status: 404,
        error: 'Office not found'
      });
    }
    data.push(office);
    return res.status(200).send({
      status: 200,
      data
    });
  }
}
export default new Offices();