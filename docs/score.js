document.addEventListener('DOMContentLoaded', function () {

        fetch('http://localhost:8000/', { method: 'GET' })
            // first .then, receive the response
            .then(function (response) {
                // Treat the body as json and convert it into JavaScript Object
                return response.json();
            })
            // second .then, where we can access the JavaScript Object
            .then(function (json) {
                // extract the session Id from response body
                const sessionId = json.session_id;

                // Get reference to the element that will display the session id
                const sessionIdField = document.getElementById('session-id-field');

                // Set the innerHTML to the session id
                sessionIdField.innerHTML = sessionId;
            });

});