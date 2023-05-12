import { SortType, ArticleType } from '../../../src/entities/Article';
import { OrderType } from '../../../src/shared/types/sort';

type ValueOf<T> = T[keyof T];

interface AddSortProps {
  sort?: ValueOf<typeof SortType>;
  order?: OrderType;
  search?: string;
  tabValue?: ValueOf<typeof ArticleType>;
}

export const addSort = ({ sort, order, search, tabValue }: AddSortProps) => {
  sort && cy.getByTestId('ArticlesPageSort.sort').select(sort);
  order && cy.getByTestId('ArticlesPageSort.order').select(order);
  search && cy.getByTestId('ArticlesPageSearch').type(search);
  tabValue && cy.getByTestId(`Tab-${tabValue}`).click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addSort({ sort, order, search, tabValue }: AddSortProps): Chainable<void>;
    }
  }
}
