// Importa várias classes que serão implementadas nessa cena.
import lev from "../entities/lev.js"; // classe do personagem
import checkpoint from '../entities/checkpoint.js'; // classe do checkpoint 
import moeda from "../entities/moeda.js"; // classe da moeda 
import vidasCount from "../entities/vidasCount.js"; // classe do contado de vidas
import NPC from "../entities/NPC.js" // classe do npc
import { music } from "../music/music.js" // classe da música
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

// definição da cena que será usada durante o desenvolvimento do jogo.
export class Cena1 extends Phaser.Scene {
// declaração de váriaveis de instância.
    map; // mapa do jogo.
    water; // água em que o personagem cai.
    elevator; // elevador para ir à outra cena.
    checkpoint; 
    vidasRestantes = 3
    contador = 0;

    
    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Nivel1".
    constructor() {
        super({ key: "Cena1" });
        this.lev = null // personagem principal.
        this.teclas = null
        this.letraE = null
        this.letraEnpc = null
        this.vidas = null
        this.NPC 
        this.playingSong = false
        this.menuSong = null
        this.distancia = null
        this.emit = false
    };

    // função create do phaser3 para atribuição de propriedades a elementos carregados na função anterior e definição de regras para o estilo de jogo escolhido pelo grupo.
    create () { 
        // adição da imagem de fundo da cena.
        this.add.image(4800, 640, 'background');
        // adição das imagem da camadas de objetos sobrepostos ao fundo da cena.
        this.add.image(4800, 640, 'objetos');
        // criação do mapa, utilizando o arquivo JSON carreagado na função preload.
        this.map = this.make.tilemap({key: 'map'});
        // adição do hud à cena.
        this.scene.launch('hud')

        
        // adição de tilesets ao mapa para os diferentes elementos criados.
        var tilesetCano = this.map.addTilesetImage ('cano', 'cano');
        var tilesetElevador = this.map.addTilesetImage ('tileset_elevator', 'elevador');
        var tilesetPlaca = this.map.addTilesetImage ('placa', 'placa');
        var tilesetWater = this.map.addTilesetImage ('water', 'otherBlocks');
        var tilesetPiso = this.map.addTilesetImage('ground', 'ground');
        
        // Atribui as variáveis de criação dos mapas.
        this.water = this.map.createLayer('water', tilesetWater, 0, 0);
        this.elevator = this.map.createLayer('elevator', tilesetElevador, 0, 0);
        
        // Cria as camadas no mapa, para possuirem uma melhor jogabilidade no mundo.
        this.piso = this.map.createLayer('ground', [tilesetPiso, tilesetCano, tilesetPlaca, tilesetWater], 0, 0);
        
        // Adiciona uma imagem representando a tecla "E" em uma posição específica na cena.
        this.letraE = this.add.image(9300, 800, 'letraE').setScale(0.7);
        // Adiciona uma imagem representando uma seta para baixo em uma posição específica na cena.
        this.down = this.add.image(520, 1000, 'down_arrow').setScale(1.3);
        // Adiciona uma imagem representando uma seta para cima em uma posição específica na cena.
        this.up = this.add.image(1400, 1000, 'up_arrow').setScale(1.3);
        // Adiciona uma imagem representando a indicação de "2x".
        this.double = this.add.image(4320, 950, '2x').setScale(1.3)
        // Adiciona uma imagem representando a barra de espaço.
        this.space = this.add.image(4950, 700, 'space').setScale(1.4)

        // Adiciona o checkpoint no primeiro local da cena.
        this.checkpoint = new checkpoint(this, 1300, 1000, 'checkpoint');
        this.checkpoint.criarAnimacao(this);
        this.checkpoint.adicionarPlaca(this);
        // Adiciona o checkpoint no segundo local da cena.
        this.checkpoint1 = new checkpoint(this, 4650, 670, 'checkpoint');
        this.checkpoint1.criarAnimacao(this);
        this.checkpoint1.adicionarPlaca(this);
        // Adiciona o checkpoint no terceiro local da cena.
        this.checkpoint2 = new checkpoint(this, 5800, 0, 'checkpoint');
        this.checkpoint2.criarAnimacao(this);
        this.checkpoint2.adicionarPlaca(this);

        // Adição do NPC no mapa.
        this.NPC = new NPC(this, 9010, 1002, 'NPC').setScale(3);
        this.NPC.animaçãoPersonagem(this)
        this.NPC.adicionarPersonagem(this, this.piso)
        
        /* adiciona e configura o personagem principal (lev) e suas animações.*/
        this.lev = new lev(this, 300, 1100)
        this.lev.criarAnimacao(this)        
        this.lev.adicionarSprite(this);

        // Adição de moedas ao mapa
        const posicoesMoedas = [
            { x: 300, y: 1100 },
            { x: 1610, y: 980 },
            { x: 1910, y: 980 },
            { x: 2470, y: 925 },
            { x: 2825, y: 1000 },
            { x: 3540, y: 1100 },
            { x: 3940, y: 1025 },
            { x: 4970, y: 600 },
            { x: 5300, y: 660 },
            { x: 6220, y: 495 },
            { x: 6640, y: 705 },
            { x: 6920, y: 880 },
            { x: 7435, y: 1025 },
            { x: 8035, y: 1025 },
            { x: 8660, y: 1025 },
            { x: 8700, y: 1025 },
            { x: 8680, y: 990 }
        ];
        

        posicoesMoedas.forEach(posicao => {
            const moedas = new moeda(this, posicao.x, posicao.y, 'moeda')
            moedas.spawnMoedas(this, this.lev, this.piso)
        });

        this.lev.salvar(this, this.checkpoint, this.lev);
        this.lev.salvar(this, this.checkpoint1, this.lev);
        this.lev.salvar(this, this.checkpoint2, this.lev);
        

        // definição de colisões e limites do mundo
        this.map.setCollisionByProperty({collider: true}, true, false, this.water);
        this.map.setCollisionByProperty({collider: true});
        //adiciona colisão entre o personagem e a água, e caso isso ocorre, o personagem irá perder uma vida.
        this.physics.add.collider(this.lev, this.water, this.Morre, null, this); 
        this.physics.add.collider(this.lev, this.piso); //  adiciona um colisor entre o personagem lev e a camada do chão (piso).
        this.physics.add.collider(this.checkpoint, this.piso);
        this.physics.add.collider(this.checkpoint1, this.piso);
        this.physics.add.collider(this.checkpoint2, this.piso);
        
        //  define os limites da câmera principal para coincidir com os limites do mapa.
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) 
        //  define os limites do mundo físico do jogo para coincidir com os limites do mapa.
        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) 
        this.cameras.main.startFollow(this.lev) // faz com que a câmera principal siga o personagem lev.

        // Habilitando a função de pausar o jogo quando a tecla ESC for pressionada.
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.pause()
            this.scene.launch('pause', { previousScene: this.scene.key })
        })
        
        // Habilitando o hud à cena.
        this.hud = this.scene.get('hud')
        this.hud.renderizadorHud(this)

        // Adicionando a contagem de vidas a cena.
        this.vidas = new vidasCount(this, this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.1, 'vidas3').setScale(.08)
        this.add.existing(this.vidas)
        
        //adicionando a música à cena.
        music(this, 'main')

        centroDeEventos.on('gameOver', () => {
            this.emit = true;
        })
    }
    
    // função do Phaser3 que é chamada repetidamente para atualizar o estado do jogo. É onde a lógica do jogo é atualizada, incluindo movimentação do personagem, verificação de colisões, atualização de animações e outras funcionalidades.
    update () {
        this.lev.movimentos(this);

        // Adiciona a imagem da letra E para guiar o jogador
        this.lev.affordance(this.lev, this.letraE)

        this.distancia = Phaser.Math.Distance.Between(
            this.lev.x, this.lev.y,
            this.letraE.x, this.letraE.y
        );
        // Quando o personagem entra na Unilever a cena 2 irá começar
        this.lev.teclas.e.on("down", function () {
            if (this.distancia < 300) {
                this.cameras.main.fadeOut(1000, 0, 0)
                setTimeout(() => {
                    this.scene.start('Cena2')
                    this.scene.stop()
                }, 1000)
            }
        }, this);

        // Adiciona diferentes imagens de teclas na tela para auxiliar o jogador a saber o que ele deve fazer em cada parte do mapa
        this.lev.affordance(this.lev, this.down)
        this.lev.affordance(this.lev, this.up)
        this.lev.affordance(this.lev, this.double)
        this.lev.affordance(this.lev, this.space)

        // função de perder vidas
        this.vidas.perdeuVida(this)

        // Função de interagir com o NPC
        this.interacaoNPC(this.lev,this.NPC);

        if (this.emit === true) {
            centroDeEventos.emit('Cena1', 'Cena1')
        }

    };

    Morre() { // Função para que, se o personagem 'morrer', volte à posição (320, 1100).
        this.lev.salvarPosicao (this);
        this.vidas.morreu(this);
    }

    createCheckpoint(x, y, id) {
        const checkpoints = new checkpoint(this, x, y, id);
        checkpoints.criarAnimacao(this);
        checkpoints.adicionarPlaca();
    }

    // Adiciona balão de fala e falas do NPC
    interacaoNPC(personagem, npc) {
        // Lógica utilizada para o surgimento das falas do NPC.
        if (personagem.x >= npc.x - 125 && this.contador == 0) {
            var balao = this.add.image(8900, 930, 'balaoFala').setScale(1.8).setFlip(true, false); // Adiciona balão de fala.
            let fala1 = this.add.text(8870, 860, 'Olá, robozinho Lev...', { // Adiciona primeira fala.
                fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente.
                wordWrap: { width: 430 }
            }).setOrigin(0.5); // Centraliza vertical e horizontalmente.
    
            var fala2, fala3, fala4;
            this.contador++; // Adiciona um ao contador, para que o balão de fala apareça apenas uma vez.
    
            setTimeout(() => {
                fala1.destroy();
                fala2 = this.add.text(8870, 860, 'Seja bem-vindo à Unilever...', {
                    fontFamily: 'Open Sans',
                    fontSize: 28,
                    color: '#000000',
                    align: 'center', // Centraliza o texto horizontalmente.
                    wordWrap: { width: 430 }
                }).setOrigin(0.5); // Centraliza vertical e horizontalmente.
    
                setTimeout(() => {
                    fala2.destroy();
                    fala3 = this.add.text(8870, 860, 'Agora que você já desenvolveu suas habilidades...', {
                        fontFamily: 'Open Sans',
                        fontSize: 28,
                        color: '#000000',
                        align: 'center', // Centraliza o texto horizontalmente.
                        wordWrap: { width: 430 }
                    }).setOrigin(0.5); // Centraliza vertical e horizontalmente.
    
                    setTimeout(() => {
                        fala3.destroy();
                        fala4 = this.add.text(8870, 860, 'está pronto para ser integrado em nossa empresa.', {
                            fontFamily: 'Open Sans',
                            fontSize: 28,
                            color: '#000000',
                            align: 'center', // Centraliza o texto horizontalmente.
                            wordWrap: { width: 430 }
                        }).setOrigin(0.5); // Centraliza vertical e horizontalmente.
                            setTimeout(() => {
                                fala4.destroy();
                                balao.destroy(); // Faz com que o balão de fala desapareça ao fim da interação.
                                
                        }, 4000)
                    }, 3000)
                }, 3000) // Define o tempo de exibição de cada fala.
            }, 2000)
        }
    }
}
