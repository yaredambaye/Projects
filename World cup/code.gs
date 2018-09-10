SHEET_NAME="World Cup"
URL="http://terrikon.com/soccer/worldcup-2018"


function myFunctionA() {
  ScriptApp.newTrigger("getData")
  .timeBased()
  .everyMinutes(1)
  .create();
}


function myFunctionB() {
  ScriptApp.newTrigger("getData")
  .fromSpreadsheet()
  .open()
  .create();
}


function getData() {
  SpreadsheetApp
  .getActiveSpreadsheet()
  .getSheetByName(SHEET_NAME)
  .getRange("A126")
  .setValue( URL + "?" + Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss") );
}

function myFunction() {
  
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  var teams16=["France","Argentina","Uruguay","Portugal","Spain","Russia","Croatia","Denmark","Brazil","Mexico","Belgium","Japan","Sweden","Switzerland","Colombia","England"];
  var sexyMap16=[["France",0],["Argentina",0],["Uruguay",0],["Portugal",0],["Spain",0],["Russia",0],["Croatia",0],["Denmark",0],["Brazil",0],["Mexico",0],["Belgium",0],["Japan",0],["Sweden",0],["Switzerland",0],["Colombia",0],["England",0]];
  var j=0;
  
  for(var i=61;i<=68;i++){
  if(split(i,3)[0]!="-"){
    
    if(split(i,3)[0] > split(i,3)[1]){
      activeSheet.getRange(i, 8).setValue(teams16[j]);
      sexyMap16[teams16.indexOf(teams16[j])][1]+=3;
    } else {
      activeSheet.getRange(i, 8).setValue(teams16[j+1]);
      sexyMap16[teams16.indexOf(teams16[j])][1]+=3;
    }
    j+=2;
   }
  }
  for(var k=61;k<=68;k++){
    var cell =  activeSheet.getRange(k,8).getValue();
   
    
  }
  
  
  

}
function split(x,y){
  var score = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(x,y).getValue();
  if(score.indexOf("(")>-1){
    var arg = JSON.stringify(score).split("(")[1].split(":")[0];
    var fra = JSON.stringify(score).split("(")[1].split(":")[1].slice(0, -1).slice(0, -1);
    var nums=[arg,fra];
  } else {
  
    var arg = JSON.stringify(score).split(":")[0].substr(1);
    var fra = JSON.stringify(score).split(":")[1].slice(0, -1);
    var nums=[arg,fra];
  }

  return nums;
}