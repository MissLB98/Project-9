//Project 9: JS

const alertBox = document.getElementById('alert');
const notifyIcon = document.querySelector('.notification-icon');

//The alert message

alertBox.innerHTML = `
	<p class="alert-message"><span>Alert!</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen...</p>
	<button id="cancel" class="cancel-button">X</button>
`;

//As long as the alert message is there, the bell svg will have a black border and red background.

if	(alertBox.style.display = 'flex')	{
	notifyIcon.style.borderRadius = '100%';
	notifyIcon.style.paddingLeft = '8px';
	notifyIcon.style.paddingRight = '5px';
	notifyIcon.style.paddingTop = '5px';
	notifyIcon.style.paddingBottom = '5px';
	notifyIcon.style.width = '50px';
	notifyIcon.style.background = '#000';
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
		notifyIcon.style.background = '#4578ff';
	}
});


//LINE CHART

const traffic = document.getElementById('traffic').getContext('2d');
const lineChart = new Chart(traffic, {
	type: 'line',
	data: {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            backgroundColor: 'rgba(100, 200, 230, .5)',
            borderColor: '#34a4ee',
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2250, 1750, 2250],
        }]
	},
	options:	{
		legend: {
			display: false,
		},
		elements:	{
			point:	{
				radius: 5
			},
			line:	{
				tension: 0,
				borderWidth: 1,
			}
		}
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
                '#7077A9',
				'#7272B9',
				'#7371C9',
				'#7473D9',
				'#7174E9',
				'#7575F9',
				'#7676C9'
            ]
        }]
    },
	options:	{
		legend: {
			display: false,
		}
	}
});

//PIE CHART

const pieChart = document.getElementById('mobileUser').getContext('2d');

const myPieChart = new Chart(pieChart, {
    type: 'doughnut',
    data:	{
		labels: ['Phones', 'Tablets', 'Desktop'],
		datasets: [{
        data: [15, 15, 70],
		backgroundColor: [
                '#639ea9',
                '#75aa62',
                '#7171C6'],
		}],
	},
	options:	{
		legend: {
			position: 'right',
			labels: {
				boxWidth: 25,
				fontSize: 15,
				padding: 20,
			}
		}
	}
});


///////WIDGETS////////WIDGETS///////////WIDGETS////////////>


//SOCIAL STATS-------------

const stats = [
	{
		"icon" : "./icons/icon-twitter.svg",
		"media" : "Twitter",
		"status" : 10345
	},
	{
		"icon" : "./icons/icon-facebook.svg",
		"media" : "Facebook",
		"status" : 8739
	},
	{
		"icon" : "./icons/icon-google-plus.svg",
		"media" : "Google+",
		"status" : 2530
	}
];


let socialHTML = '<ul class="social-stats">';
for (let i = 0; i < stats.length; i += 1)	{
  socialHTML += "<li>";
    socialHTML += '<img src="' + stats[i].icon + '" alt="icon">';
    socialHTML += '<div>';
      socialHTML += '<span><b>' + stats[i].media + '</b></span>';
      socialHTML += '<span>' + stats[i].status + '</span>';
    socialHTML += '</div>';
  socialHTML += '</li>';
}
socialHTML += '</ul>';
document.getElementById('socialStats').innerHTML = socialHTML;



//NEW MEMBERS--------------

const members = [
	{
		"picture" : "./img/img1.jpg",
		"name"	  : "Victoria Chambers",
		"email"	  : "victoria.chambers80@example.com",
		"date"	  : "10/15/15"
	},
	{
		"picture" : "./img/img2.jpg",
		"name"	  : "Dale Byrd",
		"email"	  : "dale.byrd52@example.com",
		"date"	  : "10/15/15"
	},
	{
		"picture" : "./img/img3.jpg",
		"name"	  : "Dawn Wood",
		"email"	  : "dawn.wood16@example.com",
		"date"	  : "10/15/15"
	},
	{
		"picture" : "./img/img4.jpg",
		"name"	  : "Dan Oliver",
		"email"	  : "dan.oliver82@example.com",
		"date"	  : "10/15/15"
	}
];


let memberHTML = '<ul class="new-members">';
for (let i = 0; i < members.length; i += 1) {
  memberHTML += '<li>';
    memberHTML += '<img src="' + members[i].picture + '" alt="new member">';
    memberHTML += '<div>';
      memberHTML += '<span><b>' + members[i].name;
      memberHTML += '</b></span>';
      memberHTML += '<p>';
        memberHTML += '<a href="mailto:';
          memberHTML += members[i].email + '">';
          memberHTML += members[i].email;
        memberHTML += '</a>';
        memberHTML += '<span>';
        memberHTML += members[i].date;
        memberHTML += '</span>';
      memberHTML += '</p>';
    memberHTML += '</div>';
  memberHTML += '</li>';
}
memberHTML += '</ul>';
document.getElementById('newMembers').innerHTML = memberHTML;



