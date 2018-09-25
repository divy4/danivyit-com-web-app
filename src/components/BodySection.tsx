import * as styles from '../styles.css';
import { Banner, BannerTitle } from './Banner';
import * as React from 'react';

export interface IBodySectionProps {
  bannerImg: any;
  children?: any;
  className?: string;
  title: string;
}

export class BodySection extends React.Component<IBodySectionProps> {
  render(): JSX.Element {
    const { bannerImg, children, className, title } = this.props;
    return (
      <div className={className}>
        <Banner src={bannerImg}>
          <BannerTitle>
            {title}
          </BannerTitle>
        </Banner>
        <div className={styles.subsectionContainer}>
          {children}
        </div>
      </div>
    );
  }
}
