const Link = require('../../models/links');
const { errorHandler } = require('../../helpers/errorHandlers');

const addLink = async (linkData) => {
  const newLink = new Link(linkData);
  await newLink.save();
};

const deleteLink = async id => Link.findByIdAndRemove(id);

const findAllLinks = async () => Link.find();

const findLinkById = async id => Link.findById(id);

module.exports = {
  addLink: errorHandler(addLink),
  deleteLink: errorHandler(deleteLink),
  findAllLinks: errorHandler(findAllLinks),
  findLinkById: errorHandler(findLinkById),
};
