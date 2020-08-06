/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * 
 * @param {number} lhs 
 * @param {string} op 
 * @param {number} rhs 
 */
function Expr(lhs,op,rhs){
    this.lhs = lhs;
    this.op = op;
    this.rhs = rhs;
}
/**
 * @returns {number}
 */
Expr.prototype.evaluate = function(){
    let lhs = this.lhs;
    let op = this.op;
    let rhs = this.rhs;

    if(typeof(rhs) == "object"){
        this.rhs = this.rhs.evaluate();
        rhs = this.rhs;
    }

    if(typeof(lhs) == "number" && typeof(rhs) == "number"){
        switch(op){
            case '+':
                return lhs + rhs;
            case '-':
                return lhs - rhs;
            case '*':
                return lhs * rhs;
            case '/':
                return (lhs / rhs) | 0;
        }
    }
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let tokens =  s.replace(' ','').split(/(\*|\+|-|\/)/);
    let stack = [];
    let num = 0;
    let sign = "+";
    for(let i = 0; i < tokens.length;++i){
        let pre;
        const ch = tokens[i];

        if(isNaN(ch)){
            sign = ch;
            num = 0;
        } else {
            num = parseInt(ch)
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
                    stack.push(pre)
                    break;
            }
        }

        
    }

    return stack.reduce((prev,curr)=>prev + curr,0);
};
// @lc code=end
let expr3 = new Expr(7,"/",2)
let expr2 = new Expr(2,"-",expr3)
let expr1 = new Expr(12,'+',expr2)
console.log(calculate(" 3+5 / 2 "))