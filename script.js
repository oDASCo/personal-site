/////////////////////////////////////
function deleteTypedText(){
    var cont = document.getElementById('typedText');
    cont.innerHTML = '';
};

function typedText(id, text, speed, callback ){
    var ele = document.getElementById(id),
        txt = text.join("").split("");

    var interval = setInterval(function(){

        if(!txt[0]){
            return clearInterval(interval);
        };

        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 100);


    return false;
    callback();

};

function typeWords() {
    window.setTimeout(function(){
        window.setTimeout(function(){
            typedText("typedText",
                [
                    "frontend-developer"
                ], 100,
                setTimeout(deleteTypedText, 2500));
        }, 0);

        window.setTimeout(function(){
            typedText("typedText",
                [
                    "cheerleader"
                ], 100,
                setTimeout(deleteTypedText, 2500));
        }, 3000);
        window.setTimeout(function(){
            typedText("typedText",
                [
                    "student of BSUIR"
                ], 100,
                setTimeout(deleteTypedText, 2500));
        }, 6000);

        window.setTimeout(typeWords, 10000);

    }, 0);
}

typeWords();


/////////////////////////////

    let state = '0';
    let linkAbout = document.getElementById('aboutMe');
    linkAbout.onclick = function() {
      state = '1';
        if (state == '1'){
            let elem = document.getElementById('mainContainer');
            elem.classList.add("main1");
        }
    };


let linkHome = document.getElementById('home');
linkHome.onclick = function() {
    state = '0';
    if (state == '0'){
        let elem2 = document.getElementById('mainContainer');
        elem2.classList.remove("main1");
    }
};

