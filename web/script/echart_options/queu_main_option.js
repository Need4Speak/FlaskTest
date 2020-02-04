export {
    main_option
}
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