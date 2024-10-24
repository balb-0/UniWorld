// Este arquivo desenvolve o funcionamento do sistema de vidas do personagem no jogo.

// A vida é um tipo de sprite que será adicionada ao jogo, por isso herda este arquivo Phaser.
export default class vidasCount extends Phaser.Physics.Arcade.Sprite {
    
    // Para definir a cena, cordenadas e textura (respectivamente) que cada coração irá aparecer. 
    constructor(scene, x, y, texture) {
        super(scene, x, y, 'vidas3')
        // define que o personagem inicia com 3 vidas;
        this.vidasRestantes = 3;

        // essa linha diminui a escala do sprite e define que ele não irá se mover juntamente a câmera.
        this.setScale(0.08).setScrollFactor(0)

        
    }

    // Função que cria a lógica de perda de vidas quando o personagem morre.
    perdeuVida() {
        if (this.vidasRestantes == 3) {
            this.setTexture('vidas3')
        } else if (this.vidasRestantes == 2) {
            this.setTexture('vidas2')
        } else if (this.vidasRestantes == 1){
            this.setTexture('vidas1')
        }
    }

    // Define que quando o personagem morrer (perder todas suas vidas) aparecerá a tela de gameOver.
    morreu(scene) {
        this.vidasRestantes--
        if (this.vidasRestantes == 0) {
            scene.scene.launch('gameOver')
        }
    };
}