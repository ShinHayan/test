/**
 * external javascript 
 */
/**
 * multiply function
 * @param {number} a 
 * @param {number} b 
 */
function mul(a,b) {
   return a*b
}
/**
* msg function
* @param {String} id
* @param {String} strMsg 
*/
function msg(id,strMsg) {

  var x= document.getElementById(id);
  x.style.fontSize="14px";
  x.style.color="blue";

   x.innerHTML= "this is msg box sample:"+strMsg
}
/**
* change button text
* @param {String} id
*/
function changeLabel(id) {
   var label=document.getElementById(id).innerText;
   if (label == "changeLabel")
      document.getElementById(id).innerText="yaoo";
   else
      document.getElementById(id).innerText="changeLabel";
}
/**
 * convert F->C
 * @param {Number} v Fahernheit
 */
function toCelsius(v) {
   return (5/9)*(v-32);
}
/**
 * make msg
 * @param {String} id
 * @param {Number} v 
 */
function toCelsiusMsg(id,v) {
   this.document.getElementById(id).innerHTML=
   "온도값은"+toCelsius(v);
}

/**
 * Object 
 */
var person= {
   firstName: "Shin",
   lastName: "White",
   id: 46,
   eyeColor: "brown",
   fullName: function() {
      return this.firstName+" "+this.lastName;
   }
};
var car={type:"Fiat",model:"500", color:"white"};
/**
 * print fullName of person
 * @param {String} id 
 */
function getFullName(id) {
   document.getElementById(id).innerHTML=person.fullName();
}
/**
 * print date
 * @param {String} id 
 */
function getDate(id) {
    document.getElementById(id).innerHTML=Date();
    document.getElementById(id).innerHTML+="<br>"
    
    var d=new Date("2019-05-22T00:00:00"); //Local Time으로 간주
    document.getElementById(id).innerHTML+="2019-05-22T00:00:00==>"
    document.getElementById(id).innerHTML+=d.toUTCString();

    document.getElementById(id).innerHTML+="<br>ISO Time Format";
    var f=new Date("2019-05-22T00:00:00Z"); //UTC로 간주, Local Time으로 자동으로 바뀜
    document.getElementById(id).innerHTML+="<br>2019-05-22T00:00:00Z==>"
    document.getElementById(id).innerHTML+=f;
}
/**
* print number various base
* @param {String} id 
* @param {Number} v  
*/
function baseTest(id,v) {
   document.getElementById(id).innerHTML="10진수:"+v.toString(10);
   document.getElementById(id).innerHTML+="<br>2진수:"+v.toString(2);
   document.getElementById(id).innerHTML+="<br>8진수:"+v.toString(8);
   document.getElementById(id).innerHTML+="<br>16진수:"+v.toString(16);
}
/**
* Array
*/
var names=["white","black","smith"];
var buses=["01","02"];
var points = [40, 100, 1, 5, 25, 10];
var cars=[
   {type:"Volov", year:2016},
   {type:"Saab",year:2001},
   {type:"BMW",year:2000}
];    
/**
 * @param {String} id 
 * @param {Number} idx 
 */
function getArray(id,idx) {
   
   document.getElementById(id).innerHTML=names[idx];
}
/**
* @param {String} id 
*/
function joinArrayString(id){
   names.unshift("blue");
   document.getElementById(id).innerHTML=names.join('#').toString()+"<br>";
   names.shift();
   document.getElementById(id).innerHTML+=names.join('$').toString()+"<br>";
   document.getElementById(id).innerHTML+=names.concat(buses);
}
/**
* 
* @param {String} id 
*/
function sortTest(id) {
   

   document.getElementById(id).innerHTML=
       points.sort(function(a, b){return a - b}).toString()+"<br>"; //ASC
   document.getElementById(id).innerHTML+=
       points.sort(function(a, b){return b - a}).toString()+"<br>"; //DESC
   document.getElementById(id).innerHTML+=
       points.sort(function(a, b){return 0.5-Math.random()}).toString()+"<br>"; //DESC
   document.getElementById(id).innerHTML+=
       Math.max.apply(null,points)+"<br>"; //DESC
   
   //연도
   cars.sort(function(b, a){return a.year - b.year});
   cars.forEach(element => {
       document.getElementById(id).innerHTML+=(element.year.toString()+":"+
       element.type.toString()+"<br>"); 
   });
   
   cars.sort(function(a,b){
       var x=a.type.toLowerCase();
       var y=b.type.toLowerCase();
       if (x>y) return -1;
       if (x<y) return 1;
       return 0 ;
       });
   //이름순
   cars.forEach(element=> {
       document.getElementById(id).innerHTML+=(element.type+":"+
       element.year+"<br>");  
       });
   }
