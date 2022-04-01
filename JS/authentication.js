


var email="aaa@hotmail.com";
var password="123456";

//Create User with Email and Password
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	console.log(errorCode);
	console.log(errorMessage);
});


//Sign In User with Email and Password
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});

$(function(){
	var textfield = $("input[name=user]");
	$('button[type="submit"]').click(function(e) {
		e.preventDefault();
		//little validation just to check username
		if (textfield.val() != "") {
			//$("body").scrollTo("#output");
			$("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
			$("#output").removeClass(' alert-danger');
			$("input").css({
			"height":"0",
			"padding":"0",
			"margin":"0",
			"opacity":"0"
			});
			//change button text 
			$('button[type="submit"]').html("continue")
			.removeClass("btn-info")
			.addClass("btn-default").click(function(){
			$("input").css({
			"height":"auto",
			"padding":"10px",
			"opacity":"1"
			}).val("");
			});
			
			//show avatar
			$(".avatar").css({
				"background-image": "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')"
			});
		} else {
			//remove success mesage replaced with error message
			$("#output").removeClass(' alert alert-success');
			$("#output").addClass("alert alert-danger animated fadeInUp").html("sorry enter a username ");
		}
		//console.log(textfield.val());

	});
});

var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};