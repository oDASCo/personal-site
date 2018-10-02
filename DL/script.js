/////////////////////////////////////
function deleteTypedText() {
    var cont = document.getElementById('typedText');
    cont.innerHTML = '';
};

function typedText(id, text, speed, callback) {
    var ele = document.getElementById(id),
        txt = text.join("").split("");

    var interval = setInterval(function () {

        if (!txt[0]) {
            return clearInterval(interval);
        }
        ;

        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 100);


    return false;
    callback();

};

function typeWords() {
    window.setTimeout(function () {
        window.setTimeout(function () {
            typedText("typedText",
                [
                    "frontend-developer"
                ], 100,
                setTimeout(deleteTypedText, 2500));
        }, 0);

        window.setTimeout(function () {
            typedText("typedText",
                [
                    "cheerleader"
                ], 100,
                setTimeout(deleteTypedText, 2500));
        }, 3000);
        window.setTimeout(function () {
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
let linkHome = document.getElementById('home');
let linkPortfolio = document.getElementById('portfolio');
let linkSkills = document.getElementById('skills');
let linkPhotos = document.getElementById('photos');
let linkContacts = document.getElementById('contact');

linkAbout.onclick = function () {
    state = '1';
    if (state == '1') {
        let elem = document.getElementById('mainContainer');
        elem.classList.add("main1");
        elem.classList.remove("main2");
        elem.classList.remove("main3");
        elem.classList.remove("main4");
        elem.classList.remove("main5");
        linkAbout.classList.add('active');
        linkHome.classList.remove('active');
        linkPortfolio.classList.remove('active');
        linkPhotos.classList.remove('active');
        linkSkills.classList.remove('active');
        linkContacts.classList.remove('active');
    }
};

linkHome.onclick = function () {
    state = '0';
    if (state == '0') {
        let elem2 = document.getElementById('mainContainer');
        elem2.classList.remove("main1");
        elem2.classList.remove("main2")
        elem2.classList.remove("main3");
        elem2.classList.remove("main4");
        elem2.classList.remove("main5");
        linkHome.classList.add('active');
        linkAbout.classList.remove('active');
        linkPortfolio.classList.remove('active');
        linkPhotos.classList.remove('active');
        linkSkills.classList.remove('active');
        linkContacts.classList.remove('active');
    }
};

linkPortfolio.onclick = function () {
    state = '2';
    if (state == '2') {
        let elem2 = document.getElementById('mainContainer');
        elem2.classList.add("main2");
        elem2.classList.remove("main1");
        elem2.classList.remove("main3");
        elem2.classList.remove("main4");
        elem2.classList.remove("main5");
        linkPortfolio.classList.add('active');
        linkAbout.classList.remove('active');
        linkHome.classList.remove('active');
        linkPhotos.classList.remove('active');
        linkSkills.classList.remove('active');
        linkContacts.classList.remove('active');
    }
};

linkSkills.onclick = function () {
    state = '3';
    if (state == '3') {
        let elem3 = document.getElementById('mainContainer');
        elem3.classList.add("main3");
        elem3.classList.remove("main1");
        elem3.classList.remove("main2");
        elem3.classList.remove("main4");
        elem3.classList.remove("main5");
        linkSkills.classList.add('active');
        linkAbout.classList.remove('active');
        linkHome.classList.remove('active');
        linkPortfolio.classList.remove('active');
        linkPhotos.classList.remove('active');
        linkContacts.classList.remove('active');
    }
};


linkPhotos.onclick = function () {
    state = '4';
    if (state == '4') {
        let elem4 = document.getElementById('mainContainer');
        elem4.classList.add("main4");
        elem4.classList.remove("main1");
        elem4.classList.remove("main2");
        elem4.classList.remove("main3");
        elem4.classList.remove("main5");
        linkPhotos.classList.add('active');
        linkAbout.classList.remove('active');
        linkHome.classList.remove('active');
        linkPortfolio.classList.remove('active');
        linkSkills.classList.remove('active');
        linkContacts.classList.remove('active');
    }
};


linkContacts.onclick = function () {
    state = '5';
    if (state == '5') {
        let elem5 = document.getElementById('mainContainer');
        elem5.classList.add("main5");
        elem5.classList.remove("main1");
        elem5.classList.remove("main2");
        elem5.classList.remove("main3");
        elem5.classList.remove("main4");
        linkContacts.classList.add('active');
        linkAbout.classList.remove('active');
        linkHome.classList.remove('active');
        linkPortfolio.classList.remove('active');
        linkPhotos.classList.remove('active');
        linkSkills.classList.remove('active');
    }
};