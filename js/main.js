//Project 9: JS

const alertBox = document.getElementById('alert');
const notifyIcon = document.querySelector('.notification-icon');

//The alert message

document.addEventListener('load', () => {
	alertBox.innerHTML = `
		<p class="alert-message"><span>Alert!</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen...</p>
		<button id="cancel" class="cancel-button">X</button>
	`;
});

alertBox.innerHTML = `
	<p class="alert-message"><span>Alert!</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen...</p>
	<button id="cancel" class="cancel-button">X</button>
`;

//As long as the alert message is there, the bell svg will have a black border and red background.

if	(alertBox.style.display = 'flex')	{
	notifyIcon.style.border = '1px solid black';
	notifyIcon.style.borderRadius = '100%';
	notifyIcon.style.paddingLeft = '8px';
	notifyIcon.style.paddingRight = '5px';
	notifyIcon.style.paddingTop = '5px';
	notifyIcon.style.paddingBottom = '5px';
	notifyIcon.style.width = '50px';
	notifyIcon.style.background = 'darkred';
	notifyIcon.style.transition = '.4s';
}

//If the cancel button is clicked, the alertBox's display will be set to 'none.' And if the display is set to none, the red border radius on the bell svg will be gone.
alertBox.addEventListener('click', (event) => {
	const alertBox = document.getElementById('alert');
	if (event.target.className == 'cancel-button')	{
		alertBox.style.display = 'none';
	}
	if (alertBox.style.display = 'none')	{
		notifyIcon.style.border = 'none';
		notifyIcon.style.borderRadius = '0';
		notifyIcon.style.paddingLeft = '0';
		notifyIcon.style.paddingRight = '0';
		notifyIcon.style.paddingTop = '0';
		notifyIcon.style.paddingBottom = '0';
		notifyIcon.style.marginRight = '10px';
		notifyIcon.style.width = '35px';
		notifyIcon.style.background = '#7171C6';
	}
});


//LINE CHART

const traffic = document.getElementById('traffic').getContext('2d');
const lineChart = new Chart(traffic, {
	type: 'line',
	data: {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'lightblue',
            borderColor: '#34a4ee',
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2250, 1750, 2250],
        }]
	}
});

//BAR CHART

const barChart = document.getElementById("dailyTraffic").getContext('2d');
const myChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [50, 75, 150, 100, 200, 175, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
				'lightgreen'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
				'green'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

//PIE CHART

const pieChart = document.getElementById('mobileUser').getContext('2d');

const myPieChart = new Chart(pieChart, {
    type: 'pie',
    datasets: [{
        data: [10, 200, 300, 40],
		label: 'the pie',
		backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'],
		borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'],
		borderWidth: 1,
    }],
	labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
});


