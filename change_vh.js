function changeVh() {
    let height = window.innerHeight;
    let vh = height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
function resizeWindow() {
    changeVh();
}