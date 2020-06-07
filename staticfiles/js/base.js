console.log("JS aquí!");
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

// <a id="menu-toggle" href="#" class="btn btn-default btn-sm toggle"><i class="glyphicon glyphicon-flash"></i></a>
// <div id="sidebar-wrapper">
//   <ul class="sidebar-nav">
//     <a id="menu-close" href="#" class="btn btn-default btn-lg pull-right toggle"><i class="glyphicon glyphicon-remove"></i></a>
//     <li class="sidebar-brand">
//       <a href="{% url 'pics_list' %}">Galeria</a>
//     </li>
//     <li>
//       <a href="{% url 'pics_list' %}">Inicio</a>
//     </li>
//     <li>
//       <a href="{% url 'authors_list' %}">Artistas</a>
//     </li>
//     <li>
//       <a href="{% url 'account_login' %}">Admin</a>
//     </li>
//   </ul>
// </div>

//d-block mb-4 h-100
