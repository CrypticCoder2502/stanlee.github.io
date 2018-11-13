var tl = new TimelineMax({repeat: -1}),
    spidey = document.getElementById("spidey");

tl.to(spidey, 1, {morphSVG:"#avengers"}, "+=1")
.to(spidey, 1, {morphSVG: "#xmen"}, "+=1")
.to(spidey, 1, {morphSVG: "#four"}, "+=1")
.to(spidey, 1, {morphSVG: spidey}, "+=1");