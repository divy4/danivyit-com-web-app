import classnames from 'classnames';
import * as styles from '../styles.css';
import * as React from 'react';

export interface IFooterProps {
  className?: string;
}

export class Footer extends React.Component<IFooterProps> {
  render(): JSX.Element {
    return (
      <div className={classnames(styles.footer, this.props.className)}>
        <h4>
          This <a href="https://reactjs.org/">React</a> app is written
          in <a href="https://www.typescriptlang.org/">TypeScript</a>,
          packaged by <a href="https://webpack.js.org/">Webpack</a>,
          and deployed with a <a href="https://www.docker.com/">Docker</a> swarm
          of <a href="https://www.raspberrypi.org/">Raspberry Pi</a>s.
        </h4>
        <h4>
          All images of this website were taken by me,
          with the exceptions of all school and language logos,
          which belong to their respective associations.
        </h4>
      </div>
    );
  }
}
