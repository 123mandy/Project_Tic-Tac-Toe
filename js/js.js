
let input1 = prompt("What's the name of first player?");
let input2 = prompt("What's the name of second player?");
if (input1 !== "") {
    $('.player1name').text(input1);
} else {
    $('.player1name').text("Player X")
}
if (input2 !== "") {
    $('.player2name').text(input2);
} else {
    $('.player2name').text("Player O")
}
////////////////////////////////////////////////////////////

const ori_x_token = "img/yellow_x(512x512).png";
const ori_o_token = "img/blue_o(512x512).png";

const xToken = document.querySelector('#tokens_x');
const oToken = document.querySelector('#tokens_o');
let final_x_token = ori_x_token;
let final_o_token = ori_o_token;

$('#tokens_x').on("change", function () {
    const upload_img = window.URL.createObjectURL(xToken.files[0]);
    if (upload_img !== "") {
        final_x_token = `${upload_img}`;
    }
})

$('#tokens_o').on("change", function () {
    const upload_img = window.URL.createObjectURL(oToken.files[0]);
    if (upload_img !== "") {
        final_o_token = `${upload_img}`;
    }
})


///////////// restart button function //////////////////////

$('button').on('click', function () {
    $('img.imgX').remove();
    $('img.imgO').remove();
    $('img.Xwinning').remove();
    $('img.Owinning').remove();
    $('.turnLeft').removeAttr("style");
    $('.turnRight').removeAttr("style");
    $('.turnLeft').removeClass("unvisible");
    $('.turnLeft').html("Your turn");
    $('.turnRight').removeClass("visible");
    $('.turnRight').html("Your turn");
    stopGame = false;
    playerSwitch = true;
})

///////////// add X to blanks //////////////////////////////
let playerSwitch = true;
let stopGame = false;

const addPlayerImg = function () {
    if (!stopGame) {
        if ($(this).find('img').length == 0) {
            if (playerSwitch) {
                const $newImgX = $('<img>', { class: "imgX", src: final_x_token })
                $(this).append($($newImgX));
                console.log(playerSwitch);
                checkWinner();
            } else {
                const $newImgO = $('<img>', { class: "imgO", src: final_o_token })
                $(this).append($($newImgO));
                checkWinner();
            }

            playerSwitch = !playerSwitch;
            $('.turnLeft').toggleClass('unvisible');
            $('.turnRight').toggleClass('visible');
        }
    } else { return; }
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
    const playerX = final_x_token;
    const playerO = final_o_token;
    const $imgX = $('<img class="Xwinning">').attr('src', 'img/party-time-jolly.gif');
    const $imgO = $('<img class="Owinning">').attr('src', 'img/party-time-jolly.gif');

    let pointX = parseInt($('#xPoint').html());
    let pointO = parseInt($('#oPoint').html());

    if (tile1 === tile2 && tile2 === tile3) {
        if (tile1 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            $('audio')[0].play();
            return
        } else if (tile1 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            $('audio')[0].play();
            return
        }
    }

    if (tile4 === tile5 && tile5 === tile6) {
        if (tile4 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            $('audio')[0].play();
            return
        } else if (tile4 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            $('audio')[0].play();
            return
        }
    }

    if (tile7 === tile8 && tile8 === tile9) {
        if (tile7 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            $('audio')[0].play();
            return
        } else if (tile7 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            $('audio')[0].play();
            return
        }
    }

    if (tile1 === tile4 && tile4 === tile7) {
        if (tile1 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            $('audio')[0].play();
            return
        } else if (tile1 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            $('audio')[0].play();
            return
        }
    }

    if (tile2 === tile5 && tile5 === tile8) {
        if (tile2 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            return
        } else if (tile2 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            return
        }
    }

    if (tile3 === tile6 && tile6 === tile9) {
        if (tile3 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            $('audio')[0].play();
            return
        } else if (tile3 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            $('audio')[0].play();
            return
        }
    }
    if (tile1 === tile5 && tile5 === tile9) {
        if (tile1 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            $('audio')[0].play();
            return
        } else if (tile1 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            $('audio')[0].play();
            return
        }
    }

    if (tile3 === tile5 && tile5 === tile7) {
        if (tile7 === playerX) {
            $('.playerX').append($imgX);
            $('.turnRight').html("YOU LOSE T.T");
            stopGame = true;
            pointX++;
            $('#xPoint').html(pointX);
            $('audio')[0].play();
            return
        } else if (tile7 === playerO) {
            $('.playerO').append($imgO);
            $('.turnLeft').html("YOU LOSE T.T");
            stopGame = true;
            pointO++;
            $('#oPoint').html(pointO);
            $('audio')[0].play();
            return
        }
    }

    else if (tile1 !== undefined && tile2 !== undefined && tile3 !== undefined && tile4 !== undefined && tile5 !== undefined && tile6 !== undefined && tile7 !== undefined && tile8 !== undefined && tile9 !== undefined) {
        $('.turnLeft').html("CAT'S GAME");
        $('.turnRight').html("CAT'S GAME");
        $('.turnLeft').css("visibility", "visible");
        $('.turnRight').css("visibility", "visible");
    }
}



