var nameArray = ['aweso',
'Andrew Mueller'];
var backSpace = false;
var displayText = '';
var index = 0;
var i = 0;
var speed = 1500;
if(backSpace == false){
    var speed = 1400
}
if (backSpace !== false){
    var speed = 200
}


function loopPause(){
    setTimeout(function (){
        if(backSpace !== true && i < nameArray[0].length){
            i++;
            displayText = nameArray[0].substring(0, displayText.length + 1);
            console.log(displayText);
            console.log(i);
            loopPause()};
            
            if(i == nameArray[0].length){
                setTimeout(() => { 

                    // !!resume by adding delete script here 

                    backSpace = true;
                    console.log(backSpace)
                }, 1500);
            }
        }, 400);
    }; 

loopPause();







    //     setTimeout(1500);
        
    //    console.log(displayText);
    
    


