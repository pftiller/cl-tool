console.log('client.js is loaded');
let letter = '';
let sentences = [];
$(document).ready(onReady); 

function onReady() {
    console.log('JQ loaded');

    //event listeners
    $('.inputs').on('submit', function(event) {
        event.preventDefault();
        let position = $('#position').val();
        let company = $('#company').val();
        $('input[type="text"').val('');
        console.log(`position is ${position} and company is ${company}`);    
        retrieveText()
      });
};

function retrieveText() {
    $.get('/router').then((response) => {
        console.log('response: ', response);
        sentences = response;
        assembleText(sentences);
    })
    .catch((err) => {
        console.log('error:', err);
    })
}
function assembleText(texts) {
    console.log('now we are in assembleText', texts);
for(text of texts) {
    letter = letter + text.entry + '';
    console.log(letter);
 }
 $('.text').append(`<p>${letter}</p>`);
}
