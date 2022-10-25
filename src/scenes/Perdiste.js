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
    var botonreinicio = this.add.image(700, 400, "BotonR").setScale(0.4);
    botonreinicio.setInteractive();
    botonreinicio.on("pointerdown", () =>
      this.scene.start("Tutorial", { nivel: this.nivel })
    );

    this.text = this.add.text(700, 400, "REINICIAR",{font: "30px Arial" }).setScale(0.4); 

    var botonmenucito = this.add.image(700, 550, "BotonMe").setScale(0.4);
    botonmenucito.setInteractive();
    botonmenucito.on("pointerdown", () => this.scene.start("MenuPrincipal"));

    this.text = this.add.text(700, 550, "MENU",{font: "30px Arial" }).setScale(0.4); 
  }
  update() {}
}
