export function changeColorLink() {
    let lastClickedLink = null;

    function changeColor(event) {
        const clickedLink = event.target;
        if (lastClickedLink !== null && lastClickedLink !== clickedLink) {
            lastClickedLink.style.color = 'white';
        }
        clickedLink.style.color = 'orange';
        lastClickedLink = clickedLink;
    }

    const links = document.querySelectorAll('.section2NavLink');
    links.forEach(link => {
        link.addEventListener('click', changeColor);
    });
}
