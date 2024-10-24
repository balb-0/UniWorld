import centroDeEventos from "../centroDeEventos/centroDeEventos.js";
import lev from "../entities/lev.js";
import NPC from "../entities/NPC.js"

/* definição da cena que será usada durante o desenvolvimento do jogo a partir de configurações já
existentes (definidas no arquivo "main.js") */
export class Final extends Phaser.Scene {

     /* declaração das variáveis que serão usadas ao longo do código */
    lev;
    map;
    contador = 0;
    pontuacao = 0;
    
    /* Construtor da classe. Avisa ao framework Phaser3 que, para se referir a essa cena em específico, utiliza-se a chave/nome "cenaFinal" */
    constructor() {
        super({key: 'cenaFinal'});
        this.lev = null; 
        this.teclas = null
        this.letraE = null
        this.NPC
    }

    create(){
        /*aplica-se o efeito de fade-in ao iniciar a cena, esse efeito é implementado na visão do jogador, ou seja, nas câmera do jogo*/
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        //Adição das imagens de background e das marcas utilizadas na cena final
        this.add.image(2720, 320, 'bgFinal');
        this.add.image(2720, 320, 'marcas');

        //Adiciona o mapa do jogo a cena com as colisões definidas
        this.map = this.make.tilemap({key: 'cenaFinal' });

        //Caracteristicas e propriedades do mapa são definidas aqui, como textura e as camadas que são utilizadas
        var tilesetPiso = this.map.addTilesetImage ('ground1', 'groundFinal');
        var piso = this.map.createLayer('ground', tilesetPiso, 0, 0);

        // Adição do NPC no mapa
        this.NPC = new NPC(this, 4830, 500, 'NPC').setScale(3);
        this.NPC.animaçãoPersonagem(this, this.NPC, piso)
        this.NPC.adicionarPersonagem(this, piso)

        this.letraE = this.add.image(5270, 300, 'letraE').setScale(0.7);

        //Adição do personagem principal controlável Lev, da sua sprite e das suas animações
        this.lev = new lev(this, 160, 500, 'lev');
        this.lev.adicionarSprite(this);
        this.lev.criarAnimacao(this);

        //Define-se os limitesdo mapa
        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels);

        //Adição da colisão com o chão
        this.map.setCollisionByProperty({collider: true});
        this.physics.add.collider(this.lev, piso);

