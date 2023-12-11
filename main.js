import {checking} from "/check.js";
import {myTurn, winner} from "/myTurn.js";

const body = document.querySelector("#body");
const generalWrapper = document.querySelector("#general-wrapper");
const confirmButton = document.querySelector("#confirm-button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
let firstPlayer = "";
let secondPlayer = "";
const startContent = document.querySelector("#start-content");
const spaceOne = document.createElement("button");
const spaceTwo = document.createElement("button");
const spaceThree = document.createElement("button");
const spaceFour = document.createElement("button");
const spaceFive = document.createElement("button");
const spaceSix = document.createElement("button");
const spaceSeven = document.createElement("button");
const spaceEight = document.createElement("button");
const spaceNine = document.createElement("button");
const scoreBox = document.createElement("div")
let firstPlayerName = document.createElement("div");
let isFirstPlayerTurn = document.createElement("div");
let secondPlayerName = document.createElement("div");
let isSecondPlayerTurn = document.createElement("div");
let drawLine = document.createElement("div");
let score = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
let turn = 1;


if (confirmButton) (
    confirmButton.addEventListener("click", function(){
        const whomStarts = Math.floor(Math.random() * 2);
        if (whomStarts === 0) {
            firstPlayer = firstInput.value;
            secondPlayer = secondInput.value;
        } else {
            firstPlayer = secondInput.value;
            secondPlayer = firstInput.value;
        }
        const playerToStart = document.createElement('div');
        playerToStart.id = "player-to-start";
        playerToStart.innerHTML = firstPlayer + " starts!";
        startContent.replaceWith(playerToStart);
        setTimeout(function() {
            playerToStart.remove();
            game();
        }, 3000);
    })
)

function game() {
    generalWrapper.style = 'background-image: url("/graphic/board_background.jpg")';
    scoreBox.id = "score-box";
    body.append(scoreBox);
    firstPlayerName.classList.add("score", "player-name");
    firstPlayerName.innerHTML = firstPlayer;
    scoreBox.append(firstPlayerName);
    isFirstPlayerTurn.classList.add("score", "player-turn");
    isFirstPlayerTurn.innerHTML = "";
    scoreBox.append(isFirstPlayerTurn);
    secondPlayerName.classList.add("score", "player-name");
    secondPlayerName.innerHTML = secondPlayer;
    scoreBox.append(secondPlayerName);
    isSecondPlayerTurn.classList.add("score", "player-turn");
    isSecondPlayerTurn.innerHTML = "";
    scoreBox.append(isSecondPlayerTurn);
    drawLine.classList.add("score", "player-turn");
    drawLine.innerHTML = "";
    scoreBox.append(drawLine);
    spaceOne.classList.add("space");
    spaceTwo.classList.add("space");
    spaceThree.classList.add("space");
    spaceFour.classList.add("space");
    spaceFive.classList.add("space");
    spaceSix.classList.add("space");
    spaceSeven.classList.add("space");
    spaceEight.classList.add("space");
    spaceNine.classList.add("space");
    spaceOne.id = "space-one";
    spaceTwo.id = "space-two";
    spaceThree.id = "space-three";
    spaceFour.id = "space-four";
    spaceFive.id = "space-five";
    spaceSix.id = "space-six";
    spaceSeven.id = "space-seven";
    spaceEight.id = "space-eight";
    spaceNine.id = "space-nine";
    generalWrapper.append(spaceOne);
    generalWrapper.append(spaceTwo);
    generalWrapper.append(spaceThree);
    generalWrapper.append(spaceFour);
    generalWrapper.append(spaceFive);
    generalWrapper.append(spaceSix);
    generalWrapper.append(spaceSeven);
    generalWrapper.append(spaceEight);
    generalWrapper.append(spaceNine);
    spaceOne.addEventListener("click", function(){
        if (score[1] === 0) {
            if (turn === 1) {
                spaceOne.style = 'background-image: url("/graphic/nought.jpg")';
                score[1] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceOne.style = 'background-image: url("/graphic/cross.jpg")';
                score[1] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceTwo.addEventListener("click", function(){
        if (score[2] === 0) {
            if (turn === 1) {
                spaceTwo.style = 'background-image: url("/graphic/nought.jpg")';
                score[2] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceTwo.style = 'background-image: url("/graphic/cross.jpg")';
                score[2] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceThree.addEventListener("click", function(){
        if (score[3] === 0) {
            if (turn === 1) {
                spaceThree.style = 'background-image: url("/graphic/nought.jpg")';
                score[3] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceThree.style = 'background-image: url("/graphic/cross.jpg")';
                score[3] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceFour.addEventListener("click", function(){
        if (score[4] === 0) {
            if (turn === 1) {
                spaceFour.style = 'background-image: url("/graphic/nought.jpg")';
                score[4] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceFour.style = 'background-image: url("/graphic/cross.jpg")';
                score[4] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceFive.addEventListener("click", function(){
        if (score[5] === 0) {
            if (turn === 1) {
                spaceFive.style = 'background-image: url("/graphic/nought.jpg")';
                score[5] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceFive.style = 'background-image: url("/graphic/cross.jpg")';
                score[5] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceSix.addEventListener("click", function(){
        if (score[6] === 0) {
            if (turn === 1) {
                spaceSix.style = 'background-image: url("/graphic/nought.jpg")';
                score[6] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceSix.style = 'background-image: url("/graphic/cross.jpg")';
                score[6] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceSeven.addEventListener("click", function(){
        if (score[7] === 0) {
            if (turn === 1) {
                spaceSeven.style = 'background-image: url("/graphic/nought.jpg")';
                score[7] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceSeven.style = 'background-image: url("/graphic/cross.jpg")';
                score[7] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceEight.addEventListener("click", function(){
        if (score[8] === 0) {
            if (turn === 1) {
                spaceEight.style = 'background-image: url("/graphic/nought.jpg")';
                score[8] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceEight.style = 'background-image: url("/graphic/cross.jpg")';
                score[8] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    spaceNine.addEventListener("click", function(){
        if (score[9] === 0) {
            if (turn === 1) {
                spaceNine.style = 'background-image: url("/graphic/nought.jpg")';
                score[9] = 1;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 2;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            } else {
                spaceNine.style = 'background-image: url("/graphic/cross.jpg")';
                score[9] = 2;
                winner(checking(score), isFirstPlayerTurn, isSecondPlayerTurn, drawLine);
                turn = 1;
                myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
            }
        }
    })
    myTurn(turn, isFirstPlayerTurn, isSecondPlayerTurn);
}
