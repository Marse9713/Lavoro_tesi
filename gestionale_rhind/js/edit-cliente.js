const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/;

var id_cliente = localStorage.getItem("id");

const da = function(){

    var myHeaders = new Headers();
       myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
       myHeaders.append( 'Accept','application/json');

    fetch("http://localhost:5000/clienti/:" + id_cliente, {
       
               headers: myHeaders,
               mode: 'cors',
               method: "GET"
       
           }).then(d => {
       
               let data = d.text()
               var da = (JSON.parse(data)[0][0]);
               return da;

           });
        }

function onload(){

    var myHeaders = new Headers();
       myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
       myHeaders.append( 'Accept','application/json');

    fetch("http://localhost:5000/clienti/:" + id_cliente, {
       
               headers: myHeaders,
               mode: 'cors',
               method: "GET"
       
           }).then(d => {
       
               let data = d.text()
               return data;

           }).then(data =>{

            var da = (JSON.parse(data)[0][0]);
            document.getElementById("name").value = da.nome;
            document.getElementById("surname").value = da.cognome;
            document.getElementById("phone").value = da.n_cellulare;
            document.getElementById("hphone").value = da.n_casa;
            document.getElementById("email").value = da.email;
            
            if(da.note == null){
            
                document.getElementById("note").value = "";

            } else {

                document.getElementById("note").value = da.note;

            }

           });

           

}

function controllconf(){

    var myHeaders = new Headers();
       myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
       myHeaders.append( 'Accept','application/json');

    fetch("http://localhost:5000/clienti/:" + id_cliente, {
       
               headers: myHeaders,
               mode: 'cors',
               method: "GET"
       
           }).then(d => {
       
               let data = d.text()
               return data;

           }).then(data =>{

            var da = (JSON.parse(data)[0][0]);          

    if ((document.getElementById("name").value === da.nome) && 
    document.getElementById("surname").value === da.cognome && 
    document.getElementById("phone").value === da.n_cellulare && 
    document.getElementById("hphone").value === da.n_casa &&
    document.getElementById("email").value === da.email &&
    (document.getElementById("note").value === da.note || document.getElementById("note").value == "\n")){

        document.getElementById("conf").disabled = true;
        console.log(document.getElementById("note").value === da.note || document.getElementById("note").value == "\n");

    } else {

        document.getElementById("conf").disabled = false;
        console.log(document.getElementById("note").value === da.note || document.getElementById("note").value == "\n");
    }

});
}

//go back
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

        document.getElementById("conf").focus();

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
        
        controllconf();
        document.getElementById("surname").focus();

    }

}

//focus on cellphone
function nexts(e) {

    var key = e.keyCode;

    if (key === 13) {

        controllconf();
        document.getElementById("phone").focus();

    } else if (key === 38){

        controllconf();
        document.getElementById("name").focus();

    }

}

//focus on hphone
function nextc(e){

    var key = e.keyCode;

    if (key === 13){

        controllconf();
        document.getElementById("hphone").focus();

    } else if (key === 38) {
        
        controllconf();
        document.getElementById("surname").focus();

    }

}

//focus on email
function nexth(e){

    var key = e.keyCode;

    if (key === 13) {

        controllconf();
        document.getElementById("email").focus();

    } else if (key === 38){

        controllconf();
        document.getElementById("phone").focus();

    }

}

//focus on note
function nexte(e){

    var key = e.keyCode;

    if (key === 13 && mailformat.test((document.getElementById("email").value))) {

        controllconf();
        document.getElementById("note").focus();
        

    } else if (key === 38){

        controllconf();
        document.getElementById("hphone").focus();

    }

}

//focus on mod cliente button
function nextno(e){

    var key = e.keyCode;

    if (key === 13 && document.getElementById("conf").disabled == false) {

        controllconf();
        document.getElementById("conf").focus();

    } else if (key == 13 && document.getElementById("conf").disabled == true){

        window.alert("Nessuna modifica effettuata");
        document.getElementById("res").focus();

    } else if (key === 38){

        controllconf();
        document.getElementById("email").focus();

    }

}

//registration new client 
function modifica_userm(){

    const data = new Object();

    data.nome = document.getElementById('name').value;
    data.cognome = document.getElementById("surname").value;
    data.n_cellulare = document.getElementById("phone").value;
    data.n_casa = document.getElementById("hphone").value;
    data.email = document.getElementById("email").value;
    data.note = document.getElementById("note").value;

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append( 'Accept','application/json');

    var formBody = prepareDataForPost(data);

    fetch("http://localhost:5000/update/:" + id_cliente, {

        headers: myHeaders,
        mode: 'cors',
        body: formBody,
        method: "PUT"

    }).then(d => {

        let data = d.text()
        return data;

    });
    window.alert("Cliente modificato");
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

function modifica_user(e) {

    var key = e.keyCode;
    const data = new Object();

    data.nome = document.getElementById('name').value;
    data.cognome = document.getElementById("surname").value;
    data.n_cellulare = document.getElementById("phone").value;
    data.n_casa = document.getElementById("hphone").value;
    data.email = document.getElementById("email").value;
    data.note = document.getElementById("note").value;

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append( 'Accept','application/json');

    if(key === 13){

    var formBody = prepareDataForPost(data);

    fetch("http://localhost:5000/update/:" + id_cliente, {

        headers: myHeaders,
        mode: 'cors',
        body: formBody,
        method: "PUT"

    }).then(d => {

        let data = d.text()
        return data;

    });
    window.alert("Cliente modificato");
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

    } else if (key === 38){

        document.getElementById("note").focus();

    }

};