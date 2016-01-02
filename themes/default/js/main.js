$(function() {
	//handler registration for available social networks
	//TODO refactor following to use single event handler registration logic
	$(".misocial-facebook").click(function() {
  		$( ".misocial-content" ).load( "views/facebook/index.html" );
	});

	$(".misocial-twitter").click(function() {
  		$( ".misocial-content" ).load( "views/twitter/index.html" );
	});

	$(".misocial-linkedin").click(function() {
  		$( ".misocial-content" ).load( "views/linkedin/index.html" );
	});
});