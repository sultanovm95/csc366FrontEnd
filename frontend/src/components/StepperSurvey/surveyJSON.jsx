export const quiz = {
    surveyId: 1,
    surveyName: 'URE Experience',
    elements: [
        {
            name: '1',
            type: 'dropdown',
            title: 'What is the primary discipline of your research?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'prefer not to say'
                },
                {
                    value: 1,
                    text: 'Agriculture'
                },
                {
                    value: 10,
                    text: 'anatomy and physiology '
                },
                {
                    value: 11,
                    text: 'biochemistry'
                },
                {
                    value: 12,
                    text: 'general biology'
                },
                {
                    value: 13,
                    text: 'botany'
                },
                {
                    value: 14,
                    text: 'ecology'
                },
                {
                    value: 15,
                    text: 'evolution'
                },
                {
                    value: 16,
                    text: 'genetics '
                },
                {
                    value: 17,
                    text: 'zoology'
                },
                {
                    value: 18,
                    text: 'Marine science'
                },
                {
                    value: 19,
                    text: 'Mathematics'
                },
                {
                    value: 2,
                    text: 'Bioinformatics and/or computational biology'
                },
                {
                    value: 20,
                    text: 'Neuroscience'
                },
                {
                    value: 21,
                    text: 'Physical Sciences:'
                },
                {
                    value: 22,
                    text: 'Astronomy'
                },
                {
                    value: 23,
                    text: 'Chemistry '
                },
                {
                    value: 24,
                    text: 'Physics'
                },
                {
                    value: 25,
                    text: 'Geology'
                },
                {
                    value: 26,
                    text: 'Soil science'
                },
                {
                    value: 27,
                    text: 'Statistics and/or Data Science'
                },
                {
                    value: 28,
                    text: 'Other'
                },
                {
                    value: 3,
                    text: 'Discipline-based education research (DBER)'
                },
                {
                    value: 4,
                    text: 'Engineering'
                },
                {
                    value: 5,
                    text: 'Computer science and computer engineering'
                },
                {
                    value: 6,
                    text: 'Engineering - Biomedical'
                },
                {
                    value: 7,
                    text: 'Engineering (other)'
                },
                {
                    value: 8,
                    text: 'Environmental science'
                },
                {
                    value: 9,
                    text: 'Kinesiology'
                }
            ]
        },
        {
            name: '2',
            type: 'dropdown',
            title: 'How many undergraduate students, including yourself, are/were in your research group at the time of your participation?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'prefer not to say'
                },
                {
                    value: 1,
                    text: '1 student'
                },
                {
                    value: 2,
                    text: '2-4 students'
                },
                {
                    value: 3,
                    text: '5-8 students'
                },
                {
                    value: 4,
                    text: '9-12 students'
                },
                {
                    value: 5,
                    text: 'more than 12 students'
                }
            ]
        },
        {
            name: '3',
            type: 'dropdown',
            title: 'How many people in total were in your research group?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'prefer not to say'
                },
                {
                    value: 1,
                    text: '2 '
                },
                {
                    value: 2,
                    text: '3-5 '
                },
                {
                    value: 3,
                    text: '6-9'
                },
                {
                    value: 4,
                    text: '10-13'
                },
                {
                    value: 5,
                    text: 'More than 13'
                }
            ]
        },
        {
            name: '4',
            type: 'dropdown',
            title: 'Who was primarily responsible for mentoring and expert advice related to your research?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'prefer not to say'
                },
                {
                    value: 1,
                    text: 'Faculty member'
                },
                {
                    value: 2,
                    text: 'Postdoctoral researcher'
                },
                {
                    value: 3,
                    text: 'Graduate student, technician, or staff scientist'
                },
                {
                    value: 4,
                    text: 'Other'
                }
            ]
        },
        {
            name: '5',
            type: 'dropdown',
            title: 'What was the primary setting for your research?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'prefer not to say'
                },
                {
                    value: 1,
                    text: 'Laboratory research'
                },
                {
                    value: 2,
                    text: 'Field research'
                },
                {
                    value: 3,
                    text: 'Computer-based research'
                }
            ]
        },
        {
            name: '6',
            type: 'dropdown',
            title: 'Approximately how was your research time distributed between settings?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to say'
                },
                {
                    value: 1,
                    text: '0 hours a week'
                },
                {
                    value: 2,
                    text: '1 - 5 hours a week'
                },
                {
                    value: 3,
                    text: '6 - 10 hours a week'
                },
                {
                    value: 4,
                    text: '11 - 15 hours a week'
                },
                {
                    value: 5,
                    text: '16 - 20 hours a week'
                },
                {
                    value: 6,
                    text: '21 - 25 hours a week'
                },
                {
                    value: 7,
                    text: '26 - 30 hours a week'
                },
                {
                    value: 8,
                    text: 'more than 30 hours a week'
                }
            ]
        },
        {
            name: '7',
            type: 'dropdown',
            title: 'How many hours per week did you work on research-related activities in your most recent research experience?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to say'
                },
                {
                    value: 1,
                    text: '0 hours a week'
                },
                {
                    value: 2,
                    text: '1 - 5 hours a week'
                },
                {
                    value: 3,
                    text: '6 - 10 hours a week'
                },
                {
                    value: 4,
                    text: '11 - 15 hours a week'
                },
                {
                    value: 5,
                    text: '16 - 20 hours a week'
                },
                {
                    value: 6,
                    text: '21 - 25 hours a week'
                },
                {
                    value: 7,
                    text: '26 - 30 hours a week'
                },
                {
                    value: 8,
                    text: 'more than 30 hours a week'
                }
            ]
        },
        {
            name: '8',
            type: 'dropdown',
            title: 'During the same time period, how many hours per week did you devote to extracurricular activities (such as clubs, volunteering, sports, music or theater, other hobbies)?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to say'
                },
                {
                    value: 1,
                    text: '0 hours a week'
                },
                {
                    value: 2,
                    text: '1 - 5 hours a week'
                },
                {
                    value: 3,
                    text: '6 - 10 hours a week'
                },
                {
                    value: 4,
                    text: '11 - 15 hours a week'
                },
                {
                    value: 5,
                    text: '16 - 20 hours a week'
                },
                {
                    value: 6,
                    text: '21 - 25 hours a week'
                },
                {
                    value: 7,
                    text: '26 - 30 hours a week'
                },
                {
                    value: 8,
                    text: 'more than 30 hours a week'
                }
            ]
        },
        {
            name: '9',
            type: 'dropdown',
            title: 'During the same time period, how many hours per week did you work in a paid job unrelated to your research (on campus or off campus).',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to say'
                },
                {
                    value: 1,
                    text: '0 hours a week'
                },
                {
                    value: 2,
                    text: '1 - 5 hours a week'
                },
                {
                    value: 3,
                    text: '6 - 10 hours a week'
                },
                {
                    value: 4,
                    text: '11 - 15 hours a week'
                },
                {
                    value: 5,
                    text: '16 - 20 hours a week'
                },
                {
                    value: 6,
                    text: '21 - 25 hours a week'
                },
                {
                    value: 7,
                    text: '26 - 30 hours a week'
                },
                {
                    value: 8,
                    text: 'more than 30 hours a week'
                }
            ]
        },
        {
            name: '10',
            type: 'dropdown',
            title: 'During the same time period, how many hours per week did you devote to other commitments or obligations that were not listed above? (e.g. caring for family members, unpaid work in a family business).',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to say'
                },
                {
                    value: 1,
                    text: '0 hours a week'
                },
                {
                    value: 2,
                    text: '1 - 5 hours a week'
                },
                {
                    value: 3,
                    text: '6 - 10 hours a week'
                },
                {
                    value: 4,
                    text: '11 - 15 hours a week'
                },
                {
                    value: 5,
                    text: '16 - 20 hours a week'
                },
                {
                    value: 6,
                    text: '21 - 25 hours a week'
                },
                {
                    value: 7,
                    text: '26 - 30 hours a week'
                },
                {
                    value: 8,
                    text: 'more than 30 hours a week'
                }
            ]
        },
        {
            name: '11',
            type: 'dropdown',
            title: ' During the same time period, what was your status in terms of academic courses or units?',
            isRequired: true,
            choices: [
                {
                    value: 0,
                    text: 'Prefer not to say'
                },
                {
                    value: 1,
                    text: '0 hours a week'
                },
                {
                    value: 2,
                    text: '1 - 5 hours a week'
                },
                {
                    value: 3,
                    text: '6 - 10 hours a week'
                },
                {
                    value: 4,
                    text: '11 - 15 hours a week'
                },
                {
                    value: 5,
                    text: '16 - 20 hours a week'
                },
                {
                    value: 6,
                    text: '21 - 25 hours a week'
                },
                {
                    value: 7,
                    text: '26 - 30 hours a week'
                },
                {
                    value: 8,
                    text: 'more than 30 hours a week'
                }
            ]
        },
        {
            name: '12',
            type: 'matrix',
            title: 'The research position allows me to make my own decisions about how to schedule my work.',
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
            title: 'The research position allows me to decide on the order in which things are done.',
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
            title: 'The research position allows me to plan how I do my work.',
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
            title: 'The research position gives me a chance to use my personal initiative or judgment in carrying out the work.',
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
            title: 'The research position allows me to make a lot of decisions on my own.',
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
            title: 'The research position provides me with significant autonomy in making decisions.',
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
            title: 'The research position allows me to make decisions about what methods I use to complete my work.',
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
            title: 'The research position gives me considerable opportunity for independence and freedom in how I do the work.',
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
            title: 'The research position allows me to decide on my own how to go about doing my work.',
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
            title: 'The research position involves a great deal of task variety.',
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
            title: 'The research position involves doing a number of different things.',
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
            title: 'The research position requires the performance of a wide range of tasks.',
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
            title: 'The research position involves performing a variety of tasks.',
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
            name: '26',
            type: 'matrix',
            title: 'The research position itself is very significant and important in the broader scheme of things.',
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
            title: 'The research position has a large impact on people outside the organization.',
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
            title: 'The work performed in the research position has a significant impact on people outside my research group.',
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
            title: 'The research position involves completing a piece of work that has an obvious beginning and end.',
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
            title: 'The research position is arranged so that I can do an entire piece of work from beginning to end.',
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
            title: 'The research position provides me the chance to completely finish the pieces of work I begin.',
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
            title: 'The research position allows me to complete work I start.',
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
            name: '34',
            type: 'matrix',
            title: 'The research position itself provides feedback on my performance.',
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
            title: 'The research position itself provides me with information about my performance.',
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
            title: 'The research position requires that I only do one task or activity at a time.',
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
            title: 'The tasks of the research position are simple and uncomplicated.',
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
            title: 'The research position comprises relatively uncomplicated tasks.',
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
            title: 'The research position involves performing relatively simple tasks.',
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
            title: 'The research position requires me to monitor a great deal of information.',
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
            title: 'The research position requires that I engage in a large amount of thinking.',
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
            title: 'The research position requires me to keep track of more than one thing at a time.',
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
            title: 'The research position requires me to analyze a lot of information.',
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
            title: 'The research position involves solving problems that have no obvious correct answer.',
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
            title: 'The research position requires me to be creative.',
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
            title: 'The research position often involves dealing with problems that I have not met before.',
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
            title: 'The research position requires unique ideas or solutions to problems.',
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
            title: 'The research position requires a variety of skills.',
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
            title: 'The research position requires me to utilize a variety of different skills in order to complete the work.',
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
            title: 'The research position requires me to use a number of complex or high-level skills.',
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
            title: 'The research position requires the use of a number of skills.',
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
            title: 'The research position is highly specialized in terms of purpose, tasks, or activities.',
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
            title: 'The tools, procedures, materials, and so forth used in this research position are highly specialized in terms of purpose.',
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
            title: 'The research position requires very specialized knowledge and skills.',
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
            title: 'The research position requires a depth of knowledge and expertise.',
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
            title: 'I have the opportunity to develop close friendships in this research position.',
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
            title: 'I have the chance in this research position to get to know other people.',
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
            title: 'I have the opportunity to meet with others in this research position.',
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
            title: 'My group leader is concerned about the welfare of the people in the research group.',
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
            name: '61',
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
            name: '62',
            type: 'matrix',
            title: 'The research position requires me to accomplish my work before others complete their work.',
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
            name: '64',
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
            name: '65',
            type: 'matrix',
            title: 'My research activities are greatly affected by the work of other people.',
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
            title: 'The research project depends on the work of many different people for its completion.',
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
            title: 'My work cannot be done unless others do their work.',
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
            title: 'The research position requires spending a great deal of time with people outside my research group.',
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
            title: 'The research position involves interaction with people who are not members of my research group.',
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
            title: 'In this research position, I frequently communicate with people who do not work in the same research group as I do.',
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
            title: 'The research position involves a great deal of interaction with people outside my research group.',
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
            title: 'I receive a great deal of information from my project leader and peers about my work performance.',
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
            title: 'Other people in the research group, such as group leader and peers, provide information about the effectiveness (e.g., quality and quantity) of my work performance.',
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
            title: 'I receive feedback on my performance from other people in my group (such as my project leader or peers).',
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
            title: 'I receive a great deal of information from my group leader about my work performance.',
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
            title: 'My group leader provides information about the effectiveness (e.g., quality and quantity) of my work performance.',
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
            title: 'I receive feedback on my performance from my group leader.',
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
            title: 'I receive a great deal of information from other students in my group about my work performance.',
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
            title: 'Other students in the research group provide information about the effectiveness (e.g., quality and quantity) of my work performance.',
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
            title: 'I receive feedback on my performance from other students in my group.',
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
            title: 'The seating arrangements in my research space are adequate (e.g., ample opportunities to sit, comfortable chairs, good postural support).',
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
            title: 'The research space allows for all size differences between people in terms of clearance, reach, eye height, legroom, etc.',
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
            title: 'The research position involves excessive reaching.',
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
            title: 'The research position requires a great deal of muscular endurance.',
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
            title: 'The research position requires a great deal of muscular strength.',
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
            title: 'The research position requires a lot of physical effort.',
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
            title: 'The research space is free from excessive noise.',
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
            title: 'The climate in the research space is comfortable in terms of temperature and humidity.',
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
            title: 'The research position has a low risk of accident.',
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
            name: '90',
            type: 'matrix',
            title: 'The research position takes place in an environment free from health hazards (e.g., chemicals, fumes, etc.).',
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
            name: '91',
            type: 'matrix',
            title: 'The research position occurs in a clean environment.',
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
            name: '92',
            type: 'matrix',
            title: 'The research position involves the use of a variety of different equipment.',
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
            name: '93',
            type: 'matrix',
            title: 'The research position involves the use of complex equipment or technology.',
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
            name: '94',
            type: 'matrix',
            title: 'A lot of time was required to learn the equipment used in the research position.',
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
