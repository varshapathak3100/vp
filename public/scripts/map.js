$(function () {
    //console.log("inside map.js");
    // Prepare demo data

    var t1,t2,t3,t4;
    var brazil, canada, chile, mexico, us, venezuela;
    var australia, india, indonesia, japan, malaysia, pakistan, phillipines, southKorea, sriLanka, taiwan;
    var denmark, finland, france, germany, greece, netherlands, norway, portugal, slovakia, switz, turkey, uk;
    var egypt, israel, southAfrica;


    $.get("/crawler", function( data ) {
      t1 = data[0];
      t2 = data[1];
      t3 = data[2];
      t4 = data[3];
      //------------------------------t1----------------------
      brazil = t1[0];
      canada = t1[1];
      chile = t1[2];
      mexico = t1[3];
      us = t1[4];
      venezuela = t1[5];
      //-----------------------------t2-------------------------
      australia = t2[0];
      india = t2[2];
      indonesia = t2[3];
      japan = t2[4];
      malaysia = t2[5];
      pakistan = t2[6];
      phillipines = t2[7];
      southKorea = t2[9];
      sriLanka = t2[10];
      taiwan = t2[11];
      //-------------------------------t3------------------------
      denmark = t3[0];
      finland = t3[1];
      france = t3[2];
      germany = t3[3];
      greece = t3[4];
      netherlands = t3[5];
      norway = t3[6];
      portugal = t3[7];
      slovakia = t3[8];
      switz = t3[9];
      turkey = t3[10];
      uk = t3[11];
      //-------------------------------t4-------------------------
      egypt = t4[0];
      israel = t4[1];
      southAfrica = t4[2];

        console.log(india);


var table_data = [
            {
                "countryName": "Brazil",
                "percentageChange": (brazil['% Chg.']),
                "change":(brazil['Chg.']),
                "last":parseFloat(brazil['Last'])
            },
            {
                "countryName": "Canada",
                "percentageChange": (canada['% Chg.']),
                "change":(canada['Chg.']),
                "last":parseFloat(canada['Last'])
            },
            {
                "countryName": "Chile",
                "percentageChange": (chile['% Chg.']),
                "change":(chile['Chg.']),
                "last":parseFloat(chile['Last'])
            },
            {
                "countryName": "Mexico",
                "percentageChange": (mexico['% Chg.']),
                "change":(mexico['Chg.']),
                "last":parseFloat(mexico['Last'])
            },
            {
                "countryName": "United States",
                "percentageChange": (us['% Chg.']),
                "change":(us['Chg.']),
                "last":parseFloat(us['Last'])
            },
            {
                "countryName": "Venezuela",
                "percentageChange": (venezuela['% Chg.']),
                "change":(venezuela['Chg.']),
                "last":parseFloat(venezuela['Last'])
            },
            {
                "countryName": "Australia",
                "percentageChange": (australia['% Chg.']),
                "change":(australia['Chg.']),
                "last":parseFloat(australia['Last'])
            },
            // {
            //    "countryName": "Hong Kong",
            //     "percentageChange": parseFloat(Hong Kong['% Chg.']),
            //     "change":parseFloat(Hong Kong['Chg.']),
            //     "last":parseFloat(Hong Kong['Last'])
            // },
            {
                "countryName": "India",
                "percentageChange": (india['% Chg.']),
                "change":(india['Chg.']),
                "last":parseFloat(india['Last'])
            },
            {
               "countryName": "Malaysia ",
                "percentageChange": (malaysia ['% Chg.']),
                "change":(malaysia['Chg.']),
                "last":parseFloat(malaysia['Last'])
            },
            {
               "countryName": "Indonesia",
                "percentageChange": (indonesia['% Chg.']),
                "change":(indonesia['Chg.']),
                "last":parseFloat(indonesia['Last'])
            },
            {
               "countryName": "Japan",
                "percentageChange": (japan['% Chg.']),
                "change":(japan['Chg.']),
                "last":parseFloat(japan['Last'])
            },
            {
               "countryName": "Pakistan",
                "percentageChange": (pakistan['% Chg.']),
                "change":(pakistan['Chg.']),
                "last":parseFloat(pakistan['Last'])
            },
            {
               "countryName": "Canada",
                "percentageChange": (canada['% Chg.']),
                "change":(canada['Chg.']),
                "last":parseFloat(canada['Last'])
            },
            {
               "countryName": "Phillippines",
                "percentageChange": (phillipines['% Chg.']),
                "change":(phillipines['Chg.']),
                "last":parseFloat(phillipines['Last'])
            },
            // {
            //     "countryName": "Singapore",
            //     "percentageChange": (singapore['% Chg.']),
            //     "change":(singapore   ['Chg.']),
            //     "last":parseFloat(singapore ['Last'])
            // },
            {
                "countryName": "South Korea",
                "percentageChange": (southKorea['% Chg.']),
                "change":(southKorea['Chg.']),
                "last":parseFloat(southKorea['Last'])
            },
            {
              "countryName": "Sri Lanka",
                "percentageChange": (sriLanka['% Chg.']),
                "change":(sriLanka['Chg.']),
                "last":parseFloat(sriLanka['Last'])
            },
            {
                "countryName": "Canada",
                "percentageChange": (taiwan['% Chg.']),
                "change":(taiwan['Chg.']),
                "last":parseFloat(taiwan['Last'])
            },
            {
               "countryName": "Canada",
                "percentageChange": (canada['% Chg.']),
                "change":(canada['Chg.']),
                "last":parseFloat(canada['Last'])
            },
            {
               "countryName": "Denmark",
                "percentageChange": (denmark['% Chg.']),
                "change":(denmark['Chg.']),
                "last":parseFloat(denmark['Last'])
            },
            {
                "countryName": "Finland",
                "percentageChange": (finland['% Chg.']),
                "change":(finland['Chg.']),
                "last":parseFloat(finland['Last'])
            },
            {
                "countryName": "France",
                "percentageChange": (france['% Chg.']),
                "change":(france['Chg.']),
                "last":parseFloat(france['Last'])
            },
            {
                "countryName": "Germany",
                "percentageChange": (germany['% Chg.']),
                "change":(germany['Chg.']),
                "last":parseFloat(germany['Last'])
            },
            {
               "countryName": "Greece",
                "percentageChange": (greece['% Chg.']),
                "change":(greece['Chg.']),
                "last":parseFloat(greece['Last'])
            },
            {
                "countryName": "Netherlands",
                "percentageChange": (netherlands['% Chg.']),
                "change":(netherlands['Chg.']),
                "last":parseFloat(netherlands['Last'])
            },
            {
                "countryName": "Norway",
                "percentageChange": (norway['% Chg.']),
                "change":(norway['Chg.']),
                "last":parseFloat(norway['Last'])
            },
            {
               "countryName": "Portugal",
                "percentageChange": (portugal['% Chg.']),
                "change":(portugal['Chg.']),
                "last":parseFloat(portugal['Last'])
            },
            {
               "countryName": "Slovakia",
                "percentageChange": (slovakia['% Chg.']),
                "change":(slovakia['Chg.']),
                "last":parseFloat(slovakia['Last'])
            },
            {
               "countryName": "Turkey",
                "percentageChange": (turkey['% Chg.']),
                "change":(turkey['Chg.']),
                "last":parseFloat(turkey['Last'])
            },
            // {
            //    "countryName": "United Kingdom",
            //     "percentageChange": (United Kingdom['% Chg.']),
            //     "change":(United Kingdom['Chg.']),
            //     "last":parseFloat(United Kingdom['Last'])
            // },
            {
               "countryName": "Egypt",
                "percentageChange": (egypt['% Chg.']),
                "change":(egypt['Chg.']),
                "last":parseFloat(egypt['Last'])
            },
            {
               "countryName": "Israel",
                "percentageChange": (israel['% Chg.']),
                "change":(israel['Chg.']),
                "last":parseFloat(israel['Last'])
            },
            {
               "countryName": "South Africa",
                "percentageChange": (southAfrica['% Chg.']),
                "change":(southAfrica['Chg.']),
                "last":parseFloat(southAfrica['Last'])
            }
        ];



            console.log(table_data);

    var tr;
    for (var i = 0; i < table_data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + table_data[i].countryName + "</td>");
        tr.append("<td>" + table_data[i].percentageChange + "</td>");
        tr.append("<td>" + table_data[i].change + "</td>");
        tr.append("<td>" + table_data[i].last + "</td>");
        $('#map_table').append(tr);
        }


        var data = [
            {
                "hc-key": "us",
                "value": parseFloat(us['% Chg.'])
            },
            {
                "hc-key": "jp",
                "value": parseFloat(japan['% Chg.'])
            },
            {
                "hc-key": "in",
                "value": parseFloat(india['% Chg.'])
            },
            {
                "hc-key": "kr",
                "value": parseFloat(southKorea['% Chg.'])
            },
            {
                "hc-key": "fr",
                "value": parseFloat(france['% Chg.'])
            },
            {
                "hc-key": "pt",
                "value": parseFloat(portugal['% Chg.'])
            },
            {
                "hc-key": "br",
                "value": parseFloat(brazil['% Chg.'])
            },
            {
                "hc-key": "au",
                "value": parseFloat(australia['% Chg.'])
            },
            {
                "hc-key": "ph",
                "value": parseFloat(phillipines['% Chg.'])
            },
            {
                "hc-key": "mx",
                "value": parseFloat(mexico['% Chg.'])
            },
            {
                "hc-key": "gb",
                "value": parseFloat(uk['% Chg.'])
            },
            {
                "hc-key": "gr",
                "value": parseFloat(greece['% Chg.'])
            },
            {
                "hc-key": "dk",
                "value": parseFloat(denmark['% Chg.'])
            },
            {
                "hc-key": "ca",
                "value": parseFloat(canada['% Chg.'])
            },
            {
                "hc-key": "nl",
                "value": parseFloat(netherlands['% Chg.'])
            },
            {
                "hc-key": "tr",
                "value": parseFloat(turkey['% Chg.'])
            },
            {
                "hc-key": "no",
                "value": parseFloat(norway['% Chg.'])
            },
            {
                "hc-key": "id",
                "value": parseFloat(indonesia['% Chg.'])
            },
            {
                "hc-key": "my",
                "value": parseFloat(malaysia['% Chg.'])
            },
            {
                "hc-key": "cl",
                "value": parseFloat(chile['% Chg.'])
            },
            {
                "hc-key": "tw",
                "value": parseFloat(taiwan['% Chg.'])
            },
            {
                "hc-key": "de",
                "value": parseFloat(germany['% Chg.'])
            },
            {
                "hc-key": "pk",
                "value": parseFloat(pakistan['% Chg.'])
            },
            {
                "hc-key": "za",
                "value": parseFloat(southAfrica['% Chg.'])
            },
            {
                "hc-key": "ve",
                "value": parseFloat(venezuela['% Chg.'])
            },
            {
                "hc-key": "sk",
                "value": parseFloat(slovakia['% Chg.'])
            },
            {
                "hc-key": "ch",
                "value": parseFloat(switz['% Chg.'])
            },
            {
                "hc-key": "il",
                "value": parseFloat(israel['% Chg.'])
            },
            {
                "hc-key": "eg",
                "value": parseFloat(egypt['% Chg.'])
            },
            {
                "hc-key": "lk",
                "value": parseFloat(sriLanka['% Chg.'])
            }
        ];

        // Initiate the chart
    $('#container').highcharts('Map', {
        //console.log("inside highcharts");
        title: {
            text: 'Global Stock Index'
        },

        subtitle: {
            text: 'Chloropleth Map of Global Stock Indices'
        },

        //colors: ['rgba(175, 0, 0, 0.5)', 'rgba(255, 19, 19, 0.5)', 'rgba(0, 229, 0, 0.5)',
         //           'rgba(0, 126, 0, 0.5)'],

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        /*colorAxis: {
            min: -10
        },*/

        //colors : ['#D7EDE5', '#9BD1BE', '#37A47E', '#a4edba'],

        colorAxis: {
                    dataClasses: [{
                        to: -1,
                        color: 'rgba(175, 0, 0, 0.5)'
                    }, {
                        from: -1,
                        to: 0,
                        color: 'rgba(255, 19, 19, 0.5)'
                    }, {
                        from: 0,
                        to: 1,
                        color: 'rgba(0, 229, 0, 0.5)'
                    }, {
                        from: 1,
                        color: 'rgba(0, 126, 0, 0.5)'
                    }]
                },

        series: [{
            data: data,
            mapData: Highcharts.maps['custom/world-highres3'],
            joinBy: 'hc-key',
            name: 'Stock Index',
            states: {
                hover: {
                    color: '#526FDA'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
    });    
});
