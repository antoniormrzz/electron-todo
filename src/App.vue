<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.card {
  -webkit-box-shadow: -4px 6px 15px -7px rgba(0, 0, 0, 0.85);
  box-shadow: -4px 6px 15px -7px rgba(0, 0, 0, 0.85);
  border-radius: 5px;
}
:not(input):not(textarea):not(a),
:not(input):not(textarea):not(a)::after,
:not(input):not(textarea):not(a)::before {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}
a {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
input,
button,
textarea,
:focus {
  outline: none;
}
</style>
