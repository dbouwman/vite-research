<script setup lang="ts">
import { Letter } from '../types'
import {computed} from 'vue'

const props = defineProps<{ letters: Letter[] }>()

const firstRow = computed(() => {
  return "qwertyuiop".toUpperCase().split("").map((letter) => {
    return props.letters.find((l: Letter) => l.letter === letter) as Letter
  })
})

const secondRow = computed(() => {
  return "asdfghjkl".toUpperCase().split("").map((letter) => {
    return props.letters.find((l: Letter) => l.letter === letter) as Letter
  })
})

const thirdRow = computed(() => {
  return "zxcvbnm".toUpperCase().split("").map((letter) => {
    return props.letters.find((l: Letter) => l.letter === letter) as Letter
  })
})

</script>

<template>
  <div class="keyboard">
    <div class="keyboardRow">
      <span v-for="letter in firstRow" :class="letter.state">{{ letter.letter }}</span>
    </div>
    <div class="keyboardRow">
      <span v-for="letter in secondRow" :class="letter.state">{{ letter.letter }}</span>
    </div>
    <div class="keyboardRow">
      <span v-for="letter in thirdRow" :class="letter.state">{{ letter.letter }}</span>
    </div>
  </div>
  
</template>

<style scoped>
.keyboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.keyboardRow {
  width: 100rem;
  display: flex;
  flex-direction: keyboardRow;
  justify-content: center;
}
span {
  display: block;
  width: 2rem;
  height: 2rem;
  font-size: 1.3rem;
  text-align: center;
  border: solid 2px #000;
}

.white {
  background-color: #fdfdfd;
  color: #696565;
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
