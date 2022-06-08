export const quiz = {
    surveyId: 2,
    surveyName: 'Work Experience',
    elements: [
        {
            name: '1',
            type: 'dropdown',
            title: 'What type of organization do you work in?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'Academic (college or university)'
                },
                {
                    value: 2,
                    text: 'Industry - research and development'
                },
                {
                    value: 3,
                    text: 'Industry - production and quality control'
                },
                {
                    value: 4,
                    text: 'Government '
                },
                {
                    value: 5,
                    text: 'Self-employed consulting/fee for service'
                },
                {
                    value: 6,
                    text: 'Other'
                }
            ]
        },
        {
            name: '2',
            type: 'dropdown',
            title: 'Which of degrees did you earn and what year did you earn them in (fill all that apply)',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'AA - year'
                },
                {
                    value: 2,
                    text: 'Baccalaureate - year'
                },
                {
                    value: 3,
                    text: 'Masters of Science'
                },
                {
                    value: 4,
                    text: 'Ph. D'
                },
                {
                    value: 5,
                    text: 'JD'
                },
                {
                    value: 6,
                    text: 'MD'
                },
                {
                    value: 7,
                    text: 'MBA'
                },
                {
                    value: 8,
                    text: 'not applicable '
                }
            ]
        },
        {
            name: '3',
            type: 'dropdown',
            title: 'In which year did you work at the position for which you are answering the survey?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'valid year'
                },
                {
                    value: 1,
                    text: 'Prefer not to answer'
                }
            ]
        },
        {
            name: '4',
            type: 'dropdown',
            title: 'How do you spend your time in this job (fieldwork)?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: '0-100%'
                }
            ]
        },
        {
            name: '5',
            type: 'dropdown',
            title: 'How do you spend your time in this job (lab work)?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: '0-100%'
                }
            ]
        },
        {
            name: '6',
            type: 'dropdown',
            title: 'How do you spend your time in this job (computer work)?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: '0-100%'
                }
            ]
        },
        {
            name: '7',
            type: 'matrix',
            title: 'The job allows me to make my own decisions about how to schedule my work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '8',
            type: 'matrix',
            title: 'The job allows me to decide on the order in which things are done.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '9',
            type: 'matrix',
            title: 'The job allows me to plan how I do my work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '10',
            type: 'matrix',
            title: 'The job gives me a chance to use my personal initiative or judgment in carrying out the work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '11',
            type: 'matrix',
            title: 'The job allows me to make a lot of decisions on my own.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '12',
            type: 'matrix',
            title: 'The job provides me with significant autonomy in making decisions.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '13',
            type: 'matrix',
            title: 'The job allows me to make decisions about what methods I use to complete my work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '14',
            type: 'matrix',
            title: 'The job gives me considerable opportunity for independence and freedom in how I do the work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '15',
            type: 'matrix',
            title: 'The job allows me to decide on my own how to go about doing my work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '16',
            type: 'matrix',
            title: 'The job involves a great deal of task variety.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '17',
            type: 'matrix',
            title: 'The job involves doing a number of different things.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '18',
            type: 'matrix',
            title: 'The job requires the performance of a wide range of tasks.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '19',
            type: 'matrix',
            title: 'The job involves performing a variety of tasks.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '20',
            type: 'matrix',
            title: 'The results of my work are likely to significantly affect the lives of other people.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '21',
            type: 'matrix',
            title: 'The job itself is very significant and important in the broader scheme of things.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '22',
            type: 'matrix',
            title: 'The job has a large impact on people outside the organization.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '23',
            type: 'matrix',
            title: 'The work performed on the job has a significant impact on people outside the organization.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '24',
            type: 'matrix',
            title: 'The job involves completing a piece of work that has an obvious beginning and end.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '25',
            type: 'matrix',
            title: 'The job is arranged so that I can do an entire piece of work from beginning to end.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '26',
            type: 'matrix',
            title: 'The job provides me the chance to completely finish the pieces of work I begin.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '27',
            type: 'matrix',
            title: 'The job allows me to complete work I start.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '28',
            type: 'matrix',
            title: 'The work activities themselves provide direct and clear information about the effectiveness (e.g., quality and quantity) of my performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '29',
            type: 'matrix',
            title: 'The job itself provides feedback on my performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '30',
            type: 'matrix',
            title: 'The job itself provides me with information about my performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '31',
            type: 'matrix',
            title: 'The job requires that I only do one task or activity at a time.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '32',
            type: 'matrix',
            title: 'The tasks of the job are simple and uncomplicated.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '33',
            type: 'matrix',
            title: 'The job comprises relatively uncomplicated tasks.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '34',
            type: 'matrix',
            title: 'The job involves performing relatively simple tasks.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '35',
            type: 'matrix',
            title: 'The job requires me to monitor a great deal of information.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '36',
            type: 'matrix',
            title: 'The job requires that I engage in a large amount of thinking.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '37',
            type: 'matrix',
            title: 'The job requires me to keep track of more than one thing at a time.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '38',
            type: 'matrix',
            title: 'The job requires me to analyze a lot of information.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '39',
            type: 'matrix',
            title: 'The job involves solving problems that have no obvious correct answer.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '40',
            type: 'matrix',
            title: 'The job requires me to be creative.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '41',
            type: 'matrix',
            title: 'The job often involves dealing with problems that I have not met before.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '42',
            type: 'matrix',
            title: 'The job requires unique ideas or solutions to problems.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '43',
            type: 'matrix',
            title: 'The job requires a variety of skills.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '44',
            type: 'matrix',
            title: 'The job requires me to utilize a variety of different skills in order to complete the work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '45',
            type: 'matrix',
            title: 'The job requires me to use a number of complex or high-level skills.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '46',
            type: 'matrix',
            title: 'The job requires the use of a number of skills.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '47',
            type: 'matrix',
            title: 'The job is highly specialized in terms of purpose, tasks, or activities.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '48',
            type: 'matrix',
            title: 'The tools, procedures, materials, and so forth used in this job are highly specialized in terms of purpose.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '49',
            type: 'matrix',
            title: 'The job requires very specialized knowledge and skills.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '50',
            type: 'matrix',
            title: 'The job requires a depth of knowledge and expertise.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '51',
            type: 'matrix',
            title: 'I have the opportunity to develop close friendships in this job.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '52',
            type: 'matrix',
            title: 'I have the chance in this job to get to know other people.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '53',
            type: 'matrix',
            title: 'I have the opportunity to meet with others in this job.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '54',
            type: 'matrix',
            title: 'My supervisor is concerned about the welfare of the people that work for him/her/them.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '55',
            type: 'matrix',
            title: 'People I work with take a personal interest in me.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '56',
            type: 'matrix',
            title: 'People I work with are friendly.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '57',
            type: 'matrix',
            title: 'The job requires me to accomplish my work before others complete their job.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '58',
            type: 'matrix',
            title: 'Other jobs depend directly on my job.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '59',
            type: 'matrix',
            title: 'Unless my job gets done, other jobs cannot be completed.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '60',
            type: 'matrix',
            title: 'The job activities are greatly affected by the work of other people.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '61',
            type: 'matrix',
            title: 'The job depends on the work of many different people for its completion.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '62',
            type: 'matrix',
            title: 'My job cannot be done unless others do their work.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '63',
            type: 'matrix',
            title: 'The job requires spending a great deal of time with people outside my organization.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '64',
            type: 'matrix',
            title: 'The job involves interaction with people who are not members of my organization.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '65',
            type: 'matrix',
            title: 'On the job, I frequently communicate with people who do not work for the same organization as I do.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '66',
            type: 'matrix',
            title: 'The job involves a great deal of interaction with people outside my organization.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '67',
            type: 'matrix',
            title: 'I receive a great deal of information from my manager and coworkers about my job performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '68',
            type: 'matrix',
            title: 'Other people in the organization, such as managers and coworkers, provide information about the effectiveness (e.g., quality and quantity) of my job performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '69',
            type: 'matrix',
            title: 'I receive feedback on my performance from other people in my organization (such as my manager or coworkers ).',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '70',
            type: 'matrix',
            title: 'I receive a great deal of information from my manager about my job performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '71',
            type: 'matrix',
            title: 'My manager provides information about the effectiveness (e.g., quality and quantity) of my job performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '72',
            type: 'matrix',
            title: 'I receive feedback on my performance from my manager.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '73',
            type: 'matrix',
            title: 'I receive a great deal of information from my coworkers about my job performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '74',
            type: 'matrix',
            title: 'Other in the organization provide information about the effectiveness (e.g., quality and quantity) of my job performance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '75',
            type: 'matrix',
            title: 'I receive feedback on my performance from other people in my organizaiton.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '76',
            type: 'matrix',
            title: 'The seating arrangements on the job are adequate (e.g., ample opportunities to sit, comfortable chairs, good postural support).',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '77',
            type: 'matrix',
            title: 'The work place allows for all size differences between people in terms of clearance, reach, eye height, legroom, etc.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '78',
            type: 'matrix',
            title: 'The job involves excessive reaching.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '79',
            type: 'matrix',
            title: 'The job requires a great deal of muscular endurance.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '80',
            type: 'matrix',
            title: 'The job requires a great deal of muscular strength.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '81',
            type: 'matrix',
            title: 'The job requires a lot of physical effort.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '82',
            type: 'matrix',
            title: 'The work place is free from excessive noise.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '83',
            type: 'matrix',
            title: 'The climate at the work place is comfortable in terms of temperature and humidity.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '84',
            type: 'matrix',
            title: 'The job has a low risk of accident.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '85',
            type: 'matrix',
            title: 'The job takes place in an environment free from health hazards (e.g., chemicals, fumes, etc.).',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '86',
            type: 'matrix',
            title: 'The job occurs in a clean environment.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '87',
            type: 'matrix',
            title: 'The job involves the use of a variety of different equipment.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '88',
            type: 'matrix',
            title: 'The job involves the use of complex equipment or technology.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        },
        {
            name: '89',
            type: 'matrix',
            title: 'A lot of time was required to learn the equipment used on the job.',
            isRequired: true,
            columns: [
                {
                    value: 0,
                    text: 'Prefer not to answer'
                },
                {
                    value: 1,
                    text: 'strongly disagree'
                },
                {
                    value: 2,
                    text: 'disagree'
                },
                {
                    value: 3,
                    text: 'somewhat disagree'
                },
                {
                    value: 4,
                    text: 'neither agree nor disagree'
                },
                {
                    value: 5,
                    text: 'somewhat agree'
                },
                {
                    value: 6,
                    text: 'agree'
                },
                {
                    value: 7,
                    text: 'strongly agree'
                }
            ],
            rows: [
                {
                    value: '',
                    text: ''
                }
            ]
        }
    ]
};
