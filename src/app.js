function component(element, code) {document.querySelector(element).insertAdjacentHTML("afterend", code);}
component('#banner', `<div class="header p8"> \
             <a href="index.html"><h1 class="red sameline">Darth-Ness' Website</h1></a> \
             <a href="sites.html"><button class="right">Sites</button></a> \
             <a href="photos.html"><button class="right">Photos</button></a> \
             <a href="coding.html"><button class="right">Coding</button></a> \
             <a href="blog.html"><button class="right">Blog</button></a> \
         </div>`);
