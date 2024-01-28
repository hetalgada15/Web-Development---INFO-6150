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

//Addition of students in a table:

function addStudent() {

  var table = document.getElementById("myTable");
  var l = table.rows.length;
  console.log(l)
  var row_no;
  if (l == 1) {
    var row_no = 1;
  }
  else {
    var row_no = parseInt(table.rows[l - 2].cells[1].innerHTML.slice(-1)) + 1;

  }

  var row = table.insertRow(-1);
  row.setAttribute("id", "row_" + row_no);

  row.style.display = 'table-row'
  var cell;
  for (var i = 0; i < 8; i++) {
    cell = row.insertCell(i);

    if (i == 0) {
      cell.innerHTML = "<input type='checkbox'" + "id='check_" + row_no + "' onclick=\"oncheck('row_" + row_no + "','check_" + row_no + "')\"/><br /><br /><img src='down.png' width='25px' onclick=\"mycollapse('collapse_row_" + row_no + "' )\" />";
    }
    else if (i == 1) {
      cell.innerHTML = "Student " + row_no;
    }
    else if (i == 2) {
      cell.innerHTML = "Teacher  " + row_no;
    }
    else if (i == 3) {
      cell.innerHTML = "Approved";
    }
    else if (i == 4) {
      cell.innerHTML = "Fall";
    }
    else if (i == 5) {
      cell.innerHTML = "TA";
    }
    else if (i == 6) {
      cell.innerHTML = "12345";
    }
    else if (i == 7) {
      cell.innerHTML = "100%";
    }

  }

  txt = "Student " + row_no + " Record added successfully";
  window.alert(txt);
  var hidden_row = table.insertRow(-1);
  hidden_row.setAttribute("id", "collapse_row_" + row_no);
  hidden_row.classList.add("dropDownTextArea");
  hidden_cell = hidden_row.insertCell(0);
  hidden_row.innerHTML = "<td colspan='8'> Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br /> </td>"
}

