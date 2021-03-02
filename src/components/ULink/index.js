import React from 'react'
import * as S from './styles.js'
import * as T from '../../styles/Texts'

import Icon from '../Icon'

class ULink extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if(this.props.internal) {
      e.preventDefault();

      // if(this.props.shouldNavigate) {
      //   // navigate(this.props.linkTo, {state: {destination:"intervenants", id:"marion-bertin"}})
      // }
      
      if(this.props.destination !== null) {
        let detail = {
          destination: this.props.destination,
          target: this.props.linkTo,
        }
        let evt = new CustomEvent('linkInternalClicked', {"bubbles:": true, "cancelable":true, "detail":detail})
        window.dispatchEvent(evt);
      }
    }
  }

  render() {
    return(
      <S.Link 
        href={`${this.props.linkTo}`}
        target={this.props.external ? '_blank' : null}
        large={this.props.large}
        small={this.props.small}
        onClick={this.handleClick}
        download={this.props.download}
      >
        <S.LinkContainer
          small={this.props.small}
        >
          <T.A>{this.props.children}<Icon type="externalLink" /></T.A>
        </S.LinkContainer>
      </S.Link>
    )
  }
}

export default ULink