import { StateSchema } from '@/app/providers/StoreProvider';

export const getText = (state: StateSchema) => state.addCommentForm?.text ?? '';
