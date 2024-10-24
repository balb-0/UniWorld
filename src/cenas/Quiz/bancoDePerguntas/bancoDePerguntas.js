export class bancoDePerguntas {
    constructor () {
         // Dicionário de perguntas e respostas
         this.quizLevel1 = [
            {
                pergunta: "O que significa o termo 'UniOps'?",
                opcoes: [
                    "Unilever Organização de processo seletivo",
                    "Unilever Opinion",
                    "Unilever Operations"

                ],
                resposta: 2 // Índice da opção correta
            },
            {
                pergunta: "O que é a Uniops?",
                opcoes: [
                    "Uma plataforma online que permite o acesso à tecnologia e operação da Unilever",
                    "Um time de operações dentro da Unilever",
                    "Uma área em que o funcionário poderá candidatar-se"
                ],
                resposta: 0 // Índice da opção correta
            },
            {
                pergunta: "O que a área da UniOps oferece?",
                opcoes: [
                    "Serviços de negócios, tecnologia e soluções empresariais.",
                    "Serviços de relações empresariais entre os setores da empresa.",
                    "Serviços de atendimento ao cliente."
                ],
                resposta: 1 // Índice da opção correta
            }
            // Adicione mais perguntas aqui conforme necessário
        ];

        this.quizLevel2 = [
            {
                pergunta: "Para o que você utilizará o OneDrive?",
                opcoes: [
                    "Compartilhar arquivos e guardá-los na nuvem para acessar de qualquer lugar",
                    "Guardar fotos no computador de casa",
                    "Para escutar música"
                ],
                resposta: 0 // Índice da opção correta
            },
            {
                pergunta: "Por onde você poderá aprender o jargão utilizado na empresa?",
                opcoes: [
                    "Pelo suporte “Una”",
                    "Pelo OneDrive",
                    "Pelo Dicionário Unilever"
                ],
                resposta: 2 // Índice da opção correta
            },
            {
                pergunta: "O que é o “My Digital Office”?",
                opcoes: [
                    "Uma área no Teams onde poderei acessar todos os conteúdos e plataformas da Unilever",
                    "Uma área onde poderei escrever sobre mim para outras pessoas verem",
                    "Uma área em que há vídeos educativos sobre a Unilever"
                ],
                resposta: 0 // Índice da opção correta
            },
        ]

        this.quizLevel3 = [
            {
                pergunta: "Quando você acessa o sistema UNA você é direcionado para:",
                opcoes: [
                   "Para um atendente que irá te auxiliar",
                   "Para uma página de perguntas frequentes",
                    "Para um atendimento automático"
                ],
                resposta: 2 // Índice da opção correta
            },
            {
                pergunta: "O UNA é acessado por:",
                opcoes: [
                    "Telefones móveis",
                    "Seu computador pessoal ",
                    "Computadores dentro da Unilever"
                ],
                resposta: 2 // Índice da opção correta
            },
            {
                pergunta: "O sistema de atendimento UNA funciona:",
                opcoes: [
                    "24 horas por dia todos os dias",
                    "Durante os horários comerciais",
                    "Durante o expesetTruente de cada funcionário"
                ],
                resposta: 0 // Índice da opção correta
            },

            {
                pergunta: "Para que serve o UNA?",
                opcoes: [
                    "Canal de assistência e suporte aos funcionários",
                    "Ramificação da uniops para países da America Latina",
                    "Ferramenta de comunicação entre os funcionários da Unilever"
                ],
                resposta: 0 // Índice da opção correta
            }
        ]

        this.quizLevel4 = [
            {
                pergunta: "Quais são as principais responsabilidades do time de TI na Unilever?",
                opcoes: [
                   "Gerenciar o departamento de Recursos Humanos da empresa",
                   "Desenvolver estratégias de marketing digital",
                    "Manter a infraestrutura de tecnologia da informação da empresa funcionando de forma eficiente e segura"
                ],
                resposta: 2 // Índice da opção correta
            },
            {
                pergunta: "Quais são os cargos-chave dentro do time de TI na Unilever e quais são suas respectivas funções?",
                opcoes: [
                    "Analistas de sistemas: responsáveis por projetar, desenvolver e manter sistemas de informação da empresa",
                    "Chefes de tecnologia: fabrica produtos tecnológicos direcionados ao time UNIOPS",
                    "Fiscais de segurança da manutenção : fazem a manutenção de roteadores e manutenção dos dispositivos"
                ],
                resposta: 0 // Índice da opção correta
            },
            {
                pergunta: "Como o time de TI na Unilever colabora com outras áreas da empresa para alcançar os objetivos estratégicos?",
                opcoes: [
                    "Organizando festas para os funcionários",
                    "Fornecendo suporte tecnológico para aumentar a eficiência e a inovação em todas as áreas da empresa",
                    "Desenvolvendo novos produtos"
                ],
                resposta: 1 // Índice da opção correta
            },
        ]
            // Adicione mais perguntas aqui conforme necessário
    }

    adicionarQuiz (numero) {
        switch (numero) {
            case 1:
                return this.quizLevel1;
            case 2:
                return this.quizLevel2;
            case 3:
                return this.quizLevel3;
            case 4:
                return this.quizLevel4;
        }
    }
}