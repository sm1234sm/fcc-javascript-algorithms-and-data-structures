function telephoneCheck(str) {
    var re1 = /\((\d+)\)(?!$)|(\b)-|\s/g;
    var re2 = /^1\d{10}$|\d{10}$/;

    str = str.replace(re1, "$1");


    strCmp = str.match(re2);
    strCmp = strCmp || "";

    if (strCmp.toString() == str) {
        return true;
    } else {
        return false;
    }
}

telephoneCheck("10 (757) 622-7382");