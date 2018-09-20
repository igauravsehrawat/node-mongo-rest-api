const Link = require('../../../models/links');
const { errorHandler } = require('../../../helpers/errorHandlers');

const createLink = async (linkData) => {
  const newLink = new Link(linkData);
  await newLink.save();
};

const removeLink = async id => Link.findByIdAndRemove(id);

const findAllLinks = async () => Link.find();

const findLinkById = async id => Link.findById(id);

module.exports = {
  createLink: errorHandler(createLink),
  removeLink: errorHandler(removeLink),
  findAllLinks: errorHandler(findAllLinks),
  findLinkById: errorHandler(findLinkById),
};
