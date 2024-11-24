let displayValue = '0';
 function updateDisplay(){
     document.getElementById("display").textContent = displayValue;
  
    }
    
    function input(value) {
        // If the current display value is "0", replace it with the new input
        if (displayValue === "0") {
            displayValue = value;
        } else {
            // Otherwise, append the new input to the existing display value
            displayValue += value;    //display value = displayvalue + value
        }
        // Refresh the display to show the updated value
        updateDisplay();
    }
    
    function clearDisplay(){
        displayValue = "0";
        updateDisplay()
        
    }
    
    function caculate(){
        try{
            displayValue = eval(displayValue)
        } catch(d){
            displayValue = "bhai you pagol"
        }
        updateDisplay()
    }
    
    
    function deleteLast(){
        displayValue = displayValue.slice(0,-1) || "0"
        console.log(displayValue)
        updateDisplay()
    }