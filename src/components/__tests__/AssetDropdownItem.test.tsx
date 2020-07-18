import React from 'react';

import { simpleRender, fireEvent } from 'test-utils';
import { TTicker, TUuid } from '@types';
import AssetDropdownItem, { Props } from '../AssetDropdownItem';
import { ETHUUID } from '@utils';

const defaultProps: Props = {
  ticker: 'ETH' as TTicker,
  name: 'Ether',
  uuid: ETHUUID as TUuid,
  onClick: jest.fn()
};

function getComponent({ ticker, uuid, name, onClick }: Props) {
  return simpleRender(
    <AssetDropdownItem ticker={ticker} uuid={uuid} name={name} onClick={onClick} />
  );
}

describe('AssetDropdownItem', () => {
  test('it renders the asset icon', async () => {
    const { getByRole } = getComponent(defaultProps);
    expect(getByRole('img').getAttribute('src')).toContain('test-file-stub');
  });

  test('it displays the asset symbol and name', async () => {
    const { getByText } = getComponent(defaultProps);
    expect(getByText(defaultProps.ticker)).toBeDefined();
    expect(getByText(defaultProps.name!)).toBeDefined();
  });

  test('it triggers handler on click', async () => {
    const { container } = getComponent(defaultProps);
    const component = container.querySelector('div[class^="AssetDropdownItem__SContainer"]');
    fireEvent.pointerDown(component!);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
