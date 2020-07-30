// FORM VALIDATION
    // If specified fields are empty, keep track of errors and combine all to one alert-- alert will no longer be blank because the messages were strung together, so alert will pop up with all messages and outline errored fields in red.
    // If no errors, then form submits and alert pops up stating someone will be in contact soon. 


function checkforBlankFields() {
    var errorMessage = "";

    
    if (document.getElementById("name").value == "") {
        errorMessage += 'HALT! Who goes here? Your name is missing. \n';
        document.getElementById("name").style.border = "2px solid #7f36d5";
        }

    if (document.getElementById("phone").value == "") {
        errorMessage += 'Talking on the phone sucks, I know. But I need your phone number for when you ignore my emails. \n';
        document.getElementById("phone").style.border = "2px solid #7f36d5";
        }
          
    if (document.getElementById("email").value == "") {
        errorMessage += 'Give me your email so we can avoid a weird phone call. \n';
        document.getElementById("email").style.border = "2px solid #7f36d5";
        }

    if (document.getElementById("msg").value == "") {
        errorMessage += 'Message to Jay is missing- In order to help you, I need to know what you want. ';
        document.getElementById("msg").style.border = "2px solid #7f36d5";
        }

    if (errorMessage != "") {
        alert(errorMessage);
        event.preventDefault();
        // stops page from refreshing
        return false  
        // return false stops form from being submitted      
        
            } else {
                alert('Thanks! Someone from Treats by Jay will reach out to you soon!')
                return true
            }

}


