//SOCIAL STATS
var socialStats = new XMLHttpRequest();
socialStats.onreadystatechange = function () {
	if (socialStats.readyState === 4 && socialStats.status === 200)	{
		var stats = JSON.parse(socialStats.responseText);
		var socialHTML = '<ul>';
		for (let i = 0; i < stats.length; i += 1)	{
			socialHTML += "<li>";
			socialHTML += '<img src="' + stats.icon + '" alt="icon">';
			socialHTML += '<span>' + stats.media + '</span>';
			socialHTML += '<span>' + stats.status + '</span>' + '</li>';
		}
		socialHTML += '</ul>';
		document.getElementById('socialStats').innerHTML = socialHTML;
	}
};
socialStats.open('GET', '../js/socialStats.json', true);
socialStats.send();

//////////////////
//////////////////
//////////////////

//NEW MEMBERS WIDGET
var newMembers = new XMLHttpRequest();
newMembers.onreadystatechange = function () {
	if (newMembers.readyState === 4 && newMembers.status === 200) {
		var members = JSON.parse(newMembers.responseText);
		var memberHTML = '<ul class="new-members">';
		for (let i = 0; i < members.length; i += 1) {
			memberHTML += '<li>';
				memberHTML += '<img src="' + members[i].picture + '">';
        memberHTML += '<div>';
				memberHTML += '<span><b>' + members[i].name;
				memberHTML += '</b></span>';
				memberHTML += '<p><a href="mailto:';
				memberHTML += members[i].email + '">';
				memberHTML += members[i].email;
				memberHTML += '</a>';
				memberHTML += '<span>';
				memberHTML += members[i].date;
				memberHTML += '</span></p>';
        memberHTML += '</div>';
			memberHTML += '</li>';
		}
		memberHTML += '</ul>';
		document.getElementById('newMembers').innerHTML = memberHTML;
	}
}
newMembers.open('GET', '../js/new-member-data.json', true);
newMembers.send();
