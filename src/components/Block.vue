<template>
  <Loader v-if="isLoading" />
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click me! 
  </div>
</template>

<script>
import Loader from './Loader.vue'

export default {
  name: "Block",
  props: ['delay'],
  emits: ['end'],
  data() {
    return {
      showBlock: false,
      isLoading: true,
      timer: null,
      reactionTime: 0
    }
  },
  components: { Loader },
  mounted() {
      setTimeout(() => {
        this.showBlock = true
        this.startTimer()
      }, this.delay);
  },
  updated() {
    this.isLoading = false
  },
  methods: {
    startTimer(){
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10);
    },
    stopTimer(){
      clearInterval(this.timer)
      this.$emit('end', this.reactionTime)
    }
  }
}
</script>

<style>
  .block{
    width: 400px;
    border-radius: 10px;
    background: #42b883;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    font-size: 24px;
    box-shadow: -5px 5px 20px #5fe9ab;
    cursor: pointer;
  }

  .img-loading{
    display: block;
    margin: -30px auto 0;
  }
</style>