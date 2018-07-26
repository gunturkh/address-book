$(function () {
    const addressForm = $("#address-form")
    
    const addressDOM = (event) => {
        event.preventDefault()
        const firstName = $("#first-name").val()
        const lastName = $("#last-name").val()
        const phone = $("#phone").val()
        const email = $("#email").val()
        const city = $("#city").val()

    }



    // Event Listener
    addressForm.on("submit", addressDOM)
    
})

