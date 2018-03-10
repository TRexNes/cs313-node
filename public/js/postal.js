

exports.calcPostageLettersStamped = function(weight) {
    switch(weight){
        case 1:
            return "$0.50";
        case 2:
            return "$0.71";
        case 3:
            return "$0.92";
    }
    if(weight > 3 && weight < 4)
        return "$1.13";
    else
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}


 exports.calcPostageLettersMetered = function(weight) {
    switch(weight){
        case 1:
            return "$0.47";
        case 2:
            return "$0.68";
        case 3:
            return "$0.89";
    }
    if(weight > 3 && weight < 3.6)
        return "$1.10";
    else
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}

 exports.calcPostageLargeEnvelopes = function(weight) {
    switch(weight){
        case 1:
            return "$1.00";
        case 2:
            return "$1.21";
        case 3:
            return "$1.42";
        case 4:
            return "$1.63";
        case 5:
            return "$1.84";
        case 6:
            return "$2.05";
        case 7:
            return "$2.26";
        case 8:
            return "$2.47";
        case 9:
            return "$2.68";
        case 10:
            return "$2.89";
        case 11:
            return "$3.10";
        case 12:
            return "$3.31";
        case 13:
            return "$3.52";
    }
    if(weight > 13)
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}

exports.calPostageFirstClass = function(weight) {
    switch(weight){
        case 1:
            return "$3.50";
        case 2:
            return "$3.50";
        case 3:
            return "$3.50";
        case 4:
            return "$3.50";
        case 5:
            return "$3.75";
        case 6:
            return "$3.75";
        case 7:
            return "$3.75";
        case 8:
            return "$3.75";
        case 9:
            return "$4.10";
        case 10:
            return "$4.45";
        case 11:
            return "$4.80";
        case 12:
            return "$5.15";
        case 13:
            return "$5.50";
    }
    if(weight > 13)
        return "Too Heavy for this Shipping Type!  Please choose a different shipping option!";
}