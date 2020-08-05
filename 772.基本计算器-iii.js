/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack  = [];
    let sign = "+";
    let levelStack = []
    let tokens = s.replace(/\s+/g,'').split(/(\*|\+|-|\/|\(|\))/).filter(val => val !== "")
    let num = 0;
    let opStack = [];
    const acc = function(sign,num,stack){
        switch(sign){
            case '+':
                stack.push(num);
                break;
            case '-':
                stack.push(-num);
                break;
            case '*':
                pre = stack.pop() * num;
                stack.push(pre);
                break;
            case '/':
                pre = (stack.pop() / num) | 0;
                stack.push(pre);
                break;
        }
    }
    for(const ch of tokens){
        let pre;
        if(isNaN(ch)){
            if(ch != "(" && ch != ")"){
                sign = ch;
                num = 0;
            } else {
                if(ch == '('){
                    opStack.push(sign)
                    levelStack.push(stack)
                    stack = []
                    sign = "+"
                    num = 0
                } else {
                    sign = opStack.pop()
                    num = stack.reduce((prev,curr)=> prev + curr,0)
                    stack = levelStack.pop()
                    acc(sign,num,stack)
                }
            }
   
        } else {
            num = parseInt(ch);
            acc(sign,num,stack)
        }
    }
    return stack.reduce((prev,curr)=>prev + curr,0)
};

console.log(calculate("(2+6* 3+5- (3*14/7+2)*5)+3"))