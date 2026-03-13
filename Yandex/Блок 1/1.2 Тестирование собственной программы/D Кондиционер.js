// Основная идея: просто switch case

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

rl.on('line', (line) => {
  inputs.push(line)
  
  if(inputs.length < 2) return

  const [t_room, t_cond] = inputs[0].split(' ').map(Number)
  const mode = inputs[1]
  
  switch(mode) {
    case 'freeze':
      if(t_room > t_cond) {
        console.log(t_cond)
      } else {
        console.log(t_room)
      }
      break;
    case 'heat':
      if(t_room < t_cond) {
        console.log(t_cond)
      } else {
        console.log(t_room)
      }
      break;
    case 'auto':
      console.log(t_cond);
      break;
    case 'fan':
      console.log(t_room);
      break;
  }

  rl.close();
});