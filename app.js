const server = require('express'),
const md5 = require('md5'),
const client = require('./models/client');

class Server {

  constructor(user, music, films, player) {
    this.user = user;
    this.music = music;
    this.films = films;
    this.player = player;
  }
  
  getUser() {
    return this.user;
  }
  
  setUser(user) {
    this.user = user;
  }
  
  
  getPlayer() {
    return this.player;
  }
  
  getMusic() {
    return this.music;
  }
  
  getFilms() {
    return this.films;
  }
  setUser(user) {
    this.user = user;
  }
  
  serialize() {
    return {
      user: user,
      music: music
    }; 
  }
}

module.exports = Server;
