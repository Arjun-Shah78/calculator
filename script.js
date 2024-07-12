let inputBox = document.querySelector('.inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let buttonText = b.target.innerText;

        if (buttonText === '=') {
            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = '';
            }
        } else if (buttonText === 'AC') {
            string = '';
            inputBox.value = string;
        } else if (buttonText === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else if (buttonText === '00') { // Change plusMinus to function as '00'
            string += '00';
            inputBox.value = string;
        } else {
            string += buttonText;
            inputBox.value = string;
        }
    });
});