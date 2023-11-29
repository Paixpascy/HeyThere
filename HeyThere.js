//arrays
let textbooks=['math', 'science','english'];
    console.log(textbooks);    
textbooks[3]='french'
     console.log(textbooks);
     console.log(textbooks[1]);
     console.log(textbooks.length);
     
     //functions
     function search(book){
         console.log('choose'+' '+book);
     }
     search('language');

     //if
     let total=36;
     if(total > 0 && total < 15)
     {
        console.log(' you are in year a');
     }
     else if(total > 16 && total < 42)
     {
        console.log(' you are in year b');
     }
     else
     {
        console.log(' you are in year c');
     }