// Importa classes que serão utilizadas nesse arquivo
import { estruturaQuiz } from "./estruturaQuiz/estruturaQuiz.js";
import { bancoDePerguntas } from "./bancoDePerguntas/bancoDePerguntas.js";

// Cria a classe "cenaQuiz1" que herda Phaser.Scene
export class cenaQuiz1 extends Phaser.Scene {
    
    // A cena utiliza a chave "cenaQuiz1"
    constructor() {
        super({key: 'cenaQuiz1'})

        this.quiz2;
        this.pergunta1 = null;
        this.pergunta2 = null;
        this.pergunta3 = null;
        this.opcaoSelecionadaIndex = null;
        this.opcao1 = null;
        this.opcao2 = null;
        this.opcao3 = null;
        this.parabens = null;
        this.texto_pergunta1 = null;
        this.texto_opcoes1 = null;
        this.texto_pergunta2 = null;
        this.texto_opcoes2 = null;
        this.texto_pergunta3 = null;
        this.texto_opcoes3 = null;
        this.Certa1 = null;
        this.Certa2 = null;
        this.Certa3 = null;
        this.opcaoSelecionada = false;
        this.estruturaQuiz = new estruturaQuiz ()
        this.bancoDePerguntas = new bancoDePerguntas ()
    };

    // Inicia a estruturaQuiz
    init (data) {
        this.estruturaQuiz.init(data);
    }
    
    create () {
        // Adiciona o quiz e seu banco de perguntas
        this.quiz1 = this.bancoDePerguntas.adicionarQuiz(1);

        //Cria as variáveis de estrutura quiz
        this.estruturaQuiz.create(this, this.pergunta1, this.pergunta2, this.pergunta3, this.quiz1, this.texto_pergunta1, this.texto_pergunta2, this.texto_pergunta3, this.texto_opcoes1, this.texto_opcoes2, this.texto_opcoes3, this.opcao1, this.opcao2, this.opcao3, this.opcaoSelecionadaIndex, this.Certa1, this.Certa2, this.Certa3, this.opcaoSelecionada, this.parabens)
    }
}