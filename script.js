

var user = prompt(`Select any one option
    01. forword counting
    02. backword counting
    03. math tables
    select (one , two , three)`)

   

    if(user.toLowerCase() === "one"){
        document.write('<h2>Forword Counting</h2> ')
       for(var i = 1 ; i <= 100; i += 10){

      
for( var j = i ; j < i + 10; j++ ){

  document.write(" " + j + " " )
}
document.write("</br>")
       }
    }

  

    // backword counting

else if(user.toLowerCase() === "two"){
    
document.write('<h2>Backword Counting</h2>')

    for(var i = 100 ; i >= 1; i -= 10){
        for( var j = i ; j > i - 10; j-- ){
        
          document.write(" " + j + " " )
        }
        document.write("</br>")
               }
            
}

//Math tables

else if(user.toLowerCase() === "three"){
    document.write('<h2>Table</h2>')
var userstart = prompt("Enter the starting number")
var userending = prompt("Enter the ending number")
var usertable = prompt("Enter the table number")

for(var i = userstart ; i <= userending; i++){
    
    document.write(usertable + "  &nbsp;  &nbsp;    x    &nbsp; &nbsp;  " + i + " &nbsp;  =  &nbsp; &nbsp;  " + (usertable*i)  + "</br>"  )
           }
}


else{
    document.write('<h2>invalid input</h2>')
}