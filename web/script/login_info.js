var main_chart = echarts.init(document.getElementById('main'));
var speed_limit_chart = echarts.init(document.getElementById('queue_speed_limit'));
var priority_high_chart = echarts.init(document.getElementById('queue_priority_high'));
var priority_mid_chart = echarts.init(document.getElementById('queue_priority_mid'));
var priority_low_chart = echarts.init(document.getElementById('queue_priority_low'));
var max_ponits = 100;

main_option = {
    // title: {
    //     text: '排队系统人数'
    // },
    dataset: {
        source: [
            // [0, 0],
        ]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type: 'scroll',
        data: ['在线', '高优先级', '低优先级', '中优先级', '限速队列']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '20%'],
    },
    series: [
        {
            name: '在线',
            type: 'line',
            // stack: '总量',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 1 }
        },
        {
            name: '高优先级',
            type: 'line',
            // stack: '总量',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 2 }
        },
        {
            name: '中优先级',
            type: 'line',
            // stack: '总量',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 3 }
        },
        {
            name: '低优先级',
            type: 'line',
            // stack: '总量',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 4 }
        },
        {
            name: '限速队列',
            type: 'line',
            // stack: '总量',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 5 }
        },
    ],
    animationDurationUpdate: 10
    // animation: false
};

speed_limit_option = {
    // title: {
    //     text: '排队系统人数'
    // },
    dataset: {
        source: [
        ]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type: 'scroll',
        data: ['限速队列']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '20%'],
    },
    series: [
        {
            name: '限速队列',
            type: 'line',
            // stack: '总量',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 1 }
        },
    ],
    animationDurationUpdate: 10
};

priority_high_option = {
    // title: {
    //     text: '排队系统人数'
    // },
    dataset: {
        source: [
        ]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type: 'scroll',
        data: ['高优先级队列']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '20%'],
    },
    series: [
        {
            name: '高优先级队列',
            type: 'line',
            showSymbol: false,
            encode: { x: 0, y: 1 }
        },
    ],
    animationDurationUpdate: 10
};

priority_mid_option = {
    // title: {
    //     text: '排队系统人数'
    // },
    dataset: {
        source: [
        ]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type: 'scroll',
        data: ['中优先级队列']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '20%'],
    },
    series: [
        {
            name: '中优先级队列',
            type: 'line',
            // stack: '总量',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 1 }
        },
    ],
    animationDurationUpdate: 10
};

priority_low_option = {
    // title: {
    //     text: '排队系统人数'
    // },
    dataset: {
        source: [
        ]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        type: 'scroll',
        data: ['低优先级队列']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '20%'],
    },
    series: [
        {
            name: '低优先级队列',
            type: 'line',
            showSymbol: false,
            // hoverAnimation: false,
            encode: { x: 0, y: 1 }
        },
    ],
    animationDurationUpdate: 10
};

// 使用刚指定的配置项和数据显示图表。
// main_chart.setOption(main_option);
set_all_options();

timer = window.setInterval(function () {
    axios.get("http://localhost:5000/login/info").then(fun1).catch(fun2);
}, 1000)

function fun1(response) {
    var date = new Date(response.data.data.time * 1000);
    var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    var count_list = response.data.data.count_list;

    update_main_data(time, count_list)
    update_priority_high_data(time, [count_list[2]])
    update_priority_mid_data(time, [count_list[3]])
    update_priority_low_data(time, [count_list[4]])
    update_speed_limit_data(time, [count_list[5]])
}

function fun2(error) {
    console.error(error);
}

// window.clearInterval(timer);

function set_all_options() {
    main_chart.setOption(main_option);
    speed_limit_chart.setOption(speed_limit_option);
    priority_high_chart.setOption(priority_high_option);
    priority_mid_chart.setOption(priority_mid_option);
    priority_low_chart.setOption(priority_low_option);
}

function update_main_data(time, count_list) {
    if (main_option.dataset.source.length > max_ponits) {
        main_option.dataset.source.shift();
    }
    count_list.unshift(time)
    main_option.dataset.source.push(count_list)
    main_chart.setOption({
        dataset: {
            source: main_option.dataset.source
        }
    });
}

function update_speed_limit_data(time, count_list) {
    if (speed_limit_option.dataset.source.length > max_ponits) {
        speed_limit_option.dataset.source.shift();
    }
    count_list.unshift(time)
    speed_limit_option.dataset.source.push(count_list)
    speed_limit_chart.setOption({
        dataset: {
            source: speed_limit_option.dataset.source
        }
    });
}

function update_priority_high_data(time, count_list) {
    if (priority_high_option.dataset.source.length > max_ponits) {
        priority_high_option.dataset.source.shift();
    }
    count_list.unshift(time)
    priority_high_option.dataset.source.push(count_list)
    priority_high_chart.setOption({
        dataset: {
            source: priority_high_option.dataset.source
        }
    });
}

function update_priority_mid_data(time, count_list) {
    if (priority_mid_option.dataset.source.length > max_ponits) {
        priority_mid_option.dataset.source.shift();
    }
    count_list.unshift(time)
    priority_mid_option.dataset.source.push(count_list)
    priority_mid_chart.setOption({
        dataset: {
            source: priority_mid_option.dataset.source
        }
    });
}

function update_priority_low_data(time, count_list) {
    if (priority_low_option.dataset.source.length > max_ponits) {
        priority_low_option.dataset.source.shift();
    }
    count_list.unshift(time)
    priority_low_option.dataset.source.push(count_list)
    priority_low_chart.setOption({
        dataset: {
            source: priority_low_option.dataset.source
        }
    });
}
