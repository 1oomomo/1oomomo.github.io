let submitted = false;

function pageTransition() {
    if (submitted) {
        showToast();
        submitted = false;
    }
}

function showToast() {
    document.getElementById('toast').classList.add('active');
}

function closeToast() {
    document.getElementById('toast').classList.remove('active');
}
