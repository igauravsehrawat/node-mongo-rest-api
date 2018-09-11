const router = require('express').Router();
const sendResponse = require('../../helpers/sendResponse');
const { addLink } = require('./services');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'error';

router.post('/', async (req, res) => {
  // const {linkName, linkAdd} = req.body;
  // validations
  req.check('linkName', 'link name is required').exists().isAlpha().isLength({ min: 5 });
  req.check('linkAdd', 'link address is required').exists();

  const error = req.validationErrors();
  if (error) {
    return sendResponse(res, 400, [], error[0].msg);
  }

  try {
    const linkData = {
      linkName: req.body.linkName,
      linkAdd: req.body.linkAdd,
    };
    await addLink(linkData);
    return sendResponse(res, 200, [], 'data saved successfully');
  } catch (err) {
    logger.error(err);
    return sendResponse(res, 500, [], 'something went wrong');
  }
});

module.exports = addLink;
