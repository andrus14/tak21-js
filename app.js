const buttons = document.querySelectorAll('button');
const input = document.querySelector('#input');
const resultDiv = document.querySelector('#result');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', e => {
        console.log(button.innerText);

        switch ( button.innerText ) {
            case '=':
                const result = input.value.split('+').reduce((a, b) => parseInt(a) + parseInt(b), 0);
                resultDiv.innerText = '= ' + result;
                console.log(result);
                break;

            case '+':
                if ( input.value != '' && input.value.charAt(input.value.length - 1) != '+' ) {
                    input.value += button.innerText;
                }
                break;

            case '←':
                input.value = input.value.slice(0, -1);
                break;

            case 'C':
                input.value = '';
                resultDiv.innerText = '';
                break;

            default:
                input.value += button.innerText;
                break;
        }

    });
});

