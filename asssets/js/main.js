/**
 * Created by Liang Xu on 2017/1/16.
 */

$(document).ready(function(){

    toggle_nav_container();
    gotoByScroll();

});



//折叠导航栏

var toggle_nav_container = function () {
    //取得对象
    var $toggleButton = $('#toggle_m_nav');
    $navContainer = $('#m_nav_container');
    $menuButton = $('#m_nav_menu')
    $menuButtonBars = $('.m_nav_ham');
    $wrapper = $('#wrapper');


    $toggleButton.on("click", function(){


        // if 语句来确定 nav 容器是否已经被切换

        if($navContainer.is(':hidden'))
        {
            $wrapper.removeClass('closed_wrapper');
            $wrapper.addClass("open_wrapper");
            $navContainer.slideDown(200).addClass('container_open');
            $menuButtonBars.removeClass('button_closed');
            $menuButtonBars.addClass('button_open');
            $("#m_ham_1").addClass("m_nav_ham_1_open");
            $("#m_ham_2").addClass("m_nav_ham_2_open");
            $("#m_ham_3").addClass("m_nav_ham_3_open");

        }
        else
        {
            $navContainer.removeClass('container_open').slideUp(200);
            $menuButtonBars.removeClass('button_open');
            $menuButtonBars.addClass('button_closed');
            $wrapper.removeClass('open_wrapper');
            $wrapper.addClass("closed_wrapper");
            $("#m_ham_1").removeClass("m_nav_ham_1_open");
            $("#m_ham_2").removeClass("m_nav_ham_2_open");
            $("#m_ham_3").removeClass("m_nav_ham_3_open");

        }
    });


}






// 使导航栏可以通过点击缓慢滚动定位

var gotoByScroll = function (){

    $(".m_nav_item a").on("click", function(e) {
    	//阻止冒泡
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 100
        }, "slow");

    });

}









