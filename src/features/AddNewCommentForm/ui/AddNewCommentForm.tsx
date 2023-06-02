import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getText } from '../model/selectors/getText/getText';
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice';

import SendIcon from '@/shared/assets/icons/Send.svg';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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

  const content = (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <>
          {error && (
            <TextDeprecated theme='error' align='center' text={t('Failed to post comment', { ns: 'translation' })} />
          )}
          <HStack
            gap='16'
            className={classNames(cls.addNewCommentForm, [className], {})}
            data-testid='AddNewCommentForm'
          >
            <InputDeprecated
              label={t('Enter comment text')}
              variant='clear'
              value={text}
              onChange={onChange}
              data-testid='AddNewCommentForm.Input'
            />
            <ButtonDeprecated variant='outlined' onClick={onSendHandler} data-testid='AddNewCommentForm.Button'>
              {t('Send')}
            </ButtonDeprecated>
          </HStack>
        </>
      }
      on={
        <>
          {error && <Text theme='error' align='center' text={t('Failed to post comment', { ns: 'translation' })} />}
          <HStack max gap='16' className={className} data-testid='AddNewCommentForm'>
            <Input
              placeholder={t('addComment')}
              value={text}
              onChange={onChange}
              addonLeft={<Icon Svg={SearchIcon} />}
              data-testid='AddNewCommentForm.Input'
            />
            <Icon Svg={SendIcon} clickable onClick={onSendHandler} data-testid='AddNewCommentForm.Button'>
              {t('Send')}
            </Icon>
          </HStack>
        </>
      }
    />
  );

  return <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>;
};

export default memo(AddNewCommentForm);
