

// Listening for the event when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Getting a reference of the button using document.getElementById(...)

    const submit = document.getElementById('btn');

    // Adding an event listener on createSessionButton for the "Click" event
    submit.addEventListener('click', function () {
        // This callback function is executed when the event is fired


        const name = document.getElementById('username');

        const username = name.value;

        const url = `https://ca3-project.herokuapp.com/index?username=${username}`;


        fetch(url, { method: 'POST' })


            // first .then, receive the response
            .then(function (response) {

                return response.json();
            })
            .then(function (json) {
                console.log(json)
                document.getElementById('animation').innerHTML = 
            `<div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <span>Loading</span>
            </div>`
            // setTimeout(() => window.location.href = 'Q1.html', 5000)
            })
            .finally(setTimeout(() => window.location.href = 'Q1.html', 5000))
    });

});