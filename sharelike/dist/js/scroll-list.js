//scroll magic http://scrollmagic.io/

var app = new Vue({
    el: '#el',
    data: {
        listPosition: 0,
        curPos: 0,
    },
    props: {
    },
    watch: {
        listPosition: function() {
            //監看list的位置
            var vm = this;
            var dLists = $('.demoList__row .col')
            var getVw = $(window).width()/100;
            var curPos = 20*getVw*vm.listPosition;
            console.log(curPos);
            //設定寬度
            TweenMax.to(
                $(dLists),
                0.3,
                {width: 20*getVw}
            )

            TweenMax.to(
                $(dLists[vm.listPosition]),
                0.3,
                {width: 30*getVw}
            )

            TweenMax.to($('.demoList__row'),0.6,{
                x: -curPos
                // x: "-"+curPos*getVw+"vw",
            })
        }
    },
    computed: {
    },
    methods: {
    },
    created: function () {
    },
    mounted: function () {
        var vm = this;
        var tweenSlide = TweenMax.to($('.demoList'),100,{xPercent:0});
        
        // init controller {loglevel: 3}
        var controller = new ScrollMagic.Controller();
        // create a scene

        var s2Height = $('.s2').height();
        var slideWidth = $('.demoList__row .col').width();
        var slideHeight = $('.demoList__row .col').height();
        $('.s2').height(slideWidth*10);

        var scene = new ScrollMagic
            .Scene({
                triggerElement: ".s2",    // the scene should last for a scroll distance of 100px
                duration: slideWidth*10,
                offset: "0",       // start this scene after scrolling for 50px
                loglevel: 3,
            })
            .on("add", function (event) {
            })
            .on("enter", function (event) {
            })
            .on("end", function (event) {
            })
            .on("leave", function (event) {
                console.log("Scene left.");
            })
            .on("progress", function (event) {
                // console.log("Scene progress changed to " + event.progress.toFixed(3)*100);
                $("#ctrlSlider").slider('value',event.progress.toFixed(3)*100);
                console.log(event.progress.toFixed(1)*10);
                var progress = event.progress.toFixed(1)*10;
                vm.listPosition = progress;
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

        // get the scene's trigger position
        var triggerPosition = scene.triggerPosition();
        // console.log("triggerPosition"+triggerPosition );

        $(window).resize(function(event) {
            /* Act on the event */
            s2Height = $('.s2').height();
            scene.duration(s2Height);
            start = scene.scrollOffset();
            end = scene.scrollOffset() + scene.duration();
        });

        $("#ctrlSlider").slider({
            slide: function( event, ui ) {
                var diff = (end-start)/100;
                $(window).scrollTop(start+(diff*ui.value))
            }
        });
        
    }
});

