function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var rvsStr = [];

    for (var i = (str.length - 1), j = 0; i >= 0; i--) {
        rvsStr[i] = str[j];
        j++;
    }

    return (str == rvsStr.join(''));
}