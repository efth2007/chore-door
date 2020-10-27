let doorImage1 = document.getElementById('door1')

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'

doorImage1.onclick = ()=>{
    console.log("Clicked!")
  doorImage1.src = botDoorPath
}