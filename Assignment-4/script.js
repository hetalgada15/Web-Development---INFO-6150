document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    var submitButton = document.getElementById("submitButton");
  
    form.addEventListener("submit", submitted);
  
    var validFirstName = false;
    var validLastName = false;
    var validEmail = false;
    var validContact = false;
    var validZipcode = false;
    var validcategoryDesc = false;
  
    // regex checks variables
    var regName = /^[a-zA-Z]+$/;
    var regEmail = /([\w\.]+)@(northeastern+)\.(edu)/;
    var regPhone = /\d{3}-?\d{3}-\d{4}(?:-[0-9]{6})?$/;
    var regZipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;
    var regcategoryDesc = /^[a-zA-Z]+$/;
  
    var firstName = document.getElementById("firstName");
    firstName.addEventListener("input", validate);
  
    var lastName = document.getElementById("lastName");
    lastName.addEventListener("input", validate);
  
    var emailId = document.getElementById("emailId");
    emailId.addEventListener("input", validate);
  
    var phoneNumber = document.getElementById("phoneNumber");
    phoneNumber.addEventListener("input", validate);
  
    var zipCode = document.getElementById("zipcode");
    zipCode.addEventListener("input", validate);
  
    var optionSelect = document.getElementById("optionSelect");
    optionSelect.addEventListener("change", addCheckbox);
  
    var checkboxSelect = document.getElementById("checkboxSelectDynamic");
    checkboxSelect.addEventListener("change", addTextField);
  
    function validate(e) {
      console.log("validate");
      var value = e.target.value;
      console.log(value);
      var type = this.id;
      var em = "error_" + type;
  
      switch (type) {
        case "firstName":
          if (!value.trim().match(regName)) {
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validFirstName = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validFirstName = true;
          }
          break;
  
        case "lastName":
          if (!value.trim().match(regName)) {
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validLastName = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validLastName = true;
          }
          break;
  
        case "emailId":
          if (!value.trim().match(regEmail)) {
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validEmail = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validEmail = true;
          }
          break;
  
        case "phoneNumber":
          if (!value.trim().match(regPhone)) {
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validContact = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validContact = true;
          }
          break;
  
        case "zipcode":
          if (!value.trim().match(regZipcode)) {
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validZipcode = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validZipcode = true;
          }
          break;
  
        case "Category":
          if (!value.trim().match(regcategoryDesc)) {
            document.getElementById(em).style.display = "block";
            this.style.border = "2px solid red";
            validcategoryDesc = false;
          } else {
            document.getElementById(em).style.display = "none";
            this.style.border = "";
            validcategoryDesc = true;
          }
          break;
      }
  
      validateForm();
    }
  
    function validateForm() {
      var isValid =
        validFirstName &&
        validLastName &&
        validEmail &&
        validContact &&
        validZipcode;
  
      submitButton.disabled = !isValid;
    }
  
    function submitted(e) {
      e.preventDefault();
      console.log("submitted");
      console.log(
        validFirstName +
          "|" +
          validLastName +
          "|" +
          validEmail +
          "|" +
          validContact +
          "|" +
          validZipcode
      );
      if (
        validFirstName &&
        validLastName &&
        validEmail &&
        validContact &&
        validZipcode
      ) {
        alert("Data Saved Successfully");
        document.getElementById("table").style.display = "block";
  
        var table = document.getElementById("table");
        var row = table.insertRow(-1);
        var title = row.insertCell(0);
        var firstName = row.insertCell(1);
        var lastName = row.insertCell(2);
        var emailId = row.insertCell(3);
        var phoneNumber = row.insertCell(4);
        var address1 = row.insertCell(5);
        var address2 = row.insertCell(6);
        var city = row.insertCell(7);
        var state = row.insertCell(8);
        var zipcode = row.insertCell(9);
        var hear = row.insertCell(10);
        var selectDrink = row.insertCell(11);
        var comments= row.insertCell(12);
  
        title.innerHTML = document.querySelector('input[name="title"]:checked')
          .value;
  
        firstName.innerHTML = document.getElementById("firstName").value;
        lastName.innerHTML = document.getElementById("lastName").value;
        emailId.innerHTML = document.getElementById("emailId").value;
  
        phoneNumber.innerHTML = document.getElementById("phoneNumber").value;
        address1.innerHTML = document.getElementById("streetAddress1").value;
        address2.innerHTML = document.getElementById("streetAddress2").value;
  
        city.innerHTML = document.getElementById("city").value;
        state.innerHTML = document.getElementById("state").value;
        zipcode.innerHTML = document.getElementById("zipcode").value;
        comments.innerHTML = document.getElementById("comments").value;

      
        
  
        var checks = $('input[name="link"]:checked')
          .map(function () {
            return $(this).val();
          })
          .get();
  
        console.log(checks);
        hear.innerHTML = checks;
        selectDrink.innerHTML = document.getElementById("xyz").value;
        form.reset();
      } else {
        alert("Please enter correct details");
      }
      form.reset();
    }
  
    function addTextField(e) {
      console.log(e);
      var selected = e.target.checked;
      var textarea = document.getElementById("text_area");
  
      if (selected) {
        textarea.style.display = "block";
      } else {
        textarea.style.display = "none";
      }
    }
  
    function addCheckbox(e) {
      console.log(e.target.value);
      var selected = e.target.value;
      var dynamicCheckbox = document.getElementById("dynamicCheckbox");
      console.log(checkboxSelectDynamic.innerHTML);
  
      if (selected === "Flat White") {
        dynamicCheckbox.style.display = "block";
        checkboxSelectDynamic.value = "hi";
        document.getElementById("spanTag").innerHTML =
          "<br> Any changes for Flat White drink?";
      } else if (selected === "Caffè Americano") {
        dynamicCheckbox.style.display = "block";
        checkboxSelectDynamic.value = "hi";
        document.getElementById("spanTag").innerHTML =
         
        "<br> Any suggestions for Caffè Americano?";
    } else if (selected === "Caramel Macchiato") {
      dynamicCheckbox.style.display = "block";
      checkboxSelectDynamic.value = "hi";
      document.getElementById("spanTag").innerHTML =
        "<br> Any issues with Caramel Macchiato?";
    } else if (selected === "Nitro Cold Brew") {
      dynamicCheckbox.style.display = "block";
      checkboxSelectDynamic.value = "hi";
      document.getElementById("spanTag").innerHTML =
        "<br> Any issue with Nitro Cold Brew?";
    } else if (selected === "Any other drinks") {
      dynamicCheckbox.style.display = "block";
      checkboxSelectDynamic.value = "hi";
      document.getElementById("spanTag").innerHTML =
        "<br> Any other comments on specific drinks?";
    } else {
      dynamicCheckbox.style.display = "none";
    }
    console.log(checkboxSelectDynamic.value);

    validateForm();
  }

  var myButton = document.getElementById("submitButton");

  myButton.addEventListener("click", function () {
    alert("Data Saved Successfully");
  });

  // Initial form validation
  validateForm();
});
  