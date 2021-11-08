//get buttons

function signOut(){

    window.location.href = "/";

};

function cliente(e){

    var key = e.keyCode;

    if(key === 13){

        window.location = "clienti.html";

    } else if (key === 40){

        document.getElementById("location").focus();

    }

};

function clientem(){

    window.location = "clienti.html";

};

function locale(e){

    var key = e.keyCode;

    if(key === 13){

        window.location = "locali.html";

    } else if (key === 38){

        document.getElementById("client").focus();

    } else if (key === 40){

        document.getElementById("company").focus();

    }

};

function localem(){

    window.location = "locali.html";

}

function ditta(e){

    var key = e.keyCode;

    if(key === 13){

        window.location = "ditta.html";

    } else if (key === 38){

        document.getElementById("location").focus();

    }

};

//da continuare in fatturazione