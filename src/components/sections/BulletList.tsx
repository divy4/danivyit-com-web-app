import * as styles from '../../styles.css';
import * as React from 'react';

export interface IBulletListProps {
  className?: string;
  columnWidth: string;
  title?: string;
}

export class BulletList extends React.Component<IBulletListProps> {
  renderBullet(text: string): JSX.Element {
    return (
      <h4>
        {text}
      </h4>
    );
  }

  renderChild = (child: React.ReactNode, index: number): JSX.Element => {
    return (
      <li className={styles.bullet}>
        {this.renderBullet(child.toString())}
      </li>
    );
  }

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
    const { children, className, columnWidth, title } = this.props;
    return (
      <div className={className}>
        {this.renderTitle(title)}
        <ul className={styles.bulletList} style={{gridTemplateColumns: `repeat(auto-fit, ${columnWidth})`}}>
          {React.Children.map(children || null, this.renderChild)}
        </ul>
      </div>
    );
  }
}