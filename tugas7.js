var tinggi = [158,159,160,161,162,163,164,166,168,170];

console.log("Array dengan For biasa");
for (var i = 0; i < tinggi.length; i++) {
  console.log(tinggi[i]);
}
console.log("Array dengan For Of");
for (let x of tinggi){
  console.log(x);
}
