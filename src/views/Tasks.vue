<template>
  <div class="tasks" @click.self="clearSelection()">
    <div class="header" @click="clearSelection()">
      <div class="header__title">Tasks</div>
      <a href="#" @click="goToNew()" class="header__new-btn">New</a>
    </div>
    <TaskList class="task-list" :tasks="tasks" />
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
    }
  },
  methods: {
    goToNew() {
      this.$router.push({ path: 'new' })
    },
    clearSelection() {
      this.$store.dispatch('clearSelected')
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  },
  mounted() {
    this.$bus.$on('key:up', () => {
      this.$store.dispatch('selectUp')
    });
    this.$bus.$on('key:down', () => {
      this.$store.dispatch('selectDown')
    });
    this.$bus.$on('key:del', () => {
      const selectedTask = this.$store.getters.selectedTask
      if (selectedTask) {
        this.$store.dispatch('deleteTask', selectedTask.id)
      }
    });
    this.$bus.$on('key:edit', () => {
      const selectedTask = this.$store.getters.selectedTask
      if (selectedTask) {
        this.$router.push(`/edit/${selectedTask.id}`)
      }
    });
    this.$bus.$on('key:toggle-complete', () => {
      const selectedTask = this.$store.getters.selectedTask
      if (selectedTask) {
        this.$store.dispatch('updateTask', { ...selectedTask, isDone: selectedTask.isDone ? 0 : 1 })
      }
    });
  },
  destroyed() {
    this.$bus.$off('key:up');
    this.$bus.$off('key:down');
    this.$bus.$off('key:del');
    this.$bus.$off('key:edit');
    this.$bus.$off('key:toggle-complete');
  }
}
</script>

<style scoped lang="scss">
.tasks {
  padding: 20px;
  min-height: 80vh;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    &__title {
      font-size: 1.5rem;
    }
    &__new-btn {
      box-shadow: inset 0px -3px 7px 0px #29bbff;
      background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
      background-color: #2dabf9;
      border-radius: 3px;
      border: 1px solid #0b0e07;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-size: 15px;
      padding: 9px 23px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #263666;
      &:hover {
        background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
        background-color: #0688fa;
      }
      &:active {
        position: relative;
        top: 1px;
      }
    }
  }
  .task-list {
  }
}
</style>
