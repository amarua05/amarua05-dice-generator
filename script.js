document.getElementById("submit").onclick = function() {
    var numberOfDice = document.getElementById("numberOfDice").value; // Gets the value that is put in by the user (from 1 to 5)
    var dropdown = document.getElementById("typeOfDice"); // Calls the element "typeOfDice" in the HTML source.
    var dropdownValue = dropdown.value;
    const randomNumbers = [];
    if (numberOfDice < 1 || numberOfDice > 10 || isNaN(numberOfDice)) {
        window.alert("Please put a number between 1-10")
        return;
      }
      
    if (numberOfDice > 1){
        for(let i=0; i < numberOfDice; i++){
            const randomizer = Math.floor(Math.random() * dropdownValue + 1);
            x = randomNumbers.push(randomizer);        
        }
        const results = randomNumbers.join(', ');
        document.getElementById("results").value = results;
    }
    else{
        const randomizer = Math.floor(Math.random() * dropdownValue + 1);
        document.getElementById("results").value = randomizer;
    }
}
 