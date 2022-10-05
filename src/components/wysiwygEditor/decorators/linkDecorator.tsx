import React, { useState } from 'react';
import { IconExternalLinkSmallOutline } from '@teamleader/ui-icons';

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
    let prefixedUrl = url;
    if (!url.includes('//')) {
      prefixedUrl = '//' + url;
    }
    window.open(prefixedUrl, '_blank');
  };

  const toggleShowOpenLinkIcon = () => {
    setShowOpenLinkIcon(!showOpenLinkIcon);
  };

  return (
    <Box display="inline-block" onMouseEnter={toggleShowOpenLinkIcon} onMouseLeave={toggleShowOpenLinkIcon}>
      <Link className={theme['link']} inherit={false} onClick={(event) => event.preventDefault()}>
        {children}
      </Link>
      {showOpenLinkIcon && <IconExternalLinkSmallOutline onClick={openLink} className={theme['icon']} />}
    </Box>
  );
};

export default {
  strategy: findLinkEntities,
  component: LinkEntity,
};
