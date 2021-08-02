document.addEventListener('DOMContentLoaded', function () {

        fetch('https://ca3-project.herokuapp.com/username', { method: 'GET' })
            // first .then, receive the response
            .then(function (response) {
                // Treat the body as json and convert it into JavaScript Object'
                    console.log(response)
                return response.json();
            })
            // second .then, where we can access the JavaScript Object
            .then(function (json) {
                console.log(json)
                
            });

});