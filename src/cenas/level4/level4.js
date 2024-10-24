// importa diferentes classes que irão ser utilizadas neste arquivo

import lev from "../entities/lev.js";
import checkpoint from '../entities/checkpoint.js';
import moeda from "../entities/moeda.js";
import vidasCount from "../entities/vidasCount.js";
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

export class Level4 extends Phaser.Scene {
    // A cena utiliza a chave "Level4"
    constructor () {
        super({key: 'Level4'});
        this.letraE = null;
        this.vidasRestantes = 3
        this.emit = false;
        this.cont = 0;
    };

    create () {
       // Imagem do background da cena
        this.add.image(2240, 1024, 'bg5');
        /*contém os elementos visíveis na
        cena, porém que não colidem nem interagem diretamente com o personagem*/
        this.add.image(2240, 1024, 'objetos5');
        this.letraE = this.add.image(4290, 128, 'letraE').setScale(0.7); // affordance letra E
        this.scene.launch('hud')// HUD

        moeda.texto = null
        moeda.pontuacao = 0

        /* Criação do mapa, utilizando o arquivo JSON carreagado na função preload. a parte da cena que colide e interage diretamente
        com o jogador. Para isso, usamos o arquivo de construção de mapas, o Tiled */
        this.map = this.make.tilemap({key: 'level4'});
        
        /*conjunto de texturas que o mapa irá utilizar para compor a cena e a camada em que esse conjunto
        está localizado no programa */
        var tilesetPiso = this.map.addTilesetImage ('BocosNeve', 'ground5');
        var piso = this.map.createLayer('ground', tilesetPiso, 0, 0);
        var espinhos = this.map.createLayer('spikes', tilesetPiso, 0, 0);
        
        // Adiciona a função do checkpoint ao mapa
        this.checkpoint = new checkpoint(this, 2300, 430, 'checkpoint');
        this.checkpoint.criarAnimacao(this);
        this.checkpoint.adicionarPlaca(this);

         // Adciona o personagem pricipal à cena (chama a função dele)
        this.lev = new lev(this, 250, 1600, 'lev').setDepth(0)
        this.lev.adicionarSprite(this);
        this.lev.criarAnimacao(this);
        
        this.add.image(2240, 1024, 'sup').setDepth(1)
        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) /* define-se,
        de fato,
        os limites
        da página */
        
        /* ativa-se uma propriedade que os blocos possuem: a de colisão. Isso permite que o personagem
        possa colidir fisicamente com eles */
        this.map.setCollisionByProperty({collider: true}, true, false, espinhos);
        this.map.setCollisionByProperty({collider: true}, true, false, piso);
        this.physics.add.collider(this.lev, espinhos, this.Morre, null, this);
        this.physics.add.collider(this.lev, piso);
        
        // Adição de colisão entre o piso e o checkpoint
        this.physics.add.collider(this.checkpoint, piso)

