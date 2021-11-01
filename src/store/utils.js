function setSelected(id, tasks) {
  return tasks.map(e => {
    return { ...e, isSelected: e.id === id }
  });
}
function clearSelected(tasks) {
  return tasks.map(e => ({ ...e, isSelected: false }))
}
function portSelected(tasks, newTasks) {
  let selected = tasks.find(e => e.isSelected);
  if (selected) {
    return newTasks.map(e => {
      return { ...e, isSelected: e.id === selected.id }
    });
  } else {
    return newTasks.map(e => ({ ...e, isSelected: false }))
  }
}

module.exports = {
  setSelected,
  clearSelected,
  portSelected
}