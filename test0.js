let names = [
    "Alice", "Bob", "Charlie", "Diana",
    "Fiona", "George", "Hannah", "Isaac", "Jasmine","Maya","Louis",
    "Kevin", "Laura", "Mason", "Nina", "Oscar",
    "Rachel", "Sam", "Tina","Selena", "Seth","Frank","Mason"
]

let alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
]



let randomindex=Math.floor(Math.random()*alphabet.length)
let selectname=alphabet[randomindex]

console.log(selectname)

function fname() {
    for (let i = 0; i < names.length; i++) {
       
        if(names[i][0]==selectname){
            console.log('welcome ' + names[i])}

            else {
                console.log('sorry baby')
            }

        
    } 

    

   
    
}

fname(selectname)