import React from 'react';
import styled from 'styled-components';

import { TTicker, TUuid } from '@types';
import { AssetIcon, Typography } from '@components';

const SContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 15px 14px 15px;
`;

function AssetDropdownItem({ uuid, ticker, name, onClick }: Props) {
  return (
    <SContainer {...(onClick ? { onPointerDown: onClick } : null)}>
      <AssetIcon uuid={uuid} size={'1.5rem'} />
      <Typography bold={true} value={ticker} style={{ marginLeft: '10px' }} />
      {name && <span>&nbsp; - &nbsp;</span>}
      <Typography value={name} />
    </SContainer>
  );
}

export interface Props {
  uuid: TUuid;
  ticker: TTicker;
  name?: string;
  onClick?(): void;
}

export default AssetDropdownItem;
