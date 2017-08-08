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
    console.log('document.ready');
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
    mounted: function () {
        console.log("init mixins");
    }
});

var app = new Vue({
    el: '#el',
    data: {
        selectOpt:"",
        selectLists: lists
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
        }
    },
    created: function () {
    },
    mounted: function () {
        console.log("app mounted");
    }
});

