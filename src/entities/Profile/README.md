## Entity Profile

Сущность описывает данные пользователя, выбранную валюту, страну, город, аватар и т.д

---

- types  
   `Profile` - Тип описывающий сущность профиля

```typescript
interface Profile {
  first?: string;
  lastname?: string;
  age?: string;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
  id?: string;
}
```

- components  
  `ProfileCard` - карточка профиля, в которой можно просматривать и редактировать информацию о пользователе.
