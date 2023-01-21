function order() {
  const message = document.querySelector("#message");
  const checkedInput = document.querySelector("input:checked");
  const numCampers = document.getElementById("numCampers");
  const date = document.getElementById("date");
  if (checkedInput) {
    message.textContent = `You have placed an order for a campsite.  A ${checkedInput.value} with ${numCampers.value} campers for the date ${date.value}.`;
  } else {
    message.textContent = "Unknown order.";
  }
}

$("#reserveButton").click(function () {
  $("#reserveModal").modal();
});

$("#loginButton").click(function () {
  $("#loginModal").modal();
});
