import lev from "../entities/lev.js";
import NPC from "../entities/NPC.js";
import { temporizador } from "../entities/balaoDeFala.js";
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

// Criação da classe cena 2.
export class Cena2 extends Phaser.Scene {

    /* Construtor da classe. Avisa ao framework Phaser3 que, para se referir a essa cena em específico,
    utiliza-se a chave/nome "Cena2". */
    constructor() {
        super({key: 'Cena2'});
        /* declaração das variáveis que serão usadas ao longo do código */
        this.lev; // Eventos relacionados ao sprite do personagem.
        this.ground; // Eventos relacionados ao mapa da cena.
        this.contador = 0; // Definir a velocidade do personagem no jogo.
        this.map; // Definir o chão.
        this.spawn_dicionario; // Adicionar a função do dicionário.
        this.dicionarioColetado = false; // Parâmetro para saber se o dicionário foi coletado ou não.
        this.fala2;
        this.fala3;
        this.fala4;
        this.fala5;
        this.fala6;
        this.fala7;
        this.fala8;
        this.fala9;
        this.fala10;
        this.fala11;
        this.fala12;
        this.fala13;
        this.bloquearFaseFinal;
        this.liberar = false;
    };
    
    /* A função create ("create()") do Phaser3 é usada implementar elementos já pré-carregados na página,
    bem como atribuir propriedades a esses elementos. */
    create () {
        this.cameras.main.fadeIn(1000, 0, 0)
        
        this.add.image(6400, 640, 'bg1'); // adição da imagem de fundo (background).
        this.add.image(6400, 640, 'objetos1'); // adição de outros objetos à cena.
        this.add.image(3150, 680, 'elevador1'); // adição imagem elevador 1.
        this.add.image(5460, 680, 'elevador2'); // adição imagem elevador 2.
        this.add.image(8150, 680, 'elevador3'); // adição imagem elevador 3.
        this.add.image(10580, 680, 'elevador4'); // adição imagem elevador 4.
        this.add.image(12560,680, 'elevadorfinal'); // adição imagem último elevador.
        
        // Adição do ícone do dicionário.
        this.dicionarioHud = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0).setVisible(false)
        
        /* O mapa do jogo é adicionado à cena de forma diferente das imagens anteriores, pois é uma parte interativa
        e colidível, criada no Tiled, um programa específico para construção de mapas.*/
        this.map = this.make.tilemap({key: 'map2'});
        
        /* conjunto de texturas utilizado para compor a cena*/
        var tilesetPiso = this.map.addTilesetImage ('testeaaa', 'ground1');
        // camada em que esse conjunto está localizado no programa
        this.piso = this.map.createLayer('Chao', tilesetPiso, 0, 0);

        // Adição do NPC no mapa.
        this.NPC = new NPC(this, 600, 1010, 'NPC').setScale(3);
        this.NPC.animaçãoPersonagem(this, this.NPC, this.piso)
        this.NPC.adicionarPersonagem(this, this.ground)
        
        this.letraE = this.add.image(12560, 800, 'letraE')

