const AppDAO = require('./dao');
const TaskRepository = require('./taskRepo');

module.exports = async (dbPath) => {
  const dao = new AppDAO(dbPath);
  await dao.connect();
  const taskRepo = new TaskRepository(dao);
  await taskRepo.createTable();
  return { dao, taskRepo }
}