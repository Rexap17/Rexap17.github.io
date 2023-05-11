const vueinst = new Vue({
    el: "#homePage",
    data: {
      top_menu: [{ title:'Home', url:'index.html' },
      { title:'Events',url:'/events' },
      { title:'Settings',url:'user.html'}],
      right_menu: [{title:'Sign Up', url:'/login'}]

    },
});
