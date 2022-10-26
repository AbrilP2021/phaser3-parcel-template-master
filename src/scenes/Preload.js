import Phaser from "phaser";
import MenuPrincipal from "./MenuPrincipal";

export default class Preload extends Phaser.Scene {
  preload() {
    this.load.image('FondoNivelUno', './Assets/FondoCompletoN1.png');
    this.load.image('FondoNivelDos', './Assets/FondoNivel2.png');
        this.load.image('SueloNivelUno', './Assets/SueloCompletoN1.png');
        this.load.spritesheet('Jugador', './Assets/pelota.png', { frameWidth: 32, frameHeight: 48});

        this.load.image('p1', './Assets/Mapa/plataformachica.png');
        this.load.image('p2', './Assets/Mapa/plataformagrande.png');
        this.load.image('flecha', './assets/flechacasa.png');
        this.load.image('teclas', './assets/controles.png');
        this.load.image('power', './asets/brillo.png');
        this.load.image('pinches1', './assets/enemigos1.png');
        this.load.image('uipower', './assets/uibrillos.png');
        this.load.image('pinches2', './assets/enemigos2.png');
        this.load.image('pinches3', './assets/enemigos3.png');
        this.load.image('corazon', './assets/vida.png');
        this.load.image('cronometro', './assets/Tiempo.png');
        this.load.image('infla', './assets/inflador.png');
        this.load.image('banderita', './assets/bandera.png');
        this.load.image('reloj', './assets/relojtiempo.png');

        this.load.image("FondoWin", "./assets/tesalvaste.png");
        this.load.image("BotonS", "./assets/BotonSiguiente.png");
        this.load.image("BotonM", "./assets/BotonMenu.png");

        this.load.image("FondoC", "./assets/FondoSolo.png");
        this.load.image("FondoCre", "./assets/FondoCreditos.png");
        this.load.image("BotonM", "./assets/BotonMenu.png");

        this.load.image("FondoM", "./assets/FondoMenu.png");
        this.load.image("BotonJ", "./assets/BotonJugar.png");
        this.load.image("BotonI", "./assets/BotonInfo.png");
        this.load.image("BotonN2", "./assets/BotonReinicio.png");

        this.load.image("perdiste", "./assets/tepinchaste.png")

        this.load.image("FondoTuto", "./assets/TutorialN1.png");
        this.load.image("tuto2", "./assets/TutorialN2.png");
        
 }
  create() {
    this.scene.start ("MenuPrincipal")
  
  
}
}
