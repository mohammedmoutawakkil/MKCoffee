<template>
    <div class="bg-yellow">
         <div class="container">
            <div class="d-flex justify-content-center">
                <div class="p-5 w-50 text-center">
                    <h5 class="text-dark  text-capitalize">Call 24 Hour Service Available</h5>
                    <h1 class="text-capitalize  fw-bold">Call Now & Book Your Coffee.</h1>
                    <p class="fw-bold"><a href="tel:+2126########" class="fs-2 text-decoration-none text-dark"><fa :icon="['fas','phone']" class="me-3"/>(+212) #### ### ###</a></p>
                </div>
            </div>
         </div>
    </div>
    <div class="bg-other ">
        <div class="container p-5">
            <div class="row text-white text-center p-5">
                <div class="col-sm">
                    <h3>Address</h3>
                    <p><a class="text-white text-decoration-none" target="_blank" href="https://www.google.com/maps/place/Meknes/@33.8809852,-5.6080603,12z/data=!3m1!4b1!4m5!3m4!1s0xda044d23bfc49d1:0xfbbf80a99e4cde18!8m2!3d33.8730164!4d-5.5407299">Meknes,Morocco</a></p>
                </div>
                <div class="col-sm">
                    <h3>Contact</h3>
                    <address>
                       <p class="text-break"><a class="text-white ms-2 text-decoration-none" href="mailto:webmaster@example.com">MohamedMoutawakkil1999@gmail.com</a></p> 
                    </address>
                    <p><a href="tel:+2126########" class="text-decoration-none text-white">(+212) #### ### ###</a></p>
                </div>
                <div class="col-sm">
                    <h3>Work</h3>
                    <p>Mon - Sat : 08:00 - 18:00</p>
                    <p>Sun : 09:00 - 18:00</p>
                </div>
                <div class="col-sm">
                        <h3>Contact</h3>
                        <!-- Grid container -->
                        <div class="text-white">
                            <form @submit.prevent>
                                <!--Grid row-->
                                <div class="row d-flex justify-content-center">
                                <!--Grid column-->
                                <div class="col-auto">
                                    <p class="fs-5 fw-bold">
                                    Sign up for our newsletter
                                    </p>
                                </div>
                                <!--Grid column-->
                                <div class="col-md-7 col-12">
                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                    <input type="email" id="form5Example27" class="form-control" placeholder="Email adress" required/>
                                    </div>
                                </div>
                                <!--Grid column-->
                                <!--Grid column-->
                                <div class="col-auto">
                                    <!-- Submit button -->
                                    <button type="submit" class="btn bg-yellow mb-4 text-dark">
                                    <fa :icon="['fas','paper-plane']"/>
                                    </button>
                                </div>
                                <!--Grid column-->
                                </div>
                                <!--Grid row-->
                            </form>
                        </div>
                    </div>
            </div>
            <hr class="mt-5 text-secondary">
            <div class="container-fuiled">
                <!-- row -->
                <div class="row">
                    <!-- copyright column -->
                    <div class="col-sm">
                        <div class="p-3 text-white text-center">
                            © {{date}} Copyright :
                            <a class="text-white text-decoration-none" href="https://github.com/mohammedmoutawakkil">Mohammed Moutawakkil</a>
                        </div>
                    </div>
                    <!-- links column -->
                    <div class="col-sm text-white text-center fs-3 p-2">
                        <div class="row">
                            <!-- facebook link -->
                            <div class="col-sm"><a class="text-white text-decoration-none" href="javascript:void(0)"><fa :icon="['fab','facebook']" class="text-yellow" /></a></div>
                            <!-- github column -->
                            <div class="col-sm"><a class="text-white text-decoration-none" href="javascript:void(0)"><fa :icon="['fab','github']" class="text-yellow"/></a></div>
                            <!-- linkedin column -->
                            <div class="col-sm"><a class="text-white text-decoration-none" href="javascript:void(0)"><fa :icon="['fab','linkedin']" class="text-yellow"/></a></div>
                        </div>
                    </div>
                    <!-- Privacy Policy link and Terms Condition link column -->
                    <div class="col-sm p-3  text-white text-center">
                        <div class="col">
                        <a href="javascript:void(0)" class="text-decoration-none text-white pe-3">Privacy Policy </a>
                        <a href="javascript:void(0)" class="text-decoration-none text-white ps-3"> Terms Condition</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name:'foot',
        setup(){
            //Copyright Date
            const date=ref(new Date().getFullYear())
            return{
                date
            }
        }
    }
</script>

<style scoped>
.bg-other{
    background-color: #2A2A2A;
}
.bg-yellow{
    background-color: #FDB813;
}
.text-yellow{
    color: #FDB813;
}
</style>
