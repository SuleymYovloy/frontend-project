import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
// import * as trace_events from 'trace_events';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis deleniti dolorum esse fuga fugiat laudantium modi nisi non numquam, pariatur quae saepe soluta suscipit tempora unde, vel vitae voluptatem!\n',
};
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis deleniti dolorum esse fuga fugiat laudantium modi nisi non numquam, pariatur quae saepe soluta suscipit tempora unde, vel vitae voluptatem!\n',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
