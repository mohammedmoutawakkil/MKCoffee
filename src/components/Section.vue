<template >
    <div class="bg-white">
        <div>
            <!-- Offer -->
            <div class="d-flex justify-content-center">
                <div class="p-5 w-50 text-center">
                    <h5 class="text-warning  text-capitalize">what we offer</h5>
                    <h1 class="text-capitalize  fw-bold">we offer the best for you <span class="text-warning">.</span></h1>
                    <p class="text-secondary  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                </div>
            </div>
            <!-- Services -->
                <div class="container">
                    <div class="row p-5">
                        <div class="col-sm ">
                            <div class="bg-other1 my-lg-0 my-4  p-5 rounded1 shadow">
                                <div class="row ">
                                    <div class="col-sm-4 p-4 mx-sm-3 text-center bg-warning rounded-circle d-flex  align-items-center justify-content-center"> 
                                        <fa :icon="['fab','bootstrap']" class="fs-1" />
                                    </div>
                                    <div class="col-sm-6 ">
                                        <h5 class="text-light">Bootstrap</h5>
                                        <p class="text-light">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <hr class="text-light">
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="bg-yellow my-lg-0 my-4 p-5 rounded1 shadow">
                                <div class="row ">
                                    <div class="col-sm-4 p-4 mx-sm-3 text-yellow text-center bg-other1 rounded-circle d-flex  align-items-center justify-content-center"> 
                                        <fa :icon="['fab','js']" class="fs-1" />
                                    </div>
                                    <div class="col-sm-6 ">
                                        <h5>JavaScript</h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </div>
                    <div class="col-sm">
                            <div class="p-5 rounded1 my-lg-0 my-4 shadow">
                                <div class="row ">
                                    <div class="col-sm-4 p-4 mx-sm-3 fs-1 bg-warning rounded-circle d-flex  align-items-center justify-content-center"> 
                                        <fa :icon="['fab','vuejs']" class="" />
                                    </div>
                                    <div class="col-sm-6">
                                        <h5>Vue Js</h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </div>
                </div>
            <!-- Services -->
            <!-- Our Quality -->
                <h1 class="text-center fw-bold mt-5"><span class="text-warning">.</span> Quality <span class="text-warning">.</span></h1>
                <div class="row mt-5 py-5">
                    <div class="col-sm mb-4 mb-lg-0">
                        <div class="card rounded-3 p-0 border-0 Computercard shadow">
                        <img class="card-img-top w-100" :src="caffeebg" alt="Card image" >
                        <div class="card-body m-0 rounded-bottom pb-5 text-center">
                            <h5 class="card-title text-warning fw-bold mt-3">Make some awesome project</h5>
                            <p class="card-text text-dark fs-6 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <p class="fs-5 text-break font-monospace">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                </div>
                <hr>
                <div class="row text-center py-5">
                    <div class="col-sm"><div class="p-3 text-secondary fs-2 fw-bold"><fa :icon="['fab','bootstrap']" class="" /> Bootstrap</div></div>
                    <div class="col-sm"><div class="p-3 text-secondary fs-2 fw-bold"><fa :icon="['fab','vuejs']" class="" /> VueJs</div></div>
                    <div class="col-sm"><div class="p-3 text-secondary fs-2 fw-bold"><fa :icon="['fab','js']" class="" /> JavaScript</div></div>
                </div>
            </div>
            <!-- Our Quality -->
        </div>
    </div>
    <!-- Our Products -->
    <div  :style="{ 'backgroundImage': 'url(' + caffeebg1 + ')' }" class="h-small text-center">
        <div class="container p-5">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active p-5">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Arabica</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Robusta</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Liberica</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item p-5">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Arabica</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Robusta</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Liberica</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item p-5">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Arabica</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Robusta</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img :src="caffeebg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Liberica</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <!-- Our Products -->
    <!-- Coffee Rates -->
    <div class="container-fuild bg-light pt-global pb-5">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="p-5 w-50 text-center">
                    <h5 class="text-warning  text-capitalize">Coffee Rates</h5>
                    <h1 class="text-capitalize  fw-bold">Flexible Coffee Rates <span class="text-warning">.</span></h1>
                    <p class="text-secondary  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat libero condimentum metus.</p>
                </div>
            </div>
            <div class="row  text-center pt-5">
                <div class="col-sm mb-4">
                    <div class="shadow rounded1  p-5 pt-3">
                        <h1 class="bg-other1 text-center rounded-circle p-4 badge fs-4 text-yellow mb-4">Standar</h1>
                        <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit utelit tellus.</p>
                        <hr>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Initial Charge</p></div>
                            <div class="col"><p>$3.50</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Booking Fee</p></div>
                            <div class="col"><p>$0.62/5kg</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Initial Charge</p></div>
                            <div class="col"><p>$3.50</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Booking Fee</p></div>
                            <div class="col"><p>$0.62/5kg</p></div>
                        </div>
                        <button class="btn bg-other1 text-yellow yellow-hover px-5 py-3 mt-4 fw-bold">Booking Now</button>
                    </div>
                </div>
                <div class="col-sm mb-4">
                     <div class="bg-other1 text-white shadow rounded1  p-5 pt-3">
                        <h1 class="bg-yellow text-dark rounded-circle p-4 badge fs-4  mb-4">Premium</h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipiscing elit utelit tellus.</p>
                        <hr>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Initial Charge</p></div>
                            <div class="col"><p>$3.50</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Booking Fee</p></div>
                            <div class="col"><p>$2.70/5kg</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Initial Charge</p></div>
                            <div class="col"><p>$4.50</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Booking Fee</p></div>
                            <div class="col"><p>$2.70/5kg</p></div>
                        </div>
                        <button class="btn bg-yellow text-2A dark-hover  px-5 py-3 mt-4 fw-bold">Booking Now</button>
                    </div>
                </div>
                <div class="col-sm mb-4">
                     <div class="shadow rounded1  p-5 pt-3">
                      <h1 class="bg-other1 rounded-circle p-4 badge  fs-4 text-yellow mb-4">Additional</h1>
                        <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit utelit tellus.</p>
                        <hr>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Initial Charge</p></div>
                            <div class="col"><p>$3.40</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Booking Fee</p></div>
                            <div class="col"><p>$0.82/5kg</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Initial Charge</p></div>
                            <div class="col"><p>$5.40</p></div>
                        </div>
                        <div class="row">
                            <div class="col"><p class="fw-bold">Booking Fee</p></div>
                            <div class="col"><p>$0.82/5kg</p></div>
                        </div>
                        <button class="btn bg-other1 text-yellow yellow-hover px-5 py-3 mt-4 fw-bold">Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Coffee Rates -->
