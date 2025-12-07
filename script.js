var addfriendBtn = document.querySelector("#add-friend-btn");

var flag = 0;

var h5 = document.querySelector("h5");

addfriendBtn.addEventListener("click", function () {
  if (flag === 0) {
  h5.textContent = "Friend Added";
  h5.style.color = "green";
  flag = 1;

  addfriendBtn.textContent = "Remove Friend";
  addfriendBtn.style.backgroundColor = "#da190b";
  } else {
  h5.textContent = "Stranger";
  h5.style.color = "red";
  flag = 0;
  addfriendBtn.textContent = "Add Friend";
  addfriendBtn.style.backgroundColor = "#4CAF50";
  }
});

