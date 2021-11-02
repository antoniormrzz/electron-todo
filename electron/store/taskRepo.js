// wrapper repo for tasks
class TaskRepository {
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        desc TEXT,
        isDone INTEGER DEFAULT 0)`
    return this.dao.run(sql)
  }

  create(task) {
    const { name, desc, isDone } = task;
    return this.dao.insert(
      `INSERT INTO tasks (name, desc, isDone)
        VALUES (?, ?, ?)`,
      [name, desc, isDone])
  }

  update(task) {
    const { id, name, desc, isDone } = task
    return this.dao.run(
      `UPDATE tasks
      SET name = ?,
        desc = ?,
        isDone = ?
      WHERE id = ?`,
      [name, desc, isDone, id]
    )
  }

  delete(id) {
    return this.dao.run(
      `DELETE FROM tasks WHERE id = ?`,
      [id]
    )
  }

  getById(id) {
    return this.dao.get(
      `SELECT * FROM tasks WHERE id = ?`,
      [id])
  }

  getAll() {
    return this.dao.all(`SELECT * FROM tasks`)
  }
}

module.exports = TaskRepository;