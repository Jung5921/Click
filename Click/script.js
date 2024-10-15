const buttonclick = document.getElementById("start");
function addScore(){
    document.getElementById("score").innerHTML++;
};
function decreaseScore() {
    document.getElementById("score").innerHTML--;
}
function click1() {
    document.getElementById("start").innerHTML = "click";
    buttonclick.onclick = function click2() {
            document.getElementById("start").innerHTML = "don't click";
            setTimeout(function showbutton3(){
                document.getElementById("start").innerHTML = "CLICK";
                buttonclick.onclick = function addPoints(){
                    addScore();
                }
                setTimeout(function disappearClick(){
                    document.getElementById("start").innerHTML = "don't click";
                    buttonclick.onclick = function subtractPoints(){
                        decreaseScore();
                    }
                    setTimeout(click2(), Math.floor(Math.random()*7000)+100);
                }, 500);
            }, Math.floor(Math.random()*7000)+100);
    };
};

