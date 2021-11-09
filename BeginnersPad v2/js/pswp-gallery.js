var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var listingImg = [
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_default.jpg',
        w: 600,
        h: 383
    },
];

var unitImg = [
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    },
    {
        src: '/images/thumb_unit.jpg',
        w: 600,
        h: 383
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0, // start at first slide
    shareEl: false
};

// let PhotoSwipeUI_Default = document.querySelector('#pswpUi');

if(document.querySelector('#toggleShowcase')){
    let toggleShowcase = document.querySelector('#toggleShowcase');
    toggleShowcase.addEventListener('click',(e) => {
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, listingImg, options);
        gallery.init();
    });
}

if(document.querySelector('#toggleUnitImg')){
    let toggleUnitImg = document.querySelector('#toggleUnitImg');
    toggleUnitImg.addEventListener('click',(e) => {
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, unitImg, options);
        gallery.init();
    });
}
