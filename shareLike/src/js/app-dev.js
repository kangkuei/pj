
Vue.mixin({
    data: function () {
        return {
            initText: 'hello world! Vue Start'
        }
    },
    mounted: function () {}
});

var app = new Vue({
    el: '#app',
    data: {
        awardLists: [],
        popupOpen: false,
    },
    props: {
    },
    watch: {
        popupOpen: function() {

        }
    },
    computed: {
    },
    methods: {
        initCoupon: function() {
            var vm = this;
            // 取得獎品
            // 建立canvas
            // 將獎品圖放入
            // 繪出

            $.ajax({
                type: 'get',
                url: 'http://www.google.com',
                dataType: 'json',
                beforeSend: function() {
                },
                success: function(result, textStatus, jqXHR) {
                    console.log(result);
                },
                error: function() {

                },
                complete: function() {
                    console.log('complete');
                    //以下為demo正式 success才建立刮刮樂
                    $('<canvas>').attr({id:'myCanvas'}).appendTo('.coupon__cover');
                    $('div.coupon__award').css({
                        background: 'url(images/reward-demo.png) center center no-repeat',
                        backgroundSize: '100% auto'
                    });
                    draw();
                }
            });
            
            function draw() {
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
                var w = canvas.parentNode.offsetWidth;
                var h = canvas.parentNode.offsetHeight;
                canvas.width = w;
                canvas.height = h;

                /*灰色背景*/
                context.fillStyle = "#ccc";
                context.fillRect(0, 0, w, h);

                context.globalCompositeOperation = "destination-out";
                var offsetX = canvas.parentNode.offsetLeft;
                var offsetY = canvas.parentNode.offsetTop;
                var mousedown = false;

                canvas.addEventListener("touchstart", function(e) {
                    e.preventDefault();
                    mousedown = true;
                });

                canvas.addEventListener("touchstart", function(e) {
                    e.preventDefault();
                    mousedown = true;
                });

                canvas.addEventListener("touchmove", function(e) {
                    e.preventDefault();
                    if (mousedown) {
                        if (e.changedTouches) {
                            e = e.changedTouches[e.changedTouches.length - 1];
                        }
                        var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
                        var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
                        context.beginPath()
                        context.arc(x, y, 50, 0, Math.PI * 2);
                        context.fill();
                    }
                });

                canvas.addEventListener("touchend", function(e) {
                    e.preventDefault();
                    mousedown = false;
                    var num = 0;
                    var datas = context.getImageData(50, 25, w - 110, h - 50);
                    for (var i = 0; i < datas.data.length; i++) {
                        if (datas.data[i] == 0) {
                            num++;
                        };
                    };
                    if (num >= datas.data.length * 0.25) {
                    // 達到面積要求時執行的內容       
                        $('#myCanvas').remove();   
                    }
                });

                canvas.addEventListener("mousedown", function(e) {
                    e.preventDefault();
                    mousedown = true;
                });

                canvas.addEventListener("mousemove", function(e) {
                    e.preventDefault();

                    if (mousedown) {
                        if (e.changedTouches) {
                            e = e.changedTouches[e.changedTouches.length - 1];
                        }
                        var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
                        var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
                        context.beginPath()
                        context.arc(x, y, 50, 0, Math.PI * 2);
                        context.fill();
                    }
                });

                canvas.addEventListener("mouseup", function(e) {
                    e.preventDefault();
                    mousedown = false;
                    var num = 0;
                    var datas = context.getImageData(50, 25, w - 110, h - 50);
                    for (var i = 0; i < datas.data.length; i++) {
                        if (datas.data[i] == 0) {
                            num++;
                        };
                    };
                    if (num >= datas.data.length * 0.25) {
                        // 達到面積要求時執行的內容    
                        $('#myCanvas').remove(); 
                    }
                });
            }

            draw();
        },
        getAwardstatus: function() {
            /// 再麻煩套成獲取api的版本
            var vm = this;

            //清空列表
            vm.awardLists.splice(0,vm.awardLists.length);

            for (var i = 0; i <2; i++) {
                vm.awardLists.push(
                    { 
                        "text": '發完的獎品'+(i).toString(), 
                        "amount": '200張',
                        "chance": '100%',
                    }
                )
            }
        },
        openPopup: function() {
            var vm = this;
            vm.popupOpen = true;
        }
    },
    created: function () {
    },
    mounted: function () {
        var vm = this;
    }
});



$(document).ready(function(){

});
