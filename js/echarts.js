// 基于准备好的dom，初始化echarts图表
    var myChart01 = echarts.init(document.getElementById('chart01'));
    var option = {
   title: {
       x: "center"
   },
   tooltip: {
       trigger: "item",
       formatter: "{b} : {c}"
   },
   legend: {
       orient: "horizontal",
       x: "left",
       y:"top",
       data: ["代办事件", "办结事件", "分配事件"]
   },
   toolbox: {
       show: true,
       feature: {
           dataView: {
               readOnly: true
           }
       }
   },
   calculable: true,
   series: [
       {
           name: "",
           type: "pie",
           radius: "55%",
           center: ["50%", "60%"],
           data: [
               {
                   value: 335,
                   name: "代办事件"
               },
               {
                   value: 310,
                   name: "办结事件"
               },
               {
                   value: 234,
                   name: "分配事件"
               }
           ]
       }
   ]
};
    // 为echarts对象加载数据
myChart01.setOption(option);

    // 基于准备好的dom，初始化echarts图表
    var myChart02 = echarts.init(document.getElementById('chart02'));
    var option = {
   title: {
       x: "center",
   },
   tooltip: {
       trigger: "item",
       formatter: "{b} : {c} <br>所占比例:({d}%)",
       show: true
   },
   legend: {
       orient: "horizontal",
       data: ["李逵", "华文虎", "欧德和", "杜二萨", "嘉华世", "鹤顶红", "张莎"],
       y: "top",
       x: "left"
   },
   toolbox: {
       show: true,
       feature: {
           dataView: {
               readOnly: true
           }
       }
   },
   calculable: true,
   series: [
       {
           name: "",
           type: "pie",
           radius: "55%",
           center: ["50%", "60%"],
           itemStyle: {
               normal: {
                   label: {
                       show: true,
                       formatter: "{b}: {c} ({d}%)"
                   }
               }
           },
           data: [
               {
                   value: 335,
                   name: "李逵"
               },
               {
                   value: 310,
                   name: "华文虎"
               },
               {
                   value: 234,
                   name: "欧德和"
               },
               {
                   value: 135,
                   name: "杜二萨"
               },
               {
                   value: 154,
                   name: "嘉华世"
               },
               {
                   value: 231,
                   name: "鹤顶红"
               },
               {
                   value: 90,
                   name: "张莎"
               }
           ],
           tooltip: {
               formatter: "{a} 未完成事件",
               islandFormatter: ""
           }
       }
   ]
};
// 为echarts对象加载数据
myChart02.setOption(option);



