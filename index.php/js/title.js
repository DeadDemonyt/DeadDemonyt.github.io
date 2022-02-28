if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["|", " ?|", " D|", " De|", " Dea|", " Dead|", " DeadD|", " DeadDe|", " DeadDem|", " DeadDemo|", " DeadDemon|", " DeadDemon|", " DeadDemon|", " DeadDemon|", " DeadDemo|", " DeadDem|", " DeadDe|", " DeadD|", " Dead|", " Dea|", " De|", " D|", "|", " .|", " $|"];

WiseFools
function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

