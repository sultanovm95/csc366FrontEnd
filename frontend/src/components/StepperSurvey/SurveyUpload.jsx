import { Survey } from 'survey-react-ui';
import { StylesManager, Model } from 'survey-core';

var json = {
    elements: [
        {
            type: 'file',
            title: 'Please upload your photo',
            name: 'image',
            storeDataAsText: false,
            showPreview: true,
            imageWidth: 150,
            maxSize: 150
        }
    ]
};

export const SurveyUploader = () => {
    const survey = new Model(json);
    survey.onComplete.add(function (sender) {
        document.querySelector('#surveyResult').textContent =
            'Result JSON:\n' + JSON.stringify(sender.data, null, 3);
    });
    // You can store file id as a content property of a file question value
    // In this case you should handle both `onUploadFiles` and `onDownloadFile` events

    survey.onUploadFiles.add(function (survey, options) {});

    return <Survey model={survey} />;
};
