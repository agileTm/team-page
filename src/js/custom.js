$(document).ready(function () {
    /*---화면 가로값, 세로값 조정---*/
    var winH;
    winH = $(window).height();
    $('#main,#agile,#member,#service,#raodmap,#footer').height(winH);
    var winW = $(window).width();
    /*---마우스휠이벤트---*/
    var speed = 1000;
    var ease = "easeOutExpo";
    $(".wrap>div").on("mousewheel", function (event, delta) {
        event.preventDefault();
        //마우스 휠을 올렸을때
        if (delta > 0) {
            var tg = $(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop": tg}, speed, ease);
            //마우스 휠을 내렸을때
        } else if (delta < 0) {
            var tg = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop": tg}, speed, ease);
        }
    });

    /*---로드맵제어---*/
    $('.d_roadmap').css({'display': 'block'});
    $('.m_roadmap').css({'display': 'none'});

    if (winW <= 768) {
        /*---로드맵제어---*/
        $('.d_roadmap').css({'display': 'none'});
        $('.m_roadmap').css({'display': 'block'});
    }

    /*---탑이동버튼---*/
    $('.topBtn').css({'display': 'none'});

    /*---리사이즈---*/
    $(window).on('resize', function () {
        winH = $(window).height();
        $('#main,#agile,#member,#service,#raodmap,#footer').height(winH);
        $('.topBtn').css({'display': 'none'});


        var winW = $(window).width();

        /*---마우스휠이벤트---*/
        var speed = 1000;
        var ease = "easeOutExpo";

        $(".wrap>div").on("mousewheel", function (event, delta) {
            event.preventDefault();
            //마우스 휠을 올렸을때
            if (delta > 0) {
                var tg = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop": tg}, speed, ease);
                //마우스 휠을 내렸을때
            } else if (delta < 0) {
                var tg = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop": tg}, speed, ease);
            }
        });

        /*---로드맵제어---*/
        $('.d_roadmap').css({'display': 'block'});
        $('.m_roadmap').css({'display': 'none'});

        if (winW <= 768) {
            /*---로드맵제어---*/
            $('.d_roadmap').css({'display': 'none'});
            $('.m_roadmap').css({'display': 'block'});
        }

    });

    /*---스크롤 이벤트---*/
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();

        var pos1 = $('#main').offset().top - 10;
        var pos2 = $('#agile').offset().top - 10;
        var pos3 = $('#member').offset().top - 10;
        var pos4 = $('#service').offset().top - 10;
        var pos5 = $('#raodmap').offset().top - 10;
        var pos6 = $('#footer').offset().top - 10;


        $('.main_tit').removeClass('on');
        $('.topBtn').css({'display': 'none'});


        if (scroll >= pos1 && scroll < pos2) {
            /*main*/
            $('.main_tit,.topBtn').addClass('on');
            $('.topBtn').css({'display': 'none'});

        }
        if (scroll >= pos2 && scroll < pos3) {
            /*agile*/
            $('.agile_explain_tit,.agile_explain_txt,.agile_explain_img').addClass('top_ani');
            $('.agile_explain_tit,.agile_explain_txt,.agile_explain_img').stop().animate({'opacity': '1'}, 800);
            $('.topBtn').css({'display': 'block'});
        }
        if (scroll >= pos3 && scroll < pos4) {
            /*member*/
            $('.member_list>div').addClass('top_ani');
            $('.member_list>div').stop().animate({'opacity': '1'}, 800)
            $('.topBtn').css({'display': 'block'});
        }
        if (scroll >= pos4 && scroll < pos5) {
            /*service*/
            $('.service_explain_tit,.service_explain_txt,.service_explain_img').addClass('top_ani');
            $('.service_explain_tit,.service_explain_txt,.service_explain_img').stop().animate({'opacity': '1'}, 800)
            $('.topBtn').css({'display': 'block'});
        }
        if (scroll >= pos5 && scroll < pos6) {
            /*roadmap*/
            $('.p_1').stop().animate({"top": "25%"}, 600);
            $('.p_2').stop().animate({"top": "30%"}, 600);
            $('.p_3').stop().animate({"top": "35%"}, 600);
            $('.p_4').stop().animate({"top": "40%"}, 600);
            $('.p_5').stop().animate({"top": "45%"}, 600);
            $('.p_6').stop().animate({"top": "50%"}, 600);
            $('.p_7').stop().animate({"top": "55%"}, 600);
            $('.p_8').stop().animate({"top": "60%"}, 600);
            $('.p_9').stop().animate({"top": "65%"}, 600, function () {
                $('.d_roadmap .airplane').stop().animate({'opacity': '1', 'top': '30%', 'left': '85%'}, 1400);
                $('.step_5>div:eq(0)').stop().animate({
                    'top': '35%',
                    'left': '2%',
                    'opacity': '1'
                }, 'easeInElastic', function () {
                    $('.step_5>div:eq(1)').stop().animate({
                        'top': '44%',
                        'left': '20%',
                        'opacity': '1'
                    }, 'easeInElastic', function () {
                        $('.step_5>div:eq(2)').stop().animate({
                            'top': '53%',
                            'left': '38%',
                            'opacity': '1'
                        }, 'easeInElastic', function () {
                            $('.step_5>div:eq(3)').stop().animate({
                                'top': '62%',
                                'left': '56%',
                                'opacity': '1'
                            }, 'easeInElastic', function () {
                                $('.step_5>div:eq(4)').stop().animate({
                                    'top': '71%',
                                    'left': '74%',
                                    'opacity': '1'
                                }, 'easeInElastic');
                            });
                        });
                    });
                });
            });

            $('.m_roadmap .airplane').stop().animate({'opacity': '1', 'top': '50%'}, 1400);
            $('.topBtn').css({'display': 'block'});
        }
        if (scroll >= pos6) {
            /*footer*/
            $('.topBtn').css({'display': 'block'});
        }

    });


    $('.topBtn').on('click', function () {
        $('body,html').stop().animate({'scrollTop': 0});
    });

    $( "#lan" ).change(function() {
        changeLan(this.value);
    });
});
