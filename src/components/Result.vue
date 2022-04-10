<template>
  <div class="result-box">
    <div class="result-icon">
      <fa class="icon" :icon="icon" />
    </div>
      <h1>{{ rank }}</h1>
      <p>Your Reaction Time - {{ score }} ms</p>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ['score'],
  data() {
    return {
      rank: null,
      icon: "circle-minus"
    }
  },
  mounted() {
    if(this.score < 275){
      this.rank = "Ninja Fingers"
      this.icon = "user-ninja"
    }else if (this.score < 500){
      this.rank = "Rapid Reflexes"
      this.icon ="bolt"
    }else if(this.score < 850){
      this.rank = "Slow Pace"
      this.icon = "face-rolling-eyes"
    }else{
      this.rank = "You're Loser.."
      this.icon = "poo"
    }
  }
}
</script>

<style scoped>
  
  h2{
    margin: 40px 0;
    text-align: center;
  }

  .result-box{
    width: 325px;
    height: 230px;
    background-color: #5FE9AB;
    padding-top: 80px;
    margin: 80px auto 0;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 2px 20px rgba(53, 73, 94, .25); 
  }

  .result-icon{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #35495e;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .result-icon > .icon{
    font-size: 42px;
    color: white;
  }
</style>