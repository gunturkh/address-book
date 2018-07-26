$(function () {
    const addressForm = $("#address-form")
    
    const addressDOM = (event) => {
        event.preventDefault()
        const firstName = $("#first-name").val()
        const lastName = $("#last-name").val()
        const phone = $("#phone").val()
        const email = $("#email").val()
        resultInSecondForm.val(hourToSecond(hourInputValue) + minuteToSecond(minuteInputValue) + secondToSecond(secondInputValue))
        resultInMinuteForm.val(hourToMinute(hourInputValue) + minuteToMinute(minuteInputValue) + secondToMinute(secondInputValue))
        resultInHourForm.val(hourToHour(hourInputValue) + minuteToHour(minuteInputValue) + secondToHour(secondInputValue))

    }



    // Event Listener
    addressForm.on("submit", addressDOM)
    
})

