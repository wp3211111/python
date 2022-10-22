$(document).ready(function () {
    var myClass = window.location.href.indexOf('indexen')>-1 ? 'en' : ''

    if(window.location.href.indexOf('login') > -1){

        // $('.nav-links a')[0].href = $('.nav-links a')[0].href+'?loginTrue'
        // $('.nav-links a')[1].href = $('.nav-links a')[1].href+'?loginTrue'
        $('.btn-wrap>a').hide()
        $('.btn-gradient').hide()
    }


    $('body').append(
        ` <div class="intro-overlay">
            <div class="logo-wrap">
                <div class="logo-bw ${myClass}"></div>
                <div class="logo-cl ${myClass}"></div>
            </div>
        </div>`
    )

    const header = $('.header');
    const footer = $('.footer');

   

        $(window).on('scroll load resize', function () {
            const wScroll = $(window).scrollTop();
            const elPos = header.offset().top;

            if (wScroll == 0) {
                header.removeClass('is-fixed');
            } else {
                header.addClass('is-fixed');
            }
        })


        let $el, leftPos, newWidth,
            $mainNav = $(".nav-links");

        $mainNav.append("<span id='magic-line'></span>");

        var $magicLine = $("#magic-line");
        if(location.href.indexOf('batistuta')!=-1){
            $('.nav-links.row').children('li').removeClass('active');
            $('.nav-links.row').children('li').eq(1).addClass('active');
        } 

        $magicLine
            .width($(".active").width())
            .css("left", $(".active a").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());

        $(".nav-links li a").hover(function () {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            });
        }, function () {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });
        });

        const headerTL = gsap.timeline({ defaults: { ease: "expo.inOut", duration: 1 } });

        headerTL
            .set('body', { overflow: "hidden" })
            .to('.logo-cl', { height: "100%", duration: 3 })
            .to('.logo-wrap', { yPercent: 50, autoAlpha: 0 }, "-=1")
            .to('.intro-overlay', {
                yPercent: -100, ease: "power3.out",
                onComplete: function () {
                    gsap.set('body', {
                        overflow: 'initial'
                    })
                }
            })
            .to('.slide-up', { y: 0, stagger: 0.3, ease: "power4.out" }, "-=0.7")
            .set('#magic-line', { height: 2, y: 20, scaleX: 0.02, scaleY: 1, }, "-=0.55")
            .to('#magic-line', { y: 0, }, "<")
            .to('#magic-line', { scaleX: 1, scaleY: 1, }, "-=0.6")
            .to('.header .nav-links li.active a', { color: "#fff" }, "-=1");

        

        const isLogin = localStorage.getItem("HX1.CHCHE.token") !== "undefined";

        if (isLogin) {
            $(".btn-wrap").hide();
        }
    // });


    $(".yueyuebao").on("click", function () {
         
         if(new Date() <= new Date('2021/07/31 23:59:59')){
            $('.dialog').show()
            return false
         }
        
    })
    $(".closeBtn").on("click", function () {
        $('.dialog').hide()
        return false
    })
    if(new Date() > new Date('2021/07/31 23:59:59')){
        $('.addlink').attr('href','/everyMonthBurst')
    }
    
});
