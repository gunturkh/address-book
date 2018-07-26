$(function () {
    const addressForm = $("#address-form")
    const resultForm = $("result-form")


    const addressDOM = (event) => {
        event.preventDefault()

        const newAddress = {
            firstName: $("#first-name").val(),
            lastName: $("#last-name").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
            city: $("#city").val()
        }

        console.log(newAddress);
        


        const result = $("#result-output")

        result.text(newAddress[0])



    }



    // Event Listener
    addressForm.on("submit", addressDOM)

})

