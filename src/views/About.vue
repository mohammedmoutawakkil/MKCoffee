<template>
  <div class="py-sm-5 bg-custom">
    <div class="container-fluid py-5 ">
    <div class="row p-5 text-light">
      <!-- About Title -->
        <h1 class="title text-start fw-bold ">About</h1>
        <!-- Column -->
            <div class="col-sm px-5">
                <h4 class="text-capitalize text-start  mt-5 mb-3 style  fw-bold ">What is MK Caffee</h4>
                <p class="text-other">Questo testo ha uno stile con alcune delle proprietà di formattazione del testo. L'intestazione utilizza le proprietà di allineamento del testo, trasformazione del testo e colore.
                Il paragrafo è rientrato, allineato e viene specificato lo spazio tra i caratteri. La sottolineatura viene rimossa da questo colore.Questo testo ha uno stile con alcune delle proprietà di formattazione del testo. L'intestazione utilizza le proprietà di allineamento del testo, trasformazione del testo e colore.
                Il paragrafo è rientrato, allineato e viene specificato lo spazio tra i caratteri. La sottolineatura viene rimossa da questo colore.</p>
                <a href="https://github.com/mohammedmoutawakkil/MKCaffee" target="_blank" class="btn text-uppercase text-dark fw-bold px-sm-4 py-sm-3 Stars">Github Star</a>
            </div>
        <!-- Column -->
            <div class="col-sm pb-3 slanted mt-5 mt-md-5 mt-lg-0">
              <img :src="imgsrc" class="w-100 rounded" alt="about image ">
            </div>
    </div>
  </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default ({
  name:'About',
  setup() {
     // Image source
    let imgsrc;

    try{
      //Check availability
        imgsrc=ref(require('@/assets/img/caffee1.jpg'))
    }
    catch(error){
      console.error(error);
    }
    return{
      imgsrc
    }
  },
})
</script>

<style scoped>

.bg-custom{
    background-image: linear-gradient(to right,#333,#2A2A2A);
}
p:first-child {
  color: #667EEA;
}

p {
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.6;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.Stars{
  background-color: #FDB813;
}

.slanted{
transform: skewY(3deg);
transform: skewX(-1deg);
}
.slanted>img{
   box-shadow: 10px 7px 10px black;
}
</style>
