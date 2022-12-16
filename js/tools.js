$(document).ready(function() {

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

	$('body').on('keyup', '.form-input input, .form-input textarea', function() {
		if ($(this).val() != '') {
			$(this).parent().addClass('full');
		} else {
			$(this).parent().removeClass('full');
		}
	});

	$('body').on('click', '.form-input-clear', function(e) {
		$(this).parent().find('input').val('').trigger('change').trigger('blur');
		e.preventDefault();
	});

    $('body').on('change', '.form-file input', function() {
        var curInput = $(this);
        var curField = curInput.parents().filter('.form-file');
        var curName = curInput.val().replace(/.*(\/|\\)/, '');
        if (curName != '') {
            curField.find('.form-file-input span').html('<em>' + curName + '<a href="#"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#input-file-remove"></use></svg></a></em>');
            curField.addClass('full');
        } else {
            curField.find('.form-file-input span').html(curField.find('.form-file-input span').attr('data-placeholder') + '<svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#input-file"></use></svg>');
            curField.removeClass('full');
        }
    });

    $('body').on('click', '.form-file-input span em a', function(e) {
        var curField = $(this).parents().filter('.form-file');
        curField.find('input').val('');
        curField.find('.form-file-input span').html(curField.find('.form-file-input span').attr('data-placeholder') + '<svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#input-file"></use></svg>');
        curField.removeClass('full');
        e.preventDefault();
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('body').on('click', '.window-link', function(e) {
        var curLink = $(this);
        if (curLink.attr('href')) {
            windowOpen(curLink.attr('href'));
            e.preventDefault();
        } else if (curLink.attr('data-href')) {
            windowOpen(curLink.attr('data-href'));
            e.preventDefault();
        }
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('.gallery').each(function() {
        var curGallery = $(this);
        curGallery.on('init', function(event, slick) {
            var curSlide = curGallery.find('.slick-current');
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-dots').css({'top': curPhotoHeight});
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
        var options = {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-next"></use></svg></button>',
            adaptiveHeight: true,
            fade: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        fade: false,
                        arrows: false
                    }
                }
            ]
        };
        curGallery.slick(
            options
        ).on('setPosition', function(event, slick) {
            var curSlide = curGallery.find('.slick-current');
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-dots').css({'top': curPhotoHeight});
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var curSlide = curGallery.find('.slick-slide:not(.slick-cloned)').eq(nextSlide);
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-dots').css({'top': curPhotoHeight});
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
    });

    $('.header-location-link').click(function(e) {
        $('.header-location').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.header-location').length == 0) {
            $('.header-location').removeClass('open');
        }
    });

    $('.header-location-list-inner').mCustomScrollbar({
        axis: 'y'
    });

    $('.header-search-link').click(function(e) {
        $('.header-search-form').addClass('open');
        e.preventDefault();
    });

    $('.header-search-link').click(function(e) {
        $('.header-search-form').addClass('open');
        e.preventDefault();
    });

    $('.header-search-close').click(function(e) {
        $('.header-search-form').removeClass('open');
        e.preventDefault();
    });

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
    }).on('setPosition', function(event, slick) {
        var curIndex = $('.slider-list').slick('slickCurrentSlide');
        $('.slider-list .slick-dots li button.active').removeClass('active');
        $('.slider-list .slick-dots li button').eq(curIndex).addClass('active');

    });

    $('.faq-item-title').click(function(e) {
        $(this).parent().toggleClass('open');
        e.preventDefault();
    });

    $('.support').each(function() {
        var curBlock = $(this);
        var curHTML = '<ul>';
        curBlock.find('h2').each(function() {
            var curTitle = $(this);
            curHTML += '<li><a href="#' + curTitle.attr('id') + '">' + curTitle.html() + '</a></li>';
        });
        curHTML += '</ul>';
        $('.support-menu-inner').html(curHTML);
    });

    $('body').on('click', '.support-menu-inner a', function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top - 50});
            e.preventDefault();
        }
    });

    $('.company-info-block-photos-list').each(function() {
        var curGallery = $(this);
        curGallery.on('init', function(event, slick) {
            var curSlide = curGallery.find('.slick-current');
            var curPhotoHeight = curSlide.find('.company-info-block-photos-item-img').outerHeight();
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
        var options = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#company-info-block-photos-list-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#company-info-block-photos-list-next"></use></svg></button>',
            dots: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            ]
        };
        curGallery.slick(
            options
        ).on('setPosition', function(event, slick) {
            var curSlide = curGallery.find('.slick-current');
            var curPhotoHeight = curSlide.find('.company-info-block-photos-item-img').outerHeight();
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var curSlide = curGallery.find('.slick-slide:not(.slick-cloned)').eq(nextSlide);
            var curPhotoHeight = curSlide.find('.company-info-block-photos-item-img').outerHeight();
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
    });

    $('body').on('click', '.news-card-ctrl-social-link-ok', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://connect.ok.ru/offer?url=' + curUrl, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.news-card-ctrl-social-link-tw', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('http://twitter.com/share?text=' + curTitle + '&url=' + curUrl + '&counturl=' + curUrl, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.news-card-ctrl-social-link-vk', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://vk.com/share.php?url=' + curUrl + '&description=' + curTitle, curTitle);

        e.preventDefault();
    });

    $('.roaming select').change(function() {
        var curForm = $('.roaming form');
        $('.roaming-results').addClass('loading');
        var formData = new FormData(curForm[0]);

        $.ajax({
            type: 'POST',
            url: curForm.attr('action'),
            processData: false,
            contentType: false,
            dataType: 'html',
            data: formData,
            cache: false
        }).fail(function(jqXHR, textStatus, errorThrown) {
            curForm.find('.message').remove();
            curForm.append('<div class="message message-error"><div class="message-title">Ошибка</div><div class="message-text">Сервис временно недоступен, попробуйте позже.</div></div>')
        }).done(function(html) {
            curForm.find('.message').remove();
            $('.roaming-results').html(html);
            $('.roaming-results').removeClass('loading');
        });
    });

    $('body').on('change', '.map-popup-search .form-input input', function() {
        var curAddress = $(this).val();
        console.log(curAddress);
        if (curAddress != '') {
            $('.search-results-submit').addClass('hidden');
            $('.search-results-clear').addClass('visible');

            ymaps.geocode(curAddress, {
                results: 1
            }).then(function(res) {
                var firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates(),
                bounds = firstGeoObject.properties.get('boundedBy');

                myMap.setBounds(bounds, {
                    checkZoomRange: true
                });
            });
        } else {
            $('.search-results-submit').removeClass('hidden');
            $('.search-results-clear').removeClass('visible');
        }
    });

    $('body').on('click', '.search-results-clear button', function() {
        $('.map-popup-search .form-input input').val('').trigger('change');
    });

    $('.map-operator').each(function() {
        updateMap();
    });

    $('.map-operator input').change(function() {
        updateMap();
    });

    $('body').on('change', '.map-popup-params input', function() {
        updateMapTiles();
    });

    $('.main-tariffs-header-type-current').click(function() {
        $(this).parent().toggleClass('open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.main-tariffs-header-type').length == 0) {
            $('.main-tariffs-header-type').removeClass('open');
        }
    });

    $('.main-tariffs-header-type-item').click(function() {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.main-tariffs-header-type-item.active').removeClass('active');
            curItem.addClass('active');
            $('.main-tariffs-header-type-current span').html(curItem.html());
            filterTariffs();
        }
        $('.main-tariffs-header-type').removeClass('open');
    });

    $('.main-tariffs-header-filter-current').click(function() {
        var curFilter = $(this).parent();
        if (curFilter.hasClass('open')) {
            curFilter.removeClass('open');
        } else {
            $('.main-tariffs-header-filter.open').removeClass('open');
            curFilter.addClass('open')
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.main-tariffs-header-filter').length == 0) {
            $('.main-tariffs-header-filter.open').removeClass('open');
        }
    });

    $('.main-tariffs-header-filter-item').click(function() {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            var curFilter = curItem.parent().parent();
            curFilter.find('.main-tariffs-header-filter-item.active').removeClass('active');
            curItem.addClass('active');
            curFilter.find('.main-tariffs-header-filter-current span').html(curItem.html());
            filterTariffs();
        }
        curFilter.removeClass('open');
    });

    $('.main-tariffs-list').each(function() {
        filterTariffs();
    });

    $('.footer-menu ul li a').click(function(e) {
        if ($(window).width() < 768) {
            var curLi = $(this).parent();
            if (curLi.find('ul').length == 1) {
                curLi.toggleClass('open');
                e.preventDefault();
            }
        }
    });

    $('.contacts-map').each(function() {
        $('html').addClass('page-contacts');
    });

    $('.mobile-menu-link').click(function(e) {
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('mobile-menu-open');
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        $('html').data('scrollTop', curScroll);
        $('.wrapper').css('margin-top', -curScroll);
        e.preventDefault();
    });

    $('.mobile-menu-close').click(function(e) {
        $('html').removeClass('mobile-menu-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $('.wrapper').css('margin-top', 0);
        $(window).scrollTop($('html').data('scrollTop'));
        e.preventDefault();
    });

    $('.mobile-menu-nav ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (curLi.find('ul').length == 1) {
            curLi.toggleClass('open');
            e.preventDefault();
        }
    });

    $('.mobile-menu-location-link').click(function(e) {
        $('.mobile-menu-location').toggleClass('open');
        e.preventDefault();
    });

});

