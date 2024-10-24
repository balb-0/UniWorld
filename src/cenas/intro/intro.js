export class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' }); // chama o construtor da classe pai com a chave nomeada como 'Intro'
        this.textoBalaoFala = null; // variável para armazenar o texto de fala
    }

    typewriteText(texts) { // função para escrever texto na tela em estilo "máquina de escrever"
        let fullText = ''; // Inicializa uma variável para armazenar o texto completo
    
        texts.forEach((text, index) => { // para cada texto no array
            fullText += text + '\n'; // Adiciona um caractere de quebra de linha após cada texto
        });
    
        const length = fullText.length; // Calcula o comprimento do texto
        let i = 0; // Inicializa um contador para o índice do texto
    
        this.time.addEvent({ // Adiciona um evento de tempo (uso do Phaser)
            callback: () => { // Função a ser executada para adicionar caracteres um por um
                this.textoBalaoFala.setText(fullText.substr(0, i)); // Define o texto completo na tela até o índice atual
                ++i; // Incrementa o contador de caracteres
    
                if (i === length) { // Se o texto estiver completamente escrito
                    // Inicia a transição para a próxima cena após um atraso
                    this.time.delayedCall(40000, () => {
                        this.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
                            if (progress === 1) {
                                this.scene.start('Cena1'); // Inicia a cena 'Cena1' apenas quando o texto estiver completamente escrito
                            }
                        });
                    });
                }
            },
            repeat: length - 1, // Repete a adição de caracteres para cada caractere no texto
            delay: 50 // Atraso entre a adição de caracteres
        });
    }

    create() { // Função para criar elementos na cena
        this.add.image(400, 300, 'background'); // Adiciona uma imagem de fundo na posição (400, 300)

        // Centraliza o texto na tela
        this.textoBalaoFala = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, '', { font: "30px", fill: "#FFFFFF", stroke: '#FFFFFF', strokeThickness: 2 }).setOrigin(0.5);
        // Adiciona frases e inicia a escrita do texto
        this.typewriteText([
            'Num mundo dominado pela poluição e pelas indústrias',
            'a Unilever se destaca como uma empresa dedicada',
            'à diversidade e à preservação do meio ambiente.'
        ]);

        // Limpa o texto após um atraso
        this.time.delayedCall(17000, () => {
            this.textoBalaoFala.setText('');
        });

        // Adiciona o restante das frases após um atraso
        this.time.delayedCall(8500, () => {
            this.typewriteText([
                'Lev, um robô consciente, rejeita seu papel em',
                'uma empresa poluente e é descartado como sucata.',
            ]);
        });

        // Limpa o texto após um atraso
        this.time.delayedCall(14000, () => {
            this.textoBalaoFala.setText('');
        });
            
        // Adiciona o restante das frases após um atraso
        this.time.delayedCall(15000, () => {
            this.typewriteText([
                'Ao despertar em um lixão, ele vai em busca da Unilever',
                'procurando um refúgio para sua sustentabilidade.',
            ]);
        });
         
        // Limpa o texto após um atraso
        this.time.delayedCall(17000, () => {
             this.textoBalaoFala.setText('');
         });

         // Adiciona o restante das frases após um atraso
         this.time.delayedCall(22500, () => {
            this.typewriteText([
                'Integrando-se à equipe, Lev utiliza suas habilidades', 
                'únicas para desenvolver tecnologias e promover', 
                'a inclusão.',
            ]);
        });

        // Limpa o texto após um atraso
        this.time.delayedCall(20000, () => {
            this.textoBalaoFala.setText('');
        });

        // Adiciona o restante das frases após um atraso
        this.time.delayedCall(30500, () => {
            this.typewriteText([
                'Sua jornada, iniciada no lixão,',
                'torna-se uma inspiradora história de esperança,', 
                'incentivando outros a seguirem seu exemplo', 
                'em busca de um futuro melhor para todos.',
            ]);
        });

        // Limpa o texto após um atraso
        this.time.delayedCall(30000, () => {
            this.textoBalaoFala.setText('');
        });

        // Adiciona o restante das frases após um atraso
        this.time.delayedCall(40500, () => {
            this.typewriteText([
        'Vamos agora, dar início a sua jornada!'
    ]);
});
        
    }
}
