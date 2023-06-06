import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { ArticleEditButton } from '@/features/ArticleEditButton';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  views: number;
  createdAt: string;
}

export const ArticleAdditionalInfo: React.FC<ArticleAdditionalInfoProps> = memo((props) => {
  const { className, author, views, createdAt } = props;

  const { t } = useTranslation();

  return (
    <VStack gap='32' align='start' className={className}>
      <HStack gap='8'>
        <Avatar size={32} src={author.avatar} />
        <Text text={author.username} bold />
        <Text text={createdAt} />
      </HStack>
      <ArticleEditButton />
      <Text text={t('countViews', { count: views })} />
    </VStack>
  );
});
