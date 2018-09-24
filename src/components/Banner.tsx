import * as styles from '../styles.css';
import * as React from 'react';

export { BannerTitle, IBannerTitleProps } from './BannerTitle';

export interface IBannerProps {
  src: any;
}

export class Banner extends React.Component<IBannerProps> {
  render(): JSX.Element {
    return (
      <div className={styles.banner} style={{ backgroundImage: `url(${this.props.src})` }}>
        {this.props.children}
      </div>
    );
  }
}
