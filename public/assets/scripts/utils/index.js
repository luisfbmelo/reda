import moment from 'moment';

moment.locale('pt', {
    months : "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
    monthsShort : "jan._fev._mar_abr._mai_jun_jul._ago_set._out._nov._dez.".split("_"),
    weekdays : "domingo_segunda_terça_quarta_quinta_sexta_sábado".split("_"),
    weekdaysShort : "dom._seg._ter._qua._qui._sex._sab.".split("_"),
    weekdaysMin : "Do_Se_Te_Qua_Qui_Se_Sab".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Hoje às] LT",
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: '[a última] dddd LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "em %s",
        past : "%s atrás",
        s : "segundos",
        m : "um minuto",
        mm : "%d minutos",
        h : "uma hora",
        hh : "%d horas",
        d : "um dia",
        dd : "%d dias",
        M : "um mês",
        MM : "%d meses",
        y : "um ano",
        yy : "%d anos"
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

export const setDateFormat = (date, formatDate) => {
	moment.locale('pt');
	return moment(date).format(formatDate);
}

export const setUrl = (content) => {
    if (content.indexOf("http://") == -1){
        return "http://"+content;
    }

    return content;
}

//
//  Sort with locale the TITLE property
//
export const sortByTitle = function(s1, s2){
    return s1.title.localeCompare(s2.title);
}