

function timeWord(numTime){
    let hourMinute = numTime.split(':')
    let hour = Number(hourMinute[0])
    let minute = Number(hourMinute[1])

    let hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
    let minutes = ["o'clock", 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-nine', 'forty', 'forty-one', 'forty-two', 'forty-three', 'forty-four', 'forty-five', 'forty-six', 'forty-seven', 'forty-eight', 'forty-nine', 'fifty', 'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine' ]
    let midnight = ['midnight']
    let noon = ['noon']

    if(hour === 0 && minute === 0){
        return midnight
    } else if(hour === 12 && minute === 0){
        return noon
    }

    let actualHour = hours[hour % 12]
    let actualMinute = minutes[minute]
    let actualTime = actualHour + " " + actualMinute

    if(hour < 12){
        actualTime += ' am'
    } else {
        actualTime += ' pm'
    }

    return actualTime
}

console.log(timeWord('13:01'))


// function timeWord(givenTime){
//     if(givenTime === '00:00'){
//         return 'midnight'
//     }
// }

