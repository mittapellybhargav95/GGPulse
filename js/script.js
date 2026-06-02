const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const games = [

    {
        name: "Truck Simulator Ultimate",
        page: "simulator.html#"
    },

    {
        name: "Bus Simulator Ultimate",
        page: "simulator.html"
    },

    {
        name: "World Bus Driving Simulator",
        page: "simulator.html"
    },

    {
        name: "truck simulator big rigs",
        page: "simulator.html"
    },

    {
        name: "truckers of europe 3",
        page: "simulator.html"
    },

    {
        name: "truckers brasil online",
        page: "simulator.html"
    },

    {
        name: "bus simulator indonesia",
        page: "simulator.html"
    },

    {
        name: "truck master: india simulator",
        page: "simulator.html"
    },

    {
        name: "truck simulator evo: drive usa",
        page: "simulator.html"
    }

];

searchInput.addEventListener("keyup", function() {

    const filter = searchInput.value.toLowerCase();

    searchResults.innerHTML = "";

    if(filter.length === 0){
        return;
    }

    games.forEach(function(game){

        if(game.name.toLowerCase().includes(filter)){

            searchResults.innerHTML += `
                <div class="search-item">
                    <a href="${game.page}">
                        ${game.name}
                    </a>
                </div>
            `;

        }

    });

});