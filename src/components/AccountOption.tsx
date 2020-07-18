import React from 'react';
import { OptionComponentProps } from 'react-select';

import { AccountSummary, Divider } from '@components';

class AccountOption extends React.PureComponent<OptionComponentProps> {
  public render() {
    const { option, onSelect } = this.props;
    return (
      <>
        <AccountSummary
          address={option.address}
          balance={option.balance}
          uuid={option.assetUUID}
          ticker={option.assetTicker}
          label={option.label}
          onClick={() => onSelect!(option, null)} // Since it's a custom Dropdown we know onSelect is defined
        />
        <Divider padding={'14px'} />
      </>
    );
  }
}

/* @todo: React Select doesn't seem to like these memoized components as optionComponents, figure out a solution to this. */
/*const MemoizedAccountOption = React.memo(AccountOption);
export default MemoizedAccountOption;*/

export default AccountOption;
