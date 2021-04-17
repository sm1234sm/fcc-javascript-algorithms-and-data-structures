function rot13(str) {
    var strDecoded = [];
    var letter;

    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) <= 90) {
            letter = (((str.charCodeAt(i) - 65 + 13) % 26) + 65);
            strDecoded.push(String.fromCharCode(letter));
        } else {
            strDecoded.push(str[i]);
        }
    }

    return strDecoded.join('');
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");