

     export function sendMessageToChannel() {

         function Message(event){
             const botToken = '6951668973:AAHY51kSua4w8Gzjtplsb-Ve1AxiyPSWDeY';
             const chatId = '-1002053040527';
             let input1, input2, input3, input1_1, input2_1, input3_1;

             if (document.getElementById('inputName') && document.getElementById('inputNumber') && document.getElementById('inputComment')) {
                 input1 = document.getElementById('inputName');
                 input2 = document.getElementById('inputNumber');
                 input3 = document.getElementById('inputComment');
             }

             else if (document.getElementById('inputName2') && document.getElementById('inputNumber2') && document.getElementById('inputComment2')) {
                 input1_1 = document.getElementById('inputName2');
                 input2_1 = document.getElementById('inputNumber2');
                 input3_1 = document.getElementById('inputComment2');
             }

             let message = '';

             if (input1 && input2 && input3) {
                 message = `Ім'я: ${input1.value}\nНомер: ${input2.value}\nКоментар: ${input3.value}`;
             }
             else if (input1_1 && input2_1 && input3_1) {
                 message = `Ім'я: ${input1_1.value}\nНомер: ${input2_1.value}\nКоментар: ${input3_1.value}`;
             }
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
         }
         const popupOrderFormButton = document.getElementById('popupOrderFormButton');
         if (popupOrderFormButton) {
             popupOrderFormButton.addEventListener('click', Message);
         }

         const popupOrderFormButton2 = document.getElementById('popupOrderFormButton2');
         if (popupOrderFormButton2) {
             popupOrderFormButton2.addEventListener('click', Message);
         }
     }
