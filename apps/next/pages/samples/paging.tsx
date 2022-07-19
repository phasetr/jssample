import {
  Box,
  Button,
  CircularProgress,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import React, {
  FC,
  Suspense,
  useCallback,
  useMemo,
  useState,
  useTransition,
} from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Hr03 } from '@jssamples/ui';

function usePageNumber() {
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  const incrementPage = useCallback(() => {
    startTransition(() => setPage((p) => p + 1));
  }, [startTransition]);
  const decrementPage = useCallback(() => {
    startTransition(() => setPage((p) => Math.max(p - 1, 1)));
  }, [startTransition]);

  return useMemo(
    () => ({
      page,
      isPending,
      incrementPage,
      decrementPage,
    }),
    [page, isPending, incrementPage, decrementPage]
  );
}

type IssueType = {
  id: number;
  title: string;
  html_url: string;
  user: {
    id: number;
    login: string;
    html_url: string;
  };
};

type IssueTypes = {
  type: 'issue-types';
  issues: IssueType[];
};

const Issue: FC<{ issue: IssueType }> = ({ issue }) => {
  return (
    <Stack
      component="article"
      sx={{
        key: issue.id,
        borderRadius: 'md',
        border: '1px solid',
        borderColor: 'whiteAlpha.100',
        paddingY: '4',
        paddingX: '4',
        boxShadow: 'md',
      }}
    >
      <Box component="h2" fontSize="lg">
        <Link href={issue.html_url} rel="noreferrer nofollow">
          {issue.title}
        </Link>
      </Box>
      <Typography color="blackAlpha.600" fontSize="sm">
        opened by{' '}
        <Link href={issue.user.html_url} rel="noreferrer nofollow">
          {issue.user.login}
        </Link>
      </Typography>
    </Stack>
  );
};

type ErrorType = {
  type: 'error-type';
  message: string;
  documentation_url: string;
};

const Issues: FC<{ page: number }> = ({ page }) => {
  const { data: issues } = useSWR(
    ['facebook/react/issues', page],
    () => {
      const url = `https://api.github.com/repos/facebook/react/issues?per_page=10&state=all&page=${page}`;
      return fetch(url).then<IssueTypes | ErrorType>((r) => r.json());
    },
    { suspense: true }
  );
  return (
    <Stack spacing="4">
      {issues && issues.type === 'error-type' ? (
        <></>
      ) : (
        issues?.issues.map((issue: IssueType) => (
          <Issue key={issue.id} issue={issue} />
        ))
      )}
    </Stack>
  );
};

export function Paging() {
  const { page, isPending, incrementPage, decrementPage } = usePageNumber();

  return (
    <>
      <Box component="h1">ページング: useTransition</Box>
      <Box component="div">
        <Link href="/" passHref>
          <MuiLink target="_self" rel="nofollow noreferer">
            Go Home
          </MuiLink>
        </Link>
        {' | '}
        <Link
          href="https://qiita.com/stin_dev/items/74ae0b002bc2f98b71ce"
          passHref
        >
          <MuiLink target="_self" rel="nofollow noreferer">
            Qiitaのオリジナル記事
          </MuiLink>
        </Link>
        {' | '}
        <Link
          href="https://codesandbox.io/s/qiita-react-18-fetch-pagination-api-kp9mdf?file=/src/App.tsx"
          passHref
        >
          <MuiLink target="_self" rel="nofollow noreferer">
            Qiitaのオリジナル記事中にあるcodesandboxへのリンク
          </MuiLink>
        </Link>
      </Box>
      <Hr03 />
      <Box component="div">
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          {isPending && <CircularProgress sx={{ margin: '20px' }} />}
          <Button
            sx={{ margin: '20px' }}
            variant={'contained'}
            onClick={decrementPage}
            disabled={isPending}
          >
            前へ
          </Button>
          <Button
            sx={{ margin: '20px' }}
            variant={'contained'}
            onClick={incrementPage}
            disabled={isPending}
          >
            次へ
          </Button>
        </Box>
        <Box>
          <Suspense
            fallback={
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
              >
                <CircularProgress />
              </Box>
            }
          >
            <Issues page={page} />
          </Suspense>
        </Box>
      </Box>
    </>
  );
}

export default Paging;
