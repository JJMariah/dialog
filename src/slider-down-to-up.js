/**
 * Created by Administrator on 2018/4/27.
 */


// 触发显示滑动
var showBtn = document.getElementById('comment-show-btn');
showBtn.addEventListener('click', function () {

    var height = window.innerHeight;

    var commentDOM = height*2/3+'px';

    document.getElementById('slider').style.height = commentDOM;

    document.getElementById('slider-wrap').style.display = 'block';
    // document.getElementById('slider').style.display = 'block';
    document.getElementById('slider').className = 'slider slider-show';
    document.getElementById('slider-wrap').className = 'slider-wrap slider-wrap-black';

})
// 隐藏模态框
var closeBtn = document.getElementById('comment-hide-btn');
closeBtn.addEventListener('click', function () {
    document.getElementById('slider').className = 'slider slider-hide';
    document.getElementById('slider-wrap').className = 'slider-wrap slider-wrap-white';
    var time = setTimeout(function () {
        document.getElementById('slider-wrap').style.display = 'none';
        // document.getElementById('slider').style.display = 'none';
        clearTimeout(time);
    }, 1000);
})
