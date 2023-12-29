import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './AddCommentForm.module.scss';
import {memo, useCallback} from 'react';
import {Input} from "shared/ui/Input/Input";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
    getAddCommentFormError,
    getAddCommentFormText
} from "../../model/selectors/addCommentFormSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "../../model/slices/addCommentFormSlice";
import {DinamicModuleLoader, ReducersList} from "shared/lib/components/DinamicModuleLoader/DinamicModuleLoader";

interface AddCommentFormProps {
    className?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    return (
        <DinamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите комментарий')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('Отправить')}
                </Button>
            </div>
        </DinamicModuleLoader>
    );
});

export default AddCommentForm;