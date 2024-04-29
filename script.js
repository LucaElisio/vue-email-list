// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus: Far comparire gli indirizzi email solamente quando sono stati tutti generati

const { createApp } = Vue;

createApp({
    data() {
        return {
            isLoading: false,
            email: []
        };
    },

    created() {
    },

    methods: {
        generateMail: function () {
            this.isLoading = true;
            this.email = [];
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                    console.log(resp.data.response);
                    this.email.push(resp.data.response);
                    if (this.email.length == 10) {
                        this.isLoading = false;
                    }
                })
            }
        }
    }
}).mount("#app");