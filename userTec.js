const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] },
  { nome: 'Anderson', tecnologias: ['CSS', 'Java'] },
  { nome: 'Fabin', tecnologias: ['AngularJs', 'Node.js'] },
];

for (let i = 0; i < usuarios.length; i++) {
  let tecnologias = '';
  for (let a = 0; a < usuarios[i].tecnologias.length; a++) {
    if (a == 0) {
      tecnologias = usuarios[i].tecnologias[a];
    } else {
      tecnologias = tecnologias + ', ' + usuarios[i].tecnologias[a];
    }
  }
  console.log(`${usuarios[i].nome} trabalha com ${tecnologias}`);
}
