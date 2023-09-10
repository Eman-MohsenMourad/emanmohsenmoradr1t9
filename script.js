function changewords(){
    document.getElementById('test').innerHTML="Not Hello Eman";
}
function changecolor(){
    document.getElementById('test4').style.color="red";
}
function changesize(){
    document.getElementById('test5').style.fontSize="50px";
}
function changeborder(){
    document.getElementById('test6').style.border="2px solid red";
}
function displayhide(){
    document.getElementById('test1').style.display="none";
}
function displayshow(){
    document.getElementById('test1').style.display="block";
}
function writeoutput(){
    document.write(3*7);
}
function alertoutput(){
    window.alert(3*5);
}
function printoutput(){
    window.print();
}
function consoleoutput(){
    console.log(100/10);
}
function alertoutput1(){
    window.alert((2*10)/100);
}
function writeoutput1(){
    let x=10;
    let y=2;
    let z=5;
    let e=12;
    let f=20;
    let g=(x/y)*(z/e)+f;
    document.write(g);
}
function solve(){
    let i=5;
    let k=45;
    let v=(i*k)/58+100-10;
    document.getElementById('test9').innerHTML="the result is"+" "+v;

}
const mobile= {
    name: "iphone",
    model: "12 pro max",
    type: "smart",
    year: "2020",
    fullname: function(){
        return this.name+" "+this.model;
    }
   
} 
document.getElementById('test10').innerHTML="the mobile is"+" "+mobile.fullname(); 
let text="Hello winter";
let result= text.slice(5);
document.getElementById('test11').innerHTML=result; 
let text1 = "Hello world!";
let result1 = text1.substring(1,6);
document.getElementById('test12').innerHTML=result1; 