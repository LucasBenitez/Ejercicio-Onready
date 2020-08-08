var numbers = [4, 2, 5, 1, 3];
let array =
[
    {
        nombre:"a",
        valor:3333333
    },
    {
        nombre:"b",
        valor:30
    },
    {
        nombre:"c",
        valor:3434
    }
]
array.sort(function(a, b) {
  return a.valor - b.valor;
});
console.log(array[0]);