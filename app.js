

console.log("NASA Website");

let apikey = 'OWFhbfxrKuFjzokB9U1bex0KTmaMXYPkC7CoHON2';

let accordion = document.getElementById('accordionExample')

let xhr = new XMLHttpRequest();

xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let html = '';
        for (element in json) {
            let apod = `    <div class="accordion my-5 mx-5" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            <b>MISRO-APOD( Astronomy Picture of the Day ):</b> ${json['title']}<hr>
                            <b>Date of the picture:</b> ${json['date']}
                        </button>
                    </h2>
                </div>
    
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        ${json['explanation']}
                    </div><hr>
                    
                    <img src="${json['url']}" class="img-fluid" alt="Responsive image">
                </div>
            </div>`

            html = apod;

        };
        accordion.innerHTML = html;

    }
    else {
        console.log('some error');

    }

}

xhr.send();







