import React, { SyntheticEvent, useState } from 'react';
import { IconBuildingSmallOutline, IconPhoneSmallOutline, IconMailSmallOutline } from '@teamleader/ui-icons';
import { Badge, Box, EmptyPassport, Passport } from '../../index';
import avatars from '../../static/data/avatar';
import { ComponentMeta } from '@storybook/react';
import { PassportProps } from './Passport';

const contactAvatar = avatars[1].image;
const companyAvatar = avatars[2].image;
const emptyAvatar = avatars[3].image;

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
  title: 'Compositions / Passport',

  parameters: {
    info: {
      propTablesExclude: [Badge, Box],
    },
  },
} as ComponentMeta<typeof Passport>;

const usePassportState = () => {
  const [active, setActive] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<Node | undefined>(undefined);

  const handleSetActiveClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
    setActive(true);
  };

  const handleSetInactiveClick = () => {
    setActive(false);
  };

  return { active, anchorEl, handleButtonClick: handleSetActiveClick, handleCloseClick: handleSetInactiveClick };
};

export const Contact = (args: PassportProps) => {
  const { active, anchorEl, handleButtonClick, handleCloseClick } = usePassportState();

  return (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        David Brent
      </Badge>
      <Passport
        {...args}
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

export const Company = (args: PassportProps) => {
  const { active, anchorEl, handleButtonClick, handleCloseClick } = usePassportState();

  return (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        Dunder Miflin
      </Badge>
      <Passport
        {...args}
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

export const Empty = (args: PassportProps) => {
  const { active, anchorEl, handleButtonClick, handleCloseClick } = usePassportState();

  return (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        No information
      </Badge>
      <EmptyPassport
        {...args}
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
