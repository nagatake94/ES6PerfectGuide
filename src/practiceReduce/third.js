function balanceParens(string){
    return !string.split("").reduce(function(previous, char){
        /** ")("でも均衡が取れてしまうので、
         * ")"で始まった場合はその時点でfalseを返してあげるようにする */
        if (previous < 0) return previous;
        if (char === "(") return previous + 1;
        if (char === ")") return previous - 1;
    }, 0);
}



balanceParens("()");