//RECENT ACTIVITY------------


/* THIS IS ANOTHER OPTION TO PRINTING THE DATA

const activity = [
  {
    "img" : "./img/img1.jpg",
    "name" : "Victoria Chambers",
    "sentence" : " commented on YourApp's SEO Tips. <i>4 hours ago</i>",
    "arrow" : "&rsaquo;"
  },
  {
    "img" : "./img/img2.jpg",
    "name" : "Dale Byrd",
    "sentene" : " like the post Facebook's Changes for 2016. <i>5 hours ago</i>",
    "arrow" : "&rsaquo;"
  },
  {
    "img" : "./img/img3.jpg",
    "name" : "Dawn Wood",
    "sentene" : " commented on Facebook's Changes for 2016. <i>5 hours ago</i>",
    "arrow" : "&rsaquo;"
  },
  {
    "img" : "./img/img4.jpg",
    "name" : "Dan Oliver",
    "sentene" : " posted YourApp's SEO Tips. <i>1 day ago</i>",
    "arrow" : "&rsaquo;"
  }
];


let activityHTML = '<ul class="recent-activity">';
for (let i = 0; i < activity.length; i += 1)  {
  activityHTML += '<li>';
	activityHTML += '<img src="' + activity[i].img + '" alt="member activity">';
	activityHTML += '<p><b>' + activity[i].name + '</b>';
	activityHTML += activity[i].sentence + '</p>';
	activityHTML += '<a href="#"><span>' + activity[i].arrow + '</span></a>';
  activityHTML += '</li>';
}
activityHTML = '</ul>';
document.getElementById('recent-activity').innerHTML = activityHTML;
*/


document.getElementById('recentActivity').innerHTML = `
  <ul class="recent-activity">
  <li>
    <img src="./img/img1.jpg" alt="recent-activity"/>
    <div>
      <p>
        <span><b>Victoria Chambers</b> commented on YourApp's SEO Tips. <i>4 hours ago</i></span>
        <a href="#" class="arrow">&rsaquo;</a>
      </p>
    </div>
  </li>
  <li>
    <img src="./img/img2.jpg" alt="recent-activity"/>
    <div>
      <p>
        <span><b>Dale Byrd</b> liked the post Facebook's Changes for 2016. <i>5 hours ago</i></span>
        <a href="" class="arrow">&rsaquo;</a>
      </p>
    </div>
  </li>
  <li>
    <img src="./img/img3.jpg" alt="recent-activity"/>
    <div>
      <p>
        <span><b>Dawn Wood</b> commented on Facebook's Changes for 2016. <i>5 hours ago</i></span>
        <a href="#" class="arrow">&rsaquo;</a>
      </p>
    </div>
  </li>
  <li>
    <img src="./img/img4.jpg" alt="recent-activity"/>
    <div>
      <p>
        <span><b>Dan Oliver</b> posted YourApp's SEO Tips. <i>1 day ago</i></span>
        <a href="#" class="arrow">&rsaquo;</a>
      </p>
    </div>
  </li>
</ul>
`;


//MESSAGE USER SEND MESSAGE

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (e) => {
	e.preventDefault();
	const users = document.getElementById('users').value;
	const inputMessage = document.getElementById('messageInput').value;

	if (users == "" || inputMessage == "") {
		/*const errorDiv = document.createElement('div');
		const cancelPopUp = document.getElementById("cancelPopUp");
		errorDiv.className = 'popUpDiv';
		
		errorDiv.innerHTML = `
			<h1>Error! You forgot to fill something in.</h1> 
			<span id="cancelPopUp">X</span>
		`;
		
		container.appendChild(errorDiv);
		
		cancelPopUp.addEventListener('click', () => {
			errorDiv.style.display = 'none';
		});*/
		swal('NO!', 'You have to fill all the fields in.', 'error');
	} else	{
		/*const popUpDiv = document.createElement('div');
		const cancelPopUp = document.getElementById("cancelPopUp");
		const container = document.querySelector('#pop-up');
		popUpDiv.className = 'popUpDiv';
		popUpDiv.innerHTML = `
			<h1>Message Sent!</h1> 
			<span id="cancelPopUp">X</span>
		`;				  
		container.appendChild(popUpDiv);
		
		cancelPopUp.addEventListener('click', () => {
			container.style.display = 'none';
		});*/
		swal("YES!", 'Message Sent', 'success');
	}
});




