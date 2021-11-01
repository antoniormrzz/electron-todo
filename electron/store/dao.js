const sqlite3 = require('sqlite3');
const bend = require('callback-bender');

class AppDAO {
  constructor(dbFilePath) {
    this.dbFilePath = dbFilePath;
  }

  connect = () => {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(this.dbFilePath, (err) => {
        if (err) {
          console.log('Could not connect to database', err)
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }

  run = (sql, params = []) => {
    const wrappedRun = bend.efc.none(this.db.run.bind(this.db));
    return wrappedRun(sql, params).catch((err) => {
      console.log('Error running sql ' + sql)
      console.log(err)
    });
  }

  /* from the docs: In case the statement is executed successfully,
    the this object of the callback function will contain two properties:

    lastID property stores the value of the last inserted row ID.
    changes property stores the rows affected by the query. 

    Somebody actually came up with this! I wrote this extra run wrapper to get inserted row id.
  */
  insert = (sql, params = []) => {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log('Error running sql ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
  }

  // don't think we will use much of this
  get = (sql, params = []) => {
    const wrappedGet = bend.efc.single(this.db.get.bind(this.db));
    return wrappedGet(sql, params).catch((err) => {
      console.log('Error running sql ' + sql)
      console.log(err)
    });
  }

  all = (sql, params = []) => {
    const wrappedAll = bend.efc.single(this.db.all.bind(this.db));
    return wrappedAll(sql, params).catch((err) => {
      console.log('Error running sql ' + sql)
      console.log(err)
    });
  }

  close = () => {
    this.db.close();
  }
}

module.exports = AppDAO