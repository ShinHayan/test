/**
 * javascript 연습
 * @description 
 * @author Shin,hayan
 * @version 0.1
 */
/**
 * Clear Message
 * @param {String} id 
 */
 function clearMsg(id){
   document.getElementById(id).innerHTML="";
 }
/**
 * 메시지 출력 함수
 * @param {String} id 구역id
 * @param {String} strMsg 출력할 문자열
 * @param {Boolean} bNewLine 개행
 */
function showMsg(id,strMsg,bNewLine = true) {
   document.getElementById(id).innerHTML+=strMsg;
   if (bNewLine == true )
      document.getElementById(id).innerHTML+="<br>";
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
   showMsg(id,"온도값은"+toCelsius(v));
}

/***************************************
 * 
 * Object 
 */
var person= {
   firstName: "White",
   lastName: "Shin",
   id: 46,
   eyeColor: "brown",
   fullName: function() {
      return this.firstName+","+this.lastName;
   },
   get fName() {return this.firstName;},
   get lName() {return this.lastName;},
   set fName(fname) {this.firstName=fname;},
   set lName(lname) {this.lastName=lname;},
};
var car={type:"Fiat",model:"500", color:"white",};

class Person2 {
   constructor(fName, lName, id, eyeColor) {
      this.firstName = fName;
      this.lastName = lName;
      this.id = id;
      this.eyeColor = eyeColor;
   this.name=function(){return this.firstName+" "+this.lastName;};
   }
   get fullName() {return this.firstName+" "+this.lastName;}
}
/**
 * Class Object
 * @param {*} first 
 * @param {*} last 
 * @param {*} id 
 * @param {*} eyeColor 
 */
function Person3(first,last,id,eyeColor) {
   this.firstName=first;
   this.lastName=last;
   this.id=id;
   this.eyeColor=eyeColor;
   this.fullName=function() {return this.lastName+","+this.firstName; };
  
}
function testObject(id){
   var myMom=new Person2("Black","Shin",50,"blue");
   var myDad=new Person2("grey","Shin",22,"grey");
   var mySister=new Person3("Red","Park","black");
   
   showMsg(id,myMom.name()); //method
   showMsg(id,myDad.fullName); //getter property
   showMsg(id,mySister.fullName());

   Person2.prototype.nationality="Korean";
   showMsg(id,myMom.nationality==myDad.nationality);
   myDad.job="taxi driver";
   showMsg(id,myMom.job); //undefined ??

   showMsg(id,Object.keys(myMom));
   showMsg(id,Object.keys(myDad));
   showMsg(id,Object.isExtensible(myMom));
   //add new property --안된다. ??
   Object.defineProperty(Person3,"hobby",{value: "baseball"});
   showMsg(id,Object.keys(mySister));
   var myBro=new Person3("Cris","Park","brown");
   showMsg(id,Object.keys(myBro));
   showMsg(id,myBro.hobby);
   //add new property
   Object.defineProperty(person,"hobby",{value: "pingpong"});
   showMsg(id,person.fullName());
   showMsg(id,person.hobby);
}

/**
 * print fullName of person
 * @param {String} id 
 */
function getFullName(id) {
   showMsg(id,person.fullName());
   showMsg(id,person.firstName);
   showMsg(id,person.fName);
   person.fName="Black";
   showMsg(id,person.fullName());
  
}
/**
 * print date
 * @param {String} id 
 */
function getDate(id) {
    showMsg(id,Date());
    showMsg(id,"==ISO Time Format==");
    var d=new Date("2019-05-22T00:00:00"); //Local Time으로 간주
    showMsg(id,"2019-05-22T00:00:00==>"+d.toUTCString());

    var f=new Date("2019-05-22T00:00:00Z"); //UTC로 간주, Local Time으로 자동으로 바뀜
    showMsg(id,"2019-05-22T00:00:00Z==>"+f);

}
/**
* print number various base
* @param {String} id 
* @param {Number} v  
*/
function baseTest(id,v) {
   showMsg(id,"10진수:"+v.toString(10));
   showMsg(id,"2진수:"+v.toString(2));
   showMsg(id,"8진수:"+v.toString(8));
   showMsg(id,"16진수:"+v.toString(16));
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
   showMsg(id,names[idx]);
}
/**
* @param {String} id 
*/
function joinArrayString(id){
   names.unshift("blue");
   showMsg(id,names.join('#').toString());
   showMsg(id,names.join('#').toString());
   names.shift();
   showMsg(id,names.join('$').toString());
   showMsg(id,names.concat(buses));
}
/**
* 
* @param {String} id 
*/
function sortTest(id) { 
   showMsg(id,points.sort(function(a, b){return a - b}).toString(),true);//ASC
   showMsg(id,points.sort(function(a, b){return b - a}).toString(),true);//DESC
   showMsg(id,points.sort(function(a, b){return 0.5-Math.random()}).toString(),true);//random
   showMsg(id,Math.max.apply(null,points),true);

   //연도
   showMsg(id,"연도별 정렬");
   cars.sort(function(b, a){return a.year - b.year});
   cars.forEach(element => {
      showMsg(id,element.year+":"+element.type,true);
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
      showMsg(id,element.type+":"+element.year,true);
       });
   }
/**
 * Test Array
 * @param {String} id 
 */
function arrayTest(id) {
   var numbers=[45,23,4,13,4,6];
   var isLarger=numbers.every(function(value,index,array){
      return value>18;
   });

   //document.getElementById(id).innerHTML+= ("All over 18 is "+isLarger.toString());
   showMsg(id,"All over 18 is "+isLarger.toString(),true);
}
/**
 * Test Math
 * @param {String} id 
 */
function mathTest(id){
   //document.getElementById(id).innerHTML="Math.round(-1.5) is "+Math.round(-1.5)+"<br>";
   showMsg(id,"Math.round(-1.2) is "+Math.round(-1.2),true);
   showMsg(id,"Math.round(-1.5) is "+Math.round(-1.5),true);
   showMsg(id,"Math.round(-1.6) is "+Math.round(-1.6),true);
   showMsg(id,"Math.round(-1.9) is "+Math.round(-1.9),true);
   showMsg(id,"Math.round(1.2) is "+Math.round(1.2),true);
   showMsg(id,"Math.round(1.5) is "+Math.round(1.5),true);
   showMsg(id,"Math.round(1.6) is "+Math.round(1.6),true);
   showMsg(id,"Math.round(1.9) is "+Math.round(1.9),true);
   showMsg(id,"비대칭 산술반올림 주의!",true);

   showMsg(id,"(x>0) ?  floor(x+0.5) : floor(x-0.5) is "+Math.floor(-1.5-0.5),true);

   showMsg(id,statementTest.tstSwith());
   showMsg(id,statementTest.dec2bin(6));
   showMsg(id,statementTest.bin2dec("110"));
}
/**
 * Test Statements
 */
var statementTest={
   tstSwith: function(){
      switch(new Date().getDay()) {
         case 0:
            return "Sunday";
         break;
         case 1:
            return "Monday";
         break;
         case 2:
            return "Tue";
         break;
         case 3:
            return "Wed";
         break;
         case 4:
            return "Thurs";
         break;
         case 5:
            return "Friday";
         break;
         case 6:
            return "Sat";
         break;
         
      }
   },
   dec2bin:function(dec){
      return (dec >>> 0 ).toString(2);
    },
   bin2dec:function(bin){
      return parseInt(bin,2).toString(10);
   }

};




