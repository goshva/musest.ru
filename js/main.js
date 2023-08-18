function feedback(action, status) {
  //
  let token =
    "5430048154:AAEFptLp8IdbKirOYJzzM3ekyTd2ibVLMNc"; /* :TODO NOTSECURITY REWERITE */
  //use this for testing
  let chat_id = "190404167";
  //let chat_id = "1329475336";//Aram ID
  //use this for production
  //let chat_id = "-915348868";
  let user_phone = prompt("Введите телефон для контакта с вами");
  var msg = `${action} от ${user_phone}`; // from ${getCookie("@")}`;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}&parse_mode=html`;

  if (user_phone !== "" && user_phone !== null) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(
          `Благодарим за  заказ «${action}».\nСейчас ответственный свяжется с вами`
        );
        window.location.href = "/#menu";
      });
  } else {
    console.log(" no null");
  }
}

$('.lead').click(
    function () { this.addEventListener("click", feedback(this.innerHTML)) }
  );

