(function() {
    var toTitleCase = function(str) {
        str = str.replace(/-/g, ' ');
        str = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        return str;
    }
    var loadPicture = function () {
        var allNames = [
            'jumping-wolf',
            'candy-machine',
            'for-rent',
            'muses-sculpture',
            'river-side',
            'professional-diving',
            'purple-tree',
            'quebec-congress',
            'thick-bricks',
            'laval-cafe',
            'three-mouses',
            'waterfall-top',
            'window-plants',
        ];
        var hash = window.location.hash;
        var targetName, targetIdx = -1;
        if(hash) {
            targetName = hash.substring(1);
            targetIdx = allNames.indexOf(targetName);
        }
        if(targetIdx == -1) {
            targetName = allNames[0];
            targetIdx = 0;
        }
        $('#picture-first').attr('src', 'images/water-paint/' + targetName + '/drawing.jpg');
        $('#picture-second').attr('src', 'images/water-paint/' + targetName + '/photo.jpg');
        $('#picture-title').html(toTitleCase(targetName));
    };

    var putPictureHover = function() {
        $('#picture-place').hover(function() {
            $('#picture-second').fadeToggle();
        });
    };

    loadPicture();
    putPictureHover();
})();