</template>

<script>
import { reactive, toRefs } from 'vue'
    export default {
        name:'Section',
        setup(){
            let caffee;
            try{
                //Check availability
                    caffee=reactive({
                      caffeebg1:require('@/assets/img/caffee2.jpg'),
                      caffeebg:require('@/assets/img/caffee3.jpg')
                    });
                }
                catch(error){
                console.error(error);
                }
            
                return{
                ...toRefs(caffee),
                }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lato:wght@300&family=Varela+Round&display=swap');
.mt-global{
    padding-top: 500px;
}
.rc{
   font-size: 100px;
   color: #FDB813;
}
.yellow-hover:hover{
    background-color:#FDB813 ;
    color: #2A2A2A;
}
.dark-hover:hover{
    background-color: #2A2A2A;
    color: #FDB813;
}
.text-2A{
    color: #2A2A2A;
}
.bg-yellow{
    background: #FDB813;
}
.text-yellow{
    color: #FDB813;
}
.Computercard{
        width: 60%;
        margin-left:19%;
}
ul li{
    font-family: 'Dancing Script', cursive;
    font-family: 'Lato', sans-serif;
    font-family: 'Varela Round', sans-serif;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.rounded1{
    border-radius: 30px;
}
.bg-other1{
    background-color: #2A2A2A;
}
.h-small{
    background-size: cover;
}
.card-title{
    color: #FDB813;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
