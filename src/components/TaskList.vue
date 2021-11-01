<template>
  <div class="task-list">
    <Task class="task" v-for="item in tasks" :key="item.id" :task="item" />
  </div>
</template>

<script>
import Task from '@/components/Task.vue'

export default {
  name: 'TaskList',
  props: {
    tasks: []
  },
  components: {
    Task
  }
}
</script>

<style scoped lang="scss">
.task {
  margin-bottom: 10px;
}
</style>
