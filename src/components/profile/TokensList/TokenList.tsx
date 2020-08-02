import Card from 'components/shared/Card';
import { AuthContext } from 'contexts/auth';
import useHttp from 'hooks/http';
import React, { useContext } from 'react';
import { useStore } from 'store/useStore';
import styled from 'styled-components';
import { button, card, successColor } from 'styles';

const TokenListDiv = styled.div`
${card}
width: 35%
`;

const RevokeButton = styled.div`
${button}
`;

const RevokeAllButton = styled.div`
${button}
margin: 20px auto 15px auto
`;

const TokenListTitle = styled.p`
  font-size: 2em;
  text-align: center;
  font-weight: bold
`;

const TokenTitle = styled.p`
font-size: 1.4em;
text-align: center;
${({ active }) => active && `
    color: ${successColor};
  `}
`;

const TokenDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center
`;

export default function TokenList() {

  const { logOut, authToken } = useContext(AuthContext);
  const { sendRequest } = useHttp();
  const [ { userData }, dispatch ] = useStore();

  const revokeToken = (tokenToRevoke: string, registeredAuthToken: string) => {

    logOut({
      tokenToRevoke,
      authToken: registeredAuthToken
    });

    dispatch('UPDATE_USER_DATA', { tokens: userData.tokens.filter((token) => token.token !== tokenToRevoke) });

  };

  return (
    <Card
      title="Where you are connected:"
      style={{
        width: '35%'
      }}
    >
      {userData.tokens.map((token) => (
        <TokenDiv key={token.token}>
          <TokenTitle
            active={token.token === authToken.token}
          >
            {token.device || 'unknown'}

          </TokenTitle>
          <RevokeButton
            type="button"
            onClick={() => revokeToken(token.token, authToken.token)}
          >
            Logout
          </RevokeButton>
        </TokenDiv>
      ))}
      <RevokeAllButton onClick={() => sendRequest({
        url: 'logoutAll', method: 'POST'
      })}
      >
        Logout All
      </RevokeAllButton>
    </Card>
  );

}
