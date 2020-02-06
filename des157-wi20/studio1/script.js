document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//sumbit
  document.myform.onsubmit = processForm;

//generate function
  function processForm() {
    "use strict"
    //console.log("here")
    const rname = document.myform.rname.value;
    const pn1 = document.myform.pn1.value;
    const pn2 = document.myform.pn2.value;
    const noun = document.myform.noun.value;
    const yname = document.myform.yname.value;
    document.getElementById('result').innerHTML = "dear " + rname + ", <br><br>" + pn1 + " are red <br>" + pn2 + " are blue <br> my heart is full of love <br> for " + noun + "!<br><br> love, " + yname + " <3";
    return false; 
  }
});
