/* Caller Function */
const addNum = (a, b, adab) => {
setTimeout(()=>{
adab(a+b)
}, 2000)
}
// Calling Function
addNum(4,5, (c)=>{
console.log(c);
})