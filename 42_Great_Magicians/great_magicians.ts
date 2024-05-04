//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
//the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magician: string[] = ["Alice", "David", "Chris"];

function make_great(magicianArray:string[]) {
    for(let i =0; i < magicianArray.length; i++){
      magician[i] =  "The Great "  +  magicianArray[i]
      console.log(magicianArray[i])
    }
}



function show_magicians(params:string[]) {
    for(let magicians of magician){
        console.log(magicians)
    }
}



show_magicians(magician)
make_great(magician)