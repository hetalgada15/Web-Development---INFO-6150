const numRegex = /^-?\d*\.?\d+$/;

const validateInput = (input, errorDiv) => {
    if (!input) {
        $(errorDiv).show();
        $(errorDiv).html("Input fields cannot be empty");
    } else if (!numRegex.test(input)) {
        $(errorDiv).show();
        $(errorDiv).html("Enter a valid number");
    } else {
        $(errorDiv).hide();
    }
}
        $("#Digit1").on("input", function() {
            validateInput($(this).val(), "#error_input1");
        });

        $("#Digit2").on("input", function() {
            validateInput($(this).val(), "#error_input2");
        });

        const myFunction = (v) => {
            const input1 = $("#Digit1").val();  
            const input2 = $("#Digit2").val();
            let ans = 0;
        
            $("#error_number").hide();
        
            if (!input1 || !input2) {
                $("#error_number").show();
                $("#error_number").html("Input fields cannot be empty");
            } else if (!numRegex.test(input1) || !numRegex.test(input2)) {
                $("#error_number").show();
                $("#error_number").html("Enter valid inputs");
            } else {
                const num1 = parseFloat(input1);
                const num2 = parseFloat(input2);
        
                switch(v) {
                    case "add":
                        ans = num1 + num2;
                        break;
                    case "subtract":
                        ans = num1 - num2;
                        break;
                    case "multiply":
                        ans = num1 * num2;
                        break;
                    case "divide":
                        if (num2 === 0) {
                            $("#ans").val("Cannot divide by zero");
                            return;
                        } else {
                            ans = num1 / num2;
                        }
                        break;
                }
                $('#ans').val(ans);
            }
        }

        const attachClickHandler = (operation) => {
            $(`#${operation}`).click(() => myFunction(operation));
        }
        
        // Attach click handlers to the buttons
        attachClickHandler("add");
        attachClickHandler("subtract");
        attachClickHandler("multiply");
        attachClickHandler("divide");

        const username = sessionStorage.getItem('username');
        // Display the username in the HTML
        document.getElementById('username').textContent = username;

        