export type question = {
    id: number;
    type: 'multiple-choice' | 'short-answer';
    mainText: string;
    choices?: string[];
    answer: string;
    category: string;
    subCategory: string;
}

export type round = {
    id: number;
    name: string,
    questions: number[];
}

const questions: question[] = [
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
        answer: 'It is you!',
        choices: [
            'you',
            'me',
            'thee'
        ],
        category: 'Humanities',
        subCategory: 'History',
    },
];

const rounds: round[] = [
    {
        id: 1,
        name: 'First Round',
        questions: [1, 2]
    }
]

export { questions, rounds };