import {PureComponent} from 'react';

interface IProps {
  gen?: any
}

export class EventHorizon extends PureComponent<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return this.props.gen !== nextProps.gen;
  }

  render() {
    return this.props.children;
  }
}