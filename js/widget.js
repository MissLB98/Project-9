//SOCIAL STATS
const socialStats = new XMLHttpRequest();
socialStats.onreadystatechange = function () {
	if (socialStats.readyState === 4 && socialStats.status === 200)	{
		const stats = JSON.parse(socialStats.responseText);
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
	}
};
socialStats.open("GET", "../data/socialStats.json");
socialStats.send();


//NEW MEMBERS WIDGET
const newMembers = new XMLHttpRequest();
newMembers.onreadystatechange = function () {
	if (newMembers.readyState === 4 && newMembers.status === 200) {
		const members = JSON.parse(newMembers.responseText);
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
	}
};
newMembers.open("GET", "../data/new-member.json");
newMembers.send();


//RECENT ACTIVITY WIDGET

const recentActivity = new XMLHttpRequest();
recentActivity.onreadystatechange = function () {
  if (recentActivity.readyState === 4 && recentActivity.status === 200) {
    const activity = JSON.parse(recentActivity.responseText);
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
  }
};
recentActivity.open("GET", "../data/recent-activity.json");
recentActivity.send();

