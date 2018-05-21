import './index.scss';

function scrollToId(id) {
    var element = document.getElementById(id);
    if (typeof(element) !== 'undefined') {
        setTimeout(function() {
            if (id === "footer") {
                element.scrollIntoView(false);
            } else {
                element.scrollIntoView(true);
            }
        });
    }
}
