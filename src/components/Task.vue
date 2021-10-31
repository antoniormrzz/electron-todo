<template>
  <div class="hello">
   {{task.name}}
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: ['task']
}
</script>

<style scoped lang="scss">

</style>
