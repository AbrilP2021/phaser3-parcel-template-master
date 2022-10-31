import Phaser from "phaser";

export default class Ganaste extends Phaser.Scene {
  init(data) {
    this.nivel = data.nivel;
  }
  constructor() {
    super("Ganaste");
  }

  create() {
    console.log("nivel ", this.nivel);

    if (this.nivel == 2) {
      this.scene.start("MenuPrincipal");
    }

    this.add.image(0, 0, "FondoWin").setOrigin(0).setScale(0.5);
    const botonsiguiente = this.add.image(700, 400, "BotonS").setScale(0.4);
    botonsiguiente.setInteractive();
    botonsiguiente.on("pointerdown", () => {
      this.scene.start("TutorialJuego", { nivel: this.nivel + 1 });
    });

    this.text = this.add
      .text(550,370, "SIGUIENTE", { font: "130px Cocogoose" })
      .setScale(0.4);

    const botonmenu2 = this.add.image(700, 550, "BotonM").setScale(0.4);
    botonmenu2.setInteractive();
    botonmenu2.on("pointerdown", () => this.scene.start("Menu"));

    this.text = this.add
      .text(599, 520, "MENU", { font: "150px Cocogoose" })
      .setScale(0.4);

  
    botonsiguiente.setInteractive();
    botonsiguiente.on("pointerdown", () => this.scene.start("MenuPrincipal"));

    this.text = this.add
    .text(460, 100, "GANASTE", { font: "250px Cocogoose" })
    .setScale(0.4);
   
  }
  update() {}
}
