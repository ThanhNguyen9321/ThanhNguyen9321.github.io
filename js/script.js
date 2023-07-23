const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(value) {
  return value.match(EMAIL_REGEX);
}

function displayInfo(isShow) {
  // true - show, false - hide
  const infoElement = document.querySelector("#about-info .about-info");
  if (infoElement) {
    if (isShow) {
      infoElement.style.display = "block";
    } else {
      infoElement.style.display = "none";
    }
  }
}

function displaySubmitButton(isShow) {
  // true - show, false - hide
  const submitButton = document.querySelector(".submit-email");
  if (submitButton) {
    if (isShow) {
      submitButton.style.display = "block";
    } else {
      submitButton.style.display = "none";
    }
  }
}

function handleSubmit() {
  //lấy giá trị của nhập vào email
  const emailValue = document.getElementById("email").value;

  //lấy hiển thị lỗi email
  const emailError = document.getElementById("email-error");

  // điều kiện để email đúng
  const checkMail = validateEmail(emailValue);

  if (checkMail) {
    //lấy phần chứa thông tin user
    displayInfo(true);
    displaySubmitButton(false);
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "email không đúng, vui lòng nhập lại";
  }
}
function handleOnmouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}
function handleOnmouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");
  const lessMore = parentElement.querySelector(".less-more");
  viewMore.style.display = "none";
  lessMore.style.display = "block";
  const jobContent = parentElement.querySelectorAll(".job-content");
  jobContent.forEach((element) => {
    element.style.display = "block";
  });
}
