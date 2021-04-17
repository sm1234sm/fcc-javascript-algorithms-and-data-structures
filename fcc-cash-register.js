function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var arr = [];
    var index = -1;

    var a = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];

    for (var i = cid.length - 1; i >= 0; i--) {
        if (cid[i][1] == 0.0) {
            continue;
        }

        if (change >= a[i]) {
            arr.push([cid[i][0], 0.0]);
            index++;
        }

        while (change >= a[i]) {
            if (cid[i][1] <= 0.00) {
                break;
            }
            change -= a[i];
            arr[index][1] += a[i];
            cid[i][1] = parseFloat(cid[i][1]).toPrecision(2) - parseFloat(a[i]).toPrecision(2);
            change = parseFloat(change).toPrecision(4);
            if (change == 0.00 && cid[i][1] == 0.00) {
                return "Closed";
            }
        }
    }

    if (change > 0.0) {
        return "Insufficient Funds";
    }

    return arr;
}

checkCashRegister(3.26, 100.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
])