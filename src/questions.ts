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
        maxWidth: '30%',
        answer: 'Bidoof',
    },
    {
        id: 11,
        type: 'short-answer',
        mainText: 'Pointy-headed gen 1-er',
        img: require('./assets/pokemon/charmeleon.png'),
        maxWidth: '30%',
        answer: 'Charmeleon',
    },
    {
        id: 12,
        type: 'short-answer',
        mainText: 'A very normal dragon',
        img: require('./assets/pokemon/drampa.png'),
        maxWidth: '30%',
        answer: 'Drampa',
    },
    {
        id: 13,
        type: 'short-answer',
        mainText: 'A regligious experience?',
        img: require('./assets/pokemon/arceus.png'),
        maxWidth: '30%',
        answer: 'Arceus',
    },
    {
        id: 14,
        type: 'short-answer',
        mainText: 'Satoshi Tajiri\'s favorite',
        img: require('./assets/pokemon/poliwag.png'),
        maxWidth: '30%',
        answer: 'Poliwag',
    },
    {
        id: 15,
        type: 'short-answer',
        mainText: 'Who gave that dog a knife!?',
        img: require('./assets/pokemon/zacian.png'),
        maxWidth: '30%',
        answer: 'Zacian',
    },
    {
        id: 16,
        type: 'short-answer',
        mainText: 'An actual bag of trash',
        img: require('./assets/pokemon/trubbish.png'),
        maxWidth: '30%',
        answer: 'Trubbish',
    },
    {
        id: 17,
        type: 'short-answer',
        mainText: 'Not a Digimon',
        img: require('./assets/pokemon/mewtwo.png'),
        maxWidth: '30%',
        answer: 'Mewtwo',
    },
    {
        id: 20,
        type: 'short-answer',
        mainText: 'Simón\'s Gran Adventure',
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
            "Béchamel",
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
        mainText: 'In which winter sport are the terms “stale fish” and “mule kick” used?',
        answer: "Snowboarding",
    },
    {
        id: 44,
        type: 'short-answer',
        mainText: 'What is the oldest NFL franchise in continuous operation with the same name in the same location?',
        answer: "Green Bay Packers",
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
        mainText: 'This game, pictured here, had players use a dial to navigate their ship and battle aliens',
        answer: 'Tempest',
        img: require('./assets/retro-games/tempest.jpeg'),
    },
    {
        id: 54,
        type: 'short-answer',
        mainText: 'Players controlled "Bub" or "Bob", two kids turned into Dragons, in which 1986 arcade game? ',
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
        name: 'Who\'s that Pokémon?',
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
        questions: [40, 41, 42, 43, 44],
    },
    {
        id: 6,
        name: 'Retro Gaming',
        questions: [50, 51, 52, 53, 54, 55, 56],
    },
    {
        id: 7,
        name: 'Biology',
        questions: [],
    },
    {
        id: 8,
        name: '80\'s Movies',
        questions: [],
    },
    {
        id: 9,
        name: 'Name that Cartoon',
        questions: [],
    },
    {
        id: 10,
        name: 'Art History',
        questions: [],
    },
    {

        id: 11,
        name: 'Bountiful Botany',
        questions: [],
    },
    {
        id: 12,
        name: 'Merry Maritime',
        questions: [],
    }
]

export { questions, rounds };