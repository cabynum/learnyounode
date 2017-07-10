sum = 0
x = 2

while (x != process.argv.length) {
  sum += Number(process.argv[x])
  x++
}

console.log(sum)
