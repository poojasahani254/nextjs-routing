const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'vercel-admin-user',
        mongodb_password: 'n6Sqk7ZbWnOJjiVm',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'books-dev',
      }
    };
  }

  return {
    env: {
      mongodb_username: 'vercel-admin-user',
      mongodb_password: 'n6Sqk7ZbWnOJjiVm',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'books',
    }
  };
}
