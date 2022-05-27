let imgArray = document.getElementsByClassName("textImg")
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    for (let i = 0; i<8;i++){
        imgArray[i].addEventListener("click", enlargeImg)
        console.log(imgArray[i])
    }
  });

function enlargeImg(e){
    let source = e.path[0].src
    console.log(e.path[0].src)
    let img = document.createElement("img")
    img.src = source
    img.id = "largerImg"
    let div = document.createElement("div")
    div.id = "centerImgContainer"
    let body = document.getElementsByTagName("body")[0]
    body.appendChild(div)
    div.appendChild(img)
    img.addEventListener("click", deleteImg)
}

function deleteImg(){
    let div = document.getElementById("centerImgContainer")
    div.remove()
}

