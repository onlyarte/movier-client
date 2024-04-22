'use server';

import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

import { UpdateListDocument, UpdateListInput } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';

export async function updateList(listId: string, input: UpdateListInput) {
  await apolloClient.mutate({
    mutation: UpdateListDocument,
    variables: { id: listId, input },
    context: {
      headers: {
        cookie: headers().get('cookie'),
      },
    },
  });

  revalidatePath(`/list/${listId}`);
}
