// slow scrolling
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});

//mobile menu 
(function ($) {
    $(function () {
        $('.menu__icon').on('click', function () {
            $(this).closest('.menu')
                .toggleClass('menu_state_open');
        });

        $('.menu__links-item').on('click', function () {
            // do something

            $(this).closest('.menu')
                .removeClass('menu_state_open');
        });
    });
})(jQuery);

// percentage circle in 'our service' section
$(function () {
    $(".dial ").knob({
        'format': function (value) {
            return value + '%';
        }
    });
});

// init google map
function init_map() {
    var myOptions = {
        zoom: 10, center: new google.maps.LatLng(49.839683, 24.029717000000005),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(49.839683, 24.029717000000005) }); infowindow = new google.maps.InfoWindow({ content: '<strong>Название</strong><br>Украина, Львов<br>' });
    google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker); }); infowindow.open(map, marker);
} google.maps.event.addDomListener(window, 'load', init_map);

// hide-map
$("#show-map").click(function () {
    $("#gmap_canvas").removeClass("hide-map");
    $('#show-map').css('display', 'none');
});

//slider
$('.team-section').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.white-block').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.vertical-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
});