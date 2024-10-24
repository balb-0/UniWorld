// importa diferentes classes que irão ser utilizadas neste arquivo
import lev from "../entities/lev.js";
import checkpoint from '../entities/checkpoint.js';
import moeda from "../entities/moeda.js";
import vidasCount from "../entities/vidasCount.js";
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";


export class Level3 extends Phaser.Scene {
    
    // A cena utiliza a chave "Level 3"
    constructor () {
        super({key: 'Level3'});
        this.vidasRestantes = 3
        this.cont = 0
        this.emit = false;
    };

    create () {
        // Imagem do background da cena
        this.add.image(1824, 1216, 'bg3');
         /*contém os elementos visíveis na
        cena, porém que não colidem nem interagem diretamente com o personagem*/
        this.add.image(1824, 1216, 'objetos3');
        this.letraE = this.add.image(3521, 2232, 'letraE').setScale(0.7);// affordance letra E
        this.scene.launch('hud') // HUD

        moeda.texto = null
        moeda.pontuacao = 0

       
        /* Criação do mapa, utilizando o arquivo JSON carreagado na função preload. a parte da cena que colide e interage diretamente
        com o jogador. Para isso, usamos o arquivo de construção de mapas, o Tiled */
        this.map = this.make.tilemap({key: 'level3'});

      /*conjunto de texturas que o mapa irá utilizar para compor a cena e a camada em que esse conjunto
        está localizado no programa */
        var tilesetPiso1 = this.map.addTilesetImage ('ground3', 'ground3_1');
        var tilesetPiso2 = this.map.addTilesetImage ('ground2', 'ground3_2');
        var tilesetPiso3 = this.map.addTilesetImage ('ground4', 'ground3_3')

        // Cria uma camada
        var piso = this.map.createLayer('ground', [tilesetPiso1, tilesetPiso2, tilesetPiso3], 0, 0);
        
        // Adiciona um checkpoint
        this.checkpoint = new checkpoint(this, 2900, 1190, 'checkpoint');
        this.checkpoint.criarAnimacao(this);
        this.checkpoint.adicionarPlaca(this);
        
        // Adiciona o personagem principal ao mapa
        this.lev = new lev(this, 300, 1610, 'lev').setDepth(0)
        this.lev.adicionarSprite(this);
        this.lev.criarAnimacao(this);

        // Adiciona os limites da página
        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) 

        /* ativa-se uma propriedade que os blocos possuem: a de colisão. Isso permite que o personagem
        possa colidir fisicamente com eles */
        this.map.setCollisionByProperty({collider: true});
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
        this.mPLatforms1 = this.physics.add.group({
            allowGravity: false
        })
        
        // cria as plataformas e suas propriedades
        let mPLatform = this.mPLatforms.create(2600, 2000, 'plataforma_hellmans').setScale(1, 2)
        mPLatform.body.immovable = true;
        mPLatform.speed = 3.5
        mPLatform.minX = 2400
        mPLatform.maxX = 2750
        
        //[...]
        mPLatform = this.mPLatforms.create(550, 900, 'plataforma_tijolos').setScale(1, 2)
        mPLatform.body.immovable = true;
        mPLatform.speed = 2
        mPLatform.minX = 500
        mPLatform.maxX = 650
        
        //[...]
        mPLatform = this.mPLatforms1.create(2300, 600, 'plataforma_tijolos').setScale(0.5, 2)
        mPLatform.body.immovable = true;
        mPLatform.speed = 1.5
        mPLatform.minY = 350
        mPLatform.maxY = 650
        
        // Adiciona colisão entre o Lev e as plataformas
        this.physics.add.collider(this.lev, this.mPLatforms, this.plataformaMovendoCoisas);
        this.physics.add.collider(this.lev, this.mPLatforms1, this.plataformaMovendoCoisas1)
        
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

        
        // Adição das moedas ao mapa
        const posicoesMoedas = [
            { x: 175, y: 834 },
            { x: 384, y: 642 },
            { x: 403, y: 995 },
            { x: 576, y: 520 },
            { x: 620, y: 1504 },
            { x: 710, y: 1504 },
            { x: 800, y: 1504 },
            { x: 886, y: 1052 },
            { x: 1025, y: 500 },
            { x: 1027, y: 1416 },
            { x: 1132, y: 1240 },
            { x: 1695, y: 480 },
            { x: 1925, y: 2075 },
            { x: 2017, y: 1474 },
            { x: 2113, y: 1696 },
            { x: 2175, y: 1304 },
            { x: 2175, y: 2050 },
            { x: 2250, y: 1995 },
            { x: 2264, y: 192 },
            { x: 2295, y: 1940 },
            { x: 2318, y: 1865 },
            { x: 2467, y: 1282 },
            { x: 2750, y: 233 },
            { x: 3000, y: 1795 },
            { x: 3042, y: 1088 },
            { x: 3050, y: 280 },
            { x: 3340, y: 320 },
            { x: 3585, y: 370 },
            { x: 3594, y: 770 }
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
    
    // Movimentação da plataforma móvel
    moverPlataforma (p){
        if (p.x < p.minX || p.x > p.maxX ){
            p.speed *= -1
        }
        p.x += p.speed
    }

    // Movimentação da plataforma móvel
    moverPlataforma1 (p){
        if (p.y < p.minY || p.y > p.maxY ){
            p.speed *= -1
        }
        p.y += p.speed
    }
    // Plataforma móvel movendo outros objetos
    plataformaMovendoCoisas(lev, plat){
        lev.x += plat.speed
    }
    // Plataforma móvel movendo outros objetos
    plataformaMovendoCoisas1(lev, plat){
        lev.y += plat.speed
    }

    // Método de interação com o Quiz
    interacaoQuiz(){
        if(this.lev.x < 2900 && this.lev.x > 2700 && this.lev.y > 1000 && this.cont == 0){
            this.cont += 1
            this.scene.pause()
            this.scene.launch('cenaQuiz3', { previousScene: this.scene.key })
        }
    }

    update() {

        // Movimentação do personagem
        this.lev.movimentos(this);

        // Movimentação das plataformas móveis
        this.mPLatforms.children.iterate(plat => {
            this.moverPlataforma(plat);
        });
        this.mPLatforms1.children.iterate(plat => {
            this.moverPlataforma1(plat)
        });

        // Morte do personagem
        if (this.lev.y >= 2368) {
            this.Morre()
        }

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
                centroDeEventos.emit('level3_Finalizado')
                this.scene.stop()
            }
        }, this);

        // Distância para ver se o affordance da letra "e" será visível ou não será
        if (distancia < 300) {
            this.letraE.setVisible(true);
        } else {
            this.letraE.setVisible(false);
        };

        // Método para o personagem principal perder vidas
        this.vidas.perdeuVida(this.vidas)

        // Método de interação com o Quiz
        this.interacaoQuiz()

        if (this.emit === true) {
            centroDeEventos.emit('Level3', 'Level3')
        }

    };

    Morre () {
        //função para que se o personagem "morrer", volta a posição (320,1100)
        this.lev.salvarPosicao(this);
        this.vidas.morreu(this);
    }

    // Método que irá iniciar a transição entre cenas
    entrar() {
        if (this.lev.teclas.e.on("down")){
            this.trasicao();
        }
    };

    // Método de transição entre cenas
    trasicao() { // função de transição entre as cenas
        this.cameras.main.fadeOut(3000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    };

    // Método que muda para a próxima cena
    comecarProximaCena() {
        this.scene.start("Cena2");
        this.scene.stop()
    };
}

