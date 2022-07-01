module.exports = {
  dbUrl:
    process.env.ENV === 'DEV'
      ? process.env.LOCAL_MONGODB_URI
      : process.env.REMOTE_MONGODB_URI,
};
