export const quiz = {
    completedHtml:
        '<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>',
    completedHtmlOnCondition: [
        {
            expression: '{nps_score} > 8',
            html: '<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>'
        },
        {
            expression: '{nps_score} < 7',
            html: '<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>'
        }
    ],
    pages: [
        {
            name: 'page1',
            elements: [
                {
                    name: '1',
                    type: 'dropdown',
                    title: 'What is the primary discipline of your research?',
                    isRequired: true,
                    choices: [
                        { value: 0, text: 'prefer not to say' },
                        { value: 1, text: 'Agriculture' },
                        { value: 10, text: 'anatomy and physiology\u00a0' },
                        { value: 11, text: 'biochemistry' },
                        { value: 12, text: 'general biology' },
                        { value: 13, text: 'botany' },
                        { value: 14, text: 'ecology' },
                        { value: 15, text: 'evolution' },
                        { value: 16, text: 'genetics\u00a0' },
                        { value: 17, text: 'zoology' },
                        { value: 18, text: 'Marine science' },
                        { value: 19, text: 'Mathematics' },
                        {
                            value: 2,
                            text: 'Bioinformatics and/or computational biology'
                        },
                        { value: 20, text: 'Neuroscience' },
                        { value: 21, text: 'Physical Sciences:' },
                        { value: 22, text: 'Astronomy' },
                        { value: 23, text: 'Chemistry\u00a0' },
                        { value: 24, text: 'Physics' },
                        { value: 25, text: 'Geology' },
                        { value: 26, text: 'Soil science' },
                        { value: 27, text: 'Statistics and/or Data Science' },
                        { value: 28, text: 'Other' },
                        {
                            value: 3,
                            text: 'Discipline-based education research (DBER)'
                        },
                        { value: 4, text: 'Engineering' },
                        {
                            value: 5,
                            text: 'Computer science and computer engineering'
                        },
                        { value: 6, text: 'Engineering - Biomedical' },
                        { value: 7, text: 'Engineering (other)' },
                        { value: 8, text: 'Environmental science' },
                        { value: 9, text: 'Kinesiology' }
                    ]
                },
                {
                    name: '2',
                    type: 'dropdown',
                    title: 'How many undergraduate students, including yourself, are/were in your research group at the time of your participation?',
                    isRequired: true,
                    choices: [
                        { value: 0, text: 'prefer not to say' },
                        { value: 1, text: '1\u00a0student' },
                        { value: 2, text: '2-4 students' },
                        { value: 3, text: '5-8 students' },
                        { value: 4, text: '9-12 students' },
                        { value: 5, text: 'more than 12 students' }
                    ]
                },
                {
                    name: '3',
                    type: 'dropdown',
                    title: 'How many people in total were in your research group?',
                    isRequired: true,
                    choices: [
                        { value: 0, text: 'prefer not to say' },
                        { value: 1, text: '2\u00a0' },
                        { value: 2, text: '3-5\u00a0' },
                        { value: 3, text: '6-9' },
                        { value: 4, text: '10-13' },
                        { value: 5, text: 'More than 13' }
                    ]
                },
                {
                    name: '4',
                    type: 'dropdown',
                    title: 'Who was primarily responsible for mentoring and expert advice related to your research?',
                    isRequired: true,
                    choices: [
                        { value: 0, text: 'prefer not to say' },
                        { value: 1, text: 'Faculty member' },
                        { value: 2, text: 'Postdoctoral researcher' },
                        {
                            value: 3,
                            text: 'Graduate student, technician, or staff scientist'
                        },
                        { value: 4, text: 'Other' }
                    ]
                },
                {
                    name: '5',
                    type: 'dropdown',
                    title: 'What was the primary setting for your research?',
                    isRequired: true,
                    choices: [
                        { value: 0, text: 'prefer not to say' },
                        { value: 1, text: 'Laboratory research' },
                        { value: 2, text: 'Field research' },
                        { value: 3, text: 'Computer-based research' }
                    ]
                },
                {
                    name: '6',
                    type: 'dropdown',
                    title: 'Approximately how was your research time distributed between settings?',
                    isRequired: true,
                    choices: [
                        { value: 0, text: 'Prefer not to say' },
                        { value: 1, text: '0 hours a week' },
                        { value: 2, text: '1 - 5 hours a week' },
                        { value: 3, text: '6 - 10 hours a week' },
                        { value: 4, text: '11 - 15 hours a week' },
                        { value: 5, text: '16 - 20 hours a week' },
                        { value: 6, text: '21 - 25 hours a week' },
                        { value: 7, text: '26 - 30 hours a week' },
                        { value: 8, text: 'more than 30 hours a week' }
                    ]
                },
                {
                    name: '7',
                    type: 'dropdown',
                    title: 'How many hours per week did you work on research-related activities in your most recent research experience?',
                    isRequired: true,
                    choices: [
                        { value: 0, text: 'Prefer not to say' },
                        { value: 1, text: '0 hours a week' },
                        { value: 2, text: '1 - 5 hours a week' },
                        { value: 3, text: '6 - 10 hours a week' },
                        { value: 4, text: '11 - 15 hours a week' },
                        { value: 5, text: '16 - 20 hours a week' },
                        { value: 6, text: '21 - 25 hours a week' },
                        { value: 7, text: '26 - 30 hours a week' },
                        { value: 8, text: 'more than 30 hours a week' }
                    ]
                }
            ]
        }
    ],
    showQuestionNumbers: 'off'
};
