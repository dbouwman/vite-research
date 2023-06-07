<script setup lang="ts">

  import GuessUI from './Guess.vue'
  import { Game } from '../lib/Game';
  import Result from './Result.vue';
  import Keyboard from './Keyboard.vue';
  import { reactive } from 'vue'
  import { Guess } from '../lib/types';
  import { Letter } from '../types';
  
  // Create a new Game
  const game = new Game();
  const state = reactive({ 
    guesses: [] as Guess[], 
    message: '' as string,
    letters: game.state as Letter[]
  })

  function validateGuess(guess: string) {
    if (game.isValidGuess(guess)) {
      state.message = '';
      game.guess(guess)
      state.guesses = [...game.guesses];
      state.letters = [...game.state];
    } else {
      state.message = "Invalid Guess";
      return false
    }
  }

</script>

<template>
  <div class="game">
  <!-- <h1>Vuedle</h1>
  <p>word: {{game.word}}</p>
  <p>guesses: {{ state.guesses.length }}</p> -->
  
  <div class="row" v-for="guess in state.guesses">
    <Result :guess="guess"></Result>
  </div>
  <div class="row">
    <GuessUI @submit="validateGuess"></GuessUI>
  </div>
  <h4 v-if="state.message.length">{{ state.message }}</h4>
  <hr/>
  <Keyboard :letters="state.letters"></Keyboard>
  </div>
</template>

<style scoped>
.game {
  width: 13rem;
}
.row {
  display: flex;
}
input {
  width: 10rem;
  height: 2rem;
  font-size: 2em;
  text-align: center;
  border: solid 2px #000;
  text-transform: uppercase;
}
</style>
