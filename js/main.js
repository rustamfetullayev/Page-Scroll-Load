"use strict";

window.onscroll = function () {  
    let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    let percent = (document.documentElement.scrollTop / scrollableHeight)*100;
    fixed.style.width = percent + "%";
    per.innerText ="Percentage: " + percent.toFixed(0);
    scrollableheight.innerText ="Scrollable height: " + scrollableHeight;
    scrollheight.innerText = "Scroll height: " + document.documentElement.scrollHeight;
    scrolltop.innerText = "Scroll top: " + document.documentElement.scrollTop.toFixed(0);
    innerheight.innerText = "Inner height: " + window.innerHeight;

    fixed.innerText = percent.toFixed(0) + "%";
}

