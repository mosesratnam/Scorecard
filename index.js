document.querySelectorAll('button.score-btn').forEach( e => {addEventListener("click", incrementScore)})

function incrementScore(e){
    const score = Number(document.getElementById(e.target.parentElement.children[0].textContent.toLowerCase()+"Score").innerText)

    const addNum = Number(document.getElementById(e.target.id).textContent.charAt(1))

    document.getElementById(e.target.parentElement.children[0].textContent.toLowerCase()+"Score").innerText = score + addNum
}