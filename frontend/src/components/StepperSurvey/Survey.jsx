import React from 'react';

import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import 'survey-core/defaultV2.css';
import { quiz } from './surveyJSON';

StylesManager.applyTheme('defaultV2');

export const SurveyComponent = () => {
    const survey = new Model(quiz);

    survey.onComplete.add(function (sender) {
        console.log(sender.data);
    });

    return <Survey model={survey} />;
};
