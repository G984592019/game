let timer = null;
const MAX = 3;
let count = 1;
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}

function gameStart() {
  let size = 5;
  let qNum = Math.floor(Math.random()*q.length);

  for(let i=0; i<size*size; i++) {
    let s = document.createElement("span");
    s.textContent = q[qNum][0];
    s.setAttribute("id", "num"+i);
    s.addEventListener("click", function() {
      if(this.textContent == q[qNum][1]) {
        correct.play();
        alert("正解");
        while(cells.firstChild) {
          cells.removeChild(cells.firstChild);
        }
        count++;
        if(MAX >= count) {
          gameStart();
        } else {
          clearTimeout(timer);
        }
      } else {
        wrong.play();
      }
    });
    cells.appendChild(s);
    if(i%size == size-1) {
      const br = document.createElement("br");
      cells.appendChild(br);
    }
  }
  let p = Math.floor(Math.random()*size*size);
  let ans = document.getElementById("num"+p);
  ans.textContent = q[qNum][1];
}

function time() {
  let now = new Date();
  let eTime = parseInt((now.getTime() - start.getTime())/1000);
  score.textContent = eTime;
  timer = setTimeout("time()", 1000);
}
