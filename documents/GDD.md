<img src="/assets/logointeli.png">


# GDD - Game Design Document - Módulo 1 - Inteli


## Camaleões


<div align="center"> 
<sup><a name="f1"></a>Figura 1 - Logo do grupo
<br>
<img src = "/assets/Camaleão.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

Igor Paço Sguissardi de Oliveira


Luiza Faria Petenazzi

 
João Pedro Ferreira Carbone

 
Carolina Pascarelli Alves Santos

  
Thalyta da Silva Viana

 
Daniel Parente Pessoa Dias


Vitor Margarido Balbo


# Lista de figuras

[Figura 1 - Logo do grupo](#f1)

[Figura 2 - As 5 Forças de Porter](#f2)

[Figura 3 - Análise SWOT da empresa](#f3)

[Figura 4 - Value proposition canva](#f4)

[Figura 5 - Matriz de risco do projeto](#f5)

[Figura 6 - Spritesheet para animações do personagem](#f6)

[Figura 7 - Spritesheet para animações do NPC frontal](#f7)

[Figura 8 - Spritesheet para animações do NPC lateral](#f8)

[Figura 9 - Mapa completo da primeira fase do jogo](#f9)

[Figura 10 - Mapa completo da segunda fase do jogo](#f10)

[Figura 11 - Mapa completo do level 1 do jogo](#f11)

[Figura 12 - Mapa completo do level 2 do jogo](#f12)

[Figura 13 - Mapa completo do level 3 do jogo](#f13)

[Figura 14 - Mapa completo do level 4 do jogo](#f14)

[Figura 15 - Mapa completo da fase final do jogo](#f15)

[Figura 16 - Concept Art: Tela 1](#f16)

[Figura 17 - Concept Art: Tela 2](#f17)

[Figura 18 - Concept Art: Icons](#f18)

[Figura 19 - Paleta de cores do personagem principal](#f19)

[Figura 20 - Paleta de cores da primeira cena](#f20)

[Figura 21 - Concept Art: UI](#f21)

[Figura 22 - Concept Art: Fases](#f22)

[Figura 23 - Concept Art: Fases (continuação)](#f23)

[Figura 24 - Sprite de um elemento de fundo: Amaciante Comfort](#f24)

[Figura 25 - Spritesheet de um dos elementos dispostos no mapa: Moeda](#f25)

[Figura 26 - Sprite de uma engrenagem de acesso às configurações do jogo](#f26)

[Figura 27 - Sprite do ícone do Dicionário Unilever](#f27)

[Figura 28 - Ícone da Cif](#f28)

[Figura 29 - Ícone da Close Up](#f29)

[Figura 30 - Gameflow da UI](#f30)

[Figura 31 - Gameflow da cena inicial do jogo](#f31)

[Figura 32 - Gameflow da segunda cena do jogo](#f32)

[Figura 33 - Gameflow da primeira fase do jogo](#f33)

[Figura 34 - Gameflow da segunda fase do jogo](#f34)

[Figura 35 - Gameflow da terceira fase do jogo](#f35)

[Figura 36 - Gameflow da quarta fase do jogo](#f36)

[Figura 37 - Gameflow da cena final do jogo](#f37)

[Figura 38 - Gameflow do quiz do jogo](#f38)

[Figura 39 - Lev agachado](#f39)

[Figura 40 - Menu Inicial](#f40)

[Figura 41 - Código da UI](#f41)

[Figura 42 - Cena de configurações](#f42)

[Figura 43 - Cena de pausa](#f43)

[Figura 44 - Cena de Game Over](#f44)

[Figura 45 - Código elementos do jogo](#f45)

[Figura 46 - Moedas e checkpoint](#f46)

[Figura 47 - HUD presente no jogo](#f47)

[Figura 48 - Level 1, com temáticas da OMO e CIF](#f48)

[Figura 49 - Level 4, com temática da CloseUp](#f49)

[Figura 50 - Interação com NPC](#f50)

[Figura 51 - Quiz implementado no jogo](#f51)

[Figura 52 - Quiz implementado no jogo](#f52)

[Figura 53 - Pasta Quiz](#f53)

[Figura 54 - Balões de fala antigos](#f54)

[Figura 55 - Código de adição de moedas atualizado](#f55)

[Figura 56 - Diversas moedas e checkpoint no Level 4](#f56)

[Figura 57 - Novo preload](#f57)

[Figura 58 - Cena 2, comentários antigos](#f58)

[Figura 59 - Cena 2, novos comentários.](#f59)

[Figura 60 - Introdução da história do jogo](#f60)

[Figura 61 - Gráfico de feedbacks](#f61)

[Figura 62 - Autorização Thyago](#f62)

[Figura 63 - Transcrição Playtest parte 1](#f63)

[Figura 64 - Transcrição Playtest parte 2](#f64)


# Lista de tabelas

[Tabela 01 - Requisitos do projeto](#t1) 

[Tabela 02 - Movimentação do personagem](#t2) 

[Tabela 03 - Trilha sonora](#t3) 

[Tabela 04 - Inventário](#t4)

[Tabela 05 - Casos de teste](#t5)

[Tabela 06 - Registro de Testes - Testador 1](#t6) 

[Tabela 07 - Registro de Testes - Testador 2](#t7) 

[Tabela 08 - Registro de testes - Testador 3](#t8) 

[Tabela 09 - Registro de testes - Testador 4](#t9) 

[Tabela 10 - Registro de testes - Testador 5](#t10) 

[Tabela 11 - Registro de testes - Testador 6](#t11) 

[Tabela 12 - Registro de testes - Testador 7](#t12) 

[Tabela 13 - Registro de testes - Testador 8](#t13) 

[Tabela 14 - Registro de testes - Testador 9](#t14) 

[Tabela 15 - Registro de testes - Testador 10](#t15) 

[Tabela 16 - Registro de testes - Testador 11](#t16) 

[Tabela 17 - Registro de testes - Testador 12](#t17) 

[Tabela 18 - Registro de testes - Testador 13](#t18) 

[Tabela 19 - Registro de testes - Testador 14](#t19) 

[Tabela 20 - Registro de testes - Testador 15](#t20) 

[Tabela 21 - Registro de testes - Testador 16](#t21) 

[Tabela 22 - Registro de testes - Testador 17](#t22) 

[Tabela 23 - Registro de testes - Testador 18](#t23) 


## Sumário

[1. Introdução](#c1)

[2. Visão Geral do Jogo](#c2)

[3. Game Design](#c3)

[4. Desenvolvimento do jogo](#c4)

[5. Casos de Teste](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[Anexos](#c8)

<br>


# <a name="c1"></a>1. Introdução

&nbsp;&nbsp;&nbsp;&nbsp;A introdução serve para estabelecer uma base para o desenvolvimento subsequente do jogo, estabelecendo expectativas e criando interesse no público. A seguir, está presente o link para iniciar o nosso jogo:

<a href="https://inteli-college.github.io/2024-T0012-IN01-G04">Link para o jogo UniWorld</a>


## 1.1. Escopo do Projeto

&nbsp;&nbsp;&nbsp;&nbsp;O objetivo deste projeto é criar um serious game online para otimizar o processo de integração e treinamento dos novos colaboradores da área de Tecnologia da Informação (TI) da Unilever. O jogo será uma ferramenta interativa e envolvente, fornecendo informações essenciais sobre as marcas, valores, cultura empresarial, produtos e procedimentos internos da Unilever, de forma a facilitar a absorção de conhecimento pelos novos funcionários.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;As funcionalidades principais incluirão uma introdução interativa sobre a empresa, apresentação das principais marcas e produtos, explicação dos processos internos de TI, instrução sobre o vocabulário interno da empresa, e informações sobre sustentabilidade, diversidade e progressão de carreira na Unilever. O jogo será desenvolvido para ser acessível a partir de dispositivos pessoais dos colaboradores, com uma interface intuitiva e atrativa, integrando elementos visuais como gráficos, animações e vídeos.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;O desenvolvimento do jogo segue metodologias ágeis, como Scrum ou Kanban, com divisão do trabalho em sprints de curto prazo e feedback contínuo. A equipe envolvida inclui desenvolvedores front-end e back-end, designer de interface do usuário (UI/UX), especialistas em conteúdo e educação corporativa, representantes da Unilever e potenciais usuários para testes de usabilidade.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;O cronograma de execução segue uma fase de planejamento de 1 semana, seguida por 6 semanas de desenvolvimento, 2 semanas de testes e ajustes, e 1 semana de lançamento. Os critérios de sucesso incluem elevado engajamento dos novos colaboradores, aquisição efetiva de conhecimentos, feedback positivo dos usuários e cumprimento dos prazos estabelecidos.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Ao final do projeto, espera-se que o serious game contribua significativamente para tornar o processo de onboarding dos novos funcionários da área de TI da Unilever mais eficiente, engajador e eficaz, fortalecendo assim a integração e o desenvolvimento desses profissionais na empresa.

### 1.1.1. Contexto da indústria

&nbsp;&nbsp;&nbsp;&nbsp;A Unilever é uma empresa “holding”, ou seja, é uma empresa que gerencia diversas subsidiárias de forma eficiente e estratégica. Além disso, é uma multinacional britânica de bens de consumo, classificada como a terceira maior no setor, competindo com empresas como P&G e Nestlé. A empresa tem forte presença nos mercados emergentes, com 60% de seus consumidores provenientes desses países. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Em 2021, registrou um lucro expressivo de mais de 3 bilhões de euros no primeiro semestre, apesar de uma queda global de aproximadamente 4% no lucro líquido. Em 2022, a Unilever anunciou uma reorganização em cinco unidades: beleza, bem-estar, cuidados com a casa, nutrição e sorvetes, no entanto, se separou de sua rede de sorvetes no primeiro semestre de 2024, visando melhorar a eficiência operacional. Diferentemente de seus concorrentes, que focam em categorias específicas em determinadas épocas, a Unilever mantém uma estratégia de diversificação constante. 

**Modelo de 5 Forças de Porter**

&nbsp;&nbsp;&nbsp;&nbsp;As 5 forças de Porter são análises internas e externas do mercado competitivo. Conforme Porter, entender a concorrência como centro do planejamento é a melhor forma de se proteger e de se impor em um mercado. Ele considera cinco aspectos-chave:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;- Poder de negociação dos fornecedores.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;- Poder de negociação dos compradores.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;- Ameaça de novos entrantes.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;- Ameaça de produtos ou serviços substitutos.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;- Rivalidade entre os concorrentes existentes.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Este modelo ajuda as empresas a entenderem a dinâmica competitiva do seu ambiente de mercado e a formularem estratégias para se manterem competitivas. Sendo assim, é extremamente crucial esta análise da Unilever.
<br>

<div align="center">
<sup><a name="f2"></a>Figura 2 - As 5 Forças de Porter
<img src= "/assets/forças_porter.jpg">
<sup>Fonte: Elaborado pelos autores (2024)
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Com base na análise de forças, a Unilever, líder na indústria de bens de consumo, enfrenta uma acirrada competição global e local, destacando-se o envolvimento de gigantes como Procter & Gamble, Nestlé e Johnson & . Esta rivalidade é impulsionada pela presença global das empresas concorrentes, pela diversidade de produtos e pela constante inovação para atender às demandas dos consumidores.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Por conta disso, estratégias de marketing agressivas e pressão nos preços tornam o ambiente ainda mais desafiador para a Unilever manter sua posição de mercado. Para enfrentar essa concorrência, a empresa precisa focar em diferenciação de produtos, eficiência operacional e expansão para novos mercados, mantendo-se ágil e adaptável para responder às mudanças nas preferências dos consumidores e estratégias dos concorrentes.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Além disso, a ameaça de produtos ou serviços substitutos é significativa, dada a variedade de marcas disponíveis e a facilidade de mudança para novas opções, impulsionada por avanços tecnológicos. Essas mudanças refletem uma crescente preocupação dos consumidores com questões ambientais e de saúde, impulsionando a demanda por produtos sustentáveis e orgânicos.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Ademais, os avanços tecnológicos têm facilitado a produção e distribuição desses produtos alternativos, aumentando a pressão sobre empresas estabelecidas. A entrada de novos concorrentes é dificultada pela rede de distribuição consolidada e pela força da marca Unilever, construída ao longo de décadas.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Outrossim, o poder de negociação dos clientes destaca a necessidade de sensibilidade às demandas do mercado e estratégias de precificação competitivas. O marketing eficaz é crucial para construir uma conexão emocional com os consumidores e destacar os valores da marca. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Assim como, a inovação contínua é essencial para atender às expectativas dos clientes e permanecer relevante. Quanto ao poder de negociação dos fornecedores, é crucial estabelecer parcerias sólidas e diversificar a base de fornecedores para garantir um suprimento estável e de qualidade.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Em suma, a Unilever enfrenta uma série de desafios competitivos em seu ambiente operacional, incluindo rivalidade intensa, ameaça de substitutos, barreiras à entrada de novos concorrentes e poder de negociação dos clientes e fornecedores. Gerenciar esses elementos é crucial para manter a posição da empresa no mercado e garantir seu sucesso contínuo.
<br>


### 1.1.2. Análise SWOT

&nbsp;&nbsp;&nbsp;&nbsp; A matriz SWOT é uma ferramenta de planejamento que avalia fatores internos e externos em uma empresa. Ela inclui forças, fraquezas, oportunidades e ameaças. As forças e fraquezas estão relacionadas ao ambiente interno, enquanto as oportunidades e ameaças dizem respeito ao ambiente externo. 
<br>

<div align="center"> 
<sup><a name="f3"></a>Figura 3 - Análise SWOT da empresa
<img src="/assets/swot_unilever.png">
<sup>Fonte: Elaborado pelos autores (2024)
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Em paralelo a essa análise, a Unilever destaca-se pela vasta gama de produtos e preocupação com sustentabilidade. Com 14 marcas gerando mais de 1 bilhão de faturamento anual, lidera em cuidados com a casa, higiene pessoal e alimentação. No entanto, enfrenta desafios, como a estagnação no mercado de ações e a necessidade de adaptação às mudanças de liderança, apesar de investir em profissionais qualificados e pesquisa de mercado, como destacado na matriz SWOT. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Embora vislumbre oportunidades de expansão global, enfrenta resistência no mercado financeiro. Ademais, a preocupação ambiental é evidente, mas algumas marcas comprometem o avanço empresarial, enquanto concorrentes mostram progressão contínua, representando um risco para seu crescimento.

### 1.1.3. Descrição da Solução Desenvolvida

&nbsp;&nbsp;&nbsp;&nbsp;A experiência de Onboarding em empresas diversas vezes é marcada por ser uma atividade maçante, o que acarreta em baixa atenção e engajamento dos novos funcionários e, assim, gera novos problemas, como a falta de “fit cultural” e pertencimento à empresa. Nesse contexto, para Unilever é fundamental que suas principais marcas, valores e cultura sejam apresentadas de uma forma dinâmica e engajante, com o intuito de facilitar a absorção dos tópicos supracitados.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;A solução proposta é um serious game, um jogo que não tem como objetivo apenas divertir, mas também ensinar, instruindo o novo colaborador não somente sobre seu cargo no setor de TI, como também dos seus produtos mais vendidos, do dicionário interno da empresa e a respeito de seus valores, como diversidade, sustentabilidade e progressão de carreira, tópicos que são levados muito a sério pela companhia, uma vez que a Unilever Brasil reduziu em 95,36% o desperdício por tonelada produzida e em 36,09% as emissões de gases de efeito estufa (Conselho Empresarial Brasileiro para o Desenvolvimento Sustentável). Além disso, proporção de 54% de mulheres e 46% de homens nas áreas de trabalho demonstra um compromisso com a pluralidade.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Para isso, estamos desenvolvendo um jogo pela web, assim, o novo colaborador apenas precisará obter o link do “game” fornecido pela empresa para poder jogar em seu notebook pessoal, avançando as fases e conhecendo cada vez mais sobre sua área de atuação assim como os princípios e contexto empresariais. Desse modo, iremos aumentar o engajamento do colaborador, por revelar questões como planos de carreiras e impactos sociais positivos realizados pela Unilever ao redor do mundo, e ressaltar que ele será um responsável direto por essas ações, promovendo maior conscientização e disposição nos recém-contratados.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Portanto, iremos considerar que o game será um sucesso assim que o novo funcionário absorver o conteúdo de forma mais efetiva e que o Onboarding se torne mais interessante. Para metrificar isso através do jogo, serão utilizadas ferramentas como: tempo jogado e desempenho nas fases como base.

### 1.1.4. Proposta de Valor

&nbsp;&nbsp;&nbsp;&nbsp;A proposta de valor é uma síntese que descreve de forma precisa os benefícios exclusivos que um produto ou projeto proporciona. Essencial para a estratégia de marketing e o sucesso do empreendimento, assim como destaca os pontos de diferenciação e as soluções oferecidas. Uma proposta de valor bem elaborada pode atrair clientes e diferenciar-se da concorrência, impactando positivamente o crescimento do projeto.
<br>

<div align="center"> 
<sup><a name="f4"></a>Figura 4 - Value proposition canva
<img src="/assets/ValuePropositionCanva.png">
<sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Para a elaboração da proposta de valor, foi imprescindível conduzir uma análise da situação do cliente, levando em consideração suas preocupações e desafios atuais, bem como as expectativas em relação aos benefícios advindos do produto. Além disso, do ponto de vista dos produtores do jogo, foram expostos os ganhos tangíveis e intangíveis que serão proporcionados pelo produto, destacando sua capacidade de atender às demandas do consumidor e suprir suas necessidades.
<br>

&nbsp;&nbsp;&nbsp;&nbsp; O projeto foi desenvolvido visando o onboarding dos novos funcionários da área de IT na Unilever. No entanto, no contexto atual, o mercado está em constante mudança, portanto fizemos um jogo facilmente modificável e com o código modularizado, o que facilita posteriores mudanças  no design, marcas, conteúdo e textos, ampliando, assim, suas aplicações. Dessa maneira, conseguimos expandir o mercado consumidor fazendo um jogo adaptável que pode ser implementado em diversas empresas e áreas diferentes.


### 1.1.5. Matriz de Riscos

&nbsp;&nbsp;&nbsp;&nbsp;A elaboração da matriz de riscos visa prever e gerir eventos que, futuramente, possam atrapalhar o desenvolvimento do produto, garantindo assim uma abordagem proativa na mitigação de potenciais obstáculos e na manutenção da qualidade e eficácia do projeto.
<br>

<div align="center"> 
<br>
<sup><a name="f5"></a>Figura 5 - Matriz de risco do projeto
<br>
<img src="/assets/MatrizDeRisco.jpg">
<br>
<sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Assim, foram analisados os impactos e as probabilidades de cada possível obstáculo. Com essa análise feita, é possível que o time se atente da melhor forma a riscos maiores, enquanto deixa riscos insignificantes de lado. Também foi desenvolvido um plano de ação para cada um dos riscos identificados para sabermos como agir caso eles ocorram. 
<br>
<br>

**Quebra do equipamento:** Fazer um jogo em html que pode ser rodado por outros aparelhos.
<br>

**Pedidos inesperados do parceiro com prazos curtos:** Deixar claro ao parceiro o que é possível fazer em certos períodos de tempo, e avisar que este tipo de mudança pode atrasar o projeto.
<br>

**Queda de internet:** Alertar o usuário para checar sua conexão, já que o jogo será online e possíveis quedas estão sujeitas a acontecer.
<br>

**Não entregar o projeto a tempo:** Planejar e documentar todo o processo a fim de garantir que o projeto será executado dentro do tempo limite.
<br>

**Membros da equipe não fazerem sua parte do projeto:** Conversar com o membro da equipe para entender o problema e resolver da melhor forma, e caso mesmo assim o integrante não fizer sua parte, redistribuir as atividades entre o restante do grupo.
<br>

**Incompatibilidade com o aparelho do usuário:** Recomendação do uso em notebooks da empresa, aparelho para qual o jogo está sendo desenvolvido.
<br>

**Bugs que atrapalham a experiência do usuário:** Disponibilizar um contato com o usuário para que eles nos avisem de eventuais falhas no sistema para que possamos resolver.
<br>

**Não haver melhoras significativas no onboarding:** Realizar enquetes com funcionários que participaram do onboarding recentemente para que não seja tedioso, e ter uma aba de feedbacks no próprio jogo para constantemente melhorarmos a experiência do usuário.
<br>

**Desaprovações do parceiro em relação ao jogo entregue:** Ouvir os representantes e entender o que precisa ser feito para adequarmos o jogo ao que o parceiro espera, e caso mesmo assim não haja aprovação do jogo, negociar os prazos e possibilidades de implantar melhorias.
<br>

## 1.2. Requisitos do Projeto

&nbsp;&nbsp;&nbsp;&nbsp; Nesta seção estão os requisitos do projeto implementados do jogo, ou seja, algumas demandas apresentadas pelo cliente que estão presentes em nosso trabalho.

<br>
<div align="center">
<sup><a name="t1"></a>Tabela 01 - Requisitos do projeto</sup>

\# | Requisito  
--- | ---
1 | O controle do personagem será realizado usando as teclas 'W','A','S','D' e as Setas do teclado para navegação pelas fases.
2 | A seleção de opções durante o jogo será realizada pelo mouse.
3 | O personagem perde uma vida toda vez que cair em certas regiões do mapa.
4 | O jogo se concentra na área UniOPS da Unilever para o treinamento do novo funcionário.
5 | A partir da segunda cena do jogo, o jogador terá acesso ao Dicionário Unilever, que apresentará os links e conteúdos da trilha de treinamento.
6 | O desenvolvimento do jogo será focado em direcionar o funcionário para a intranet da Unilever e cada fase terá um quiz sobre um tópico para garantir a absorção do conteúdo pelo funcionário.
7 | As fases do jogo são baseadas nos produtos da Unilever.
8 | Assim que o personagem interagir com o NPC, as movimentações do personagem serão desativadas e retomadas após a fala do NPC finalizar.
9 | A interação com o elevador será realizada utilizando a tecla 'E'.
10 | A interação com o dicionário será realizada utilizando a tecla 'X'.
11 | Para sair do HUB de links do dicionário é necessário apertar novamente a tecla 'X'.


<br>
<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>
<br>


&nbsp;&nbsp;&nbsp;&nbsp;O desenvolvimento do serious game para o onboarding de novos funcionários da área de TI da Unilever é um projeto essencial para promover uma integração eficaz e engajadora dos colaboradores. Com foco na área UniOPS da empresa, o jogo proporcionará uma experiência interativa e imersiva, permitindo o controle do personagem por meio de teclas específicas e a seleção de opções via mouse. As fases baseadas nos produtos da Unilever e os quizzes garantirão a absorção efetiva do conteúdo, enquanto a integração com a intranet da empresa fornecerá acesso direto aos recursos de treinamento e informações relevantes. A interação com NPCs e elementos do cenário será facilitada por teclas específicas, proporcionando uma experiência de jogo fluida e intuitiva. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Com esses recursos, espera-se que o serious game seja uma ferramenta valiosa para acelerar o processo de integração dos novos funcionários, promovendo uma compreensão profunda dos valores, cultura e operações da Unilever.

## 1.3. Público-alvo do Projeto

&nbsp;&nbsp;&nbsp;&nbsp;O público-alvo que utilizará nosso jogo terá em média 27 anos de idade (nos baseando na idade com qual idade as pessoas que trabalham na empresa atualmente tinham quando foram recém contratados) e estarão participando do processo de Onboarding da área de Tecnologia da Informação na Unilever (UniOps); mas suas subáreas de atuação podem variar entre "One Access and Connectivity" (OAC); Identity, Directory and Authentication Management (IDAM); “Supply Chain”; “OneSAP”; Order to Cash (O2C); Projetos, entre outras.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Em relação ao gênero, o público é balanceado, sendo composto por 63% colaboradores do sexo masculino e 37% colaboradoras do sexo feminino. Entrando no quesito “tipo de jogo que os usuários mais gostam”, os estilos predominantes são: jogos de aventura, ação, competitivos, estratégia e memorização; a minoria prefere jogos mais casuais em seus momentos de lazer.
Considerando os meios de acesso a esses jogos, também há uma disputa balanceada entre console, computador e smartphone.
<br>
&nbsp;&nbsp;&nbsp;&nbsp; Também vale ressaltar, que todos os colaboradores receberão um notebook da companhia para trabalhar e realizar seus afazeres, sendo assim, nosso público-alvo possui no mínimo um computador para rodar nosso “game”.



# <a name="c2"></a>2. Visão Geral do Jogo

&nbsp;&nbsp;&nbsp;&nbsp;A visão geral do jogo é uma descrição ampla e abrangente dos principais aspectos e características do jogo. Isso inclui informações como o gênero do jogo (por exemplo, ação, aventura, estratégia, etc.), tempo estimado do jogo, os objetivos e desafios que os jogadores enfrentarão, além de outros elementos também importantes. A visão geral fornece uma ideia geral do que os jogadores podem esperar ao jogar o jogo e ajuda a definir a identidade e proposta do jogo para o público-alvo.


## 2.1. Objetivos do Jogo

&nbsp;&nbsp;&nbsp;&nbsp;Em nosso jogo, buscamos implementar uma jogabilidade mais voltada para um aspecto contemplativo e observador,  na qual o jogador percorre por diferentes cenários bem estruturados, e consegue apreciar a experiência estética. Por isso, optamos por não colocarmos combate contra inimigos ativos. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Para avançar nas etapas do jogo, o personagem deve percorrer o caminho arquitetado no mapa, interagir com os NPCs e cumprir as tarefas propostas com as atividades da Unilever. O objetivo final do jogo é que o usuário interaja com o máximo de links e minigames possíveis, passe de todas as fases, e chegue até o fim do jogo.


## 2.2. Características do Jogo

&nbsp;&nbsp;&nbsp;&nbsp;As características de um jogo são os atributos distintivos que definem sua natureza e experiência oferecida aos jogadores.

### 2.2.1. Gênero do Jogo

&nbsp;&nbsp;&nbsp;&nbsp;O estilo de jogo escolhido foi o de plataforma duas dimensões (2D), de visão lateral, como a visão da franquia de jogos mais popular da Nintendo, Mario. Nesse contexto, o jogador enfrenta uma série de desafios enquanto controla um personagem que deve superar diversos obstáculos, alcançar objetivos e avançar as fases até chegar ao final do jogo.


### 2.2.2. Plataforma do Jogo

&nbsp;&nbsp;&nbsp;&nbsp;O jogo foi pensado para desktop e notebooks e está sendo desenvolvido para o uso exclusivo em ambiente Web, pensado na jogabilidade de uma plataforma que contém acesso a “features” externas como o teclado e o touchpad/mouse.

### 2.2.3. Número de jogadores

&nbsp;&nbsp;&nbsp;&nbsp;O jogo é “single player”, ou seja, a jogabilidade é única e exclusivamente individual. Tal característica foi exigida pelo parceiro de projeto, que pediu que o colaborador da Unilever jogue o jogo individualmente, não tendo interação com outros “players”.


### 2.2.4. Títulos semelhantes e inspirações

&nbsp;&nbsp;&nbsp;&nbsp;Jogos como Super Mario World, Celeste, Sonic e Ori and the Blind Forest serviram de grandes inspirações para o desenvolvimento do jogo. Tanto pelo estilo de jogo plataforma duas dimensões muito bem desenvolvida, como pela estética bem estruturada, no caso de Super Mario e Celeste, e pelas mecânicas dinamizadas.

### 2.2.5. Tempo estimado de jogo

&nbsp;&nbsp;&nbsp;&nbsp;O jogo possui tempo estimado de 10 minutos quando percorrido em sua totalidade e de forma sequencial, respeitando a velocidade do personagem, a ordem das fases, a coleta das moedas e o quiz respondido uma vez corretamente. Cada fase do jogo tem um tempo médio de 1 minuto e 30 segundos para ser completada, considerando a passagem pelo mapa, que o quiz tenha sido respondido com todas as respostas corretas e que todas as moedas tenham sido coletadas durante o percurso da fase. Além disso, é importante considerar que, caso o jogador perca vidas, falhe no quiz ou reinicie o jogo, o tempo total de jogo pode ser maior do que o estimado inicialmente. Esses fatores adicionais podem afetar o tempo total de jogabilidade, exigindo mais tempo para completar o jogo completamente.

# <a name="c3"></a>3. Game Design

&nbsp;&nbsp;&nbsp;&nbsp;Game design é o processo de desenvolvimento do jogo incluindo a concepção de todos os elementos que compõem a experiência. Isso envolve a definição de mecânicas de jogo, enredo, interações, personagens, níveis de dificuldade, áudio e todos os outros aspectos que influenciam a jogabilidade e a experiência do jogador.


## 3.1. Enredo do Jogo

&nbsp;&nbsp;&nbsp;&nbsp;A história se passa em um mundo fictício, de certa forma semelhante à realidade comum, com problemas reais presentes na contemporaneidade, como altos índices de poluição e questões relacionadas à sustentabilidade sendo negligencidas por grandes corporações, todavia com partes abstratas e fantasiosas, uma vez que há robôs com consciência. Dessa forma, o personagem principal, nomeado Lev, é um robô de aspecto humanoide fabricado por outra empresa que trabalha de maneira insustentável e poluente, de maneira que ele percebe que as ações da companhia não estão corretas e que aquela cultura desenvolvimentista é prejudicial ao planeta e não vê mais propósito em contribuir com esse trabalho. Assim, Lev se recusa a continuar exercendo as tarefas para as quais foi programado e, por isso, a corporação assume que ele tem algum erro e o descarta no lixo. Assim, o jogo se inicia: Lev se encontra na saída de um lixão e vai em busca da Unilever, pois descobriu que a empresa possui uma cultura voltada à sustentabilidade e à inclusão.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Após passar por obstáculos, o protagonista chega até a nova empresa, onde é bem recebido por um de seus colaboradores. Ele é convidado a fazer um tour para conhecer melhor as propostas da companhia e seus diferentes aspectos (com ênfase nas partes de tecnologia, como o UniOps, as principais marcas adquiridas pela Holder, o dicionário Unilever, canais de atendimento de suporte e como funciona a organização de equipes por dentro). Depois de conhecer uma parte da cultura empresarial, o robô decide entrar para a companhia e ser um colaborador, porque ali seria um local positivo para o seu crescimento pessoal, que possui várias ações ambientais positivas e que apoia a inclusão social e a diversidade.

## 3.2. Personagens

&nbsp;&nbsp;&nbsp;&nbsp;A implementação de personagens em um jogo é fundamental não apenas para a narrativa e a jogabilidade, mas também para o envolvimento emocional dos jogadores com o personagem e com uma narrativa cativante.

### 3.2.1. Controláveis

&nbsp;&nbsp;&nbsp;&nbsp;Personagens controláveis são os que o jogador assume o controle direto em um jogo eletrônico ou ambiente virtual. Isso implica que o jogador tem a capacidade de influenciar as ações, movimentos e decisões desses personagens por meio de dispositivos de entrada, como teclado, mouse, e assim por diante. O personagem escolhido para o projeto foi um androide chamado Lev. Escolhemos fazer o personagem principal não-humano para abraçar a temática de tecnologia e programação - área de treinamento dos novos funcionários. O personagem tem cores que remetem ao azul como cor principal do logo da Unilever e o seu objetivo principal é conhecer mais sobre a tecnologia e a responsabilidade ecológica da Unilever para ajudar a treinar profissionais capacitados e responsáveis. 

<br>
<div align="center"> 
<sup><a name="f6"></a>Figura 6 - Spritesheet para animações do personagem
  <br>
<img src="/assets/spritesheettest.png"> 
  <br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;O personagem tem movimentos básicos como andar, pular e agachar, além de contar com a habilidade de pulo duplo e também um avanço - como uma arrancada - para superar os diversos obstáculos presentes no jogo. Diante disso, a escolha do personagem controlável, o Android chamado Lev, reflete o foco na temática de tecnologia e programação, alinhado ao treinamento dos novos funcionários da Unilever. Suas características e habilidades foram cuidadosamente projetadas para proporcionar uma experiência de jogo imersiva e coesa, enquanto também transmitem os valores e objetivos da empresa.
 
### 3.2.2. Non-Playable Characters (NPC)

&nbsp;&nbsp;&nbsp;&nbsp;Um NPC é um personagem dentro de um jogo eletrônico ou mundo virtual que é controlado pelo próprio jogo em vez de ser controlado diretamente pelo jogador. Esses personagens são criados para desempenhar papéis específicos dentro do jogo, como fornecer informações, dar missões, interagir com o jogador ou preencher o mundo virtual com uma sensação de vida e atividade. O NPC projetado para integrar o projeto assume a forma de um personagem de interação, personificando Thyago Llano, colaborador da Unilever, cuja missão consistiu em nos introduzir aos detalhes essenciais da empresa.
<br>

<div align="center"> 
<sup><a name="f7"></a>Figura 7 - Spritesheet para animações do NPC frontal
 <br>
<img src="/assets/sprites_front_NPC.png"> 
 <br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f8"></a>Figura 8 - Spritesheet para animações do NPC lateral
 <br>
<img src="/assets/sprites_side_NPC.png"> 
 <br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

&nbsp;&nbsp;&nbsp;&nbsp; A escolha deliberada recaiu sobre a representação de Thyago em uma abordagem guiada e esclarecedora sobre os trilhos a serem percorridos no contexto de TI pelo personagem Lev, que representa os novos funcionários da área. Ao guiar o personagem controlável Lev, representante dos novos funcionários de TI, o NPC do Thyago proporciona uma imersão eficiente no ambiente corporativo e tecnológico da Unilever, limitando-se à interação por meio de diálogos com Lev, sem controle direto do jogador. Isso resulta em uma experiência coesa e visualmente consistente com a imagem de Thyago, incorporando esteticamente elementos inspirados em sua própria imagem e estilo.

### 3.2.3. Diversidade e Representatividade dos Personagens

&nbsp;&nbsp;&nbsp;&nbsp;Diversidade e representatividade são ideias levadas muito a sério pela Unilever, de modo global, e compreendemos a responsabilidade que temos ao desenvolver um jogo que servirá para introduzir a empresa para novos funcionários de um país tão diverso como o Brasil. Nesse sentido, a escolha do personagem protagonista como um robô com algumas das cores definidas na paleta da Unilever e com um formato de monitor de computador foi pensado para promover um sentimento de indentificação por parte dos novos colaboradores, pois evidenciará que esse jogo foi desenvolvido exclusivamente para os novos funcionários de tecnologia da companhia. Assim, fazer com que o indíviduo se sinta representado com alguma experiência é essencial para gerar sensações positivas para ele, como de pertencimento, que consequentemente poderão acarretar em outros benefícios visados, como facilitar o processo de adaptação. 


## 3.3. Mundo do jogo

&nbsp;&nbsp;&nbsp;&nbsp;O mundo de um jogo refere-se ao ambiente no qual a história do jogo se desenrola, podendo variar de acordo com o gênero, tema e estilo do jogo, o mundo do jogo é projetado para oferecer uma experiência imersiva aos jogadores, permitindo-lhes explorar, interagir e se envolver com o ambiente conforme avançam na história e completam os objetivos do jogo.

### 3.3.1. Locações Principais e/ou Mapas
&nbsp;&nbsp;&nbsp;&nbsp;O jogo se inicia com o personagem presente no final de um depósito de lixo, após sair da antiga empresa onde trabalhava. Essa região é caracterizada por uma alta poluição e o jogador atravessa áreas com rios, bosques e grandes rochas antes de chegar ao prédio da Unilever.
<br>

<div align="center"> 
<sup><a name="f9"></a>Figura 9 - Mapa completo da primeira fase do jogo
<img src="/assets/tela1.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Após entrar no prédio, o jogador avança para a segunda cena do jogo, que se passa em um andar de escritório dentro da empresa. Nessa parte, o personagem interage com um NPC, recebe um dicionário e pode percorrer todo o corredor para acessar todas as fases subsequentes.
<br>
<br>

<div align="center">
<sup><a name="f10"></a>Figura 10 - Mapa completo da segunda fase do jogo
<img src="/assets/tela2.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Na fase 1 do jogo, que foi planejada com base nos conteúdos organizacionais e temática das marcas OMO e CIF, o jogador enfrenta obstáculos de plataforma e utiliza habilidades como o pulo duplo para alcançar o quiz, localizado no final do mapa. Após responder ao quiz, o jogador completa a fase.
<br>
<br>

<div align="center">
<sup><a name="f11"></a>Figura 11 - Mapa completo do level 1 do jogo
<img src="/assets/fase1.jpg">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;A fase 2 foi projetada com inspiração nas marcas Dove, Clear e Rexona, incluindo conteúdos educacionais da Unilever. O nível de dificuldade aumenta e o jogador enfrenta desafios que requerem suas habilidades, incluindo uma etapa na qual não pode cair sob pena de perder uma vida. O quiz é novamente necessário para finalizar a fase.
<br>
<br>

<div align="center">
<sup><a name="f12"></a>Figura 12 - Mapa completo do level 2 do jogo
<img src="/assets/fase2.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;A fase 3 foi desenvolvida com base nas marcas Knorr e Hellmann's, incorporando os conteúdos de suporte da Uniops. Esta fase exige mais da mecânica de agachar em comparação com as anteriores, proporcionando uma progressão de dificuldade. O quiz está próximo ao final da fase e sua conclusão é necessária para avançar.
<br>
<br>

<div align="center">
<sup><a name="f13"></a>Figura 13 - Mapa completo do level 3 do jogo
<img src="/assets/fase3.jpg">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;A fase 4 foi idealizada com a temática do time da Uniops e a marca Close Up, apresentando uma estética baseada nas cores das marcas e da Unilever. Essa fase introduz dinâmicas e mecânicas diferentes das anteriores. O jogador precisa percorrer todo o trajeto e responder ao quiz para finalizá-la.
<br>
<br>

<div align="center">
<sup><a name="f14"></a>Figura 14 - Mapa completo do level 4 do jogo
<img src="/assets/level4.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Na cena final, projetada de forma diferente, o jogador não enfrenta desafios específicos ou mecânicas especiais, apenas a movimentação padrão. Um corredor exibe as marcas apresentadas ao longo do jogo, juntamente com objetos colecionáveis de cada uma. Ao final, o personagem interage com um NPC para encerrar o jogo.
<br>
<br>

<div align="center">
<sup><a name="f15"></a>Figura 15 - Mapa completo da fase final do jogo
<img src="/assets/fasefinal.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Cada fase foi cuidadosamente planejada com um conteúdo específico para ser abordado, bem como uma marca da Unilever para representar essa etapa. Essa abordagem foi adotada para proporcionar uma experiência mais confortável ao jogador com o ambiente das marcas, ao mesmo tempo em que ele absorve os conteúdos selecionados. Já a fase final foi concebida sem desafios, servindo apenas como um corredor de apresentação das marcas e da área UniOPS, destacando assim o progresso do jogador.

### 3.3.2. Navegação pelo mundo
&nbsp;&nbsp;&nbsp;&nbsp;No jogo, o personagem pode se movimentar para a direita e esquerda, pular, se agachar e utilizar habilidades especiais, como dar um segundo pulo e dar avanços rapidamente em alguma direção de movimento padrão dele. Essa variação de mecânicas cria a oportunidade de haver diferentes formas de se ir de uma fase para a outra, exigindo a capacidade do jogador de se movimentar com proficiência para passar de fases. Como poderá ser observado na tabela 02, a qual demonstra os comandos para cada movimentação do personagem.

<div align="center">
<sup><a name="t2"></a>Tabela 02 - Movimentação do personagem</sup>

| #  | Teclas                       | Ação               | Resultado                          |
|--- | ---------------------------- | ------------------ | ---------------------------------- |
| 1  | W, Seta Up                   | Movimentação       | Saltar                             |
| 2  | A, Seta Left, D, Seta Right | Movimentação       | Andar                              |
| 3  | S, Seta Down                 | Movimentação       | Agachar                            |
| 4  | Espaço                       | Movimentação       | Avançar                            |
| 5  | E                            | Interagir com o mapa | Passar de uma tela para outra   |
| 6  | Esc                          | Configurações      | Abrir menu do jogo                 |
| 7  | X                          | Dicionário      | Abrir o dicionário do jogo                 |

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Em síntese, o protagonista possui uma variedade de movimentos que proporciona diferentes abordagens para transitar entre as fases, demandando do jogador habilidade e destreza para progredir. A inclusão de comandos específicos para interagir com o ambiente e acessar recursos adicionais, como o dicionário do jogo, enriquece a experiência do jogador e promove uma jogabilidade mais dinâmica no universo do jogo.


### 3.3.3. Condições climáticas e temporais

&nbsp;&nbsp;&nbsp;&nbsp;Não se aplica.

### 3.3.4. Concept Art

&nbsp;&nbsp;&nbsp;&nbsp;Para o desenvolvimento do nosso jogo, uma das etapas fundamentais do projeto é estabelecer um ponto de partida e criar uma visão inicial do que esperamos fazer. Nesse sentido, surge a Concept Art, que são desenhos que funcionam como esboços iniciais de personagens, cenários, objetos, entre outros possíveis elementos do jogo. Dessa forma, para realizar um jogo que representasse, de fato, a Unilever, realizamos concepts de produtos de marcas da empresa e estudamos sobre a paleta de cores da Unilever para adequar o personagem e cenários às principais cores da empresa.
<br>

<div align="center">
    <sub><a name="f16"></a>Figura 16 - Concept Art: Tela 1
    <br>
    <img src="/assets/tela1.conceptart.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>

<div align="center">
    <sub><a name="f17"></a>Figura 17 - Concept Art: Tela 2
    <br>
    <img src="/assets/tela2.conceptart.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;A concept art da tela 1 e da tela 2 foram rascunhos essenciais para o desenvolvimento das telas, bem como para o aprimoramento das mesmas diante das necessidades de dificuldade e estética.
<br>
<br>

<div align="center">
    <sub><a name="f18"></a>Figura 18 - Concept Art: Icons
    <br>
    <img src="/assets/icons.conceptart.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;A concept art dos ícones foi de grande importância para o desenvolvimento do design e criação oficial de cada um dos objetos presentes na imagem.
<br>
<br>

<div align="center">
    <sub><a name="f19"></a>Figura 19 - Paleta de cores do personagem principal
    <br>
    <img src="/assets/paleta_robo.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>

<div align="center">
    <sub><a name="f20"></a>Figura 20 - Paleta de cores da primeira cena
    <br>
    <img src="/assets/paleta_cena1.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;A paleta de cores do personagem principal foi selecionada com base nas cores corporativas fornecidas pela Unilever, garantindo assim que o personagem seja verdadeiramente representado na identidade da empresa. Quanto à primeira cena, sua paleta de cores foi estrategicamente concebida para se destacar da típica ambientação de escritório, proporcionando uma abordagem visualmente cativante e distintiva para o início do jogo.
<br>
<br>

<div align="center">
    <sub><a name="f21"></a>Figura 21 - Concept Art: UI
    <br>
    <img src="/assets/conceptUI.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;O desenvolvimento da tela da UI seguiu fielmente a concept art como inspiração, visando manter a ideia de acessibilidade fácil a outras páginas importantes do jogo, com o intuito de introduzir o game de forma mais formal e atrativa para os jogadores.
<br>
<br>

<div align="center">
    <sub><a name="f22"></a>Figura 22 - Concept Art: Fases
    <br>
    <img src="/assets/artfases1.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>

<div align="center">
    <sub><a name="f23"></a>Figura 23 - Concept Art: Fases (continuação)
    <br>
    <img src="/assets/artfases2.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;A concept art das fases é um rascunho geral e abrangente de diferentes desafios, os quais foram destrinchados e adaptados para cada fase, utilizando o mesmo esboço como base de desenvolvimento. Esse processo permitiu uma abordagem coesa e consistente na criação de cada nível do jogo.
<br>
<br>

<div align="center">
    <sub><a name="f24"></a>Figura 24 - Sprite de um elemento de fundo: Amaciante Comfort
    <br>
    <img src="/assets/Amaciante.png", width = "60">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)
</div>

<br>

<div align="center">
    <sub><a name="f25"></a>Figura 25 - Spritesheet de um dos elementos dispostos no mapa: Moeda</sub>
    <br>
    <img src="/assets/Moeda 32px.png">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)</sup>
</div>

<br>

<div align="center">
    <sub><a name="f26"></a>Figura 26 - Sprite de uma engrenagem de acesso às configurações do jogo</sub>
    <br>
    <img src="/assets/Ícone configurações.png", width = "60">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)</sup>
</div>

<br>

<div align="center">
    <sub><a name="f27"></a>Figura 27 - Sprite do ícone do Dicionário Unilever</sub>
    <br>
    <img src="/assets/Ícone dicionário.png", width = "60">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)</sup>
</div>

<br>

<div align="center">
    <sub><a name="f28"></a>Figura 28 - Ícone da Cif</sub>
    <br>
    <img src="/assets/cifColec.png", width = "60">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)</sup>
</div>

<br>

<div align="center">
    <sub><a name="f29"></a>Figura 29 - Ícone da Close Up</sub>
    <br>
    <img src="/assets/closeupColec.png", width = "60">
    <br>
    <sup>Fonte: Elaborado pelos autores (2024)</sup>
</div>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;O desenvolvimento das sprites dos elementos coletáveis, dos elementos de fundo, e dos dispostos no mapa de forma aleatória, tornam o jogo mais intuitivo e fácil de entender.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Além disso, a Concept Art possui um papel crucial na definição da estética e do estilo visual do jogo. Ao criar esses esboços iniciais, diferentes ideias e conceitos visuais são explorados para visualizar como o jogo final poderá se parecer. Isso é essencial para garantir uma consistência visual em todo o jogo.

### 3.3.5. Trilha sonora

&nbsp;&nbsp;&nbsp;&nbsp;A trilha sonora do jogo foi desenvolvida levando em consideração não apenas o design de cada tela e o estilo de jogabilidade, mas também o objetivo de tornar a experiência mais imersiva e envolvente por meio do som. Para isso, foram selecionadas músicas que se adequam ao ambiente de cada fase. Na tela de abertura e na fase de testes de habilidades, optou-se por uma música característica que remete aos tradicionais mini-games.

<br>
<div align="center">

<sup><a name="t3"></a>Tabela 03 - Trilha sonora</sup>

\# | titulo | ocorrência | autoria
--- | --- | --- | ---
1 | mainMenu. | Em toda a UI. | João Carbone.
2 | main. | Em todas as fases do jogo. | João Carbone.
<br>
<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;A adição de sons em um jogo é essencial para estabelecer uma experiência estimulante para os jogadores. Isso os ajuda a imergir no mundo do jogo, proporcionando orientação no ambiente e aprimorando a narrativa, permitindo uma conexão mais profunda com a experiência de jogo.


## 3.4. Inventário e Bestiário

&nbsp;&nbsp;&nbsp;&nbsp;No contexto dos jogos, o inventário é onde os jogadores gerenciam os itens que coletam, como armas e poções, enquanto o bestiário é um catálogo de criaturas encontradas no jogo, fornecendo informações sobre suas características e habilidades. Juntos, esses elementos são essenciais para o interesse do jogador, ajudando-os a enfrentar desafios e entender melhor o mundo do jogo.

### 3.4.1. Inventário

&nbsp;&nbsp;&nbsp;&nbsp;Durante o jogo, existem vários itens que podem ser coletados enquanto avança, adicionando desafios e recompensas à experiência. A moeda é o primeiro desses itens e está espalhada por todas as fases do jogo, oferecendo aos jogadores a oportunidade de aumentar sua pontuação. Além disso, na fase final do jogo há objetos colecionáveis de diversas marcas da Unilever relacionadas com o tema específico de cada uma das fases.

<div align="center">

<sup><a name="t4"></a>Tabela 04 - Inventário</sup>

\# | item |  | como obter | função | efeito sonoro
--- | --- | --- | --- | --- | ---
1 | Moeda | <img src="/assets/moeda.png"> | há muitas espalhadas por todas as fases. | acumula dinheiro. | som de moeda não adicionado.
2 | Omo colecionável. | <img src="/assets/omoColec.png"> | coletado no level final do jogo. | função de recompensa. | som de coleta não adicionado.
3 | Rexona colecionável. | <img src="/assets/rexonaColec.png"> | coletado no level final do jogo. | função de recompensa. | som de coleta não adicionado.
4 | Dove colecionável. | <img src="/assets/doveColec.png"> | coletado no level final do jogo. | função de recompensa. | som de coleta não adicionado.
5 | Clear colecionável. | <img src="/assets/clearColec.png"> | coletado no level final do jogo. | função de recompensa. | som de coleta não adicionado.
6 | Knorr colecionável. | <img src="/assets/knorrColec.png"> | coletado no level final do jogo | função de recompensa. | som de coleta não adicionado.
7 | Hellmanns colecionável. | <img src="/assets/hellmannsColec.png"> | coletado no level final do jogo. | função de recompensa. | som de coleta não adicionado.
8 | Cif colecionável. | <img src="/assets/cifColec.png"> | coletado no level final do jogo. | função de recompensa. | som de coleta não adicionado.
9 | Close Up colecionável. | <img src="/assets/closeupColec.png"> | coletado no level final do jogo. | função de recompensa. | som de coleta não adicionado.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;A coleta de itens, como moedas e colecionáveis das marcas da Unilever, aprimoram a experiência do jogador ao proporcionar desafios e recompensas. Esses colecionáveis, adquiridos no estágio final, traz a lembrança do trajeto percorrido ao longo do jogo.

### 3.4.2. Bestiário

&nbsp;&nbsp;&nbsp;&nbsp;Não se aplica


## 3.5. Gameflow (Diagrama de cenas)
&nbsp;&nbsp;&nbsp;&nbsp;Gameflow refere-se à ideia de um jogo fluido e contínuo com uma relação coerente entre suas cenas, buscando harmonizar desafios, recompensas, objetivos e momentos de tensão. Esse equilíbrio visa não apenas criar uma experiência agradável, mas também manter os jogadores motivados e imersos na narrativa, garantindo que a progressão do jogo seja cativante.
<br>

<div align="center"> 
<sup><a name="f30"></a>Figura 30 - Gameflow da UI
<img src="/assets/gameflow1.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f31"></a>Figura 31 - Gameflow da cena inicial do jogo
<img src="/assets/gameflow2.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f32"></a>Figura 32 - Gameflow da segunda cena do jogo
<img src="/assets/gameflow3.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f33"></a>Figura 33 - Gameflow da primeira fase do jogo
<img src="/assets/gameflow4.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f34"></a>Figura 34 - Gameflow da segunda fase do jogo
<img src="/assets/gameflow5.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f35"></a>Figura 35 - Gameflow da terceira fase do jogo
<img src="/assets/Gamefloww6.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f36"></a>Figura 36 - Gameflow da quarta fase do jogo
<img src="/assets/Gamefloww7.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f37"></a>Figura 37 - Gameflow da cena final do jogo
<img src="/assets/Gamefloww8.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

<div align="center"> 
<sup><a name="f38"></a>Figura 38 - Gameflow do quiz do jogo
<img src="/assets/gameflow9.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

1 - Interface da UI do jogo, fornecendo as opções de acesso à página de controles e à de configurações. Essa interface é projetada para garantir uma experiência intuitiva para os jogadores, permitindo-lhes acessar as configurações e consultar facilmente os controles para dominar o jogo.

2 - Tela de controles criada para o jogador acessar as diferentes teclas utuilizadas para desenvolver as habilidades dentro do jogo.

3 - Tela de configurações com acesso aos controles e aos créditos, permitindo também a mutação do som do jogo.

4 - Tela de créditos desenvolvida com os nomes de cada um dos integrantes do grupo com os links do Linkedin ligados a seus respectivos nomes.

5 - Tela para apresentação da introdução do jogo, contextualizando o jogador sobre o enredo e a história do personagem dentro do jogo.

6 - Tela de iniciação do jogo após a apresentação do enredo, com o personagem já contextualizado para prosseguir com trajeto do game.

7 - Tela criada para que o jogador possa testar suas habilidades, como pulo, pulo duplo, movimentação para esquerda e para a direita, agachar e um movimento de aceleração do personagem, oferecendo um ambiente controlado e desafiador que permite a prática e aprimoramento das mecânicas necessárias ao longo do jogo.

8 - Reinício do jogo devido à morte do personagem, redirecionando para a primeira parte da tela com o intuito de oferecer ao jogador uma chance de progredir com as habilidades que o jogo fornece.

9 - Chegada ao final da primeira tela com todas as devidas habilidades testadas, de forma a marcar o encerramento da tela 1 e o início da tela 2.

10 - Início da cena 2 no ambiente caracterizado proporcionando uma transição imersiva para um novo cenário dentro do jogo, com objetos moldados para refletir a identidade da Unilever e com um NPC interativo para disponibilizar os links de conteúdo fornecidos pela empresa.

11 - Possibilidade de entrada na fase 1 do jogo com uma temática relacionada a Uniops e caracterizada com as marcas OMO e CIF.

12 - Possibilidade de entrada na fase 2 do jogo com uma temática relacionada a Uniops e caracterizada com as marcas Clear, Dove e Rexona.

13 - Possibilidade de entrada na fase 3 do jogo com uma temática relacionada a Uniops e caracterizada com as marcas Hellmann's e Knorr.

14 - Possibilidade de entrada na fase 4 do jogo com uma temática relacionada a Uniops e caracterizada com a marca CloseUp.

15 - Dentro de cada fase, haverá um quiz programado para avaliar o desempenho ou entendimento do jogador com relação ao conteúdo apresentado nos links disponibilizados na cena 2, explorando informações cruciais sobre a empresa, sua cultura, valores e práticas, de forma a proporcionar ao jogador uma experiência interativa que vai além do ambiente virtual do jogo. Essa abordagem não apenas enriquece a imersão no jogo, mas também promove uma compreensão mais profunda e envolvente do contexto corporativo.

16 - Retorno do jogador para o ambiente caracterizado da Unilever para ter a possibilidade de acesso em outras fases.

17 -  Tela final do jogo com a passagem das marcas que foram apresentadas durante o percurso do jogo e objetos colecionáveis de cada uma dessas marcas.

18 - Encerramento do jogo e finalização do treinamento de Onboarding.

19 - Realização do quiz com a resposta correta assinalada.

20 - Realização do quiz com a resposta incorreta assinalada.


<br>
&nbsp;&nbsp;&nbsp;&nbsp; A seguir está o link do gameflow completo, elaborado no Miro
 <a href="https://miro.com/app/board/uXjVKY-nYoI=/?share_link_id=403176687728">Gameflow das fases do jogo</a>


## 3.6. Regras do jogo

&nbsp;&nbsp;&nbsp;&nbsp;Os objetivos finais que serão impostos ao jogador como requerimento para que o jogo desenvolvido seja finalizado, são o de entender a maioria dos principais conceitos presentes no dicionário Unilever, o de responder todos os quizzes do jogo (para um total de 4 quizzes) e o de conseguir superar todas as dificuldades das fases, demonstrando, assim, domínio das mecânicas e dinâmicas apresentadas no jogo. Para isso, se fará necessário, antes, atingir metas relacionadas às cenas do jogo:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Menu Inicial - No menu, a meta é que o jogador já entenda e adapte-se, ou pelo menos comece esse processo de entendimento e adaptação, à estética visual e sonora do jogo. Também é um objetivo que ele se habitue ao estilo de GUI (Graphic User Interface), que se refere às interfaces presentes de forma fixa durante todo o decorrer do jogo e que podem ser acessadas pelo jogador, possuindo o intuito de adicionar informação ao contexto, isto é, menu de pausa, de configurações, inventário, etc. Que será utilizado no jogo, bem como que conheça as principais mudanças (principalmente voltadas à acessibilidade) que podem ser implementadas no jogo por meio do menu de configurações dele.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Cena Inicial - Na primeira cena jogável, os principais objetivos do jogador são aprender e adaptar-se às mecânicas básicas presentes no jogo — andar (para a esquerda ou para a direita), pular, pular duplamente, agachar e avançar — por meio tanto das affordances (que são indicações que o próprio ambiente do jogo fornece ao jogador para que ele continue progredindo na jogabilidade, ou seja, uma dica do que deve ser feito mediante aquele contexto) e elementos do HUD (Heads-Up Display, que são elementos dispostos na tela do jogador os quais possuem o objetivo de não roubar a atenção da cena para si, ainda assim apresentando informações vitais para o funcionamento do jogo, como, por exemplo, quantidade de vidas, dinheiro restante, pontuação, etc.) quanto da própria experiência possibilitadas nessa cena. 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Além disso, também é requerido que o jogador se adapte ao perfil de obstáculos que será apresentado durante as próximas cenas, ou seja, paredes mais altas que o comum (que requerem o uso do pulo duplo), espaços que não podem ser tocados (que requerem o uso de habilidades diversas para serem desviados), espaços os quais o personagem inicialmente não pode acessar por causa de seu tamanho (que requerem o uso da mecânica de agachar), distâncias longas demais para serem atravessadas somente com pulos comuns ou duplos (que requerem o uso do avanço). Também é uma meta que o jogador se envolva com o enredo do jogo, já que nessa cena será apresentada a história que dá base a ele, por meio de uma cutscene (é uma sequência de uma cena do jogo, nesse caso, é o começo dessa cena, em que o jogador não tem controle sobre o que é apresentado, geralmente sendo um recurso utilizado para apresentar partes de histórias nos jogos).
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Segunda Cena - a meta dessa cena é apresentar definitivamente o funcionamento da GUI para o jogador, bem como introduzir as próximas cenas do jogo, que possuem cada uma sua temática e conteúdo a ser abordado: a 1ª dessas cenas é tematizada com características das marcas OMO e CIF, abordando uma introdução geral à UniOps; a 2ª é tematizada com aspectos das marcas Dove, Clear e Rexona, abordando uma explicação sobre a estrutura e funcionamento da UniOps; a 3ª é tematizada a partir das propriedades das marcas Knorr e Hellmann's e aborda o funcionamento do canal de suporte da UniOps, bem como os meios de acesso a ele; por fim, a 4ª abordará sobre o time UniOps com o qual o colaborador passará a trabalhar, tendo como temática principal a marca CloseUp. Tudo isso será apresentado por meio de um NPC (Non-Player Character), personagens que são gerenciados e manipulados não por um jogador, mas pelo próprio sistema do jogo, ou seja, suas decisões e ações durante o game são todas programadas previamente.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Terceira, Quarta, Quinta e Sexta Cenas - as metas dessas cenas serão, efetivamente, verificar o quanto de conteúdo foi absorvido pelo jogador por meio de um quiz, no qual ele precisará responder todas as perguntas presentes no quiz. Nessa perspectiva, criamos uma maneira de aleatorizar as perguntas do quiz, de uma forma que o jogador não consiga decorar um caminho de respostas que o levará a vitória, mas, sim, tenha que usar as próprias informações adquiridas por meio dos links de treinamento. Outra meta das cenas é testar o nível de familiaridade do jogador com as mecânicas, que deve se manter minimamente crescente ao longo do jogo. Cada fase avaliará melhor a familiaridade do jogador com uma mecânica específica e as dinâmicas derivadas dela.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Cena de Game Over - a meta da cena de Game Over (jogo perdido) no jogo é fazer com que o jogador entenda as consequências de suas decisões dentro do ambiente, o que eleva o nível de interatividade entre jogo e jogador. Sendo assim, essa será uma cena que só poderá ser ativada a partir de certo ponto (segunda cena) do jogo, já que a intenção da primeira cena é justamente demonstrar e habituar o jogador ao ambiente do jogo, não puní-lo precocemente por ações das quais não se tem exata noção da consequência ainda. Sendo assim, também haverá indícios antes dessa cena ser, de fato, ativada, que, no caso, são a quantidade de corações que o jogador possui. Inicialmente ele possui 3 corações e, ao perder todos, ocorre o Game Over.

## 3.7. Mecânicas do jogo 

&nbsp;&nbsp;&nbsp;&nbsp;Pelo fato de o jogo ser um sidescroller (tipo de jogo onde a visão do jogador acompanha o personagem controlado conforme ele avança em uma direção, a exemplo de Super Mario Bros) de plataforma em 2D (2 dimensões), ele possui as mecânicas principais que comumente são utilizadas nesses tipos de jogos, com a adição de algumas as quais nem todos os jogos abordam, o que confere um grau de individualidade ao game. As mecânicas base são: o personagem pode andar para a direita ou para a esquerda por meio das teclas D e Right Arrow ou A e Left Arrow, respectivamente; também pode pular por meio das teclas W e Up Arrow e, em seguida, realizar novamente um pulo no ar com as mesmas entradas; pode agachar com as teclas S e Down Arrow, o que reduz seu tamanho; pode, também, avançar por meio da entrada Space, o que o confere uma velocidade muito acima do normal, mas não pode ser usada continuamente. Todas as entradas estão configuradas para teclado analógico.

# <a name="c4"></a>4. Desenvolvimento do Jogo

&nbsp;&nbsp;&nbsp;&nbsp;O desenvolvimento do jogo é o processo de criar um produto de entretenimento digital interativo, que envolve criar, planejar, programar, criar arte e áudio, testar e lançar o jogo. O objetivo é proporcionar uma experiência interessante combinando diversas habilidades criativas, técnicas e de gestão de projetos.


## 4.1. Desenvolvimento preliminar do jogo

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Tratando-se da programação do que será a base do game, iniciou-se definindo as configurações a serem usadas, bem como as propriedades específicas que estarão presentes na cena inicial:

<br>

```
var config = {
    type: Phaser.AUTO, //  isso faz com que o Phaser selecione automaticamente a renderização WebGL se disponível, senão, ele usa o Canvas.
    width: 1000, // Especifica as dimensões do canvas do jogo.
    height: 640, // Especifica as dimensões do canvas do jogo.
    //  garante que o jogo se ajuste ao tamanho da janela do navegador.
    scale: { 
        mode: Phaser.Scale.FIT,
    },
    physics: {
        default: 'arcade', //informamos ao Phaser que nosso jogo exige da física Arcade pois esse modelo de física fornece métodos simples como gravidade e colisão com outros objetos dentro do canvas.
        arcade: {
            gravity: { y: 600 },
            debug: false,
        }
    },
}

```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Com as configurações prontas, foram criadas as variáveis a serem usadas nesse protótipo inicial do jogo, bem como carregados para a página web os recursos que seriam implementados na demonstração. Após serem inseridos, de fato, na página, esses recursos já aparecem visualmente para o usuário, o que indica que a partir daqui já foi criada a página web como ela é e apenas serão definidas as mecânicas de jogo.

<br>

```
// definição das variáveis utilizadas no MVP
var jogo = new Phaser.Game(config)
var imagemFundo
var personagemPrototipo
var piso
var teclasMovimento

// função preload do phaser3 para o carregamento dos assets utilizados
cenaInicial.preload = function() {
    this.load.image('bg', '../assets/bg-inicial.png')
    this.load.image('personagem', '../assets/personagem.png')
}
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp; Criação da cena inicial

```
// função preload do phaser3 para o carregamento dos assets utilizados
cenaInicial.preload = function() {
    this.load.image('bg', '../assets/bg-inicial.png')
    this.load.image('personagem', '../assets/personagem.png')
}

// função create do phaser3 para atribuição de propriedades a elementos carregados na função anterior e definição de regras para o estilo de jogo escolhido pelo grupo
cenaInicial.create = function() {

    // é atribuída à variável imagemFundo as propriedades de posição, imagem de fonte previamente estabelecida e a proporção em relação ao tamanho original da imagem escolhida
    imagemFundo = this.add.image(320, 180, 'bg').setScale(0.55)

    // é atribuída à variável personagemPrototipo propriedades de imagem e regras de física estabelecidas na variável 'config'
    personagemPrototipo = this.physics.add.sprite(320, 300, 'personagem').setScale(0.2)

    // é atribuída à variável personagemPrototipo a propriedade de colisão com outros objetos do mapa, para evitar situações como o personagem cair indefinidamente ou andar para fora do mapa
    personagemPrototipo.setCollideWorldBounds(true)
}
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp; Adição dos movimentos do personagem
<br>

```
/ usamos essa propriedade para atribuir os limites do mundo que vai poder ser explorado. Nesse caso, o mapa começa no canto superior esquerdo, tem os limites laterais iguais ao tamanho do canvas e um limite vertical de 330 pixels
    this.physics.world.setBounds(0, 0, config.width, 330)

    // é atribuída uma correspondência para as teclas WASD do teclado para definir os moviementos do personagem no mapa
    teclasMovimento = this.input.keyboard.addKeys({
        up: 'W',
        left: 'A',
        down: 'S',
        right: 'D'
    })

```

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Finalmente, são definidas as mecânicas de movimentação do personagem e as mecânicas básicas de física do game:

<br>

```
// função update do phaser3 para atribuição de características de atualização recorrente. No caso, os movimentos do personagem de acordo com as teclas pressionadas pelo usuário
cenaInicial.update = function() {

    // função condicional para que, ao apertar a tecla 'A' e, ao mesmo tempo, o personagem estiver a uma altura igual ou maior que 280 pixel, o personagem se move para a esquerda. A segunda condicional foi adicionada para evitar que o personagem se movimente enquanto executa o movimento de pular. além disso, foi adicionada uma funcionalidade para que o personagem mude de lado de acordo com a direção de movimento com o atributo setFlip
    if (teclasMovimento.left.isDown) {
        personagemPrototipo.setVelocityX(-150)
        personagemPrototipo.setFlip(true, false)
    }
}
```

<br>

```
// função condicional para que, ao apertar a tecla 'D' e, ao mesmo tempo, o personagem estiver a uma altura igual ou maior que 280 pixel, o personagem se move para a direita. A segunda condicional foi adicionada para evitar que o personagem se movimente enquanto executa o movimento de pular. além disso, foi adicionada uma funcionalidade para que o personagem mude de lado de acordo com a direção de movimento com o atributo setFlip
    else if (teclasMovimento.right.isDown) {
        personagemPrototipo.setVelocityX(150)
        personagemPrototipo.setFlip(false, false)

    // finalização da estrutura condicional para que o personagem não se mova caso o usuário não esteja pressionando nenhuma tecla    
    } else {
        personagemPrototipo.setVelocityX(0)
    }
    // função condicional para que, se a tecla 'W' for pressionada e, ao mesmo tempo, o personagem estiver a uma altura igual ou maior que 280 pixels no canvas, o personagem pule
    if (teclasMovimento.up.isDown && personagemPrototipo.y >= 280) {
        personagemPrototipo.setVelocityY(-150);
    }

```

<br>


&nbsp;&nbsp;&nbsp;&nbsp;Imagem da tela inicial temporária do jogo:
<br>

<div align="center"> 
<sup>Figura 30: Primeira versão da tela inicial
<img src = "/assets/bg-inicial.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Imagem do personagem inicial temporário do jogo:
<br>

<div align="center"> 
<sup>Figura 31: Primeira versão do personagem principal
<br>
<img src = "/assets/personagem.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Assim, foi criado o protótipo preliminar do jogo a ser desenvolvido, visando uma demonstração de como estão funcionando as mecânicas básicas do jogo para a empresa parceira.

## 4.2. Desenvolvimento básico do jogo

&nbsp;&nbsp;&nbsp;&nbsp;No desenvolvimento básico, utilizamos as técnicas aprendidas até o momento, uma das principais foi a Programação Orientada a Objetos (JavaScript Modular). Com isso, conseguimos organizar o código de uma forma mais compreensível a todos.
<br>

<div align="center"> 
<sup>Figura 32: Organização do código
<br>
<img src="/assets/codigo.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

&nbsp;&nbsp;&nbsp;&nbsp;No código, acrescentamos uma função de transição de cena para quando o personagem entrar no elevador e for passar para a próxima fase.

```
 entrar() { // função de transição para o personagem entrar no elevador
        if (this.elevator.hasTileAtWorldXY(this.lev.body.x, this.lev.body.y)) {
            this.trasicao();
        }
    }

    trasicao() { // função de transição entre as cenas
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    }

```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Ao criarmos obstáculos para o personagem ultrapassar, adicionamos uma função para se caso ele caísse nesse obstáculo, sua posição seja resetada ao valor estipulado, que, no caso, seria a posição (320, 1100)
<br>

```
 Morre() { //função para que se o personagem "morrer", volta a posição (320,1100)
        this.lev.setPosition (320, 1100);
    }
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Além disso, acrescentamos novas animações de movimento realizados pelo personagem.

<br>

```
 // criamos as animações que serão realizadas pelo personagem

        // neste caso, a animação "parado" é criada utilizando frames de 0 a 5 do spritesheet
        //com uma taxa de quadros de 2 quadros por segundo, e repetindo indefinidamente
        this.anims.create({
            key: 'andar',
            frameRate: 7,
            frames: this.anims.generateFrameNumbers('lev', {start: 24, end: 27}),
            repeat: -1,
        });

        this.anims.create({
            key: "parar",
            frameRate: 2,
            frames: this.anims.generateFrameNumbers('lev',{start: 0, end: 5}),
            repeat: -1,
        });

        // a animação "pulando" é criada utilizando frames de 6 a 10 do spritesheet
        //com uma taxa de quadros de 4 quadros por segundo.
        this.anims.create({
            key: "pular",
            frameRate: 15,
            frames: this.anims.generateFrameNumbers('lev', {start: 6, end: 10}),
            repeat: -1,
        });

        this.anims.create({
            key: 'cair',
            frameRate: 8,
            frames:this.anims.generateFrameNumbers('lev', {start:18, end: 23}),
            repeat: -1,
        })

        this.anims.create({
            key: "agachar",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers('lev', {start: 16, end: 17}),
            repeat: -1,
        })
                // a animação "dash" é criada utilizando frames de 11 a 17 do spritesheet
                //com uma taxa de quadros de 10 quadros por segundo.
        this.anims.create({
            key: "dash",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers('lev', {start: 13, end: 15}),
            repeat: -1,
        });
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp; Assim como, para facilitar a jogabilidade, definimos que as teclas para movimentação poderiam ser as teclas WASD ou as setas, como de costume.
<br>

```
// é atribuída uma correspondência para as teclas WASD do teclado para definir os moviementos do personagem no mapa, assim como as setas.
        this.teclas = this.input.keyboard.addKeys({
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            upArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            leftArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            downArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            rightArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            enter: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        })
        this.teclas.enter.on("down", this.entrar, this);
    
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Para as ações realizadas, acrescentamos o salto duplo e dash (movimento rápido).
<br>

```
 var pressionouPulo = Phaser.Input.Keyboard.JustDown(this.teclas.up);
        var pressionouPuloDuplo = Phaser.Input.Keyboard.JustDown(this.teclas.upArrow);

        if (pressionouPulo || pressionouPuloDuplo) {
            if (this.lev.body.onFloor()) {
                // inicia a animação
                // habilita o pulo duplo
                this.puloDuplo = true;
                // definição da velocidade vertical para o primeiro pulo
                this.lev.body.setVelocityY(-2 * this.velocidade);
            } else if (this.puloDuplo) {
                // realiza o segundo pulo se o pulo duplo estiver habilitado
                this.puloDuplo = false;
                // define a velocidade vertical para o segundo pulo
                this.lev.setVelocityY(-1.5 * this.velocidade);
            };
        };
        if (this.lev.body.velocity.y < -50) {
            this.lev.anims.play('pular', true)
        } else if (this.lev.body.velocity.y > 50) {
            this.lev.anims.play('cair', true)
        };

        // verifica se o jogador está pressionando a tecla para se agachar
        // função condicional para que, ao apertar o 'espaço', o movimento de dash, isto é, movimento rápido, é ativado
        if (this.teclas.space.isDown) {
            var dashDuration = 300;
            var dashSpeed = (this.velocidade * 4.5);
            var dashDirection = this.lev.flipX ? -1 : 1;
            // aplica o dash (movimento rápido) na direção em que o personagem está olhando
            this.lev.setVelocityX(dashSpeed * dashDirection)

            //tempo de duração do dash
            setTimeout(() => {
                this.lev.setVelocityX(0);
            }, dashDuration)
        }
        if (this.lev.body.velocity.x > 800 || this.lev.body.velocity.x < -800) {
            this.lev.anims.play('dash', true)
        }
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Além disto, para obter-se uma melhor forma de colisão e jogabilidade, colocamos os tilesets no mapa.
<br>

```
// adição de tilesets ao mapa para os diferentes elementos criados
        // var tilesetBackground =  this.map.addTilesetImage ('background', 'background');
        /* var tilesetTrees = map.addTilesetImage ('trees', 'trees'); */
        var tilesetCano = this.map.addTilesetImage ('cano', 'cano');
        /*     var tilesetMontanha = map.addTilesetImage ('montanha', 'montanha');
        var tilesetBuilding = map.addTilesetImage ('building', 'building'); */
        var tilesetElevador = this.map.addTilesetImage ('tileset_elevator', 'elevador');
        var tilesetPlaca = this.map.addTilesetImage ('placa', 'placa');
        var tilesetWater = this.map.addTilesetImage ('water', 'otherBlocks');
        var tilesetPiso = this.map.addTilesetImage('ground', 'ground');
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Diante disso, conseguimos entregar o protótipo para a empresa parceira com o código totalmente estruturado dentro dos parâmetros da semana. Para os próximos passos, acrescentaremos NPCs e mais interações para o personagem no jogo.

<br>

## 4.3. Desenvolvimento intermediário do jogo

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Adicionamos a função de iniciar a cena 2 (que se passa na sede da Unilever) dentro do código da cena 1.

<br>

```
comecarProximaCena() { // função para começar a próxima cena
        this.scene.start("Cena2");
    }
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Desenvolvemos toda a cena 2, na qual, foi implementado todo o cenário, a física geral das interações, o personagem e seus movimentos, e o começo para a próxima cena.

<br> 

```
import lev from "../entities/lev.js";

export class Cena2 extends Phaser.Scene {

    lev; //será usada para eventos relacionados ao sprite do personagem
    map; //será usada para eventos relacionados ao mapa da cena
    
    constructor() {
        super({key: 'Cena2'});
    };

     create () {    
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        this.add.image(6400, 640, 'bg1');
        this.add.image(6400, 640, 'objetos1');


        this.map = this.make.tilemap({key: 'map2'}); 
        
        var tilesetGround = this.map.addTilesetImage ('testeaaa', 'ground1');
        var ground = this.map.createLayer('Chao', tilesetGround, 0, 0);
        this.lev = new lev(this, 280, 1020, 'lev');
        this.lev.adicionarSprite(this);
        this.lev.criarAnimacao(this);

        this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) 

        this.map.setCollisionByProperty({collider: true});
        this.physics.add.collider(this.lev, ground); 
        
        /* configura-se a câmera para seguir o jogador e para não passar dos limites do mundo */
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels)
        this.cameras.main.startFollow(this.lev)
     }
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Desenvolvemos o design do movimento relacionado ao pulo e ao relacionado à queda, assim aprimorando a estética do personagem e o deixando mais fluido.

<br>

```
 if (this.body.velocity.y < -50) {
            this.anims.play('pular', true)
        } else if (this.body.velocity.y > 50) {
            this.anims.play('cair', true)
        };
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Em relação aos movimentos, também foi implementada a mecânica de agachar do personagem.

<br>

```
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
```

<div align="center"> 
<sup><a name="f39"></a>Figura 39 - Lev agachado
<img src="/assets/lev-agachado.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>


&nbsp;&nbsp;&nbsp;&nbsp;A seguir estão imagens do código do menu principal do jogo
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Criação do menu principal e seus controles, como novo jogo, controles, configurações

<br>

```
export class mainMenu extends Phaser.Scene {
    constructor() {
        super({key: 'mainMenu'})
        this.selectedItemIndex = 0
        this.arrowKeysEnabled = true
    }

    create() {
        // adiciona as imagens do background e letreiro com nome do jogo
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 4, 'uniWorld').setScale(0.45)
        
        // posições dos intens do menu
        this.menuItemsPositions = [
            {x: this.sys.game.config.width * 0.51, y: this.sys.game.config.height * 0.7},
            {x: this.sys.game.config.width / 2, y: this.sys.game.config.height * 0.78},
            {x: this.sys.game.config.width / 2, y: this.sys.game.config.height * 0.86}
        ]

        // adiciona posição e tamanho(escala) dos controles, configurações e novo jogo
        this.menuItems = [
            this.add.image(this.menuItemsPositions[0].x, this.menuItemsPositions[0].y, 'newGame').setScale(0.2),
            this.add.image(this.menuItemsPositions[1].x, this.menuItemsPositions[1].y, 'controles').setScale(0.2),
            this.add.image(this.menuItemsPositions[2].x, this.menuItemsPositions[2].y, 'configs').setScale(0.2),
        ]

        // adiciona imagem do botão de start do jogo
        this.arrow = this.add.image(this.menuItemsPositions[0].x - 200, this.menuItemsPositions[0].y, 'playMain').setScale(0.018)
        // adiciona cursores
        this.cursors = this.input.keyboard.createCursorKeys()
        // adiciona tecla enter
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
        this.scene.stop('hud')
        this.resetarMenu()
    }
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Funções de navegar o menu usando teclado
<br>

```
update(time) {
        // funções de navegar pelo menu usando as setas
        if (this.arrowKeysEnabled == true) {
            if (this.cursors.up.isDown && this.selectedItemIndex > 0) {
                this.selectedItemIndex--
                this.moverSeta()
                this.desabilitarTeclasSetaTemporariamente(time)
            } else if (this.cursors.down.isDown && this.selectedItemIndex < this.menuItems.length - 1) {
                this.selectedItemIndex++;
                this.moverSeta()
                this.desabilitarTeclasSetaTemporariamente(time)
            }
        }

        // adiciona configurações da tecla enter
        if (this.selectedItemIndex === 0 && this.enterKey.isDown) {
            this.scene.start('Cena1')
        } else if (this.selectedItemIndex === 1 && this.enterKey.isDown) {
            this.scene.start('controls')
        } else if (this.selectedItemIndex === 2 && this.enterKey.isDown) {
            this.scene.start('settings')
        }
    }

    // função selecionar itens com as setas
    moverSeta() {
        let selectedItemPosition = this.menuItemsPositions[this.selectedItemIndex]
        this.arrow.x = selectedItemPosition.x - 200
        this.arrow.y = selectedItemPosition.y
    }

    // função desativar navegar com as setas para evitar bugs como pular itens do menu
    desabilitarTeclasSetaTemporariamente() {
        this.arrowKeysEnabled = false;
        this.time.delayedCall(150, () => {
            this.arrowKeysEnabled = true;
        }, [], this);
    }

    // função resetar menu
    resetarMenu() {
        this.selectedItemIndex = 0
    }
}
```

<div align="center"> 
<sup><a name="f40"></a>Figura 40 - Menu Inicial
<br>
<img src="/assets/cenaMenu.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Durante o desenvolvimento intermediário do jogo, focamos em aperfeiçoar a interface do usuário. Assim, criamos diversas cenas relacionadas à UI, como a de configurações, que, por sua vez, introduz a cena de controles, criada para mostrar ao jogador quais controles de movimentação são possíveis de utilizar durante todo o percurso do jogo, de forma a deixar a jogabilidade mais intuitiva, e a cena de créditos, que apresenta o nome dos criadores do jogo.

<div align="center"> 
<sup><a name="f41"></a>Figura 41 - Código da UI
<br>
<img src="/assets/codigo-UI.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>


<br>

<div align="center"> 
<sup><a name="f42"></a>Figura 42 - Cena de configurações
<img src="/assets/cenaConfiguracoes.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Além destas cenas anteriomente citadas, a cena de dicionário, que irá conter links de conteúdos externos que o jogador deverá entrar, de pause e de Game Over, também são componentes essenciais da UI de nosso jogo. Esses arquivos contém todas as mecânicas, o design e a interatividade do jogador com as funcionalidades presentes em cada uma das cenas que compõem a UI.

<div align="center"> 
<sup><a name="f43"></a>Figura 43 - Cena de pausa
<img src="/assets/cenaPause.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

<div align="center"> 
<sup><a name="f44"></a>Figura 44 - Cena de Game Over
<img src="/assets/cenagameOver.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;A seguir, está presente a pasta "entities", que possui os arquivos relacionados às moedas, checkpoints e contador de vidas, que foram implementados ao longo dessa fase intermediária de desenvolvimento. No arquivo "moeda.js" é estruturado todo o funcionamento das modas, suas mecânicas, animações, física do objeto e o contador de moedas que aparecerá na tela. Já os checkpoints são as localizações específicas para onde o personagem deve retornar caso ele perca uma vida

<div align="center"> 
<sup><a name="f45"></a>Figura 45 - Código elementos do jogo
<img src="/assets/codigos_componentes.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

<div align="center"> 
<sup><a name="f46"></a>Figura 46 - Moedas e checkpoint
<img src="/assets/moedas-checkpoints.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>


&nbsp;&nbsp;&nbsp;&nbsp; Na função Create, criamos os elementos, já pré-carregados na classe Preload. Aqui, nós também definimos os tamanhos e posições
<br>

```
 create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgGameOver').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.33, 'gameOver').setScale(0.3)

        this.menuItemsPositions = [
            {x: this.sys.game.config.width * 0.5, y: this.sys.game.config.height * 0.8},
            {x: this.sys.game.config.width * 0.5, y: this.sys.game.config.height * 0.9}
        ]


        this.menuItems = [
            this.add.image(this.menuItemsPositions[0].x, this.menuItemsPositions[0].y, 'reiniciar').setScale(0.16),
            this.add.image(this.menuItemsPositions[1].x, this.menuItemsPositions[1].y, 'menu').setScale(0.2),
        ]

        this.arrow = this.add.image(this.menuItemsPositions[0].x - 250, this.menuItemsPositions[0].y, 'playMain').setScale(0.02)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
        this.resetMenu()
    }

```
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Na função Update, definimos o que acontece quando se clica na seta e evitamos que ocorra colisões desnecessárias com outros itens
<br>

```
  update(time) {
        if (this.arrowKeysEnabled == true) {
            if (this.cursors.up.isDown && this.selectedItemIndex > 0) {
                this.selectedItemIndex--;
                this.moveArrowToSelectedItem();
                this.disableArrowKeysTemporarily(time);
            } else if (this.cursors.down.isDown && this.selectedItemIndex < this.menuItems.length - 1) {
                this.selectedItemIndex++;
                this.moveArrowToSelectedItem();
                this.disableArrowKeysTemporarily(time);
            }
        }


        if (this.selectedItemIndex === 0 && this.enterKey.isDown) {
            this.scene.start('Cena1')
        } else if (this.selectedItemIndex === 1 && this.enterKey.isDown) {
            this.scene.start('mainMenu')
        }
    }
```

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Funções criadas para serem implantadas no Update, em relação ao aparecimento e o desaparecimento da seta na tela
<br>

```
 moveArrowToSelectedItem() {
        let selectedItemPosition = this.menuItemsPositions[this.selectedItemIndex];
        this.arrow.x = selectedItemPosition.x - 250; 
        this.arrow.y = selectedItemPosition.y;
    }

    disableArrowKeysTemporarily() {
        this.arrowKeysEnabled = false;
        this.time.delayedCall(150, () => {
            this.arrowKeysEnabled = true;
        }, [], this);
    }
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Função para resetar a tela de menu
<br>

```
resetMenu() {
        this.selectedItemIndex = 0
    }
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Adição do HUD, Heads-Up Display, que aparece durante todo o momento do jogo para o usuário com informações importantes para a jogabilidade, como número de moedas coletadas e vidas
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Exportamos a classe "Hud", que herda as configurações do Phaser.Scene, definindo os atributos herdados e os criados
<br>

```
export class hud extends Phaser.Scene 
    constructor() {
        super({key: 'hud'})
        this.pontuacao = 0
        this.texto = null
        this.volume = true
    }

```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Aqui nós renderizamos o HUD com os elementos e os adicionamos. Depois colocamos as funções do botão ESC
<br>

```
renderHud() {
        /* this.add.sprite(this.sys.game.config.width * 0.1, this.sys.game.config.height * 0.1, 'moedaCount', 0).setScale(0.08).setScrollFactor(0)

        this.pontuacao = 0
        this.texto = this.add.text(128, 45, '', {
            fontSize: '40px',
            fill: '#252525',
            fontFamily: 'pixel Font'
        }) 

        this.texto.setScrollFactor(0).setDepth(2) */

        // this.add.sprite(this.sys.game.config.width * 0.25, this.sys.game.config.height * 0.1, 'vidasCount', 0).setScale(0.08).setScrollFactor(0)

        // this.add.sprite(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.1, 'vidasCount', 0).setScale(0.08).setScrollFactor(0)

        // this.add.sprite(this.sys.game.config.width * 0.35, this.sys.game.config.height * 0.1, 'vidasCount', 0).setScale(0.08).setScrollFactor(0)

        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.pause()
            this.scene.launch('pause')
        })

        this.dicionario = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0)
    }
```

<div align="center"> 
<sup><a name="f47"></a>Figura 47 - HUD presente no jogo
<img src="/assets/cenaHUD.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>



&nbsp;&nbsp;&nbsp;&nbsp; Aqui começa a documentação do código dos 4 níveis do jogo, que seguem um mesmo padrão mesmo tendo percursos e desafios distintos
<br>
&nbsp;&nbsp;&nbsp;&nbsp; No início do código do Level1, temos a importação das outras classes e a exportação da classe Level1 que herda as características do Phaser, além da adição de variáveis. As estruturas presentes no código do Level1 se repetem nas outras fases, distinguindo-se apenas de certas variações pontuais, como o nome da "key" de cada cena.
<br>

```
import lev from "../entities/lev.js";
import checkpoint from '../entities/checkpoint.js';
import moeda from "../entities/moeda.js";
import vidasCount from "../entities/vidasCount.js";
export class Level1 extends Phaser.Scene {
    lev; //será usada para eventos relacionados ao sprite do personagem
    map; //será usada para eventos relacionados ao mapa da cena

    constructor() {
        super({ key: "Level1" });
        this.vidasRestantes = 3

    };
}
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Criamos o “FadeIn” da câmera, isto é, o aparecimento dela aos poucos, e já carregamos a Hud logo no início.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Adicionamos as imagens que não irão colidir com o personagem ao jogo e a imagem da letra E que tem interação
<br>

```
create() {     
        // configuração das cameras na transição de cena
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.scene.launch('hud')
        /* são adicionadas duas imagens: o background da cena e outra que contém os elementos visíveis na
        cena, porém que não colidem ou interagem diretamente com o personagem */
        this.add.image(2240, 1280, 'bg_fase1');
        this.add.image(2240, 1280, 'marcas_fase1');
        this.add.image(2240, 1280, 'elevadores');
        this.scene.launch('hud')
}
// adiciona imagem da letra E que será utilizada com botão para ir para outras cenas
        this.letraE = this.add.image(1744, 1950, 'letraE').setScale(0.7);
```

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Aqui nós adicionamos o mapa e os blocos
<br>

```
/* adiciona-se o mapa do jogo à cena. Note que a forma como ele é adicionado é diferente da forma
        com que as duas imagens anteriores são adicionadas, isso ocorre porque essa parte em específico,
        que chamamos de "mapa" é, na verdade, somente a parte da cena que colide e interage diretamente
        com o jogador. Para isso, não usamos uma imagem, mas sim um arquivo exportado de um programa
        voltado para a construção de mapas, o Tiled */
        this.map = this.make.tilemap({key: 'level1'}); /* note que a variável "map", criada no início do
                                                        código, é utilizada aqui para aramazenar as 
                                                        informações do mapa */

        /* aqui, definem-se algumas propriedades desse mapa que acabamos de adicionar, sendo elas o
        conjunto de texturas que o mapa irá utilizar para compor a cena e a camada em que esse conjunto
        está localizado no programa */                                                
        var tilesetGround = this.map.addTilesetImage ('Terrain (16 x 16)', 'ground_fase1');
        var ground = this.map.createLayer('Blocos', tilesetGround, 0, 0);
```

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Adição do personagem à cena
<br>

```
// cria novo personagem lev nesta cena
        this.lev = new lev(this, 280, 2320, 'lev');
        this.lev.adicionarSprite(this);
        this.lev.createAnims(this);
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Nessa parte, adicionamos os limites da página e as colisões que irão acontecer
<br>

```
this.physics.world.setBounds (0, 0, this.map.widthInPixels, this.map.heightInPixels) /* define-se,
                                                                                                de fato,
                                                                                                os limites
                                                                                                da página */
       
        /* ativa-se uma propriedade que os blocos possuem: a de colisão. Isso permite que o personagem
        possa colidir fisicamente com eles */                                                                                        
        this.map.setCollisionByProperty({collider: true});
        this.physics.add.collider(this.lev, ground);/* agora, de fato, o personagem pode colidir com o
                                                    chão */
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp; Configuramos as câmeras para seguir o personagem conforme a movimentação, e para ele não ultrapassar os limites da tela.
<br>

```
 /* configura-se a câmera para seguir o jogador e para não passar dos limites do mundo */                                            
        this.cameras.main.setBounds (0, 0, this.map.widthInPixels-200, this.map.heightInPixels)
        this.cameras.main.startFollow(this.lev)

```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Aqui nós configuramos as teclas embutidas na fase 1
<br>

```
this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.pause()
            this.scene.launch('pause', { previousScene: this.scene.key })
        })

        this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
        this.x.on('down', () => {
            this.scene.pause()
            this.scene.launch('dicionario', { previousScene: this.scene.key })
        })

```
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Adição da hud dentro do jogo
<br>

```
 this.hud = this.scene.get('hud')
        this.hud.renderHud(this)

```

<br>
&nbsp;&nbsp;&nbsp;&nbsp; Adição do sistema de vidas
<br>

```
 this.vidas = new vidasCount(this, this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.1, 'vidas3').setScale(.08)
        this.add.existing(this.vidas)
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Adição dos movimentos do Lev
<br>

```
update() {
        this.lev.movimentos(this);}
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Adição de plataformas móveis no jogo

```
this.mPLatforms = this.physics.add.group({
            allowGravity: false
        })

         // define a váriavel mPlatform e configura tamanho, local e velocidade
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
        this.physics.add.collider(this.lev, this.mPLatforms, this.platformMovingThings);
```
```
movePlatform (p){
        if (p.y < p.minY || p.y > p.maxY ){
            p.speed *= -1
        }
        p.y += p.speed
    }

    platformMovingThings(lev, plat){
        lev.y += plat.speed
    }
```

&nbsp;&nbsp;&nbsp;&nbsp;Ativa a funcionalidade do botão de interação "E" e torna visível o comando no mapa a partir de uma certa distância.
<br>

```
var distancia = Phaser.Math.Distance.Between(
            this.lev.x, this.lev.y,
            this.letraE.x, this.letraE.y
        );
        this.lev.teclas.e.on("down", function () {
            if (distancia < 300) {
                this.scene.start('Cena2');
            }
        }, this);

        if (distancia < 300) {
            this.letraE.setVisible(true);
        } else {
            this.letraE.setVisible(false);
        }
```
<br>
&nbsp;&nbsp;&nbsp;&nbsp; Placar de vidas atualizado
<br>

```
this.vidas.perdeuVida(this)
```

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Função de transição para outro mapa ao apertar a tecla
<br>

```
getIn() {
        if (this.lev.teclas.e.on("down")){
            this.transition();
        }
    }
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Função para o personagem resetar ao morrer
<br>

```
 die() { //função para que se o personagem "morrer", volta a posição (320,1100)
        this.lev.savePosition (this);
        this.vidas.morreu(this);
    }
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Função de fadein e fadeout da cena
<br>

```
 transition() { // função de transição entre as cenas
        this.cameras.main.fadeOut(3000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    }
```
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Função que começa a próxima cena
<br>

```
  comecarProximaCena() {
        this.scene.start("Cena2");
    }
```
<br>

De modo análogo ao que foi apresentado no Level 1, os levels 2, 3 e 4 foram implementados seguindo a mesma estrutura apresentada anteriormente. 

<div align="center"> 
<sup><a name="f48"></a>Figura 48 - Level 1, com temáticas da OMO e CIF
<img src="/assets/cenalevel1.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

<div align="center"> 
<sup><a name="f49"></a>Figura 49 - Level 4, com temática da CloseUp
<img src="/assets/cenalevel4.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>


&nbsp;&nbsp;&nbsp;&nbsp; Implementação de um arquivo preload como cena própria para carregar todas as imagens e spritesheets que serão utilizadas durante o jogo, para facilitar a adição de imagens no jogo. 
<br>

```
export class preload extends Phaser.Scene{
    constructor() {
        super('preload')
    }

    // função preload do phaser3 para o carregamento dos assets utilizados
    preload() {
        // carregamento de imagens, sprites e mapas que serão utilizados nas próximas cenas
        this.load.spritesheet('lev', '../../assets/spritesheettest.png', { frameWidth: 128, frameHeight: 128 });
        this.load.image('ground', '../../assets/map/Terrain (64x64).png');
        
        this.load.spritesheet('checkpoint', '../assets/checkPoint.png', {
                    frameWidth: 192,
                    frameHeight: 192
                })   
        //Restante das assets carregados seguindo o mesmo padrão
    }
}
```

<br>
&nbsp;&nbsp;&nbsp;&nbsp; Adição do som e botão de ativar e desativar
<br>

```
// Adiciona imagem e sprite de "som"
        this.add.image(this.sys.game.config.width * 0.45, this.sys.game.config.height * 0.44, 'som').setScale(.25)
        this.som = this.add.sprite(this.sys.game.config.width * 0.58, this.sys.game.config.height * 0.44, 'spriteSom', 2).setScale(0.3).setInteractive()

        this.som.on('pointerover', () => {
            this.som.setFrame(this.somAtivo ? 3:5)
            this.game.canvas.style.cursor = 'pointer'
        })

        this.som.on('pointerout', () => {
            this.som.setFrame(this.somAtivo ? 2:4)
            this.game.canvas.style.cursor = 'default'

        })
        // Desativa ou ativa som do jogo conforme o jogador selecionar a opção
        this.som.on('pointerdown', () => {
            this.somAtivo = !this.somAtivo
            if(this.somAtivo) {
                this.sound.resumeAll()
            } else {
                this.sound.pauseAll()
            }
            this.som.setFrame(this.somAtivo ? 3:5)
        })
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Adição dos controles e créditos
<br>

```
 // Adiciona imagem da palavra "controles" que aparece na tela
        this.controles = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.7, 'controles').setScale(.25).setInteractive()

        // Inicia a cena de controles quando o jogador selecionar a opção de visualizar os controles
        this.controles.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        this.controles.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        this.controles.on('pointerdown', () => {
            this.scene.start('controls') 
        })

        // Adiciona imagem da palavra "créditos" que aparece na tela
        this.creditos = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.8, 'creditos').setScale(.25).setInteractive()
        
        // Inicia a cena de "créditos" quando o jogador selecionar a opção de visualizar os créditos
        this.creditos.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        this.creditos.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'

        })

        this.creditos.on('pointerdown', () => {
            this.scene.start('creditos')
        })

    
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Configuração da tecla esc para acessar o menu
<br>

```
 // Retoma a cena para o Menu Principal após a tecla esc ser selecionada
    update() {
        if (this.esc.isDown || this.enter.isDown) {
            this.scene.start('mainMenu')
            this.selectedItemIndex = 0
        }

    }
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Por fim, após todas as adições ao projeto mencionadas, o desenvolvimento intermediário do jogo foi concluído, com todas as fases e dinâmicas implementadas e testadas. Este marco representa um avanço significativo no processo de criação do jogo, preparando-o para a próxima fase de desenvolvimento final do nosso MVP.

<br>

## 4.4. Desenvolvimento final do MVP

&nbsp;&nbsp;&nbsp;&nbsp;A seguir estão as implementações feitas na sprint 4, como a implementação do NPC, colecionáveis, links e quizzes do jogo.

&nbsp;&nbsp;&nbsp;&nbsp;Condição para o NPC interagir com o jogador e exibir o balão de fala
```
 interacaoNPC(personagem, npc) {
        if (personagem.x >= npc.x - 125 && this.contador == 0) {
            var balao = this.add.image(8900, 930, 'balaoFala').setScale(1.8).setFlip(true, false);
            let fala1 = this.add.text(8870, 860, 'Olá, robozinho Lev!', {
                fontFamily: 'Verdana',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 430 }
            }).setOrigin(0.5); // Centraliza vertical e horizontalmente
    
            var fala2, fala3, fala4, fala5;
            this.contador++;
```

<div align="center"> 
<sup><a name="f50"></a>Figura 50 - Interação com NPC
<img src="/assets/cenalevel4.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp; São adicionadas as falas e o timer para cada uma delas
```
            setTimeout(() => {
                fala1.destroy();
                fala2 = this.add.text(8870, 860, 'Seja bem-vindo à Unilever.', {
                    fontFamily: 'Verdana',
                    fontSize: 28,
                    color: '#000000',
                    align: 'center', // Centraliza o texto horizontalmente
                    wordWrap: { width: 430 }
                }).setOrigin(0.5); // Centraliza vertical e horizontalmente
    
                setTimeout(() => {
                    fala2.destroy();
                    fala3 = this.add.text(8870, 860, 'Agora que você já desenvolveu suas habilidades,', {
                        fontFamily: 'Verdana',
                        fontSize: 28,
                        color: '#000000',
                        align: 'center', // Centraliza o texto horizontalmente
                        wordWrap: { width: 430 }
                    }).setOrigin(0.5); // Centraliza vertical e horizontalmente
    
                    setTimeout(() => {
                        fala3.destroy();
                        fala4 = this.add.text(8870, 860, 'está pronto para ser integrado em nossa empresa.', {
                            fontFamily: 'Verdana',
                            fontSize: 28,
                            color: '#000000',
                            align: 'center', // Centraliza o texto horizontalmente
                            wordWrap: { width: 430 }
                        }).setOrigin(0.5); // Centraliza vertical e horizontalmente
                            setTimeout(() => {
                                fala4.destroy();
                                balao.destroy();
                                
                        }, 4000)
                    }, 3000)
                }, 3000) // ajustar tempo de exposição conforme a extensão do texto
            }, 2000)
        }
    }
```

&nbsp;&nbsp;&nbsp;&nbsp; Configuração para o dicionário ficar disponível para o usuário apenas após o NPC o entregar
```
    deletarDicionario(){
        this.physics.add.overlap(this.lev, this.spawn_dicionario, () => {
            this.spawn_dicionario.destroy()
            this.dicionarioColetado = true
            this.dicionarioHud.setVisible(true)
        })
    }
```

&nbsp;&nbsp;&nbsp;&nbsp; São adicionados colecionáveis das diversas marcas presentes ao longo do jogo
```
var clear = this.physics.add.sprite(1370, 400, 'clearC').setScale(0.05, 0.05);
        clear.setCollideWorldBounds(true);
        this.physics.add.collider(clear, piso);
        clear.setBounce(1);

        this.physics.add.overlap(clear, this.lev, () => {
            clear.setVisible(false); 
            clear.disableBody(true, true); 
            this.pontuacao += 1; // Aumentar a pontuação
        });

        var dove = this.physics.add.sprite(1800, 400, 'doveC').setScale(0.05, 0.05);
        dove.setCollideWorldBounds(true);
```

&nbsp;&nbsp;&nbsp;&nbsp; Função update atualiza movimentos dos personagens, pontuação e colecionáveis
```
    update(){
        //Ativação da movimentação do personagem na cena
        this.lev.movimentos(this);
        this.interacaoNPC(this.lev,this.NPC);

        this.pontuacaoText.setText('Itens coletados: ' + this.pontuacao);

        // Atualize a posição do texto para coincidir com a posição do personagem
        this.pontuacaoText.x = this.cameras.main.scrollX + 16;
        this.pontuacaoText.y = this.cameras.main.scrollY + 16;
    }
```


&nbsp;&nbsp;&nbsp;&nbsp; Lista com dicionários contendo perguntas, opções e respostas do quiz
```
 this.quiz1 = [
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
```

&nbsp;&nbsp;&nbsp;&nbsp; Adição de condicionais para verificar se o jogador acertou ou não
```
this.input.on('pointerdown', () => {        
    // Verificar a resposta selecionada
    if(this.opcaoSelecionadaIndex != null){
        this.Certa3 = this.verificarResposta(this.pergunta3, this.opcaoSelecionadaIndex);
        }
    if (this.Certa3 === true) {
        this.mostraResultado("Resposta Correta!", this.Certa3)
        this.opcaoSelecionada = false
        setTimeout(() => {
            this.apagarPergunta(this.texto_pergunta3, this.texto_opcoes3)
            if(this.previousScene) {
            // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                this.scene.resume(this.previousScene)
                this.scene.stop()
            }
        }, 2000)
        }
        else if (this.Certa3 === false){
            this.mostraResultado("Resposta Incorreta!", this.Certa3)
            setTimeout(() => {
                this.apagarPergunta(this.texto_pergunta3, this.texto_opcoes3)
                if(this.previousScene) {
                // Se o jogador acertar todas as 3 perguntas, ele pode finalizar o level
                    this.scene.start(this.previousScene)
                    this.scene.stop()
                }
            }, 2000)
        }
        else{}  
        this.opcaoSelecionadaIndex = null
    }
)
```

&nbsp;&nbsp;&nbsp;&nbsp; Condição para o início do quiz (varia de acordo com o level)
```
interacaoQuiz(){
        if(this.lev.x < 1940 && this.lev.x > 1900 && this.lev.y > 1000 && this.cont == 0){
            this.cont += 1 // Artifício para o quiz não surgir repetidas vezes
            this.scene.pause() // Pausa o level
            this.scene.launch('cenaQuiz1', { previousScene: this.scene.key }) // Inicia a cena do quiz
        }
    }
```

&nbsp;&nbsp;&nbsp;&nbsp;Métodos relacionados à exibição de textos no quiz
```
// Exibe a pergunta no quiz
    adicionarPergunta(pergunta){
        return this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height * 0.70, pergunta.pergunta, { fontFamily: 'Open Sans',
        fontSize: 36,
        color: '#000000',
        align: 'center', // Centraliza o texto horizontalmente
        wordWrap: { width: 720 }
        }).setOrigin(0.5);
    }

    // Exibe se o jogador acertou a mensagem
    mostraResultado(mensagem, certa){
        if(certa){
            console.log(mensagem);
            this.parabens = this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height * 1.35, mensagem, { fontFamily: 'Open Sans',
            fontSize: 36,
            color: '#008651',
            align: 'center', // Centraliza o texto horizontalmente
            wordWrap: { width: 720 }
            }).setOrigin(0.5);

            this.input.off('pointerdown'); // desabilita o "clique" na tela, para que o jogador responda cada pergunta apenas uma vez
        }
        else{
            console.log(mensagem);
            this.parabens = this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height * 1.35, mensagem, { fontFamily: 'Open Sans',
            fontSize: 36,
            color: '#eb0000',
            align: 'center', // Centraliza o texto horizontalmente
            wordWrap: { width: 720 }
            }).setOrigin(0.5);

            this.input.off('pointerdown'); // desabilita o "clique" na tela, para que o jogador responda cada pergunta apenas uma vez
        }
    }
    // Exclui os textos inseridos para que as próximas perguntas e opções de resposta sejam exibidas 
    apagarPergunta(texto_pergunta, texto_opcoes){
        this.parabens.destroy()
        texto_pergunta.destroy()
        texto_opcoes.destroy()
    
    }
```

<div align="center"> 
<sup><a name="f51"></a>Figura 51 - Quiz implementado no jogo
<img src="/assets/cenaQuiz.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp; Métodos relacionados às questões do quiz
```
// Método para selecionar uma pergunta aleatória
    selecionarPerguntaAleatoria(quiz) {
        const perguntaAleatoria = Phaser.Math.Between(0, quiz.length - 1);
        return quiz[perguntaAleatoria];
    }

// Método para verificar se a resposta fornecida está correta
    verificarResposta(perguntaQualquer, opcaoSelecionada) {
        console.log(opcaoSelecionada)
        console.log(perguntaQualquer.resposta)
        let posicaoPergunta = this.quiz1.indexOf(perguntaQualquer)
        this.quiz1.splice(posicaoPergunta, 1)
        console.log(this.quiz1)
        this.opcaoSelecionadaIndex = null
        return opcaoSelecionada === perguntaQualquer.resposta;
    }

    // Método para exibir as opções de resposta no quiz e tornar as opções selecionáveis para o jogador marcar
    adicionarOpcoes(pergunta){
        var i = 0
        var listaopcoes = []
        var opcoesContainer = this.add.container();
        while(i < pergunta.opcoes.length){
            if(i == 0){
                this.opcao1 = this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height * 0.88 + i * 100, ${i + 1}. ${pergunta.opcoes[i]}, { fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 720 }
                }).setOrigin(0.5);

                listaopcoes.push(this.opcao1) // Adiciona o texto da primeira opção de resposta para a lista de opções
                this.opcao1.setInteractive() // Torna o texto de opção de resposta interativo
                this.opcao1.on('pointerdown', () => {
                    if (!this.opcaoSelecionada) { // Verificar se nenhuma opção foi selecionada ainda
                        this.opcaoSelecionadaIndex = 0; // Atribui o índice da opção selecionada
                        this.opcaoSelecionada = true;
                        this.opcao1.off('pointerdown');
                    }
                })
            }

            if(i == 1){
                this.opcao2 = this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height * 0.88 + i * 100, ${i + 1}. ${pergunta.opcoes[i]}, { fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 720 }
                }).setOrigin(0.5);
                
                listaopcoes.push(this.opcao2)
                this.opcao2.setInteractive()
                this.opcao2.on('pointerdown', () => {
                    if (!this.opcaoSelecionada) { // Verificar se nenhuma opção foi selecionada ainda
                        this.opcaoSelecionadaIndex = 1;
                        this.opcaoSelecionada = true;
                        this.opcao2.off('pointerdown');
                    }
                })
                

            }

            if(i == 2){
                this.opcao3 = this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height * 0.88 + i * 100, ${i + 1}. ${pergunta.opcoes[i]}, { fontFamily: 'Open Sans',
                fontSize: 28,
                color: '#000000',
                align: 'center', // Centraliza o texto horizontalmente
                wordWrap: { width: 720 }
                }).setOrigin(0.5);

                listaopcoes.push(this.opcao3)
                this.opcao3.setInteractive()
                this.opcao3.on('pointerdown', () => {
                    if (!this.opcaoSelecionada) { // Verificar se nenhuma opção foi selecionada ainda
                        this.opcaoSelecionadaIndex = 2;
                        this.opcaoSelecionada = true;
                        this.opcao3.off('pointerdown');
                    }
                })
            }
            i += 1
        }
        opcoesContainer.add(listaopcoes)
        return opcoesContainer
    }
```

&nbsp;&nbsp;&nbsp;&nbsp; Método para adicionar links de conteúdo no dicionário
```
    abrirLink(image, url) {
        image.setInteractive();
        image.on('pointerdown', () => {
            window.open(url, '_blank')
        })
        image.on('pointerover', () => {
            this.sys.canvas.style.cursor = 'pointer'
        })
        image.on('pointerout', () => {
            this.sys.canvas.style.cursor = 'default'
        })
    }
```
&nbsp;&nbsp;&nbsp;&nbsp; Adição de textos clicáveis e dos links de treinamento presentes no dicionário
```
    var Dicionariobg = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.85, 'Dicionariobg').setScale(1.0)
        var videoUniops = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.97, 'videobg').setScale(1.0)
        var estruturaEstrategia = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.15, 'estrategiabg').setScale(1.0)
        var educacional = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.31, 'educacionalbg').setScale(1.0)
        var una = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.45, 'Unabg').setScale(1.0)
        var time = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.60, 'Timebg').setScale(1.0)

        this.abrirLink(Dicionariobg, 'https://unilever.sharepoint.com/sites/AboutUnilever/SitePages/Unilever-Dictionary.aspx')
        this.abrirLink(videoUniops, '')
        this.abrirLink(estruturaEstrategia, '')
        this.abrirLink(educacional, 'https://degreed.com/plan/3210455?editmode=false&autosuggest=false')
        this.abrirLink(una, 'https://degreed.com/pathway/w9d4oxqm8j/pathway?newWindow=true')
        this.abrirLink(time, '')
```

<div align="center"> 
<sup><a name="f52"></a>Figura 52 - Dicionário implementado no jogo
<img src="/assets/cenaDicionario.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp; Adição do som de fundo do menu jogo
```
       this.load.audio('mainMenu', '/assets/FM/mainMenu.mp3')
        this.load.audio('main', '/assets/FM/main.mp3')
```

&nbsp;&nbsp;&nbsp;&nbsp; Adição do som de fundo do menu jogo
```
   export function music (scene, music) {
    scene.sound.stopAll()

    if (!scene.playingSong) {
        scene.menuSong = scene.sound.add(music, {loop: true});
        scene.menuSong.play();
        scene.playingSong = true;
    }
}
```

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Após a implementação das adições planejadas na sprint 4, nosso jogo alcançou um novo patamar de complexidade e interatividade com o MVP desenvolvido por completo. A inclusão do NPC, colecionáveis, links e quizzes enriqueceu significativamente a experiência do jogador, proporcionando novas camadas de envolvimento e desafio. A próxima etapa é adicionar as correções e refinar o jogo com base nos feedbacks dos testes realizados com os funcionários da Unilever.

<br>

## 4.5. Revisão do MVP

&nbsp;&nbsp;&nbsp;&nbsp;Na reta final do desenvolvimento de nosso jogo, tivemos como meta realizar correções globais no jogo, como fixação de bugs, padronização de variáveis, organização e modularização geral do código. Além disso, buscamos resolver os pontos indicados nos feedbacks do playtest e adicionar a introdução da história de nosso jogo.

&nbsp;&nbsp;&nbsp;&nbsp;Pelo fato de que, na nossa visão, o quiz ser um dos elementos mais importantes do jogo, nesse período focamos em modularizar o quiz, para facilitar a adição de novas perguntas e outras possíveis modificações. Aqui está o resultado dessa modularização:

<div align="center"> 
<sup><a name="f53"></a>Figura 53 - Pasta Quiz
<img src="/assets/PastaCodigoQuiz.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Dentro do arquivo "bancoDePerguntas.js", é possível fácilmente realizar as alterações e adições desejadas em relação às perguntas presentes no quiz de cada fase. Já no arquivo "estruturaQuiz.js", há toda a lógica que estão ligadas ao pleno funcionamento do quiz, das mecânicas relacionadas, das interações e design do quiz. Por fim, os arquivos como "cenaQuiz1" tem como objetivo a implementação dos diferentes quizzes em cada fase.

&nbsp;&nbsp;&nbsp;&nbsp;Dando continuidade à modularização, o código do balão de fala do NPC foi reestruturado para que fossem ocupadas menos linhas e que a complexidade do código fosse reduzida. Assim, foi criada a seguinte função para ser utilizada ao longo de todas as cenas em que o NPC tivesse falas:

```
export function temporizador (falaAtual, scene, texto, numeroFala) {
    setTimeout (() => {
        falaAtual = scene.add.text(750, 860, texto, {
            fontFamily: 'Open Sans',
            fontSize: 28,
            color: '#000000',
            align: 'center',
            wordWrap: { width: 450 }
        }).setOrigin(0.5)
        setTimeout(() => {
            falaAtual.destroy()
        }, 3000)
        return falaAtual
    }, 3000*(numeroFala - 1))
}
```
<div align="center"> 
<sup><a name="f54"></a>Figura 54 - Balões de fala antigos
<img src="/assets/balaodefalaAntigo.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Outro questão muito importante que vimos como necessário facilitar os processos de modificações é a respeito da adição de moedas e checkpoints do personagem. Nesse sentido, agora, com o código modularizado, é simples adicionar novas diversas moedas e checkpoints ao mapa, contanto que se saiba as coordenadas para inserir tais elementos.

<div align="center"> 
<sup><a name="f55"></a>Figura 55 - Código de adição de moedas atualizado
<img src="/assets/moedasModularizadas.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

<div align="center"> 
<sup><a name="f56"></a>Figura 56 - Diversas moedas e checkpoint no Level 4
<img src="/assets/Moedas_checkpoint2.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;O código a seguir implementa a funcionalidade de bloquear que o jogador acesse a cena final sem ter passado por todos os levels do jogo.

```
import centroDeEventos from "../centroDeEventos/centroDeEventos.js";

export class bloquearFaseFinal extends Phaser.Scene {

    constructor() {
        super({key: 'bloquearFaseFinal'})
        this.level1 = false;
        this.level2 = false
        this.level3 = false
        this.level4 = false
    }

    armazenarVariaveis() { 
        centroDeEventos.on('level1_Finalizado', () => {
            this.level1 = true;
        })
        centroDeEventos.on('level2_Finalizado', () => {
            this.level2 = true;
        })
        centroDeEventos.on('level3_Finalizado', () => {
            this.level3 = true;
        })
        centroDeEventos.on('level4_Finalizado', () => {
            this.level4 = true;
        })
    }

    verificarVariaveis() {
        centroDeEventos.on('verificarLiberacao', () => {
            console.log(this.level1, this.level2, this.level3, this.level4)
            if (this.level1 && this.level2 && this.level3 && this.level4) {
                centroDeEventos.emit('liberado')
            }
        })
    }

    create() {
        this.armazenarVariaveis()
        this.verificarVariaveis()
        this.scene.start('Cena1')
    }

}
```

&nbsp;&nbsp;&nbsp;&nbsp;Outro ponto que julgamos fundamental estar presente em nosso jogo é um mostrador de performance. O código abaixo implementa a lógica do mostrador, de modo que, ao fim do jogo, é apresentado ao jogador quantas questões ele acertou ao longo de todos os quizzes respondidos.

```
import centroDeEventos from "../centroDeEventos/centroDeEventos.js"

export class mostradorDePerformance extends Phaser.Scene {
    constructor() {
        super({key: 'mostradorDePerformance'})
        this.contador = 0;
    }

    receberResposta() {
        centroDeEventos.on('Certa', () => {
            this.contador++
        })
    }

    enviarRespostas() {
        centroDeEventos.on('Respostas', () => {
            centroDeEventos.emit('ContadorDeRespostas', this.contador)
        })
    }

    create() {
        this.receberResposta()
        this.enviarRespostas()
        this.scene.start('Cena1')
    }
}
```



&nbsp;&nbsp;&nbsp;&nbsp;Quanto à organização do código, buscamos organizar o preload, colocando assets de categorias diferentes em posições distintas, além de termos colocado elementos próximos em sequências.

<div align="center"> 
<sup><a name="f57"></a>Figura 57 - Novo preload
<img src="/assets/preloadOrganizado.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Nesse período final, também demos atenção aos comentários presentes no código, deixando eles mais diretos e objetivos, além de conferirmos se todos os arquivos estavam devidamente comentados.

<div align="center"> 
<sup><a name="f58"></a>Figura 58 - Cena 2, comentários antigos
<img src="/assets/comentariosAntigos.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

<div align="center"> 
<sup><a name="f59"></a>Figura 59 - Cena 2, novos comentários
<img src="/assets/codigosobjetivos.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Por fim, realizamos adaptações no jogo conforme os feedbacks que recebemos do playtest, de modo que adicionamos uma cena de introdução no jogo, para tornar a experiência para o jogador mais imersiva e contextualizada.

```
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

```

<div align="center"> 
<sup><a name="f60"></a>Figura 60 - Introdução da história do jogo
<img src="/assets/imagem_intro.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>
<br>


&nbsp;&nbsp;&nbsp;&nbsp;Desse modo, durante as semanas de desenvolvimento final de nosso jogo, acreditamos que conseguimos aprimorar o quesito low-code presente em nosso jogo, de modo que houve a redução de centenas de linhas de código e a facilitação para alterações de elementos diversos. Além disso, aprimoramos a organização, os comentários presentes no nosso jogo e renomeamos variáveis a fim de que nosso código seja de fácil entendimento. Por fim, realizamos a correção de bugs e modificamos o jogo com base no que foi relatado nos testes.


# <a name="c5"></a>5. Testes

&nbsp;&nbsp;&nbsp;&nbsp;Os testes no desenvolvimento de jogos são procedimentos essenciais para verificar e validar o funcionamento correto do jogo em diferentes aspectos, como funcionalidade, desempenho, estabilidade e usabilidade. Eles ajudam a identificar e corrigir falhas, bugs e problemas de design antes do lançamento, garantindo uma experiência de jogo fluida, imersiva e livre de problemas para os jogadores.


## 5.1. Casos de Teste
&nbsp;&nbsp;&nbsp;&nbsp;Nesta seção está a explicação de testes do nosso jogo, a etapa que garante que tudo está funcionando corretamente, oferecendo aos jogadores uma experiência imersiva e livre de frustrações. Implementamos uma série de casos de teste. Esses testes são como experimentos controlados, onde colocamos o jogo em situações específicas para observar e avaliar o comportamento.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Os casos de teste são divididos em 3 etapas: "pré-condição", "descrição do teste" e "pós-condição". A "pré-condição" descreve o estado inicial do jogo para que o teste seja realizado. A "descrição do teste" é uma explicação do que será feito durante o teste, como interações específicas  ou a execução de determinadas ações. Finalmente, a "pós-condição" detalha o resultado esperado após a execução do teste, permitindo-nos verificar se o jogo se comporta conforme o esperado.
<br>



<div align="center">
<sup><a name="t5"></a>Tabela 05 - Casos de teste</sup>

\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | O jogo é carregado e está na tela de Menu Inicial. | Pressionar o botão de "play" para iniciar o jogo | O jogo começa na primeira fase
2 | O jogo é carregado e está na tela de Menu Inicial. | Pressionar o botão de controles. | O jogo abre a tela mostrando os controles.
3 | O jogo é carregado e está na tela de Menu Inicial. | Pressionar o botão de configurações. | O jogo abre as configurações.
4 | O personagem está próximo à água. | Fazer o personagem entrar em contato com a água. | O personagem é imediatamente transportado de volta ao início da fase.
5 | O personagem alcança o fim da fase. | Interagir com o mapa ou objeto indicado para mudança de fase. | O jogo progride para a próxima fase.
6 | O personagem se aproxima de um local estreito na fase. | Tentar passar por um espaço estreito sem agachar. | O personagem não consegue passar pelo espaço estreito.
7 | O personagem se aproxima de um local estreito na fase e a ação de agachar está disponível. | Agachar para passar pelo espaço estreito. | O personagem consegue passar pelo espaço estreito e continuar a fase.
8 | O personagem se aproxima do último desafio de pulo da tela de habilidades.| Pular e usar o dash para passar. | O personagem não consegue entender a dinâmica para passar de primeira o desafio.
9 | O personagem precisa passar os obstáculos da montanha. | Pular os obstáculos. | O personagem não identifica os obstáculos.
10| O personagem se aproxima do elevador das fases. | Interagir com o objeto para mudar de fase. | O personagem entra no elevador e muda de fase.
11| O personagem finaliza as fases de conteúdo. | Realizar o quiz e obter o objeto. | O personagem passa para outra fase
12 | O personagem passa por todas as fases e responde todos os quizzes.| O personagem chega até a tela final | O personagem finaliza o jogo.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Através das etapas de pré-condição, descrição do teste e pós-condição, podemos garantir que todos os aspectos do jogo se comportem conforme o planejado. Ao analisar os resultados dos casos de teste com base nessas etapas, podemos identificar áreas onde o jogo pode ser aprimorado e corrigir quaisquer problemas ou inconsistências que possam surgir.


## 5.2. Testes de jogabilidade (playtests)

&nbsp;&nbsp;&nbsp;&nbsp;Testes de jogabilidade são procedimentos nos quais jogadores reais experimentam o jogo para avaliar sua usabilidade, diversão e desafios. Durante os playtests, os jogadores interagem com o jogo de forma natural, enquanto os desenvolvedores observam e coletam dados sobre o desempenho, a experiência do usuário e possíveis problemas.

### 5.2.1 Registros de testes

&nbsp;&nbsp;&nbsp;&nbsp;Nesta seção serão apresentados os testes de jogabilidade promovidos na data 05/03/2024 e na data 27/03/2024, pelo grupo Camaleões. O primeiro caso de teste foi realizado na faculdade Instituto de Tecnologia e Liderança, no qual os testadores, alunos de outra sala, jogaram o jogo na presença de membros no grupo que registraram os feedbacks e observações acerca dos testes durante o horário das 14:00 até as 15:00. Já no segundo caso de teste, foi realizado de forma online, através da plataforma "Teams", com os colaboradores da Unilever, durante o horário das 14:00 às 16:00. Ao total, foram realizados 18 testes.

<div align="center">

<sup><a name="t5"></a>Tabela 06 - Registro de Testes - Testador 1</sup>

Nome | Lucas Nunes
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Sim, já possuía.
Conseguiu iniciar o jogo? | Conseguiu.
Entendeu as regras e mecânicas do jogo? | Entendeu as regras e as mecânicas mas achou o jogo difícil.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Apresentou dificuldades para passar de tela.
Que nota deu ao jogo? | 8.0
O que gostou no jogo? | Ótima ideia de design.
O que poderia melhorar no jogo? | Melhorar as instruções de direção e de mecânicas, melhorar o design das pedras e diminuir a dificuldade.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, a pessoa em questão já possuía experiência prévia com jogos, conseguindo iniciar o jogo e entender suas regras e mecânicas, embora tenha achado o jogo difícil. No entanto, ela conseguiu progredir, embora tenha enfrentado dificuldades para passar de tela. A nota atribuída ao jogo foi de 8.0, destacando especialmente a ideia de design. No entanto, foram sugeridas melhorias nas instruções de direção e mecânicas, assim como no design das pedras, além de uma redução na dificuldade do jogo. Esses pontos podem ser trabalhados para proporcionar uma experiência ainda mais satisfatória aos jogadores.

<br>
<br>

<div align="center">
<sup><a name="t6"></a>Tabela 07 - Registro de Testes - Testador 2</sup>

Nome | Sophia Silva
--- | ---
Gênero | Feminino
Já possuía experiência prévia com games? | Não possuía.
Conseguiu iniciar o jogo? | Conseguiu.
Entendeu as regras e mecânicas do jogo? | Entendeu as regras mas teve dificuldade na execução das mecânicas de agachar e de double jump.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Apresentou dificuldade na passagem que era necessário o uso do dash.
Que nota deu ao jogo? | 10.0
O que gostou no jogo? | Spritesheet do personagem e cores vibrantes do jogo.
O que poderia melhorar no jogo? | Colocar mais animação na spritesheet, tornar algumas ferramentas mais intuitivas (dash, setinha para agachar, double jump). Tempo de espera entre a passagem de tela precisa ser diminuído.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, a pessoa em questão não possuía experiência prévia com jogos, mas conseguiu iniciar o jogo e entender suas regras, embora tenha enfrentado dificuldades na execução das mecânicas de agachar e double jump. Apesar disso, ela conseguiu progredir no jogo, embora tenha enfrentado dificuldades na passagem que exigia o uso do dash. A nota atribuída ao jogo foi de 10.0, destacando especialmente o spritesheet do personagem e as cores vibrantes do jogo. No entanto, foram sugeridas melhorias, como adicionar mais animação na spritesheet, tornar algumas ferramentas mais intuitivas (como o dash e a setinha para agachar), e diminuir o tempo de espera entre a passagem de tela. 

<br>

<div align="center">
<sup><a name="t7"></a>Tabela 08 - Registro de Testes - Testador 3</sup>

Nome | Jackson Aguiar
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Sim, já possuía.
Conseguiu iniciar o jogo? | Conseguiu.
Entendeu as regras e mecânicas do jogo? | Entendeu as regras mas teve dificuldade na execução das mecânicas de agachar e de como passar pela montanha.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Apresentou dificuldade na passagem que era necessário o uso do dash e na passagem pela montanha.
Que nota deu ao jogo? | 10.0
O que gostou no jogo? | Design e personagens muito bem desenhados.
O que poderia melhorar no jogo? | Melhorar as instruções de direção e de mecânicas e melhorar o design das pedras.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, a pessoa em questão já possuía experiência prévia com jogos e conseguiu iniciar o jogo, embora tenha enfrentado dificuldades na execução das mecânicas de agachar e de como passar pela montanha, mesmo tendo entendido as regras. Apesar desses desafios, ela conseguiu progredir no jogo, embora tenha encontrado dificuldades na passagem que exigia o uso do dash e na passagem pela montanha. A nota atribuída ao jogo foi de 10.0, destacando especialmente o design e os personagens muito bem desenhados. No entanto, foram sugeridas melhorias, como aprimorar as instruções de direção e mecânicas, além de melhorar o design das pedras. Essas melhorias podem contribuir para uma experiência mais fluída e satisfatória para os jogadores.

<br>

<div align="center">
<sup><a name="t8"></a>Tabela 09 - Registro de Testes - Testador 4</sup>

Nome | Isabelly Montalvão
--- | ---
Gênero | Feminino
Já possuía experiência prévia com games? | Não, é uma jogadora iniciante.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Demorou a entender razoavelmente as mecânicas, mas entendeu as regras sem mais problemas.
Conseguiu progredir no jogo? | Sim, mas com alguma dificuldade.
Apresentou dificuldades? | Sim, não conseguiu visualizar alguns obstáculos do mapa e demorou a se adaptar às mecânicas.
Que nota deu ao jogo? | 10.0
O que gostou no jogo? | Estética visual (animações e paisagem) e interações com o ambiente do jogo.
O que poderia melhorar no jogo? | A forma como os obstáculos são apresentados.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, a jogadora iniciante conseguiu iniciar o jogo, embora tenha demorado a entender razoavelmente as mecânicas, mas compreendeu as regras sem grandes problemas. Apesar de ter progredido no jogo, enfrentou algumas dificuldades, especialmente em visualizar alguns obstáculos do mapa e se adaptar às mecânicas. Apesar disso, ela deu ao jogo uma nota de 10.0, apreciando especialmente a estética visual, incluindo as animações e a paisagem, bem como as interações com o ambiente do jogo. No entanto, ela sugeriu melhorias na forma como os obstáculos são apresentados, o que poderia facilitar a compreensão e a adaptação da jogadora.

<br>

<div align="center">
<sup><a name="t9"></a>Tabela 10 - Registro de Testes - Testador 5</sup>

Nome | Renan Reis
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Sim, é um jogador casual.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Entendeu com facilidade e sem demora.
Conseguiu progredir no jogo? | Sim, mas com dificuldade.
Apresentou dificuldades? | Sim, não conseguiu visualizar alguns obstáculos do mapa.
Que nota deu ao jogo? | 9.5
O que gostou no jogo? | Estética visual (animações e paisagem).
O que poderia melhorar no jogo? | A forma como os obstáculos são apresentados, mecânicas que podem apresentar erros.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador casual conseguiu iniciar o jogo sem dificuldades e compreendeu facilmente as regras e mecânicas. No entanto, ele enfrentou algumas dificuldades ao progredir, especialmente em visualizar alguns obstáculos do mapa. Apesar desses desafios, ele deu ao jogo uma nota de 9.5, apreciando especialmente a estética visual, incluindo as animações e a paisagem. No entanto, ele sugeriu melhorias na forma como os obstáculos são apresentados, visando melhorar a clareza e a jogabilidade, assim como corrigir possíveis erros nas mecânicas do jogo. 

<br>

<div align="center">
<sup><a name="t10"></a>Tabela 11 - Registro de Testes - Testador 6</sup>

Nome | Gabriela Martins
--- | ---
Gênero | Feminino
Já possuía experiência prévia com games? | Sim, é um jogador experiente.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Entendeu.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Não.
Que nota deu ao jogo? | 8.0
O que gostou no jogo? | Design do jogo.
O que poderia melhorar no jogo? | A apresentação das mecânicas.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador experiente conseguiu iniciar o jogo sem problemas. Ele progrediu no jogo sem dificuldades significativas e não apresentou dificuldades durante a jogabilidade. Apesar disso, ele deu ao jogo uma nota de 8.0, destacando especialmente o design do jogo. No entanto, ele sugeriu melhorias na forma como as mecânicas são apresentadas, possibilitando uma melhor compreensão e adaptação dos jogadores. Essas melhorias podem contribuir para aprimorar ainda mais a experiência de jogabilidade para jogadores experientes como ele.

<br>

<div align="center">
<sup><a name="t11"></a>Tabela 12 - Registro de Testes - Testador 7</sup>

Nome | João Guilherme
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Sim.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sim.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Não.
Que nota deu ao jogo? | Nota não atribuída.
O que gostou no jogo? | Estética (paisagem, animações).
O que poderia melhorar no jogo? | A forma como alguns obstáculos são apresentados, já que não estão muito visíveis.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador, que já possuía experiência prévia com jogos, conseguiu iniciar o jogo e compreender facilmente suas regras e mecânicas. Ele progrediu no jogo sem dificuldades significativas e não enfrentou obstáculos durante a jogabilidade. No entanto, não atribuiu uma nota ao jogo. Ele apreciou especialmente a estética do jogo, incluindo a paisagem e as animações. No entanto, sugeriu melhorias na forma como alguns obstáculos são apresentados, visto que não são muito visíveis.

<br>

<div align="center">
<sup><a name="t12"></a>Tabela 13 - Registro de Testes - Testador 8</sup>

Nome | Julia Lika
--- | ---
Gênero | Feminino
Já possuía experiência prévia com games? | Sim.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sim.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Não.
Que nota deu ao jogo? | Nota não atribuída.
O que gostou no jogo? | Estética (paisagem, animações).
O que poderia melhorar no jogo? | A forma como alguns obstáculos são apresentados, já que não estão muito visíveis.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador, que já possuía experiência prévia com jogos, conseguiu iniciar o jogo e compreender facilmente suas regras e mecânicas. Ele progrediu no jogo sem dificuldades significativas e não enfrentou obstáculos durante a jogabilidade. No entanto, não atribuiu uma nota ao jogo. Ele apreciou especialmente a estética do jogo, incluindo a paisagem e as animações. No entanto, sugeriu melhorias na forma como alguns obstáculos são apresentados, visto que não são muito visíveis. Essas melhorias podem contribuir para aprimorar a experiência visual e de jogabilidade do jogo, proporcionando uma experiência ainda mais envolvente para o jogador.

<br>

<div align="center">
<sup><a name="t13"></a>Tabela 14 - Registro de Testes - Testador 9</sup>

Nome | Bernardo Meirelles
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Sim.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Não entendeu completamente as mecânicas nem as regras do jogo.
Conseguiu progredir no jogo? | Sim, mas com dificuldades.
Apresentou dificuldades? | Sim, ao não entender uma mecânica fundamental do jogo, não conseguiu progredir da forma que deveria.
Que nota deu ao jogo? | Nota não atribuída.
O que gostou no jogo? | Estética (paisagem, animações).
O que poderia melhorar no jogo? | A forma como alguns obstáculos são apresentados, já que não estão muito visíveis.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, embora o jogador tenha experiência prévia com jogos e conseguido iniciar o jogo, ele enfrentou dificuldades para compreender completamente as regras e mecânicas. Essa falta de compreensão resultou em dificuldades ao progredir no jogo, especialmente devido a uma mecânica fundamental mal compreendida. O jogador não atribuiu uma nota ao jogo, mas apreciou a estética, incluindo a paisagem e as animações. No entanto, ele sugeriu melhorias na forma como alguns obstáculos são apresentados, pois não estavam muito visíveis. 

<br>

<div align="center">
<sup><a name="t14"></a>Tabela 15 - Registro de Testes - Testador 10</sup>

Nome | Tainá Cortez
--- | ---
Gênero | Feminino
Já possuía experiência prévia com games? | Sim.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sim.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Sim, no ponto mais difícil do jogo.
Que nota deu ao jogo? | 9.0
O que gostou no jogo? | Estética (paisagem, animações).
O que poderia melhorar no jogo? | A forma como alguns obstáculos são apresentados, já que não estão muito visíveis.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador, que já possuía experiência prévia com jogos, conseguiu iniciar o jogo e compreender facilmente suas regras e mecânicas. Ele conseguiu progredir no jogo, mas enfrentou dificuldades em um ponto específico considerado o mais difícil. Embora tenha dado ao jogo a nota de 9.0, ele apreciou especialmente a estética, incluindo a paisagem e as animações. No entanto, sugeriu melhorias na forma como alguns obstáculos são apresentados, pois não estavam muito visíveis, o que pode ajudar a evitar pontos de frustração para os jogadores.

<br>

<div align="center">
<sup><a name="t15"></a>Tabela 16 - Registro de Testes - Testador 11</sup>

Nome | Kauan Massuia
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Já possui experiência com jogos.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Entendeu, mas indicou que preferia um complemento de forma escrita, pois demorou para entender que havia possibilidade de agachar.
Conseguiu progredir no jogo? | Sim, com algumas dificuldades para ultrapassar o maior obstáculo da primeira tela.
Apresentou dificuldades? | Não apresentou dificuldades ao jogar.
Que nota deu ao jogo? | Não foi atribuída uma nota.
O que gostou no jogo? | Gostou das animações e da disponibilidade de diversas teclas
O que poderia melhorar no jogo? | Como citado anteriormente disse que poderia escrever a descrição das teclas de controle, e melhorar o carregamento da tela 2. Além disso, disse que seria interessante as fases serem lineares.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador já possuía experiência prévia com jogos e conseguiu iniciar o jogo sem problemas. Embora tenha entendido as regras e mecânicas, ele indicou que preferiria um complemento escrito para facilitar a compreensão, especialmente para descobrir funcionalidades como agachar. Ele progrediu no jogo, mas enfrentou algumas dificuldades para superar o maior obstáculo da primeira tela. Apesar disso, ele não atribuiu uma nota ao jogo. Ele gostou das animações e da disponibilidade de diversas teclas para controle, mas sugeriu melhorias, como fornecer uma descrição das teclas de controle por escrito e melhorar o carregamento da segunda tela. Além disso, ele expressou que seria interessante se as fases fossem lineares. 

<br>

<div align="center">
<sup><a name="t16"></a>Tabela 17 - Registro de Testes - Testador 12</sup>

Nome | Mariana Barbosa
--- | ---
Gênero | Feminino
Já possuía experiência prévia com games? | Sim, é uma jogadora experiente.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Não entendeu todas as mecânicas e nem todas as regras.
Conseguiu progredir no jogo? | Sim, mas com alguma dificuldade.
Apresentou dificuldades? | Sim, algumas.
Que nota deu ao jogo? | 8.5
O que gostou no jogo? | Estética visual (animações e paisagem) e interações com o ambiente do jogo.
O que poderia melhorar no jogo? | A forma como as mecânicas são apresentadas ao jogador, além da dificuldade, que deveria ser reduzida.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, a jogadora experiente conseguiu iniciar o jogo sem problemas, porém, enfrentou dificuldades para compreender todas as mecânicas e regras do jogo. Mesmo com essas dificuldades, ela conseguiu progredir, mas com alguma dificuldade. Ela atribuiu uma nota de 8.5 ao jogo, destacando especialmente a estética visual, incluindo as animações e a paisagem, assim como as interações com o ambiente do jogo. No entanto, ela sugeriu melhorias na forma como as mecânicas são apresentadas ao jogador, bem como a redução da dificuldade do jogo. Essas melhorias podem contribuir para uma experiência mais acessível e satisfatória, especialmente para jogadores experientes que buscam desafios equilibrados.

<br>

<div align="center">
<sup><a name="t17"></a>Tabela 18 - Registro de Testes - Testador 13</sup>

Nome | Guilherme Carvalho
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Sim, é um jogador casual.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sim, completamente.
Conseguiu progredir no jogo? | Sim, sem dificuldades.
Apresentou dificuldades? | Sim, não conseguiu visualizar alguns obstáculos do mapa.
Que nota deu ao jogo? | Nota não atribuída.
O que gostou no jogo? | Estética visual (personagem e paisagem) e relevância das mecânicas.
O que poderia melhorar no jogo? | A forma como as mecânicas são apresentadas ao jogador, a dificuldade, que deveria diminuir, além das dimensões do mapa, que causam conflitos com a paisagem em certos momentos.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador casual conseguiu iniciar o jogo sem problemas e compreendeu completamente as regras e mecânicas. Ele progrediu no jogo sem dificuldades, no entanto, enfrentou problemas ao não conseguir visualizar alguns obstáculos no mapa. Embora não tenha atribuído uma nota específica ao jogo, ele apreciou especialmente a estética visual, incluindo o personagem e a paisagem, além da relevância das mecânicas. No entanto, ele sugeriu melhorias na forma como as mecânicas são apresentadas ao jogador, a redução da dificuldade do jogo e ajustes nas dimensões do mapa para evitar conflitos com a paisagem. 

<br>

<div align="center">
<sup><a name="t18"></a>Tabela 19 - Registro de Testes - Testador 14</sup>

Nome | Yasmin Minario
--- | ---
Gênero | Feminino
Já possuía experiência prévia com games? | Sim, já tinha jogado jogos parecidos com o Plataforma Mário Clássico.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Entendeu bem as mecânicas, mas falou que poderia ser evidenciado melhor como elas poderiam ser utilizadas.
Conseguiu progredir no jogo? | Sim, sem dificuldades.
Apresentou dificuldades? | Não, conseguiu jogar com facilidade e afirmou ser fácil.
Que nota deu ao jogo? | Nota não atribuída.
O que gostou no jogo? | Design e jogabilidade.
O que poderia melhorar no jogo? | Pedras confusas de onde tem que pular, se ficar apertando o pulo bem rápido, tem um delay meio longo e não dá pulo duplo, delay na entrada da unilever, seria interessante colocar a imagem do lixão no início e colocar colisão na placa pra quando ele levantar estando embaixo da placa.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador já tinha experiência com jogos semelhantes ao Plataforma Mário Clássico e conseguiu iniciar o jogo sem problemas. Ele entendeu bem as mecânicas, mas sugeriu que fosse evidenciado melhor como elas poderiam ser utilizadas. Apesar disso, ele progrediu no jogo sem dificuldades e não enfrentou problemas significativos durante a jogabilidade, considerando o jogo fácil de jogar. Embora não tenha atribuído uma nota específica, ele apreciou o design e a jogabilidade do jogo. No entanto, ele identificou áreas de melhoria, incluindo a clareza dos obstáculos, a resposta do comando de pulo e a entrada da unilever, além de sugestões como adicionar a imagem do lixão no início e implementar colisão na placa. Essas melhorias podem contribuir para uma experiência mais agradável e envolvente para os jogadores, garantindo uma jogabilidade mais fluida e intuitiva.

<br>

<div align="center">
<sup><a name="t19"></a>Tabela 20 - Registro de Testes - Testador 15</sup>

Nome | Larissa Temoteo
--- | ---
Gênero | Feminino
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sentiu dificuldades ao saber com quais teclas eram para jogar.
Conseguiu progredir no jogo? | Sim, mas ficou perdida para onde deveria ir.
Apresentou dificuldades? | Confundiu o chão com o plano de fundo.
Já possuía experiência prévia com games? | Já possuía experiência, gosta de jogos 2D no computador.
Que nota deu ao jogo? | 8.0
O que gostou no jogo? | Parte visual e se divertir fazendo o onboarding.
O que poderia melhorar no jogo? | Identificação de quais fases já passou e quais faltam, indicar que pode pegar o dicionário e lá vai ter os links e reduzir o que a pessoa tem que descobrir por si só.
O que achou da estética do jogo? | Bem interessante.
O NPC te ajudou a entender o jogo e quizzes? | Ajudou no contexto inicial , mas ignorou o resto.
Conseguiu acessar o dicionário e configurações ao longo do jogo? | Não conseguiu sozinha.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, a jogadora, que já possuía experiência com jogos 2D no computador, conseguiu iniciar o jogo, mas enfrentou dificuldades para compreender as teclas de controle. Apesar disso, ela conseguiu progredir no jogo, embora tenha ficado perdida em relação ao seu objetivo. Durante a jogabilidade, ela confundiu o chão com o plano de fundo, apresentando dificuldades visuais. Ela atribuiu uma nota de 8.0 ao jogo, apreciando principalmente a parte visual e a diversão durante o onboarding. No entanto, ela sugeriu melhorias, como a identificação das fases concluídas e restantes, indicação sobre a utilização do dicionário, além de reduzir a quantidade de informações que o jogador precisa descobrir por conta própria. Quanto à estética do jogo, ela a achou interessante. O NPC a ajudou apenas no contexto inicial e ignorou o resto. Ela não conseguiu acessar o dicionário e as configurações do jogo sozinha ao longo da partida.

<br>

<div align="center">
<sup><a name="t20"></a>Tabela 21 - Registro de Testes - Testador 16</sup>

Nome | Lilian Florian
--- | ---
Gênero | Feminino
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sim.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Sim, achou difícil passar os obstáculos do mapa e demorou a se adaptar às mecânicas.
Já possuía experiência prévia com games? | Há muito tempo, atualmente não joga.
Que nota deu ao jogo? | 8.0
O que gostou no jogo? | Gráficos e estética visual.
O que poderia melhorar no jogo? | Instruções e controles na tela e contar uma história para ter lógica e objetivo final para querer continuar a jogar.
O que achou da estética do jogo? | Gostou.
O NPC te ajudou a entender o jogo e quizzes? | Mais ou menos.
Conseguiu acessar o dicionário e configurações ao longo do jogo? | Apenas com a ajuda do membro do grupo.
O que achou da estética do jogo? | Gostou muito e disse que está reconfortante, principalmente o contraste de cores. Assim como, afirmou estar conforme os padrões da Unilever.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador, que tinha experiência prévia com jogos, conseguiu iniciar, entender as regras e mecânicas, e progredir no jogo, apesar de enfrentar dificuldades para passar pelos obstáculos do mapa e para se adaptar às mecânicas. Ele atribuiu uma nota de 8.0 ao jogo, destacando os gráficos e a estética visual como pontos positivos. No entanto, sugeriu melhorias, como instruções e controles na tela, além da inclusão de uma história para proporcionar uma lógica e um objetivo final, que incentivem o jogador a continuar. Quanto à estética do jogo, ele gostou muito, descrevendo-a como reconfortante, especialmente devido ao contraste de cores, e mencionando que está de acordo com os padrões da Unilever. Ele teve alguma ajuda do NPC para entender o jogo e os quizzes, mas precisou de assistência para acessar o dicionário e as configurações ao longo do jogo. Essas sugestões e observações podem contribuir para aprimorar a experiência do jogador, tornando-a mais envolvente e satisfatória.

<br>

<div align="center">
<sup><a name="t21"></a>Tabela 22 - Registro de Testes - Testador 17</sup>

Nome | Giovanni Mendes
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Não possuía nenhuma experiência.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sim, mas de início achou que o jogo era controlado pelo mouse.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Não.
Que nota deu ao jogo? | Não foi atribuída.
O que gostou no jogo? | Gostou do jogo ser desafiante, pelos obstáculos colocados.
O que poderia melhorar no jogo? | A indicação para o jogador de quando pega o dicionário e acrescentar alguma tecla para a pessoa poder passar as mensagens do NPC por conta própria, para ela não achar que o diálogo encerrou antes do que deveria.
O que achou da estética do jogo? | Gostou da estética 2D e achou interessante os cenários da Unilever.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador, sem experiência prévia com jogos, conseguiu iniciar o jogo e entender as regras e mecânicas, embora inicialmente tenha confundido o controle com o mouse. Ele progrediu no jogo sem dificuldades e não apresentou problemas significativos durante a jogabilidade. Embora não tenha atribuído uma nota específica ao jogo, ele apreciou o desafio proporcionado pelos obstáculos. No entanto, ele sugeriu melhorias, como indicar quando o jogador pega o dicionário e adicionar uma tecla para permitir que o jogador avance nas mensagens do NPC por conta própria, evitando interrupções inesperadas nos diálogos. Quanto à estética do jogo, ele gostou da abordagem 2D e achou os cenários da Unilever interessantes.

<br>

<div align="center">
<sup><a name="t22"></a> Tabela 23 - Registro de Testes - Testador 18</sup>

Nome | Filipe Gonçalves
--- | ---
Gênero | Masculino
Já possuía experiência prévia com games? | Sim.
Conseguiu iniciar o jogo? | Sim.
Entendeu as regras e mecânicas do jogo? | Sim.
Conseguiu progredir no jogo? | Sim.
Apresentou dificuldades? | Sim, para compreender inicialmente as mecânicas.
Que nota deu ao jogo? | Não atribuída.
O que poderia melhorar no jogo? | Nível de dificuldade poderia ser diminuído e teclas de indicação das mecânicas serem apresentadas de forma mais clara.

<sub>Fonte: Elaborado pelos autores (2024)</sub>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Com base nos dados fornecidos, o jogador, que já possuía experiência prévia com jogos, conseguiu iniciar o jogo e entender as regras e mecânicas, embora tenha enfrentado dificuldades inicialmente para compreender as mecânicas. Apesar dessas dificuldades, ele conseguiu progredir no jogo. Embora não tenha atribuído uma nota específica ao jogo, ele sugeriu melhorias, como a redução do nível de dificuldade e uma apresentação mais clara das teclas que indicam as mecânicas do jogo. Essas sugestões podem contribuir para tornar a experiência de jogo mais acessível e satisfatória, especialmente para jogadores que já possuem experiência, mas que ainda podem encontrar desafios na aprendizagem das mecânicas específicas do jogo.

<br>



<div align="center"> 
<sup><a name="f61"></a>Figura 61 - Gráfico de feedbacks
<img src = "/assets/Feedback.png">
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Após os playtests, o jogo é reavaliado com base nos resultados e feedbacks dos jogadores. Os problemas identificados são solucionados através de ajustes no design, correção de bugs e otimizações. Após as melhorias, o jogo é testado novamente para garantir que as questões foram resolvidas e que a experiência do jogador foi aprimorada.

### 5.2.2 Melhorias

&nbsp;&nbsp;&nbsp;&nbsp;Baseado nos testes realizados e nos feedbacks dos jogadores, identificamos diversas áreas para melhorias que vão além dos requisitos inicialmente estabelecidos, para expandir e aprimorar a experiência do player, proporcionando uma jornada mais agradável e envolvente para todos.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;No campo visual do jogo, percebemos a necessidade de adicionar instruções claras na tela sobre as teclas de controle, visando auxiliar os jogadores que se sentem perdidos. Além disso, uma indicação de progresso mais clara e feedbacks visuais sobre a coleta de itens, como o dicionário, são essenciais para ajudar os jogadores a rastrearem seu progresso. A implementação de um sistema que mostre quais fases foram concluídas e quais estão por vir pode evitar a sensação de desorientação. Também identificamos a necessidade de facilitar as instruções de acesso ao dicionário e às configurações do jogo, além do feedback recebido sobre o enredo do jogo, sugerindo que uma narrativa envolvente e um objetivo claro podem motivar os jogadores a continuarem jogando.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Em relação às mecânicas de jogo, reconhecemos a importância de refiná-las, suavizando a interação das teclas e ajustando a velocidade para tornar a experiência mais acessível. A adição de controles na tela facilitará o entendimento das mecânicas do jogo, especialmente para novos jogadores. Oferecer controle sobre os diálogos do NPC permitirá que os jogadores absorvam informações importantes no seu próprio ritmo, e aprimorar a integração do NPC ao longo do jogo garantirá uma entrega consistente de informações úteis.
<br>

# <a name="c6"></a>6. Conclusões e trabalhos futuros

&nbsp;&nbsp;&nbsp;&nbsp;O jogo alcançou os objetivos que se propôs a realizar em conseguir apresentar a cultura, os links de treinamento, as principais marcas e diversidade de produtos da empresa de forma dinâmica e engajante, de modo que esperamos que, assim, possamos contribuir para tornar o processo de onboarding dos novos funcionários de TI da Unilever mais eficaz. Além disso, possuíamos metas relacionadas à medição de absorção do conteúdo pelo jogador e a facilitar a manipulação do código
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Diante desse cenário, dentro do âmbito de valores e marcas Unilever, identificamos que os pontos fortes do nosso jogo, fundamentais para alcançar os propósitos esperados, se concentram nos cenários, que concedem grande destaque às principais marcas da empresa, na narrativa que revela aspectos essenciais da cultura organizacional, como a sustentabilidade, e na escolha do personagem ser um robô. Nesse contexto, esta decisão foi pautada na percepção de que um personagem lúdico, como um androide, tende a evitar possíveis sentimentos de exclusão entre os variados funcionários que irão interagir com o jogo. Pelo contrário, essa escolha pode, de fato, promover uma sensação de pertencimento, especialmente considerando que o jogo é direcionado aos funcionários de TI. Assim, a representação do personagem como um monitor de computador foi motivado para estabelecer uma conexão ainda mais próxima com nosso público-alvo.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Além dos pontos supracitados relacionados a como acreditamos que conseguimos atingir os objetivos propostos dentro do contexto de valores e marcas da companhia, julgamos também que as metas relativas a tornar o código facilmente modificável e na mensuração dos assuntos absorvidos pelo colaborador foram alcançadas. Nesse sentido, o esforço que tivemos em tornar o código bem comentado, modularizado e em low-code permite que o jogo seja facilmente adaptável, a fim de que ele possa ser atualizado futuramente sem dificuldades, o que permitirá fazer alterações ágeis em balões de fala, cenários, quizzes, etc. Outra questão que nos preocupamos bastante foi a respeito do redirecionamento links de treinamento, que, no fim, é o principal propósito do jogo e que acreditamos ter sido um dos pontos mais fortes do nosso projeto, tendo em vista que em nosso jogo, o novo colaborador pode ter acesso aos links de conteúdo sempre que precisar, de forma fácil e prática. Também acreditamos que os quizzes serão fundamentais para a metrificação da assimilação de conteúdo. Cada quiz é capaz de conter uma grande banca de perguntas, permitindo que o jogador não responda as mesmas perguntas caso precise refazê-lo.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Por fim, com base nos resultados obtidos do playtest, acreditamos que o nosso jogo poderia ser aperfeiçoado no design de certos aspectos dos mapas e na implementação de feedbacks visuais a respeito da coleta de itens, o que proporcionará maior clareza para os jogadores. Além disso, consideramos a adição de um ranking para motivar os novos colaboradores a desempenharem melhor no jogo e, consequentemente, fazerem um onboarding mais eficaz. Um gestor de RH poderia elaborar perguntas mais específicas com base nos links que os colaboradores usarão como base para realizarem os quizzes. Além disso, é preciso adaptar a dificuldade do jogo para padrões superiores ou inferiores, conforme o desempenho dos novos colaboradores nas fases. Felizmente, tais alterações serão simples de serem realizadas em virtude do modo que organizamos nosso código.

# <a name="c7"></a>7. Referências


CEBDS. Unilever shows that sustainable action drives growth. Disponível em: https://cebds.org/en/noticia/unilever-mostra-que-atuacao-sustentavel-impulsiona-crescimento/. Acesso em: 14 fev. 2024

UNILEVER. Visão geral da Unilever. Disponível em: https://www.unilever.com.br/our-company/. Acesso em: 21 fev. 2024

GREENTECH. Pesquisa de campo - Alunos Inteli. Disponível em: https://docs.google.com/spreadsheets/d/1KfB5Fr4jNopDP0pfSOiJNBDMzPRotjc5L5SvH_-mr7o/edit#gid=2021711938. Acesso em 

EIKO, Julia. "O que é Concept Art?". Disponível em: https://revospace.com.br/artigo/o-que-e-concept-art/. Acesso em 22 fev. 2024

DCF. "Quais são as cinco forças de Michael Porter do Unilever PLC (UL)?". Disponível em: https://dcf.fm/pt/blogs/blog/ul-porters-five-forces-analysis. Acesso em: 21 mar. 2024

KISSINGER, Daniel. Unilever Five Forces Analysis (Porter Model) & Recommendations. Disponível em: https://panmore.com/unilever-five-forces-analysis-porters-model-recommendations. Acesso em: 21 mar. 2024

DESIDÉRIO, Mariana. "O resultado da gigante Nestlé e sua estratégia para não ficar para trás. Disponível em: https://exame.com/negocios/o-resultado-da-gigante-nestle-e-sua-estrategia-para-nao-ficar-para-tras/. Acesso em: 15 fev. 2024

CORPORATIVO, Nestlé. Nestlé® projeta crescimento 30 vezes maior para a páscoa 2023 nos clientes 100% digitais. Disponível em: https://www.corporativo.nestle.com.br/media/pressreleases/allpressreleases/nestle-projeta-crescimento-30-vezes-maior-para-pascoa-2023-nos-clientes. Acesso em: 9 fev. 2024

BENATTO, Fernanda. Unilever inicia transformação estratégica com a cisão do setor de sorvetes sob nova liderança. Disponível em: https://br.advfn.com/jornal/2024/03/unilever-inicia-transformacao-estrategica-com-a-cisao-do-setor-de-sorvetes-sob-nova-lideranca. Acesso em: 21 mar. 2024

ABRAS. Operação brasileira se destaca no resultado global da Unilever. Disponível em: https://www.abras.com.br/clipping/geral/73258/operacao-brasileira-se-destaca-no-resultado-global-da-unilever. Acesso em: 21 fev. 2024

BRANDÃO, Raquel. Um ano depois: como a Unilever concentrou esforços em 5 unidades de negócios para voltar a crescer. Disponível em: https://exame.com/invest/mercados/um-ano-depois-como-a-unilever-concentrou-esforcos-em-5-unidades-de-negocios-para-voltar-a-crescer/. Acesso em: 21 mar. 2024

TYDY. Five onboarding best practices you can learn from Unilever. Disponível em: https://www.tydy.co/blog/five-onboarding-best-practices-you-can-learn-from-unilever. Acesso em: 12 fev. 2024

NAPOLEÃO, Bianca. Matriz de Riscos (Matriz de Probabilidade e Impacto). Disponível em: https://ferramentasdaqualidade.org/matriz-de-riscos-matriz-de-probabilidade-e-impacto/. Acesso em: 12 fev. 2024

IDOCODE. Jogos eletrônicos: entenda como eles mudaram o mundo. Disponível em: https://idocode.com.br/blog/tecnologia/jogos-eletronicos-mudaram-o-mundo/#:~:text=O%20aumento%20na%20popularidade%20dos,que%20é%20jogado%20no%20computador. Acesso em: 15 fev. 2024



# <a name="c8"></a>Anexos

## Anexo 1 : Autorização Thyago

<div align="center"> 
<sup><a name="f62"></a>Figura 62 - Autorização Thyago
<br>
<img src="/assets/anexo1.png">
<sub>Fonte: Elaborado pelos autores (2024).
<br>
</div>

## Anexo 2 : Transcrição playtest

<div align="center">
<sup><a name="f63"></a>Figura 63 - Transcrição Playtest parte 1
<br>
<img src="/assets/transcricao1.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>

<div align="center"> 
<sup><a name="f64"></a>Figura 64 - Transcrição Playtest parte 2
<br>
<img src="/assets/transcricao2.png">
<br>
<sub>Fonte: Elaborado pelos autores (2024).
</div>