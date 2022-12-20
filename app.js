// ----------------------------------------- Return start ---------------------------------------------------
const calculator =
{
    add: function(a, b)
    {
        return a + b;
    },
    minus: function(a, b)
    {
        return a - b;
    },
    poweroff: function(a, b)
    {
        return a ** b;
    },
    devide: function(a, b)
    {
        return a / b;
    }
}

const plusResult = calculator.add(2, 3); // error
const minusResult = calculator.minus(2, 3);
const minusResult2 = calculator.minus(plusResult, 10);
const powerResult = calculator.poweroff(2, 3);
const devideResult = calculator.devide(powerResult, plusResult);


console.log(plusResult);
console.log(minusResult);
console.log(minusResult2);
console.log(powerResult);
console.log(devideResult);

const age = 96;
function calculateKrAge(ageOfForeigner)
{
    return ageOfForeigner + 2; //함수에 console.log를 쓰는 일은 없을꺼임
}

const krAge = calculateKrAge(age);
console.log(krAge);

// ----------------------------------------- Return end ---------------------------------------------------