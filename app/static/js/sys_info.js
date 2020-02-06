var sys_info = new Vue({
    el: "#sys_info",
    data: {
        cpu_use: 0,
        mem_use: 0
    },
    methods: {
        get_json: function () {
            axios.get("http://localhost:5000/sys/info").then(this.fun1).catch(this.fun2);
        },
        fun1: function (response) {
            response_data = response.data.data
            this.cpu_use = response_data.cpu_use;
            this.mem_use = response_data.mem_use;
        },
        fun2: function (response) {
            console.error('error');
        },

    },
    mounted() {
        this.timer = setInterval(this.get_json, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }

})
// alert('123')
// axios.get("http://127.0.0.1:5000/").then(fun1, fun2);

layui.use('element', function () {
    var element = layui.element;

    //…
});