function initForm(curForm) {
    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

	curForm.find('.form-input input').each(function() {
		if ($(this).val() != '') {
			$(this).parent().addClass('full');
		} else {
			$(this).parent().removeClass('full');
		}
	});

    curForm.find('.form-input input:focus, .form-input textarea:focus').each(function() {
        $(this).trigger('focus');
    });

    curForm.find('.form-input input').blur(function(e) {
        $(this).val($(this).val()).change();
    });

    curForm.find('.form-select select').each(function() {
        var curSelect = $(this);
        var options = {
            minimumResultsForSearch: 20
        }

        if (curSelect.parents().filter('.window').length == 1) {
            options['dropdownParent'] = $('.window-container');
        }

        if (curSelect.hasClass('select-with-img')) {
            options['templateResult'] = function(option) {
                if (!option.id) {
                    return option.text;
                }
                var $option = $('<img src="' + $(option.element).attr('data-img') + '" alt="" /> ' + option.text + '</span>');
                return $option;
            };
            options['templateSelection'] = function(option) {
                if (!option.id) {
                    return option.text;
                }
                var $option = $('<img src="' + $(option.element).attr('data-img') + '" alt="" /> ' + option.text + '</span>');
                return $option;
            };
        }

        if (curSelect.parent().hasClass('form-select-ajax')) {
            options['ajax'] = {
                url: curSelect.parent().attr('data-link'),
                dataType: 'json',
                data: function (params) {
                    var query = {
                        term: params.term,
                        _type: params._type
                    }
                    if (typeof(curSelect.parent().attr('data-params')) != 'undefined') {
                        var curParams = curSelect.parent().attr('data-params').split('&');
                        for (var i = 0; i < curParams.length; i++) {
                            var curParam = curParams[i].split('=');
                            query[curParam[0]] = curParam[1];
                        }
                    }
                    return query;
                }
            };
            options['minimumInputLength'] = 3;
            options['placeholder'] = curSelect.parent().attr('data-placeholder');
        }

        curSelect.select2(options);

        curSelect.parent().find('.select2-container').attr('data-placeholder', curSelect.attr('data-placeholder'));
        curSelect.parent().find('.select2-selection').attr('data-placeholder', curSelect.attr('data-placeholder'));
        curSelect.on('select2:select', function(e) {
            $(e.delegateTarget).parent().find('.select2-container').addClass('select2-container--full');
            if (typeof curSelect.attr('multiple') !== 'undefined') {
                $(e.delegateTarget).parent().find('.select2-container').addClass('select2-container--full-multiple');
            }
            curSelect.parent().find('select.error').removeClass('error');
            curSelect.parent().find('label.error').remove();
            curSelect.parent().find('select').addClass('valid');
        });

        curSelect.on('select2:unselect', function(e) {
            if (curSelect.find('option:selected').length == 0) {
                curSelect.parent().find('.select2-container').removeClass('select2-container--full select2-container--full-multiple');
                curSelect.parent().find('select').removeClass('valid');
            }
        });

        if (curSelect.val() != '' && curSelect.val() !== null) {
            curSelect.trigger({type: 'select2:select'})
            curSelect.parent().find('.select2-container').addClass('select2-container--full');
            curSelect.parent().find('select').addClass('valid');
            if (typeof curSelect.attr('multiple') !== 'undefined') {
                $(e.delegateTarget).parent().find('.select2-container').addClass('select2-container--full-multiple');
            }
        }
    });

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            if (curForm.hasClass('ajax-form')) {
                curForm.addClass('loading');
                var formData = new FormData(form);

                $.ajax({
                    type: 'POST',
                    url: curForm.attr('action'),
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    data: formData,
                    cache: false
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    curForm.find('.message').remove();
                    curForm.append('<div class="message message-error"><div class="message-title">Ошибка</div><div class="message-text">Сервис временно недоступен, попробуйте позже.</div></div>')
                    curForm.removeClass('loading');
                }).done(function(data) {
                    curForm.find('.message').remove();
                    if (data.status) {
                        curForm.html('<div class="message message-success"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                    } else {
                        curForm.append('<div class="message message-error"><div class="message-title">' + data.title + '</div><div class="message-text">' + data.message + '</div></div>')
                    }
                    curForm.removeClass('loading');
                });
            } else {
                form.submit();
            }
        }
    });
}

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a>');
            $('.window .window-loading').remove();
        }

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });

    });
}

