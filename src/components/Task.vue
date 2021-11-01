<template>
  <div class="task card" :class="task.isSelected ? 'selected' : ''">
    <div class="header">
      <div class="header__name">{{ task.name }}</div>
      <div class="controls">
        <div class="controls__done">
          <input type="checkbox" :checked="task.isDone" @click.prevent="toggleDone()" />
        </div>
        <div class="controls__edit">
          <a href="#" @click.prevent="editTask()">
            <img src="@/assets/pen.png" alt="edit" />
          </a>
        </div>
        <div class="controls__delete">
          <a href="#" @click.prevent="deleteTask()">
            <img src="@/assets/bin.png" alt="delete" />
          </a>
        </div>
      </div>
    </div>
    <div class="desc">{{ task.desc }}</div>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: ['task']
}
</script>

<style scoped lang="scss">
.task {
  padding: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__name {
      font-weight: bold;
      font-size: 1.1rem;
    }
    .controls {
      display: flex;
      align-items: center;
      &__done {
        input {
          width: 20px;
          height: 20px;
        }
      }
      &__delete,
      &__edit {
        margin-left: 10px;
        a {
          img {
            width: 20px;
          }
        }
      }
    }
  }
  .desc {
    font-size: 0.9rem;
    opacity: 0.8;
  }
}
</style>
