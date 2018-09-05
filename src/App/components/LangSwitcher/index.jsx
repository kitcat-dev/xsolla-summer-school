import React from "react";
import PropTypes from 'prop-types';

import "./LangSwitcher.css";
const classNames = require('classnames');

function noop() {
}

export default class LangSwitcher extends React.Component {
  constructor(props) {
    super(props);

    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = { checked };
  }

  componentDidMount() {
    const { autoFocus} = this.props;
    if (autoFocus) {
      this.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  setChecked(checked) {
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    this.props.onChange(checked);
  }

  toggle = () => {
    const { onClick } = this.props;
    const checked = !this.state.checked;
    this.setChecked(checked);
    onClick(checked);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 37) { // Left
      this.setChecked(false);
    } else if (e.keyCode === 39) { // Right
      this.setChecked(true);
    } else if (e.keyCode === 32 || e.keyCode === 13) { // Space, Enter
      this.toggle();
    }
  }

  // Автофокус в хроме
  handleMouseUp = (e) => {
    if (this.node) {
      this.node.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }

  focus() {
    this.node.focus();
  }

  blur() {
    this.node.blur();
  }

  saveNode = (node) => {
    this.node = node;
  }

  render() {
    const { className, prefixCls, checkedChildren, unCheckedChildren, ...restProps } = this.props;
    const checked = this.state.checked;
    const switchClassName = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-checked`]: checked
    });
    return (
      <span
        {...restProps}
        className={switchClassName}
        ref={this.saveNode}
        onKeyDown={this.handleKeyDown}
        onClick={this.toggle}
        onMouseUp={this.handleMouseUp}
      >
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </span>
    );
  }
}

LangSwitcher.propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    onChange: PropTypes.func,
    onMouseUp: PropTypes.func,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    autoFocus: PropTypes.bool,
    loadingIcon: PropTypes.node,
  };
  
LangSwitcher.defaultProps = {
    prefixCls: 'rc-switch',
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: noop,
    onClick: noop,
  };
