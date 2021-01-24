// Kilometer To Meter

function kilometerToMeter(KM) {
    var meter = 1;
    meter = KM * 1000;
    return meter;
}

// Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}

// Hotel Cost

function hotelCost(spendingDays) {
    var hotelRentTotal = 0;
    if(spendingDays <= 10) {
        hotelRent = spendingDays * 100;
    }
    else if( spendingDays <= 20) {
        var first10DaysRent = 10 * 100;
        var remainingDays = spendingDays - 10;
        var sceond10DaysRent = remainingDays * 80;
        hotelRent = first10DaysRent + sceond10DaysRent;
    }
    else{
        var first10DaysRent = 10 * 100;
        var sceond10DaysRent = 10 * 80;
        var remainingDays = spendingDays - 20;
        var theLastDaysRent =  remainingDays * 50;
        hotelRentTotal = first10DaysRent + sceond10DaysRent + theLastDaysRent;
    }
    return hotelRentTotal;
}

// Mega Friend

function megafriend(friendsName) {
    var largestName = 0;
    for(var i = 0; i <= friendsName.length; i++) {
        if(friendsName[i].length > largestName) {
            largestName = friendsName[i].length;
        }
    }
    return largestName;
}