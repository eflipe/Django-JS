console.log("JS aquí!");
// $( '#navbar' ).on( 'click', function () {
// 	$( '#navbar' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });

jQuery( document ).ready( function($) {
  $( '#navbar' ).on( 'click', function () {
  	$( '#navbar' ).find( 'li.active' ).removeClass( 'active' );
  	$( this ).parent( 'li' ).addClass( 'active' );
  });
});
