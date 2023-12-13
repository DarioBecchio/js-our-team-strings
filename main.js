/*
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon divertimento e buon lavoro! confermate lettura come al solito
*/

//Creare l’array di stringhe contenente i nomi dei membri del team.

const team_member = [
    
    'Ugo Ughi' ,
    'Vito Viti' ,

]
console.log(team_member);

//Stampare le informazioni su DOM come card.
let container = (document.getElementById('team'))

for (let i = 0 ; i < team_member.length ; i++){
const member = team_member[i];
const memberElement = document.createElement('div')
memberElement.classList.add('col-4')
memberElement.append (member)
container.appendChild(memberElement)

memberElement.addEventListener('click' , function(){
    memberElement.classList.add('bg-primary')
})

}


