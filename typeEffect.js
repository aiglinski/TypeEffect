// var nameArray = ['aweso',
// 'Andrew Mueller'];
// var backSpace = false;
// var displayText = '';
// var index = 0;
// var i = 0;
// var speed = 1500;
// if(backSpace == false){
//     var speed = 800
// }
// if(displayText == nameArray[index]){ 
//     var speed = 3000;
// }
// if (backSpace == true){
//     var speed = 100
// }


// function loopPause(){
//     setTimeout(function (){
//         if(backSpace !== true && i < nameArray[0].length){
//             i++;
//             displayText = nameArray[0].substring(0, displayText.length + 1);
//             console.log(displayText);
//             console.log(i);
//             console.log(speed);
//             loopPause()};
//         }, speed);
//         if(displayText == nameArray[0]){backSpace = true;
//         console.log(speed)};
//         if(backSpace == true && i > 0){
//             i = nameArray[index].length;
//             for (i = nameArray[0].length; i > 0; i--){
             
//                 setTimeout(() => { 
//                  if(backSpace == true){
//                         i--;
//                         displayText = nameArray[0].substring(0, displayText.length - 1);
//                         console.log(displayText);
//                         console.log(i);
//                         loopPause()};
//                     }, 500);
//                     console.log(backSpace);
//             }
//         };
// };


// loopPause();

class TypeAnim {
    constructor(htmlEL, nameArray, waitBetween){
        this.htmlEl = htmlEL;
        this.displayText = '';
        this.nameArray = nameArray;
        this.arrayIndex = 0;
        this.waitBetween = waitBetween;
        this.typeEffect();
        this.backSpace = false;
    }
    typeEffect() {
        const index = this.arrayIndex % this.nameArray.length;
        const name = this.nameArray[index];

        if(this.backSpace && this.displayText !== this.nameArray[2]) {
            this.displayText = name.substring(0, this.displayText.length - 1);
        } else if (!this.backSpace && this.displayText !== this.nameArray[2]){
            this.displayText = name.substring(0, this.displayText.length + 1);
        }
        document.getElementById('insertname').innerHTML =`${this.displayText}`;

        let speed = 300;
        if(this.backSpace){
            speed = 120;
        }

        if(!this.backSpace && this.displayText === name){
            speed = this.waitBetween;
            this.backSpace = true;
        
        }
            else if(this.backSpace && this.displayText ===''){
                this.backSpace = false;
                this.arrayIndex++;
                speed = 500;
            }
            if(this.arrayIndex == this.nameArray.length){
            return
            }
            setTimeout(() => this.typeEffect(), speed);
        }
    }

    document.addEventListener('DOMContentLoaded', init);

        function init(){
            const htmlEL = document.getElementById('insertName');
            const nameArray = ['aweso', 'Amazi',
            'Andrew'];
            const waitBetween = 2000;
            new TypeAnim(htmlEL, nameArray, waitBetween);
        }



