import React, { PureComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import PropsType from 'props-type';

import { Box } from '../../index';

const props = {
  /** The content to display inside the dialog. */
  children: PropTypes.any,
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable: PropTypes.bool,
};

type Props = Partial<PropsType<typeof props>>;
class Body extends PureComponent<Props & { forwardedRef: React.Ref<any> }> {
  render() {
    const { scrollable, children, forwardedRef, ...rest } = this.props;

    if (!scrollable) {
      return children;
    }

    return (
      <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={forwardedRef}>
        {children}
      </Box>
    );
  }
}

export default forwardRef<any, Props>((props, ref) => <Body {...props} forwardedRef={ref} />);
