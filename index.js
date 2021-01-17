// Your code here

let dodger = document.getElementById("dodger")
dodger.style.color = "blue";


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  function moveDodgerRight(){
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10)

      dodger.style.left = `${left +1}px`;
    //   if (right < 400) {
    //       dodger.style.right = `${right +1}px`;
    //   }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }

  }); 