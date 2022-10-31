import Phaser from "phaser";

export default class Tutorial extends Phaser.Scene {
  constructor() {
    super("TutorialJuego");
  }

  init(data) {
    this.nivel = data.nivel;
  }

  create() {
    console.log("nivel ", this.nivel);
    this.add.image(0, 0, "FondoTuto").setOrigin(0).setScale(0.5);
    const botontuto = this.add
      .image(550, 500, "BotonJ")
      .setOrigin(0)
      .setScale(0.3);
    botontuto.setInteractive();
    botontuto.on("pointerdown", () =>
      this.scene.start("Juego", { nivel: this.nivel })
    );

    
    this.text = this.add
      .text(540, 100, "TUTORIAL", { font: "150px Cocogoose" })
      .setScale(0.4);

    this.text = this.add
      .text(300, 400, "Utiliza las flechas y recolecta la cantidad de brillos necesarios para pasar al siguiente nivel", { font: "40px Cocogoose" })
      .setScale(0.4);
  }
  
  

  update() {}
}
