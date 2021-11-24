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
function change(e){

      var key = e.keyCode;

      if(key == 13){

             localStorage.setItem("id", id);
             window.location = "edit-cliente.html";

     } else if (key == 40){

            document.getElementById("new").focus();

     } else if (key == 37){

            document.getElementById("sel").focus();

     }

}

function select(e){

       var key = e.keyCode;
 
       if(key == 13){
              
              id[0] = ((document.getElementById("sel").value).substr(0, 4));
              document.getElementById("change").focus();
 
       }
 
}
    
function newclient(e){ 

      var key = e.keyCode;

      if(key == 13){

            window.location = "nuovo_utente.html";

     } else if (key == 40){

            document.getElementById("delete").focus();

     
      } else if (key == 38){

            document.getElementById("change").focus();

     } 

}

function deleteclient(e){

      var key = e.keyCode;

      var details = {
       'id': id[0]
       };
   
       var formBody = [];
       
       for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
       }
   
       formBody = formBody.join("&");

      if(key === 13){

       document.getElementById("modal").style.display = "block";
       document.body.style.opacity = 1;
       document.getElementById("no").focus();

       } else if (key == 40){

       document.getElementById("back").focus();

       } else if (key == 38){

       document.getElementById("new").focus();
  
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

function onkeydelaff(e){

       var key = e.keyCode;

       if (key === 13){

              var myHeaders = new Headers();
              myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
              myHeaders.append( 'Accept','application/json');
       
              var details = {
       
                     'id': id[0]
       
                     };
                 
                     var formBody = [];
                     
                     for (var property in details) {
                            var encodedKey = encodeURIComponent(property);
                            var encodedValue = encodeURIComponent(details[property]);
                            formBody.push(encodedKey + "=" + encodedValue);
                     }
                 
                     formBody = formBody.join("&");
              
                     fetch("http://localhost:5000/delete/:id", {
              
                      headers: myHeaders,
                      mode: 'cors',
                      body: formBody,
                      method: "DELETE"
              
                  }).then(d => {
              
                      let data = d.text()
                      return data;
              
                  });

       window.alert("Cliente eliminato");
       location.reload();

       } else if (key === 39){

              document.getElementById("no").focus();

       }
}

function onkeydel(e){

       var key = e.keyCode;

       if(key === 13){

              document.getElementById("modal").style.display = "none"

       } else if (key === 37){

              document.getElementById("yes").focus();

       }

}

//button functions for mouse

function selectm(){

       id[0] = ((document.getElementById("sel").value).substr(0, 4));
       console.log(id[0]);
       document.getElementById("change").focus();

}

function changem(){
       localStorage.setItem("id", id);
       window.location = "edit-cliente.html";
 
}
     
function newclientm(){ 
 
       window.location = "nuovo_utente.html";

}
 
function deleteclientm(){

       document.getElementById("modal").style.display = "block";
       document.body.style.opacity = 1;
       document.getElementById("no").focus();
       
}

function gobackm(){

       window.location = "anagrafe.html";

}

function onmdelaff(){
       
       var myHeaders = new Headers();
       myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
       myHeaders.append( 'Accept','application/json');

       var details = {

              'id': id[0]

              };
          
              var formBody = [];
              
              for (var property in details) {
                     var encodedKey = encodeURIComponent(property);
                     var encodedValue = encodeURIComponent(details[property]);
                     formBody.push(encodedKey + "=" + encodedValue);
              }
          
              formBody = formBody.join("&");
       
              fetch("http://localhost:5000/delete/:id", {
       
               headers: myHeaders,
               mode: 'cors',
               body: formBody,
               method: "DELETE"
       
           }).then(d => {
       
               let data = d.text()
               return data;
       
           });

           window.alert("Cliente eliminato");
           location.reload();

}

function onmdel(){

       document.getElementById("modal").style.display = "none";

}