const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier){
    return function(fare){
        return fareMultiplier * fare
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, driverSelector){
    if (driverSelector === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }else if(driverSelector === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}