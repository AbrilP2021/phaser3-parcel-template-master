import Phaser from 'phaser'

 export default class Juego extends Phaser.Scene {
   player;
   platform;
   brillo;
   cursors;
   puntos;
   extopuntos;
   Recogerbrillo;
   Enemigos;
   VidaJugador;
   TextoVidaJugador;
   textopuntos;
   recogerbrillo;
   timeText;
   TiempoInicial;
   textoVidaJugador;
   TimeEvent;
   superganador;

   constructor() {
     super("Juego");
   }

   init(data) {
     this.nivel = data.nivel;
   }

   preload() {}

   create() {
     console.log("nivel ", this.nivel);

     this.cameras.main.setBounds(0, 0, 10500, 768);
     this.physics.world.bounds.width = 10500;
     this.physics.world.bounds.height = 1537;

     this.add.image(0, 0, "FondoNivelUno").setOrigin(0).setScale(0.5);
     this.add.image(5450, 0, "FondoNivelUno").setOrigin(0).setScale(0.5);

     this.add.image(0, 0, "FondoNivelUno").setOrigin(0).setScale(0.5);
     this.add.image(5450, 0, "FondoNivelUno").setOrigin(0).setScale(0.5);

     //PLATAFORMAS
     
     this.platform = this.physics.add.staticGroup();
     this.platform.setOrigin(0);
     this.platform.create(0, 718, "SueloNivelUno").setScale(0.5).refreshBody();
     this.platform
       .create(2500, 718, "SueloNivelUno")
       .setScale(0.5)
       .refreshBody();
     this.platform
       .create(5500, 718, "SueloNivelUno")
       .setScale(0.5)
       .refreshBody();
     this.platform
       .create(8200, 718, "SueloNivelUno")
       .setScale(0.5)
       .refreshBody();
     this.platform.create(500, 520, "p1");
     this.platform.create(1200, 520, "p1");
     this.platform.create(850, 330, "p1");
     this.platform.create(1750, 330, "p2");
     this.platform.create(2500, 520, "p2");
     this.platform.create(1750, 150, "p1");
     this.platform.create(2500, 150, "p1");
     this.platform.create(3300, 520, "p1");
     this.platform.create(3750, 330, "p1");
     this.platform.create(4300, 330, "p1");
     this.platform.create(5000, 330, "p1");
     this.platform.create(4800, 520, "p1");
     this.platform.create(5800, 520, "p2");
     this.platform.create(6400, 330, "p1");
     this.platform.create(7000, 150, "p1");
     this.platform.create(6800, 520, "p1");
     this.platform.create(5800, 150, "p1");
     this.platform.create(7500, 330, "p1");
     this.platform.create(8200, 520, "p2");
     this.platform.create(9000, 330, "p2");

     //LLEGADA

     this.add.image(1250, 720, "teclas").setScale(0.5).setScrollFactor(0);
     this.add.image(150, 60, "uipower").setScale(0.9).setScrollFactor(0);
     this.add.image(1250, 50, "cronometro").setScale(0.4).setScrollFactor(0);
     this.add.image(80, 720, "corazon").setScale(0.9).setScrollFactor(0);

     //PERSONAJE

     this.player = this.physics.add.sprite(100, 590, "Jugador");
     this.player.setBounce(0.2);
     this.player.setCollideWorldBounds(true);
     this.player.setScale(2);
     this.cameras.main.startFollow(this.player);

     //ANIMACION

     this.anims.create({
       key: "left",
       frames: this.anims.generateFrameNumbers("Jugador", { start: 0, end: 3 }),
       frameRate: 10,
       repeat: -1,
     });
     this.anims.create({
       key: "turn",
       frames: [{ key: "Jugador", frame: 4 }],
       frameRate: 20,
     });
     this.anims.create({
       key: "right",
       frames: this.anims.generateFrameNumbers("Jugador", { start: 5, end: 8 }),
       frameRate: 10,
       repeat: -1,
     });

     this.physics.add.collider(this.player, this.platform);

     //TECLADO

     if ((this.cursors = !undefined)) {
       this.cursors = this.input.keyboard.createCursorKeys();
     }
     //POWER

     this.brillo = this.physics.add.group({
       key: "power",
       repeat: 200,
       setXY: { x: 30, y: 0, stepX: 350 },
     });
     this.brillo.children.iterate(function (child) {
       child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
     });

     this.physics.add.collider(this.brillo, this.platform);
     this.physics.add.overlap(
       this.player,
       this.brillo,
       this.collectBrillo,
       null,
       this
     );

     //NIVEL 2
     if (this.nivel == 2) {
        this.enemigos4 = this.physics.add.group();
        this.enemigos4.create(2000, 100, 'enemigoN2}}').setScale(.7);
         this.enemigos4.create(2500, 300, 'enemigoN2').setScale(.7);
         this.enemigos4.create(3500, 300, 'enemigoN2').setScale(.7);
         this.enemigos4.create(3600, 100, 'enemigoN2').setScale(.7);
         this.enemigos4.create(4400, 300, 'enemigoN2').setScale(.7);
         this.enemigos4.create(5300, 200, 'enemigoN2').setScale(.7);
         this.enemigos4.create(5800, 500, 'enemigoN2').setScale(.7);
         this.enemigos4.create(6300, 300, 'enemigoN2').setScale(.7);
         this.enemigos4.create(6800, 100, 'enemigoN2').setScale(.7);
         this.enemigos4.create(8100, 100, 'enemigoN2').setScale(.7);
         this.enemigos4.create(8300, 300, 'enemigoN2').setScale(.7);
         this.enemigos4.create(9700, 500, 'enemigoN2').setScale(.7);  
  
         //TIEMPO
       this.TiempoInicial = 60
       this.TimeEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });
       this.timeText = this.add.text(1190, 30, '', {fontSize: '50px', });
       this.timeText.setScrollFactor(0);


     }
   }

   update() {
     //MOVIMIENTO JUGADOR
     if (this.cursors.left.isDown) {
       this.player.setVelocityX(-450);
       this.player.anims.play("left", true);
     } else if (this.cursors.right.isDown) {
       this.player.setVelocityX(450);
       this.player.anims.play("right", true);
     } else {
       this.player.setVelocityX(0);
       this.player.anims.play("turn");
     }
     if (this.cursors.up.isDown && this.player.body.touching.down) {
       this.player.setVelocityY(-430);
     }
   }

   collectBrillo(player, brillo) {
     brillo.disableBody(true, true);
     this.puntos += 1;
     this.textopuntos.setText("30/" + this.puntos);
     this.recogerbrillo.play();
     return false;
   }

   hitEnemigo(player, enemigos) {
     enemigos.disableBody(true, true);
     this.vidaJugador -= 1;
     this.textoVidaJugador.setText(" " + this.vidaJugador);
     if (this.vidaJugador === 0) {
       this.gameOver();
     }
   }
   gameOver() {
     this.physics.pause();
     this.player.setTint(0xffff00);
     this.player.anims.play("turn");
     this.TimeEvent.paused = true;
     this.puntos = 0;
     this.vidaJugador = 3;
     this.scene.start("GameOver");
   }

   timer() {
     if (!this.gameOver) {
       this.TiempoInicial = this.TiempoInicial - 1;

       this.timeText.setText(" " + this.TiempoInicial);

       if (this.TiempoInicial == 0) {
         this.TimeEvent.paused = true;

         this.gameOver();
       }
     }
   }
   po1(werplayer, inflapts) {
     inflapts.disableBody(true, true);
     this.vidaJugador += 1;
     this.textoVidaJugador.setText(" " + this.vidaJugador);
     return false;
   }
   power2(player, relojtiempo) {
     relojtiempo.destroy();
     this.TiempoInicial += 5;
     this.timeText.setText(" " + this.TiempoInicial);
     return false;
   }

   maspower(player, powerup2) {
     powerup2.destroy();
     if (this.vidaJugador >= 3) {
       this.puntos += 10;
       this.textopuntos.setText("30/" + this.puntos);
     } else {
       this.TiempoInicial += 15;
       this.timeText.setText(" " + this.TiempoInicial);
     }
     return false;
   }

   ganarpartida(player, ganarCasita) {
     if (this.puntos >= 30) {
       this.superganador.play();
       this.ganaste();
     }
   }

   ganaste() {
     this.scene.start("Ganador", { nivel: this.nivel });
   }
   perdiste() {
     this.scene.start("Perdedor", { nivel: this.nivel });
   }
 }