// TODO: file name plural or singular

const errorHandler = fn => (...params) => fn(...params).catch((err) => {
  console.log('Error occured', err);
  // TODO: Add sentry or notification service
});

module.exports = {
  errorHandler,
};
