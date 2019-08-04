// Reference to dom
// Event listener
// Get data
// Html Representation
// Render to dom



// Build two fieldsets and input fields that will allow you to enter the name of a favorite thing of yours, 
// and a location where you might purchase it (Target, Amazon, Best Buy, etc...)
// Add a button beneath the fieldsets labeled "Save to Wishlist".
// When the button is clicked, display the data in the following format in the DOM.
// I can purchase {thing} at {location}

const wishList = document.querySelector("#wishList")

document.querySelector("#BTN").addEventListener("click", event => {
    const favoriteThing = document.querySelector("#favoriteThing").value
    const purchaseLocation = document.querySelector("#purchaseLocation").value

wishList.innerHTML += `
    <section>
        <p>I can purchase ${favoriteThing} at ${purchaseLocation}.</p>
    </section>

`

})






