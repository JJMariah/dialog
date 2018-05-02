var showBtn = document.getElementById('comment-show-btn');
var closeBtn = document.getElementById('comment-hide-btn');
var slider =  document.getElementById('slider');
var sliderWrap = document.getElementById('slider-wrap');

// 触发显示滑动
showBtn.addEventListener('click', function () {
    // 页面的可视高度
    var height = window.innerHeight;
    // 评论区滑动到的可视高度的2/3位置
    var commentDOM = height * 2 / 3 + 'px';
    // 设置slider的高度
    slider.style.height = commentDOM;
    // 显示模态框
    sliderWrap.style.display = 'block';
    // 添加class，滑动出现
    slider.className = 'slider slider-show';
    // 背景，渐变出现
    sliderWrap.className = 'slider-wrap slider-wrap-black';

})
// 隐藏模态框
closeBtn.addEventListener('click', function () {
    // 隐藏模态框，滑动消失
    slider.className = 'slider slider-hide';
    // 隐藏背景，渐变消失
    sliderWrap.className = 'slider-wrap slider-wrap-white';
    // 添加定时器1s后，动画消失，隐藏整个评论区，防止按钮多次点击
    var time = setTimeout(function () {
        sliderWrap.style.display = 'none';
        clearTimeout(time);
    }, 1000);
})