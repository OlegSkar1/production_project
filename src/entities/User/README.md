## Entity User

### Сущность пользователя

---

- types  
  `Role` - пользователь может иметь одну или несколько из ролей

  > `[ ADMIN, MANAGER ]` - имеют доступ к защищенным маршрутам, к админ панели.  
  > `USER` - не имеет доступа к защищенным маршрутам.

  `User` - Тип пользователя

  ```typescript
  interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: Role[];
  }
  ```

  `UserSchema` - Тип, использующийся в редюсере

```typescript
interface UserSchema {
  authData?: User;
  _inited: boolean;
}
```

- slice  
  `userReducer` - редюсер, необходимый для логики авторизации пользователя

- selectors

> `isAdminRole` - return true если роль Admin  
> `isManagerRole` - return true если роль Manager  
> `getRoles` - Селектор получения ролей пользователя  
> `getUserInited` - проверяет авторизован ли пользователь
> `getUserAuthData` - получает данные пользователя
