import Phaser from 'phaser'

export default class Ganaste extends Phaser.Scene {
  init(data) {
    this.nivel = data.nivel;
  }
  constructor() {
    super("Ganaste");
  }

  create() {
    console.log("nivel ", this.nivel);

    this.add.image(0, 0, "FondoWin").setOrigin(0).setScale(0.5);
    const botonsiguiente = this.add.image(700, 400, "BotonS").setScale(0.4);
    botonsiguiente.setInteractive();
    botonsiguiente.on("pointerdown", () => {
      if (this.nivel == 1) {
        this.scene.start("tutonivel", { nivel: this.nivel + 1 });
      } else {
        this.scene.start("ganaste general");
      }
    });

    this.text = this.add.text(700, 400, "SIGUIENTE", {font: "30px Arial"}).setScale(0.4); 

    const botonmenu2 = this.add.image(700, 550, "BotonM").setScale(0.4);
    botonmenu2.setInteractive();
    botonmenu2.on("pointerdown", () => this.scene.start("Menu"));

    this.text = this.add.text(700, 550, "MENU", {font: "30px Arial" }).setScale(0.4); 
    
    this.add.image(0, 0, "ganaste").setOrigin(0).setScale(0.5);
    const botonseguir = this.add.image(700, 500, "botonseguir").setScale(0.4);
    botonseguir.setInteractive();
    botonseguir.on("pointerdown", () => this.scene.start("Menu"));

    this.text = this.add.text(700, 500, "SEGUIR", {font: "30px Arial" }).setScale(0.4)
  }
  update() {}
}
