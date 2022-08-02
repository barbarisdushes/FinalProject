var playerName1 = prompt("What are the names of the first-team players?");
var firstPlayers = playerName1.split(' ', 11)

var playerName2 = prompt("What are the names of the second-team players?");
var secondPlayers = playerName2.split(' ', 11)
	

document.querySelector('#reset').onclick = function(){
	var firstTeamScore = parseInt(document.getElementById('first-team-score').value);
	var secondTeamScore = parseInt(document.getElementById('second-team-score').value);
	check(firstTeamScore, secondTeamScore);
	{
}
	if (firstTeamScore > secondTeamScore) {
		alert( 'First team Win' );
	  } else if (firstTeamScore == secondTeamScore && firstTeamScore+secondTeamScore<=7)  {
		alert( 'Draw...' );
	 } else if (firstTeamScore+secondTeamScore >7) {
		alert('The sum of points of two teams must not exceed 7')
	 }
	  else {
		alert( 'Second team Wins' );
	  }
	  
	
};
function check(firstTeamScore, secondTeamScore){
	var summa = (firstTeamScore) + (secondTeamScore);
	if (summa <= 7) window.location.href = 'second.html';
	else window.location.href = 'third.html';
};
document.querySelector('#players').onclick = function() {
	window.alert(firstPlayers);
};
document.querySelector('#players2').onclick = function() {
	window.alert(secondPlayers);
};







