const id = [];

//fill table
function onload(){

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
myHeaders.append( 'Accept','application/json');

fetch("http://localhost:5000/clienti", {

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

              option.text = data[0][i].id_cliente + " " + data[0][i].cognome + " " + data[0][i].nome;

              sel.add(option);
              
       }
});
}

//button functions for keyboard

function select(e){

       var key = e.keyCode;
 
       if(key == 13){
              
              id[0] = ((document.getElementById("sel").value).substr(0, 4));
              document.getElementById("set").focus();
 
       }
 
}

function presssel(e){

    var key = e.keyCode;

    if(key == 13){

        localStorage.setItem("id", id);
        window.location = "locali.html"

    }

}

function goback(e){

      var key = e.keyCode;

      if(key == 13){

            window.location = "anagrafe.html";

     } else if (key == 38){

            document.getElementById("delete").focus();

}

}

//button functions for mouse

function selectm(){

       id[0] = ((document.getElementById("sel").value).substr(0, 4));
       console.log(id[0]);
       document.getElementById("change").focus();

}

function gobackm(){

       window.location = "anagrafe.html";

}