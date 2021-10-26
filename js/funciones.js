Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

new Vue({
    el: '#cont',
    data:{
        busqueda:'',
        totales:0,
        minimo:5,
        juegos:[{
            titulo: 'Grand Theft Auto',
            genero: 'Adventures',
            puntuacion:10,
        },
        {
            titulo: 'Fifa16',
            genero: 'Deporte',
            puntuacion:9,
        },
        {
            titulo: 'Forza Horizon',
            genero: 'Survival Horror',
            puntuacion:7,
        },
        {
            titulo: 'Warzone',
            genero: 'Adventure',
            puntuacion:10,
        },
        {
            titulo: 'Mortal Kombat 11',
            genero: 'Combat',
            puntuacion:8,
        },
        ]
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((juego)=>juego.puntuacion >= this.minimo);
        },

        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        },
        coincidencias(){
            return this.buscarJuego.length;
        }
    }
});