import { intervenants } from "../data/intervenants";
import { program } from "../data/program";
import { partners } from "../data/partners";

export function useTreatProgram() {
  let finalDays = [];

  program.map((day) => {
    const dayTs = Date.parse(day.day);
    const todayTs = Date.now();
    const dateObj = new Date(dayTs);
    dateObj.setUTCHours(12)
    const todayObj = new Date(todayTs);
    let dayShouldOpen = false;

    if (
      dateObj.getDate() === todayObj.getDate() &&
      dateObj.getMonth() === todayObj.getMonth()
    )
      dayShouldOpen = true;

    let finalDay = {
      date: dateObj,
      dayShouldOpen: dayShouldOpen,
      zoomLink: day.zoomLink,
      subscribeLink: day.subscribeLink,
      sessions: [],
    };

    day.sessions.map((session, index) => {
      let timerange = `${session.timeRange[0]} — ${session.timeRange[1]} ${session.timeRange[2]}`;
      let titles = session.titles;
      let presidents = [];

      session.president.map((president) => {
        intervenants.map((intervenant) => {
          if (intervenant.id === president) {
            presidents.push(intervenant);
            return true;
          }
        });
      })

      let interventions = [];
      session.interventions.map((intervention, index) => {
        let leaders = [];
        let interventionTitle;

        intervention.intervenantId.map((intervenantId) => {
          intervenants.map((intervenant) => {
            if (intervenant.id === intervenantId) {
              leaders.push(intervenant);
              return true;
            }
          });
        });

        if (typeof intervention.interventionTitles !== "undefined")
          interventionTitle = intervention.interventionTitles;
        else if (typeof intervention.interventionTitle !== "undefined")
          interventionTitle = intervention.interventionTitle;

        let finalIntervention = {
          intervenants: leaders,
          title: interventionTitle,
        };

        interventions.push(finalIntervention);
        return true;
      });


      let finalSession = {
        id: session.id,
        timerange: timerange,
        titles: titles,
        replayLink: session.replayLink,
        presidents: presidents,
        interventions: interventions,
      };

      finalDay.sessions.push(finalSession);
      return true;
    });

    finalDays.push(finalDay);
    return true;
  });

  return finalDays;
}

export function useTreatIntervenants() {
  let finalIntervenants = {};
  let alph = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < alph.length; i++) {
    finalIntervenants[alph.charAt(i)] = [];
  }

  intervenants.map((intervenant, index) => {
    let finalIntervenant = {
      id: intervenant.id,
      fullName: `${intervenant.firstName} ${intervenant.lastName}`,
      presentation: intervenant.presentation,
      texte: intervenant.texte,
      intervention: intervenant.intervention
    };

    let intervenantSessions = []
    intervenant.sessions.map((interSession, index) => {
      program.map((day) => {
        day.sessions.map((daySession) => {
          if(daySession.id === interSession){
            const dayTs = Date.parse(day.day);
            const dateObj = new Date(dayTs);
            dateObj.setUTCHours(12)
            let finalSession = {
              day: dateObj,
              session: daySession
            }
            intervenantSessions.push(finalSession)
            return true
          }
        })
        return true
      })
      return true
    })

    finalIntervenant.sessions = intervenantSessions

    let initial = finalIntervenant.id.charAt(0)
    finalIntervenants[initial].push(finalIntervenant)

  });

  Object.keys(finalIntervenants).map(letter => {
    if(finalIntervenants[letter].length === 0) {
      delete finalIntervenants[letter]
    }
  })

  return finalIntervenants;
}

export function useTreatPartners() {
  return partners;
}
