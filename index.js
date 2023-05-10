const vueinst = new Vue({
    el: "#homePage",
    data: {
      top_menu: [{ title:'Home', url:'index.html' },
      { title:'Events',url:'/events' },
      { title:'Your Clubs',url:'/yourclubs' },
      { title:'Settings',url:'user.html'}]

    },
});