const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var add = 0;

//da sistemare i numeri  di telefono e i vari elementi di caricamento dei dati nel database
function createNumInput(){

    add++;
    var i = document.createElement('input');
    i.setAttribute('type', "text");
    i.setAttribute('name', ("cell_") + add);
    i.setAttribute('autocomplete', "off");
    i.setAttribute('id', ("cell_" + add));
    i.setAttribute('oniput', "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');")
    var b = document.createElement('button');
    b.setAttribute('type', "submit");
    //b.setAttribute('', "")
    return i;

}

function addc(e){

    key = e.keyCode;

    if (key == 13){

        var parent = document.getElementById("cell");
        parent.appendChild(createNumInput());
        document.getElementById("cell_" + add).focus();
        

    } else if (key == 38){



    }


};

function back(e){

    var key = e.keyCode;

    if(key === 13){

    window.location = "clienti.html";

    } else if (key === 37){

        document.getElementById("res").focus();

    }

};

function backm(){

    window.location = "clienti.html";

}

//reload
function res(e){

    var key = e.keyCode;

    if(key === 13){

    location.reload();

    } else if(key === 37){

        document.getElementById("ncli").focus();

    } else if (key === 39){

        document.getElementById("back").focus();

    }

}

function resm(){

    location.reload();

}

//focus on surname
function nextn(e) {

    var key = e.keyCode;

    if (key === 13) {

        document.getElementById("surname").focus();

    }

}

//focus on cellphone
function nexts(e) {

    var key = e.keyCode;

    if (key === 13) {

        document.getElementById("phone").focus();

    } else if (key === 38){

        document.getElementById("name").focus();

    }

}

//focus on hphone
function nextc(e){

    var key = e.keyCode;

    if (key === 13){

        document.getElementById("hphone").focus();

    } else if (key === 38) {
        
        document.getElementById("surname").focus();

    }

}

//focus on email
function nexth(e){

    var key = e.keyCode;

    if (key === 13) {

        document.getElementById("email").focus();

    } else if (key === 38){

        document.getElementById("phone").focus();

    }

}

//focus on note
function nexte(e){

    var key = e.keyCode;

    if (key === 13 && mailformat.test((document.getElementById("email").value))) {

        document.getElementById("ncli").disabled = false;
        document.getElementById("note").focus();

    } else if (key === 38){
        
        document.getElementById("ncli").disabled = true;
        document.getElementById("hphone").focus();

    }

}

//focus on new cliente button
function nextno(e){

    var key = e.keyCode;

    if (key === 13) {

        document.getElementById("ncli").focus();

    } else if (key === 38){
        
        document.getElementById("email").focus();

    }

}

//registration new client 
function register_userm(){

    const data = new Object();

    data.nome = document.getElementById('name').value;
    data.cognome = document.getElementById("surname").value;
    data.n_cellulare = document.getElementById("phone").value;
    data.n_casa = document.getElementById("hphone").value;
    data.email_c = document.getElementById("email").value;
    data.note = document.getElementById("note").value;

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append( 'Accept','application/json');

    var formBody = prepareDataForPost(data);

    fetch("http://localhost:5000/clienti", {

        headers: myHeaders,
        mode: 'cors',
        body: formBody,
        method: "POST"

    }).then(d => {

        let data = d.text()
        return data;

    }).then(data =>{

        console.log(data)

    });

    window.alert("Cliente creato");
    window.location = "clienti.html";

    function prepareDataForPost(data) {
        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return formBody;
    }

}

function register_user(e) {

    var key = e.keyCode;
    const data = new Object();

    data.nome = document.getElementById('name').value;
    data.cognome = document.getElementById("surname").value;
    data.n_cellulare = document.getElementById("phone").value;
    data.n_casa = document.getElementById("hphone").value;
    data.email_c = document.getElementById("email").value;
    data.note = document.getElementById("note").value;

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append( 'Accept','application/json');

    if(key === 13){

    var formBody = prepareDataForPost(data);

    fetch("http://localhost:5000/clienti", {

        headers: myHeaders,
        mode: 'cors',
        body: formBody,
        method: "POST"

    }).then(d => {

        let data = d.text()
        return data;

    });

    window.alert("Cliente creato");
    window.location = "clienti.html";

    function prepareDataForPost(data) {
        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return formBody;
    }

    } else if (key === 39){

        document.getElementById("res").focus();

    }

};