$(document).ready(function() {
    $(".change-devour").on("click", function(event) {
        event.preventDefault();
        
        let id = $(this).data("id");

        fetch("/api/burger/" + id, {
            method: "PUT"
        })
        .then(function(res) {
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        let burgerName = $("#burgerName").val().trim();
        let postBody = {
            burger_name: burgerName,
            devoured: 0
        };

        fetch("/api/burger", {
            headers: {
                'Content-Type':'application/json'
            },
            method: "POST",
            body: JSON.stringify(postBody)
        })
        .then(function(res) {
            location.reload();
        });
    });
});