
//on start
loadMonuments();

//connect to API + gather data
async function loadMonuments() {
    const url = "http://localhost:8000/api/monuments";
    const config = {
        method: "get"
    }
    const response = await fetch(url, config);
    if (response.ok) {
        //converts response body to JSON text
        const monuments = await response.json();

        showMonuments(monuments);
    } else {
        showError();
    }
}

function showError() {
    
}

//update the page with monuments
function showMonuments(mons) {
    const grid = document.querySelector("#monuments-grid");

    for (let monument of mons) {
        const { name, yearCompleted, type } = monument;

        const monumentCard = `
            <div class="monument">
                <h2>${name}</h2>
                <hr>
                <p class="year">Year: ${yearCompleted}</p>
                <p>Type: ${type}</p>
            </div>
        `

        grid.innerHTML += monumentCard;
    }
}