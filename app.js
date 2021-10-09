function getData() {
    $.ajax({
        url: 'https://randomuser.me/api/?results=150',
        dataType: 'json',
        success: (data) => displayData(data)
    });
}

function displayData(data) {
    $list = $('#list');

    let { results } = data;
    console.log(results);

    results.forEach((item) => {
        let { first } = item.name;
        let { last } = item.name;
        const fullName = `${first} ${last}`;

        let { medium } = item.picture;

        const jsx = `  <div class="card m-3 p-3">

                       <div class="row">

                       <div class="col-2">
                       <img src="${medium}">
                       </div>

                       <div class="col">
                       <h5>${fullName}</h5>
                       </div>
                       
                       </div>

                       </div>
                    `
        $list.append(jsx);

    });

    pushResultsToPHP(results);


}

function pushResultsToPHP(results) {
    results = results.map((item) => {
        const { first, last } = item.name;
        const fullname = `${first} ${last}`;

        const { medium } = item.picture;

        return {
            fullname,
            image: medium
        };
    });

    console.log("about to push to php")
    $.ajax({
        url: "save.php",
        data: {
            data: results
        },
        type: "POST"
    });
}
function requestUsers(users) {
    $.ajax({
        url: `result.php/?users=${users}`,
        dataType: 'json',
        success: data => console.log(data)
    });
}
$(function () {
    let btnSubmit = $('#btn-submit');
    btnSubmit.bind('click', (event) => {
        const users = $('#input-number').val()

        requestUsers(users);

        event.preventDefault();
    });

    getData();
});
