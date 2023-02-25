const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const userName = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2000);

function getData() {
  console.log(header, title, excerpt, profileImg, userName, date);
  header.innerHTML = `<img
      src="https://images.unsplash.com/photo-1677247191292-4e1791c4ebef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
      alt="header-img"
    />`;
  title.innerHTML = "Content Placeholder";
  excerpt.innerHTML = `This is my attempt to implement content placeholder using HTML, CSS and JS`;
  profileImg.innerHTML = `<img
  src="https://avatars.githubusercontent.com/u/29942751?s=400&u=b48a64efbbdbfe282df95954195e61775ab1ddd2&v=4"
  alt="user-image"
/>`;
  userName.innerHTML = "Narayan Deshmukh";
  date.innerHTML = new Date().toDateString();

  animatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animatedBgTexts.forEach((bgText) =>
    bgText.classList.remove("animated-bg-text")
  );
}
