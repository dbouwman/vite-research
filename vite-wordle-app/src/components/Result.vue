<script setup lang="ts">

import { Guess } from '../types'

defineProps<{ guess: Guess }>()

</script>

<template>
  <div v-for="letter in guess.letters">
    <input type="text" name="item.name" v-model="letter.letter" :class="letter.state">
  </div>
</template>

<style scoped>
input {
  width: 2rem;
  height: 2rem;
  font-size: 2em;
  text-align: center;
  border: solid 2px #000;
} 
.grey {
  background-color: #888;
}
.yellow {
  background-color: rgb(249, 237, 18);
}

.green {
  background-color: rgb(3, 184, 3);
}

</style>
