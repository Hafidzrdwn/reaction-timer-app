<template>
  <h1><fa :icon="['fab', 'vuejs']" /> Reaction Timer App</h1>
  <button id="btnStart" @click="start" :disabled="isPlaying">
    {{ btnText }}&nbsp;<fa :icon="btnTextIcon"/>
  </button>
  <button id="btnReset" v-if="showResult" @click="reset">
    {{ btnResetText }}
  </button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Result v-if="showResult" :score="score" />
</template>

<script>
import Block from "./components/Block.vue"
import Result from "./components/Result.vue"

export default {
  name: "App",
  components: { Block, Result },
  created(){
        document.title = "Reaction Timer App"    
  },
  data() {
    return {
      showResult: false,
      isPlaying: false,
      delay: null,
      score: null,
      btnText: "Let's play",
      btnTextIcon: "circle-play",
      btnResetText: "Reset game"
    };
  },
  methods: {
    start() {
      this.delay = Math.round(2000 + Math.random() * 2000)
      this.showResult = false
      this.isPlaying = true
      this.btnText = "Let's play"
      this.btnTextIcon = "circle-play"
    },
    endGame(reactionTime) {
      this.showResult = true
      this.score = reactionTime
      this.isPlaying = false
      this.btnText = "Again"
      this.btnTextIcon = "arrow-rotate-left"
    },
    reset() {
      this.showResult = false
      this.btnText = "Let's play"
      this.btnTextIcon = "circle-play"
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #35495e;
  margin-top: 60px;
}

button {
  padding: 12px 30px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  margin: 10px 12px;
  transition: .3s;
}

#btnStart {
  background: #55c794;
  color: white;
  box-shadow: 0 3px 15px #55c794d2;
}

#btnStart:hover {
  background: #42b883;
}

#btnStart:active {
  box-shadow: 0 3px 12px #55c794;
}

#btnReset {
  background: #dc3545;
  color: white;
  box-shadow: 0 3px 15px #dc3546a2;
}

#btnReset:hover {
  background: #cd2435;
}

#btnReset:active {
  box-shadow: 0 3px 12px #dc3545;
}

button:disabled {
  opacity: 0.5;
  box-shadow: none;
  cursor: not-allowed;
}

h1 {
  margin-bottom: 25px;
}
</style>
