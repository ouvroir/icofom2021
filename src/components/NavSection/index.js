import React from "react";
import * as S from "./styles";
import * as T from "../../styles/Texts";

class NavSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionHeight: "0",
      sectionHeaderHeight: "0",
    };
    this.navSection = React.createRef();
    this.navSectionHeader = React.createRef();
    this.navSectionContent = React.createRef();
    this.intersector = React.createRef();
  }

  componentDidMount() {
    this.setState({
      sectionHeight: this.navSectionContent.current.scrollHeight+this.navSectionHeader.current.scrollHeight,
      sectionHeaderHeight: this.navSectionHeader.current.scrollHeight,
      sectionScrollTop: this.navSection.current.getBoundingClientRect().top,
    });

    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  handleResize() {

    this.setState({
      sectionHeight: this.navSectionContent.current.scrollHeight,
      sectionHeaderHeight: this.navSectionHeader.current.scrollHeight,
      sectionScrollTop: this.navSection.current.getBoundingClientRect().top,
    })
  }

  render() {

    let active,
        sticky
        // currOffset = this.navSectionHeader.current.getBoundingClientRect().top

    if(this.props.openedNav === this.props.index) {
      active = true
    }

    if(this.props.index <= this.props.openedNav) {
      sticky = true
    }

    return (
      <S.NavSection
        ref={this.navSection}
        active={active}
        height={this.state.sectionHeight}
        headerHeight={this.state.sectionHeaderHeight}
      >
        <S.NavSectionHeader
          onClick={this.props.onClick}
          sticky={sticky && this.props.containerSticky}
          containerSticky={this.props.containerSticky}
          index={this.props.index-1}
          headerHeight={this.state.sectionHeaderHeight}
          // currOffset={currOffset}
          active={active}
          ref={this.navSectionHeader}
        >
          <T.H2>{this.props.navTitle}</T.H2>
          <S.PlusIcon
            active={active}
          />
        </S.NavSectionHeader>
        <S.NavSectionContent
          active={active}
          sticky={sticky && this.props.containerSticky}
          headerHeight={this.state.sectionHeaderHeight}
          ref={this.navSectionContent}
        >
          {this.props.children}
        </S.NavSectionContent>
      </S.NavSection>
    );
  }
}

export default NavSection;
