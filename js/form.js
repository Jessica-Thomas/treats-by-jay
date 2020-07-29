// FORM VALIDATION
    // If specified fields are empty, keep track of errors and append all to one alert-- alert will no longer be blank because the messages were combined, so alert will pop up with all messages and outline errored fields in red.
    // If no errors, then form submits and alert pops up stating someone will be in contact soon. 

var errorMessage = "";

function checkforBlankFields() {
    
    if (document.getElementsById('name').value == "") {
        append`${errorMessage}Name is missing`;
        document.getElementsById('name').style.borderColor = "red";
        }

    if (document.getElementsById('phone').value == "") {
        append`${errorMessage}Phone number is missing`;
        document.getElementsById('phone').style.borderColor = "red";
        }
          
    if (document.getElementsById('email').value == "") {
        append`${errorMessage}Email address is missing`;
        document.getElementsById('email').style.borderColor = "red";
        }

    if (document.getElementsById('msg').value == "") {
        append`${errorMessage}Message to Jay is missing`;
        document.getElementsById('msg').style.borderColor = "red";
        }

    if (errorMessage != "") {
        alert(errorMessage);
        return false  
        // return false stops form from being submitted      
        } else {
            alert('Thanks! Someone from Treats by Jay will reach out to you soon!')
        }

}


