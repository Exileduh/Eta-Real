var gameData = {
	Eta: 0,
	EtaPerClick: 0.2
}


function ClickEta() {
	gameData.Eta += gameData.EtaPerClick;
	document.getElementById("CurrentEta").innerHTML = (gameData.Eta).toFixed(2)
}