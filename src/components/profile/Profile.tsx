import SEO from 'components/layout/Seo';
import useHttp from 'hooks/http';
import React, { ReactElement, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userDataState, userState } from 'store/atoms';
import { PageTitle } from 'styles';
import { UserData } from 'types';
import TokenList from './TokensList/TokenList';

export default function Profile(): ReactElement {

  const [ userData, setUserData ] = useRecoilState(userDataState);
  const [ user ] = useRecoilState(userState);
  const { sendRequest } = useHttp();

  useEffect(() => {

    (async () => {

      if (user) {

        // Query the user
        const query = /* GraphQL */`
        query {
          user(uuid: "${user.uuid}"){
            email
            tokens(orderBy: id) {
              device
              token
            }
          }
        }`;

        const { data: { data: { user: { tokens, email } } } } = await sendRequest<
        {data: {user: UserData}}
        >({
          url: '/graphql', method: 'POST', body: { query }
        });

        setUserData({
          tokens, email
        });

      }

    })();

  }, [ user, sendRequest ]);

  return (
    <>
      <SEO title="Profile" />
      <PageTitle>
        Welcome
        {' '}
        {userData?.email}
      </PageTitle>
      <TokenList />
    </>

  );

}
