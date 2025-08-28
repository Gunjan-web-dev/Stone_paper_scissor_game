function randoNum(){
    return Math.floor((Math.random() * 3)+1);
}

function player1Choice(){
    const p = document.getElementById('pp1');
    p.innerHTML = "";
    const h = document.createElement('h1');
    const p1 = randoNum();
    if(p1 == 1){
        h.textContent = `Stone`;
        p.appendChild(h);
        return 'stone';
    }else if(p1 == 2){
        h.textContent = `Paper`;
        p.appendChild(h);
        return 'paper';
    }else if(p1 == 3){
        h.textContent = `Scissor`;
        p.appendChild(h);
        return 'scissor';
    }

}

function player2Choice(){
    const p = document.getElementById('pp2');
    p.innerHTML = "";
    const h = document.createElement('h1');
    const p2 = randoNum();
    if(p2 == 1){
        h.textContent = `Stone`;
        p.appendChild(h);
        return 'stone';
    }else if(p2 == 2){
        h.textContent = `Paper`;
        p.appendChild(h);
        return 'paper';
    }else if(p2 == 3){
        h.textContent = `Scissor`;
        p.appendChild(h);
        return 'scissor';
    }
}

function checkWin(){

    const a = player1Choice();
    const b = player2Choice();

    const rs = document.getElementById('result');
    rs.innerHTML = "";
    const h = document.createElement("h1");

    if(a === b){
        h.textContent = `Match Draw`;
        document.getElementById('p1').style.backgroundColor = 'lightgreen';
        document.getElementById('p2').style.backgroundColor = 'lightgreen';
    } else if(
        (a === 'stone' && b === 'scissor') ||
        (a === 'paper' && b === 'stone') ||
        (a === 'scissor' && b === 'paper')
    ){
        h.textContent = `Player 1 Won`;
        document.getElementById('p1').style.backgroundColor = 'green';
        document.getElementById('p2').style.backgroundColor = 'red';
    } else {
        h.textContent = `Player 2 Won`;
        document.getElementById('p1').style.backgroundColor = 'red';
        document.getElementById('p2').style.backgroundColor = 'green';
    }

    rs.appendChild(h);
}