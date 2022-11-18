<?php
    if ($_POST["operator"] == "1") {
?>
        <div class="map-inner" id="map"></div>
        <script>
            var coords = [55.705676, 37.611670]

            ymaps.ready(init);

            var myMap;
            var layer2G;
            var layer3G;
            var layer4G;

            function init() {
                myMap = new ymaps.Map('map', {
                    center: coords,
                    zoom: 8,
                    controls: []
                });

                myMap.controls.add('zoomControl');
                myMap.behaviors.disable('scrollZoom');
                myMap.setCenter(coords);

                new ymaps.SuggestView('map-search');

                layer2G = new ymaps.Layer('https://static.beeline.ru/upload/tiles/2G/current/%z/%x/%y.png', {
                    tileTransparent: true
                });
                layer3G = new ymaps.Layer('https://static.beeline.ru/upload/tiles/3G/current/%z/%x/%y.png', {
                    tileTransparent: true
                });
                layer4G = new ymaps.Layer('https://static.beeline.ru/upload/tiles/4G/current/%z/%x/%y.png', {
                    tileTransparent: true
                });

                updateMapTiles();
            }
        </script>
        <div class="map-popup">
            <div class="container">
                <div class="map-popup-inner">
                    <div class="map-popup-search">
                        <div class="form-input"><input type="text" name="search" value="" placeholder="Ваш город, адрес или метро" id="map-search" /></div>
                        <div class="search-results-submit"><button><svg><use xlink:href="images/sprite.svg#header-search"></use></svg></button></div>
                        <div class="search-results-clear"><button><svg><use xlink:href="images/sprite.svg#window-close"></use></svg></button></div>
                    </div>
                    <div class="map-popup-title">Типы связи</div>
                    <div class="map-popup-params">
                        <div class="map-popup-param"><label><input type="checkbox" name="type4g" checked="checked" /><span><em style="background:rgba(242, 138, 46, 0.56)"></em>4G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type3g" checked="checked" /><span><em style="background:rgb(255, 237, 123)"></em>3G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type2g" /><span><em style="background:rgba(255, 237, 123, 0.7)"></em>2G</span></label></div>
                    </div>
                </div>
            </div>
        </div>
<?php
    } elseif ($_POST["operator"] == "_2") {
?>
        <div class="map-inner" id="map"></div>
        <script>
            var coords = [55.705676, 37.611670]

            ymaps.ready(init);

            var myMap;
            var layer2G;
            var layer3G;
            var layer4G;

            function init() {
                myMap = new ymaps.Map('map', {
                    center: coords,
                    zoom: 8,
                    controls: []
                });

                myMap.controls.add('zoomControl');
                myMap.behaviors.disable('scrollZoom');
                myMap.setCenter(coords);

                new ymaps.SuggestView('map-search');

                layer2G = new ymaps.Layer('https://coverage-map.megafon.ru/%z/%x/%y.png?layers=2g', {
                    tileTransparent: true
                });
                layer3G = new ymaps.Layer('https://coverage-map.megafon.ru/%z/%x/%y.png?layers=3g', {
                    tileTransparent: true
                });
                layer4G = new ymaps.Layer('https://coverage-map.megafon.ru/%z/%x/%y.png?layers=lte', {
                    tileTransparent: true
                });

                updateMapTiles();
            }
        </script>
        <div class="map-popup">
            <div class="container">
                <div class="map-popup-inner">
                    <div class="map-popup-search">
                        <div class="form-input"><input type="text" name="search" value="" placeholder="Ваш город, адрес или метро" id="map-search" /></div>
                        <div class="search-results-submit"><button><svg><use xlink:href="images/sprite.svg#header-search"></use></svg></button></div>
                        <div class="search-results-clear"><button><svg><use xlink:href="images/sprite.svg#window-close"></use></svg></button></div>
                    </div>
                    <div class="map-popup-title">Типы связи</div>
                    <div class="map-popup-params">
                        <div class="map-popup-param"><label><input type="checkbox" name="type4g" checked="checked" /><span><em style="background:#945ba5"></em>4G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type3g" checked="checked" /><span><em style="background:#00b956"></em>3G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type2g" /><span><em style="background:#f9e292"></em>2G</span></label></div>
                    </div>
                </div>
            </div>
        </div>
<?php
    } elseif ($_POST["operator"] == "_3") {
?>
        <div class="map-inner" id="map"></div>
        <script>
            var coords = [55.705676, 37.611670]

            ymaps.ready(init);

            var myMap;
            var layer2G;
            var layer3G;
            var layer4G;

            function init() {
                myMap = new ymaps.Map('map', {
                    center: coords,
                    zoom: 8,
                    controls: []
                });

                myMap.controls.add('zoomControl');
                myMap.behaviors.disable('scrollZoom');
                myMap.setCenter(coords);

                new ymaps.SuggestView('map-search');

                layer2G = new ymaps.Layer('https://tiles.qsupport.mts.ru/g2_New/%z/%x/%y/', {
                    tileTransparent: true
                });
                layer3G = new ymaps.Layer('https://tiles.qsupport.mts.ru/g3_New/%z/%x/%y/', {
                    tileTransparent: true
                });
                layer4G = new ymaps.Layer('https://tiles.qsupport.mts.ru/lte_New/%z/%x/%y/', {
                    tileTransparent: true
                });

                updateMapTiles();
            }
        </script>
        <div class="map-popup">
            <div class="container">
                <div class="map-popup-inner">
                    <div class="map-popup-search">
                        <div class="form-input"><input type="text" name="search" value="" placeholder="Ваш город, адрес или метро" id="map-search" /></div>
                        <div class="search-results-submit"><button><svg><use xlink:href="images/sprite.svg#header-search"></use></svg></button></div>
                        <div class="search-results-clear"><button><svg><use xlink:href="images/sprite.svg#window-close"></use></svg></button></div>
                    </div>
                    <div class="map-popup-title">Типы связи</div>
                    <div class="map-popup-params">
                        <div class="map-popup-param"><label><input type="checkbox" name="type4g" checked="checked" /><span><em style="background:#f1b2ae"></em>4G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type3g" checked="checked" /><span><em style="background:#f8c9c5"></em>3G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type2g" /><span><em style="background:#eedcd8"></em>2G</span></label></div>
                    </div>
                </div>
            </div>
        </div>
<?php
    } elseif ($_POST["operator"] == "_4") {
?>
        <div class="map-inner" id="map"></div>
        <script>
            var coords = [55.705676, 37.611670]

            ymaps.ready(init);

            var myMap;
            var layer2G;
            var layer3G;
            var layer4G;

            function init() {
                myMap = new ymaps.Map('map', {
                    center: coords,
                    zoom: 8,
                    controls: []
                });

                myMap.controls.add('zoomControl');
                myMap.behaviors.disable('scrollZoom');
                myMap.setCenter(coords);

                new ymaps.SuggestView('map-search');

                layer2G = new ymaps.Layer('https://penza.tele2.ru/maps/_4g/%z/%x/%y.png', {
                    tileTransparent: true
                });
                layer3G = new ymaps.Layer('https://penza.tele2.ru/maps/_3g/%z/%x/%y.png', {
                    tileTransparent: true
                });
                layer4G = new ymaps.Layer('https://penza.tele2.ru/maps/_2g/%z/%x/%y.png', {
                    tileTransparent: true
                });

                updateMapTiles();
            }
        </script>
        <div class="map-popup">
            <div class="container">
                <div class="map-popup-inner">
                    <div class="map-popup-search">
                        <div class="form-input"><input type="text" name="search" value="" placeholder="Ваш город, адрес или метро" id="map-search" /></div>
                        <div class="search-results-submit"><button><svg><use xlink:href="images/sprite.svg#header-search"></use></svg></button></div>
                        <div class="search-results-clear"><button><svg><use xlink:href="images/sprite.svg#window-close"></use></svg></button></div>
                    </div>
                    <div class="map-popup-title">Типы связи</div>
                    <div class="map-popup-params">
                        <div class="map-popup-param"><label><input type="checkbox" name="type4g" checked="checked" /><span><em style="background:#f3b38680"></em>4G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type3g" checked="checked" /><span><em style="background:#ef87c980"></em>3G</span></label></div>
                        <div class="map-popup-param"><label><input type="checkbox" name="type2g" /><span><em style="background:#986ba380"></em>2G</span></label></div>
                    </div>
                </div>
            </div>
        </div>
<?php
    } else {
?>
        <div class="map-inner" id="map"></div>
        <script>
            var coords = [55.705676, 37.611670]

            ymaps.ready(init);

            var myMap;

            function init() {
                myMap = new ymaps.Map('map', {
                    center: coords,
                    zoom: 8,
                    controls: []
                });

                myMap.controls.add('zoomControl');
                myMap.behaviors.disable('scrollZoom');
                myMap.setCenter(coords);
            }
        </script>
        <div class="map-operator-link">
            <a href="#">Посмотреть карту покрытия сети на сайте оператора<svg><use xlink:href="images/sprite.svg#map-operator-link"></use></svg></a>
        </div>
<?php
    }
?>