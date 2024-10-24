// importa diferentes classes que irão ser utilizadas neste arquivo
import lev from "../entities/lev.js";
import checkpoint from '../entities/checkpoint.js';
import moeda from "../entities/moeda.js";
import vidasCount from "../entities/vidasCount.js";
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

export class Level2 extends Phaser.Scene {
    
    // A cena utiliza a chave "Level2"
    constructor() {
        super({ key: "Level2" });
        this.lev = null; // personagem principal
        this.teclas = null
        this.letraE = null
        this.vidasRestantes = 3
        this.cont = 0
        this.emit = false;
    };

    create () {

        // Imagem do background da cena
        this.add.image(1952, 1120, 'fundo');
        /*contém os elementos visíveis na
        cena, porém que não colidem nem interagem diretamente com o personagem*/
        this.add.image(1952, 1120, 'decoração');
        this.letraE = this.add.image(1920, 1650, 'letraE').setScale(0.7); // affordance letra E
        this.scene.launch('hud') // HUD

        moeda.texto = null
        moeda.pontuacao = 0
        

        
        /* Criação do mapa, utilizando o arquivo JSON carreagado na função preload. a parte da cena que colide e interage diretamente
        com o jogador. Para isso, usamos o arquivo de construção de mapas, o Tiled */
        this.map = this.make.tilemap({key: 'level2' });

        /*conjunto de texturas que o mapa irá utilizar para compor a cena e a camada em que esse conjunto
        está localizado no programa */
        var tilesetPiso = this.map.addTilesetImage ('azul', 'chao');
        var chao = this.map.createLayer('chao', tilesetPiso, 0, 0);
        var chao_marrom = this.map.createLayer('chao_marrom', tilesetPiso, 0, 0);

        // Adciona o personagem pricipal à cena (chama a função dele)
        this.lev = new lev(this, 330, 260, 'lev');
        this.lev.adicionarSprite(this);
        this.lev.criarAnimacao(this);

        // Adição de moedas ao mapa
        const posicoesMoedas = [
            { x: 970, y: 278 },
            { x: 1515, y: 325 },
            { x: 1950, y: 720 },
            { x: 2000, y: 512 },
            { x: 2100, y: 540 },
            { x: 2200, y: 578 },
            { x: 2420, y: 1715 },
            { x: 2470, y: 900 },
            { x: 2546, y: 520 },
            { x: 2980, y: 1100 },
            { x: 2993, y: 1565 },
            { x: 3370, y: 1235 }
        ];
        
        // função de posicionar moedas
        posicoesMoedas.forEach(posicao => {
            const moedas = new moeda(this, posicao.x, posicao.y, 'moeda')
            moedas.spawnMoedas(this, this.lev, this.piso)
        });
      
        // Função que adiciona a HUD à cena
        this.dicionarioHud = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0)

        // Adiciona a função de quando a letra x for pressionada, o dicionário ira ser aberto
        this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
            this.x.on('down', () => {
                this.scene.pause()
                this.scene.launch('dicionario', { previousScene: this.scene.key })
            })

        //criação de checkpoints
        this.checkpoint = new checkpoint(this, 2760, 900, 'checkpoint');
        this.checkpoint.criarAnimacao(this);
        this.checkpoint.adicionarPlaca(this);
        this.checkpoint1 = new checkpoint(this, 2725, 1600, 'checkpoint');
        this.checkpoint1.criarAnimacao(this);
        this.checkpoint1.adicionarPlaca(this);
            
