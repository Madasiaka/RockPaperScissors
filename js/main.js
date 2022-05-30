let choice = Array.from(document.querySelectorAll('.clickListener'))
choice.forEach(el => el.addEventListener('click', async (e) =>{
    console.log(e.target.id)
  const userChoice = e.target.id //IDK if this will work
  const res = await fetch(`/api?userChoice=${userChoice}`)
  const data = await res.json()

  console.log(data);
  
  data.winner == userChoice ? window.location.href = "winpage.html" : data.winner == data.botChoice ? window.location.href = "losepage.html": document.querySelector("#winner").innerText = 'Nobody Wins!'
}))
