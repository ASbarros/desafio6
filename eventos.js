function mousedown() {
    $('#exemplo').css('background', 'green');
}

function mouseup() {
    $('#exemplo').css('background', 'blue');
}

function mouseenter() {
    $('#exemplo').css('background', 'blue');
}

function mouseleave() {
    $('#exemplo').css('background', 'green');
}

function mouseover() {
    $('#exemplo').css('background', 'green');
}

function attrrecupera() {
    $('#exemplo').append('<p>id da div: ' + $('#exemplo').attr('id') + '</p>');
}

function attrmudar() {
    $('#exemplo').attr('style', 'background-color="green"');
}

function addclass() {
    $('#exemplo').addClass('exemplo7');
}

function removeclass() {
    $('#exemplo').removeClass('exemplo8');
}

function colocatext() {
    $('#p1').text('ola :-)')
}

function colocahtml() {
    $('#p2').html('<p>ola :-)</p>')
}

function colocaval() {
    $('#input').val('ola :-)');
}

function replacewith() {
    $('p').replaceWith('<p>pronto :-)</p>');
}

function remover() {
    $('#exemplo button').remove();
}

function keydown() {
    $('p').text(event.code);
}

function keyup() {
    $('input').val('');
}

function fadein() {
    $("#div").fadeIn();
}

function fadeout() {
    $('#div').fadeOut();
}

function fadetoggle() {
    $('#div').fadeToggle();
}

function slidedown() {
    $('img').slideDown('fast');
}

function slideup() {
    $('img').slideUp(400);
}

function slidetoggle() {
    $('img').slideToggle('slow');
}

let i = 0;

function keypress() {
    $('span').text(i++);
}