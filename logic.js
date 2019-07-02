var modal = document.getElementById("modal");

// var img = document.getElementById("image1");
var modalImage = document.getElementById("imageInsideModal");
var modalOn = false;

function expandImage (imageElement) {
    modalOn = true;
    modal.style.display = "block";
    modalImage.src = imageElement.src;
    console.log(`The src of the incoming element is ${modalImage.src}.`);
    console.log("I expanded the modal.");

}

document.addEventListener("click", e => {
    if (e.target.classList.contains("photo") && modalOn == false) {
        console.log("I clicked on a photo");
        console.log(e.target);
        expandImage(e.target);
    }
    else {
        modalOn = false;
        modal.style.display = "none";
    }
}, false);
