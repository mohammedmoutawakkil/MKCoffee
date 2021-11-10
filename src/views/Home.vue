<template>
  <div>
    <!-- Header Component -->
    <div>
       <Homehead />
    </div>
    <!-- Section Component -->
    <div>
     <Section />
    </div>
    
  </div>
</template>

<script>
import Homehead from '../components/Homehead.vue'
import Section from '../components/Section.vue'
    export default {
        name:'Home',
        components:{
          Homehead,
          Section
        }
    }
</script>

<style lang="scss" scoped>

</style>