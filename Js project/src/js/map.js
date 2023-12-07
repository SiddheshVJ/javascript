var data = new Map()
data.set(1, "Samsung Tv")
data.set("HTML", "It is markup language")
data.delete("HTML")
if(data.has("HTML")){
    document.write(data.get("HTML"))
}else
document.write('No key')
document.write(data.get(1))
document.write('<hr>')
document.write(data.get("HTML"))
document.write('<hr>')
document.write(`total keys : ${data.size}`)
document.write('<hr>')
for (var item of data) {
    document.write(item)
    document.write('<br>')
}
document.write('<hr>')
for (var item of data.keys()) {
    document.write(item)
    document.write('<br>')
}
document.write('<hr>')
for (var item of data.entries()) {
    document.write(item)
    document.write('<br>')
}