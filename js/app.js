
function dateStr(){
    var  date = new Date();
    var day = ("0" + date.getUTCDate()).slice(-2)
    return day+' '+date.getFullYear() + ' '+date.getDay()
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
    methods: {
        addRow: function() {
            console.log(this.taskDate);
            this.timeSeries.push(
                {
                    'task': this.task,
                    'comment': this.comment,
                    'time': this.time,
                    'dateTime': new Date(),
                    'date': this.taskDate
                }
            );

            this.task = null;
            this.comment = null;
            this.time = null;

        },
        addTask: function(taskId, comment, time) {
            this.timeSeries.push(
                {
                    'task': taskId,
                    'comment': comment,
                    'time': time,
                    'date': this.taskDate
                }
            );
        },
        deleteItem: function(index) {
            console.log(index);
            this.timeSeries.splice(index, 1);
        },
        save: function(index) {
        },
    },
    beforeMount() {
        console.log('App mounted!');
        if (localStorage.getItem('timeSeries')) this.timeSeries = JSON.parse(localStorage.getItem('timeSeries'));
    },
    computed: {
        totalTime: function() {
            localStorage.setItem('timeSeries', JSON.stringify(this.timeSeries));
            return this.timeSeries.reduce((accumulator, item) => {
                var val = parseFloat(item.time);
                if (isNaN(val)) {
                    val = 0;
                }
                return accumulator + val;
            }, 0).toFixed(2);
        },
    }
});