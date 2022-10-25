import Phaser from "phaser";
import MenuPrincipal from "./MenuPrincipal";

export default class Preload extends Phaser.Scene {
  preload() {
    this.load.image('FondoNivelUno', './Assets/FondoCompletoN1.png');
        this.load.image('SueloNivelUno', './Assets/SueloCompletoN1.png');
        this.load.spritesheet('Jugador', './Assets/pelota.png', { frameWidth: 32, frameHeight: 48});

        this.load.image('p1', './Assets/Mapa/plataformachica.png');
        this.load.image('p2', './Assets/Mapa/plataformagrande.png');
        this.load.image('flecha', './Assets/flechacasa.png');
        this.load.image('teclas', './Assets/controles.png');
        this.load.image('power', './Assets/brillo.png');
        this.load.image('pinches1', './Assets/enemigos1.png');
        this.load.image('uipower', './Assets/uibrillos.png');
        this.load.image('pinches2', './Assets/enemigos2.png');
        this.load.image('pinches3', './Assets/enemigos3.png');
        this.load.image('corazon', './Assets/vida.png');
        this.load.image('cronometro', './Assets/Tiempo.png');
        this.load.image('infla', './Assets/inflador.png');
        this.load.image('banderita', './Assets/bandera.png');
        this.load.image('reloj', './Assets/relojtiempo.png');

        this.load.image("FondoWin", "./Assets/tesalvaste.png");
        this.load.image("BotonS", "./Assets/BotonSiguiente.png");
        this.load.image("BotonM", "./Assets/BotonMenu.png");

        this.load.image("FondoC", "./Assets/FondoSolo.png");
        this.load.image("FondoCre", "./Assets/FondoCreditos.png");
        this.load.image("BotonM", "./Assets/BotonMenu.png");

        this.load.image("FondoM", "./Assets/FondoMenu.png");
        this.load.image("BotonJ", "./Assets/BotonJugar.png");
        this.load.image("BotonI", "./Assets/BotonInfo.png");
        this.load.image("BotonN2", "./Assets/BotonReinicio.png");

        this.load.image("perdiste", "./Assets/tepinchaste.png");
        this.load.image("BotonR", "./Assets/BotonReinicio.png");
        this.load.image("BotonMe", "./Assets/BotonMenu.png");

        this.load.image("FondoTuto", "./Assets/TutorialN1.png");
        this.load.image("tuto2", "./Assets/TutorialN2.png");
        this.load.image("BotonJ", "./Assets/BotonJugar.png");
 }
  create() {
    this.scene.start ("MenuPrincipal")
  
  
}
}
