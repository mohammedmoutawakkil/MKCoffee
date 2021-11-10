<template>
  <div :style="{ 'backgroundImage': 'url(' + caffeebg + ')' }" class="demo container-fluid h-auto px-sm-4 py-sm-5 ">
    <div class="row ms-sm-5 p-5">
      <div class="col-sm-4 ms-sm-4 ">
        <img :src="caffeeicon" class="w-100 pointer shadow-lg" alt="">
      </div>
      <div class="col-sm-6  p-sm-5 ms-sm-5 text-start" style="margin-top:12%;">
        <p class="fs-5  text-warning text-capitalize fw-bold">delicious coffee</p>
        <h1 class="text-yellow  fw-bold text-capitalize display-1 letter">MK coffee</h1>
        <p class="text-light text-break  fs-5 mb-4 font-monospace">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <a href="https://github.com/mohammedmoutawakkil/MKCaffee" target="_blank" :class="githubstarover" @mouseover="githubstarover=mouseover" @mouseleave="githubstarover=mouseleave">Github Star</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive,ref, toRefs } from 'vue'

    export default {
        name:'Homehead',
         setup(){
            let caffee;
            const githubstarover=ref('btn btn-transparent  fs-4 border border-2 btn-hover text-light border-light py-2 px-4');
            const mouseover='btn btn-transparent  fs-4   btn-hover text-dark border border-2 border-dark py-2 px-4';
            const mouseleave='btn btn-transparent  fs-4 border border-2 btn-hover text-light border-light py-2 px-4';
                try{
                //Check availability
                    caffee=reactive({
                      caffeeicon:require('@/assets/img/caffeeicon.png'),
                      caffeebg:require('@/assets/img/caffee3.jpg')
                    });
                }
                catch(error){
                console.error(error);
                }
            
                return{
                ...toRefs(caffee),
                githubstarover,
                mouseover,
                mouseleave
                }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Varela+Round&display=swap');
.demo{
  background-size: cover;
  background:black;
}

.letter{
  letter-spacing: 5px;
}
.btn-hover:hover{
  background-color: #FDB813;
}
.btn-hover{
  font-family: 'Lato', sans-serif;
  font-family: 'Varela Round', sans-serif;
}
.pointer{
  cursor: pointer;
  margin-top: 25%;
}
.pointer:hover{
 animation-name: caffee-image;
 animation-duration: 4s;
 animation-iteration-count: infinite;
}
@keyframes caffee-image {
  0%   {margin-top:25% ;}
  25%  {margin-top:22% ;}
  50%  {margin-top:28% ;}
  75%  {margin-top:22%;}
  100% {margin-top:25%;}
}
.text-yellow{
  color: #FDB813;
}
</style>