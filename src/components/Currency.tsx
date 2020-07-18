import React from 'react';
import styled from 'styled-components';

import { TSymbol, TTicker, TUuid } from '@types';
import { default as Typography } from './Typography';
import AssetIcon from './AssetIcon';

const SContainer = styled('div')`
  display: inline-flex;
`;

const SAssetIconContainer = styled('span')`
  padding-right: 5px;
`;

interface Props {
  amount: string;
  code: TTicker;
  symbol?: TSymbol;
  uuid?: TUuid;
  decimals?: number;
  icon?: boolean;
  bold?: boolean;
  fontSize?: string;
}

function Currency({
  amount,
  symbol,
  uuid,
  code,
  decimals = 5,
  icon = false,
  bold = false,
  fontSize,
  ...props
}: Props) {
  const format = (value: string, decimalPlaces: number) => {
    return new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
      style: code ? 'currency' : undefined,
      currency: code
    }).format(parseFloat(value));
  };

  return (
    <SContainer {...props}>
      {icon && uuid && (
        <SAssetIconContainer>
          <AssetIcon size={'19px'} uuid={uuid} />
        </SAssetIconContainer>
      )}
      <Typography bold={bold} fontSize={fontSize}>
        {format(amount, decimals)}
        {!symbol && ` ${code}`}
      </Typography>
    </SContainer>
  );
}

export default Currency;
