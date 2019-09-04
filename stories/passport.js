import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { IconBuildingSmallOutline, IconPhoneSmallOutline, IconMailSmallOutline } from '@teamleader/ui-icons';
import { Badge, Box, EmptyPassport, Passport } from '../src';
import contactAvatar from './static/avatars/2.png';
import companyAvatar from './static/avatars/3.png';
import emptyAvatar from './static/avatars/4.png';

const store = new Store({
  active: false,
});

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

const handleButtonClick = event => {
  store.set({ anchorEl: event.currentTarget, active: true });
};

const handleCloseClick = () => {
  store.set({ active: false });
};

storiesOf('Passport', module)
  .addParameters({
    info: {
      propTablesExclude: [Badge, State, Box],
    },
  })
  .add('Contact', () => (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        David Brent
      </Badge>
      <State store={store}>
        <Passport
          active={false}
          description="Regional manager"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          avatar={{ imageUrl: contactAvatar, fullName: 'David Brent' }}
          lineItems={contactLineItems}
          title={{ children: 'David Brent', href: 'https://www.teamleader.eu' }}
        />
      </State>
    </Box>
  ))
  .add('Company', () => (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        Dunder Miflin
      </Badge>
      <State store={store}>
        <Passport
          active={false}
          description={['1725 Slough Avenue', 'Sranton, PA 18540', 'United Kingdom']}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          avatar={{ imageUrl: companyAvatar, shape: 'rounded', fullName: 'Dunder Miflin' }}
          lineItems={companyLineItems}
          title="Dunder Miflin"
        />
      </State>
    </Box>
  ))
  .add('Empty', () => (
    <Box display="flex" justifyContent="center">
      <Badge onClick={handleButtonClick} icon={<IconBuildingSmallOutline />} inherit={false}>
        No information
      </Badge>
      <State store={store}>
        <EmptyPassport
          active={false}
          link={{ children: 'Start now', href: 'https://www.teamleader.eu' }}
          description="It looks like you haven't added any contact information yet."
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          avatar={{ imageUrl: emptyAvatar, fullName: 'No Information' }}
          title="No information to show"
        />
      </State>
    </Box>
  ));
