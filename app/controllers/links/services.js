const Link = require('../../models/links');
const errorHandler = require('../../helpers/errorHandlers');

const findLinkById = async id => Link.findById(id);

const addLink = async (linkData) => {
  const newLink = new Link(linkData);
  await newLink.save();
};


module.exports = {
  addLink: errorHandler(addLink),
  findLinkById: errorHandler(findLinkById),
};