        //Configuração das câmeras para o acompanhamento do personagem ao longo do trajeto
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.lev)

        // Adiciona a sprite da Clear
        var clear = this.physics.add.sprite(1370, 400, 'clearC').setScale(0.05, 0.05);
        clear.setCollideWorldBounds(true);
        this.physics.add.collider(clear, piso);
        clear.setBounce(1);

        // O personagem pega o objeto Clear e ele some
        this.physics.add.overlap(clear, this.lev, () => {
            clear.setVisible(false); 
            clear.disableBody(true, true); 
            this.pontuacao += 1; // Aumentar a pontuação
        });

        // Adiciona a sprite Dove
        var dove = this.physics.add.sprite(1800, 400, 'doveC').setScale(0.05, 0.05);
        dove.setCollideWorldBounds(true);
        this.physics.add.collider(dove, piso);
        dove.setBounce(1);

        // Quando o personagem pega o objeto dove ele some
        this.physics.add.overlap(dove, this.lev, () => {
            dove.setVisible(false); 
            dove.disableBody(true, true); 
            this.pontuacao += 1; // Aumentar a pontuação
        });

        // Adiciona a sprite Hellmans
        var hellmans = this.physics.add.sprite(2970, 400, 'hellmansC').setScale(0.05, 0.05);
        hellmans.setCollideWorldBounds(true);
        this.physics.add.collider(hellmans, piso);
        hellmans.setBounce(1);

        // Quando o personagem pega o objeto Hellmans ele some
        this.physics.add.overlap(hellmans, this.lev, () => {
            hellmans.setVisible(false); 
            hellmans.disableBody(true, true); 
            this.pontuacao += 1; // Aumentar a pontuação
        });

        // Adiciona a sprite Knor
        var knor = this.physics.add.sprite(2200, 400, 'knorC').setScale(0.05, 0.05);
        knor.setCollideWorldBounds(true);
        this.physics.add.collider(knor, piso);
        knor.setBounce(1);

        // Quando o personagem pega o objeto Knor ele some
        this.physics.add.overlap(knor, this.lev, () => {
            knor.setVisible(false); 
            knor.disableBody(true, true); 
            this.pontuacao += 1; // Aumentar a pontuação
        });

        // Criação de uma animação de loop para a sprite
        this.anims.create({
         key: 'knorLoop', // Nome da animação
         frameRate: 4, // Taxa de quadros por segundo
            frames: this.anims.generateFrameNumbers('knorC', { start: 0, end: 1 }), // Quadros da animação
            repeat: -1 // -1 para loop infinito
        });
     knor.anims.play('knorLoop', true);

     // Adiciona a sprite Omo ao jogo
     var omo = this.physics.add.sprite(1000, 400, 'omoC').setScale(0.05, 0.05);
        omo.setCollideWorldBounds(true);
        this.physics.add.collider(omo, piso);
        omo.setBounce(1);

        // Quando o personagem pega o objeto Omo ele some
        this.physics.add.overlap(omo, this.lev, () => {
            omo.setVisible(false); 
            omo.disableBody(true, true); 
            this.pontuacao += 1; // Aumentar a pontuação
        });

        // Criação de uma animação de loop para a sprite
        this.anims.create({
         key: 'omoLoop', // Nome da animação
         frameRate: 4, // Taxa de quadros por segundo
            frames: this.anims.generateFrameNumbers('omoC', { start: 0, end: 1 }), // Quadros da animação
            repeat: -1 // -1 para loop infinito
        });
     omo.anims.play('omoC', true);

     // Adicionando a sprite do Rexona ao jogo
     var rexona = this.physics.add.sprite(2600, 400, 'rexonaC').setScale(0.05, 0.05);
        rexona.setCollideWorldBounds(true);
        this.physics.add.collider(rexona, piso);
        rexona.setBounce(1);

        // Quando o personagem pega o rexona 
        this.physics.add.overlap(rexona, this.lev, () => {
            rexona.setVisible(false); 
            rexona.disableBody(true, true); 
            this.pontuacao += 1; // Aumentar a pontuação
        });

        // Criação de uma animação de loop para a sprite
        this.anims.create({
         key: 'rexonaLoop', // Nome da animação
         frameRate: 4, // Taxa de quadros por segundo
            frames: this.anims.generateFrameNumbers('rexonaC', { start: 0, end: 1 }), // Quadros da animação
            repeat: -1 // -1 para loop infinito
        });
     rexona.anims.play('rexonaC', true);

     var cif = this.physics.add.sprite(500, 400, 'cifC').setScale(0.12, 0.12);
     cif.setCollideWorldBounds(true);
     this.physics.add.collider(cif, piso);
     cif.setBounce(1);

     this.physics.add.overlap(cif, this.lev, () => {
         cif.setVisible(false); 
         cif.disableBody(true, true); 
         this.pontuacao += 1; // Aumentar a pontuação
     });

     var closeup = this.physics.add.sprite(3500, 400, 'closeupC').setScale(0.18, 0.18);
     closeup.setCollideWorldBounds(true);
     this.physics.add.collider(closeup, piso);
     closeup.setBounce(1);

     this.physics.add.overlap(closeup, this.lev, () => {
         closeup.setVisible(false); 
         closeup.disableBody(true, true); 
         this.pontuacao += 1; // Aumentar a pontuação
     });
     this.pontuacaoText = this.add.text(16, 16, 'Itens coletados: 0', { fontSize: '32px', fill: '#000' });
    
     // Adiciona o dicionário à hud
     this.dicionarioHud = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0)
    }

    update(){
        //Ativação da movimentação do personagem na cena
        this.lev.movimentos(this);
        this.interacaoNPC(this.lev,this.NPC);

        this.pontuacaoText.setText('Itens coletados: ' + this.pontuacao);

        // Atualize a posição do texto para coincidir com a posição do personagem
        this.pontuacaoText.x = this.cameras.main.scrollX + 16;
        this.pontuacaoText.y = this.cameras.main.scrollY + 16;

        this.lev.affordance(this.lev, this.letraE)

        this.distancia = Phaser.Math.Distance.Between(
            this.lev.x, this.lev.y,
            this.letraE.x, this.letraE.y
        );

        this.lev.teclas.e.on("down", function () {
            if (this.distancia < 300) {
                this.cameras.main.fadeOut(1000, 0, 0)
                setTimeout(() => {
                    this.scene.start('creditos')
                    centroDeEventos.emit('iniciarCreditos')
                    this.scene.stop()
                }, 1000)
            }
        }, this);

     }

    // Adiciona balão de fala e falas do NPC
    interacaoNPC(personagem, npc) {
        // Lógica utilizada para o surgimento das falas do NPC
        if (personagem.x >= npc.x - 125 && this.contador == 0) {
            var balao = this.add.image(4715, 430, 'balaoFala').setScale(1.8).setFlip(true, false);
            let fala1 = this.add.text(4682, 360, 'Parabéns!', {
                fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 430 }
            }).setOrigin(0.5); // Centraliza vertical e horizontalmente
    
            var fala2, fala3, fala4;
            this.contador++; // Adiciona um ao contador, para que o balão de fala apareça apenas uma vez

    
            setTimeout(() => {
                fala1.destroy(); // Destrói a fala anterior
                fala2 = this.add.text(4682, 360, 'Parece que você conseguiu completar os desafios', {
                    fontFamily: 'Open Sans',
                    fontSize: 28,
                    color: '#000000',
                    align: 'center', // Centraliza o texto horizontalmente
                    wordWrap: { width: 430 }
                }).setOrigin(0.5); // Centraliza vertical e horizontalmente
    
                setTimeout(() => {
                    fala2.destroy();
                    fala3 = this.add.text(4682, 360, 'e agora pode oficialmente ser um funcionário da UniOps.', {
                        fontFamily: 'Open Sans',
                        fontSize: 28,
                        color: '#000000',
                        align: 'center', // Centraliza o texto horizontalmente
                        wordWrap: { width: 430 }
                    }).setOrigin(0.5); // Centraliza vertical e horizontalmente
    
                    setTimeout(() => {
                        fala3.destroy();
                        fala4 = this.add.text(4682, 360, 'Aproveite sua jornada na empresa!', {
                            fontFamily: 'Open Sans',
                            fontSize: 28,                            
                            color: '#000000',
                            align: 'center', // Centraliza o texto horizontalmente
                            wordWrap: { width: 430 }
                        }).setOrigin(0.5); // Centraliza vertical e horizontalmente
    
                        setTimeout(() => {
                            fala4.destroy();
                            balao.destroy(); // Faz com que o balão de fala desapareça ao fim da interação
                        }, 3000)
                    }, 3000)
                }, 3000) // Define o tempo de exibição de cada fala

            }, 3000)
        }
    }

}