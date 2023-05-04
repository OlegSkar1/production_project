## Entity Rating

Сущность рейтинга, которая содержит оценку и опционально отзыв.

---

- types  
  `Rating` - Тип сущности

```typescript
interface Rating {
  rate: number;
  feedback?: string;
}
```

- components  
  `RatingCard` - Карточка рейтинга
