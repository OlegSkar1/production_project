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
  title: string;
  src: string;
}

export type ArticleBlock = TextBlock | ImageBlock | CodeBlock;

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  createdAt: string;
  views: number;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
