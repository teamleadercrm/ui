import React, { useState } from 'react';
import { IconChevronRightSmallOutline } from '@teamleader/ui-icons';

import Box from '../../box';
import Link from '../../link';

import theme from './theme.css';

const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

const LinkEntity = ({ entityKey, contentState, children }) => {
  const [showOpenLinkIcon, setShowOpenLinkIcon] = useState();
  const { url } = contentState.getEntity(entityKey).getData();

  const openLink = () => {
    window.open(url, 'blank');
  };

  const toggleShowOpenLinkIcon = () => {
    setShowOpenLinkIcon(!showOpenLinkIcon);
  };

  return (
    <Box display="inline-block" onMouseEnter={toggleShowOpenLinkIcon} onMouseLeave={toggleShowOpenLinkIcon}>
      <Link className={theme['link']} href="" inherit={false} onClick={(event) => event.preventDefault()}>
        {children}
      </Link>
      {showOpenLinkIcon && <IconChevronRightSmallOutline onClick={openLink} className={theme['icon']} />}
    </Box>
  );
};

export default {
  strategy: findLinkEntities,
  component: LinkEntity,
};