function windowClose() {
    if ($('.window').length > 0) {

        var isEmptyForm = true;
        $('.window .form-input input, .window .form-input textarea, .window .form-select select').each(function() {
            if ($(this).val() != '') {
                isEmptyForm = false;
            }
        });
        if (isEmptyForm) {
            $('.window').remove();
            $('html').removeClass('window-open');
            $('body').css({'margin-right': 0});
            $('.wrapper').css({'top': 0});
            $('meta[name="viewport"]').attr('content', 'width=device-width');
            $(window).scrollTop($('.wrapper').data('curScroll'));
        } else {
            if (confirm('Закрыть форму?')) {
                $('.window .form-input input, .window .form-input textarea, .window .form-select select').val('');
                windowClose();
            }
        }
    }
}

function filterTariffs() {
    $('.main-tariffs-list-slider').stop();
    $('.main-tariffs-list-slider').animate({'opacity': 0}, 250, function() {
        var curType = 'all';
        if ($('.main-tariffs-header-type').length == 1) {
            curType = $('.main-tariffs-header-type-item.active').attr('data-value');
        }
        var curOperator = 'all';
        if ($('.main-tariffs-header-filter[data-filter="operators"]').length == 1) {
            curOperator = $('.main-tariffs-header-filter[data-filter="operators"] .main-tariffs-header-filter-item.active').attr('data-value');
        }
        var curConnection = 'all';
        if ($('.main-tariffs-header-filter[data-filter="connection"]').length == 1) {
            curConnection = $('.main-tariffs-header-filter[data-filter="connection"] .main-tariffs-header-filter-item.active').attr('data-value');
        }

        var newHTML =   '<div class="main-tariffs-list-slider-inner">';

        $('.main-tariffs-list .main-tariffs-item').each(function() {
            var curItem = $(this);
            var classOptimal = '';
            if (curItem.hasClass('optimal')) {
                classOptimal = ' optimal';
            }
            if (
                    (curType == 'all' || curItem.attr('data-type') == curType) &&
                    (curOperator == 'all' || curItem.attr('data-operator') == curOperator) &&
                    (curConnection == 'all' || curItem.attr('data-connection') == curConnection)
                ) {
                newHTML += '<div class="main-tariffs-item' + classOptimal + '">' + curItem.html() + '</div>';
            }
        });

        newHTML +=      '</div>';

        $('.main-tariffs-list-slider').html(newHTML);

        resizeTariffs();

        if ($('.main-tariffs-page').length == 0) {
            $('.main-tariffs-list-slider-inner').slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        $('.main-tariffs-list-slider').animate({'opacity': 1}, 250);
    });
}

function resizeTariffs() {
    $('.main-tariffs-list-slider').each(function() {
        var curList = $(this);

        curList.find('h4').css({'min-height': '0px'});

        curList.find('h4').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.main-tariffs-item').offset().top;

            curList.find('h4').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.main-tariffs-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });

        curList.find('.main-tariffs-item-info').css({'min-height': '0px'});

        curList.find('.main-tariffs-item-info').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.main-tariffs-item').offset().top;

            curList.find('.main-tariffs-item-info').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.main-tariffs-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });
}

