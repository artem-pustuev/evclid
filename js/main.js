

// -----Бургер-------

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('._lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
//--------------------------


// -----------Слайдер-------
var swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
//--------------------------


// ------------Tабы----------
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.job__btn').forEach(function (btn) {
        btn.addEventListener('click', function (p) {
            const path = p.currentTarget.dataset.path
            document.querySelectorAll('.job__content').forEach(function (jobContent) {
                jobContent.classList.remove('job__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('job__content-active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.job__btn').forEach(function (e) {
        e.addEventListener('click', function (q) {
            const active = q.currentTarget.dataset.active
            document.querySelectorAll('.job__btn').forEach(function (jobBtn) {
                jobBtn.classList.remove('job__btn_active')
            })
            document.querySelector(`[data-active="${active}"]`).classList.add('job__btn_active')
        })
    })
})
// ------------------------------
//-------------------------------
$(function () {
    $("#accordion").accordion({
        collapsible: "true",
        heightStyle: "container",
        active: "fulse"
    });
});
