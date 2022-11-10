import { IconExternalLinkSmallOutline } from '@teamleader/ui-icons';
import React, { ReactNode, useState } from 'react';
import { ContentBlock, ContentState } from 'react-draft-wysiwyg';

import Box from '../../box';
import Link from '../../link';

import { GenericComponent } from '../../../@types/types';
import theme from './theme.css';

const findLinkEntities = (contentBlock: ContentBlock, callback: () => void, contentState: ContentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

interface LinkEntityProps {
  children: ReactNode;
  entityKey: string;
  contentState: ContentState;
}

const LinkEntity: GenericComponent<LinkEntityProps> = ({ entityKey, contentState, children }) => {
  const [showOpenLinkIcon, setShowOpenLinkIcon] = useState(false);
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
      <Link className={theme['link']} inherit={false} onClick={(event: MouseEvent) => event.preventDefault()}>
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
