let choice = Array.from(document.querySelectorAll('.clickListener'))
choice.forEach(el => el.addEventListener('click', async (e) =>{
    e.target.id
  const userChoice = document.querySelector("#userChoice").value;
  const res = await fetch(`/api?userChoice=${userChoice}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#winner").textContent = data.
  document.querySelector("#botOutcome").textContent = data.botOutcome
  
}))





//let flipRes = Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";
//let flipRes = Math.ceil(Math.random() * 3) <=  1 ? "paper" : "tails";
