/* Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).*/

class Perfil {
  constructor(nome, avatar, tema = light) {
    this.nome = nome;
    this.avatar = this.verificaAvatar(avatar);
    this.tema = tema === 'dark' || tema === 'light' ? tema : 'light';
  }

  get mudaTema() {
    return this.tema;
  }

  set mudaTema(tema) {
    return tema === 'dark' || tema === 'light' ? this.tema = tema : this.tema;
  }

  verificaAvatar(avatar) {
    return avatar.split('').splice(0,4).join('') === 'http' ? this.avatar = avatar : undefined;
  }

}

const perfil1 = new Perfil('afallrea', 'https://data.whicdn.com/images/340439831/original.jpg', 'dark');
const perfil2 = new Perfil('luvlore', 'i.pinimg.com/550x/ff/8a/01/ff8a01eda02d2002ca0155a6cf21b768.jpg', 'blueLight');

console.log(perfil1);
console.log(perfil2);

perfil1.mudaTema = 'lightBlue';
console.log(perfil1);

perfil1.mudaTema = 'light';
console.log(perfil1);
