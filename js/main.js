let choice = Array.from(document.querySelectorAll('.clickListener'))
choice.forEach(el => el.addEventListener('click', async (e) =>{
    e.target.id 
  const userChoice = e.target.id //IDK if this will work
  const res = await fetch(`/api?userChoice=${userChoice}`)
  const data = await res.json()

  console.log(data);
  
  data.winner == userChoice ? document.querySelector("#winner").innerText = 'You Win!!' : data.winner == data.botChoice ? document.querySelector("#winner").innerText = 'You Lose!' : document.querySelector("#winner").innerText = 'Nobody Wins!'
  
  
  //document.querySelector("#winner").textContent = data.winOutcome
  //document.querySelector("#botOutcome").textContent = data.botOutcome
  
}))

if ()
document.querySelector("#lost")





//let flipRes = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";
//let flipRes = Math.ceil(Math.random() * 3) <=  1 ? "paper" : "tails";
