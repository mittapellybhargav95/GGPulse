const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let text = card.innerText.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});