function convertToRoman(num) {
    var roman = [];

    function convert(temp, a, b, c) {
        if (temp < 5) {
            switch (temp) {
                case 1:
                    return a;
                case 2:
                    return a + a;
                case 3:
                    return a + a + a;
                case 4:
                    return a + b;
            }
        } else if (temp == 5) {
            return b;
        } else if (temp > 5) {
            temp -= 5;
            switch (temp) {
                case 1:
                    return b + a;
                case 2:
                    return b + a + a;
                case 3:
                    return b + a + a + a;
                case 4:
                    return a + c;
            }
        }
    }

    if (num >= 1000) {
        roman.push(convert(parseInt(num / 1000), 'M', 'V', 'X'));
        num %= 1000;
    }

    if (num >= 100) {
        roman.push(convert(parseInt(num / 100), 'C', 'D', 'M'));
        num %= 100;
    }

    if (num >= 10) {
        roman.push(convert(parseInt(num / 10), 'X', 'L', 'C'));
        num %= 10;
    }

    if (num >= 1) {
        roman.push(convert(parseInt(num / 1), 'I', 'V', 'X'));
        num %= 10;
    }

    return roman.join('');
}

convertToRoman(83);