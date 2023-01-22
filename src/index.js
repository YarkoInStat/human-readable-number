module.exports = function toReadable (number) {

    const hundreds = Math.floor(number / 100)
    const dozens = Math.floor((number % 100) / 10)
    const units = Math.floor(number % 10)

    const digitsArr = [0,'one','two','three','four','five','six','seven','eight','nine'];
    const unitsArr = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozensArr = ['ten','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    switch (number <= 0 && units) {
        case 0: return 'zero';
    }

    switch (number > 0 && number < 10 && units) {
        case units: return digitsArr[units];
    }

    switch (number >= 10 && number < 20 && dozens) {
        case dozens: return unitsArr[units];
    }

    switch (number % 100 === 0 && hundreds) {
        case hundreds: return digitsArr[hundreds] + ' ' + 'hundred';
    }

    switch (number < 100 && number % 10 === 0 && dozens) {
        case dozens: return dozensArr[dozens];
    }

    switch (number >= 100 && number % 10 === 0 && hundreds) {
        case hundreds: return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + dozensArr[dozens];
    }

    switch (number >= 100 && number % 100 > 20 && hundreds) {
        case hundreds: return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + dozensArr[dozens] + ' ' + digitsArr[units];
    }

    switch (number < 100 && dozens) {
        case dozens: return dozensArr[dozens] + ' ' + digitsArr[units];
    }

    switch (number % 100 > 0 && number % 100 < 10 && hundreds && units) {
        case units: return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + digitsArr[units];
    }

    switch (number % 100 > 10 && number % 100 < 20 && hundreds && units) {
        case units: return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + unitsArr[units];
    }
}
