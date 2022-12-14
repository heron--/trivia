export type Question = {
    id: number;
    type: 'multiple-choice' | 'short-answer';
    mainText: string;
    choices?: string[];
    img?: string,
    answerImg?: string,
    maxWidth?: string,
    answer: string | number;
}

export type Round = {
    id: number;
    name: string,
    questions: number[];
}

const questions: Question[] = [
    {
        id: 1,
        type: 'short-answer',
        mainText: '"Late Night", the late-night talk show, has had 4 hosts.<br /><strong>Conan O\'Brien</strong> left as host in 2009. <strong>Seth Meyers</strong> started hosting in 2014. <strong>Who hosted in-between?</strong>',
        answerImg: require('./assets/famous-people/jimmy-fallon.jpeg'),
        answer: 'Jimmy Fallon',
    },
    {
        id: 2,
        type: 'short-answer',
        mainText: 'Remember in 1996 when we cloned a sheep? That was weird. What was that sheep\'s name?',
        answerImg: require('./assets/famous-people/dolly.jpeg'),
        answer: 'Dolly',
    },
    {
        id: 3,
        type: 'short-answer',
        mainText: '??',
        answer: 'Guy Fieri',
        img: require('./assets/famous-people/guy-fieri-question.png'),
        answerImg: require('./assets/famous-people/guy-fieri-answer.png')
    },
    {
        id: 4,
        type: 'short-answer',
        mainText: 'Instrumental in beginning the Iraq War, this person served as Secretary of Defense for both Gerald Ford and George W Bush',
        answerImg: require('./assets/famous-people/rumsfeld.jpeg'),
        answer: 'Donald Rumsfeld',
    },
    {
        id: 5,
        type: 'short-answer',
        mainText: 'Her songs include "Cover Girl" and "Supermodel". Before you "sashay away", tell me the mononymic name of this entertainer',
        answerImg: require('./assets/famous-people/rupaul.webp'),
        answer: 'RuPaul',
    },
    {
        id: 6,
        type: 'short-answer',
        mainText: 'It\'s common knowledge that Karl Marx wrote "The Communist Manifesto". Who was the co-author?',
        answerImg: require('./assets/famous-people/communist-manifesto.jpeg'),
        answer: 'Friedrich Engels',
    },
    {
        id: 7,
        type: 'short-answer',
        mainText: 'Rear Admiral ______ ______',
        img: require('./assets/famous-people/grace-hopper.jpg'),
        answer: 'Rear Admiral Grace Hopper',
    },
    {
        id: 10,
        type: 'short-answer',
        mainText: 'A nice little floof',
        img: require('./assets/pokemon/bidoof.png'),
        answer: 'Bidoof',
    },
    {
        id: 11,
        type: 'short-answer',
        mainText: 'Pointy-headed gen 1-er',
        img: require('./assets/pokemon/charmeleon.png'),
        answer: 'Charmeleon',
    },
    {
        id: 12,
        type: 'short-answer',
        mainText: 'A very normal dragon',
        img: require('./assets/pokemon/drampa.png'),
        answer: 'Drampa',
    },
    {
        id: 13,
        type: 'short-answer',
        mainText: 'A religious experience?',
        img: require('./assets/pokemon/arceus.png'),
        answer: 'Arceus',
    },
    {
        id: 14,
        type: 'short-answer',
        mainText: 'Satoshi Tajiri\'s favorite',
        img: require('./assets/pokemon/poliwag.png'),
        answer: 'Poliwag',
    },
    {
        id: 15,
        type: 'short-answer',
        mainText: 'Who gave that dog a knife!?',
        img: require('./assets/pokemon/zacian.png'),
        answer: 'Zacian',
    },
    {
        id: 16,
        type: 'short-answer',
        mainText: 'An actual bag of trash',
        img: require('./assets/pokemon/trubbish.png'),
        answer: 'Trubbish',
    },
    {
        id: 17,
        type: 'short-answer',
        mainText: 'Not a Digimon',
        img: require('./assets/pokemon/mewtwo.png'),
        answer: 'Mewtwo (armored)',
    },
    {
        id: 20,
        type: 'short-answer',
        mainText: 'Sim??n\'s Gran Adventure',
        img: require('./assets/flags/colombia.png'),
        answer: 'Colombia',
    },
    {
        id: 21,
        type: 'short-answer',
        mainText: 'Head west of Mumbai and you\'ll get there',
        img: require('./assets/flags/oman.jpeg'),
        answer: 'Oman',
    },
    {
        id: 22,
        type: 'short-answer',
        mainText: 'Our engineers write Java so I would hope they get this',
        img: require('./assets/flags/indonesia.jpeg'),
        answer: 'Indonesia',
    },
    {
        id: 23,
        type: 'short-answer',
        mainText: 'Different from the last one, I swear.',
        img: require('./assets/flags/poland.png'),
        answer: 'Poland',
    },
    {
        id: 24,
        type: 'short-answer',
        mainText: 'Yes, it\'s a pride flag, but which one?',
        img: require('./assets/flags/asexual.png'),
        answer: 'Asexual Pride',
    },
    {
        id: 25,
        type: 'short-answer',
        mainText: 'Such a nice design',
        img: require('./assets/flags/hong-kong.png'),
        answer: 'Hong Kong',
    },
    {
        id: 26,
        type: 'short-answer',
        mainText: 'One of the few countries with pink it its flag',
        img: require('./assets/flags/spain.png'),
        answer: 'Spain',
    },
    {
        id: 30,
        type: 'short-answer',
        mainText: 'If a food is halal, it\'s safe to eat under which religion\'s customs?',
        answer: 'Islam',
    },
    {
        id: 31,
        type: 'short-answer',
        mainText: 'Sweet potatoes come from Central and South America. The most common varieties of yams come from what continent?',
        answer: 'Africa',
    },
    {
        id: 32,
        type: 'short-answer',
        mainText: 'You\'ll swear it\'s just as good as chicken. What is the name of a popular meat-substitute made from the gluten dervied from wheat flour',
        answer: 'Seitan',
    },
    {
        id: 33,
        type: 'short-answer',
        mainText: 'What French Canadian dish consists of french fries, cheese curds, and brown gravy?',
        answer: 'Poutine',
    },
    {
        id: 34,
        type: 'short-answer',
        mainText: 'French cuisine has "Mirepoix". Cajun food has the "Holy Trinity". What vegetables are considered the "Holy Trinity" in Cajun cuisine?',
        answerImg: require('./assets/food/holy-trinity.jpeg'),
        answer: 'Onions, celery, and bell pepper',
    },
    {
        id: 35,
        type: 'multiple-choice',
        mainText: 'Which one of these is <strong>not</strong> considered a "mother sauce"',
        answer: 2,
        choices: [
            "B??chamel",
            "Tomato",
            "Bernaise",
            "Hollandaise",
            "Espagnole",
        ],
    },
    {
        id: 36,
        type: 'short-answer',
        mainText: 'Incredibly populary in most European cuisines, which herb\'s name can also be found in the title of a 1968 horror film?',
        answer: 'Rosemary',
    },
    {
        id: 40,
        type: 'short-answer',
        mainText: 'As of 2022 who has won more "Grand Slams" in Tennis? Rafael Nadal or Novak Djokovic?',
        img: require('./assets/sports/nadal-djokovic.jpeg'),
        answer: 'Rafael Nadal',
    },
    {
        id: 41,
        type: 'short-answer',
        mainText: 'This logo belongs to which North American soccer team?',
        img: require('./assets/sports/toronto-question.png'),
        answerImg: require('./assets/sports/toronto-answer.png'),
        answer: 'Toronto FC',
    },
    {
        id: 42,
        type: 'multiple-choice',
        mainText: 'How many sports were included in the 2008 Summer Olympics?',
        answer: 2,
        choices: [
            '18',
            '24',
            '28',
            '36',
        ],
    },
    {
        id: 43,
        type: 'short-answer',
        mainText: 'In which winter sport are the terms ???stale fish??? and ???mule kick??? used?',
        answer: "Snowboarding",
        answerImg: require('./assets/sports/stalefish.jpeg'),
    },
    {
        id: 44,
        type: 'short-answer',
        mainText: 'What is the oldest NFL franchise in continuous operation with the same name in the same location?',
        answer: "Green Bay Packers",
        answerImg: require('./assets/sports/greenbay.jpeg'),
    },
    {
        id: 45,
        type: 'short-answer',
        mainText: 'The first overall pick in the 1996 NBA Draft, this famous 76ers player often goes by the nickname "The Answer"',
        answer: 'Allen Iverson',
        answerImg: require('./assets/sports/iverson.webp'),
    },
    {
        id: 50,
        type: 'short-answer',
        mainText: 'In the sequel to Donkey Kong, players take on the role of what titular character?',
        answer: 'Donkey Kong Jr.',
    },
    {
        id: 51,
        type: 'short-answer',
        mainText: 'What was the name for the Nintendo Entertainment System (NES) in Japan?',
        answer: 'Famicom',
    },
    {
        id: 0,
        type: 'short-answer',
        mainText: '',
        answer: '',
        img: require('./assets/sports/toronto-question.png'),
        answerImg: require('./assets/sports/toronto-answer.png'),
        choices: [
            '18',
            '24',
            '28',
            '36',
        ],
    },
    {
        id: 52,
        type: 'short-answer',
        mainText: 'Created by animator Don Bluth, what laserdisc-based arcade game was released in 1983?',
        answer: 'Dragon\'s Lair',
    },
    {
        id: 53,
        type: 'short-answer',
        mainText: 'This vector-based game, pictured here, had players use a dial to navigate their ship and battle aliens',
        answer: 'Tempest',
        img: require('./assets/retro-games/tempest.jpeg'),
    },
    {
        id: 54,
        type: 'short-answer',
        mainText: 'Players controlled "Bub" or "Bob", two kids turned into Dragons/Dinosaurs, in which 1986 arcade game? ',
        answer: 'Bubble Bobble',
        answerImg: require('./assets/retro-games/bubble-bobble.jpeg'),
    },
    {
        id: 55,
        type: 'short-answer',
        mainText: 'Which arcade game (pictured here) had players use a banana as a joystick?',
        answer: 'Monkey Ball',
        img: require('./assets/retro-games/monkey-ball-question.png'),
        answerImg: require('./assets/retro-games/monkey-ball-answer.png'),
    },
    {
        id: 56,
        type: 'multiple-choice',
        mainText: 'In the 1980 arcade game, Pac-Man, you are confronted with 4 brightly-colored, ghostly nemeses. Which of these colors is <strong>not</strong> one of the original 4 colors?',
        answer: 1,
        choices: [
            'Red',
            'Green',
            'Blue',
            'Pink'
        ]
    },
    {
        id: 60,
        type: 'short-answer',
        mainText: 'Mitochondria is the powerhouse of the cell! What chemical do mitochondrion produce?',
        answer: 'Adenosine Triphosphate (ATP)',
        img: require('./assets/biology/mitochondria.jpeg'),
    },
    {
        id: 61,
        type: 'short-answer',
        mainText: 'Which scientist developed the Polio vaccine in 1956?',
        answer: 'Jonas Salk',
    },
    {
        id: 62,
        type: 'short-answer',
        mainText: 'DNA is short for what?',
        answer: 'Deoxyribonucleic Acid',
    },
    {
        id: 63,
        type: 'multiple-choice',
        mainText: 'Which of these is a "cetacean"?',
        answer: 0,
        choices: [
            'Dolphin',
            'Crab',
            'Mollusk',
            'Sea Otter',
        ]
    },
    {
        id: 64,
        type: 'short-answer',
        mainText: 'Mushrooms are such fascinating little eukaryotes. What\'s the name for the study of fungi?',
        answer: 'Mycology',
    },
    {
        id: 65,
        type: 'short-answer',
        mainText: 'Not-eukaryotes, What type of cell does not have a true nucleus?',
        answer: 'Prokaryotic',
    },
    {
        id: 66,
        type: 'short-answer',
        mainText: 'Water bears! That\'s our informal name for what cute little creatures?',
        answer: 'Tardigrades',
        img: require('./assets/biology/tardigrade.jpeg'),
    },
    {
        id: 70,
        type: 'short-answer',
        mainText: '1980<br />Leslie Nielsen<br />"I am serious... and don\'t call me Shirley."',
        answer: 'Airplane!',
        answerImg: require('./assets/80s-movies/airplane.jpeg'),
    },
    {
        id: 71,
        type: 'short-answer',
        mainText: '1989<br />Meg Ryan<br />Billy Crystal<br />"I\'ll have what she\'s having."',
        answer: 'When Harry Met Sally...',
        answerImg: require('./assets/80s-movies/when-harry-met-sally.jpeg'),
    },
    {
        id: 72,
        type: 'short-answer',
        mainText: '1982 to 1993<br />Ted Danson<br />Shelley Long<br />"It\'s a dog-eat-dog world and I\'m wearing Milk Bone underwear."',
        answer: 'Cheers',
        answerImg: require('./assets/80s-movies/cheers.jpeg'),
    },
    {
        id: 73,
        type: 'short-answer',
        mainText: '1983 to 1986<br />War glorification<br />But no one ever dies<br />"Knowing is half the battle."',
        answer: 'G.I. Joe: A Real American Hero',
        answerImg: require('./assets/80s-movies/gi-joe.webp'),
    },
    {
        id: 74,
        type: 'short-answer',
        mainText: '1988<br />Winona Ryder<br />Christian Slater<br />A teen comedy with a surprising amount of murder<br />"If You Were Happy Every Day Of Your Life You Wouldn\'t Be A Human Being. You\'d Be A Game-Show Host."',
        answer: 'Heathers',
        answerImg: require('./assets/80s-movies/heathers.jpeg'),
    },
    {
        id: 75,
        type: 'short-answer',
        mainText: '1989<br />Robin Williams<br />Young men learning to express themselves<br />"No matter what people tell you, words and ideas can change the world."',
        answer: 'Dead Poets Society',
        answerImg: require('./assets/80s-movies/dead-poets-society.jpg'),
    },
    {
        id: 76,
        type: 'short-answer',
        mainText: '1979 to 1988 (still counts)<br />Mrs. Garret<br />Jo, Tootie, Blair, and Natalie<br />"You take the good / you take the bad / you take them both / and there you have"',
        answer: 'The Facts of Life',
        answerImg: require('./assets/80s-movies/facts-of-life.jpeg'),
    },
    {
        id: 80,
        type: 'short-answer',
        mainText: '',
        answer: 'Magic School Bus',
        img: require('./assets/cartoons/magic-school-bus.jpeg'),
    },
    {
        id: 81,
        type: 'short-answer',
        mainText: '',
        answer: 'Animaniacs (or Goodfeathers)',
        img: require('./assets/cartoons/animaniacs.webp'),
    },
    {
        id: 82,
        type: 'short-answer',
        mainText: '',
        answer: 'Ben 10',
        img: require('./assets/cartoons/ben10.jpg'),
    },
    {
        id: 83,
        type: 'short-answer',
        mainText: '',
        answer: 'Big Comfy Couch',
        img: require('./assets/cartoons/big-comfy-couch.webp'),
    },
    {
        id: 84,
        type: 'short-answer',
        mainText: '',
        answer: 'Captain Kangaroo',
        img: require('./assets/cartoons/captain-kangaroo.jpeg'),
    },
    {
        id: 85,
        type: 'short-answer',
        mainText: '',
        answer: 'Doodlebops',
        img: require('./assets/cartoons/doodlebops.jpeg'),
    },
    {
        id: 88,
        type: 'short-answer',
        mainText: 'BONUS: Who is this mouse?',
        answer: 'Topo Gigio',
        img: require('./assets/cartoons/topo-gigio.jpeg'),
    },
    {
        id: 90,
        type: 'short-answer',
        mainText: 'What artist famously opined "In the future, everyone will be world-famous for 15 minutes"?',
        answer: 'Andy Warhol',
        answerImg: require('./assets/art/warhol.webp'),
    },
    {
        id: 91,
        type: 'short-answer',
        mainText: 'In art, what is the term for the area around and between the subjects of an image? Here it\'s used quite excessively.',
        answer: 'Negative Space',
        img: require('./assets/art/negative.gif'),
    },
    {
        id: 92,
        type: 'short-answer',
        mainText: 'What American Abstract Expressionist called his work "motion made visible memories, arrested in space."',
        answer: 'Jackson Pollok',
        answerImg: require('./assets/art/pollock.jpeg'),
    },
    {
        id: 93,
        type: 'short-answer',
        mainText: 'Who painted these cute little water lillies?',
        answer: 'Claude Monet',
        img: require('./assets/art/monet.jpeg'),
    },
    {
        id: 94,
        type: 'short-answer',
        mainText: 'Fr??d??ric Auguste Bartholdi is best known for what sculpture?',
        answer: 'Liberty Enlightening the World. More commonly known as the Statue of Liberty',
        answerImg: require('./assets/art/liberty.jpeg'),
    },
    {
        id: 95,
        type: 'short-answer',
        mainText: 'This boundary-pushing Mexian painter was often controversial. Their uncompromising self-portraits were the focal-point of their work. 55 paintings out of 143 were self-potraits. Their life was immortalized in film in 2002.',
        answer: 'Frida Kahlo',
        answerImg: require('./assets/art/frida.jpeg'),
    },
    {
        id: 96,
        type: 'short-answer',
        mainText: 'What printmaking technique is the process of using strong acid or mordant to cut into the unprotected parts of a metal surface to create a design.',
        answer: 'Etching',
        answerImg: require('./assets/art/etching.jpeg'),
    },
    {
        id: 97,
        type: 'short-answer',
        mainText: 'Who designed the Guggenheim Museum?',
        answer: 'Frank Lloyd Wright',
        img: require('./assets/art/guggenheim.jpeg'),
    }

];

