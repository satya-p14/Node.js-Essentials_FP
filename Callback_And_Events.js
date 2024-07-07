process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {    
    // Enter your code here
    var events = require('events');
    var eventEmitter = new events.EventEmitter();
    var numArr = input.split(' ');//.map(Number);
    var logInfo = function () {
        console.log(`Multiples of ${numArr[0]} & ${numArr[1]}`);
    }
    eventEmitter.on('MyEvent', logInfo);
    function calcSum(n, a, b) {
        var sum = 0;
        for (let i = 0; i <= n; i++) {
            if (i % a == 0)
                sum += i;
            if (i % b == 0)
                sum += i;
        }
        console.log(sum);
    }
    eventEmitter.emit('MyEvent');
    setTimeout(calcSum, 2000, 1000, numArr[0], numArr[1]);    
});
