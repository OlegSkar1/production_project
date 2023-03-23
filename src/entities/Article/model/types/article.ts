import { User } from 'entities/User';

type BlockType = 'TEXT' | 'CODE' | 'IMAGE';

interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface TextBlock extends BaseBlock {
  type: 'TEXT';
  title?: string;
  paragraph: string[];
}

export interface CodeBlock extends BaseBlock {
  type: 'CODE';
  code: string;
}

export interface ImageBlock extends BaseBlock {
  type: 'IMAGE';
  title?: string;
  src: string;
}

export type ArticleBlock = TextBlock | ImageBlock | CodeBlock;

export type ArticleType = ValueOf<typeof ArticleType>;

export const ArticleType = {
  IT: 'IT',
  SCIENCE: 'SCIENCE',
  ECONOMICS: 'ECONOMICS',
} as const;

export type ArticleView = ValueOf<typeof ArticleView>;

export const ArticleView = {
  LIST: 'LIST',
  GRID: 'GRID',
} as const;

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  createdAt: string;
  views: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
