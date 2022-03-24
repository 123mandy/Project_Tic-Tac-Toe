// set players'name, if you enter nothing, will use the default names
const namePlayer = function () {
    let input1 = prompt("What's the name of first player?");
    let input2 = prompt("What's the name of second player?");
    if (input1 !== null && input1 !== "") {
        $('.player1name').text(input1);
    } else {
        $('.player1name').text("Player X")
    }
    if (input2 !== null && input2 !== "") {
        $('.player2name').text(input2);
    } else {
        $('.player2name').text("Player O")
    }
}

setTimeout(namePlayer, 200);

// upload the tokens images, if you don't upload, will use the default tokens
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

// restart button function, just leave the points of each player
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
    winner = false;
})

//switch the tokens by each clicks, can't click a box with tokens
//every time you click, will run checkWinner function to check whether you meet the winning conditions
//if there is a winner, game stop, can't click any boxes
let playerSwitch = true;
let stopGame = false;
let winner = false;

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

// write checkWinner function 

const checkWinner = function () {

    // set winning condition
    const winningCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const tile1 = $('#box0>img').attr('src');
    const tile2 = $('#box1>img').attr('src');
    const tile3 = $('#box2>img').attr('src');
    const tile4 = $('#box3>img').attr('src');
    const tile5 = $('#box4>img').attr('src');
    const tile6 = $('#box5>img').attr('src');
    const tile7 = $('#box6>img').attr('src');
    const tile8 = $('#box7>img').attr('src');
    const tile9 = $('#box8>img').attr('src');
    const playerX = final_x_token;
    const playerO = final_o_token;
    const $imgX = $('<img class="Xwinning">').attr('src', 'img/party-time-jolly.gif');
    const $imgO = $('<img class="Owinning">').attr('src', 'img/party-time-jolly.gif');

    let pointX = parseInt($('#xPoint').html());
    let pointO = parseInt($('#oPoint').html());

    // use for loop to check 
    for (let i = 0; i < winningCondition.length; i++) {
        const indexA = winningCondition[i][0];
        const indexB = winningCondition[i][1];
        const indexC = winningCondition[i][2];
        const imgA = $(`#box${indexA}>img`).attr('src');
        const imgB = $(`#box${indexB}>img`).attr('src');
        const imgC = $(`#box${indexC}>img`).attr('src');

        if (imgA === imgB && imgB === imgC) {
            if (imgA === playerX) {
                $('.playerX').append($imgX);
                $('.turnRight').html("YOU LOSE T.T");
                stopGame = true;
                pointX++;
                $('#xPoint').html(pointX);
                $('audio')[0].play();
                winner = true;

            }
            if (imgA === playerO) {
                $('.playerO').append($imgO);
                $('.turnLeft').html("YOU LOSE T.T");
                stopGame = true;
                pointO++;
                $('#oPoint').html(pointO);
                $('audio')[0].play();
                winner = true;

            }
            return;
        }
        // if there is no winner
        else if (tile1 !== undefined && tile2 !== undefined && tile3 !== undefined && tile4 !== undefined && tile5 !== undefined && tile6 !== undefined && tile7 !== undefined && tile8 !== undefined && tile9 !== undefined && winner === false) {
            $('.turnLeft').html("CAT'S GAME");
            $('.turnRight').html("CAT'S GAME");
            $('.turnLeft').css("visibility", "visible");
            $('.turnRight').css("visibility", "visible");
        }
    }
}




