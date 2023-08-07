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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Scusa ma sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "perché non mi rispondi? mi stai ignorando?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Andiamo a quel concerto?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
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
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Ciao, come stai? vieni fare un giro con me al lago?",
                            status: "sent",
                        },
                        {
                            date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                            message: "Ciao, sì mi piacerebbe molto",
                            status: "received",
                        },
                    ],
                },
            ],
            currentContact: null,
            newMessageText: "",
            searchText: ""
        };
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
            // il this.$refs ritona un elemnto html in maniera simile al getElementById
            console.log(this.$refs.chatContainer);
            
            this.currentContact.messages.push({
                date: new Intl.DateTimeFormat('it', { dateStyle: 'short', timeStyle: 'medium'}).format(new Date()),
                message: this.newMessageText,
                status: "sent",
            })
            // la formula sottostante svuota la barra dei messaggi ogni volta hce premo invio per inviare il messaggio
            this.newMessageText = ""
            
            // questa formula in cui scrollTop è = a scrollHeight fa in modo di scorrere in basso la chat dei messaggi
            // la funzione setTimeout "mette in coda" il comando fornito tra le graffe eseguendo prima il resto dell'html
            // questo fa in modo (in questo cas) che lo scroll avvenga dopo ogni messaggio inviato
            setTimeout(() => {
                this.$refs.chatContainer.scrollTop = 
                this.$refs.chatContainer.scrollHeight;
            }, 0);
            
        },
    },
    beforeMount() {
        this.currentContact = this.contactsList[0]
    }
}).mount("#app")