const a = ["Paper", "Scissors", "Rock"];
let ps = [], cs = [];
const result = document.getElementById("s");
const message = document.getElementById("msg");
const player = document.getElementById("playerChoice");
const computer = document.getElementById("computerChoice");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const rockButton = document.getElementById("rockButton");
const score = document.getElementById("score");
const reset = document.getElementById("reset");
const round = () => {p1.innerText = `${ps[0] === undefined ? "" : ps[0]}`, p2.innerText = `${ps[1] === undefined ? "" : ps[1]}`, p3.innerText = `${ps[2] === undefined ? "" : ps[2]}`, p4.innerText = `${ps[3] === undefined ? "" : ps[3]}`, p5.innerText = `${ps[4] === undefined ? "" : ps[4]}`, p6.innerText = `${ps[5] === undefined ? "" : ps[5]}`, p7.innerText = `${ps[6] === undefined ? "" : ps[6]}`, p8.innerText = `${ps[7] === undefined ? "" : ps[7]}`, p9.innerText = `${ps[8] === undefined ? "" : ps[8]}`, c1.innerText = `${cs[0] === undefined ? "" : cs[0]}`, c2.innerText = `${cs[1] === undefined ? "" : cs[1]}`, c3.innerText = `${cs[2] === undefined ? "" : cs[2]}`, c4.innerText = `${cs[3] === undefined ? "" : cs[3]}`, c5.innerText = `${cs[4] === undefined ? "" : cs[4]}`, c6.innerText = `${cs[5] === undefined ? "" : cs[5]}`, c7.innerText = `${cs[6] === undefined ? "" : cs[6]}`, c8.innerText = `${cs[7] === undefined ? "" : cs[7]}`, c9.innerText = `${cs[8] === undefined ? "" : cs[8]}`;}
const computerChoice = () => {
	const r = Math.random();
	let c;
	if (r <= 0.33) {
		c = a[0];
	}
	else if (r <= 0.66) {
		c = a[1];
	}
	else {
		c = a[2];
	}
	return c;
}
const playerChoice = d => {
	const cc = computerChoice();
	const msg = (p, c) => {
		let m;
		if ((p === a[0] && c === a[2]) || (p === a[1] && c === a[0]) || (p === a[2] && c === a[1])) {
			m = "You win. Computer lost.";
			ps.push(1);
			cs.push(0);
		}
		else if (p === c) {
			m = "It's a tie."
		}
		else {
			m = "You lost. Computer win.";
			cs.push(1);
			ps.push(0);
		}
		return m;
	}	
	result.style.display = "block";
	message.innerText = msg(a[d], cc);
	player.innerText = a[d];
	computer.innerText = cc;
	round();
	const pl = ps.filter(x => x === 1).length;
	const cl = cs.filter(x => x === 1).length;
	playerScore.innerText = pl;
	computerScore.innerText = cl;
	if(pl === 5 || cl === 5) {
		s.style.display = "none", opt.style.display = "none", reset.style.display = "block";
		if(pl === 5) {
			message.innerText = "You win. Computer lost.";
		}
		else {
			message.innerText = "You lost. Computer win.";
		}
	}
}
paperButton.addEventListener("click", () => playerChoice(0));
scissorsButton.addEventListener("click", () => playerChoice(1));
rockButton.addEventListener("click", () => playerChoice(2));
reset.addEventListener("click", () => {opt.style.display = "block", reset.style.display = "none", message.innerText = "Try to beat the computer.", playerScore.innerText = "", computerScore.innerText = "", ps = [], cs = [], round();});
