import classnames from 'classnames';
import * as styles from '../styles.css';
import * as React from 'react';

export interface IBannerTitleProps {
  children: string;
  className?: string;
}

export class BannerTitle extends React.Component<IBannerTitleProps> {
  render(): JSX.Element {
    return (
      <h1 className={classnames(styles.bannerTitle, this.props.className)}>
        {this.props.children}
      </h1>
    );
  }
}
