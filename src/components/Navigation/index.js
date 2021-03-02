import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import animateScrollTo from "animated-scroll-to";
import * as S from "./styles";
import NavSection from "../NavSection";

import AboutSection from "../Sections/AboutSection";
import ProgramSection from "../Sections/ProgramSection";
import IntervenantsSection from "../Sections/IntervenantsSection";
import PartnersSection from "../Sections/PartnersSection";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedNav: null,
      navSticky: false,
      forceOpenDays: false
    };

    this.navContainer = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    window.addEventListener("linkInternalClicked", this.handleLinkInternalClicked.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
    window.removeEventListener("linkInternalClicked", this.handleLinkInternalClicked.bind(this));
  }

  handleScroll() {
    // update position from top on scroll event
    const navScrollTop = this.navContainer.current.getBoundingClientRect().top
    const navBottomScroll = this.navContainer.current.getBoundingClientRect().bottom

    // cas de stick de la nav au moment où son top touche le haut du vp
    if (navScrollTop <= 0 && !this.state.navSticky && this.state.openedNav !== null) {
      this.setState({
        navSticky: true,
      });
    }

    // cas d'unstick de la nav au moment où son top touche le haut du vp
    if (this.state.navSticky) {
      if (navScrollTop >= 0) {
        this.setState({
          navSticky: false,
        });
      }
    }

    // cas d'unstick de la nav au moment où elle a complètement défilé
    if(this.state.navSticky && navBottomScroll <= 350) {
      // // this.setState({
      // //   navSticky: false,
      // // })
      this.handleCloseNav()
    }
  }

  handleOpenNav(navIndex) {
    this.setState(
      {
        openedNav: navIndex,
      },
      () => {
        if(this.state.navSticky)
          this.scrollToNavTop();
      }
    );
  }

  handleCloseNav() {
    this.setState(
      {
        openedNav: null,
      },
      () => {
        this.setState({
          navSticky: false
        })
      }
    );
  }

  handleLinkInternalClicked(e) {

    if(e.detail.destination === 'intervenants') {
      this.setState({
        openedNav: 3
      }, () => {
        animateScrollTo(document.querySelector(`${e.detail.target}`), { maxDuration: 300, verticalOffset: -216})
      })
    }
    else if(e.detail.destination === 'program') {
      this.scrollToNavTop()
      this.setState({
        openedNav:2,
        forceOpenDays: true
      }, () => {
        let self = this
        setTimeout(function() {
          animateScrollTo(document.querySelector(`${e.detail.target}`), { maxDuration: 300, verticalOffset: -144}).then(hasScrolledToPosition => {
            if(hasScrolledToPosition) {
              self.setState({
                forceOpenDays: false
              });
            }
          })
        }, 400)
      })
    }
  }

  scrollToNavTop(duration, action = null) {
    animateScrollTo(this.navContainer.current, { maxDuration: duration }).then(hasScrolledToPosition => {
      if(action === 'close') {
        this.handleCloseNav()
      }
    });
  }

  handleNavClick(navIndex) {
    // cas nav ouverte + swap de section
    if (this.state.openedNav !== null && this.state.openedNav !== navIndex) {
      this.handleOpenNav(navIndex);

      this.setState({
        navSticky: true,
      });
      // cas nav ouverte + fermeture de section ouverte
    } else if (this.state.openedNav === navIndex) {
      if(this.state.navSticky) 
        this.scrollToNavTop(300, 'close')
      else this.handleCloseNav()


      // cas nav fermée + ouverture de section
    } else if (this.state.openedNav === null) {
      this.handleOpenNav(navIndex);
      // this.setState({
      //   navSticky: true,
      // });
    }
  }

  render() {
    return (
      <S.Navigation
        ref={this.navContainer}
        // sticky={this.state.navSticky}
        onScroll={this.handleScroll.bind(this)}
      >
        <NavSection
          navTitle={this.props.intl.formatMessage({ id: "navs.about" })}
          // active={this.state.openedNav === 1 ? true : false}
          openedNav={this.state.openedNav}
          index={1}
          onClick={() => this.handleNavClick(1)}
          containerSticky={this.state.navSticky}
        >
          <AboutSection />
        </NavSection>
        <NavSection
          navTitle={this.props.intl.formatMessage({ id: "navs.program" })}
          // active={this.state.openedNav === 2 ? true : false}
          openedNav={this.state.openedNav}
          index={2}
          onClick={() => this.handleNavClick(2)}
          containerSticky={this.state.navSticky}
        >
          <ProgramSection
           sectionActive={this.state.openedNav === 2} 
           forceOpenDays={this.state.forceOpenDays}
          />
        </NavSection>
        <NavSection
          navTitle={this.props.intl.formatMessage({ id: "navs.intervenants" })}
          // active={this.state.openedNav === 3 ? true : false}
          openedNav={this.state.openedNav}
          index={3}
          onClick={() => this.handleNavClick(3)}
          containerSticky={this.state.navSticky}
        >
          <IntervenantsSection
            sectionActive={this.state.openedNav === 3} 
            sectionSticky={this.state.navSticky}
          />
        </NavSection>
        <NavSection
          navTitle={this.props.intl.formatMessage({ id: "navs.partners" })}
          openedNav={this.state.openedNav}
          index={4}
          onClick={() => this.handleNavClick(4)}
          containerSticky={this.state.navSticky}
        >
          <PartnersSection />
        </NavSection>
      </S.Navigation>
    );
  }
}

export default injectIntl(Navigation);
