$(function () {

	//Button Back to top
	var btn = $('#btn-backtotop');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, '300');
	});

	//Them icon chevron-down vao menu item has-dropdown
	$('.has-dropdown').children("a").append("<i class='icon-chevron-down'></i>");

	//Hieu ung nut toggle
	$('.navbar-toggler').click(function () {
		$(this).toggleClass("click");
		$('#sidebarMobile').toggleClass("show");
	})

	//Hieu ung dropdown menu
	$('.has-dropdown i').click(function () {
		$(this).parent().next(".nav-dropdown").toggleClass("show");
		$(this).toggleClass("rorate");
	});

	//Dem lui thoi gian gui OTP Code
	var counter = $('.timer span').text();
	var interval = setInterval(function () {
		counter--;
		// Display 'counter' wherever you want to display it.
		if (counter <= 0) {
			clearInterval(interval);
			$('.input-group .timer').html("<a>Gửi lại</a>");
			return;
		} else {
			$('.timer span').text(counter);
			console.log("Timer --> " + counter);
		}
	}, 1000);

	//Hieu ung sh-accordion
	$('.sh-accordion-title').click(function (j) {
		var dropDown = $(this).closest('.sh-accordion-item').find('.sh-accordion-panel');
		$(this).closest('.sh-accordion').find('.sh-accordion-panel').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.sh-accordion').find('.sh-accordion-title.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

	$('.btn-collapse').click(function () {
		$(this).parent('.sh-accordion-panel').slideUp();
		$(this).parent().parent('.sh-accordion-item').find('.sh-accordion-title').removeClass('active');
	});

	//Hieu ung cho exchange-rate-wrap
	var tigia = 3758;
	var tienVN = 0;
	var tienTQ = 0;
	$('.exrate-result').slideUp();
	$('#btn-exrate-search').click(function () {
		$('#btn-exrate-tryagain').removeClass('d-none');
		$('#btn-exrate-tryagain').addClass('d-block');
		$('.exrate-result').slideDown();

		$('.exrate-thumb').addClass('img-expand');

		tienTQ = parseFloat($('#inputNDT').val());
		tienVN = tienTQ * tigia;

		//console.log("Tiền TQ : " + tienTQ);
		//console.log("Tiền VN : " + tienVN);

		$('#inputVND').val(tienVN);

		return false;
	});

	$('#btn-exrate-tryagain').click(function () {
		$(this).removeClass('d-block');
		$(this).addClass('d-none');
		$('.exrate-result').slideUp();

		$('.exrate-thumb').removeClass('img-expand');

		$("#inputNDT").val("");
		$("#inputVND").val("");

		return false;
	});

	//Them dau phay khi nhap so tien
	function formatDecimal() {
		$(document).on('input', '.inputMoney', function (e) {
			if (/^[0-9.,]+$/.test($(this).val())) {
				$(this).val(
					parseFloat($(this).val().replace(/,/g, '')).toLocaleString('en')
				);
			} else {
				$(this).val(
					$(this)
						.val()
						.substring(0, $(this).val().length - 1)
				);
			}
		});
	}

	//formatDecimal();


	// List to select
	$(document).ready(function () {
		$('.option-list').addClass('d-none');
	});

	var slDropdown = $('.select-dropdown');
	slDropdown.click(function () {
		$(this).toggleClass('expand');
		$(this).find('.option-list').toggleClass('d-none');
		$('.sh-backdrop').addClass('showup');
	});

	var newOptionSelect = $('.option-list > li');
	newOptionSelect.click(function () {
		$(this).parent().prev('.label-select').find('.label-select-content').text($(this).text());
		$(this).parent().prev('.label-select').find('.label-select-content').removeClass('label-placeholder');
		$('.option-list > li').removeClass('selected');
		$(this).addClass('selected');
		$(this).parent().parent().removeClass('expand');
		$(this).parent('.option-list').addClass('d-none');
		$('.sh-backdrop').removeClass('showup');

		return false;
	});

	$('.sh-backdrop').click(function () {
		$('.select-dropdown').removeClass('expand');
		$('.option-list').addClass('d-none');
		$('.sh-backdrop').removeClass('showup');
	});

	//Hieu ung list-shipping-items
	var dropDown = $('.item-desc-show');
	var dropDownTitle = $('.item-desc-show h5');
	var dropDownDesc = $('.item-desc-show p');
	$(document).ready(function () {
		dropDown.slideUp();
	});
	$('.block-item').click(function (j) {
		var itemTitle = $(this).find('.item-desc h5').text();
		var itemDesc = $(this).find('.item-desc p').text();

		dropDownTitle.text(itemTitle);
		dropDownDesc.text(itemDesc);

		dropDown.slideUp()

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.list-shipping-items').find('.block-item.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

	//set height cho tab-content tren mobile
	$(window).resize(function () {
		var width = $(window).width();
		if (width < 992) {

			var heightPanel;
			heightPanel = $('.tab-content .tab-panel.showcontent').height();
			$('.vertical-tab .tab-content').height(heightPanel + 250);


			$('.tab-button .nav li').click(function () {
				var x = $(this).index() + 1;
				heightPanel = $('.tab-content .tab-panel:nth-child(' + x + ')').height();
				$('.vertical-tab .tab-content').height(heightPanel + 250);
			});
		} else {
			return false;
		}
	});

	if (window.matchMedia('(max-width: 992px)').matches) {
		var heightPanel;
		heightPanel = $('.tab-content .tab-panel.showcontent').height();
		$('.vertical-tab .tab-content').height(heightPanel + 250);


		$('.tab-button .nav li').click(function () {
			var x = $(this).index() + 1;
			heightPanel = $('.tab-content .tab-panel:nth-child(' + x + ')').height();
			$('.vertical-tab .tab-content').height(heightPanel + 250);
		});
	}

	//Hieu ung cho vertical-tab
	$('.tab-button .nav li').click(function () {
		$('.tab-button .nav li').removeClass('active');
		$(this).addClass('active');

		indexItem = $(this).index() + 1;
		//console.log("Vị trí của phần tử được click là : " + indexItem);

		$('.tab-content .tab-panel').removeClass('showcontent');
		$('.tab-content .tab-panel:nth-child(' + indexItem + ')').addClass('showcontent');
	});


	//Chuc nang cho nut Prev - Next của tab-quytrinh
	var btnPrev = $('.tab-quytrinh #btn-prev');
	var btnNext = $('.tab-quytrinh #btn-next');
	var numberTab = $('.tab-quytrinh .tab-button .nav li').length;
	var currentTab;

	$('.tab-quytrinh .tab-button .nav li').click(function () {
		currentTab = $(this).index() + 1;
		showButton(numberTab, currentTab);

		for (let i = 1; i <= numberTab; i++) {
			if (i < currentTab) {
				$('.tab-quytrinh .tab-button .nav li:nth-child(' + i + ')').addClass('green-light');
			} else {
				$('.tab-quytrinh .tab-button .nav li:nth-child(' + i + ')').removeClass('green-light');
			}
		}

	});


	btnNext.click(function () {
		currentTab = $('.tab-quytrinh .tab-button .nav li.active').index() + 1;
		$('.tab-quytrinh .tab-button .nav li').removeClass('active');
		$('.tab-quytrinh .tab-button .nav li:nth-child(' + (currentTab + 1) + ')').addClass('active');

		$('.tab-quytrinh .tab-content .tab-panel').removeClass('showcontent');
		$('.tab-quytrinh .tab-content .tab-panel:nth-child(' + (currentTab + 1) + ')').addClass('showcontent');

		if (currentTab == (numberTab - 1)) {
			$(this).addClass('d-none');
		} else {
			$(this).removeClass('d-none');
		}

		if (currentTab == 1) {
			btnPrev.removeClass('d-none');
		}

		$('.tab-quytrinh .tab-button .nav li:nth-child(' + currentTab + ')').addClass('green-light');

		return false;
	});

	btnPrev.click(function () {
		currentTab = $('.tab-quytrinh .tab-button .nav li.active').index() + 1;
		$('.tab-quytrinh .tab-button .nav li').removeClass('active');
		$('.tab-quytrinh .tab-button .nav li:nth-child(' + (currentTab - 1) + ')').addClass('active');

		$('.tab-quytrinh .tab-content .tab-panel').removeClass('showcontent');
		$('.tab-quytrinh .tab-content .tab-panel:nth-child(' + (currentTab - 1) + ')').addClass('showcontent');

		if (currentTab == 2) {
			$(this).addClass('d-none');
		} else {
			$(this).removeClass('d-none');
		}

		if (currentTab < (numberTab + 1)) {
			btnNext.removeClass('d-none');
		}

		$('.tab-quytrinh .tab-button .nav li:nth-child(' + currentTab + ')').removeClass('green-light');

		return false;
	});

	function showButton(numberTab, currentTab) {
		if (currentTab == 1) {
			btnPrev.addClass('d-none');
		} else {
			btnPrev.removeClass('d-none');
		}

		if (currentTab == numberTab) {
			btnNext.addClass('d-none');
		} else {
			btnNext.removeClass('d-none');
		}
	}


	//Hieu ung cho sticky-tool-tab
	$('.tab-button-horizontal .nav li.btn-tab').click(function () {
		$('.tab-button-horizontal .nav li.btn-tab').removeClass('active');
		$(this).addClass('active');

		indexItem = $(this).index();
		//console.log("Vị trí của phần tử được click là : " + indexItem);

		$('.tab-button-vertical .nav li.btn-tab').removeClass('active');
		$('.tab-button-vertical .nav li.btn-tab:nth-child(' + (indexItem + 1) + ')').addClass('active');

		$('.tab-content .tab-panel').removeClass('showcontent');
		$('.tab-content .tab-panel:nth-child(' + indexItem + ')').addClass('showcontent');
	});

	$('.tab-button-vertical .nav li.btn-tab').click(function () {
		$('.tab-button-vertical .nav li.btn-tab').removeClass('active');
		$(this).addClass('active');

		indexItem = $(this).index();
		//console.log("Vị trí của phần tử được click là : " + indexItem);

		$('.tab-button-horizontal .nav li.btn-tab').removeClass('active');
		$('.tab-button-horizontal .nav li.btn-tab:nth-child(' + (indexItem + 1) + ')').addClass('active');

		$('.tab-content .tab-panel').removeClass('showcontent');
		$('.tab-content .tab-panel:nth-child(' + indexItem + ')').addClass('showcontent');
	});

	$('.tab-button-vertical .nav li').click(function () {
		$(this).closest('.tab-button-vertical').addClass('showOff');
		$(this).closest('.sticky-tool-tab').find('.group-tabs').addClass('showOn');
	});

	$('.tab-button-horizontal .nav li.direction').click(function () {
		$(this).closest('.sticky-tool-tab').find('.tab-button-vertical').removeClass('showOff');
		$(this).closest('.group-tabs').removeClass('showOn');
	});

	$(document).mouseup(function (e) {
		let elm = $('.sticky-tool-position .sticky-tool-tab .group-tabs .tab-panel');
		elm.is(e.target) || 0 !== elm.has(e.target).length || (
			elm.closest('.group-tabs').removeClass('showOn'),
				$('.sticky-tool-position .sticky-tool-tab .tab-button-vertical').removeClass('showOff')
		)
	});

	//Chuc nang cho tab-tigia
	$('.tab-tigia #btn-exrate-search-tab').click(function () {
		$(this).addClass('d-none');
		$(this).closest('.tab-tigia').find('#btn-exrate-tryagain-tab').removeClass('d-none');
		$(this).closest('.tab-tigia').find('.exrate-result-tab').removeClass('deactive');
		$(this).closest('.tab-tigia').find('.btn-yeucau').removeClass('d-none');

		tienTQ = parseFloat($('.tab-tigia #inputNDT-tab').val());
		tienVN = tienTQ * tigia;

		$(this).closest('.tab-tigia').find('#inputVND-tab').val(tienVN);

		return false;
	});
	$('.tab-tigia #btn-exrate-tryagain-tab').click(function () {
		$(this).addClass('d-none');
		$(this).closest('.tab-tigia').find('#btn-exrate-search-tab').removeClass('d-none');
		$(this).closest('.tab-tigia').find('.exrate-result-tab').addClass('deactive');
		$(this).closest('.tab-tigia').find('.btn-yeucau').addClass('d-none');

		$(this).closest('.tab-tigia').find('#inputNDT-tab').val("");
		$(this).closest('.tab-tigia').find('#inputVND-tab').val("");
		return false;
	});

	//Chuc nang cho tab-travandon
	$('.tab-travandon .tracking-result').slideUp();
	$('.tab-travandon #btn-tracking-search-tab').click(function () {
		$(this).closest('.tab-travandon').find('.tracking-result').slideUp();
		$(this).closest('.tab-travandon').find('.tracking-result').slideDown();

		return false;
	});

	//Hieu ung cho transaction-history-tab quan ly so du
	$('.transaction-history-tab .tab-button .nav li').click(function () {
		$(this).closest('.transaction-history-tab').find('li').removeClass('active');
		$(this).addClass('active');

		indexItem = $(this).index() + 1;
		//console.log("Vị trí của phần tử được click là : " + indexItem);

		$(this).closest('.transaction-history-tab').find('.tab-content .tab-panel').removeClass('showcontent');
		$(this).closest('.transaction-history-tab').find('.tab-content .tab-panel:nth-child(' + indexItem + ')').addClass('showcontent');
	});

	//Chay hieu ung wow
	new WOW().init();

})