function weatherAdvice(temperature, isRaining) {
    if (temperature < 10) {
        return "Wear a Heavy Jacket";
    } else if (temperature >= 10 && temperature <= 20 && isRaining) {
        return "Bring an Umbrella";
    } else {
        return "Enjoy the Weather";
    }
}

console.log(weatherAdvice(8, false));   //  Wear a Heavy Jacket
console.log(weatherAdvice(15, true));   //  Bring an Umbrella
console.log(weatherAdvice(25, false));  //  Enjoy the Weather
