/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
    var scrollMove = function (el) {
        var topPosition = 0;

        if($(el).offset() != null) {
            topPosition = $(el).offset().top;
        }

        $('body, html').stop();
        $('body, html').animate(
                {
                    scrollTop: topPosition
                },
                 "very slow");
    };

    var gallary = {
        currentNum: 0,
        currentPagging: 1,
        currentImg: $("#g1"),
        nextImg: $("#g2"),
        gallaryList: [{
            "src": "/content/photo/201901/5e9e58d2a43c40a599b8918bd72c9df5.jpg",
            "map": "https://goo.gl/maps/zccWjU2PuuZjFNsp7",
            "title": "뉴욕 타임스퀘어"
        },
            {
            "src": "/content/photo/201901/358880900eb04b75a2f854666f0bc2a8.jpg",
            "map": "https://goo.gl/maps/zccWjU2PuuZjFNsp7",
            "title": "뉴욕 타임스퀘어"
        },
            {
            "src": "/content/photo/201901/5063a11e33b543ceaf0749cd0c644ac6.jpg",
            "map": "https://goo.gl/maps/zccWjU2PuuZjFNsp7",
            "title": "뉴욕 타임스퀘어"
        },
            {
            "src": "/content/photo/201901/67b21996a3344742a5662171cd7677b8.jpg",
            "map": "https://goo.gl/maps/zccWjU2PuuZjFNsp7",
            "title": "뉴욕 타임스퀘어"
        },
            {
            "src": "/content/photo/201901/90278d132a464ce2aa2326c23c379790.jpg",
            "map": "https://goo.gl/maps/zccWjU2PuuZjFNsp7",
            "title": "뉴욕 타임스퀘어"
        },
            {
            "src": "/content/photo/201901/5d5a2304f96f4e25a92b660e6e5c9aec.jpg",
            "map": "https://goo.gl/maps/PxAYH9k1nmGUM1Wh8",
            "title": "LA 할리우드"
        },
            {
            "src": "/content/photo/201901/5370159d45a54ad6bb9051449b7906e9.jpg",
            "map": "https://goo.gl/maps/PxAYH9k1nmGUM1Wh8",
            "title": "LA 할리우드"
        },
            {
            "src": "/content/photo/201901/8f91f100acfe4d6eacec67ce43022063.jpg",
            "map": "https://goo.gl/maps/PxAYH9k1nmGUM1Wh8",
            "title": "LA 할리우드"
        },
            {
            "src": "/content/photo/201901/7c81dce4b6714f0e8f5a2e42205a7f2a.jpg",
            "map": "https://goo.gl/maps/PxAYH9k1nmGUM1Wh8",
            "title": "LA 할리우드"
        },
            {
            "src": "/content/photo/201901/3d1ef121f4f44514ab65c7840480f497.jpg",
            "map": "https://goo.gl/maps/PxAYH9k1nmGUM1Wh8",
            "title": "LA 할리우드"
        },
            {
            "src": "/content/photo/201901/1fa25ad4d21c43dbb600fb2005174f7d.jpg",
            "map": "https://j.map.baidu.com/Rc_kO",
            "title": "상해 신천지"
        },
            {
            "src": "/content/photo/201901/b025451ab5b44afb9ef69424633f0d28.jpg",
            "map": "https://j.map.baidu.com/Rc_kO",
            "title": "상해 신천지"
        },
            {
            "src": "/content/photo/201901/0f7091cb256146a78c93bc3511953e79.jpg",
            "map": "https://j.map.baidu.com/Rc_kO",
            "title": "상해 신천지"
        },
            {
            "src": "/content/photo/201901/b29b64c51d63420c9cb428463bd478b2.jpg",
            "map": "https://j.map.baidu.com/Rc_kO",
            "title": "상해 신천지"
        },
            {
            "src": "/content/photo/201901/2893a93c9b884928aadbfb2d9b15cd9c.jpg",
            "map": "https://j.map.baidu.com/Rc_kO",
            "title": "상해 신천지"
        },
            {
            "src": "/content/photo/201901/dd23d465008c49258d1139f8e779d2c1.jpeg",
            "map": "https://j.map.baidu.com/1w47G",
            "title": "상해 오각장"
        },
            {
            "src": "/content/photo/201901/702808571d2047e3888d1b35cf1a2f45.jpeg",
            "map": "https://j.map.baidu.com/1w47G",
            "title": "상해 오각장"
        },
            {
            "src": "/content/photo/201901/145961db0670414a928b64bf8c421eef.jpeg",
            "map": "https://j.map.baidu.com/1w47G",
            "title": "상해 오각장"
        },
            {
            "src": "/content/photo/201901/146fc63155994e798b31f213d2c428d2.jpeg",
            "map": "https://j.map.baidu.com/1w47G",
            "title": "상해 오각장"
        },
            {
            "src": "/content/photo/201901/56b8641c6c61474db265419a4b466e37.jpeg",
            "map": "https://j.map.baidu.com/1w47G",
            "title": "상해 오각장"
        },
            {
            "src": "/content/photo/201901/d3c8102c45434027a9387776f891eff1.jpg",
            "map": "https://goo.gl/maps/yCcZAidNeDJDisp49",
            "title": "서울 홍대"
        },
            {
            "src": "/content/photo/201901/ddcc6496131d42b298e813e71af3a192.jpg",
            "map": "https://goo.gl/maps/yCcZAidNeDJDisp49",
            "title": "서울 홍대"
        },
            {
            "src": "/content/photo/201901/a53e082ead634d11af867a543fc739cc.jpg",
            "map": "https://goo.gl/maps/yCcZAidNeDJDisp49",
            "title": "서울 홍대"
        },
            {
            "src": "/content/photo/201901/79d995a2b7ed41f4a21cd68f82345ed0.jpg",
            "map": "https://goo.gl/maps/yCcZAidNeDJDisp49",
            "title": "서울 홍대"
        },
            {
            "src": "/content/photo/201901/a5c965505eca4053a782cfc33059bb4b.jpg",
            "map": "https://goo.gl/maps/yCcZAidNeDJDisp49",
            "title": "서울 홍대"
        },
            {
            "src": "/content/photo/201901/dd9ecff05d5b4cdba743ef4b54bb7f28.jpg",
            "map": "https://goo.gl/maps/EnFfbuE58BjSA6Jr6",
            "title": "홍콩 APM"
        },
            {
            "src": "/content/photo/201901/3ca92e27fb2b47e6a83e5738d018a1e0.jpg",
            "map": "https://goo.gl/maps/EnFfbuE58BjSA6Jr6",
            "title": "홍콩 APM"
        },
            {
            "src": "/content/photo/201901/7ca5a82b6c8b49078166afbe1081f346.jpg",
            "map": "https://goo.gl/maps/EnFfbuE58BjSA6Jr6",
            "title": "홍콩 APM"
        },
            {
            "src": "/content/photo/201901/1529c3d6d36242e88b7defd4b95f992f.jpg",
            "map": "https://goo.gl/maps/EnFfbuE58BjSA6Jr6",
            "title": "홍콩 APM"
        },
            {
            "src": "/content/photo/201901/775825a19f82425bab06a287b5962515.jpg",
            "map": "https://goo.gl/maps/EnFfbuE58BjSA6Jr6",
            "title": "홍콩 APM"
        },
            {
            "src": "/content/photo/201901/e155bad243fc44d889c887718c32e790.jpg",
            "map": "https://goo.gl/maps/ftg37sZNvodKH6M66",
            "title": "도쿄 하라주쿠"
        },
            {
            "src": "/content/photo/201901/cf367a5e336e401e9aa7b343593bc9bd.jpg",
            "map": "https://goo.gl/maps/ftg37sZNvodKH6M66",
            "title": "도쿄 하라주쿠"
        },
            {
            "src": "/content/photo/201901/e947dfdee97e444ba4b10808dfe856fd.jpg",
            "map": "https://goo.gl/maps/ftg37sZNvodKH6M66",
            "title": "도쿄 하라주쿠"
        },
            {
            "src": "/content/photo/201901/353a860d003a4715826b4fc28a51bf00.jpg",
            "map": "https://goo.gl/maps/ftg37sZNvodKH6M66",
            "title": "도쿄 하라주쿠"
        },
            {
            "src": "/content/photo/201901/701fa4d1c8c14e14972848f2d69ec031.jpg",
            "map": "https://goo.gl/maps/ftg37sZNvodKH6M66",
            "title": "도쿄 하라주쿠"
        },
            {
            "src": "/content/photo/201901/ba24d80a37bc419f95cffc0e670cd57d.jpg",
            "map": "https://goo.gl/maps/bTkhioPpiYjQkkEA8",
            "title": "방콕 라인빌리지"
        },
            {
            "src": "/content/photo/201901/c74c595e07454451a3ba38c052d476a4.jpg",
            "map": "https://goo.gl/maps/bTkhioPpiYjQkkEA8",
            "title": "방콕 라인빌리지"
        },
            {
            "src": "/content/photo/201901/6878a5d9628c4db9ad56aa4c01c35e96.jpg",
            "map": "https://goo.gl/maps/bTkhioPpiYjQkkEA8",
            "title": "방콕 라인빌리지"
        },
            {
            "src": "/content/photo/201901/c8fadf09d2f0436e80da21b6904eab37.jpg",
            "map": "https://goo.gl/maps/bTkhioPpiYjQkkEA8",
            "title": "방콕 라인빌리지"
        },
            {
            "src": "/content/photo/201901/abc9747413ce48f68b90dac594ada2a1.jpg",
            "map": "https://goo.gl/maps/bTkhioPpiYjQkkEA8",
            "title": "방콕 라인빌리지"
        },
            ],

        getImgNum: function (num) {
            return this.gallaryList[num];
        },

        next: function () {
            if (this.currentNum % 5 != 4) {
                this.currentNum += 1;
                if (this.currentNum > this.gallaryList.length) this.currentNum = 0;
                this.choose(this.currentNum % 5);
            } else {
                this.nextPage();
            }
        },

        prev: function () {
            if (this.currentNum % 5 != 0) {
                this.currentNum -= 1;
                if (this.currentNum < 0) this.currentNum = this.gallaryList.length - 1;
                this.choose(this.currentNum % 5);
            } else {
                this.prevPage();
            }
        },

        /**
         * 0~4까지 숫자만 넘어옴
         */
        choose: function (num) {
            this.currentImg.stop();
            this.nextImg.stop();
            var chooseNum = (this.currentPagging - 1) * 5 + num;

            $(".img_rolling a").removeClass("on");

            var result = gallary.getImgNum(chooseNum);
            $("#gallary_title").html(result.title);
            $("#gallary_title").parent().attr("href", result.map);
            this.nextImg.attr("src", result.src);

            $($(".img_rolling a")[num]).addClass("on");

            this.show();
        },

        /**
         * 전체 이미지 갱신
         */
        reloadPage: function () {
            this.currentPagging = Math.ceil((this.currentNum + 1) / 5);
            $(".img_rolling a").removeClass("on");

            $(".img_rolling img").each(function (num) {
                var result = gallary.getImgNum((gallary.currentPagging - 1) * 5 + num);
                this.src = result.src;
            });

            $($(".img_rolling a")[this.currentNum % 5]).addClass("on");
        },

        prevPage: function () {
            this.currentNum -= (this.currentNum % 5 + 1);
            if (this.currentNum < 0) this.currentNum = this.gallaryList.length - 1;
            this.reloadPage();
            this.choose(this.currentNum % 5);
        },

        nextPage: function () {
            this.currentNum += (5 - this.currentNum % 5);
            if (this.currentNum > this.gallaryList.length - 1) this.currentNum = 0;
            this.reloadPage();
            this.choose(this.currentNum % 5);
        },

        show: function () {
            var next = this.nextImg;
            var current = this.currentImg;
            //next.css('z-index',2);//move the next image up the pile

            current.fadeOut();
            $(next).fadeIn(1000);

            this.currentImg = next;
            this.nextImg = current;
        }
    }

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    var cycleImages = {
        autoTimer: 0,
        current: 0,
        next: function () {
            var next = (this.current + 1 == $('.spot_bg_img img').length) ? 0 : this.current + 1;
            this.show($('.spot_bg_img img')[next]);
        },

        prev: function () {
            var prev = (this.current == 0) ? $('.spot_bg_img img').length - 1 : this.current - 1;
            this.show($('.spot_bg_img img')[prev]);
        },

        choose: function (num) {
            this.show($($('.spot_bg_img img')[num]));
        },

        show: function (view) {

            $('.page a').each(function () {
                $(this).removeClass('on');
            })

            var $active = $($('.spot_bg_img img')[this.current]);

            $active.stop();

            this.current = $(view).data("img");

            $('#img' + $(view).data("img")).addClass("on");
            // $(view).css('z-index',2);//move the next image up the pile
            $active.fadeOut();
            $(view).fadeIn(1000);
            /*
            $('#background_cycler')
                .animate({opacity: 0}, 'slow', function() {
                    $(this)
                     .css({'background-image': 'url(../img/01.jpg)', 'background-position':'center' })
                     .animate({opacity: 1});
            });
            */
        }
    }

    $(function () {
        $(window).bind("scroll", function () {
            let scrollPosition = window.pageYOffset;
            let $aboutTop = $('#about').offset().top;
            let $businessTop = $('#business').offset().top;
            let $galleryTop = $('#gallery').offset().top;
            let $mediaTop = $('#media').length ? $('#media').offset().top : 99999;
            let $noticeTop = $('#notice').length ? $('#notice').offset().top : 99999;

            if(scrollPosition >= $noticeTop) {
                $('.navi a').removeClass('on');
                $('.navi .notice').addClass('on');
            } else if(scrollPosition >= $mediaTop) {
                $('.navi a').removeClass('on');
                $('.navi .media').addClass('on');
            } else if(scrollPosition >= $galleryTop) {
                $('.navi a').removeClass('on');
                $('.navi .gallery').addClass('on');
            } else if(scrollPosition >= $businessTop) {
                $('.navi a').removeClass('on');
                $('.navi .business').addClass('on');
            } else if(scrollPosition >= $aboutTop) {
                $('.navi a').removeClass('on');
                $('.navi .about').addClass('on');
            }
        });
    });

    $(window).resize(function () {
        // 이미지 사이즈 1800*1160
        resizeGally();
    });

    function resizeGally() {
        var width = document.body.scrollWidth;
        var height = document.documentElement.clientHeight;

        // 가로가 클때
        if (width * 116 > 180 * height) {

            $('.spot_bg_img img').addClass("portrait");
            $('#g2').addClass("portrait");
            $('#g1').addClass("portrait");
        } else {

            $('.spot_bg_img img').removeClass("portrait");
            $('#g2').removeClass("portrait");
            $('#g1').removeClass("portrait");
        }
    }

    resizeGally();

    $(".clse").on("click", function () {
        $('#movie').hide();
        $('#movie2').hide();
        $('#movieDim').hide();
        $("body").css({overflow: 'scroll'});
    });

    $(".showMovie").on("click", function (event) {
        if ("中文(简体)" === "한국어") {
            alert("在准备中。");
            return;
        }

        if ($(this).data("movie") == 1) {
            //$('#movie').show();
            //$('#movie2').hide();
            //$('#movieDim').show();
            //$("body").css({overflow:'hidden'})
            window.open("https://www.youtube.com/channel/UC9HtPH9bBaUHueFdb5ygP5Q", "movie");
        } else {
            window.open("https://www.youtube.com/channel/UCINr5W7cwW06ADtsszAToAw", "movie");
            //$('#movie2').show();
            //$('#movie').hide();
            //$('#movieDim').show();

            //$("body").css({overflow:'hidden'})
        }
    });

    $(document).ready(function () {
        pagenation();
    });

    $(window).on('hashchange', function () {
        pagenation();
    });

    var screen = [];
    screen["pr"] = 1;
    screen["prTotal"] = 20.0;
    screen["noti"] = 1;
    screen["notiTotal"] = 6.0;

    function changePgScreen(type, num) {
        if (screen[type] == num) return;

        var end = screen[type + "Total"];
        var nextflag = false;
        screen[type] = num;

        if (num * 5 < end) {
            end = num * 5;
            nextflag = true;
        }
        var startNum = (num - 1) * 5 + 1;

        var html = "<ul>";

        if (num > 1) {
            html += '<li><a href="#' + type + '_page' + (startNum - 1) + '"><span class="currentPage">&lt</span></a></li>'
        }

        for (; startNum <= end; startNum++) {
            html += '<li><a href="#' + type + '_page' + startNum + '"><span class="currentPage">' + startNum + '</span></a></li>'
        }

        if (nextflag) {
            html +=
              '<li><a href="#' + type + '_page' + (end + 1) + '"><span class="currentPage">&gt</span></a></li>'
        }
        html += "</ul>";
        console.log("." + type + "_paginate");
        $("." + type + "_paginate").html(html);
    }

    function pagenation() {
        var page = window.location.hash;
        var type = "";

        if (page.indexOf("#noti_page") > -1) {
            type = "noti";
        } else if (page.indexOf("#pr_page") > -1) {
            type = "pr";
        }

        if (type == "") return;

        var pageNum = page.replace("#" + type + "_page", "");
        var screenNum = Math.ceil(pageNum / 5);

        changePgScreen(type, screenNum);

        $.ajax({
            url: "/" + type + "List/" + pageNum,
            method: "get",
            contentType: "text/html",
            success: function (data) {
                $("." + type + "_paginate span").addClass("currentPage");
                $("." + type + "_paginate span").each(function() {
                    if (this.innerText == pageNum) {
                        $(this).removeClass("currentPage");
                    }
                })
                $("." + type + "_content").html(data);
            }
        });
    }

    $(window).scroll(function(){
        if ($(document).scrollTop() > 0) {
            $('#header').addClass('fix');
        } else {
            $('#header').removeClass('fix');
        }
    });

    $('.thumb a').click(function(){
        event.preventDefault();
        $('.ly_pop_wrap').addClass('opn');
    });

    $('.ly_pop_wrap .clse').click(function(){
        event.preventDefault();
        $('.ly_pop_wrap').removeClass('opn');
    });













    $('#worksCard').click(function(){
        event.preventDefault();
        $('.ly_pop_wrap').addClass('opn');
    });

    $('.ly_pop_wrap .clse').click(function(){
        event.preventDefault();
        $('.ly_pop_wrap').removeClass('opn');
    });

    $('.ly_pop_wrap .dim').click(function(){
        event.preventDefault();
        $('.ly_pop_wrap').removeClass('opn');
    });





    
