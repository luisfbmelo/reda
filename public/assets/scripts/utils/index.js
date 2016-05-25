import moment from 'moment';

//
//  Set date and time localization
//
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


//
//  Convert date format
//
export const setDateFormat = (date, formatDate) => {
	moment.locale('pt');
	return moment(date).format(formatDate);
}

//
//  Set string to url if no HTTP exists
//
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

//
//  Build query string to get data
//
export const toQueryString = function(data){
    let finalString = "";

    if (data){
        let keys = Object.keys(data);


        for(let key of keys){ 
            let customKey = key=="access" ? "modes" : key;

            if (data[key] instanceof Array){
                for (let value of data[key]){             

                    finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                    finalString += customKey+"[]="+value;
                }
            }else if(data[key]){
                finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                finalString += customKey+"[]="+data[key];
            }
        }
    }
    return finalString;
}

//
//  Build query string from complex structure
//
export const complexToQueryString = function(data){
    let finalString = "";

    if (data){
        let keys = Object.keys(data);

        for(let key of keys){ 
            let customKey = key=="access" ? "modes" : key;

            if (data[key] instanceof Array){
                for (let value of data[key]){             

                    finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                    finalString += customKey+"[]="+value;
                }
            }

            // If nested 1 level
            else if(data[key] instanceof Object){
                let thisKeyObjs = Object.keys(data[key]);

                // Go for all keys
                for (let thisKey of thisKeyObjs){   
                    let customKey = thisKey=="access" ? "modes" : thisKey;  

                    // If is an array
                    if (data[key][thisKey] instanceof Array){
                       // For each key, get value
                        for (let value of data[key][thisKey]){             

                            finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                            finalString += customKey+"[]="+value;
                        } 
                    // If it is just a plain value
                    }else if(data[key][thisKey]){
                        finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                        finalString += customKey+"[]="+data[key][thisKey];
                    }                       
                }
            }
            else if(data[key]){
                finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                finalString += data[key] instanceof Array ? customKey+"[]="+data[key] : customKey+"="+data[key];
            }
        }
    }

    return finalString;
}

//
//  Return average
//

export const getAvg = (ratings) => {
    let total = ratings.length;
    let sum = 0;

    for (let rating of ratings){
        sum = sum + parseInt(rating.value);
    }

    return sum/total;
}