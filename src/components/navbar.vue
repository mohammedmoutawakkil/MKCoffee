<template>
   <nav class="navbar navbar-expand-sm  px-5 py-5 bg shadow">
    <div class="container-fluid text-center">
      <button class="navbar-toggler bg-brown" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <fa :icon="['fas','bars']" class="text-warning"/>
      </button>
      <div class="collapse navbar-collapse " id="mynavbar">
        <ul class="navbar-nav  fw-bold  ms-sm-5 ps-sm-5">
          <!-- Home -->
            <li class="nav-item">
              <router-link to="/" tag="button" class="nav-link">Home</router-link> 
            </li>
            <!-- Contact Us -->
            <li class="nav-item">
              <router-link to="/Contact" tag="button" class="nav-link">Contact</router-link> 
            </li>
            <!-- About Us -->
            <li class="nav-item">
              <router-link to="/About" tag="button" class="nav-link">About</router-link>
            </li>
        </ul>
        <!-- Search form -->
        <form class="d-flex ms-sm-auto ">
          <input class="form-control me-2" type="search" placeholder="Search">
          <button class="btn bg-other text-white" type="button">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
      name:'navbar',
      setup(){
        return{
        }
      }
    }
</script>

<style lang="scss" scoped>
 ul a {
    color: #BD8D1A; 
    &.router-link-exact-active {
      color: rgb(92, 73, 45);
    }
  }

.bg {
 background: #FDB813 ;
}
.bg-other{
  background-color: #2A2A2A;
}
ul a:hover{
  color: rgb(92, 73, 45);
}
.bg-brown{
  background-color:#3F281A ;
}
</style>