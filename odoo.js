async function getData(){
    return await Promise.resolve("Hello!");
}
const data = getData();
console.log(data);

console.log(Promise.resolve(123));

(function(){
    var a = b = 5;
})();
console.log(b);
console.log(a);
