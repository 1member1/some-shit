// ==UserScript==
// @name          Автоматический редирект с Lolz.guru на Zelenka.guru
// @description	  Для тех, кому очень нравится новый домен :)
// @author        1member1
// @homepage      https://github.com/1member1/
// @include       http://lolz.guru/*
// @include       https://lolz.guru/*
// @include       http://*.lolz.guru/*
// @include       https://*.lolz.guru/*
// @grant         GM_addStyle
// @version       1.0
// @license MIT
// @icon          https://zelenka.guru/favicon.ico
// @run-at        document-start
// ==/UserScript==

window.location.replace(document.location.href.replace("lolz.guru", "zelenka.guru"));
