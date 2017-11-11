(function($) {
    $.fn.menu = function(opts) {
        // default configuration
        var config = $.extend({}, {
            opt1: null
        }, opts);
        // main function
        function init(obj) {
            var dObj = $(obj);
            var dMenulink = dObj.find('.nav-btn');
            var dAllLink = dObj.find('.nav-menu a');

            dMenulink.click(function() {
                dObj.toggleClass('nav--active');
                // $('body').toggleClass('_freeze');
            });

            dAllLink.click(function() {
                dObj.removeClass('active')
            });
        }
        // initialize every element
        this.each(function() {
            init($(this));
        });
        return this;
    };
    // start
    $(function() {
        $(".nav").menu();
    });
})(jQuery);

$(document).ready(function(){

});

var lists = [
    { "text": "請選擇也可以為model設定value>selected", "value": ""}
];

for (var i = 0; i <3; i++) {
    lists.push(
        { 
            "text": (i).toString(), 
            "value": (i).toString() 
        }
    )
}

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
        showSlider: true,
        showCtrl: false, 
        selectOpt: "",
        selectLists: lists,

        noitems: [
            { gifts: "末獎", quantity: "55", change: "55%"},
            { gifts: "5獎", quantity: "55", change: "55%"},
        ],
        items: [
            { gifts: "大獎", quantity: "55", change: "55%",},
        ],
    },
    props: {
    },
    watch: {
    },
    computed: {
    },
    methods: {
        optValue: function(val) {
            return 1
        },
        signup: function() {
            alert("送出");
        },
        goStart: function() {
            $(window).scrollTop(950);
        }
    },
    created: function () {
    },
    mounted: function () {
        var vm = this;

        for(var i = 1; i < 11; i++) {
            var granimInstance = new Granim({
                element: '#granim-'+i,
                name: 'basic-gradient',
                direction: 'top-bottom',
                opacity: [1, 1],
                isPausedWhenNotInView: true,
                stateTransitionSpeed: 10,
                transitionSpeed: 1000,
                states : {
                    "default-state": {
                        gradients: [
                            // ['#4a4a4a', '#ccc'],
                            // ['#ccc', '#4a4a4a'],
                            ['#EB3349', '#F45C43'],
                            ['#FF8008', '#FFC837'],
                            ['#4CB8C4', '#3CD3AD'],
                            ['#24C6DC', '#514A9D'],
                            ['#FF512F', '#DD2476'],
                            ['#DA22FF', '#9733EE']
                            // ['#fdcd2a', '#83be35'],
                        ],
                        transitionSpeed: 2000
                    }
                }
            });            
        }

        var tweenSlide = TweenMax.to($('.demoBox__row'),100,{xPercent:-85});
        // init controller
        var controller = new ScrollMagic.Controller({loglevel: 3});
        // create a scene

        var s2Height = $('.s2').height();
        var slideHeight = $('.demoBox__row .col').height();
        $('.s2').height(slideHeight*10);
        // console.log(slideHeight);

        var scene = new ScrollMagic
            .Scene({
                triggerElement: ".s2",    // the scene should last for a scroll distance of 100px
                duration: slideHeight*10,
                offset: "0",       // start this scene after scrolling for 50px
                loglevel: 3,
            })
            .on("add", function (event) {
                // console.log('Scene was added to a new controller.');
                vm.showSlider = false;
            })
            .on("enter", function (event) {
                console.log("Scene entered.");
                vm.showSlider = true;
                vm.showCtrl = true;
            })
            .on("end", function (event) {
                console.log("Hit end point of scene.");
            })
            .on("leave", function (event) {
                console.log("Scene left.");
                vm.showSlider = false;
                vm.showCtrl = false;
            })
            .on("progress", function (event) {
                // console.log("Scene progress changed to " + event.progress.toFixed(3)*100);
                $("#ctrlSlider").slider('value',event.progress.toFixed(3)*100);
            })
            .setTween(tweenSlide)
            .addIndicators()
            .addTo(controller); // assign the scene to the controller

        // get the current scroll offset for the start and end of the scene.
        var start = scene.scrollOffset();
        var end = scene.scrollOffset() + scene.duration();
        // console.log("the scene starts at", start, "and ends at", end);
        // get the current state
        var state = scene.state();
        // console.log("state"+state);

        // get the scene's trigger position
        var triggerPosition = scene.triggerPosition();
        // console.log("triggerPosition"+triggerPosition );

        $(window).resize(function(event) {
            /* Act on the event */
            console.log('resize')
            
            s2Height = $('.s2').height();
            scene.duration(s2Height);
            start = scene.scrollOffset();
            end = scene.scrollOffset() + scene.duration();
            
            console.log("the scene starts at", start, "and ends at", end);
        });

        $("#ctrlSlider").slider({
            slide: function( event, ui ) {
                // console.log(event, ui);
                // console.log(ui.value+','+diff);
                var diff = (end-start)/100;
                $(window).scrollTop(start+(diff*ui.value))
            }
        });
        
        // $(window).scroll(function(event) {
        //     // Act on the event 
        //     var cur_pos = $(window).scrollTop()
        //     var ctrlSlider_val;
        //     if(cur_pos<=start) {
        //         ctrlSlider_val = 0;
        //     } else if (cur_pos>=end) {
        //         ctrlSlider_val = 100;
        //     } else {
        //         ctrlSlider_val = ((cur_pos-start)/(end-start)).toFixed(2)*100
        //         // Math.floor(((cur_pos-start)/(end-start))*100)
        //     }
        //     console.log('scrolling'+ctrlSlider_val);
        //     $("#ctrlSlider").slider('value',ctrlSlider_val);
        // });

        var chaffle_els = document.querySelectorAll('[data-chaffle]');
        Array.prototype.forEach.call(chaffle_els, function (el) {
            const chaffle = new Chaffle(el, { /* options */ });
            chaffle.init();
        });
    }
});

