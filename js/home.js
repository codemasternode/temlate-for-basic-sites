$(document).ready(() => {
    let backButton = $('.flying-icons')
    let aboutUs = $('#about_us')

    onScroll()
    onResize()

    function showOrHideBackButton() {
        if ($(this).scrollTop() > aboutUs.offset().top - 400 && $(window).width() > 1000) {
            backButton.fadeIn('slow')
            console.log('asd')
        } else {
            backButton.hide()
        }
    }

    backButton.click((e) => {
        e.preventDefault()
        $('body,html').animate({
            scrollTop: $('main').offset().top - 100
        }, 300)
    })

    $('#main_site a').click((e) => {
        e.preventDefault()
        let target = e.target.attributes.href.nodeValue
        $('body,html').animate({
            scrollTop: $(target).offset().top
        }, 300)
    })

    function onResize() {
        showOrHideBackButton()
    }

    function onScroll() {
        showOrHideBackButton()
    }

    $(window).scroll(onScroll)
    $(window).resize(onResize)

})