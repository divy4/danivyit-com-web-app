import * as styles from '../styles.css';
import * as React from 'react';

export interface IBannerTitleProps {
  children: string;
}

export class BannerTitle extends React.Component<IBannerTitleProps> {
  render(): JSX.Element {
    return (
      <h1 className={styles.bannerTitle}>
        {this.props.children}
      </h1>
    );
  }
}