        // Adição do personagem ao mapa.
        this.lev = new lev(this, 280, 1020)
        this.lev.criarAnimacao(this);
        this.lev.adicionarSprite(this);
        
        
        /* define, de fato, os limites da página */
        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels)
        
        /* Adiciona colisão aos blocos, permitindo que o personagem colida com eles.*/
        this.map.setCollisionByProperty({collider: true});
        this.physics.add.collider(this.lev, this.piso);
        
        /* configura a câmera para seguir o jogador e para não passar dos limites do mundo. */
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.lev)
        
        // Criação da interação com o botão que levará o personagem aos respectivos 'levels'.
        this.createEButton(3150, 800, 'Level1')
        this.createEButton(5460, 800, 'Level2')
        this.createEButton(8150, 800, 'Level3')
        this.createEButton(10580, 800, 'Level4')
        
        // Adiciona a função do pause
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.pause()
            this.scene.launch('pause', { previousScene: this.scene.key })
        })
        
        // desativa a hud
        this.scene.stop('hud')
        
        centroDeEventos.on('liberado', () => {
            this.liberar = true
        });
    }
    
    /*A função update() do Phaser3 é chamada repetidamente para atualizar o estado do jogo,
    incluindo lógica de movimentação, colisões e animações. */
    update() {
        this.lev.movimentos(this); // movimentação personagem principal.
        this.interacaoNPC(this.lev,this.NPC); // Promove a interação entre o NPC e o jogador.
        
        // deleta o objeto dicionário, o ícone que o NPC da para o personagem principal.
        this.deletarDicionario()
        
        // Habilita a tecla "X", que abre o dicionário quando pressionada.
        if (this.dicionarioColetado){
            this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
            this.x.on('down', () => {
                this.scene.pause()
                this.scene.launch('dicionario', { previousScene: this.scene.key })
            })
        }
        
        this.lev.affordance(this.lev, this.letraE)
        this.distancia = Phaser.Math.Distance.Between(
            this.lev.x, this.lev.y,
            this.letraE.x, this.letraE.y
        );
        
        // Quando o personagem entra na Unilever a cena 2 irá começar
        this.lev.teclas.e.on("down", function () {
            if (this.distancia < 300) {
                centroDeEventos.emit('verificarLiberacao')
                if (this.liberar) {
                    this.cameras.main.fadeOut(1000, 0, 0)
                    setTimeout(() => {
                        this.scene.start('cenaFinal')
                        this.scene.stop()
                    }, 1000)
                }
            }
        }, this);

    }

    // inicia o level 3.
    comecarProximaCena() {
        this.scene.start("Level3");
    }

    // Adiciona balão de fala e falas do NPC
    interacaoNPC(personagem, npc) {
        // Lógica utilizada para o surgimento das falas do NPC
        if (personagem.x >= npc.x - 125 && this.contador == 0) {
            var balao = this.add.image(720, 930, 'balaoFala').setScale(1.8);
            let fala1 = this.add.text(750, 860, 'Bem, a Unilever é uma empresa de bens de consumo...', {
                fontFamily: 'Open Sans',
                fontSize: 28, // tamanho de fonte utilizada.
                color: '#000000', // define a cor preta para o texto.
                align: 'center', // Centraliza o texto horizontalmente.
                wordWrap: { width: 450 } // define o comprimento do balão de fala para que o texto fique dentro desse limite
            }).setOrigin(0.5); // Centraliza vertical e horizontalmente.
            setTimeout(() => {
                fala1.destroy()
            }, 3000);

            // Variáveis que irão armazenar as falas
            this.contador++; // Adiciona um contador, para que o balão de fala apareça apenas uma vez.
            this.fala2 = temporizador(this.fala2, this, 'que se preocupa em trabalhar aspectos muito importantes...', 2)
            this.fala3 = temporizador(this.fala3, this, 'como sustentabilidade, inclusão e diversidade...', 3)
            this.fala4 = temporizador(this.fala4, this, 'Seu trajeto dentro da empresa será para conhecer...', 4)
            this.fala5 = temporizador(this.fala5, this, 'o time de TI da Unilever, o time da UniOps...', 5)
            this.fala6 = temporizador(this.fala6, this, 'Mas, para continuar...', 6)
            this.fala7 = temporizador(this.fala7, this, 'você vai precisar dos seguintes links...', 7)
            this.fala8 = temporizador(this.fala8, this, 'presentes neste dicionário...', 8)
            setTimeout (() => {
                this.spawn_dicionario = this.physics.add.image(620, 1000, 'spawndicionario').setScale(1.75) // Adiciona a imagem do dicionário no jogo com física.
                this.physics.add.collider(this.spawn_dicionario, this.piso); // Adiciona colisão entre o dicionário e o chão.
                this.spawn_dicionario.body.gravity.y = 50; //Como o dicionário é influenciado pela gravidade.
                this.deletarDicionario()            
            }, 21000)

            this.fala9 = temporizador(this.fala9, this, 'Os links estão organizados sequencialmente...', 9)
            this.fala10 = temporizador(this.fala10, this, 'para que você possa acessá-los conforme enfrenta...', 10)
            this.fala11 = temporizador(this.fala11, this, 'os desafios de cada porta ao longo de sua jornada...', 11)
            this.fala12 = temporizador(this.fala12, this, 'Portanto, acesse o primeiro link para superar o primeiro desafio...', 12)
            this.fala13 = temporizador(this.fala13, this, 'Boa sorte, Lev!', 13)
            setTimeout(() =>{
                balao.destroy();
            },39000)
        }
    }

    // Condição que faz o dicionário ser "coletado" pelo jogador.
    deletarDicionario(){
        this.physics.add.overlap(this.lev, this.spawn_dicionario, () => {
            this.spawn_dicionario.destroy()
            this.dicionarioColetado = true
            this.dicionarioHud.setVisible(true)
        })
    }


    // função para criar a função dos botões de interação das fases.
    createEButton(x, y, levelKey) {
        var letterE = this.add.image(x, y, 'letraE').setInteractive()
        letterE.setVisible(false)

        this.input.keyboard.on('keydown-E', () => {
            if (Phaser.Math.Distance.Between(this.lev.x, this.lev.y, x, y) < 300) {
                this.scene.start(levelKey)
                this.scene.stop()
            }
        });

        // Controla a visibilidade do botão de interação "E" com base na proximidade do personagem.
        this.events.on('update', () => {
            if (Phaser.Math.Distance.Between(this.lev.x, this.lev.y, x, y) < 300) {
                letterE.setVisible(true)
            } else {
                letterE.setVisible(false)
            }
        })
    }
};