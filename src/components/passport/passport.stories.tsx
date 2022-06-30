import React, { useState } from 'react';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import { IconBuildingSmallOutline, IconPhoneSmallOutline, IconMailSmallOutline } from '@teamleader/ui-icons';
import { Badge, Box, EmptyPassport, Passport } from '../../index';
import contactAvatar from '../../static/avatars/2.png';
import companyAvatar from '../../static/avatars/3.png';
import emptyAvatar from '../../static/avatars/4.png';

const contactLineItems = [
  {
    children: 'Dunder Miflin',
    icon: <IconBuildingSmallOutline />,
    href: '/companies.php?id=2',
    title: 'Dunder Miflin',
  },
  {
    children: '+1 257 689 5454',
    icon: <IconPhoneSmallOutline />,
    onClick: () => console.log('Clicked on telephone number'),
    title: 'Dial +1 257 689 5454',
  },
  {
    children: 'david.brent@dundermiflin.com',
    icon: <IconMailSmallOutline />,
  },
];

const companyLineItems = [
  {
    children: '+1 257 689 5454',
    icon: <IconPhoneSmallOutline />,
    onClick: () => console.log('Clicked on telephone number'),
    title: 'Dial +1 257 689 5454',
  },
  {
    children: 'david.brent@dundermiflin.com',
    icon: <IconMailSmallOutline />,
    href: 'mailto:david.brent@dundermiflin.com',
    title: 'Mail to david.brent@dundermiflin.com',
  },
];

export default {
  component: Passport,
  title: addStoryInGroup(COMPOSITIONS, 'Passport'),

  parameters: {
    info: {
      propTablesExclude: [Badge, Box],
    },
  },
};

const usePassportState = () => {
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(undefined);

  const handleSetActiveClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActive(true);
  };

  const handleSetInactiveClick = () => {
    setActive(false);
  };

  return [{ active, anchorEl }, handleSetActiveClick, handleSetInactiveClick];
};

export const contact = () => {
  const [{ active, anchorEl }, handleButtonClick, handleCloseClick] = usePassportState();

  return (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        David Brent
      </Badge>
      <Passport
        active={active}
        anchorEl={anchorEl}
        description="Regional manager"
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        avatar={{ imageUrl: contactAvatar, fullName: 'David Brent' }}
        lineItems={contactLineItems}
        title={{ children: 'David Brent', href: 'https://www.teamleader.eu' }}
      />
    </Box>
  );
};

export const company = () => {
  const [{ active, anchorEl }, handleButtonClick, handleCloseClick] = usePassportState();

  return (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        Dunder Miflin
      </Badge>
      <Passport
        active={active}
        anchorEl={anchorEl}
        description={['1725 Slough Avenue', 'Sranton, PA 18540', 'United Kingdom']}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        avatar={{ imageUrl: companyAvatar, shape: 'rounded', fullName: 'Dunder Miflin' }}
        lineItems={companyLineItems}
        title="Dunder Miflin"
      />
    </Box>
  );
};

export const empty = () => {
  const [{ active, anchorEl }, handleButtonClick, handleCloseClick] = usePassportState();

  return (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        No information
      </Badge>
      <EmptyPassport
        active={active}
        anchorEl={anchorEl}
        link={{ children: 'Start now', href: 'https://www.teamleader.eu' }}
        description="It looks like you haven't added any contact information yet."
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        avatar={{ imageUrl: emptyAvatar, fullName: 'No Information' }}
        title="No information to show"
      />
    </Box>
  );
};
