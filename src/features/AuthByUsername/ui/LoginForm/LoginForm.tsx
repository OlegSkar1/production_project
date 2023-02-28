import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';

import cls from './LoginForm.module.scss';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, Input, Text } from 'shared/ui';

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
  const { className } = props;
  const dispatch = useDispatch();

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

  const onButtonClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, [className], {})}>
        <Text title={t('authorization form')} className={cls.formTitle} />
        {error && (
          <Text text={t('You entered an incorrect username or password')} theme='error' className={cls.formError} />
        )}
        <Input onChange={loginHandler} value={username} type='text' label={t('Enter login')} autoFocus />
        <Input onChange={passwordHandler} value={password} type='password' label={t('Enter password')} />
        <Button disabled={isLoading} variant='outlined' onClick={onButtonClick} className={cls.loginBtn}>
          {t('Sign in')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
