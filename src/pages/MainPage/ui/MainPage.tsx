import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <div>sdfsfsfsf</div>
            <HStack>
                <div>ssdfsf</div>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '124' },
                        { value: '2', content: 'fgh', disabled: true },
                        { value: '3', content: 'asdx' },
                    ]}
                />
            </HStack>
            <div>ssdfsf</div>
            <div>ssdfsf</div>
            <div>ssdfsf</div>
        </Page>
    );
};

export default MainPage;
