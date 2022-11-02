import Phaser from 'phaser'

export default class Perdiste extends Phaser.Scene {
  init(data) {
    this.nivel = data.nivel;
  }
  constructor() {
    super("Perdiste");
  }

  create() {
    this.add.image(0, 0, "perdiste").setOrigin(0).setScale(0.5);
    var botonreinicio = this.add.image(700, 400, "BotonS").setScale(0.4);
    botonreinicio.setInteractive();
    botonreinicio.on("pointerdown", () => this.scene.start("TutorialJuego", { nivel: 1 })
    );

    
    var botonmenucito = this.add.image(700, 550, "BotonM").setScale(0.4);
    botonmenucito.setInteractive();
    botonmenucito.on("pointerdown", () => this.scene.start("MenuPrincipal"));

    this.text = this.add.text(599, 520, "MENU", { font: "150px Cocogoose" }) .setScale(0.4);

    this.text = this.add
    .text(460, 100, "PERDISTE", { font: "250px Cocogoose" })
    .setScale(0.4);

    this.text = this.add
    .text(550,370, "REINICIAR", { font: "130px Cocogoose" })
    .setScale(0.4);


   
  }
  update() {}
}
