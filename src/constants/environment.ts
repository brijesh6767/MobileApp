import {ENVIRONMENT} from './appConstants';
export const SELECTED_ENV = ENVIRONMENT.UAT;

export const getBaseUrl = () => {
  switch (SELECTED_ENV) {
    case ENVIRONMENT.UAT:
      return 'ehbfjdjfbjvbvjfbvjf';
    case ENVIRONMENT.PROD:
      return 'ehbfjdjfbjvbvjfbvjf';

    default:
      return '';
  }
};
