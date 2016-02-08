import React, { Component, PropTypes } from 'react';
import {Flex} from 'jsxstyle';
import L from '../LayoutConstants';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }

  handleMouseEnter() {
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    this.setState({ hovered: false });
  }

  render() {
    const { children, onClick, primary, style, ...rest } = this.props;
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      background: '#fff',
      fontFamily: L.sans,
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      lineHeight: '1.43',
      outline: '0',
      padding: '7px 21px',
      transition: '.25s background ease, .25s border-color ease',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      borderColor: this.state.hovered ? '#aaaaaa' : '#c4c4c4',
      border: '1px solid',
      cursor: 'pointer',
      color: '#565a5c',
    };
    const normalStyle = Object.assign({}, baseStyle, style);
    const primaryStyle = Object.assign({}, normalStyle, {
      border: '1px solid',
      borderColor: this.state.hovered ? '#424242' : '#212121',
      background: this.state.hovered ? '#424242' : '#212121',
      color: '#ffffff',
    }, style);

    return (
      <div
        role="button"
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={onClick}
      >
        <div
          style={!primary ? normalStyle : primaryStyle }
          {...rest}
          >
          {children}
        </div>
      </div>
    );
  }
}

export default Button;