        /* configura-se a câmera para seguir o jogador e para não passar dos limites do mundo */
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.lev)

        // Adiciona física à platafoma
        this.mPLatforms = this.physics.add.group({
            allowGravity: false
        })

        // cria a plataformas e suas propriedades
        let mPLatform = this.mPLatforms.create(1500, 1600, 'plataforma_neve').setScale(0.3, 1)
        mPLatform.body.immovable = true;
        mPLatform.speed = 2
        mPLatform.minX = 1400
        mPLatform.maxX = 1600

        // Adiciona colisão entre o Lev e a plataformas
        this.physics.add.collider(this.lev, this.mPLatforms, this.plataformaMovendoCoisas);
        
        // Adiciona a função de quando a tecla esc for pressionada, o jogo será pausado
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.pause()
            this.scene.launch('pause', { previousScene: this.scene.key })
        })

        // Adiciona a função de quando a tecla x for pressionada, o diconário será aberto
        this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
        this.x.on('down', () => {
            this.scene.pause()
            this.scene.launch('dicionario', { previousScene: this.scene.key })
        })

        // Renderiza a HUD na cena
        this.hud = this.scene.get('hud')
        this.hud.renderizadorHud(this)

        // Adiciona o contador de vida à cena
        this.vidas = new vidasCount(this, this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.1, 'vidas3').setScale(.08)
        this.add.existing(this.vidas)

         //Adicionado moepas ao mapa
         const posicoesMoedas = [
            { x: 620, y: 1504 },
            { x: 630, y: 860 },
            { x: 630, y: 719 },
            { x: 984, y: 1059 },
            { x: 1362, y: 1418 },
            { x: 1409, y: 410 },
            { x: 1812, y: 1113 },
            { x: 1814, y: 393 },
            { x: 1897, y: 391 },
            { x: 1964, y: 438 },
            { x: 2048, y: 514 },
            { x: 2170, y: 1247 },
            { x: 2498, y: 320 },
            { x: 3023, y: 259 },
            { x: 3420, y: 171 },
            { x: 3925, y: 175 }
        ];        
        
        // Posiciona as moedas no mapa
        posicoesMoedas.forEach(posicao => {
            const moedas = new moeda(this, posicao.x, posicao.y, 'moeda')
            moedas.spawnMoedas(this, this.lev, this.piso)
        });

          // salva a localização do último checkpoint pego pelo Lev
        this.lev.salvar(this, this.checkpoint, this.lev)

         // Adiciona o ícone do dicionário à HUD
         this.dicionarioHud = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0)

         this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
            this.x.on('down', () => {
                this.scene.pause()
                this.scene.launch('dicionario', { previousScene: this.scene.key })
            })

        centroDeEventos.on('gameOver', () => {
            this.emit = true;
        })

        centroDeEventos.on('Morre', this.Morre, this)
    }
   
    // Método de interação com o Quiz
    interacaoQuiz(){
        if(this.lev.x > 4000 && this.cont === 0){
            this.cont += 1
            this.scene.pause()
            this.scene.launch('cenaQuiz4', { previousScene: this.scene.key })
        }
    }

    // Movimentação da plataforma móvel
    moverPlataforma (p){
        if (p.x < p.minX || p.x > p.maxX ){
            p.speed *= -1
        }
        p.x += p.speed
    }

    // Plataforma móvel movendo outros objetos
    plataformaMovendoCoisas(lev, plat){
        lev.x += plat.speed
    }

    update() {

        // Movimentação do personagem
        this.lev.movimentos(this);

        this.mPLatforms.children.iterate(plat => {
            this.moverPlataforma(plat);
        });
        
        // Distância entre e personagem e um certo ponto do elevador
        var distancia = Phaser.Math.Distance.Between(
            this.lev.x, this.lev.y,
            this.letraE.x, this.letraE.y
        );

        /* Quando o jogador pressionar a tecla "e" próximo a um certo ponto,
         a próxima cena será iniciada */
        this.lev.teclas.e.on("down", function () {
            // console.log(this.lev.x, this.lev.y)
            if (distancia < 300) {
                this.scene.start('Cena2');
                centroDeEventos.emit('level4_Finalizado')
                this.scene.stop()
            }
        }, this);

        // Distância para ver se o affordance da letra "e" será visível ou não será
        if (distancia < 300) {
            this.letraE.setVisible(true);
        } else {
            this.letraE.setVisible(false);
        }

        // Método para o personagem principal perder vidas
        this.vidas.perdeuVida(this.vidas)

        if (this.emit === true) {
            centroDeEventos.emit('Level4', 'Level4')
        }

        this.interacaoQuiz()
    }

    Morre() { //função para que se o personagem "morrer", volta a posição (320,1100)
        this.lev.salvarPosicao(this);
        this.vidas.morreu(this);
    };

    // Método que irá iniciar a transição entre cenas
    entrar() {
        if (this.lev.teclas.e.on("down")){
            this.trasicao();
        }
    }

    // Método de transição entre cenas
    trasicao() { // função de transição entre as cenas
        this.cameras.main.fadeOut(3000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    }
    // Método que muda para a próxima cena
    comecarProximaCena() {
        this.scene.start("Cena2");
        this.scene.stop()
    }
};

