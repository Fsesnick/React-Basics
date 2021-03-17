const planets = [
  {
    id: '1',
    name: 'Mercury',
    diameter: '3,031.67 mi',
    moons: 'none',
    desc: 'Mercúrio é o planeta mais próximo do sol. Devido à sua proximidade, não é facilmente visto, exceto durante o crepúsculo. Para cada duas órbitas do Sol, Mercúrio completa três rotações em torno de seu eixo. Até 1965, pensava-se que o mesmo lado de Mercúrio tinha constantemente o Sol.',
    url: 'img/mercury.jpg' 
  },
  {
    id: '2',
    name: 'Venus',
    diameter: '7,521 mi',
    moons: 'none',
    desc: 'Vênus é o segundo planeta do Sol e é o segundo objeto mais brilhante no céu noturno depois da lua. Vênus é o segundo maior planeta terrestre e às vezes é referido como o planeta irmão da Terra devido ao seu tamanho e massa semelhantes.',
    url: 'img/venus.jpg' 
  },
  {
    id: '3',
    name: 'Earth',
    diameter: '7,917.5 mi',
    moons: '1',
    desc: 'A Terra é o terceiro planeta do Sol e é o maior dos planetas terrestres. A Terra é o único planeta em nosso sistema solar que não recebeu o nome de uma divindade grega ou romana. A Terra foi formada há aproximadamente 4,54 bilhões de anos e é o único planeta conhecido que sustenta vida.',
    url: 'img/earth.jpg' 
  },
  {
    id: '4',
    name: 'Mars',
    diameter: '4,212 mi',
    moons: '2',
    desc: 'O quarto planeta do Sol e o segundo menor planeta do sistema solar. Marte é frequentemente descrito como o "Planeta Vermelho" devido à sua aparência avermelhada. É um planeta com uma fina atmosfera composta principalmente de dióxido de carbono.',
    url: 'img/mars.jpg'
  },
  {
    id: '5',
    name: 'Jupiter',
    diameter: '86,881.4 mi',
    moons: '79',
    desc: 'O planeta Júpiter é o quinto planeta a partir do Sol e é duas vezes e meia mais massivo do que todos os outros planetas do sistema solar juntos. É feito principalmente de gases e, portanto, é conhecido como um "gigante gasoso".',
    url: 'img/jupiter.jpg' 
  },
  {
    id: '6',
    name: 'Saturn',
    diameter: '72,367.4 mi',
    moons: '62',
    desc: 'Saturno é o sexto planeta a partir do Sol e o mais distante que pode ser visto a olho nu. Saturno é o segundo maior planeta e é mais conhecido por seu fabuloso sistema de anéis, observado pela primeira vez em 1610 pelo astrônomo Galileo Galilei.',
    url: 'img/saturn.jpg'
  },
  {
    id: '7',
    name: 'Uranus',
    diameter: '31,518 mi',
    moons: '27',
    desc: 'Urano é o sétimo planeta do Sol. Embora seja visível a olho nu, não foi reconhecido como um planeta devido à sua obscuridade e órbita lenta. Urano se tornou o primeiro planeta descoberto com o uso de um telescópio.',
    url: 'img/uranus.jpg' 
  },
  {
    id: '8',
    name: 'Neptune',
    diameter: '30,599 mi',
    moons: '14',
    desc: 'Netuno é o oitavo planeta do Sol, tornando-o o mais distante do sistema solar. Este planeta gigante gasoso pode ter se formado muito mais perto do Sol no início da história do sistema solar antes de migrar para sua posição atual.',
    url: 'img/neptune.jpg' 
  },
];

// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================
// 1: Crie um componente 'Planet' que renderiza um planet card


// 2: Crie um componente container que itera sobre o array de planetas
// e renderiza um componente 'Planet' para cada objeto na array


// 3: Renderizar o componente container para o DOM
