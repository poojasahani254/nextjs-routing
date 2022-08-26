const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'dbnextjs-demo',
        mongodb_password: '0w4NlQmw6MM7t8Kq',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'books-dev',
      }
    };
  }

  return {
    env: {
      mongodb_username: 'dbnextjs-demo',
      mongodb_password: '0w4NlQmw6MM7t8Kq',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'books',
    }
  };
}
