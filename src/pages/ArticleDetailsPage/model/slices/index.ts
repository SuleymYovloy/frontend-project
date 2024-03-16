import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationReducer } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import { ArticlesDetailsPageSchema } from '../types';

export const articleDetailsPageReducer =
    combineReducers<ArticlesDetailsPageSchema>({
        recommendations: articleDetailsPageRecommendationReducer,
        comments: articleDetailsCommentsReducer,
    });
