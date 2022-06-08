import React from 'react';

import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useNavigate } from 'react-router-dom';

import 'survey-core/defaultV2.css';
import { quiz } from './surveyJSON';

import axios from 'axios';
import { getHeader } from '../../utils';

StylesManager.applyTheme('defaultV2');

export const SurveyComponent = () => {
    let navigate = useNavigate();

    const survey = new Model(quiz);
    //var survey = new Model(axios.get("http://localhost:5000/survey?sid=1"), getHeader());

    survey.showProgressBar = 'bottom';
    survey.showNavigationButtons = true;
    survey.goNextPageAutomatic = true;
    survey.showQuestionNumbers = 'on';
    survey.questionsOnPageMode = 'questionPerPage';
    survey.showPreviewBeforeComplete = 'showAllQuestions';

    survey.onComplete.add(function (sender, options) {
        // By default, the 'clear' method clears all data and go to the first page
        // Make a survey to keep the results by passing the first parameter as 'false'
        sender.clear(false);
        // Turn a survey into read-only mode
        sender.mode = 'display';
        console.log(sender.data);
        //axios.post()
        navigate('./jobs', { replace: true });
    });

    return <Survey model={survey} />;
};
