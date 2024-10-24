// importando as classes que serão implementadas no level
import lev from "../entities/lev.js";
import checkpoint from '../entities/checkpoint.js';
import moeda from "../entities/moeda.js";
import vidasCount from "../entities/vidasCount.js";
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

// Criando a classe do level, que herda a classe pai 'Phaser.Scene'
export class Level1 extends Phaser.Scene {
    
    // O contrutor da classe irá se referir a essa classe como "Level1"
    constructor() {
        super({ key: "Level1" });
        this.vidasRestantes = 3;
        this.isColliding = null;
        this.lev = null;
        this.cont = 0;
        this.execute = false;
        this.emit = false;
    };

    create() {     
        // configuração das cameras na transição de cena
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        
        // Adiciona a hud ao level
        this.scene.launch('hud')

        // Implanta o funcionamento da moeda no level
        moeda.texto = null
        moeda.pontuacao = 0
        /* Adiciona o background da cena*/
        this.add.image(1632, 1280, 'bg_fase1');
        /*contém os elementos visíveis na cena, porém que não colidem ou
         interagem diretamente com o personagem*/
        this.add.image(1632, 1280, 'marcas_fase1');

        // Implanta o funcionamento da tecla "x" no mapa, que irá abrir o dicionário.
        this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
            this.x.on('down', () => {
                this.scene.pause()
                this.scene.launch('dicionario', { previousScene: this.scene.key })
            })


        // adiciona imagem da letra E que será utilizada com botão para ir para outras cenas
        this.letraE = this.add.image(1744, 1950, 'letraE').setScale(0.7);

        /* Criação do mapa, utilizando o arquivo JSON carreagado na função preload. a parte da cena que colide e interage diretamente
        com o jogador. Para isso, usamos o arquivo de construção de mapas, o Tiled */
        this.map = this.make.tilemap({key: 'level1'});

        /*Adiciona conjunto de textura do chão da do level 1 */                                                
        var tilesetPiso = this.map.addTilesetImage ('Terrain (16 x 16)', 'ground_fase1');
        
        // Adiciona o tileset do elevador ao jogo 
        var tilesetElevador = this.map.addTilesetImage ('tileset_elevator', 'elevadores');

        // Implemente efetivamente a camada de blocos ao jogo
        var piso = this.map.createLayer('Blocos', [tilesetPiso, tilesetElevador], 0, 0);
        
        // Cria um checkpoint, com suas respectivas funcionalidades e animações.
        this.checkpoint = new checkpoint(this, 3030, 1070, 'checkpoint');
        this.checkpoint.criarAnimacao(this);
        this.checkpoint.adicionarPlaca(this);
        
        // cria novo personagem lev nesta cena
        this.lev = new lev(this, 300, 2300, 'lev');
        // Adiciona a sprite do personagem ao arquivo
        this.lev.adicionarSprite(this);
        // Cria a animação do personagem com suas sprites
        this.lev.criarAnimacao(this);

        // Define os limites da página.
        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) 
       
        /* ativa-se uma propriedade que os blocos possuem: a de colisão. Isso permite que o personagem
        possa colidir fisicamente com eles */                                                                                        
        this.map.setCollisionByProperty({collider: true});
        this.physics.add.collider(this.lev, piso);

        // Adiciona colisão entre o checkpoint e o chão
        this.physics.add.collider(this.checkpoint, piso)
        
