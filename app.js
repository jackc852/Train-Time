//Initialize firebase
const config = {
    apiKey: "AIzaSyDITQdiqzK4bD1vzLfovJMcd77bDOjkZI0",
    authDomain: "train-time-6c269.firebaseapp.com",
    databaseURL: "https://train-time-6c269.firebaseio.com",
    projectId: "train-time-6c269",
    storageBucket: "",
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
	const update = '';
})