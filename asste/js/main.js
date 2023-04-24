// Descrizione:

// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


   const { createApp } = Vue
  
     createApp({

         data(){

            return {
            
                emails: []

            }

        },

        created() {
            this.fetchEmails()
        },

        methods: {

            async fetchEmails() {

                for(let x = 0; x < 10; x++){
                    const response = await fetch('https://flynn.boolean.careers/exercises/api/random/mail')
                    const data = await response.json()
                    console.log(data)
                    this.emails.push(data.response)
                }

            }

     }

   }).mount('#app')



// const app = new Vue({
//     el: '#app',
//     data: {
//       emails: []
//     },
//     created() {
//       this.fetchEmails()
//     },
//     methods: {
//       async fetchEmails() {
//         const response = await fetch('https://flynn.boolean.careers/exercises/api/random/mail?n=10')
//         const data = await response.json()
//         this.emails = data.response
//       }
//     }
//   })