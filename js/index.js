(function() {
    var toTitleCase = function(str) {
        str = str.replace(/-/g, ' ');
        str = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        return str;
    };

    var getPictures = function() {
        var allNames = [
            'thick-bricks',
            'jumping-wolf',
            'candy-machine',
            'muses-sculpture',
            'river-side',
            'professional-diving',
            'purple-tree',
            'quebec-congress',
            'laval-cafe',
            'three-mouses',
            'waterfall-top',
            'window-plants',
            'for-rent',
        ];
        var hash = window.location.hash;
        var pictures = {};
        var curIdx = -1;
        if(hash) {
            pictures.curName = hash.substring(1);
            curIdx = allNames.indexOf(pictures.curName);
        }
        if(curIdx == -1) {
            pictures.curName = allNames[0];
            curIdx = 0;
        }
        var prevIdx = (curIdx + allNames.length - 1) % allNames.length;
        var nextIdx = (curIdx + 1) % allNames.length;
        pictures.prevName = allNames[prevIdx];
        pictures.nextName = allNames[nextIdx];
        return pictures;
    };

    var loadCurPicture = function(name) {
        $('#loading').fadeIn();

        $('#picture-first').attr('src', 'images/water-paint/' + name + '/drawing.jpg');
        $('#picture-second').attr('src', 'images/water-paint/' + name + '/photo.jpg');

        $('#picture-first').load(function() {
            $('#loading').fadeOut();
        });

        $('#picture-title').html(toTitleCase(name));
    };

    var setPrevNextPicture = function(prevName, nextName) {
        $('#prev').attr('href', '#' + prevName);
        $('#next').attr('href', '#' + nextName);
    };

    var putPictureHover = function() {
        $('#picture-place').hover(function() {
            $('#picture-second').fadeToggle();
        });
    };

    var refreshPictures = function() {
        var pictures = getPictures();
        loadCurPicture(pictures.curName);
        setPrevNextPicture(pictures.prevName, pictures.nextName);
    };

    putPictureHover();
    refreshPictures();
    $(window).on('hashchange', function() {
        refreshPictures();
    });
})();
