import {PureComponent} from 'react';

interface IProps {
  gen?: any;
  onUpdate?: () => void
}

export class EventHorizon extends PureComponent<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return this.props.gen !== nextProps.gen;
  }

  componentDidUpdate() {
    this.props.onUpdate && this.props.onUpdate();
  }

  render() {
    return this.props.children;
  }
}