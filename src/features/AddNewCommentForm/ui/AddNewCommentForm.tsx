import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getText } from '../model/selectors/getText/getText';
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, HStack, Input, Text } from '@/shared/ui';

import cls from './AddNewCommentForm.module.scss';

interface AddNewCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
  error?: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentReducer,
};

const AddNewCommentForm: FC<AddNewCommentFormProps> = (props) => {
  const { className, onSendComment, error } = props;
  const { t } = useTranslation();

  const text = useSelector(getText);

  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (value: string) => {
      dispatch(addCommentActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    dispatch(addCommentActions.setText(''));
    onSendComment(text);
  }, [dispatch, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {error && <Text theme='error' align='center' text={t('Failed to post comment', { ns: 'translation' })} />}
      <HStack gap='16' className={classNames(cls.addNewCommentForm, [className], {})}>
        <Input label={t('Enter comment text')} variant='clear' value={text} onChange={onChange} />
        <Button variant='outlined' onClick={onSendHandler}>
          {t('Send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default memo(AddNewCommentForm);
