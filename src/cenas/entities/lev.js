// Este é o arquivo que desenvolve o persongem protagonista (nomeado Lev), e todas suas funcionalidades.

export default class lev extends Phaser.Physics.Arcade.Sprite {
    
    // Define os parâmetro que irão instanciar o objeto, neste caso, serão a: cena, coordenada que o objeto aparecera, textura/aparência.
    constructor(scene, x, y, texture) {
        super(scene, x, y, 'lev');
        scene.add.existing(this)
        // Adiciona corpo com física ao personagem.
        scene.physics.world.enableBody(this, 0);

        // O personagem colide com o mundo.
        this.setCollideWorldBounds(true);

        // Define as telcas que serão usadas para movimentação do personagem.
        this.teclas = scene.input.keyboard.addKeys({
            up: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            upArrow: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            leftArrow: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            down: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            downArrow: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            right: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            rightArrow: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            space: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            enter: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),
            e: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
        });

        // Variável que armazena a velocidade do Personagem.
        this.velocidade = 200

        // Variável que contém quantas vidas o personagem tem ao nascer.
        this.vidasRestantes = 3;
        
        // Variáveis que definem onde o personagem irá nascer.
        this.MorreX =  x;
        this.MorreY = y;

        this.dist = null;
    }

    
    // Função que roda as animações do personagem
    criarAnimacao(scene) {
        // Animação do Personagem andando, quadros por segundo e quais frames da sprite sheet estão sendo rodados.
        scene.anims.create({
            key: 'andar',
            frameRate: 7,
            frames: scene.anims.generateFrameNumbers('lev', {start: 24, end: 27}),
            repeat: -1,
        });
        // Animação do Personagem parado, quadros por segundo e quais frames da sprite sheet estão sendo rodados.
        scene.anims.create({
            key: "parar",
            frameRate: 2,
            frames: scene.anims.generateFrameNumbers('lev',{start: 0, end: 5}),
            repeat: -1,
        });
        
        // a animação "pulando" é criada utilizando frames de 6 a 10 do spritesheet
        //com uma taxa de quadros de 4 quadros por segundo.
        scene.anims.create({
            key: "pular",
            frameRate: 15,
            frames: scene.anims.generateFrameNumbers('lev', {start: 6, end: 10}),
            repeat: -1,
        });
        
        // Animação do persongem caindo [...]
        scene.anims.create({
            key: 'cair',
            frameRate: 8,
            frames:scene.anims.generateFrameNumbers('lev', {start:18, end: 23}),
            repeat: -1,
        })
        
        // Animação do personagem agachado [...]
        scene.anims.create({
            key: "agachar",
            frameRate: 10,
            frames: scene.anims.generateFrameNumbers('lev', {start: 16, end: 17}),
            repeat: -1,
        })
        // a animação "dash" é criada utilizando frames de 11 a 17 do spritesheet
        //com uma taxa de quadros de 10 quadros por segundo.
        scene.anims.create({
            key: "dash",
            frameRate: 10,
            frames: scene.anims.generateFrameNumbers('lev', {start: 13, end: 15}),
            repeat: -1,
        });
        
        
    }
    
    adicionarSprite() {
        this.anims.play("lev", true); // Começa a animação padrão do personagem parado
    }
    
    movimentos () {
        this.setSize(80, 96).setOffset(20, 30)
        
        /* Constrói toda a movimentação do personagem para a direita,
         contando com o lado que ele está virado e sua animação.*/
        if (this.body.velocity.y > this.maxVelocity) {
            this.setVelocityY(this.maxVelocity)
        }


        // lógica de movimentação do personagem com base nas teclas pressionadas
        // lógica de pulo
        // função condicional para que, ao apertar a tecla 'A' e, ao mesmo tempo, o personagem estiver a uma altura
        // igual ou maior que 280 pixel, o personagem se move para a esquerda.
        if (this.teclas.right.isDown || this.teclas.rightArrow.isDown) {
            this.anims.play('andar', true)
            /*condicional foi adicionada para evitar que o personagem se movimente enquanto executa o movimento de pular. além disso, foi adicionada uma
             funcionalidade para que o personagem mude de lado de acordo com a direção de movimento com o atributo setFlip */
            this.setVelocityX(2 * this.velocidade)
            this.setFlip(false, false)
            // função condicional para que, ao apertar a tecla 'D' e, ao mesmo tempo, o personagem estiver a uma altura igual ou maior que 280 pixel,
            // o personagem se move para a direita.

        } else if (this.teclas.left.isDown || this.teclas.leftArrow.isDown) {
            this.anims.play('andar', true)
            /*Condicional foi adicionada para evitar que o personagem se movimente enquanto executa
            o movimento de pular.*/
            this.setVelocityX(-2 * this.velocidade)
            this.setFlip(true, false)
            
            // finalização da estrutura condicional para que o personagem não se mova caso o usuário não esteja pressionando nenhuma tecla    
        } else {
            this.anims.play('parar', true)
            this.setVelocityX(0);
        };

        // Criando variáveis para desenvolver o pulo normal e o pulo duplo.
        var pressionouPulo = Phaser.Input.Keyboard.JustDown(this.teclas.up);
        var pressionouPuloDuplo = Phaser.Input.Keyboard.JustDown(this.teclas.upArrow);

        if (pressionouPulo || pressionouPuloDuplo) {
            if (this.body.onFloor()) {
                // inicia a animação
                // habilita o pulo duplo
                this.puloDuplo = true;
                // definição da velocidade vertical para o primeiro pulo
                this.body.setVelocityY(-2.5 * this.velocidade);
            } else if (this.puloDuplo) {
                // realiza o segundo pulo se o pulo duplo estiver habilitado
                this.puloDuplo = false;
                // define a velocidade vertical para o segundo pulo
                this.setVelocityY(-2 * this.velocidade);
            };
        };

        /* Verifica o estado de movimento vertical do personagem, tais referência serão usadas para executar os comandos "pular" e "cair"
        adequadamente.*/
        if (this.body.velocity.y < -50) {
            this.anims.play('pular', true)
        } else if (this.body.velocity.y > 50) {
            this.anims.play('cair', true)
        };

        // verifica se o jogador está pressionando a tecla para se agachar
        // função condicional para que, ao apertar o 'espaço', o movimento de dash, isto é, movimento rápido, é ativado
        if (this.teclas.space.isDown) {
            var dashDuration = 300;
            var dashSpeed = (this.velocidade * 4.5);
            var dashDirection = this.flipX ? -1 : 1;
            // aplica o dash (movimento rápido) na direção em que o personagem está olhando
            this.setVelocityX(dashSpeed * dashDirection)

            //tempo de duração do dash
            setTimeout(() => {
                this.setVelocityX(0);
            }, dashDuration)
        }
        if (this.body.velocity.x > 800 || this.body.velocity.x < -800) {
            this.anims.play('dash', true)
        }

        if (this.teclas.down.isDown || this.teclas.downArrow.isDown) {
            // redefine o tamanho do colisor para o personagem se agachar
            this.anims.play('agachar', true)
            this.setSize(80, 64, true);
            this.levantou = true;

        } else if (this.levantou === true) {

            // restaura o tamanho do colisor quando o jogador para de se agachar
            this.setSize(this.width, this.height, true);
            this.setY(this.y - 30);
            this.levantou = false;
        }
    }

    /*permite que o personagem salve sua posição de respawn quando colide com um determinado
     objeto (obj2) na cena. Isso é útil para garantir que o personagem reapareça em um local específico após a morte.*/
    salvar (scene, obj1, obj2) {
        scene.physics.add.overlap(obj1, obj2, () => {
            this.MorreX = obj2.x;
            this.MorreY = obj2.y - 40;
        })
    }

    /* Posiciona o personagem no local de respawn previamente salvo, garantindo que o personagem reapareça na
     posição correta após morrer.*/
    salvarPosicao() {
        this.setPosition(this.MorreX, this.MorreY)
    }
    
    // affordance que aparecerá quando o personagem chegar a serta distância,
    // para uxiliá-lo no entendimento da fase
    affordance(obj1, affordance) {
        this.dist = Phaser.Math.Distance.Between(
            obj1.x, obj1.y,
            affordance.x, affordance.y
        );

        if (this.dist < 250) {
            affordance.setVisible(true);
        } else {
            affordance.setVisible(false);
        }
    }
}

