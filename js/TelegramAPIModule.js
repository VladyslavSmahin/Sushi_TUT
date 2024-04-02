

 export function sendMessageToChannel() {
    const botToken = '6951668973:AAHutkbSDkzyTqC7-SoI-Qady6VtiiVtPz4';
    const chatId = '-4183927390';
    const input1 = document.getElementById('inputName').value;
    const input2 = document.getElementById('inputNumber').value;
    const input3 = document.getElementById('inputComment').value;
console.log(input1,input3,input3)
    const message = `Инпут 1: ${input1}\nИнпут 2: ${input2}\nИнпут 3: ${input3}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Ошибка:', error));
    console.log(input3)
}
