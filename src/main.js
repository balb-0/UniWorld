// importação da classe Cena1 para dentro do código principal.
import { preload } from "./cenas/preload/preload.js";
import { Intro } from "./cenas/intro/intro.js"
import { Cena1 } from "./cenas/cena1/cena1.js";
import { Cena2 } from "./cenas/cena2/cena2.js";
import { Level1 } from "./cenas/level1/level1.js";
import { Level2 } from "./cenas/level2/level2.js"
import { Level3 } from "./cenas/level3/level3.js";
import { Level4 } from "./cenas/level4/level4.js";
import { controls } from "./cenas/controls/controls.js";
import { creditos } from "./cenas/creditos/creditos.js";
import { dicionario } from "./cenas/dicionario/dicionario.js";
import { gameOver } from "./cenas/gameOver/gameOver.js";
import { mainMenu } from "./cenas/mainMenu/mainMenu.js";
import { pause } from "./cenas/pause/pause.js";
import { settings } from "./cenas/settings/settings.js";
import { hud } from "./cenas/hud/hud.js";
import { Final } from "./cenas/cenaFinal/cenaFinal.js";
import { cenaQuiz1 } from "./cenas/Quiz/cenaQuiz1.js";
import { cenaQuiz2 } from "./cenas/Quiz/cenaQuiz2.js";
import { cenaQuiz3 } from "./cenas/Quiz/cenaQuiz3.js";
import { cenaQuiz4 } from "./cenas/Quiz/cenaQuiz4.js";
import { bloquearFaseFinal } from "./cenas/entities/bloquearFaseFinal.js";
import { mostradorDePerformance } from "./cenas/entities/mostradorDePerformance.js";


// local onde o jogo foi configurado
var config = {
    type: Phaser.AUTO, //  isso faz com que o Phaser selecione automaticamente a renderização WebGL se disponível, senão, ele usa o Canvas.
    width: 1000, // Especifica as dimensões do canvas do jogo.
    height: 640, // Especifica as dimensões do canvas do jogo.
    //  garante que o jogo se ajuste ao tamanho da janela do navegador.
    scale: { 
        mode: Phaser.Scale.FIT,
    },
    physics: {
        default: 'arcade', //informamos ao Phaser que nosso jogo exige da física Arcade pois esse modelo de física fornece métodos simples como gravidade e colisão com outros objetos dentro do canvas.
        arcade: {
            gravity: { y: 600 },
            debug: false,
        }
    },
    pixelArt: false, //  ajuda a manter a nitidez dos gráficos de pixel.
    scene: [preload, mainMenu, Intro, Cena1, bloquearFaseFinal, Cena2, mostradorDePerformance, Level1, Level2, Level3, Level4, Final, hud, controls, creditos, gameOver, settings, dicionario, cenaQuiz1, cenaQuiz2, cenaQuiz3, cenaQuiz4, pause], //  lista todas as cenas que serão utilizadas no jogo.
}

var game = new Phaser.Game(config) //inicia o jogo com as configurações especificadas.

