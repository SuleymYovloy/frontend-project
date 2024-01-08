import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(
    () => import('./LoginForm'),
);

//    "build:prod": "webpack  --env mode=production apiUrl=https://production-project-server-jd6li1vv7-suleyms-projects.vercel.app"
