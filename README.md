# Hearthstone

![](./src/assets/hs-logo.png)

# Реализованы следующие требования к функциональности:

## 1 уровень

### React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты.
- Есть рендеринг списков [CardsWrapper](./src/components/CardsWrapper/CardsWrapper.tsx), [FavoriteCards](./src/components/FavoriteCards/FavoriteCards.tsx), [FilterWrapper](./src/components/FilterWrapper/FilterWrapper.tsx), [Pagination](./src/components/Pagination/Pagination.tsx), [Cards](./src/components/Cards/Cards.tsx).
- Реализована хотя бы одна форма [Login](./src/pages/Login/Login.tsx), [Register](./src/pages/Register/Register.tsx).
- Есть применение Контекст API [AuthProvider](./src/providers/AuthProvider.tsx).
- Есть применение предохранителя [ErrorBoundary](./src/components/ErrorBoundary/ErrorBoundary.tsx).
- Есть хотя бы один кастомный хук [useAppDispatch,useAppSelector,useDebounce](./src/hooks/hooks.ts), [useDebounceFunc](./src/app/hooks.ts), [useDebounceValue](./src/app/hooks.ts), [useUserAuth](./src/providers/AuthProvider.tsx).
- Хотя бы несколько компонентов используют PropTypes [Button](./src/components/ui/Button/Button.tsx), [CardImg](./src/components/ui/CardImg/CardImg.tsx)
- Поиск не должен триггерить много запросов к серверу [CardsWrapper](./src/components/CardsWrapper/CardsWrapper.tsx).
- Есть применение lazy + Suspense [App](./src/components/ui/CardImg/CardImg.tsx)

### Redux

- Используем Modern Redux with Redux Toolkit [store](./src/store/store.ts).
- Используем слайсы [favoritesSlice](./src/store/favoritesSlice.ts),
  [historySlice](./src/store/historySlice.ts).
- Есть хотя бы одна кастомная мидлвара [authProtection](./src/store/middleware/authProtection.ts).
- Используется RTK Query [cardsApi](./src/store/cardsApi.ts).
- Используется Transforming Responses [cardsApi](./src/store/cardsApi.ts).

## 2 уровень

- Использование TypeScript.
