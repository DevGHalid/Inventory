<template>
  <div id="app">
    <Inventories />
  </div>
</template>

<script>
import Inventories from "./components/Inventories";

export default {
  components: {
    Inventories
  }
};
</script>

<style>
@font-face {
  font-family: Acrom;
  src: url(./fonts/Acrom.ttf);
}

* {
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

*::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
}
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #d03231;
}
*::-webkit-scrollbar-thumb:hover {
  background: #d03131da;
}
*::-webkit-scrollbar-thumb:active {
  background: #d03131;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-image: url(./assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Acrom;
  color: #fff;
}

#app {
  height: 100%;
}
</style>
