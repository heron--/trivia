export type Question = {
    id: number;
    type: 'multiple-choice' | 'short-answer';
    mainText: string;
    choices?: string[];
    answer: string | number;
    category: string;
    subCategory: string;
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
        mainText: 'Who is the most?',
        answer: 'It is me!',
        category: 'Pop Culture',
        subCategory: 'Video Games',
    },
    {
        id: 2,
        type: 'multiple-choice',
        mainText: 'Who is the least?',
        answer: 0,
        choices: [
            'You',
            'Me',
            'Thee'
        ],
        category: 'Humanities',
        subCategory: 'History',
    },
    {
        id: 3,
        type: 'multiple-choice',
        mainText: 'Which <em>donkey kong</em> is going to get you? If you ask me it\'s gonna be...',
        answer: 2,
        choices: [
            'Funky',
            'Junk',
            'Dunkey',
            'Lawrence Fishburn',
            'Lawrence Fishburn is helping me test out a really long answer. Basically I want to get some text wrapping'
        ],
        category: 'Humanities',
        subCategory: 'History',
    },
    {
        id: 4,
        type: 'short-answer',
        mainText: 'Which pikachu really gets me going?',
        answer: 'Poliwhirl',
        category: 'Pop Culture',
        subCategory: 'Video Games',
    },
    {
        id: 5,
        type: 'short-answer',
        mainText: 'This is a question with really long text. It\'s meant to help me test text wrapping and general legibility at larger sizes or lower resolutions. I\'m also listening to Tarzan Boy right now. What a great song that is.',
        answer: 'Poliwhirl',
        category: 'Pop Culture',
        subCategory: 'Video Games',
    },
];

const rounds: Round[] = [
    {
        id: 1,
        name: 'First Round',
        questions: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        name: 'Pokémon',
        questions: [4]
    },
    {
        id: 3,
        name: 'Digimon',
        questions: [4]
    },
    {
        id: 4,
        name: 'Super Duper Hard Questions',
        questions: [4]
    },
    {
        id: 4,
        name: 'Four dollars 👀',
        questions: [4]
    }
]

export { questions, rounds };