        // Salva a posição do Lev quando ele passa pelo checkpoint 
       this.lev.salvar(this, this.checkpoint, this.lev);
       this.lev.salvar(this, this.checkpoint1, this.lev);
     
  
        // adiciona limites do jogo 
        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) 

        /* ativa-se uma propriedade que os blocos possuem: a de colisão. Isso permite que o personagem
        possa colidir fisicamente com eles */
        this.map.setCollisionByProperty({collider: true}, true, false, chao);
        this.map.setCollisionByProperty({collider: true}, true, false, chao_marrom);
        this.physics.add.collider(this.lev, chao); 
        // Mantém-se a lógica do comentário acima, mas se o personagem encostar nesse tipo de bloco ele perderá uma vida
        this.physics.add.collider(this.lev, chao_marrom, this.Morre, null, this)
        
        // adicionada física de colisão entre o checkpoint e o chão
        this.physics.add.collider(this.checkpoint, chao);
        this.physics.add.collider(this.checkpoint1, chao);

        /* configura-se a câmera para seguir o jogador e para não passar dos limites do mundo */
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.lev)

        // define o grupo das plataformas móveis e tira a ação da gravidade sobre ela
        this.mPLatforms = this.physics.add.group({
            allowGravity: false
        })

        // define a váriavel mPlatform (as plataformas móveis) e configura tamanho, local e velocidade
        let mPLatform = this.mPLatforms.create(2100, 920, 'plataforma_gelo').setScale(1, 0.5)
        mPLatform.body.immovable = true;
        mPLatform.speed = 3.5
        mPLatform.minX = 2000
        mPLatform.maxX = 2200

        //[...]
        mPLatform = this.mPLatforms.create(3500, 1370, 'plataforma_gelo').setScale(0.5,0.5)
        mPLatform.body.immovable = true;
        mPLatform.speed = 2.5
        mPLatform.minX = 3300
        mPLatform.maxX = 3620

        //[...]
        mPLatform = this.mPLatforms.create(2300, 1800, 'plataforma_gelo').setScale(0.4,0.4)
        mPLatform.body.immovable = true;
        mPLatform.speed = 4
        mPLatform.minX = 2150
        mPLatform.maxX = 2500

        //[...]
        mPLatform = this.mPLatforms.create(3070, 410, 'plataforma_gelo').setScale(0.4,0.4)
        mPLatform.body.immovable = true;
        mPLatform.speed = 4
        mPLatform.minX = 2900
        mPLatform.maxX = 3100
        
        // configura a colisão entre o lev e a plataforma.
        this.physics.add.collider(this.lev, this.mPLatforms, this.plataformaMovendoCoisas);

        // Adiciona a função de pausar o jogo quanodo o esc for pressionado
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.launch('pause', { previousScene: this.scene.key })
        })

        // Renderiza o hud na cena
        this.hud = this.scene.get('hud')
        this.hud.renderizadorHud(this)

        // Adiciona o contador de vidas à cena
        this.vidas = new vidasCount(this, this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.1, 'vidas3').setScale(.08)
        this.add.existing(this.vidas)

        centroDeEventos.on('gameOver', () => {
            this.emit = true
        })
    
        centroDeEventos.on('Morre', this.Morre, this)
    }

    // método que que faz as plataformas móveis se movimentarem
    moverPlataforma (p){
        if (p.x < p.minX || p.x > p.maxX ){
            p.speed *= -1
        }
        p.x += p.speed
    }

    //método que que faz as plataformas móveis movimentarem outros objetos que estão sobre ela
    plataformaMovendoCoisas(lev, plat){
        lev.x += plat.speed
    }

    // Método que adiciona a interação do quiz para a fase
    interacaoQuiz(){
        if(this.lev.x < 2740 && this.lev.x > 2650 && this.lev.y > 1500 && this.cont == 0){
            this.cont += 1
            this.scene.pause()
            this.scene.launch('cenaQuiz2', { previousScene: this.scene.key })
        }
    }
    
    update() {

        // Adiciona as movimentações das mecânicas do personagem 
        this.lev.movimentos(this);

        // Movimentação das plataformas
        this.mPLatforms.children.iterate(plat => {
            this.moverPlataforma(plat);
        });

        // Verifica a distância do Lev ao affordance da letra "e" (e da efetiva mecânica de funcionamento) 
        var distancia = Phaser.Math.Distance.Between(
            this.lev.x, this.lev.y,
            this.letraE.x, this.letraE.y
        );

        // Metodo de ativação da letra e para que possa dar início a cena 2
        this.lev.teclas.e.on("down", function () {
            if (distancia < 300) {
                this.scene.start('Cena2');
                centroDeEventos.emit('level2_Finalizado')
                this.scene.stop()
            }
        }, this);

        // Se o personagem estiver em uma distância específica o afordance da letra "e" ficará visível
        if (distancia < 300) {
            this.letraE.setVisible(true);
        } else {
            this.letraE.setVisible(false);
        }

        // método de contagem de perdas de vida
        this.vidas.perdeuVida(this.vidas)

        // método de interação com o Quiz
        this.interacaoQuiz()

        if (this.emit === true) {
            centroDeEventos.emit('Level2', 'Level2')
        }

    };

    Morre () {
        //função para que se o personagem "morrer", volta a posição (320,1100)
        this.lev.salvarPosicao(this);
        this.vidas.morreu(this);
    }


    // método para ativar a trasição entre cenas
    entrar() {
        if (this.lev.teclas.e.on("down")){
            this.trasicao();
        }
    }

    trasicao() { // função de transição entre as cenas
        this.cameras.main.fadeOut(3000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    }

    // Começa a cena 2
    comecarProximaCena() {
        this.scene.start("Cena2");
        this.scene.stop()
    }
};

