
function changeDiceImage() {

    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = `Player 1 Wins! <img src='./images/flag.png'>`;
    }

    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = `<img src='./images/flag.png'> Player 2 Wins!`;
    }

    else{
        document.querySelector("h1").textContent = "Draw!";
    }

}