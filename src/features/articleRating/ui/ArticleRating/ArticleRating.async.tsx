import { FC, lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingaLazy = lazy(
    () => import('./ArticleRating'),
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
        <ArticleRatingaLazy {...props} />
    </Suspense>
);
