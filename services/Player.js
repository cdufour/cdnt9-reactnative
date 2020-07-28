// Service Player
// le résultat des appels asynchrones seront traités
// (exemple: mise à jour d'uu state local) par les
// composants "consommant" ce service

const apiUrl = 'http://api.opusidea.net/player'

function getPlayers() { return fetch(apiUrl)}
function postPlayer(player) {}
function updatePlayer() {}
function deletePlayer() {}

export { getPlayers }