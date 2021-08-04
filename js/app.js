function dateStr() {
    var date = new Date();
    var day = ("0" + date.getUTCDate()).slice(-2)
    return day + ' ' + date.getFullYear() + ' ' + date.getDay()
}

var vueApp = new Vue({
    el: '#vue-app',
    data: {
        price: 1200,
        tank: 45,
        length: 600,
        fuelPrice: 31.86,
        travelLength: 0,
    },
    methods: {},
    beforeMount() {
        console.log('App mounted!');
        if (localStorage.getItem('timeSeries')) this.timeSeries = JSON.parse(localStorage.getItem('timeSeries'));
    },
    computed: {
        tankPrice: function() {
           return (this.fuelPrice * this.tank).toFixed(2)
        },
        kmPrice: function() {
           return (this.tankPrice / this.length).toFixed(2)
        }
    }
});