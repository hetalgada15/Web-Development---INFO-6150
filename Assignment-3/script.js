//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
var check_flags=0;
var count_student= 0;


//collapsing of rows:

function mycollapse(collapse_row){
  console.log(document.getElementById(collapse_row).style.display);
  var row_no= document.getElementById(collapse_row);

  if(row_no.style.display== 'none') //if the row is currently hidden
  {
    row_no.style.display= "table-row"; //make it visible
  }

  else{
    row_no.style.display= "none";
  }
}