import * as styles from '../styles.css';
import * as React from 'react';

export interface IFooterProps {
}

export class Footer extends React.Component<IFooterProps> {
  render(): JSX.Element {
    return (
      <div className={styles.footer}>
      </div>
    )
  }
}