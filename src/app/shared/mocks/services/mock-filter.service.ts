import { FilterService } from '@services/filter.service';

export const MockFilterService: Partial<FilterService> = {
  addSortToQuery(typeOfSort): string {
    return typeOfSort;
  },
};
