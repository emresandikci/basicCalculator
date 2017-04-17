var button = document.getElementsByTagName('button');
var input = document.getElementById('result');

for (i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        checkLength();
        switch (event.currentTarget.innerText) {
            case '+':
                input.value += event.currentTarget.innerText;
                break;
            case '-':
                input.value += event.currentTarget.innerText;
                break;
            case 'x':
                input.value += '*';
                break;
            case '/':
                input.value += event.currentTarget.innerText;
                break;
            case '.':
                input.value += event.currentTarget.innerText;
                break;
            case '=':
                sonuc(event.target.innerText);
                break;
            default:
                input.value += event.currentTarget.innerText;
                break;
        }
    }
}

input.addEventListener('keyup', function (params) {
    checkLength();
    switch (params.key) {
        case '0':
            break;
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '+':
            break;
        case '-':
            break;
        case 'x':
            break;
        case '/':
            break;
        case '.':
            break;
        case 'Shift':
            break;
        case '=':
            sonuc();
            break;
        default:
            input.value = input.value.slice(0, input.value - 1);
            break;
    }
});

function sonuc() {
    var result = eval(input.value.replace("=", ""));
    input.value = result;

}
function checkLength() {
    if (parseFloat(input.value) > Number.MAX_VALUE) {
        alert('this value can not be higher than' + Number.MAX_VALUE);
        input.value = 0;
    }
}