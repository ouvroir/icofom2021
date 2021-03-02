import React from "react";
import animateScrollTo from "animated-scroll-to";

import Grid from "../Grid";

import * as S from "./styles";
import * as T from "../../styles/Texts";

class IntervenantAlphabet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLetter: null,
    };

    this.alphaContainer = React.createRef();
    this.handleLetterClick = this.handleLetterClick.bind(this)
  }

  handleLetterClick(e, letter) {
    e.preventDefault()
    animateScrollTo(document.querySelector(`#intervenants-${letter}`),{ maxDuration: 300, verticalOffset: -258 }).then(hasScrolledToPosition => {
      if(hasScrolledToPosition) {
        this.setState({
          activeLetter: letter
        })
      }
    })
  }

  render() {
    let sticky = false;
    if (
      this.props.sectionActive &&
      this.props.sectionSticky
    ) {
      sticky = true;
    }

    return (
      <S.IntervenantAlphabet
        ref={this.alphaContainer}
        sticky={sticky}
      >
        <Grid>
          <S.AlphaContent>
            {Object.keys(this.props.intervenants).map((letter) => (
              <S.AlphaLink
                href={`#${letter}`}
                onClick={(e) => this.handleLetterClick(e, letter)}
                active={letter === this.state.activeLetter}
                key={letter}
              >
                <T.Small>{letter}</T.Small>
              </S.AlphaLink>
            ))}
          </S.AlphaContent>
        </Grid>
      </S.IntervenantAlphabet>
    );
  }
}

export default IntervenantAlphabet;
