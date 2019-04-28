function counterReducer() {
    var c = prompt("Enter counter value", "");  // Enter counter value
    var counter = parseInt(c); // Convert prompt value to numeric
    var actionType = prompt("Enter Action Type - INC/DEC", "");  // Enter Action Type
    
    if(actionType == "INC"){    //condition to Increase counter
        counter = counter + 1;
        return counter;       
    }
    else if(actionType == "DEC"){   //condition to decrease the counter
        counter = counter - 1;
        return counter;
    }
    else{              //condition for invalid action
        return "Enter valid action";
    }

}

console.log(counterReducer());
