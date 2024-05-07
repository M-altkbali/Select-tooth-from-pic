// $(window).scroll(function () {

//     var scroll = $(window).scrollTop();



//     if (scroll >= 100) {

//         $(".top-nav").addClass("light-header");

//     } else {

//         $(".top-nav").removeClass("light-header");

//     }

// });





// $(function () {

//     var theYear = new Date().getFullYear();

//     $('#year').html(theYear);

// });





var arrLang = {

    'en': {

        'arabic': 'Arabic',
        'english': 'English',
        'search': 'Search',

        'fileden': 'Dental File',
        'fileden-kids': 'Dental File | Children',
        'click-tooth': 'Please click on each tooth to enter its state',
        'right-side': 'right side',
        'left-side': 'Left side',
        'state-tooth': 'Tooth status',
        'select-tooth-state': ' Choose a state of tooth ',
        'save-change': 'Saving changes',
        'close': 'Close',

    },

    'ar': {

        'arabic': 'عربي',
        'english': 'English',
        'search': 'بحث',

        'fileden': 'الملف الطبي للأسنان',
        'fileden-kids': 'الملف الطبي للأسنان | أطفال',
        'click-tooth': 'الرجاء النقر على كل سن لادخال حالتها',
        'right-side': 'جهة اليمين',
        'left-side': 'جهة اليسار',
        'state-tooth': 'حالة السن',
        'select-tooth-state': 'اختر حالة السن',
        'save-change': 'حفظ التغييرات',
        'close': 'اغلاق',

    }

};


$(function () {

    $('.translatear').click(function () {

        var lang = $(this).attr('id');

        ($(this).attr("id") == "ar")

        $('*').each(function (index) {

            $(this).text(arrLang[lang][$(this).attr('key')]);
            document.getElementById("dir").style.direction = "rtl";

        });


    });

    $('.translateen').click(function () {

        var lang = $(this).attr('id');


        ($(this).attr("id") == "en")

        $('*').each(function (index) {



            $(this).text(arrLang[lang][$(this).attr('key')]);
            document.getElementById("dir").style.direction = "ltr";
            console.log("شن صاير فيك");
        });

    });

});



