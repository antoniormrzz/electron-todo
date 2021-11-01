<template>
  <div class="edit">
    <div class="header">
      <router-link class="router-link" to="/">&#5130; All Tasks</router-link>
      <a href="#" @click="save()" class="save">Save</a>
    </div>
    <div class="name">
      <input type="text" placeholder="Task Name" v-model="taskName" />
    </div>
    <div class="desc">
      <textarea maxlength="100" placeholder="Task Description" v-model="taskDesc"></textarea>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Edit',
  data() {
    return {
      taskName: '',
      taskDesc: '',
      task: {}
    }
  },
  watch: {
    task(newTask) {
      this.taskName = newTask.name;
      this.taskDesc = newTask.desc;
    }
  },
  methods: {
    save() {
      if (this.taskName.trim()) {
        this.$store.dispatch('updateTask', { ...this.task, name: this.taskName, desc: this.taskDesc })
        this.$router.push('/');
      } else {
        alert('Task name can\'t be empty.')
      }
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.task = this.$store.state.tasks.find((e) => e.id == id)
    this.$bus.$on('key:save', () => {
      this.save()
    });
  },
  destroyed() {
    this.$bus.$off('key:save');
  }
}
</script>

<style scoped lang="scss">
.edit {
  padding: 20px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .router-link {
      color: black;
      text-decoration: none;
      margin-left: 5px;
    }
    .save {
      box-shadow: inset 0px -3px 7px 0px #3dc21b;
      background: linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
      background-color: #44c767;
      border-radius: 3px;
      border: 1px solid #18ab29;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-size: 15px;
      padding: 9px 23px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #2f6627;
      &:hover {
        background: linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
        background-color: #5cbf2a;
      }
      &:active {
        position: relative;
        top: 1px;
      }
    }
  }
  .name {
    margin: 10px 0;
    width: 100%;
    input {
      border-radius: 5px;
      width: 100%;
      height: 30px;
    }
  }
  .desc {
    width: 100%;
    textarea {
      border-radius: 5px;
      height: 50px;
      display: block;
      width: inherit;
    }
  }
}
</style>
