// console.log("What's Happenin!?");

let button = document.querySelector("#getResidentButton");




function buttonClick() {
    axios.get("http://swapi.dev/api/planets/?search=alderaan")
    .then(getResults => {
            // console.log(getResults)
            for (i = 0; i < getResults.data.results[0].residents.length; i++) {
                axios.get(getResults.data.results[0].residents[i])
                return addName(getResults.data.results[0].residents[i])
            }
        })
}

addName = (obj) => {
    const nameElement = document.createElement('h2')
    nameElement.textContent = obj.data.name
    document.querySelector(`section`).appendChild(nameElement)
}


button.addEventListener("click", buttonClick)



