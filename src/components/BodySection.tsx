import * as styles from '../styles.css';
import { Banner, BannerTitle } from './Banner';
import * as React from 'react';

export interface IBodySectionProps {
  bannerImg: any;
  text: string;
  title: string;
}

export class BodySection extends React.Component<IBodySectionProps> {
  render(): JSX.Element {
    const {bannerImg, text, title} = this.props;
    return (
      <div>
        <Banner src={bannerImg}>
          <BannerTitle>
            {title}
          </BannerTitle>
        </Banner>
        <div>
          <h4 className={styles.bodyText}>
            {text}
          </h4>
        </div>
      </div>
    )
  }
}