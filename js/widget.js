//SOCIAL STATS

var socialStats = new XMLHttpRequest();
socialStats.onreadystatechange = function () {
	if (socialStats.readyState === 4 && socialStats.status === 200)	{
		var stats = JSON.parse(socialStats.responseText);
		for (let i = 0; i < stats.length; i += 1)	{
			
		}
	}
};
socialStats.open('GET', 'socialStats.json');
socialStats.send();

/*---- THIS IS THE STRUCTURE FOR THE STATS
<article class="twitter">
	<div>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
		
			<path d="M32,3.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.8,0.8,24,0,22.2,0
			c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,7.8,5.5,5.2,2.2,1.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5
			c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1
			c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,3,10.1,3c12.1,0,18.7-10,18.7-18.7
			c0-0.3,0-0.6,0-0.8C30,5.6,31.1,4.4,32,3.1z"/>
		</svg>
	</div>
	<div>
		<h3>Twitter</h3>
		<span>10,345</span>
	</div>
</article>
<article class="facebook">
	<div>
		<svg enable-background="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		
			<path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"/>
		</svg>
	</div>
	<div>
		<h3>Facebook</h3>
		<span>8,739</span>
	</div>
</article>
<article class="google">
	<div>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
		
			<path d="M17.7,25.7c0-0.3,0-0.5-0.1-0.8c-0.1-0.2-0.1-0.5-0.2-0.7c-0.1-0.2-0.2-0.4-0.3-0.7c-0.2-0.2-0.3-0.4-0.4-0.6
			c-0.1-0.2-0.3-0.3-0.5-0.6c-0.2-0.2-0.4-0.4-0.5-0.5c-0.1-0.1-0.3-0.3-0.6-0.5c-0.3-0.2-0.5-0.4-0.6-0.4s-0.3-0.2-0.6-0.4
			c-0.3-0.2-0.5-0.4-0.6-0.4c-0.2,0-0.5,0-1,0c-0.7,0-1.4,0-2,0.1c-0.7,0.1-1.4,0.2-2.1,0.5c-0.7,0.2-1.3,0.5-1.9,0.9s-1,0.8-1.3,1.4
			c-0.3,0.6-0.5,1.3-0.5,2.1c0,0.9,0.2,1.7,0.7,2.3c0.5,0.7,1.1,1.2,1.8,1.6s1.5,0.7,2.3,0.9s1.6,0.3,2.4,0.3c0.8,0,1.5-0.1,2.2-0.2
			c0.7-0.2,1.3-0.4,1.9-0.8c0.6-0.3,1.1-0.8,1.4-1.4C17.5,27.2,17.7,26.5,17.7,25.7z M15.4,9.1c0-0.8-0.1-1.6-0.3-2.5
			c-0.2-0.9-0.5-1.7-0.9-2.5c-0.4-0.8-0.9-1.5-1.6-2c-0.7-0.5-1.5-0.8-2.3-0.8c-1.2,0-2.1,0.4-2.8,1.3c-0.7,0.9-1,1.9-1,3.2
			c0,0.6,0.1,1.2,0.2,1.9c0.1,0.7,0.4,1.3,0.7,2c0.3,0.7,0.7,1.3,1.1,1.8c0.4,0.5,0.9,1,1.5,1.3c0.6,0.3,1.2,0.5,1.9,0.5
			c1.2,0,2.1-0.4,2.7-1.2C15.1,11.4,15.4,10.4,15.4,9.1z M12.9,0h8.4l-2.6,1.5h-2.6c0.9,0.6,1.6,1.4,2.1,2.4s0.8,2.1,0.8,3.2
			c0,0.9-0.1,1.8-0.4,2.5c-0.3,0.7-0.7,1.3-1.1,1.8c-0.4,0.4-0.8,0.9-1.3,1.2c-0.4,0.4-0.8,0.8-1.1,1.2c-0.3,0.4-0.4,0.8-0.4,1.3
			c0,0.3,0.1,0.7,0.3,1c0.2,0.3,0.5,0.6,0.8,0.9c0.3,0.3,0.7,0.6,1.1,0.9c0.4,0.3,0.8,0.7,1.2,1.1c0.4,0.4,0.8,0.8,1.1,1.3
			c0.3,0.5,0.6,1,0.8,1.6c0.2,0.6,0.3,1.3,0.3,2c0,2.1-0.9,3.9-2.7,5.4c-1.9,1.7-4.6,2.5-8.1,2.5c-0.8,0-1.5-0.1-2.3-0.2
			c-0.8-0.1-1.6-0.3-2.3-0.6c-0.8-0.3-1.5-0.7-2.1-1.1c-0.6-0.4-1.1-1-1.5-1.7C1,27.6,0.8,26.9,0.8,26c0-0.8,0.2-1.6,0.7-2.6
			c0.4-0.8,1-1.5,1.8-2.1c0.8-0.6,1.8-1.1,2.8-1.4c1-0.3,2-0.5,3-0.7c0.9-0.1,1.9-0.2,2.9-0.3c-0.8-1.1-1.2-2-1.2-2.9
			c0-0.2,0-0.3,0-0.5c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0.1-0.2,0.2-0.4c0.1-0.2,0.1-0.3,0.1-0.4c-0.5,0.1-1,0.1-1.3,0.1
			c-1.9,0-3.5-0.6-4.9-1.9c-1.4-1.3-2-2.8-2-4.7c0-1.8,0.6-3.4,1.8-4.8C6,1.7,7.5,0.8,9.3,0.4C10.5,0.1,11.7,0,12.9,0z M32.8,4.9v2.5
			h-4.9v4.9h-2.5V7.4h-4.9V4.9h4.9V0h2.5v4.9H32.8z"/>
		</svg>
	</div>
	<div>
		<h3>Google+</h3>
		<span>2,530</span>
	</div>
</article>
*/

