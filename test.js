let line = "asdfasdfo"
let result, map = new Map()
for (let i = 0; i < line.length; i++) {
    if (!map.has(line[i])) {
        map.set(line[i], i)
    } else {
        map.set(line[i], -1)
    }
}
map.forEach(item => {
    console.log(item)
})
