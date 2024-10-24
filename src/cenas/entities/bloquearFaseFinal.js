import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

export class bloquearFaseFinal extends Phaser.Scene {

    constructor() {
        super({key: 'bloquearFaseFinal'})
        this.level1 = false;
        this.level2 = false
        this.level3 = false
        this.level4 = false
    }

    armazenarVariaveis() { 
        centroDeEventos.on('level1_Finalizado', () => {
            this.level1 = true;
        })
        centroDeEventos.on('level2_Finalizado', () => {
            this.level2 = true;
        })
        centroDeEventos.on('level3_Finalizado', () => {
            this.level3 = true;
        })
        centroDeEventos.on('level4_Finalizado', () => {
            this.level4 = true;
        })
    }

    verificarVariaveis() {
        centroDeEventos.on('verificarLiberacao', () => {
            console.log(this.level1, this.level2, this.level3, this.level4)
            if (this.level1 && this.level2 && this.level3 && this.level4) {
                centroDeEventos.emit('liberado')
            }
        })
    }

    create() {
        this.armazenarVariaveis()
        this.verificarVariaveis()
        this.scene.start('mostradorDePerformance')
    }

}