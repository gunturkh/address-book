$(function () {
    const addressForm = $("#address-form")
    const resultField = $("#result-field")

    let contact = []





    const addressDOM = (event) => {
        event.preventDefault()

        let newAddress = {
            "firstName": $("#first-name").val(),
            "lastName": $("#last-name").val(),
            "phone": $("#phone").val(),
            "email": $("#email").val(),
            "city": $("#city").val()
        }

        const firstName = $("#first-name-result")
        const lastName = $("#last-name-result")
        const phone = $("#phone-result")
        const email = $("#email-result")
        const city = $("#city-result")

        contact.push(newAddress)

        const divChild = document.createElement('div')
        divChild.innerHTML = `${newAddress.firstName}`
        $('#result-field').append(`<div><h5>First Name : ${newAddress.firstName}</h5><br>
        <h5>Last Name : ${newAddress.lastName}</h5><br>
        <h5>Phone : ${newAddress.phone}</h5><br>
        <h5>Email : ${newAddress.email}</h5><br>
        <h5>City : ${newAddress.city}</h5><br>
        </div>
        `)




        firstName.text(`First Name : ${newAddress.firstName}`)
        lastName.text(`Last Name : ${newAddress.lastName}`)
        phone.text(`Phone : ${newAddress.phone}`)
        email.text(`Email : ${newAddress.email}`)
        city.text(`City : ${newAddress.city}`)



        console.log(`First Name : ${newAddress.firstName}
        Last Name : ${newAddress.lastName}
        Phone : ${newAddress.phone}
        Email : ${newAddress.email}
        City : ${newAddress.city}`)



    }



    // Event Listener
    addressForm.on("submit", addressDOM)

})

