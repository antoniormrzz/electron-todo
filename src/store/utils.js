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
function selectDown(tasks) {
  const selectedIndex = tasks.findIndex(e => e.isSelected)
  if (selectedIndex > -1) {
    if (tasks.length > (selectedIndex + 1)) {
      tasks[selectedIndex].isSelected = false
      tasks[selectedIndex + 1].isSelected = true
    }
    return tasks
  } else {
    if (tasks[0]) {
      tasks[0].isSelected = true
    }
    return tasks;
  }
}
function selectUp(tasks) {
  const selectedIndex = tasks.findIndex(e => e.isSelected)
  if (selectedIndex > 0) {
    tasks[selectedIndex].isSelected = false
    tasks[selectedIndex - 1].isSelected = true
    return tasks
  } else {
    if (tasks[0]) {
      tasks[0].isSelected = true
    }
    return tasks;
  }
}

module.exports = {
  setSelected,
  clearSelected,
  portSelected,
  selectDown,
  selectUp
}