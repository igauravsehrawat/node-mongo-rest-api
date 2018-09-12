const getAllLinks = require('express').Router();
const { findAllLinks } = require('./services/db');
const sendResponse = require('../../helpers/sendResponse');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'error';

getAllLinks.get('/', async (req, res) => {
  try {
    const data = await findAllLinks();
    return sendResponse(res, 200, data, 'Get data successfully');
  } catch (err) {
    logger.error(err);
    return sendResponse(res, 404, [], 'data not found');
  }
});

module.exports = getAllLinks;
