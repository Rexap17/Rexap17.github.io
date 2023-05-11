const vueinst = new Vue({
  el: "#homePage",
  data: {
    top_menu: [{ title:'Home', url:'index.html' },
    { title:'Events',url:'/events' },
    { title:'Settings',url:'user.html'}],
    right_menu: [{title:'Sign Up', url:'/login'}]

  },
});

const bannerContainer = document.querySelector('.eventBannerContainer');
const scrollLeftBtn = document.querySelector('.scrollLeft');
const scrollRightBtn = document.querySelector('.scrollRight');

scrollLeftBtn.addEventListener('click', () => {
  bannerContainer.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});

scrollRightBtn.addEventListener('click', () => {
  bannerContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});


document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  window.location.href = "index.html"; // redirect to the index.html page
});
