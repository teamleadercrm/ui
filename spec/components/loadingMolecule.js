import React from 'react';
import { LoadingMolecule } from '../../components';
import theme from './loadingMolecule.css';

class LoadingMoleculeTest extends React.Component {

  render () {
    return (
      <section>
        <h2>Loading Molecules</h2>

        <div className={theme['loading-molecule-row']}>
          <div className={theme['loading-molecule-container']}>
            <h4>Normal</h4>
            <LoadingMolecule
              basePath={window.location.pathname + window.location.search}
            />
          </div>
          <div className={theme['loading-molecule-container']}>
            <h4>Small</h4>
            <LoadingMolecule
              basePath={window.location.pathname + window.location.search}
              type="small"
            />
          </div>
          <div className={theme['loading-molecule-container']}>
            <h4>Large</h4>
            <LoadingMolecule
              basePath={window.location.pathname + window.location.search}
              type="large"
            />
          </div>
        </div>

        <div className={theme['loading-molecule-row']}>
          <div className={theme['loading-molecule-container']}>
            <h4>Normal</h4>
            <LoadingMolecule
              basePath={window.location.pathname + window.location.search}
              startColor="#00ACA9"
              stopColor="#1F7F79"
            />
          </div>
          <div className={theme['loading-molecule-container']}>
            <h4>Small</h4>
            <LoadingMolecule
              basePath={window.location.pathname + window.location.search}
              startColor="#00ACA9"
              stopColor="#1F7F79"
              type="small"
            />
          </div>
          <div className={theme['loading-molecule-container']}>
            <h4>Large</h4>
            <LoadingMolecule
              basePath={window.location.pathname + window.location.search}
              startColor="#00ACA9"
              stopColor="#1F7F79"
              type="large"
            />
          </div>
        </div>

        <hr />

      </section>
    );
  }
}

export default LoadingMoleculeTest;
