import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import cls from './LoginForm.module.scss';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, Input, Text } from 'shared/ui';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
  const { className, onSuccess } = props;
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const { t } = useTranslation();

  const loginHandler = useCallback(
    (val: string) => {
      dispatch(loginActions.setUsername(val));
    },
    [dispatch]
  );
  const passwordHandler = useCallback(
    (val: string) => {
      dispatch(loginActions.setPassword(val));
    },
    [dispatch]
  );

  const onButtonClick = useCallback(async () => {
    if (__PROJECT__ !== 'storybook') {
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, [className], {})}>
        <Text title={t('authorization form')} className={cls.formTitle} />
        {error && (
          <Text text={t('You entered an incorrect username or password')} theme='error' className={cls.formError} />
        )}
        <Input onChange={loginHandler} value={username} type='text' label={t('Enter login')} autoFocus />
        <Input onChange={passwordHandler} value={password} type='password' label={t('Enter password')} />
        <Button
          disabled={isLoading}
          variant='outlined'
          onClick={onButtonClick}
          className={classNames(cls.loginBtn, [], { [cls.loading]: isLoading })}
        >
          {t('Sign in')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
