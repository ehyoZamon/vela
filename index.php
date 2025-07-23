<!DOCTYPE html>
<html lang="ru">
<head>
  <title>Игровая платформа</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,7,9,10,chrome=1"> 
    <meta name="keywords" content="вебсайт, сайт, создание вебсайта, лендинг, вебсайт на заказ, проект, портфолио, Мирзобахтиёр Рахматов, бот"/>
    <meta name="description" content="Портфолио веб-разработчика Мирзобахтиёра: сайты, боты, SEO, фронтенд и бэкенд.">
    <meta name="author" content="Мирзобахтиёр">
    <meta property="og:title" content="Портфолио – Веб-разработчик Мирзобахтиёр">
    <meta property="og:description" content="Создаю адаптивные сайты, SEO, ботов. HTML, CSS, JS, React, Node.js, PHP.">
    <meta name="robots" content="index, follow">
    <meta name="copyright" content="© 2025 Ehyo. Mirzobakhtiyor Rahmatov">
    <meta name="og:title" content="Портфолио – Веб-разработчик. Создание сайтов">
    <meta property="og:description" content="Портфолио веб-разработчика Мирзобахтиёра: сайты, боты, SEO, фронтенд и бэкенд."/>
    <meta name="og:image" content="https://ehyo.tj/images/m-logo-400.png"/>
	<meta property="og:image:alt" content="ehyo logo"/>
	<meta property="og:site_name" content="Ehyo. Портфолио Рахматова Мирзобахтиёра" /> 
	<meta property="og:type" content="page" />
	<meta property="og:locale" content="ru_RU" />
	<meta property="article:author" content="Mirzobakhtiyor Rahmatov" /> 
	<meta property="article:publisher" content="Ehyo" />
    
    <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css?v=<?= time(); ?>" />