        /* Configura-se a câmera para seguir o jogador e para não passar dos limites do mundo */                                            
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.lev)
        
        // Faz com que a classe plataforma seja trasnformado em um grupo físico, que contém física
        this.mPLatforms = this.physics.add.group({
            allowGravity: false
        })

         /* define a váriavel mPlatform (as plataformas móveis) e configura tamanho, local
          e velocidade com que elas se movem*/
         let mPLatform = this.mPLatforms.create(870, 1400, 'plataforma_1')
         mPLatform.body.immovable = true;
         mPLatform.speed = 1.5
         mPLatform.minY = 1250
         mPLatform.maxY = 1550

         mPLatform = this.mPLatforms.create(670, 900, 'plataforma_1')
         mPLatform.body.immovable = true;
         mPLatform.speed = 1.5
         mPLatform.minY = 820
         mPLatform.maxY = 1050
         

         // configura a colisão entre o lev e a plataforma.
        this.physics.add.collider(this.lev, this.mPLatforms, this.plataformaMovendoCoisas);
        
        //Implementando a fução da tecla ESC ativar o pause
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.pause()
            this.scene.launch('pause', { previousScene: this.scene.key })
            
        })

        // Adiciona a hud a cena
        this.hud = this.scene.get('hud')
        this.hud.renderizadorHud(this)

        // Adiciona o contador de vida à cena
        this.vidas = new vidasCount(this, this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.1, 'vidas3').setScale(.08)
        this.add.existing(this.vidas)
        
        // Definindo as posições que as moedas serão adicionadas no mapa.
        const posicoesMoedas = [
            { x: 192, y: 962 },
            { x: 380, y: 835.5 },
            { x: 420, y: 1760 },
            { x: 485, y: 1170 },
            { x: 715, y: 300 },
            { x: 785, y: 360 },
            { x: 855, y: 420 },
            { x: 864, y: 2070 },
            { x: 890, y: 1740 },
            { x: 1143, y: 300 },
            { x: 1143, y: 732.5 },
            { x: 1695, y: 1450 },
            { x: 1695, y: 1600 },
            { x: 1695, y: 1750 },
            { x: 1936, y: 375 },
            { x: 2231, y: 1218 },
            { x: 2556, y: 1282 },
            { x: 2727, y: 320 },
            { x: 2756, y: 1150 },
            { x: 2795, y: 360 },
            { x: 2860, y: 420 },
            { x: 2910, y: 495 },
            { x: 2970, y: 570 },
            { x: 3030, y: 660 }
        ];
        
        
        // Implementa as moedas ao mapa com as posições definidas
        posicoesMoedas.forEach(posicao => {
            const moedas = new moeda(this, posicao.x, posicao.y, 'moeda')
            moedas.spawnMoedas(this, this.lev, this.piso)
        });

        // Salva a posição do lev no checkpoint
        this.lev.salvar(this, this.checkpoint, this.lev);

        // Adiciona o ícone do dicionário na hud do jogo
        this.dicionarioHud = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0)

        // Definindo a função de morte do personagem 
        centroDeEventos.on('Morre', this.Morre, this)

        centroDeEventos.on('gameOver', () => {
            this.emit = true;
        })
    }

    // Método que move a plataforma
    moverPlataforma (p){
        if (p.y < p.minY || p.y > p.maxY ){
            p.speed *= -1
        }
        p.y += p.speed
    }
    // Outro método de mover plataforma
    plataformaMovendoCoisas(lev, plat){
        lev.y += plat.speed
    }

    // Método de interação do personagem com o quiz 
    interacaoQuiz(){
        if(this.lev.x < 1940 && this.lev.x > 1900 && this.lev.y > 1000 && this.cont == 0){
            this.cont += 1
            this.scene.pause()
            this.scene.launch('cenaQuiz1', { previousScene: this.scene.key })
        }
    }

    update() {
        // Atualiza as mecânicas de movimentação do personagem
        this.lev.movimentos(this);

        // Atualiza as de movimentações das plataformas
        this.mPLatforms.children.iterate(plat => {
            this.moverPlataforma(plat);
        });

        // Mede a distância que o leve está de um ponto específico ( a letra E, nesse caso) 
        var distancia = Phaser.Math.Distance.Between(
            this.lev.x, this.lev.y,
            this.letraE.x, this.letraE.y
        );

        // Quando a tecla e for pressionada no elevador final, ele volta para a cena 2
        this.lev.teclas.e.on("down", function () {
            if (distancia < 300) {
                this.scene.start('Cena2');
                centroDeEventos.emit('level1_Finalizado')
                this.scene.stop()
            }
        }, this);

        // Analisa se a distância entre o ponto da letra E é pequena o suficiente para que ela seja exibida
        if (distancia < 300) {
            this.letraE.setVisible(true);
        } else {
            this.letraE.setVisible(false);
        }

        // Marca as vidas perdidas
        this.vidas.perdeuVida(this)

        // Cria uma variável para quando o personagem cair nos abismos, ele morrer
        if (this.lev.y >= 2496) {
            this.Morre()
        }
        this.interacaoQuiz() 

        if (this.emit === true) {
            centroDeEventos.emit('Level1', 'Level1')
        }
    };

    // método de quando a letra e for pressionada no elevador, o personagem irá voltar à cena 2
    entrar() {
        if (this.lev.teclas.e.on("down")){
            this.trasicao();
        }
    }

    // método de morte do personagem
    Morre() { //função para que se o personagem "morrer", volta a posição (320,1100)
        this.lev.salvarPosicao (this);
        this.vidas.morreu(this);
    }

    // método que cria a transição entre cenas
    trasicao() { // função de transição entre as cenas
        this.cameras.main.fadeOut(3000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    }
    
    // método de voltar à cena 2
    comecarProximaCena() {
        this.scene.start("Cena2");
        this.scene.stop()
    }
};