console.log(`Total Questions: ${questions.length}`);

const rounds: Round[] = [
    {
        id: 1,
        name: 'Popular Persons',
        questions: [1, 2, 3, 4, 5, 6, 7],
    },
    {
        id: 2,
        name: 'Who\'s that Pok??mon?',
        questions: [10, 11, 12, 13, 14, 15, 16, 17],
    },
    {
        id: 3,
        name: 'Famous Flags',
        questions: [20, 21, 22, 23, 24, 25, 26],

    },
    {
        id: 4,
        name: 'Food and Cooking',
        questions: [30, 31, 32, 33, 34, 35, 36],

    },
    {
        id: 5,
        name: 'Sports and Leisure',
        questions: [40, 41, 42, 43, 44, 45],
    },
    {
        id: 6,
        name: 'Retro Gaming',
        questions: [50, 51, 52, 53, 54, 55, 56],
    },
    {
        id: 7,
        name: 'Biology',
        questions: [60, 61, 62, 63, 64, 65, 66],
    },
    {
        id: 8,
        name: '80\'s Movies and Television',
        questions: [70, 71, 72, 73, 74, 75, 76],
    },
    {
        id: 9,
        name: 'Name that Kids\' Show',
        questions: [80, 81, 82, 83, 84, 85, 88],
    },
    {
        id: 10,
        name: 'Artsy Art',
        questions: [90, 91, 92, 93, 94, 95, 96, 97],
    },
    // {
    //     id: 11,
    //     name: 'Bountiful Botany',
    //     questions: [],
    // },
    // {
    //     id: 12,
    //     name: 'Merry Maritime',
    //     questions: [],
    // }
]

export { questions, rounds };