</head>
<body>
    <div class="content-block">
        <div class="content-wrapper">
            <header class="computer-header">
                <div class="header-contacts-block">
                    <div class="location-phone-block">
                        <div class="location-block"><img src="./images/icons/map-location.svg" alt="location" class="location-img"/><p>Сайлент-Хилл</p></div>
                        <div class="phone-block"><img src="./images/icons/phone.svg" alt="phone" class="phone-img"/><p>+7 555 555-37-50</p></div>
                    </div>
                    <div class="work-routine-block">
                        <p>Ежедневно 9:00 - 21:00</p>
                    </div>
                    <div class="cargo-payment-contacts-block">
                        <a href="#">Доставка</a>
                        <a href="#">Оплата</a>
                        <a href="#">Контакты</a>
                    </div>
                </div>
                
                <div class="header-main-block">
                    <div class="logo-block">
                        <div class="smily-container"><img src="./images/icons/smily.svg" alt="smily icon" class="smily-img"/></div>
                    </div>
                    
                    <div class="search-nav-block">
                        <div class="search-and-messengers-block">
                            <div class="burger-block active">
                                <img src="./images/icons/burger.svg" alt="burger icon" />
                            </div>
                            
                            <div class="burger-block close-block">
                                <img src="./images/icons/x.svg" alt="close icon"/>
                            </div>
                            
                            <div class="search-block">
                                <div class="search-container">
                                    <input type="text" placeholder="Поиск товаров..." class="search-box"/>
                                    <div class="search-button">
                                        Найти
                                    </div>
                                </div>
                            </div>
                            <div class="messengers-block">
                                <a href="#" class="messenger-link"><img src="./images/icons/telegram.svg" alt="telegram icon"/></a>
                                <a href="#" class="messenger-link"><img src="./images/icons/whatsapp.svg" alt="whatsapp icon"/></a>
                            </div>
                        </div>
                        <div class="nav-block">
                            <ul class="ul-level1">
                                <li class="ul-level1-li">
                                    <a class="link-stage1" href="#"><img src="./images/icons/fire.svg">Акции</a>
                                    <div class="ul-level2-block">
                                        <div class="ul-level2-container">
                                            <ul class="ul-level2">
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/phone-blue.svg" alt="phone-icon"/>
                                                        </div>
                                                            <span>Смартфоны и гаджеты</span>
                                                        <div class="toggler-container">
                                                            <img src="./images/icons/arrow-right.svg" alt="toggler-icon" class="toggler"/>
                                                            <img src="./images/icons/arrow-right-blue.svg" alt="toggler-icon-blue" class="toggler-blue"/>
                                                        </div>
                                                    </a>
                                                    <div class="ul-level3-container">
                                                        <h3>Смартфоны</h3>
                                                        <ul class="ul-level3">
                                                            <li><a href="#">Apple iPhone <span>123</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Cматрфоны <span>227</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">iPhone 16 <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Складны <span>30</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">realme <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Huawei Mate X6 <span>100</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Кнопочные <span>23</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Домашние <span>17</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Samsung <span>27</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    
                                                    <div class="ul-level4-container">
                                                        <h3>Гаджеты</h3>
                                                        <ul class="ul-level4">
                                                            <li>
                                                                <a href="#">Смарт-часы <span>15</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cмарт-кольца <span>34</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Наушники <span>21</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Гарнитуры <span>12</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Портативное аудио <span>42</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Умные гаджеты <span>46</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Очки VR <span>49</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Для блогеров <span>32</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/laptop.svg" alt="laptop-icon"/>
                                                        </div>
                                                            <span>Ноутбуки и компьютеры</span>
                                                        <div class="toggler-container">
                                                            <img src="./images/icons/arrow-right.svg" alt="toggler-icon" class="toggler"/>
                                                            <img src="./images/icons/arrow-right-blue.svg" alt="toggler-icon-blue" class="toggler-blue"/>
                                                        </div>
                                                    </a>
                                                    <div class="ul-level3-container">
                                                        <h3>Ноутбуки</h3>
                                                        <ul class="ul-level3">
                                                            <li><a href="#">Dell Inspiron <span>123</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Dell <span>227</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">MiBook <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Macbook <span>30</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Asus Rog X <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Microsoft Surface <span>100</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                    
                                                    <div class="ul-level4-container">
                                                        <h3>Компютеры</h3>
                                                        <ul class="ul-level4">
                                                            <li>
                                                                <a href="#">IBM PC <span>15</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Asus Revolution <span>34</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Acer Igniter <span>21</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dell Du Morph <span>12</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Zephirus Mega <span>42</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Apple Case <span>46</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li> 
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/tv.svg" alt="tv-icon"/>
                                                        </div>
                                                            <span>Телевизоры и цифровое ТВ</span>
                                                        <div class="toggler-container">
                                                            <img src="./images/icons/arrow-right.svg" alt="toggler-icon" class="toggler"/>
                                                            <img src="./images/icons/arrow-right-blue.svg" alt="toggler-icon-blue" class="toggler-blue"/>
                                                        </div>
                                                    </a>
                                                    
                                                    <div class="ul-level3-container">
                                                        <h3>Ноутбуки</h3>
                                                        <ul class="ul-level3">
                                                            <li><a href="#">NeoVision Ultra 55 4K Smart TV <span>123</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">SkyLine LED 43 HD <span>227</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Vega Quantum QLED 65 <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">OrionX Crystal UHD 50 <span>30</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">PixelPro Mini 32 <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Lumax Vision 40 <span>100</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                    
                                                    <div class="ul-level4-container">
                                                        <h3>Компютеры</h3>
                                                        <ul class="ul-level4">
                                                            <li>
                                                                <a href="#">DigiBox T2 Plus <span>15</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">TVLink SmartBox S1 <span>34</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">StreamPlay Mini HD <span>21</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">XMedia Tuner Pro <span>12</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">SkyBeam DVB-T2 Receiver <span>42</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">MegaBox Android TV 4K <span>46</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li> 
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/audiotech.svg" alt="audiotech icon"/>
                                                        </div>
                                                            <span>Аудиотехника</span>
                                                        <div class="toggler-container">
                                                            <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                            <img src="./images/icons/arrow-right-blue.svg" alt="toggler-icon-blue" class="toggler-blue"/>
                                                        </div>
                                                    </a>
                                                    
                                                    <div class="ul-level3-container">
                                                        <h3>Аудиотехника</h3>
                                                        <ul class="ul-level3">
                                                            <li><a href="#">BassCore Studio X9 <span>123</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">SoundMax Pulse 500 <span>227</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">EchoBar Vibe 2.1 <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">Aurius Hi-Fi One <span>30</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">StreamTune AirPods Pro <span>120</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            <li><a href="#">BeatLine Tower 300 <span>100</span></a>
                                                                <div class="toggler-container">
                                                                    <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                                </div>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                    
                                                </li> 
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container"> 
                                                            <img src="./images/icons/fire.svg" alt="fire icon"/>
                                                        </div>
                                                        <span>Акции</span>
                                                    </a>
                                                </li> 
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/new.svg" alt="news icons"/>
                                                        </div>
                                                            <span>Новинки</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            
                                            <div class="ul-level3-realization-container">
                                                
                                            </div>
                                            
                                            <div class="ul-level4-realization-container">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="ul-level1-li"><a class="link-stage1" href="#"><img src="./images/icons/lightning.svg" alt="lightning icon">Горячее предложение</a>
                                 <div class="ul-level2-block">
                                        <div class="ul-level2-container">
                                            <ul class="ul-level2">
                                                
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/group.svg" alt="audiotech icon"/>
                                                        </div>
                                                            <span>Кому</span>
                                                        <div class="toggler-container">
                                                            <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                            <img src="./images/icons/arrow-right-blue.svg" alt="toggler-icon-blue" class="toggler-blue"/>
                                                        </div>
                                                    </a>
                                                    
                                                    <div class="ul-level3-container">
                                                        <h3>Кому</h3>
                                                        <ul class="ul-level3">
                                                            <li><a href="#">Для мужчин <span>123</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">Для женщин <span>63</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">Папе <span>120</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">Сотрудникам <span>30</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">Мужу <span>120</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">Корпоративный <span>100</span></a>
                                                                
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                </li> 
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/sword.svg" alt="audiotech icon"/>
                                                        </div>
                                                            <span>Повод</span>
                                                        <div class="toggler-container">
                                                            <img src="./images/icons/arrow-right.svg" alt="toggle-icon" class="toggler"/>
                                                            <img src="./images/icons/arrow-right-blue.svg" alt="toggler-icon-blue" class="toggler-blue"/>
                                                        </div>
                                                    </a>
                                                    
                                                    <div class="ul-level3-container">
                                                        <h3>Повод</h3>
                                                        <ul class="ul-level3">
                                                            <li><a href="#">23 февраля <span>123</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">8 марта <span>63</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">Новый год <span>120</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">День рождение <span>30</span></a>
                                                                
                                                            </li>
                                                            <li><a href="#">Юбилей <span>120</span></a>
                                                               
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <div class="img-container">
                                                            <img src="./images/icons/fillment.svg" alt="audiotech icon"/>
                                                        </div>
                                                        
                                                        <span>Наполнение</span>
                                                    </a>
                                                  
                                                </li>
                                            </ul>
                                            
                                            <div class="ul-level3-realization-container">
                                                
                                            </div>
                                            
                                            <div class="ul-level4-realization-container">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="ul-level1-li"><a class="link-stage1" href="#"><img src="./images/icons/treasure-chest.svg" alt="treasure icon">Подарочные наборы</a></li>
                                <li class="ul-level1-li"><a class="link-stage1" href="#"><img src="./images/icons/listing.svg" alt="listing icon">Cобытия</a>
                                    <div class="ul-level2-block">
                                        <div class="ul-level2-container">
                                            <ul class="ul-level2">
                                                
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                            <span>ИгроМИР</span>
                                                    </a>
                                                    
                                                </li> 
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                            <span>Мероприятия</span>
                                                    </a>
                                                    
                                                </li>
                                                <li class="ul-level2-li" onmouseenter="openmenu(this);">
                                                    <a href="#">
                                                        <span>Мастерклассы</span>
                                                    </a>
                                                  
                                                </li>
                                            </ul>
                                            
                                            <div class="ul-level3-realization-container">
                                                
                                            </div>
                                            
                                            <div class="ul-level4-realization-container">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="ul-level1-li"><a class="link-stage1" href="#"><img src="./images/icons/ninja.svg" alt="ninja icon">Наши бренды</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="language-block">
                        <div class="language-block-container">
                            <img src="./images/icons/world.svg" class="world-img" alt="world icon"/><p><a href="#" class="active">RU</a> | <a href="#">EN</a></p>
                        </div>
                    </div>
                    
                    <div class="instruments-block">
                        <div class="instruments-elems-block">
                            <a href="#" class="instrument-link"><img src="./images/icons/like.svg" alt="like-icon" class="like icon"/></a>
                            <a href="#" class="instrument-link"><img src="./images/icons/hunter.svg" alt="hunter-icon" class="hunter icon"/></a>
                            <a href="#" class="instrument-link"><img src="./images/icons/bag.svg" alt="bag-icon" class="bag icon"/></a>
                        </div>
                        
                        <div class="wrap-computer-block">
                            <a href="#" class="wrap-computer-link">+ Собрать компьютер</a>
                        </div>
                    </div>
                </div>
            </header>
        
            
            <header class="phone-header">
                <div class="phone-contacts-block">
                    <div class="phone-language-block">
                        <div class="phone-language-block-container">
                            <img src="./images/icons/world.svg" class="world-img" alt="world icon"/><p><a href="#" class="active">RU</a> | <a href="#">EN</a></p>
                        </div>
                    </div>
                    
                    <div class="mobile-phone-block">
                        <img src="./images/icons/phone.svg" alt="phone" class="phone-img"/><p>+7 555 555-37-50</p>
                    </div>
                </div>
                
                
                <div class="phone-nav-menu">
                    <div class="phone-nav-menu-block">
                        <div class="part1">
                            <div class="burger-block active" id="burger-block">
                                <img src="./images/icons/burger.svg" alt="burger icon"/>
                            </div>
                            
                            <div class="burger-block close-block" id="close-block">
                                <img src="./images/icons/x.svg" alt="burger icon"/>
                            </div>
                            <a href="#" class="instrument-link"><img src="./images/icons/hunter.svg" alt="hunter-icon" class="hunter icon"/></a>
                        </div>
                        
                        <div class="part2">
                            <div class="logo-block">
                                <div class="smily-container"><img src="./images/icons/smily.svg" alt="smily icon" class="smily-img"/></div>
                            </div>
                        </div>
                        
                        <div class="part3">
                            <a href="#" class="instrument-link"><img src="./images/icons/like.svg" alt="like-icon" class="like icon"/></a>
                            <a href="#" class="instrument-link"><img src="./images/icons/bag.svg" alt="bag-icon" class="bag icon"/><div class="option-num">20</div></a>
                        </div>
                    </div>
                    
                    <div class="phone-search-block">
                        <div class="search-block">
                            <div class="search-container">
                                <input type="text" placeholder="Поиск товаров..." class="search-box"/>
                                <div class="search-button">
                                    <img src="./images/icons/search-icon.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="mobile-catalog-block active-catalog main-catalog">
                        <div class="mobile-catalog-contacts">
                            <div class="mobile-address-block">
                                <div class="mobile-address"><img src="./images/icons/small-location.svg" alt="location icon" class="small-location-img"><span>г. Москва</span></div>
                                <div class="mobile-address"><img src="./images/icons/small-watch.svg" alt="small clock icon" class="small-clock-img"><span>Ежедневно 9:00 - 21:00</span></div>
                            </div>
                            <div class="mobile-messengers-block">
                                <a href="#" class="messenger-link"><img src="./images/icons/telegram.svg" alt="telegram icon"/></a>
                                <a href="#" class="messenger-link"><img src="./images/icons/whatsapp.svg" alt="whatsapp icon"/></a>
                            </div>
                        </div>
                        
                        <ul class="mobile-catalog-ul">
                            <li onclick="openMobileMenu('appliances-block');"><div class="catalog-icon-block"><img src="./images/icons/catalog-burger.svg" class="catalog-icon"></div><p>Каталог</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/fire.svg" class="catalog-icon"></div><p>Акции</p></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/lightning.svg" class="catalog-icon"></div><p>Горячее предложение</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/treasure-chest.svg" class="catalog-icon"></div><p>Подарочные наборы</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/listing.svg" class="catalog-icon"></div><p>События</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/ninja.svg" class="catalog-icon"></div><p>Наши бренды</p></li>
                        </ul>
                        
                        
                        <div class="wrap-computer-block">
                            <a href="#" class="wrap-computer-link">+ Собрать компьютер</a>
                        </div>
                        
                        <div class="mobile-catalog-menu">
                            <div class="link-block">
                                <a href="#">Доставка</a>
                            </div>
                            <div class="link-block">
                                <a href="#">Оплата</a>
                            </div>
                            <div class="link-block">
                                <a href="#">Контакты</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mobile-catalog-block appliances-block">
                        <ul class="mobile-catalog-ul">
                            <li onclick="openMobileMenu('main-catalog');" class="catalog-name"><div class="catalog-icon-block"><img src="./images/icons/arrow-left.svg" class="catalog-icon"></div><p>Каталог</p></li>
                            <li onclick="openMobileMenu('smartphone-block');"><div class="catalog-icon-block"><img src="./images/icons/phone-blue.svg" class="catalog-icon"></div><p>Смартфоны и гаджеты</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/laptop.svg" class="catalog-icon"></div><p>Ноутбуки и компьютеры</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/tv.svg" class="catalog-icon"></div><p>Телевизоры и цифровое ТВ</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/audiotech.svg" class="catalog-icon"></div><p>Аудиотехника</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/fire.svg" class="catalog-icon"></div><p>Акции</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><div class="catalog-icon-block"><img src="./images/icons/new.svg" class="catalog-icon"></div><p>Новинки</p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                        </ul>
                    </div>
                    
                    
                    <div class="mobile-catalog-block smartphone-block">
                        <ul class="mobile-catalog-ul">
                            <li onclick="openMobileMenu('appliances-block');" class="catalog-name"><div class="catalog-icon-block"><img src="./images/icons/arrow-left.svg" class="catalog-icon"></div><span>Смартфоны</span></li>
                            <li onclick="openMobileMenu('gadgets-block');"><p><span>Гаджеты </span> <span class="product-num"></span></p><img src="./images/icons/arrow-right.svg" class="catalog-toggle"/></li>
                            <li><p><span>Apple iPhone </span> <span class="product-num">123</span></p></li>
                            <li><p><span>Смартфоны </span> <span class="product-num">227</span></p></li>
                            <li><p><span>iPhone 16 </span> <span class="product-num">120</span></p></li>
                            <li><p><span>Складные </span> <span class="product-num">30</span></p></li>
                            <li><p><span>realme </span> <span class="product-num">120</span></p></li>
                            <li><p><span>Huawei Mate X6 </span> <span class="product-num">100</span></p></li>
                            <li><p><span>Кнопочные </span> <span class="product-num">23</span></p></li>
                            <li><p><span>Домашние </span> <span class="product-num">17</span></p></li>
                            <li><p><span>Samsung </span> <span class="product-num">27</span></p></li>
                        </ul>
                    </div>
                    
                    
                    <div class="mobile-catalog-block gadgets-block">
                        <ul class="mobile-catalog-ul">
                            <li  onclick="openMobileMenu('smartphone-block');" class="catalog-name"><div class="catalog-icon-block"><img src="./images/icons/arrow-left.svg" class="catalog-icon"></div><span>Гаджеты</span></li>
                            <li><p><span>Cмарт-часы</span> <span class="product-num">15</span></li>
                            <li><p><span>Смарт-кольца </span> <span class="product-num">34</span></p></li>
                            <li><p><span>Наушники </span> <span class="product-num">21</span></p></li>
                            <li><p><span>Гарнитуры </span> <span class="product-num">12</span></p></li>
                            <li><p><span>Портативное аудио </span> <span class="product-num">42</span></p></li>
                            <li><p><span>Умные гаджеты </span> <span class="product-num">46</span></p></li>
                            <li><p><span>Очки VR </span> <span class="product-num">49</span></p></li>
                            <li><p><span>Для блогеров </span> <span class="product-num">32</span></p></li>
                        </ul>
                    </div>
                </div>
            </header>
        
        
            <div class="banner">
                <div class="banner-text">
                    <div class="banner-text-container">
                        <h1>Отправляйся в приключения с нашими эпическими лут-корзинами и наборами!</h1>
                        <p>Развивай свои навыки, следуя мудрым стратегиям мастеров, и поднимайся на новый уровень мастерства!
                        С нашей поддержкой каждое твое действие станет частью великого искусства, а победы — результатом 
                        точного плана и безупречной подготовки!</p>
                        <a href="#" class="go-to-catalog">В каталог</a>
                    </div>
                    
                    <img class="gamepad" src="./images/gamepad.webp"/> 
                </div>
            </div>
        </div>
    </div>
    

</body>

<script src="./js/jQuery/jquery-3.5.1.min.js?v=<?= time(); ?>"></script>
<script src="./js/index.js?v=<?= time(); ?>"></script>

</html>
