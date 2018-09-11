const router = require('express').Router();
const { deleteLink } = require('./services');
const sendResponse = require('../../helpers/sendResponse');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'error';

router.delete('/:id', async (req, res) => {
  // validate id
  req.check('id', 'id is required/invalid').exists().isValidObjectId();

  const error = req.validationErrors();
  if (error) {
    return sendResponse(res, 400, [], error[0].msg);
  }

  try {
    const { id } = req.params;
    await deleteLink(id);
    return sendResponse(res, 200, [], 'Link deleted successfully');
  } catch (err) {
    logger.error(err);
    return sendResponse(res, 500, [], 'something went wrong');
  }
});

module.exports = deleteLink;
