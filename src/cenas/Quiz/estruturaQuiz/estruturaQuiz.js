// Neste arquivo é criada toda a lógica de funcionameto do quiz

// importa o centro de eventos
import centroDeEventos from "../../centroDeEventos/centroDeEventos.js"

// Cria a classe estruturaQuiz
export class estruturaQuiz extends Phaser.Scene {

    // A cena utiliza a chave "estrutura"
    constructor () {
        super({key: 'estrutura'})
    }

    // Guarda os dados de qual era a cena anterior
    init (data) {
        this.previousScene = data.previousScene
    }

    create (scene, pergunta1, pergunta2, pergunta3, quiz, texto_pergunta1, texto_pergunta2, texto_pergunta3, texto_opcoes1, texto_opcoes2, texto_opcoes3, opcao1, opcao2, opcao3, opcaoSelecionadaIndex, Certa1, Certa2, Certa3, opcaoSelecionada, parabens) {
        
        // Adiciona imagens à cena
        scene.add.image(scene.sys.game.config.width / 2, scene.sys.game.config.height / 2, 'fundoPause').setScale(0.6).setScrollFactor(0)
        scene.add.image(scene.sys.game.config.width / 2, scene.sys.game.config.height, 'pergaminhoDicionario').setScale(0.5)
        scene.add.image(scene.sys.game.config.width / 2, scene.sys.game.config.height * 0.45, 'unileverPergaminho').setScale(0.3)

        // configuração dos limites da área visível da câmera
        scene.cameras.main.setBounds(0, 0, scene.sys.game.config.width, 1250)

        // Configuração dos limites do mundo físico
        scene.physics.world.setBounds(0, 0, scene.sys.game.config.width, 1250)

        // Seleciona aleatoriamente uma pergunta do conjunto de perguntas disponíveis
        pergunta1 = this.selecionarPerguntaAleatoria(quiz);

        /* pergunta selecionada é adicionada à cena usando o método 'adicionarPergunta',
         que retorna um objeto de texto representando a pergunta.*/
        texto_pergunta1 = this.adicionarPergunta(scene, pergunta1);

        /*Este trecho adiciona as opções de resposta para a primeira pergunta usando o método adicionarOpcoes
        -> torna as opções interativas, podendo ser selecionadas*/
        texto_opcoes1 = this.adicionarOpcoes(scene, pergunta1, opcao1, opcao2, opcao3, opcaoSelecionada, opcaoSelecionadaIndex);

        /*Este evento é usado para acompanhar mudanças no índice da opção selecionada. Quando o índice é modificado,
        novo índice é capturado e armazenado na variável opcaoSelecionadaIndex*/ 
        scene.events.on('indexModificado', (index) => {
            opcaoSelecionadaIndex = index;
        }, scene)

        // lida com a exibição da mensagem de parabéns.
        scene.events.on('novoParabens', (pb) => {
            parabens = pb;
        }, scene);


        // Este trecho adiciona um ouvinte de eventos ao objeto de entrada da cena que responde ao evento de clique do mouse ou toque na tela
        scene.input.on('pointerdown', () => {   
            // Verifica se uma opção de resposta foi selecionada. Se sim, chama a função verificarResposta para verificar se a resposta está correta
            if(opcaoSelecionadaIndex != null){
                Certa1 = this.verificarResposta(pergunta1, opcaoSelecionada, quiz, opcaoSelecionadaIndex);
            }

            // Exibir uma mensagem de feedback com base na resposta
            if (Certa1 === true) {
                centroDeEventos.emit('Certa')
                // Se a resposta estiver correta, mostra "Resposta Correta!"
                this.mostraResultado(scene, 'Resposta Correta!', Certa1, parabens)
                setTimeout(() => {
                    //Apaga a resposta atual e exibe uma nova pergunta
                    this.apagarPergunta(texto_pergunta1, texto_opcoes1, parabens) // Apaga as perguntas e opções de respostas 

                    pergunta2 = this.selecionarPerguntaAleatoria(quiz) // Seleciona aleatoriamente a próxima pergunta

                    // Exibe a nova pergunta e as opções de resposta
                    texto_pergunta2 = this.adicionarPergunta(scene, pergunta2)
                    texto_opcoes2 = this.adicionarOpcoes(scene, pergunta2, opcao1, opcao2, opcao3, opcaoSelecionada, opcaoSelecionadaIndex)
                    opcaoSelecionada = false

                    // Adiciona um novo ouvinte de eventos para  a próxima pergunta
                    scene.input.on('pointerdown', () => {        
                        // Verificar a resposta selecionada
                        if(opcaoSelecionadaIndex != null){
                            Certa2 = this.verificarResposta(pergunta2, opcaoSelecionada, quiz, opcaoSelecionadaIndex);
                        }
                        // #################Continua o processo de feedback e seleção de perguntas para as próximas etapas do jogo##########
                        /* #################(similar ao bloco anterior)###############################
                        Os bolocos da lógica de funcionamento do Quiz são bem parecidos entre eles*/
                    
                        if (Certa2 === true) {
                            centroDeEventos.emit('Certa')
                            this.mostraResultado(scene, "Resposta Correta!", Certa2, parabens)
                            setTimeout(() => {
                                this.apagarPergunta(texto_pergunta2, texto_opcoes2, parabens)

                                pergunta3 = this.selecionarPerguntaAleatoria(quiz); // Atribui o conjunto de pergunta, opções e resposta do quiz 
                                
                                // Exibe a nova pergunta e as opções de resposta                                   
                                texto_pergunta3 = this.adicionarPergunta(scene, pergunta3)
                                texto_opcoes3 = this.adicionarOpcoes(scene, pergunta3, opcao1, opcao2, opcao3, opcaoSelecionada, opcaoSelecionadaIndex)
                                opcaoSelecionada = false   

                                scene.input.on('pointerdown', () => {        
                                    // Verificar a resposta selecionada
                                    if(opcaoSelecionadaIndex != null){
                                        Certa3 = this.verificarResposta(pergunta3, opcaoSelecionada, quiz, opcaoSelecionadaIndex);
                                        }
                                    if (Certa3 === true) {
                                        centroDeEventos.emit('Certa')
                                        this.mostraResultado(scene, "Resposta Correta!", Certa3, parabens)
                                        opcaoSelecionada = false
                                        setTimeout(() => {
                                            this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                            if(this.previousScene) {
                                            // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                                scene.scene.resume(this.previousScene)
                                                scene.scene.stop()
                                            }
                                        }, 2000)
                                    }
                                    else if (Certa3 === false){
                                        this.mostraResultado(scene, "Resposta Incorreta!", Certa3, parabens)
                                        setTimeout(() => {
                                            this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                            if(this.previousScene) {
                                            // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                                scene.scene.resume(this.previousScene)
                                                this.setTrue()
                                                scene.scene.stop()
                                            }
                                        }, 2000)
                                    }
                                    else {}
                                    opcaoSelecionadaIndex = null  
                                })
                            }, 2000)
                        }
                        else if (Certa2 === false){
                            this.mostraResultado(scene, "Resposta Errada!", Certa2, parabens)
                            setTimeout(() => {
                                this.apagarPergunta(texto_pergunta2, texto_opcoes2, parabens)

                                pergunta3 = this.selecionarPerguntaAleatoria(quiz); // atribui o conjunto de pergunta, opções e resposta do quiz 
                                
                                // Exibe a nova pergunta e as opções de resposta                                   
                                texto_pergunta3 = this.adicionarPergunta(scene, pergunta3)
                                texto_opcoes3 = this.adicionarOpcoes(scene, pergunta3, opcao1, opcao2, opcao3, opcaoSelecionada, opcaoSelecionadaIndex)
                                opcaoSelecionada = false   

                                scene.input.on('pointerdown', () => {        
                                    // Verificar a resposta selecionada
                                if(opcaoSelecionadaIndex != null){
                                    Certa3 = this.verificarResposta(pergunta3, opcaoSelecionada, quiz, opcaoSelecionadaIndex);
                                    }
                                if (Certa3 === true) {
                                    centroDeEventos.emit('Certa')
                                    this.mostraResultado(scene, "Resposta Correta!", Certa3, parabens)
                                    opcaoSelecionada = false
                                    setTimeout(() => {
                                        this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                        if(this.previousScene) {
                                        // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                            scene.scene.resume(this.previousScene)
                                            this.setTrue()
                                            scene.scene.stop()
                                        }
                                    }, 2000)
                                    }
                                    else if (Certa3 === false){
                                        this.mostraResultado(scene, "Resposta Incorreta!", Certa3, parabens)
                                        setTimeout(() => {
                                            this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                            if(this.previousScene) {
                                            // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                                scene.scene.resume(this.previousScene)
                                                this.setTrue()
                                                scene.scene.stop()
                                            }
                                        }, 2000)
                                    }
                                    else{}  
                                    opcaoSelecionadaIndex = null
                                    
                                })
                            }, 2000)
                        }
                        else{}
                        opcaoSelecionadaIndex = null;
                    }) 
                    
                }, 2000)             
            } 
            
            else if(Certa1 === false){
                // Se a resposta estiver incorreta, mostra "Resposta Errada!"
                this.mostraResultado(scene, "Resposta Errada!", Certa1, parabens)
                setTimeout(() => {
                    // Apaga a pergunta atual e exibe uma nova pergunta
                    /* ####################################(similar ao bloco anterior)########################-> 
                    Os bolocos da lógica de funcionamento do Quiz são bem parecidos entre eles*/
                    this.apagarPergunta(texto_pergunta1, texto_opcoes1, parabens)
                    
                    pergunta2 = this.selecionarPerguntaAleatoria(quiz)
    
                    texto_pergunta2 = this.adicionarPergunta(scene, pergunta2)
                    texto_opcoes2 = this.adicionarOpcoes(scene, pergunta2, opcao1, opcao2, opcao3, opcaoSelecionada, opcaoSelecionadaIndex)
                    opcaoSelecionada = false

                    scene.input.on('pointerdown', () => {        
                        // Verificar a resposta selecionada
                        if(opcaoSelecionadaIndex != null){
                            Certa2 = this.verificarResposta(pergunta2, opcaoSelecionada, quiz, opcaoSelecionadaIndex);
                        }
                    
                        if (Certa2 === true) {
                            centroDeEventos.emit('Certa')
                            this.mostraResultado(scene, "Resposta Correta!", Certa2, parabens)
                            setTimeout(() => {
                                this.apagarPergunta(texto_pergunta2, texto_opcoes2, parabens)

                                pergunta3 = this.selecionarPerguntaAleatoria(quiz); // Atribui o conjunto de pergunta, opções e resposta do quiz 
                                
                                // Exibe a nova pergunta e as opções de resposta                                   
                                texto_pergunta3 = this.adicionarPergunta(scene, pergunta3)
                                texto_opcoes3 = this.adicionarOpcoes(scene, pergunta3, opcao1, opcao2, opcao3, opcaoSelecionada, opcaoSelecionadaIndex)
                                opcaoSelecionada = false   

                                scene.input.on('pointerdown', () => {        
                                    // Verificar a resposta selecionada
                                if(opcaoSelecionadaIndex != null){
                                    Certa3 = this.verificarResposta(pergunta3, opcaoSelecionada, quiz, opcaoSelecionadaIndex);
                                    }
                                if (Certa3 === true) {
                                    centroDeEventos.emit('Certa')
                                    this.mostraResultado(scene, "Resposta Correta!", Certa3, parabens)
                                    opcaoSelecionada = false
                                    setTimeout(() => {
                                        this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                        if(this.previousScene) {
                                        // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                            scene.scene.resume(this.previousScene)
                                            scene.scene.stop()
                                        }
                                    }, 2000)
                                    }
                                    else if (Certa3 === false){
                                        this.mostraResultado(scene, "Resposta Incorreta!", Certa3, parabens)
                                        setTimeout(() => {
                                            this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                            if(this.previousScene) {
                                            // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                                scene.scene.resume(this.previousScene)
                                                this.setTrue()
                                                scene.scene.stop()
                                            }
                                        }, 2000)
                                    }
                                    else{}  
                                    opcaoSelecionadaIndex = null
                                    
                                })
                            }, 2000)
                        }
                        else if (Certa2 === false){
                            this.mostraResultado(scene, "Resposta Errada!", Certa2, parabens)
                            setTimeout(() => {
                                this.apagarPergunta(texto_pergunta2, texto_opcoes2, parabens)

                                pergunta3 = this.selecionarPerguntaAleatoria(quiz); // atribui o conjunto de pergunta, opções e resposta do quiz 
                                
                                // Exibe a nova pergunta e as opções de resposta                                   
                                texto_pergunta3 = this.adicionarPergunta(scene, pergunta3)
                                texto_opcoes3 = this.adicionarOpcoes(scene, pergunta3, opcao1, opcao2, opcao3, opcaoSelecionada, opcaoSelecionadaIndex)
                                opcaoSelecionada = false   

                                scene.input.on('pointerdown', () => {        
                                    // Verificar a resposta selecionada
                                if(opcaoSelecionadaIndex != null){
                                    Certa3 = this.verificarResposta(pergunta3, opcaoSelecionada, quiz, opcaoSelecionadaIndex);
                                    }
                                if (Certa3 === true) {
                                    centroDeEventos.emit('Certa')
                                    this.mostraResultado(scene, "Resposta Correta!", Certa3, parabens)
                                    opcaoSelecionada = false
                                    setTimeout(() => {
                                        this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                        if(this.previousScene) {
                                        // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                            scene.scene.resume(this.previousScene)
                                            this.setTrue()
                                            scene.scene.stop()
                                        }
                                    }, 2000)
                                    }
                                    else if (Certa3 === false){
                                        this.mostraResultado(scene, "Resposta Incorreta!", Certa3, parabens)
                                        setTimeout(() => {
                                            this.apagarPergunta(texto_pergunta3, texto_opcoes3, parabens)
                                            if(this.previousScene) {
                                            // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                                                scene.scene.resume(this.previousScene)
                                                this.setTrue()
                                                scene.scene.stop()
                                            }
                                        }, 2000)
                                    }
                                    else{}  
                                    opcaoSelecionadaIndex = null
                                    
                                })
                            }, 2000)
                        }
                        else{}
                        opcaoSelecionadaIndex = null;
                    })
                }, 2000)     
            }     
            else {}              
            opcaoSelecionadaIndex = null; // Faz com que os cliques em outros lugares da tela não sejam considerados como resposta

            
        });

        scene.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
            scene.cameras.main.scrollY += deltaY * 0.5;
        })
    }



    // Método que seleciona perguntas eleatórias de dentro do quiz
    selecionarPerguntaAleatoria(quiz) {
        const perguntaAleatoria = Phaser.Math.Between(0, quiz.length - 1);
        return quiz[perguntaAleatoria];
    }

    // Exibe a pergunta no quiz
    adicionarPergunta(scene, pergunta){
        return scene.add.text(scene.sys.game.config.width / 2, scene.sys.game.config.height * 0.70, pergunta.pergunta, { fontFamily: 'Open Sans',
        fontSize: 36,
        color: '#000000',
        align: 'center', // Centraliza o texto horizontalmente
        wordWrap: { width: 720 }
        }).setOrigin(0.5);
    }

    // Exibe se o jogador acertou a mensagem
    mostraResultado(scene, mensagem, certa, pb){
        if(certa){
            console.log(mensagem);
            pb = scene.add.text(scene.sys.game.config.width / 2, scene.sys.game.config.height * 1.35, mensagem, { fontFamily: 'Open Sans',
            fontSize: 36,
            color: '#008651',
            align: 'center', // Centraliza o texto horizontalmente
            wordWrap: { width: 720 }
            }).setOrigin(0.5);

            scene.input.off('pointerdown'); // desabilita o "clique" na tela, para que o jogador responda cada pergunta apenas uma vez
            scene.events.emit('novoParabens', pb)
        }
        else{
            console.log(mensagem);
            pb = scene.add.text(scene.sys.game.config.width / 2, scene.sys.game.config.height * 1.35, mensagem, { fontFamily: 'Open Sans',
            fontSize: 36,
            color: '#eb0000',
            align: 'center', // Centraliza o texto horizontalmente
            wordWrap: { width: 720 }
            }).setOrigin(0.5);

            scene.input.off('pointerdown'); // desabilita o "clique" na tela, para que o jogador responda cada pergunta apenas uma vez
            scene.events.emit('novoParabens', pb)
        }
    }
    // Exclui os textos inseridos para que as próximas perguntas e opções de resposta sejam exibidas 
    apagarPergunta(texto_pergunta, texto_opcoes, pb){
        pb.destroy()
        texto_pergunta.destroy()
        texto_opcoes.destroy()
    }

    // Método para verificar se a resposta fornecida está correta
    verificarResposta(perguntaQualquer, opcaoSelecionada, quiz, index1) {
        console.log(opcaoSelecionada)
        console.log(perguntaQualquer.resposta)
        console.log(index1)

        /*remove uma pergunta específica do array quiz, verifica se a resposta selecionada é 
        correta e retorna um booleano indicando o resultado da verificação.*/
        let posicaoPergunta = quiz.indexOf(perguntaQualquer)
        quiz.splice(posicaoPergunta, 1)
        console.log(quiz)
        const respostaVerificada = index1 === perguntaQualquer.resposta;
        index1 = null
        return respostaVerificada
    }

    // Método para exibir as opções de resposta no quiz e tornar as opções selecionáveis para o jogador marcar
    adicionarOpcoes(scene, pergunta, opcao1, opcao2, opcao3, opcaoSelecionada, index){
        var i = 0
        var listaopcoes = []
        var opcoesContainer = scene.add.container();
        while(i < pergunta.opcoes.length){
            if(i === 0){
                opcao1 = scene.add.text(scene.sys.game.config.width / 2, scene.sys.game.config.height * 0.88 + i * 100, `${i + 1}. ${pergunta.opcoes[i]}`, { fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 720 }
                }).setOrigin(0.5);

                listaopcoes.push(opcao1) // Adiciona o texto da primeira opção de resposta para a lista de opções
                opcao1.setInteractive() // Torna o texto de opção de resposta interativo
                opcao1.on('pointerdown', () => {
                    if (!opcaoSelecionada) { // Verificar se nenhuma opção foi selecionada ainda
                        index = 0; // Atribui o índice da opção selecionada
                        scene.events.emit('indexModificado', index);
                        opcaoSelecionada = true;
                        opcao1.off('pointerdown');
                    }
                })
            }

            if(i === 1){
                opcao2 = scene.add.text(scene.sys.game.config.width / 2, scene.sys.game.config.height * 0.88 + i * 100, `${i + 1}. ${pergunta.opcoes[i]}`, { fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 720 }
                }).setOrigin(0.5);
                
                listaopcoes.push(opcao2)
                opcao2.setInteractive()
                opcao2.on('pointerdown', () => {
                    if (!opcaoSelecionada) { // Verificar se nenhuma opção foi selecionada ainda
                        index = 1;
                        scene.events.emit('indexModificado', index);
                        opcaoSelecionada = true;
                        opcao2.off('pointerdown');
                    }
                })
            }

            if(i === 2){
                opcao3 = scene.add.text(scene.sys.game.config.width / 2, scene.sys.game.config.height * 0.88 + i * 100, `${i + 1}. ${pergunta.opcoes[i]}`, { fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 720 }
                }).setOrigin(0.5);

                listaopcoes.push(opcao3)
                opcao3.setInteractive()
                opcao3.on('pointerdown', () => {
                    if (!opcaoSelecionada) { // Verificar se nenhuma opção foi selecionada ainda
                        index = 2;
                        scene.events.emit('indexModificado', index);
                        opcaoSelecionada = true;
                        opcao3.off('pointerdown');
                    }
                })
            }
            i += 1
        }

        /*encapsula a lógica para adicionar uma lista de opções a um contêiner e retorna esse contêiner para ser utilizado em outras partes do código.*/
        opcoesContainer.add(listaopcoes)
        return opcoesContainer
    }

    // Emite um evento chamado 'die', que será ouvido dentro das fases. -> o qual serve para matar o personagem.
    setTrue () {
        centroDeEventos.emit('Morre')
    };
}