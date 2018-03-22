//Init Storage object
const storage = new Storage();

const weatherLocation = storage.getLocationData();


//Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI object
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;

	weather.changeLocation(city, state);

	storage.setLocationData(city, state);


	getWeather();

	$('#locModal').modal('hide');
})

function getWeather(){
	weather.getWeather()
	.then(results => {
		ui.paint(results);
		console.log(results);
	})
	.catch(err => console.log(err));
}