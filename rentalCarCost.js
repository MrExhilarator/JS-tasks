/* rentalCarCost returns the cost to rent a 
car based on how many days one wants the car for rent*/
function rentalCarCost(noOfDays) {
    if (noOfDays < 3) return noOfDays * 40;
    else if (noOfDays < 7) return noOfDays * 40 - 20;
    else return noOfDays * 40 - 50;
}
 
