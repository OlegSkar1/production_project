import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getText = (state: StateSchema) => state.addCommentForm?.text || '';
