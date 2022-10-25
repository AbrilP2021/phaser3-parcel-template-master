import Phaser from 'phaser'

export default class MenuPrincipal extends Phaser.Scene 
{
  constructor () {
	super ({key:"MenuPrincipal"})
  }



  create() {



    this.add.image(0, 0, "FondoM").setOrigin(0).setScale(0.5);
    const botonjugar = this.add.image(700, 400, "BotonJ").setScale(0.4);
    botonjugar.setInteractive();
    botonjugar.on("pointerdown", () => this.scene.start("TutorialJuego", {nivel: 1}));

    this.text = this.add.text(700, 400, "JUGAR",{font: "30px Arial", }).setScale(0.4); 


    const botoninfo = this.add.image(700, 550, "BotonI").setScale(0.4);
    botoninfo.setInteractive();
    botoninfo.on("pointerdown", () => this.scene.start("Creditos"));

    this.text = this.add.text(700, 550, "CREDITOS", {font: "30px Arial" }).setScale(0.4); 


  }
  update() {}
}

