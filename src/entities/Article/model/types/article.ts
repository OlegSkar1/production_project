type BlockType = 'TEXT' | 'CODE' | 'IMAGE';

interface BaseBlock {
  id: string;
  type: BlockType;
}

interface TextBlock extends BaseBlock {
  type: 'TEXT';
  title?: string;
  paragraph: string[];
}

interface CodeBlock extends BaseBlock {
  type: 'CODE';
  code: string;
}

interface ImageBlock extends BaseBlock {
  type: 'IMAGE';
  title: string;
  src: string;
}

type ArticleBlock = TextBlock | ImageBlock | CodeBlock;

type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

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
