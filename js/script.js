function handleSubmit() {
  //lấy giá trị của nhập vào email
  const emailValue = document.getElementById("email");
  //lấy hiển thị lỗi email
  const emailError = document.getElementById("email-error");
  // điều kiện để email đúng
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkMail = emailValue.match(regex);
  //lấy phần chứa thông tin user
  const sectionContent = document.querySelector("#about-info .about-info");

  const submitControl = document.querySelector(".submit-email");
  if (checkMail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errollEmail.innerHTML = "";
  } else {
    errollEmail.innerHTML = "email không đúng, vui lòng nhập lại";
  }
}
