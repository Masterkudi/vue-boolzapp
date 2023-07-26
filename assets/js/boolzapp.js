const { createApp } = Vue

const app = createApp({
    data() {
        return {
            contactsList: [
                {
                    name: "Michele",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Scusa ma sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah sì, scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "perché non mi rispondi? mi stai ignorando?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Sì!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Roberto",
                    avatar: "_5",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Andiamo a quel concerto?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "non posso, sono via",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Marco",
                    avatar: "_6",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Angelo",
                    avatar: "_7",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ho sentito dire che la loro pizza è buonissima.",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Sofia",
                    avatar: "_8",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao, come stai? vieni fare un giro con me al lago?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ciao, sì mi piacerebbe molto",
                            status: "received",
                        },
                    ],
                },
            ],
            currentContact: null,
            newMessageText: ""
        }
    },

    // imposto i metodi. getAvatarSrc per impostare le diverse foto dell'avatar dei contatti e onUserClick per cambiare utente nel container della chat 
    // beforeMount servirà per fare in modo che Vue legga il js prima dell'html e impostare il primo utente della lista di default ad ogni ricarica della pagina.
    // sendMessage per visualizzare in chat un messaggio scritto nella barra inferiore

    methods: {
        getAvatarSrc(singleContact) {
            return `assets/img/avatar${singleContact.avatar}.jpg`
        },
        onUserClick(singleContact) {
            this.currentContact = singleContact
        },
        sendMessage() {
            console.log(this.newMessageText);
            
            this.currentContact.messages.push({
                date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                message: this.newMessageText,
                status: "sent",
            })

        }
    },
    beforeMount() {
        this.currentContact = this.contactsList[0]
    }
}).mount("#app")