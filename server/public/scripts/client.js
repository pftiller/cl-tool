console.log('client.js is loaded');
let letter = '';
let sentences = [];
let position;
let company;
let h2 = document.querySelector('h2');
let salutation = document.querySelector('.salutation');
let first_paragraph = document.querySelector('.first_paragraph');
let second_paragraph = document.querySelector('.second_paragraph');
let third_paragraph = document.querySelector('.third_paragraph');
let fourth_paragraph = document.querySelector('.fourth_paragraph');
$(document).ready(onReady); 

function onReady() {
    console.log('JQ loaded');

    //event listeners
    $('.inputs').on('submit', function(event) {
        event.preventDefault();
        position = $('#position').val();
        company = $('#company').val();
        $('input[type="text"').val('');
        console.log(`position is ${position} and company is ${company}`);    
        retrieveText()
      });
};

function retrieveText() {
    let data = {
        position: position,
        company: company,
        oneAndTwo: Math.floor(Math.random() * 2) + 1,
        oneAndSix: Math.floor(Math.random() * 6) + 1,
        oneAndTwelve: Math.floor(Math.random() * 12) + 1
    }
    $.get('/router', data).then((response) => {
        console.log('response: ', response);
        sentences = response;
        appendToDOM(sentences);
    })
    .catch((err) => {
        console.log('error:', err);
    })
}
function appendToDOM(text) {
        document.querySelector('h3').innerText = `Re: ${position} at ${company}`;
        document.querySelector('.salutation').innerText = text[0].entry + ',';
        document.querySelector('.first_paragraph').innerText = text[1].entry + ' ' + text[2].entry + ' ' + text[3].entry;
        document.querySelector('.second_paragraph').innerText = text[4].entry + ' ' + text[5].entry + ' ' + text[6].entry + ' ' + text[7].entry;
        document.querySelector('.third_paragraph').innerText = text[8].entry + ' ' + text[9].entry + ' ' +  text[10].entry;
        document.querySelector('.fourth_paragraph').innerText = text[11].entry + ' ' + text[12].entry + ' ' + text[13].entry;
        document.querySelector('.fifth_paragraph').innerText =  text[14].entry + ' ' + text[15].entry + ' ' + text[16].entry + ' ' + text[17].entry;
        document.querySelector('.sixth_paragraph').innerText =   text[18].entry + ' ' + text[19].entry + ' ' + text[20].entry;
        reset();
}

function reset() {
   sentences = [];
}