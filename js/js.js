
///////////// restart button function //////////////////////

$('button').on('click', function () {
    $('img.imgX').remove();
    $('img.imgO').remove();
    $('p').remove();
})

///////////// add X to blanks //////////////////////////////
let playerSwitch = true;

const addPlayerImg = function () {
    if (playerSwitch) {
        const $newImgX = $('<img>', { class: "imgX", src: "img/yellow_x(512x512).png" })
        $(this).append($($newImgX));
        console.log(playerSwitch);
        checkWinner();
    } else {
        const $newImgO = $('<img>', { class: "imgO", src: "img/blue_o(512x512).png" })
        $(this).append($($newImgO));
        checkWinner();
    }
    playerSwitch = !playerSwitch;
}
$('.box').on('click', addPlayerImg);

////////// set winning condition ///////////////////////////



const checkWinner = function () {
    const tile1 = $('#box1>img').attr('src');
    const tile2 = $('#box2>img').attr('src');
    const tile3 = $('#box3>img').attr('src');
    const tile4 = $('#box4>img').attr('src');
    const tile5 = $('#box5>img').attr('src');
    const tile6 = $('#box6>img').attr('src');
    const tile7 = $('#box7>img').attr('src');
    const tile8 = $('#box8>img').attr('src');
    const tile9 = $('#box9>img').attr('src');
    const playerX = "img/yellow_x(512x512).png";
    const playerO = "img/blue_o(512x512).png";

    if (tile1 === tile2 && tile2 === tile3) {
        if (tile1 === playerX) {
            $('.container').append('<p>player x win</p>');
            console.log("1x")
        } else if (tile1 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
    if (tile4 === tile5 && tile5 === tile6) {
        if (tile4 === playerX) {
            $('.container').append('<p>player x win</p>');
            console.log("2x")
        } else if (tile4 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
    if (tile7 === tile8 && tile8 === tile9) {
        if (tile7 === playerX) {
            $('.container').append('<p>player x win</p>');
            console.log("3x")
        } else if (tile7 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
    if (tile1 === tile4 && tile4 === tile7) {
        if (tile1 === playerX) {
            console.log("4x")
            $('.container').append('<p>player x win</p>');
        } else if (tile1 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
    if (tile2 === tile5 && tile5 === tile8) {
        if (tile2 === playerX) {
            console.log("5x")
            $('.container').append('<p>player x win</p>');
        } else if (tile2 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
    if (tile3 === tile6 && tile6 === tile9) {
        if (tile3 === playerX) {
            console.log("6x")
            $('.container').append('<p>player x win</p>');
        } else if (tile3 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
    if (tile1 === tile5 && tile5 === tile9) {
        if (tile1 === playerX) {
            console.log("6x")
            $('.container').append('<p>player x win</p>');
        } else if (tile1 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
    if (tile3 === tile5 && tile5 === tile7) {
        if (tile7 === playerX) {
            console.log("6x")
            $('.container').append('<p>player x win</p>');
        } else if (tile7 === playerO) {
            $('.container').append('<p>player o win</p>');
        }
    }
}



