import * as ArticlesCommands from './commands/articles';
import * as CommonCommands from './commands/common';
import * as ProfileCommands from './commands/profile';

Cypress.Commands.addAll(CommonCommands);
Cypress.Commands.addAll(ProfileCommands);
Cypress.Commands.addAll(ArticlesCommands);

export {};
