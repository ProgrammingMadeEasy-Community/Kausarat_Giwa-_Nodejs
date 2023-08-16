// simple calculator
NoOfTimes = 0
while (NoOfTimes != 5){
    const num1 = parseFloat(prompt("Enter first number: "))
    const num2 = parseFloat(prompt('Enter second number: '))
    console.log(`
    Choose an operation
    1. Enter 1 for Addition
    2. Enter 2 for Subtraction
    3. Enter 3 for Multiplication
    4. Enter 4 for Divison
        
    `)
    const sign = prompt("Enter the number corresponding to the operation:  ")
    if (sign == 1){
        if (isNaN(num1) || isNaN(num2)){
            console.log("Number is not integer")
            NoOfTimes += 1
        }else{
            result = num1 + num2
            console.log(`${num1 } + ${num2} = ${result}`)
            break
        }
    }else if (sign == 2){
        if (isNaN(num1) || isNaN(num2)){
            console.log("Number is not integer")
            NoOfTimes += 1
        }else{
            result = num1 - num2
            console.log(`${num1 } - ${num2} = ${result}`)
            break
        }
    }else if (sign == 3){
        if (isNaN(num1) || isNaN(num2)){
            console.log("Number is not integer")
            NoOfTimes += 1
        }else{
            result = num1 * num2
            console.log(`${num1 } * ${num2} = ${result}`)
            break
        }
    }else if (sign == 4){
        if (isNaN(num1) || isNaN(num2)){
            console.log("Number is not integer")
            NoOfTimes += 1 
        }else{
            if (num2 == 0){
                console.log("Math operation cannot be carried out")
                NoOfTimes = NoOfTimes +1
            }else{
                result = num1 / num2
                console.log(`${num1 } / ${num2} = ${result}`)
                break
            } 
        }
    }else{
        console.log("Invalid operation")
        NoOfTimes = NoOfTimes +1
    }
}
