  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyDITQdiqzK4bD1vzLfovJMcd77bDOjkZI0",
  	authDomain: "train-time-6c269.firebaseapp.com",
  	databaseURL: "https://train-time-6c269.firebaseio.com",
  	projectId: "train-time-6c269",
  	storageBucket: "train-time-6c269.appspot.com",
  	messagingSenderId: "1014889487422"
  };
  
  firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

const trainRef = firebase.database().ref('trains');

trainRef.on('child_added', function(data) {
	const train = data.val();
	if(train) {
		alert(train.name);
	}
});

// Add train function
$('#addTrain').click(function(event){
	event.preventDefault();
	const trainName = $('#trainName').val().trim();
	const destination = $('#destination').val().trim();
	const firstTrain = moment($('#firstTrain').val().trim()).format("HH:mm");
	const frequency = $('#frequency').val().trim();

$("#clearForm").click(function(event){
	event.preventDefault();
	$('#addTrainForm')[0].reset();
});

	//create local temp holder for train info
	var newTrain = {
		name: trainName,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency,
	}

	//push train info to firebase
	//trainData.push(newTrain);

	//console logs
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.firstTrain);
	console.log(newTrain.frequency);

	//add alert when train is added
	alert("New train schedule has been added!")

	//Clear text boxes
	//$("#trainName").val("");
	//$("#destination").val("");
	//$("#firstTrain").val("");
	//$("frequency").val("");

	

})