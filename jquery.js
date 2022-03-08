// スムーズスクロール //
$(function(){
    $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top -80;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
});

// ページトップへ戻るボタン //
jQuery(function(){
    let appear = false;
    let pagetop = $('#page_top'); 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                'bottom': '0px'
                },300);
            }
        } else{
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom' : '-150px'
                },300);
            }
        }        
    });
    pagetop.click(function(){
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

//ふわっと出る//

$(function(){
    $(window).scroll(function(){
        $('.scrollbox').each(function(){
            var elemPos=$(this).offset().top;
            var scroll=$(window).scrollTop();
            var windowHeight=$(window).height();
            if(scroll>elemPos-windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    });
});

// ↓ハンバーガーメニュー関連↓ //
$(function(){
    /*SP menu */
    function toggleNav(){
        let body = document.body;
        let hamburger = document.getElementById('nav_btn');
        let blackBg = document.getElementById('nav_bg');
        hamburger.addEventListener('click',function(){
            body.classList.toggle('nav_open');//メニュークリックでnav-openというクラスがbodyに付与
        });
        blackBg.addEventListener('click',function(){
            body.classList.remove('nav_open');//もう一度クリックで解除
        });
    }
    toggleNav();
});
// ↑ハンバーガーメニュー関連↑ //