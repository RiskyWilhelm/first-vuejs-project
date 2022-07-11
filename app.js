const app = Vue.createApp({
    // functions, data, methods buraya gelecek
    // template: "<h2> Template usesd </h2>"
    data(){
        return{
            showGames: true,
            rate: 5,
            datagames: [
                {
                    title: "Two Beyond Souls",
                    comment: "Kendisiyle bağlı olan bir ruhsal arkadaş ile arasında geçen, aksiyon dolu bir hikayeyi anlatıyor.",
                    img: "assets/twobeyondsouls.png",
                    isFav: true
                },
                
                {
                    title: "Ori: Will of the Wisps",
                    comment: "Hayali bir kahramanın şans eseri tanıştığı ve sonrasında onu kaybettiği bir arkadaşını aramak için yola koyuluyor!",
                    img: 'assets/orithewillofthewisps.png',
                    isFav: true
                },

                {
                    title: "Dandara: Trials of Fear",
                    comment: "Tuzaklarla dolu bir evrende kendi yolunu bulmaya çalışan bir karakterin hikayesini oynayarak yaşıyorsunuz.",
                    img: 'assets/dandara.jpg',
                    isFav: false
                },
            ],
            currentMousePos: {
                x: 0,
                y: 0,
            }
        }
    },

    methods: {
        toggleVisibility(){
            this.showGames = !this.showGames
        },
        /* changeTitle(taken){
            this.title = taken
            console.log("Changed the title to", taken)
        }

        handleEvent(e, data){
            console.log(e.type);
            if(data) console.log(data);
        },
        
        logMousePosition(e){
            this.currentMousePos.x = e.offsetX;
            this.currentMousePos.y = e.offsetY;
        }*/

    },
    
    computed: {
        filterfavGames(){
            return this.datagames.filter((game) => game.isFav)
        }
    }
    
})

app.mount('#app')