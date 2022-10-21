window.onload = function() {
    var html = document.documentElement;

    var fontsfile = document.createElement('link');
    fontsfile.href = pathTemplate + 'css/fonts.css';
    fontsfile.rel = 'stylesheet';
    document.head.appendChild(fontsfile);

    if (sessionStorage.fontsLoaded) {
        html.classList.add('fonts-loaded');
        window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
    } else {
        var script = document.createElement('script');
        script.src = pathTemplate + 'js/fontfaceobserver.js';
        script.async = true;

        script.onload = function () {
            var Montserrat400 = new FontFaceObserver('Montserrat', {
                weight: 'normal'
            });
            var Montserrat500 = new FontFaceObserver('Montserrat', {
                weight: '500'
            });
            var Montserrat600 = new FontFaceObserver('Montserrat', {
                weight: '600'
            });

            Promise.all([
                Montserrat400.load(),
                Montserrat500.load(),
                Montserrat600.load()
            ]).then(function () {
                html.classList.add('fonts-loaded');
                sessionStorage.fontsLoaded = true;
                window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
            });
        };
        document.head.appendChild(script);
    }
}