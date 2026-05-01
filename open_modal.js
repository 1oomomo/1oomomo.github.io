let openModal = function (modal, fileName) {
    let addImgEl = document.getElementById("modal_img");
    addImgEl.src = fileName;
    modal.classList.add("active");
}
let closeModal = function (modal) {
    modal.classList.remove("active");
}
let activeModal = function (el) {
    let fadeInOutEl = document.getElementById("modal");
    if (fadeInOutEl.className.includes("active")) {
        closeModal(fadeInOutEl);
    } else {
        let name = el.dataset.name;
        let fileName = "Assets/fullsize/" + name + ".jpg";
        openModal(fadeInOutEl, fileName);
    }
}
function disableModal(e) {
    e.stopPropagation();
}
