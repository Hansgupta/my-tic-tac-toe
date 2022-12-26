let turn = "X"
let isgameover = false;


const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
               

function checkWin(){
    let spanboxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((spanboxtext[e[0]].innerText === spanboxtext[e[1]].innerText) && (spanboxtext[e[2]].innerText === spanboxtext[e[1]].innerText) && (spanboxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = spanboxtext[e[0]].innerText + " Won"
            isgameover = true;
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(eachbox =>{
    let spanboxtext = eachbox.querySelector('.boxtext');
    eachbox.addEventListener('click', ()=>{
        if(spanboxtext.innerText === ''){
            spanboxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let spanboxtexts = document.querySelectorAll('.boxtext');
    Array.from(spanboxtexts).forEach(each => {
        each.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    
})

