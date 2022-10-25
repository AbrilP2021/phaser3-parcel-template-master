import Phaser from 'phaser'

export default class Tutorial extends Phaser.Scene {
  constructor() {
    super(" TutorialJuego");
  }

  init(data) {
    this.nivel = data.nivel
  }

  create() {
    console.log("nivel ", this.nivel);
    this.add.image(0, 0, "FondoTuto").setOrigin(0).setScale(0.5);
    const botontuto = this.add.image(1150, 100, "BotonJ").setScale(0.4);
    botontuto.setInteractive();
    botontuto.on("pointerdown", () => this.scene.start("Juego", {nivel: this.nivel}));   
    
    this.text = this.add.text(1150, 100, "JUGAR",{font: "30px Arial"}).setScale(0.4);
  }

  update() {

  }
}
