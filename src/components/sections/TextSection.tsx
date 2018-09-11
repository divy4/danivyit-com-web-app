import * as styles from '../../styles.css';
import * as React from 'react';

export interface ITextSectionProps {
  className?: string;
  title?: string;
}

export class TextSection extends React.Component<ITextSectionProps> {
  renderTitle(title: string) {
    if (title == undefined) {
      return;
    } else {
      return (
        <h3 className={styles.sectionTitle}>
          {title}
        </h3>
      );
    }
  }

  render(): JSX.Element {
    const { children, className, title } = this.props;
    return (
      <div className={className}>
        {this.renderTitle(title)}
        <h4 className={styles.textSection}>
          {children}
        </h4>
      </div>
    );
  }
}