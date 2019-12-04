var nameArray = ['aweso',
'Andrew Mueller'];
var backSpace = false;
var displayText = '';
var index = 0;
var i = 0;
var typeAnim = function() {
    displayText = nameArray[0].substring(0, displayText.length + 1);
    console.log(displayText);
};
var Del = function (){
    displayText = nameArray[0].substring(0, displayText.length -1);
    console.log(displayText);
};


function type(){
    if(backSpace == false){
    typeAnim();
    setTimeout(function() {
        console.log(backSpace);
      i++;
      if (i < nameArray[0].length){
        type();
      }
      else if (backSpace == false && index == 0){
          backSpace = true;
          console.log(backSpace);
          type();
      }
    }, 500);
  };

  testing 
  
  if(backSpace == true){
      Del();
      setTimeout(function() {
          i--;
          if(i > 0){
             type ();
          };
          if(i == 0){
              console.log('increment in array here');
          };
      }, 150)
  
};
}
type();





    //     setTimeout(1500);
        
    //    console.log(displayText);
    
    



