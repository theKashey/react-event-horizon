import {PureComponent} from 'react';

interface IProps {
  children: React.ReactNode,
  onUpdate?: () => void,
}

interface AnyProp {
  [key: string]: any;
}

const pick = (props: IProps & AnyProp) => {
  const {children, onUpdate, ...rest} = props;
  return rest;
};

export class EventHorizon extends PureComponent<IProps & AnyProp> {
  shouldComponentUpdate(nextProps: IProps) {
    const rest = pick(this.props);
    const oldRest = pick(nextProps);
    for (let i in rest) {
      if (rest[i] !== oldRest[i]) {
        return true;
      }
    }
    return false;
  }

  componentDidUpdate() {
    this.props.onUpdate && this.props.onUpdate();
  }

  render() {
    return this.props.children;
  }
}