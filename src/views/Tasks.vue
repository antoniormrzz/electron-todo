<template>
  <div class="tasks">
    <div>
      <div>Tasks</div>
      <div>New</div>
    </div>
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'Home',
  components: {
    TaskList
  },
  data() {
    return {
      tasks: [{ id: '1', name: 'test', desc: 'test desc', isDone: false }]
    }
  },
}
</script>
