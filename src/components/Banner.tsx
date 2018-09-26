import classnames from 'classnames';
import * as styles from '../styles.css';
import * as React from 'react';

export { BannerTitle, IBannerTitleProps } from './BannerTitle';

export interface IBannerProps {
  className?: string;
  src: any;
}

export class Banner extends React.Component<IBannerProps> {
  render(): JSX.Element {
    return (
      <div
        className={classnames(styles.banner, this.props.className)}
        style={{ backgroundImage: `url(${this.props.src})` }}>
        {this.props.children}
      </div>
    );
  }
}
