import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import s from './styles.css';
import Section from './Section';

// components
import Button from './components/button';
import Menu from './components/menu';
import Dialog from './components/dialog';
import PopoverVertical from './components/popoverVertical';
import PopoverHorizontal from './components/popoverHorizontal';
import LoadingMolecule from './components/loadingMolecule';
import Toast from './components/toast';

const Root = () => (
  <div className={s.root}>
    <Navigation />
    <Content>
      <h1>Teamleader UI v{__VERSION__}</h1>
      {__DEV__}

      <Section id="buttons">
        <Button />
      </Section>
      <Section id="popovers">
        <PopoverVertical />
      </Section>
      <Section>
        <PopoverHorizontal />
      </Section>
      <Section id="menus">
        <Menu />
      </Section>
      <Section id="dialogs">
        <Dialog />
      </Section>
      <Section id="toasts">
        <Toast />
      </Section>
      <Section id="loading-molecules">
        <LoadingMolecule />
      </Section>
    </Content>
  </div>
);

export default Root;
