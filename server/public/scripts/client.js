console.log('client.js is loaded');

$(document).ready(onReady); 

function onReady() {
    console.log('JQ loaded');

    //event listeners
    $('.inputs').on('submit', function(event) {
        event.preventDefault();
        let position = $('input:first').val();
        $('input:first').val('');
        console.log('position is ', position);    
        generateText(position)
      });
};

function generateText() {
    $.get('/router').then((response) => {
        console.log('response: ', response);
    })
    .catch((err) => {
        console.log('error:', err);
    })
}