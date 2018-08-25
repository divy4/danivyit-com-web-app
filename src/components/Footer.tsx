import * as styles from '../styles.css';
import * as React from 'react';

export interface IFooterProps {
}

export class Footer extends React.Component<IFooterProps> {
  render(): JSX.Element {
    return (
      <div className={styles.footer}>
        <h4>
          This React app is written in typescript, packaged by webpack, and deployed with a Docker swarm of Raspberry Pis.
        </h4>
      </div>
    )
  }
}