//NEW MEMBERS WIDGET
var newMembers = new XMLHttpRequest();
newMembers.onreadystatechange = function () {
	if (newMembers.readyState === 4 && newMembers.status === 200) {
		var members = JSON.parse(newMembers.responseText);
		var memberHTML = '<ul class="new-members">';
		for (let i = 0; i < members.length; i += 1) {
			memberHTML += '<li>';
				memberHTML += members[i].picture;
				memberHTML += '<span>';
				memberHTML += members[i].name;
				memberHTML += '</span>';
				memberHTML += '<a href="mailto:';
				memberHTML += members[i].email + '">';
				memberHTML += members[i].email;
				memberHTML += '</a>';
				memberHTML += '<span>';
				memberHTML += members[i].date;
				memberHTML += '</span>';
			memberHTML += '</li>';
		}
		memberHTML += '</ul>';
		document.getElementById('newMembers').innerHTML = memberHTML;
	}
}
newMembers.open('GET', 'new-member-data.json');
newMembers.send();

/*--- THIS IS THE STRUCTURE FOR THE MEMBERS
<div class="new-members">
	<article class="new-member-item">
		<img src="img/img1.jpg" alt="new_member"/>
		<p>
			<span><b>Victoria Chambers</b></span><br/>
			<a href="mailto:victoria.chambers80@example.com">victoria.chambers80@example.com</a>
			<i>10/15/15</i>
		</p>
	</article>
	
	<article class="new-member-item">
		<img src="img/img2.jpg" alt="new_member"/>
		<p>
			<span><b>Dale Byrd</b></span><br/>
			<a href="mailto:dale.byrd52@example.com">dale.byrd52@example.com</a>
			<i>10/15/15</i>
		</p>
	</article>
	
	<article class="new-member-item">
		<img src="img/img3.jpg" alt="new_member"/>
		<p>
			<span><b>Dawn Wood</b></span><br/>
			<a href="mailto:dawn.wood16@example.com">dawn.wood16@example.com</a>
			<i>10/15/15</i>
		</p>
	</article>
	
	<article class="new-member-item">
		<img src="img/img4.jpg" alt="new_member"/>
		<p>
			<span><b>Dan Oliver</b></span><br/>
			<a href="mailto:dan.oliver82@example.com">dan.oliver82@example.com</a>
			<i>10/15/15</i>
		</p>
	</article>
</div>
*/