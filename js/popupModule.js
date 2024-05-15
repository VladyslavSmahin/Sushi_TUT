export function Popup() {
    const popup1 = document.getElementById('popupOrderContent');
    const popup2 = document.getElementById('popupOrderContent2');
    const button1 = document.getElementById('order_now_button1');
    const button2 = document.getElementById('order_now_button2');
    const closePopup1 = document.getElementById('closePopupButton1')
    const closePopup2 = document.getElementById('closePopupButton2')
    const closePopup1_1 = document.getElementById('closePopupButton1.1')
    const closePopup2_1 = document.getElementById('closePopupButton2.1')
    const popupOrderForm = document.getElementById('popupOrderForm')
    const popupOrderForm2 = document.getElementById('popupOrderForm2')
    function handleClick(event) {
        if (event.target === button1) {
            popup1.style.display = 'flex';
        } else if (event.target === button2) {
            popup2.style.display = 'flex';
        }
    }

    function closePopup(event) {
        event.preventDefault();
        if (event.target === closePopup1 || event.target === closePopup2) {
            popup1.style.display = 'none';
        } else if (event.target === closePopup1_1 || event.target === closePopup2_1) {
            popup2.style.display = 'none';
        }
    }
    if (button1){
        button1.addEventListener('click', handleClick);
        closePopup1.addEventListener('click', closePopup);
        closePopup2.addEventListener('click', closePopup);
        popupOrderForm.addEventListener('submit', closePopup);
        document.addEventListener('click', function (event) {
            if (!popup1.contains(event.target)&&
                event.target !== button1 && event.target !== button1) {
                popup1.style.display = 'none';
            }
        });
    }
    if (button2){
        button2.addEventListener('click', handleClick);
        closePopup1_1.addEventListener('click', closePopup);
        closePopup2_1.addEventListener('click', closePopup);
        popupOrderForm2.addEventListener('submit', closePopup);
        document.addEventListener('click', function (event) {
            if (!popup2.contains(event.target)&&
                event.target !== button1 && event.target !== button2) {
                popup2.style.display = 'none';
            }
        });

    }
}