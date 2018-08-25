import * as React from 'react';

export interface IBodyProps {
  tabName: string;
}

export class Body extends React.Component<IBodyProps> {
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