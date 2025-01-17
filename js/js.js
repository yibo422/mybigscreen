﻿
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['天津', '北京', '廊坊', '上海', '杭州', '重庆', '大连', '哈尔滨'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
           series: [
               {
                   type: 'bar',
                   name: '第一季度',
                   data: [66, 50, 40, 30, 20, 15, 20,15],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#2f89cf',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第二季度',
                   data: [62,45,45,30,18,18,21,24],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#d14a61',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第三季度',
                   data: [65,42,38,28,20,20,20,22],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#ffa500',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第四季度',
                   data: [70,40,40,25,20,20,20,20],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#675bba',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               }
           ]
       };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['天津', '北京', '廊坊', '上海', '杭州', '重庆', '大连', '哈尔滨'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
           series: [
               {
                   type: 'bar',
                   name: '第一季度',
                   data: [2200,1000,3000,1000,500,2500,2000,1000],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#9fe6b8',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第二季度',
                   data: [2100,900,3500,1000,500,2600,2000,1000],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#f36c6c',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第三季度',
                   data: [2200,850,3500,1000,500,2600,2000,1000],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#5F9EA0',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第四季度',
                   data: [2300,800,3600,900,500,2600,2000,1000],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#FF6347',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               }
           ]
       };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['天津', '北京', '廊坊', '上海', '杭州', '重庆', '大连', '哈尔滨'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
           series: [
               {
                   type: 'bar',
                   name: '第一季度',
                   data: [6000,200,2300,700,600,1800,1200,800],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#9400D3',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第二季度',
                   data: [7000,300,3000,700,600,1800,1500,1200],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#FF8C00',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第三季度',
                   data: [3000,800,3000,700,600,1800,1500,1200],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#00FA9A',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               },
               {
                   type: 'bar',
                   name: '第四季度',
                   data: [8200,980,2500,800,700,2500,2000,1100],
                   barWidth: '20%', //柱子宽度
                   // barGap: 1, //柱子之间间距
                   itemStyle: {
                       normal: {
                           color:'#FF1493',
                           opacity: 1,
                           barBorderRadius: 5,
                       }
                   }
               }
           ]
       };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

        function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top: '0%',
                data: ['天津', '北京', '廊坊', '上海'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            grid: {
                left: '10',
                top: '30',
                right: '10',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },

                data: ['第一季度', '第二季度', '第三季度', '第四季度']

            }, {

                axisPointer: { show: false },
                axisLine: { show: false },
                position: 'bottom',
                offset: 20,
            }],

            yAxis: [{
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '天津',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {

                    normal: {
                        color: '#0184d5',
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(1, 132, 213, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(1, 132, 213, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#0184d5',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: [66,62,65,70]
            },
                {
                    name: '北京',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#00d887',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 216, 135, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 216, 135, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00d887',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [50,45,42,40]
                },
                {
                    name: '廊坊',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#9F35FF',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(159, 53, 255, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(159, 53, 255, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#9F35FF',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [40,45,38,40]
                },
                {
                    name: '上海',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#FF7F00',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255, 127, 0, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(255, 127, 0, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF7F00',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [30,30,28,25]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
    function echarts_6() {
        // 初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        // SLA数据
        var slaData = [
            { city: '天津', sla: [99.50, 99.20, 99.70, 99.50] },
            { city: '北京', sla: [99.20, 99.00, 98.00, 99.00] },
            { city: '廊坊', sla: [99.50, 98.50, 98.50, 98.00] },
            { city: '上海', sla: [99.70, 99.60, 99.60, 99.60] },
            { city: '杭州', sla: [99.95, 99.90, 99.90, 99.90] },
            { city: '重庆', sla: [99.75, 99.00, 99.00, 99.00] },
            { city: '大连', sla: [99.00, 99.00, 99.00, 99.00] },
            { city: '哈尔滨', sla: [99.50, 99.50, 98.90, 99.00] }
        ];

        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        };

        var placeHolderStyle = {
            normal: {
                color: 'rgba(255,255,255,.05)',
                label: { show: false },
                labelLine: { show: false }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };

        // 自定义颜色
        var customColors = ['#11ab06', '#0682ab', '#066eab', '#065aab', '#06dcab', '#06f0ab', '#06b4ab', '#06c8ab'];

        option = {
            color: customColors,
            tooltip: {
                show: true,
                formatter: "{a} : {c} "
            },
            legend: {
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 12,
                bottom: '3%',
                data: slaData.map(function(item) {
                    return item.city;
                }),
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },
            series: slaData.map(function(item, index) {
                return {
                    name: item.city,
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '50%'],
                    radius: [(index * 10 + 20) + '%', (index * 10 + 30) + '%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    data: item.sla.map(function(value, i) {
                        return {
                            value: value,
                            name: i.toString(),
                            itemStyle: {
                                color: customColors[i] // 设置每个数据项的颜色
                            }
                        };
                    }).concat({
                        value: 100 - item.sla.reduce((acc, cur) => acc + cur, 0),
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    })
                };
            })
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
    function echarts_31() {
        // 初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));

        // 新的数据集
        var newData = [
            { city: '天津', ksf: 2300 },
            { city: '北京', ksf: 800 },
            { city: '廊坊', ksf: 3600 },
            { city: '上海', ksf: 900 },
            { city: '杭州', ksf: 500 },
            { city: '重庆', ksf: 2600 },
            { city: '大连', ksf: 2000 },
            { city: '哈尔滨', ksf: 1000 }
        ];

        option = {
            title: [{
                text: 'ksf员工分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }
            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function(p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: newData.map(function(item) {
                    return item.city;
                }),
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: 'KSF',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#FDEB71', '#F8D800', '#F5A623', '#F54600', '#FFA500', '#FFA07A', '#FF7F50', '#FF6347'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: newData.map(function(item) {
                        return {
                            value: item.ksf,
                            name: item.city,
                        };
                    })
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
    function echarts_32() {
        // 初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));

        // 新的数据集
        var newData = [
            { city: '天津', cpd: 70 },
            { city: '北京', cpd: 40 },
            { city: '廊坊', cpd: 40 },
            { city: '上海', cpd: 25 },
            { city: '杭州', cpd: 20 },
            { city: '重庆', cpd: 20 },
            { city: '大连', cpd: 20 },
            { city: '哈尔滨', cpd: 20 }
        ];

        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        };

        option = {
            title: [{
                text: '客服人员分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }
            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function(p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: newData.map(function(item) {
                    return item.city;
                }),
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: 'cdp客服分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: newData.map(function(item) {
                        return {
                            value: item.cpd,
                            name: item.city,
                        };
                    })
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
    function echarts_33() {
        // 初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));

        // 新的数据集
        var newData = [
            { city: '天津', workOrders: 8200 },
            { city: '北京', workOrders: 980 },
            { city: '廊坊', workOrders: 2500 },
            { city: '上海', workOrders: 800 },
            { city: '杭州', workOrders: 700 },
            { city: '重庆', workOrders: 2500 },
            { city: '大连', workOrders: 2000 },
            { city: '哈尔滨', workOrders: 1100 }
        ];

        option = {
            title: [{
                text: '工单数量分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }
            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function(p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: newData.map(function(item) {
                    return item.city;
                }),
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '工单分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#98FB98', '#2E8B57', '#228B22', '#006400', '#4682B4', '#4169E1', '#0000FF', '#000080'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: newData.map(function(item) {
                        return {
                            value: item.workOrders,
                            name: item.city,
                        };
                    })
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









