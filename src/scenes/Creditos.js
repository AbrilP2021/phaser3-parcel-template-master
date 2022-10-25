import Phaser from 'phaser'

export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Créditos");
  }

  create() {
    this.add.image(0, 0, "FondoCre").setOrigin(0).setScale(0.5);
    var botonmenu = this.add.image(700, 650, "BotonM").setScale(0.4);
    botonmenu.setInteractive();
    botonmenu.on("pointerdown", () => this.scene.start("Menu"));

    this.text = this.add.text(700, 650, "MENÚ",{font: "30px Arial" }).setScale(0.4);
  }
  update() {}
}
