<script setup lang="ts">
  import { defineEmits } from 'vue'
  
  const emit = defineEmits({
    submit: (guess: string) => {
      if (guess.length === 5) {
        return true
      } else {
        console.log(`Guess Component: ${guess} is not 5 letters`);
        return false
      }
    }
  });
  
  function addGuess(event: Event) {
    const guess = (event.target as HTMLInputElement).value
    console.log(`Guess Component: ${guess}`);
    emit('submit', guess);
    // unclear we can't do this via state bound to the input value
    // seems that "" may be falsy?
    (event.target as HTMLInputElement).value = "";
  }
</script>

<template>
  <div class="row">
    <input maxlength="5" @keyup.enter="addGuess">
  </div>
</template>

<style scoped>
input {
  width: 12rem;
  height: 2rem;
  font-size: 2em;
  text-align: center;
  border: solid 2px #000;
  text-transform: uppercase;
}

</style>
