import * as React from 'react';

interface IBodyProps {
  tabName: string;
}

export default class Body extends React.Component<IBodyProps> {
  render(): JSX.Element {
    return (
      <div>
        <h1>
          {this.props.tabName}
        </h1>
      </div>
    )
  }
}