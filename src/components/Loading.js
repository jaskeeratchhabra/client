import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color={'#123abc'} loading={true} css={override} size={150} />
    </div>
  );
}

export default Loading;
