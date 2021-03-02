import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

import Grid from "../Grid";
import ULink from "../ULink";

import * as S from "./styles";
import * as T from "../../styles/Texts";
import { PlusIcon } from "../NavSection/styles";

class DaySingle extends React.Component {
  // const intl = useIntl();

  constructor(props) {
    super(props);

    this.state = {
      dayOpened: false,
      dayShouldFirstOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      dayShouldFirstOpen: this.props.data.dayShouldOpen,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.state.dayOpened && this.props.shouldClose) {
        this.setState({
          dayOpened: false,
        }, () => {
          window.dispatchEvent(new Event("resize"));
        });
      }

      if (this.state.dayShouldFirstOpen && !this.props.shouldClose) {
        this.setState(
          {
            dayOpened: true,
            dayShouldFirstOpen: false,
          },
          () => {
            window.dispatchEvent(new Event("resize"));
          }
        );
      }

      if(this.props.forceOpen) {
        this.setState(
          {
            dayOpened: true,
          },
          () => {
            window.dispatchEvent(new Event("resize"));
          }
        );
      }
    }
  }

  handleHeaderClick() {
    this.setState(
      {
        dayOpened: !this.state.dayOpened,
      },
      () => {
        window.dispatchEvent(new Event("resize"));
      }
    );
  }

  render() {
    const day = this.props.data;

    return (
      <S.DaySingle>
        <S.DayHeader onClick={this.handleHeaderClick.bind(this)}>
          <T.H2>
            {day.date.toLocaleDateString(`${this.props.intl.locale}-CA`, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </T.H2>
          <PlusIcon active={this.state.dayOpened} />
        </S.DayHeader>
        <S.DaySessions opened={this.state.dayOpened}>
          {day.sessions.map((session, index) => {
            return (
              <S.Session id={`${session.id}`} key={`session-${index}`}>
                <Grid>
                  <S.SessionLeft>
                    <T.Small>{session.timerange}</T.Small>
                    <S.SessionMeta>
                      <T.Mark>{session.titles[this.props.intl.locale]}</T.Mark>
                      {typeof session.president !== "undefined" && (
                        <div>
                          <T.SmallBold>
                            {session.president.firstName}{" "}
                            {session.president.lastName},{" "}
                          </T.SmallBold>
                          <T.Small>{session.president.institution}</T.Small>
                        </div>
                      )}
                    </S.SessionMeta>
                    <S.SessionShareDesk>
                      <ULink small external linkTo={`https://www.facebook.com/sharer/sharer.php?u=https://icofom2021.ca#${session.id}`}>
                        <FormattedMessage id="buttons.share" />
                      </ULink>
                    </S.SessionShareDesk>
                  </S.SessionLeft>
                  <S.SessionRight>
                    {session.interventions.map((intervention, index) => {
                      return (
                        <S.InterventionSingle key={`intervention-${index}`}>
                          {intervention.intervenants.map((intervenant) => (
                            <ULink 
                              internal
                              small
                              linkTo={`#${intervenant.id}`}
                              destination='intervenants'
                              key={intervenant.id}
                            >
                              <T.Mark>
                                {intervenant.firstName} {intervenant.lastName}
                              </T.Mark>
                            </ULink>
                          ))}
                          <T.P>
                            {typeof intervention.title === "object"
                              ? intervention.title[this.props.intl.locale]
                              : intervention.title}
                          </T.P>
                        </S.InterventionSingle>
                      );
                    })}
                    {session.replayLink !== "" &&(
                      <S.SessionReplay>
                        <iframe title={`${session.id}-replayVideo`} src={`https://www.youtube-nocookie.com/embed/${session.replayLink}?modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3`} frameBorder="0" allowFullScreen></iframe>
                      </S.SessionReplay>
                    )}
                  </S.SessionRight>
                  <S.SessionShareMob>
                    <ULink small external linkTo={`https://www.facebook.com/sharer/sharer.php?u=https://icofom2021.ca/#${session.id}`}>
                      <FormattedMessage id="buttons.share" />
                    </ULink>
                  </S.SessionShareMob>
                </Grid>
              </S.Session>
            );
          })}
        </S.DaySessions>
      </S.DaySingle>
    );
  }
}

export default injectIntl(DaySingle);
