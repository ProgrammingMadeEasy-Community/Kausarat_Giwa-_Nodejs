var days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday", 
    7: "Saturday"
}
function DayOfTheWeek (myday) {
    return(days[myday])
}
function DaysOfTheWeek(){
    day = prompt('Enter day: ')
    if (day.length  ==  3){
        for (value in day){
            console.log(DayOfTheWeek(value))
        }

    }else if (day.length == 1){
        console.log(DayOfTheWeek(day))
    }
}

DaysOfTheWeek()

// function DaysOfTheWeek ={

// }