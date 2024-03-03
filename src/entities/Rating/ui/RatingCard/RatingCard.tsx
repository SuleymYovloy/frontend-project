import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard: React.FC<RatingCardProps> = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();

    const [isOpenFeedback, setIsOpenFeedback] = React.useState(false);
    const [starsCount, setStarsCount] = React.useState(rate);
    const [feedback, setFeedback] = React.useState('');

    const onSelectStarts = React.useCallback((selectStartCount: number) => {
        setStarsCount(selectStartCount);
        if (hasFeedback) {
            setIsOpenFeedback(true);
        } else {
            onAccept?.(selectStartCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = React.useCallback(() => {
        setIsOpenFeedback(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = React.useCallback(() => {
        setIsOpenFeedback(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const Card = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => CardRedesigned,
        off: () => CardDeprecated,
    });

    const contentFeedback = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        placeholder={t('your-feedback')}
                        onChange={setFeedback}
                        value={feedback}
                        data-testid="rating-card-input"
                    />
                </>
            )}
            on={(
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        placeholder={t('your-feedback')}
                        onChange={setFeedback}
                        value={feedback}
                        data-testid="rating-card-input"
                    />
                </>
            )}
        />
    );

    return (
        <Card
            data-testid="RatingCard"
            className={classNames(cls.RatingCard, {}, [className])}
            padding="24"
            isMax
            borderRadius="round"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <VStackDeprecated align="center" gap={16}>
                        <TextDeprecated title={title} />
                        <StarRatingDeprecated size={50} onSelect={onSelectStarts} selectedStars={starsCount} />
                    </VStackDeprecated>
                )}
                on={(
                    <VStack align="center" gap={16}>
                        <Text title={title} />
                        <StarRating size={50} onSelect={onSelectStarts} selectedStars={starsCount} />
                    </VStack>
                )}
            />

            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={(
                        <ModalDeprecated isOpen={isOpenFeedback}>
                            <VStackDeprecated gap={16}>
                                {contentFeedback}
                                <HStackDeprecated gap={16} justify="end">
                                    <ButtonDeprecated
                                        onClick={acceptHandler}
                                        theme={ThemeButton.BACKGROUND_INVERTED}
                                        className={cls.sendBtn}
                                        data-testid="rating-card-send"
                                    >
                                        {t('send-rating')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        onClick={cancelHandler}
                                        theme={ThemeButton.OUTLINE}
                                        data-testid="rating-card-close"
                                    >
                                        {t('close-rating-modal')}
                                    </ButtonDeprecated>
                                </HStackDeprecated>
                            </VStackDeprecated>
                        </ModalDeprecated>
                    )}
                    on={(
                        <Modal isOpen={isOpenFeedback}>
                            <VStack gap={16}>
                                {contentFeedback}
                                <HStack gap={16} justify="end">
                                    <Button
                                        onClick={acceptHandler}
                                        className={cls.sendBtn}
                                        data-testid="rating-card-send"
                                    >
                                        {t('send-rating')}
                                    </Button>
                                    <Button
                                        onClick={cancelHandler}
                                        data-testid="rating-card-close"
                                    >
                                        {t('close-rating-modal')}
                                    </Button>
                                </HStack>
                            </VStack>
                        </Modal>
                    )}
                />
            </BrowserView>

            <MobileView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={(
                        <DrawerDeprecated isOpen={isOpenFeedback} onClose={cancelHandler}>
                            <VStackDeprecated gap={16}>
                                {contentFeedback}
                                <ButtonDeprecated
                                    onClick={acceptHandler}
                                    theme={ThemeButton.OUTLINE}
                                    fullWidth
                                >
                                    {t('send-rating')}
                                </ButtonDeprecated>
                            </VStackDeprecated>
                        </DrawerDeprecated>
                    )}
                    on={(
                        <Drawer isOpen={isOpenFeedback} onClose={cancelHandler}>
                            <VStack gap={16}>
                                {contentFeedback}
                                <Button
                                    onClick={acceptHandler}
                                    size="l"
                                    fullWidth
                                >
                                    {t('send-rating')}
                                </Button>
                            </VStack>
                        </Drawer>
                    )}
                />
            </MobileView>
        </Card>
    );
});
