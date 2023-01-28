module.exports = function toReadable (number) {

    const hundreds = Math.floor(number / 100)
    const dozens = Math.floor((number % 100) / 10)
    const units = Math.floor(number % 10)

    const digitsArr = [0,'one','two','three','four','five','six','seven','eight','nine'];
    const unitsArr = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozensArr = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if (number <= 0) {
        return 'zero';
    }

    if (number > 0 && number < 10) {
        return digitsArr[units];
    }

    if (number > 10 && number < 20) {
        return unitsArr[units];
    }

    if (number % 100 === 0) {
        return digitsArr[hundreds] + ' ' + 'hundred';
    }

    if (number < 100 && number % 10 === 0) {
        return dozensArr[dozens];
    }

    if (number >= 100 && number % 10 === 0) {
        return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + dozensArr[dozens];
    }

    if (number >= 100 && number % 100 > 20) {
        return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + dozensArr[dozens] + ' ' + digitsArr[units];
    }

    if (number < 100 && dozens) {
        return dozensArr[dozens] + ' ' + digitsArr[units];
    }

    if (number % 100 > 0 && number % 100 < 10) {
        return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + digitsArr[units];
    }

    if (number % 100 > 10 && number % 100 < 20) {
        return digitsArr[hundreds] + ' ' + 'hundred' + ' ' + unitsArr[units];
    }
}
