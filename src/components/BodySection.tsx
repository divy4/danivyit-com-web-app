import * as styles from '../styles.css';
import { Banner, BannerTitle } from './Banner';
import * as React from 'react';

export interface IBodySectionProps {
  bannerImg: any;
  children?: any;
  title: string;
}

export class BodySection extends React.Component<IBodySectionProps> {
  render(): JSX.Element {
    const {bannerImg, children, title} = this.props;
    return (
      <div>
        <Banner src={bannerImg}>
          <BannerTitle>
            {title}
          </BannerTitle>
        </Banner>
        <div>
          {children}
        </div>
      </div>
    )
  }
}