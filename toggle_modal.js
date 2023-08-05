    function changeStyle() {
        let windowHeight = window.innerHeight;
        let scroll = window.scrollY;

        //array
        let hum = document.getElementById("hum_icn").children;
        let siteName = document.getElementsByClassName("header_site");

        let headerPc = document.getElementById("PCheader");
        let headerSp = document.getElementById("SPheader");
        if (scroll > windowHeight) {
            for (let i = 0; i < hum.length; i++) {
                hum[i].classList.remove("white_bg");
            }
            for (let i = 0; i < siteName.length; i++) {
                siteName[i].classList.remove("hidden_name");
            }
            headerPc.classList.remove("white_text");
            headerSp.classList.remove("white_text");
        } else {
            for (let i = 0; i < hum.length; i++) {
                hum[i].classList.add("white_bg");
            }
            for (let i = 0; i < siteName.length; i++) {
                siteName[i].classList.add("hidden_name");
            }
            headerPc.classList.add("white_text");
            headerSp.classList.add("white_text");
        }
    }
function openHum(openEl, humIcn) {
    openEl.classList.add("active");
    humIcn.classList.add("active");
}
function closeHum(closeEl, humIcn) {
    closeEl.classList.remove("active");
    humIcn.classList.remove("active");
}

function humActive(id, className) {
    //console.log(typeof el);
    //this.className is String
    let humIcn = document.getElementById(id);
    let fadeInOutEl = document.getElementById("modal_menu");
    if (className.includes("active")) {
        closeHum(fadeInOutEl, humIcn);
    } else {
        openHum(fadeInOutEl, humIcn);
    }
}

function moveToContents(btnText) {
    let anchor = document.getElementById(btnText.toLowerCase(btnText));
    let topPosition = window.scrollY + anchor.getBoundingClientRect().top - 64;
    window.scroll({
        top: topPosition,
        behavior: "smooth"
    })
    let fadeInOutEl = document.getElementById("modal_menu");
    let humIcn = document.getElementById("hum_icn");
    closeHum(fadeInOutEl, humIcn);
}