$(window).on('load resize', function() {

    $('.main-prefs-list').each(function() {
        var curList = $(this);

        curList.find('.main-prefs-item-inner').css({'min-height': '0px'});

        curList.find('.main-prefs-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.main-prefs-item').offset().top;

            curList.find('.main-prefs-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.main-prefs-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    resizeTariffs();

    $('.contacts').each(function() {
        var curList = $(this);

        curList.find('.contacts-item-inner').css({'min-height': '0px'});

        curList.find('.contacts-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.contacts-item').offset().top;

            curList.find('.contacts-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.contacts-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

});

$(window).on('load resize scroll', function() {

    var windowScroll = $(this).scrollTop();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    $('.support-menu').each(function() {
        if (windowScroll + $('.header').height() >= $('.support-menu').offset().top) {
            $('.support-menu').addClass('fixed');
            if (windowScroll + $('.header').height() + 20 + $('.support-menu').find('.support-menu-inner').height() > $('.support').offset().top + $('.support').height()) {
                $('.support-menu-inner').css({'margin-top': ($('.support').offset().top + $('.support').height()) - (windowScroll + $('.header').height() + 20 + $('.support-menu-inner').height())});
            } else {
                $('.support-menu-inner').css({'margin-top': 0});
            }
        } else {
            $('.support-menu').removeClass('fixed');
            $('.support-menu-inner').css({'margin-top': 0});
        }
    });

    $('.support-menu li a').each(function() {
        var curLink = $(this);
        var curBlock = $(curLink.attr('href'));
        if (curBlock.length == 1) {
            if (windowScroll + windowHeight / 2 > curBlock.offset().top) {
                $('.support-menu li.active').removeClass('active');
                curLink.parent().addClass('active');
            }
        }
    });

});

function popupCenter(url, title) {
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (480 / 2)) + dualScreenLeft;
    var top = ((height / 3) - (360 / 3)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + 480 + ', height=' + 360 + ', top=' + top + ', left=' + left);
    if (window.focus) {
        newWindow.focus();
    }
}

var lastScrollTop = 0;
var didScroll = false;
var delta = 5;

$(window).on('scroll', function() {
    didScroll = true;
    window.setInterval(function() {
        if (didScroll) {
            var st = $(window).scrollTop();
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }
            if (st > lastScrollTop && st > $('.header').height()) {
                $('.header').addClass('header-up');
            } else {
                if (st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('header-up');
                }
            }
			lastScrollTop = st;
            didScroll = false;
        }
    }, 50);
});

function updateMap() {
    var curForm = $('.map-operator form');
    $('.map').addClass('loading');
    var formData = new FormData(curForm[0]);

    $.ajax({
        type: 'POST',
        url: curForm.attr('action'),
        processData: false,
        contentType: false,
        dataType: 'html',
        data: formData,
        cache: false
    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert('Сервис временно недоступен, попробуйте позже.')
    }).done(function(html) {
        $('.map').html(html);
        $('.map').removeClass('loading');
    });
}

function updateMapTiles() {
    if (myMap) {
        if ($('.map-popup-param input[name="type2g"]:checked').length == 1) {
            myMap.layers.add(layer2G);
        } else {
            myMap.layers.remove(layer2G);
        }

        if ($('.map-popup-param input[name="type3g"]:checked').length == 1) {
            myMap.layers.add(layer3G);
        } else {
            myMap.layers.remove(layer3G);
        }

        if ($('.map-popup-param input[name="type4g"]:checked').length == 1) {
            myMap.layers.add(layer4G);
        } else {
            myMap.layers.remove(layer4G);
        }
    }
}