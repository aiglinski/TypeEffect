var nameArray = ['Aweso', 
'Andrew Mueller']
class typeEffect { constructor(textEl, name, wait){
    this.textEl =  document.getElementById('insertName');
    this.name = nameArray;
    this.txt = '';
    this.Index = 0;
    this.wait = parseInt(wait, 10);
    this.typeAnim();
    this.backSpace = false;
    this.speed = 300;
}
typeAnim(){
    const current = this.Index % this.nameArray.length;
    // fulltext of only one word
    const fullName = this.name[current];

if(this.backSpace){
    this.txt = fullName.substring(0, this.txt.length -1);
}
else {
    this.txt = fullName.substring(0, this.txt.length + 1);
}
this.textEl.innerHtml = `${this.txt}`;

if(this.backSpace){
    speed = 120
};

if(!this.backSpace && this.txt === fullName){
    speed = this.wait;
    this.backSpace = true;
}
else if (this.backSpace && this.txt ===''){
    this.backSpace = true;
    this.index++;
    speed = 500;
};
setTimeout(() => this.typeAnim(), speed);
}
}

document.addEventListener('DOMContentLoaded', );



