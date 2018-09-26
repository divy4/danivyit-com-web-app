import { IContentTab, IContentSection, IContentSubSection } from '../content';
import * as styles from '../styles.css';
import * as React from 'react';
import { Banner, BannerTitle } from './Banner';
import { BulletList } from './sections/BulletList';
import { TextSection } from './sections/TextSection';
import { BodySection } from './BodySection';

export interface IBodyProps {
  className?: string;
  tabContent: IContentTab;
}

export class Body extends React.Component<IBodyProps> {
  renderSubsection = (subsection: IContentSubSection, index: number): JSX.Element => {
    let element: JSX.Element = null;
    if (subsection.type === BulletList) {
      element = (
        <BulletList columnWidth={subsection.columnWidth} title={subsection.title}>
          {subsection.children}
        </BulletList>
      );
    } else if (subsection.type === TextSection) {
      element = (
        <TextSection title={subsection.title}>
          {subsection.children}
        </TextSection>
      );
    } else {
      throw `Invalid subsection type: ${subsection.type}`;
    }
    return (
      <div key={index} style={{ flex: subsection.flex, minWidth: subsection.minWidth }}>
        {element}
      </div>
    );
  }

  renderSection = (section: IContentSection, index: number): JSX.Element => {
    return (
      <BodySection
          className={styles.section}
          bannerImg={section.banner}
          key={index} title={section.bannerTitle}>
        {section.subSections.map(this.renderSubsection)}
      </BodySection>
    );
  }

  render(): JSX.Element {
    const { className, tabContent } = this.props;
    return (
      <div className={className}>
        {tabContent.sections.map(this.renderSection)}
      </div>
    );
  }
}
