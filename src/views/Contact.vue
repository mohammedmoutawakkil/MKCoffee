<template>
  <div class="py-5 bg-custom">
    <div class="container-fluid py-5 my-5">
    <div class="row p-5 text-dark">
        <!-- Contact Title -->
        <h1 class="title text-start fw-bold ">Contact Us</h1>
        <!-- Column -->
            <div class="col-sm text-start">
                <div class="row py-5">
                    <!-- Contact Form -->
                    <form @submit.prevent="valide">
                        <!-- Full Name -->
                        <div class="col-sm-8 mb-3">
                            <label for="exampleFormControlInput0" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput0" placeholder="Full Name" v-model="fullname.fnvalue">
                            <small v-show="fullname.fnerror" class="form-text  text-danger">Name required.</small>
                        </div>
                        <!-- Email Address -->
                        <div class="col-sm-8 mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="email.emailvalue" required>
                            <small v-show="email.emailerror" class="form-text  text-danger">Incorrect Email Address.</small>
                        </div>
                        <!-- Subject -->
                        <div class="col-sm-8 mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Subjet</label>
                            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Subjet" v-model="subjet.sjvalue">
                            <small v-show="subjet.sjerror" class="form-text  text-danger">Subjet required.</small>
                        </div>
                        <!-- Message -->
                        <div class="col-sm-8 mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message" v-model="message.msgvalue"></textarea>
                            <small v-show="message.msgerror" class="form-text  text-danger">Message required.</small>
                        </div>
                        <!-- Submit -->
                        <button type="submit" class="btn bg-yellow"><fa :icon="['fas','save']" class="me-2"/>Submit</button>
                    </form>
                </div>
            </div>
            <!-- Column -->
            <div class="col-sm pb-3">
                <!-- Location -->
                <iframe class="h-100 w-100 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.76966671569!2d-5.608060329985909!3d33.88098518728597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d23bfc49d1%3A0xfbbf80a99e4cde18!2sMeknes!5e0!3m2!1sen!2sma!4v1634761905079!5m2!1sen!2sma"    allowfullscreen="" loading="lazy"></iframe>
            </div>
    </div>
  </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
import _ from 'lodash'
    export default {
        name:'Contact',
        setup(){
            //form values
            const formvalidation=reactive({
                fullname:{
                    fnvalue:'',
                    fnerror:false
                },
                email:{
                    emailvalue:'',
                    emailerror:false
                },
                subjet:{
                    sjvalue:'',
                    sjerror:false
                },
                message:{
                    msgvalue:'',
                    msgerror:false
                }

            })
            //regex validation
            const mailformat =new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
               watch(
               () =>_.cloneDeep(formvalidation.email),
                   (newvalue)=>{
                       if (!mailformat.test(newvalue.emailvalue)&&newvalue.emailvalue!=='')
                        formvalidation.email.emailerror=true
                       else 
                        formvalidation.email.emailerror=false
            },
            {deep:true}
            )
            //form submit
            function valide(){
                if (formvalidation.fullname.fnvalue==='') {
                    formvalidation.fullname.fnerror=true
                }
                else{
                     formvalidation.fullname.fnerror=false
                }
                if (formvalidation.email.emailvalue==='') {
                    formvalidation.email.emailerror=true
                }
                else{
                     formvalidation.email.emailerror=false
                }
                if (formvalidation.subjet.sjvalue==='') {
                    formvalidation.subjet.sjerror=true
                }
                else{
                     formvalidation.subjet.sjerror=false
                }
                if (formvalidation.message.msgvalue==='') {
                    formvalidation.message.msgerror=true
                }
                else{
                    formvalidation.message.msgerror=false
                }
            }
            return{
                ...toRefs(formvalidation),
                valide
            }
        }
    }
</script>

<style scoped>
.bg-custom{
    background-image: linear-gradient(to left,#2A2A2A,#d49709);
}
.bg-yellow{
 background: #FDB813 ;
}
</style>