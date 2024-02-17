let checkElement = null

let no = document.getElementsByClassName("card");



for (let i = 0; i < no.length; i++) {

    let element = document.getElementById("card_" + (i + 1));
    element.addEventListener("click", () => 
    {
        element.style.transition = "width 1s 1s";
        element.getElementsByTagName("h1")[0].style.transition = "opacity 1s 1s";
        
        if(checkElement!=null)
        {
            checkElement.style.width = "70px"    
            checkElement.getElementsByTagName("h1")[0].style.opacity = 0
        }

        element.style.width = "500px"  
        element.getElementsByTagName("h1")[0].style.opacity = 1 
        checkElement = element;
    })

}
