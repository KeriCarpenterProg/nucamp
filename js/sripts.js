$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

function order() {
  const message = document.querySelector("#message");
  console.log(message.textContent);
  //   const checkedInput = document.querySelector("input:checked");
  //   if (checkedInput) {
  //     message.textContent = `You have placed an order for ${checkedInput.value}.`;
  //   } else {
  //     message.textContent = "Unknown order.";
  //   }
  message.textContent = "Keri is the best!";
}
