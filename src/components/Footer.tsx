import * as styles from '../styles.css';
import * as React from 'react';

export interface IFooterProps {
}

export class Footer extends React.Component<IFooterProps> {
  render(): JSX.Element {
    return (
      <div className={styles.footer}>
        <h4>
          This <a href="https://reactjs.org/">React</a> app is written
          in <a href="https://www.typescriptlang.org/">TypeScript</a>,
          packaged by <a href="https://webpack.js.org/">Webpack</a>,
          and deployed with a <a href="https://www.docker.com/">Docker</a> swarm
          of <a href="https://www.raspberrypi.org/">Raspberry Pi</a>s.
        </h4>
      </div>
    )
  }
}