let windowWidth = document.documentElement.clientWidth 
let img = document.getElementById(`image`)
let desktop = `images/image-product-desktop.jpg`
let mobile = `images/image-product-mobile.jpg`
if(windowWidth <= 375){
    img.src=mobile
    img.height=240
    console.log(`work`)
}
console.log(document.documentElement.clientWidth)
