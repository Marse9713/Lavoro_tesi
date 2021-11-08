//get buttons

function onload(){

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append( 'Accept','application/json');
    
    fetch("http://192.168.1.175:5000/fatture", {
    
           headers: myHeaders,
           mode: 'cors',
           method: "GET"
    
    }).then(d => {
                            
           let data = d.json();
           return data;
                        
    }).then(data =>{
    
           let option;
    
           for (let i = 0; i < data[0].length; i++){
    
                  option = document.createElement('option');
    
                  option.text = data[0][i].data + " " + data[0][i].ccliente;
    
                  sel.add(option);
                  
           }
    });
    }

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