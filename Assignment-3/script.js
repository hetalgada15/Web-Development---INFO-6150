//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
var check_flag = 0;
var student_count = 0;

// collapse the row
function mycollapse(collapse_row) {
  console.log(document.getElementById(collapse_row).style.display);
  var row_no = document.getElementById(collapse_row);

  if (row_no.style.display == 'none') {
    row_no.style.display = 'table-row';
  }

  else {
    row_no.style.display = 'none';
  }

}

// Add a new student to a table
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

// Function for when checkbox is checked
function oncheck(row, check) {
  console.log(row);

  var delete_cell = document.getElementById("myTable").rows[0].cells[8];
  var edit_cell = document.getElementById("myTable").rows[0].cells[9];
  var row_no = document.getElementById(row);
  var button = document.getElementById("button");


  if (document.getElementById(check).checked) {
    check_flag++;
    console.log(check_flag);
    button.style.backgroundColor = 'orange'
    button.style.border = '2px solid orange'

    row_no.setAttribute("bgcolor", "yellow");
    delete_cell.style.display = 'table-cell';
    edit_cell.style.display = 'table-cell';

    delete_cell = row_no.insertCell(8);
    edit_cell = row_no.insertCell(9);
    delete_cell.innerHTML = "<button onclick='delete_row(" + row + ")'>Delete</button>"
    edit_cell.innerHTML = "<button onclick='edit_row(" + row + ")'>Edit</button>"
  }
  else {
    check_flag--;
    console.log(check_flag);

    row_no.setAttribute("bgcolor", "white");

    if (check_flag == 0) {
      delete_cell.style.display = 'none';
      edit_cell.style.display = 'none';
      button.style.backgroundColor = 'gray'
      button.style.border = '2px solid gray'
    }

    row_no.deleteCell(8);
    row_no.deleteCell(8);

  }

}


// Deleting a row
function delete_row(row) {
  console.log(row.id);
  var studentName = row.cells[1].textContent; 
  if (confirm("Delete the record for " + studentName + "?")) {
    check_flag--;
    console.log(check_flag);
    var delete_cell = document.getElementById("myTable").rows[0].cells[8];
    //var edit_cell = document.getElementById("myTable").rows[0].cells[9];
    if (check_flag == 0) {
      delete_cell.style.display = 'none';
      //edit_cell.style.display = 'none';
      button.style.backgroundColor = 'gray'
      button.style.border = '2px solid gray'

    }
    var row = document.getElementById(row.id);
    row.parentNode.removeChild(row);

    var hidden_row = document.getElementById("collapse_" + row.id);
    hidden_row.parentNode.removeChild(hidden_row);
    txt = studentName + " Record deleted successfully!";
    window.alert(txt);
  }
  else {
    txt = "You pressed Cancel!";
    window.alert(txt);
  }
}


function edit_row(row) {
  var studentName = row.cells[1].textContent;
  var rowNumber = parseInt(studentName.split(" ")[1]);
  var popupTitle = "Edit details of Student " + rowNumber;

  // Create a container for the popup
  var popupContainer = document.createElement("div");
  popupContainer.classList.add("popup");

  // Set popup title
  var titleElement = document.createElement("h2");
  titleElement.textContent = popupTitle;

  // Set popup content with student details
  var contentElement = document.createElement("div");
  contentElement.textContent =
    "Student Name: " + row.cells[1].textContent +
    "\nTeacher: " + row.cells[2].textContent +
    "\nApproved: " + row.cells[3].textContent +
    "\nTerm: " + row.cells[4].textContent +
    "\nRole: " + row.cells[5].textContent +
    "\nID: " + row.cells[6].textContent +
    "\nPercentage: " + row.cells[7].textContent;

  // Create "Update" and "Cancel" buttons
  var updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.onclick = function () {
    // Perform the update logic here
    // For now, just close the popup
    popupContainer.style.display = "none";
    window.alert("Student " + rowNumber + " data updated successfully!");
  };

  var cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.onclick = function () {
    // Close the popup without updating
    popupContainer.style.display = "none";
    window.alert("Update cancelled.");
  };

  // Append elements to the popup container
  popupContainer.appendChild(titleElement);
  popupContainer.appendChild(contentElement);
  popupContainer.appendChild(updateButton);
  popupContainer.appendChild(cancelButton);

  // Append the popup container to the body
  document.body.appendChild(popupContainer);

  // Display the popup
  popupContainer.style.display = "block";
}








