const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*21);
button.addEventListener("click", play);

function play() {
    const result = document.querySelector("#input").value;
    if (result > 20 || result < 1 ) {
     Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Enter the number from 1 to 20!",
})
    }

    else if(isNaN(result)) {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Enter the number!"
  })
    }
else {
  if(result < answer) {
  Swal.fire("Type a number higher!");
  }
  else if (result > answer) {
  Swal.fire("Type a number below!");
  }

  else {
  Swal.fire({
  title: "WIN!",
  imageUrl: "win.jpg",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});;
  }
}

}