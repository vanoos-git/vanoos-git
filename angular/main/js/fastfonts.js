function loadFont(t,e,n){alert("vs");var a=navigator.userAgent;if(window.addEventListener&&(!a.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)||a.match(/Chrome/))){var o={};try{o=localStorage||{}}catch(t){}var r="x-font-"+t,s=r+"url",i=r+"css",d=o[s],l=o[i],c=document.createElement("style");if(c.rel="stylesheet",document.head.appendChild(c),!l||d!==e&&d!==n){var u=n&&function(){if(!window.FontFace)return!1;var t=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{});return t.load(),"loading"===t.status}()?n:e,f=new XMLHttpRequest;f.open("GET",u),f.onload=function(){f.status>=200&&f.status<400&&(o[s]=u,o[i]=c.textContent=f.responseText)},f.send()}else c.textContent=l}}