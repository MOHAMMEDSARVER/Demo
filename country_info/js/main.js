const countryList = [
    {
        "countryName": "South Africa",
        "countryCode": "ZAF",
        "region": "Africa",
        "population": 59308690,
        "flagUrl": "https://flagcdn.com/za.svg",
        "unMember": true,
        "area": 1221037.0
    },
    {
        "countryName": "Svalbard and Jan Mayen",
        "countryCode": "SJM",
        "region": "Europe",
        "population": 2562,
        "flagUrl": "https://flagcdn.com/sj.svg",
        "unMember": false,
        "area": -1.0
    },
    {
        "countryName": "Samoa",
        "countryCode": "WSM",
        "region": "Oceania",
        "population": 198410,
        "flagUrl": "https://flagcdn.com/ws.svg",
        "unMember": true,
        "area": 2842.0
    },
    {
        "countryName": "Gambia",
        "countryCode": "GMB",
        "region": "Africa",
        "population": 2416664,
        "flagUrl": "https://flagcdn.com/gm.svg",
        "unMember": true,
        "area": 10689.0
    },
    {
        "countryName": "Saint Kitts and Nevis",
        "countryCode": "KNA",
        "region": "Americas",
        "population": 53192,
        "flagUrl": "https://flagcdn.com/kn.svg",
        "unMember": true,
        "area": 261.0
    },
    {
        "countryName": "Monaco",
        "countryCode": "MCO",
        "region": "Europe",
        "population": 39244,
        "flagUrl": "https://flagcdn.com/mc.svg",
        "unMember": true,
        "area": 2.02
    },
    {
        "countryName": "Aruba",
        "countryCode": "ABW",
        "region": "Americas",
        "population": 106766,
        "flagUrl": "https://flagcdn.com/aw.svg",
        "unMember": false,
        "area": 180.0
    },
    {
        "countryName": "Guinea-Bissau",
        "countryCode": "GNB",
        "region": "Africa",
        "population": 1967998,
        "flagUrl": "https://flagcdn.com/gw.svg",
        "unMember": false,
        "area": 36125.0
    },
    {
        "countryName": "North Korea",
        "countryCode": "PRK",
        "region": "Asia",
        "population": 25778815,
        "flagUrl": "https://flagcdn.com/kp.svg",
        "unMember": true,
        "area": 120538.0
    },
    {
        "countryName": "Paraguay",
        "countryCode": "PRY",
        "region": "Americas",
        "population": 7132530,
        "flagUrl": "https://flagcdn.com/py.svg",
        "unMember": true,
        "area": 406752.0
    },
    {
        "countryName": "Bermuda",
        "countryCode": "BMU",
        "region": "Americas",
        "population": 63903,
        "flagUrl": "https://flagcdn.com/bm.svg",
        "unMember": false,
        "area": 54.0
    },
    {
        "countryName": "Republic of the Congo",
        "countryCode": "COG",
        "region": "Africa",
        "population": 5657000,
        "flagUrl": "https://flagcdn.com/cg.svg",
        "unMember": true,
        "area": 342000.0
    },
    {
        "countryName": "United States Virgin Islands",
        "countryCode": "VIR",
        "region": "Americas",
        "population": 106290,
        "flagUrl": "https://flagcdn.com/vi.svg",
        "unMember": false,
        "area": 347.0
    },
    {
        "countryName": "Antigua and Barbuda",
        "countryCode": "ATG",
        "region": "Americas",
        "population": 97928,
        "flagUrl": "https://flagcdn.com/ag.svg",
        "unMember": true,
        "area": 442.0
    },
    {
        "countryName": "United Kingdom",
        "countryCode": "GBR",
        "region": "Europe",
        "population": 67215293,
        "flagUrl": "https://flagcdn.com/gb.svg",
        "unMember": true,
        "area": 242900.0
    },
    {
        "countryName": "Mozambique",
        "countryCode": "MOZ",
        "region": "Africa",
        "population": 31255435,
        "flagUrl": "https://flagcdn.com/mz.svg",
        "unMember": true,
        "area": 801590.0
    },
    {
        "countryName": "Martinique",
        "countryCode": "MTQ",
        "region": "Americas",
        "population": 378243,
        "flagUrl": "https://flagcdn.com/mq.svg",
        "unMember": false,
        "area": 1128.0
    },
    {
        "countryName": "British Virgin Islands",
        "countryCode": "VGB",
        "region": "Americas",
        "population": 30237,
        "flagUrl": "https://flagcdn.com/vg.svg",
        "unMember": false,
        "area": 151.0
    },
    {
        "countryName": "Somalia",
        "countryCode": "SOM",
        "region": "Africa",
        "population": 15893219,
        "flagUrl": "https://flagcdn.com/so.svg",
        "unMember": true,
        "area": 637657.0
    },
    {
        "countryName": "Montserrat",
        "countryCode": "MSR",
        "region": "Americas",
        "population": 4922,
        "flagUrl": "https://flagcdn.com/ms.svg",
        "unMember": false,
        "area": 102.0
    },
    {
        "countryName": "Northern Mariana Islands",
        "countryCode": "MNP",
        "region": "Oceania",
        "population": 57557,
        "flagUrl": "https://flagcdn.com/mp.svg",
        "unMember": false,
        "area": 464.0
    },
    {
        "countryName": "Singapore",
        "countryCode": "SGP",
        "region": "Asia",
        "population": 5685807,
        "flagUrl": "https://flagcdn.com/sg.svg",
        "unMember": true,
        "area": 710.0
    },
    {
        "countryName": "Turks and Caicos Islands",
        "countryCode": "TCA",
        "region": "Americas",
        "population": 38718,
        "flagUrl": "https://flagcdn.com/tc.svg",
        "unMember": false,
        "area": 948.0
    },
    {
        "countryName": "Nicaragua",
        "countryCode": "NIC",
        "region": "Americas",
        "population": 6624554,
        "flagUrl": "https://flagcdn.com/ni.svg",
        "unMember": true,
        "area": 130373.0
    },
    {
        "countryName": "Norfolk Island",
        "countryCode": "NFK",
        "region": "Oceania",
        "population": 2302,
        "flagUrl": "https://flagcdn.com/nf.svg",
        "unMember": false,
        "area": 36.0
    },
    {
        "countryName": "Saint Vincent and the Grenadines",
        "countryCode": "VCT",
        "region": "Americas",
        "population": 110947,
        "flagUrl": "https://flagcdn.com/vc.svg",
        "unMember": true,
        "area": 389.0
    },
    {
        "countryName": "Peru",
        "countryCode": "PER",
        "region": "Americas",
        "population": 32971846,
        "flagUrl": "https://flagcdn.com/pe.svg",
        "unMember": true,
        "area": 1285216.0
    },
    {
        "countryName": "Mexico",
        "countryCode": "MEX",
        "region": "Americas",
        "population": 128932753,
        "flagUrl": "https://flagcdn.com/mx.svg",
        "unMember": true,
        "area": 1964375.0
    },
    {
        "countryName": "Equatorial Guinea",
        "countryCode": "GNQ",
        "region": "Africa",
        "population": 1402985,
        "flagUrl": "https://flagcdn.com/gq.svg",
        "unMember": true,
        "area": 28051.0
    },
    {
        "countryName": "Bosnia and Herzegovina",
        "countryCode": "BIH",
        "region": "Europe",
        "population": 3280815,
        "flagUrl": "https://flagcdn.com/ba.svg",
        "unMember": true,
        "area": 51209.0
    },
    {
        "countryName": "Bahrain",
        "countryCode": "BHR",
        "region": "Asia",
        "population": 1701583,
        "flagUrl": "https://flagcdn.com/bh.svg",
        "unMember": true,
        "area": 765.0
    },
    {
        "countryName": "Macau",
        "countryCode": "MAC",
        "region": "Asia",
        "population": 649342,
        "flagUrl": "https://flagcdn.com/mo.svg",
        "unMember": false,
        "area": 30.0
    },
    {
        "countryName": "Barbados",
        "countryCode": "BRB",
        "region": "Americas",
        "population": 287371,
        "flagUrl": "https://flagcdn.com/bb.svg",
        "unMember": true,
        "area": 430.0
    },
    {
        "countryName": "Uzbekistan",
        "countryCode": "UZB",
        "region": "Asia",
        "population": 34232050,
        "flagUrl": "https://flagcdn.com/uz.svg",
        "unMember": true,
        "area": 447400.0
    },
    {
        "countryName": "R\u00e9union",
        "countryCode": "REU",
        "region": "Africa",
        "population": 840974,
        "flagUrl": "https://flagcdn.com/re.svg",
        "unMember": false,
        "area": 2511.0
    },
    {
        "countryName": "China",
        "countryCode": "CHN",
        "region": "Asia",
        "population": 1402112000,
        "flagUrl": "https://flagcdn.com/cn.svg",
        "unMember": true,
        "area": 9706961.0
    },
    {
        "countryName": "Malawi",
        "countryCode": "MWI",
        "region": "Africa",
        "population": 19129955,
        "flagUrl": "https://flagcdn.com/mw.svg",
        "unMember": true,
        "area": 118484.0
    },
    {
        "countryName": "Zimbabwe",
        "countryCode": "ZWE",
        "region": "Africa",
        "population": 14862927,
        "flagUrl": "https://flagcdn.com/zw.svg",
        "unMember": true,
        "area": 390757.0
    },
    {
        "countryName": "Spain",
        "countryCode": "ESP",
        "region": "Europe",
        "population": 47351567,
        "flagUrl": "https://flagcdn.com/es.svg",
        "unMember": true,
        "area": 505992.0
    },
    {
        "countryName": "Kenya",
        "countryCode": "KEN",
        "region": "Africa",
        "population": 53771300,
        "flagUrl": "https://flagcdn.com/ke.svg",
        "unMember": true,
        "area": 580367.0
    },
    {
        "countryName": "Pakistan",
        "countryCode": "PAK",
        "region": "Asia",
        "population": 220892331,
        "flagUrl": "https://flagcdn.com/pk.svg",
        "unMember": true,
        "area": 881912.0
    },
    {
        "countryName": "Christmas Island",
        "countryCode": "CXR",
        "region": "Oceania",
        "population": 2072,
        "flagUrl": "https://flagcdn.com/cx.svg",
        "unMember": false,
        "area": 135.0
    },
    {
        "countryName": "Fiji",
        "countryCode": "FJI",
        "region": "Oceania",
        "population": 896444,
        "flagUrl": "https://flagcdn.com/fj.svg",
        "unMember": true,
        "area": 18272.0
    },
    {
        "countryName": "Eswatini",
        "countryCode": "SWZ",
        "region": "Africa",
        "population": 1160164,
        "flagUrl": "https://flagcdn.com/sz.svg",
        "unMember": true,
        "area": 17364.0
    },
    {
        "countryName": "Jersey",
        "countryCode": "JEY",
        "region": "Europe",
        "population": 100800,
        "flagUrl": "https://flagcdn.com/je.svg",
        "unMember": false,
        "area": 116.0
    },
    {
        "countryName": "Taiwan",
        "countryCode": "TWN",
        "region": "Asia",
        "population": 23503349,
        "flagUrl": "https://flagcdn.com/tw.svg",
        "unMember": false,
        "area": 36193.0
    },
    {
        "countryName": "Sri Lanka",
        "countryCode": "LKA",
        "region": "Asia",
        "population": 21919000,
        "flagUrl": "https://flagcdn.com/lk.svg",
        "unMember": true,
        "area": 65610.0
    },
    {
        "countryName": "Belarus",
        "countryCode": "BLR",
        "region": "Europe",
        "population": 9398861,
        "flagUrl": "https://flagcdn.com/by.svg",
        "unMember": true,
        "area": 207600.0
    },
    {
        "countryName": "United Arab Emirates",
        "countryCode": "ARE",
        "region": "Asia",
        "population": 9890400,
        "flagUrl": "https://flagcdn.com/ae.svg",
        "unMember": true,
        "area": 83600.0
    },
    {
        "countryName": "Cura\u00e7ao",
        "countryCode": "CUW",
        "region": "Americas",
        "population": 155014,
        "flagUrl": "https://flagcdn.com/cw.svg",
        "unMember": false,
        "area": 444.0
    },
    {
        "countryName": "Costa Rica",
        "countryCode": "CRI",
        "region": "Americas",
        "population": 5094114,
        "flagUrl": "https://flagcdn.com/cr.svg",
        "unMember": true,
        "area": 51100.0
    },
    {
        "countryName": "Angola",
        "countryCode": "AGO",
        "region": "Africa",
        "population": 32866268,
        "flagUrl": "https://flagcdn.com/ao.svg",
        "unMember": true,
        "area": 1246700.0
    },
    {
        "countryName": "Uruguay",
        "countryCode": "URY",
        "region": "Americas",
        "population": 3473727,
        "flagUrl": "https://flagcdn.com/uy.svg",
        "unMember": true,
        "area": 181034.0
    },
    {
        "countryName": "DR Congo",
        "countryCode": "COD",
        "region": "Africa",
        "population": 108407721,
        "flagUrl": "https://flagcdn.com/cd.svg",
        "unMember": true,
        "area": 2344858.0
    },
    {
        "countryName": "Kuwait",
        "countryCode": "KWT",
        "region": "Asia",
        "population": 4270563,
        "flagUrl": "https://flagcdn.com/kw.svg",
        "unMember": true,
        "area": 17818.0
    },
    {
        "countryName": "Turkey",
        "countryCode": "TUR",
        "region": "Asia",
        "population": 84339067,
        "flagUrl": "https://flagcdn.com/tr.svg",
        "unMember": true,
        "area": 783562.0
    },
    {
        "countryName": "Mauritania",
        "countryCode": "MRT",
        "region": "Africa",
        "population": 4649660,
        "flagUrl": "https://flagcdn.com/mr.svg",
        "unMember": true,
        "area": 1030700.0
    },
    {
        "countryName": "Tuvalu",
        "countryCode": "TUV",
        "region": "Oceania",
        "population": 11792,
        "flagUrl": "https://flagcdn.com/tv.svg",
        "unMember": true,
        "area": 26.0
    },
    {
        "countryName": "Panama",
        "countryCode": "PAN",
        "region": "Americas",
        "population": 4314768,
        "flagUrl": "https://flagcdn.com/pa.svg",
        "unMember": true,
        "area": 75417.0
    },
    {
        "countryName": "Egypt",
        "countryCode": "EGY",
        "region": "Africa",
        "population": 102334403,
        "flagUrl": "https://flagcdn.com/eg.svg",
        "unMember": true,
        "area": 1002450.0
    },
    {
        "countryName": "Saint Lucia",
        "countryCode": "LCA",
        "region": "Americas",
        "population": 183629,
        "flagUrl": "https://flagcdn.com/lc.svg",
        "unMember": true,
        "area": 616.0
    },
    {
        "countryName": "Azerbaijan",
        "countryCode": "AZE",
        "region": "Asia",
        "population": 10110116,
        "flagUrl": "https://flagcdn.com/az.svg",
        "unMember": true,
        "area": 86600.0
    },
    {
        "countryName": "Rwanda",
        "countryCode": "RWA",
        "region": "Africa",
        "population": 12952209,
        "flagUrl": "https://flagcdn.com/rw.svg",
        "unMember": true,
        "area": 26338.0
    },
    {
        "countryName": "Senegal",
        "countryCode": "SEN",
        "region": "Africa",
        "population": 16743930,
        "flagUrl": "https://flagcdn.com/sn.svg",
        "unMember": true,
        "area": 196722.0
    },
    {
        "countryName": "India",
        "countryCode": "IND",
        "region": "Asia",
        "population": 1380004385,
        "flagUrl": "https://flagcdn.com/in.svg",
        "unMember": true,
        "area": 3287590.0
    },
    {
        "countryName": "Iceland",
        "countryCode": "ISL",
        "region": "Europe",
        "population": 366425,
        "flagUrl": "https://flagcdn.com/is.svg",
        "unMember": true,
        "area": 103000.0
    },
    {
        "countryName": "Suriname",
        "countryCode": "SUR",
        "region": "Americas",
        "population": 586634,
        "flagUrl": "https://flagcdn.com/sr.svg",
        "unMember": true,
        "area": 163820.0
    },
    {
        "countryName": "Bulgaria",
        "countryCode": "BGR",
        "region": "Europe",
        "population": 6927288,
        "flagUrl": "https://flagcdn.com/bg.svg",
        "unMember": true,
        "area": 110879.0
    },
    {
        "countryName": "Micronesia",
        "countryCode": "FSM",
        "region": "Oceania",
        "population": 115021,
        "flagUrl": "https://flagcdn.com/fm.svg",
        "unMember": true,
        "area": 702.0
    },
    {
        "countryName": "Kosovo",
        "countryCode": "UNK",
        "region": "Europe",
        "population": 1775378,
        "flagUrl": "https://flagcdn.com/xk.svg",
        "unMember": false,
        "area": 10908.0
    },
    {
        "countryName": "Sierra Leone",
        "countryCode": "SLE",
        "region": "Africa",
        "population": 7976985,
        "flagUrl": "https://flagcdn.com/sl.svg",
        "unMember": true,
        "area": 71740.0
    },
    {
        "countryName": "Tunisia",
        "countryCode": "TUN",
        "region": "Africa",
        "population": 11818618,
        "flagUrl": "https://flagcdn.com/tn.svg",
        "unMember": true,
        "area": 163610.0
    },
    {
        "countryName": "Cuba",
        "countryCode": "CUB",
        "region": "Americas",
        "population": 11326616,
        "flagUrl": "https://flagcdn.com/cu.svg",
        "unMember": true,
        "area": 109884.0
    },
    {
        "countryName": "Trinidad and Tobago",
        "countryCode": "TTO",
        "region": "Americas",
        "population": 1399491,
        "flagUrl": "https://flagcdn.com/tt.svg",
        "unMember": true,
        "area": 5130.0
    },
    {
        "countryName": "Comoros",
        "countryCode": "COM",
        "region": "Africa",
        "population": 869595,
        "flagUrl": "https://flagcdn.com/km.svg",
        "unMember": true,
        "area": 1862.0
    },
    {
        "countryName": "Nauru",
        "countryCode": "NRU",
        "region": "Oceania",
        "population": 10834,
        "flagUrl": "https://flagcdn.com/nr.svg",
        "unMember": true,
        "area": 21.0
    },
    {
        "countryName": "Saint Helena, Ascension and Tristan da Cunha",
        "countryCode": "SHN",
        "region": "Africa",
        "population": 53192,
        "flagUrl": "https://flagcdn.com/sh.svg",
        "unMember": false,
        "area": 394.0
    },
    {
        "countryName": "Romania",
        "countryCode": "ROU",
        "region": "Europe",
        "population": 19286123,
        "flagUrl": "https://flagcdn.com/ro.svg",
        "unMember": true,
        "area": 238391.0
    },
    {
        "countryName": "Marshall Islands",
        "countryCode": "MHL",
        "region": "Oceania",
        "population": 59194,
        "flagUrl": "https://flagcdn.com/mh.svg",
        "unMember": true,
        "area": 181.0
    },
    {
        "countryName": "Nepal",
        "countryCode": "NPL",
        "region": "Asia",
        "population": 29136808,
        "flagUrl": "https://flagcdn.com/np.svg",
        "unMember": true,
        "area": 147181.0
    },
    {
        "countryName": "Ecuador",
        "countryCode": "ECU",
        "region": "Americas",
        "population": 17643060,
        "flagUrl": "https://flagcdn.com/ec.svg",
        "unMember": true,
        "area": 276841.0
    },
    {
        "countryName": "Gabon",
        "countryCode": "GAB",
        "region": "Africa",
        "population": 2225728,
        "flagUrl": "https://flagcdn.com/ga.svg",
        "unMember": true,
        "area": 267668.0
    },
    {
        "countryName": "Saudi Arabia",
        "countryCode": "SAU",
        "region": "Asia",
        "population": 34813867,
        "flagUrl": "https://flagcdn.com/sa.svg",
        "unMember": true,
        "area": 2149690.0
    },
    {
        "countryName": "Dominican Republic",
        "countryCode": "DOM",
        "region": "Americas",
        "population": 10847904,
        "flagUrl": "https://flagcdn.com/do.svg",
        "unMember": true,
        "area": 48671.0
    },
    {
        "countryName": "Saint Pierre and Miquelon",
        "countryCode": "SPM",
        "region": "Americas",
        "population": 6069,
        "flagUrl": "https://flagcdn.com/pm.svg",
        "unMember": false,
        "area": 242.0
    },
    {
        "countryName": "Faroe Islands",
        "countryCode": "FRO",
        "region": "Europe",
        "population": 48865,
        "flagUrl": "https://flagcdn.com/fo.svg",
        "unMember": false,
        "area": 1393.0
    },
    {
        "countryName": "Kiribati",
        "countryCode": "KIR",
        "region": "Oceania",
        "population": 119446,
        "flagUrl": "https://flagcdn.com/ki.svg",
        "unMember": true,
        "area": 811.0
    },
    {
        "countryName": "Vanuatu",
        "countryCode": "VUT",
        "region": "Oceania",
        "population": 307150,
        "flagUrl": "https://flagcdn.com/vu.svg",
        "unMember": true,
        "area": 12189.0
    },
    {
        "countryName": "Hungary",
        "countryCode": "HUN",
        "region": "Europe",
        "population": 9749763,
        "flagUrl": "https://flagcdn.com/hu.svg",
        "unMember": true,
        "area": 93028.0
    },
    {
        "countryName": "South Georgia",
        "countryCode": "SGS",
        "region": "Antarctic",
        "population": 30,
        "flagUrl": "https://flagcdn.com/gs.svg",
        "unMember": false,
        "area": 3903.0
    },
    {
        "countryName": "Yemen",
        "countryCode": "YEM",
        "region": "Asia",
        "population": 29825968,
        "flagUrl": "https://flagcdn.com/ye.svg",
        "unMember": true,
        "area": 527968.0
    },
    {
        "countryName": "French Guiana",
        "countryCode": "GUF",
        "region": "Americas",
        "population": 254541,
        "flagUrl": "https://flagcdn.com/gf.svg",
        "unMember": false,
        "area": 83534.0
    },
    {
        "countryName": "Seychelles",
        "countryCode": "SYC",
        "region": "Africa",
        "population": 98462,
        "flagUrl": "https://flagcdn.com/sc.svg",
        "unMember": true,
        "area": 452.0
    },
    {
        "countryName": "American Samoa",
        "countryCode": "ASM",
        "region": "Oceania",
        "population": 55197,
        "flagUrl": "https://flagcdn.com/as.svg",
        "unMember": false,
        "area": 199.0
    },
    {
        "countryName": "Cyprus",
        "countryCode": "CYP",
        "region": "Europe",
        "population": 1207361,
        "flagUrl": "https://flagcdn.com/cy.svg",
        "unMember": true,
        "area": 9251.0
    },
    {
        "countryName": "Libya",
        "countryCode": "LBY",
        "region": "Africa",
        "population": 6871287,
        "flagUrl": "https://flagcdn.com/ly.svg",
        "unMember": true,
        "area": 1759540.0
    },
    {
        "countryName": "Israel",
        "countryCode": "ISR",
        "region": "Asia",
        "population": 9216900,
        "flagUrl": "https://flagcdn.com/il.svg",
        "unMember": true,
        "area": 20770.0
    },
    {
        "countryName": "Vietnam",
        "countryCode": "VNM",
        "region": "Asia",
        "population": 97338583,
        "flagUrl": "https://flagcdn.com/vn.svg",
        "unMember": true,
        "area": 331212.0
    },
    {
        "countryName": "Slovenia",
        "countryCode": "SVN",
        "region": "Europe",
        "population": 2100126,
        "flagUrl": "https://flagcdn.com/si.svg",
        "unMember": true,
        "area": 20273.0
    },
    {
        "countryName": "Iran",
        "countryCode": "IRN",
        "region": "Asia",
        "population": 83992953,
        "flagUrl": "https://flagcdn.com/ir.svg",
        "unMember": true,
        "area": 1648195.0
    },
    {
        "countryName": "Namibia",
        "countryCode": "NAM",
        "region": "Africa",
        "population": 2540916,
        "flagUrl": "https://flagcdn.com/na.svg",
        "unMember": true,
        "area": 825615.0
    },
    {
        "countryName": "Greece",
        "countryCode": "GRC",
        "region": "Europe",
        "population": 10715549,
        "flagUrl": "https://flagcdn.com/gr.svg",
        "unMember": true,
        "area": 131990.0
    },
    {
        "countryName": "Lebanon",
        "countryCode": "LBN",
        "region": "Asia",
        "population": 6825442,
        "flagUrl": "https://flagcdn.com/lb.svg",
        "unMember": true,
        "area": 10452.0
    },
    {
        "countryName": "Malaysia",
        "countryCode": "MYS",
        "region": "Asia",
        "population": 32365998,
        "flagUrl": "https://flagcdn.com/my.svg",
        "unMember": true,
        "area": 330803.0
    },
    {
        "countryName": "Mongolia",
        "countryCode": "MNG",
        "region": "Asia",
        "population": 3278292,
        "flagUrl": "https://flagcdn.com/mn.svg",
        "unMember": true,
        "area": 1564110.0
    },
    {
        "countryName": "\u00c5land Islands",
        "countryCode": "ALA",
        "region": "Europe",
        "population": 29458,
        "flagUrl": "https://flagcdn.com/ax.svg",
        "unMember": false,
        "area": 1580.0
    },
    {
        "countryName": "Georgia",
        "countryCode": "GEO",
        "region": "Asia",
        "population": 3714000,
        "flagUrl": "https://flagcdn.com/ge.svg",
        "unMember": true,
        "area": 69700.0
    },
    {
        "countryName": "Tajikistan",
        "countryCode": "TJK",
        "region": "Asia",
        "population": 9537642,
        "flagUrl": "https://flagcdn.com/tj.svg",
        "unMember": true,
        "area": 143100.0
    },
    {
        "countryName": "Albania",
        "countryCode": "ALB",
        "region": "Europe",
        "population": 2837743,
        "flagUrl": "https://flagcdn.com/al.svg",
        "unMember": true,
        "area": 28748.0
    },
    {
        "countryName": "Dominica",
        "countryCode": "DMA",
        "region": "Americas",
        "population": 71991,
        "flagUrl": "https://flagcdn.com/dm.svg",
        "unMember": true,
        "area": 751.0
    },
    {
        "countryName": "Turkmenistan",
        "countryCode": "TKM",
        "region": "Asia",
        "population": 6031187,
        "flagUrl": "https://flagcdn.com/tm.svg",
        "unMember": true,
        "area": 488100.0
    },
    {
        "countryName": "Colombia",
        "countryCode": "COL",
        "region": "Americas",
        "population": 50882884,
        "flagUrl": "https://flagcdn.com/co.svg",
        "unMember": true,
        "area": 1141748.0
    },
    {
        "countryName": "Heard Island and McDonald Islands",
        "countryCode": "HMD",
        "region": "Antarctic",
        "population": 0,
        "flagUrl": "https://flagcdn.com/hm.svg",
        "unMember": false,
        "area": 412.0
    },
    {
        "countryName": "Venezuela",
        "countryCode": "VEN",
        "region": "Americas",
        "population": 28435943,
        "flagUrl": "https://flagcdn.com/ve.svg",
        "unMember": true,
        "area": 916445.0
    },
    {
        "countryName": "Guinea",
        "countryCode": "GIN",
        "region": "Africa",
        "population": 13132792,
        "flagUrl": "https://flagcdn.com/gn.svg",
        "unMember": true,
        "area": 245857.0
    },
    {
        "countryName": "South Sudan",
        "countryCode": "SSD",
        "region": "Africa",
        "population": 11193729,
        "flagUrl": "https://flagcdn.com/ss.svg",
        "unMember": true,
        "area": 619745.0
    },
    {
        "countryName": "Ukraine",
        "countryCode": "UKR",
        "region": "Europe",
        "population": 44134693,
        "flagUrl": "https://flagcdn.com/ua.svg",
        "unMember": true,
        "area": 603500.0
    },
    {
        "countryName": "Slovakia",
        "countryCode": "SVK",
        "region": "Europe",
        "population": 5458827,
        "flagUrl": "https://flagcdn.com/sk.svg",
        "unMember": true,
        "area": 49037.0
    },
    {
        "countryName": "Italy",
        "countryCode": "ITA",
        "region": "Europe",
        "population": 59554023,
        "flagUrl": "https://flagcdn.com/it.svg",
        "unMember": true,
        "area": 301336.0
    },
    {
        "countryName": "Falkland Islands",
        "countryCode": "FLK",
        "region": "Americas",
        "population": 2563,
        "flagUrl": "https://flagcdn.com/fk.svg",
        "unMember": false,
        "area": 12173.0
    },
    {
        "countryName": "Guadeloupe",
        "countryCode": "GLP",
        "region": "Americas",
        "population": 400132,
        "flagUrl": "https://flagcdn.com/gp.svg",
        "unMember": false,
        "area": 1628.0
    },
    {
        "countryName": "Honduras",
        "countryCode": "HND",
        "region": "Americas",
        "population": 9904608,
        "flagUrl": "https://flagcdn.com/hn.svg",
        "unMember": true,
        "area": 112492.0
    },
    {
        "countryName": "Montenegro",
        "countryCode": "MNE",
        "region": "Europe",
        "population": 621718,
        "flagUrl": "https://flagcdn.com/me.svg",
        "unMember": true,
        "area": 13812.0
    },
    {
        "countryName": "Estonia",
        "countryCode": "EST",
        "region": "Europe",
        "population": 1331057,
        "flagUrl": "https://flagcdn.com/ee.svg",
        "unMember": true,
        "area": 45227.0
    },
    {
        "countryName": "Brazil",
        "countryCode": "BRA",
        "region": "Americas",
        "population": 212559409,
        "flagUrl": "https://flagcdn.com/br.svg",
        "unMember": true,
        "area": 8515767.0
    },
    {
        "countryName": "Mauritius",
        "countryCode": "MUS",
        "region": "Africa",
        "population": 1265740,
        "flagUrl": "https://flagcdn.com/mu.svg",
        "unMember": true,
        "area": 2040.0
    },
    {
        "countryName": "Thailand",
        "countryCode": "THA",
        "region": "Asia",
        "population": 69799978,
        "flagUrl": "https://flagcdn.com/th.svg",
        "unMember": true,
        "area": 513120.0
    },
    {
        "countryName": "Bolivia",
        "countryCode": "BOL",
        "region": "Americas",
        "population": 11673029,
        "flagUrl": "https://flagcdn.com/bo.svg",
        "unMember": true,
        "area": 1098581.0
    },
    {
        "countryName": "Sweden",
        "countryCode": "SWE",
        "region": "Europe",
        "population": 10353442,
        "flagUrl": "https://flagcdn.com/se.svg",
        "unMember": true,
        "area": 450295.0
    },
    {
        "countryName": "Guernsey",
        "countryCode": "GGY",
        "region": "Europe",
        "population": 62999,
        "flagUrl": "https://flagcdn.com/gg.svg",
        "unMember": false,
        "area": 78.0
    },
    {
        "countryName": "Zambia",
        "countryCode": "ZMB",
        "region": "Africa",
        "population": 18383956,
        "flagUrl": "https://flagcdn.com/zm.svg",
        "unMember": true,
        "area": 752612.0
    },
    {
        "countryName": "Eritrea",
        "countryCode": "ERI",
        "region": "Africa",
        "population": 5352000,
        "flagUrl": "https://flagcdn.com/er.svg",
        "unMember": true,
        "area": 117600.0
    },
    {
        "countryName": "Kazakhstan",
        "countryCode": "KAZ",
        "region": "Asia",
        "population": 18754440,
        "flagUrl": "https://flagcdn.com/kz.svg",
        "unMember": true,
        "area": 2724900.0
    },
    {
        "countryName": "Morocco",
        "countryCode": "MAR",
        "region": "Africa",
        "population": 36910558,
        "flagUrl": "https://flagcdn.com/ma.svg",
        "unMember": true,
        "area": 446550.0
    },
    {
        "countryName": "Jordan",
        "countryCode": "JOR",
        "region": "Asia",
        "population": 10203140,
        "flagUrl": "https://flagcdn.com/jo.svg",
        "unMember": true,
        "area": 89342.0
    },
    {
        "countryName": "Myanmar",
        "countryCode": "MMR",
        "region": "Asia",
        "population": 54409794,
        "flagUrl": "https://flagcdn.com/mm.svg",
        "unMember": true,
        "area": 676578.0
    },
    {
        "countryName": "San Marino",
        "countryCode": "SMR",
        "region": "Europe",
        "population": 33938,
        "flagUrl": "https://flagcdn.com/sm.svg",
        "unMember": true,
        "area": 61.0
    },
    {
        "countryName": "Palau",
        "countryCode": "PLW",
        "region": "Oceania",
        "population": 18092,
        "flagUrl": "https://flagcdn.com/pw.svg",
        "unMember": true,
        "area": 459.0
    },
    {
        "countryName": "Mayotte",
        "countryCode": "MYT",
        "region": "Africa",
        "population": 226915,
        "flagUrl": "https://flagcdn.com/yt.svg",
        "unMember": false,
        "area": 374.0
    },
    {
        "countryName": "United States Minor Outlying Islands",
        "countryCode": "UMI",
        "region": "Americas",
        "population": 300,
        "flagUrl": "https://flagcdn.com/um.svg",
        "unMember": false,
        "area": 34.2
    },
    {
        "countryName": "Czechia",
        "countryCode": "CZE",
        "region": "Europe",
        "population": 10698896,
        "flagUrl": "https://flagcdn.com/cz.svg",
        "unMember": true,
        "area": 78865.0
    },
    {
        "countryName": "Jamaica",
        "countryCode": "JAM",
        "region": "Americas",
        "population": 2961161,
        "flagUrl": "https://flagcdn.com/jm.svg",
        "unMember": true,
        "area": 10991.0
    },
    {
        "countryName": "Kyrgyzstan",
        "countryCode": "KGZ",
        "region": "Asia",
        "population": 6591600,
        "flagUrl": "https://flagcdn.com/kg.svg",
        "unMember": true,
        "area": 199951.0
    },
    {
        "countryName": "Sudan",
        "countryCode": "SDN",
        "region": "Africa",
        "population": 43849269,
        "flagUrl": "https://flagcdn.com/sd.svg",
        "unMember": true,
        "area": 1886068.0
    },
    {
        "countryName": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
        "countryCode": "STP",
        "region": "Africa",
        "population": 219161,
        "flagUrl": "https://flagcdn.com/st.svg",
        "unMember": true,
        "area": 964.0
    },
    {
        "countryName": "Gibraltar",
        "countryCode": "GIB",
        "region": "Europe",
        "population": 33691,
        "flagUrl": "https://flagcdn.com/gi.svg",
        "unMember": false,
        "area": 6.0
    },
    {
        "countryName": "Niger",
        "countryCode": "NER",
        "region": "Africa",
        "population": 24206636,
        "flagUrl": "https://flagcdn.com/ne.svg",
        "unMember": true,
        "area": 1267000.0
    },
    {
        "countryName": "Caribbean Netherlands",
        "countryCode": "BES",
        "region": "Americas",
        "population": 25987,
        "flagUrl": "https://flagcdn.com/bq.svg",
        "unMember": false,
        "area": 328.0
    },
    {
        "countryName": "Australia",
        "countryCode": "AUS",
        "region": "Oceania",
        "population": 25687041,
        "flagUrl": "https://flagcdn.com/au.svg",
        "unMember": true,
        "area": 7692024.0
    },
    {
        "countryName": "Luxembourg",
        "countryCode": "LUX",
        "region": "Europe",
        "population": 632275,
        "flagUrl": "https://flagcdn.com/lu.svg",
        "unMember": true,
        "area": 2586.0
    },
    {
        "countryName": "Sint Maarten",
        "countryCode": "SXM",
        "region": "Americas",
        "population": 40812,
        "flagUrl": "https://flagcdn.com/sx.svg",
        "unMember": false,
        "area": 34.0
    },
    {
        "countryName": "Lesotho",
        "countryCode": "LSO",
        "region": "Africa",
        "population": 2142252,
        "flagUrl": "https://flagcdn.com/ls.svg",
        "unMember": true,
        "area": 30355.0
    },
    {
        "countryName": "Poland",
        "countryCode": "POL",
        "region": "Europe",
        "population": 37950802,
        "flagUrl": "https://flagcdn.com/pl.svg",
        "unMember": true,
        "area": 312679.0
    },
    {
        "countryName": "Guam",
        "countryCode": "GUM",
        "region": "Oceania",
        "population": 168783,
        "flagUrl": "https://flagcdn.com/gu.svg",
        "unMember": false,
        "area": 549.0
    },
    {
        "countryName": "Japan",
        "countryCode": "JPN",
        "region": "Asia",
        "population": 125836021,
        "flagUrl": "https://flagcdn.com/jp.svg",
        "unMember": true,
        "area": 377930.0
    },
    {
        "countryName": "Liberia",
        "countryCode": "LBR",
        "region": "Africa",
        "population": 5057677,
        "flagUrl": "https://flagcdn.com/lr.svg",
        "unMember": true,
        "area": 111369.0
    },
    {
        "countryName": "Cape Verde",
        "countryCode": "CPV",
        "region": "Africa",
        "population": 555988,
        "flagUrl": "https://flagcdn.com/cv.svg",
        "unMember": true,
        "area": 4033.0
    },
    {
        "countryName": "Isle of Man",
        "countryCode": "IMN",
        "region": "Europe",
        "population": 85032,
        "flagUrl": "https://flagcdn.com/im.svg",
        "unMember": false,
        "area": 572.0
    },
    {
        "countryName": "Burundi",
        "countryCode": "BDI",
        "region": "Africa",
        "population": 11890781,
        "flagUrl": "https://flagcdn.com/bi.svg",
        "unMember": true,
        "area": 27834.0
    },
    {
        "countryName": "Papua New Guinea",
        "countryCode": "PNG",
        "region": "Oceania",
        "population": 8947027,
        "flagUrl": "https://flagcdn.com/pg.svg",
        "unMember": true,
        "area": 462840.0
    },
    {
        "countryName": "Uganda",
        "countryCode": "UGA",
        "region": "Africa",
        "population": 45741000,
        "flagUrl": "https://flagcdn.com/ug.svg",
        "unMember": true,
        "area": 241550.0
    },
    {
        "countryName": "Afghanistan",
        "countryCode": "AFG",
        "region": "Asia",
        "population": 40218234,
        "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "unMember": true,
        "area": 652230.0
    },
    {
        "countryName": "Wallis and Futuna",
        "countryCode": "WLF",
        "region": "Oceania",
        "population": 11750,
        "flagUrl": "https://flagcdn.com/wf.svg",
        "unMember": false,
        "area": 142.0
    },
    {
        "countryName": "Central African Republic",
        "countryCode": "CAF",
        "region": "Africa",
        "population": 4829764,
        "flagUrl": "https://flagcdn.com/cf.svg",
        "unMember": true,
        "area": 622984.0
    },
    {
        "countryName": "Vatican City",
        "countryCode": "VAT",
        "region": "Europe",
        "population": 451,
        "flagUrl": "https://flagcdn.com/va.svg",
        "unMember": true,
        "area": 0.44
    },
    {
        "countryName": "France",
        "countryCode": "FRA",
        "region": "Europe",
        "population": 67391582,
        "flagUrl": "https://flagcdn.com/fr.svg",
        "unMember": true,
        "area": 551695.0
    },
    {
        "countryName": "United States",
        "countryCode": "USA",
        "region": "Americas",
        "population": 329484123,
        "flagUrl": "https://flagcdn.com/us.svg",
        "unMember": true,
        "area": 9372610.0
    },
    {
        "countryName": "Timor-Leste",
        "countryCode": "TLS",
        "region": "Asia",
        "population": 1318442,
        "flagUrl": "https://flagcdn.com/tl.svg",
        "unMember": true,
        "area": 14874.0
    },
    {
        "countryName": "Botswana",
        "countryCode": "BWA",
        "region": "Africa",
        "population": 2351625,
        "flagUrl": "https://flagcdn.com/bw.svg",
        "unMember": true,
        "area": 582000.0
    },
    {
        "countryName": "Austria",
        "countryCode": "AUT",
        "region": "Europe",
        "population": 8917205,
        "flagUrl": "https://flagcdn.com/at.svg",
        "unMember": true,
        "area": 83871.0
    },
    {
        "countryName": "Belgium",
        "countryCode": "BEL",
        "region": "Europe",
        "population": 11555997,
        "flagUrl": "https://flagcdn.com/be.svg",
        "unMember": true,
        "area": 30528.0
    },
    {
        "countryName": "Greenland",
        "countryCode": "GRL",
        "region": "Americas",
        "population": 56367,
        "flagUrl": "https://flagcdn.com/gl.svg",
        "unMember": false,
        "area": 2166086.0
    },
    {
        "countryName": "Portugal",
        "countryCode": "PRT",
        "region": "Europe",
        "population": 10305564,
        "flagUrl": "https://flagcdn.com/pt.svg",
        "unMember": true,
        "area": 92090.0
    },
    {
        "countryName": "Laos",
        "countryCode": "LAO",
        "region": "Asia",
        "population": 7275556,
        "flagUrl": "https://flagcdn.com/la.svg",
        "unMember": true,
        "area": 236800.0
    },
    {
        "countryName": "Guatemala",
        "countryCode": "GTM",
        "region": "Americas",
        "population": 16858333,
        "flagUrl": "https://flagcdn.com/gt.svg",
        "unMember": true,
        "area": 108889.0
    },
    {
        "countryName": "Liechtenstein",
        "countryCode": "LIE",
        "region": "Europe",
        "population": 38137,
        "flagUrl": "https://flagcdn.com/li.svg",
        "unMember": true,
        "area": 160.0
    },
    {
        "countryName": "Solomon Islands",
        "countryCode": "SLB",
        "region": "Oceania",
        "population": 686878,
        "flagUrl": "https://flagcdn.com/sb.svg",
        "unMember": true,
        "area": 28896.0
    },
    {
        "countryName": "Switzerland",
        "countryCode": "CHE",
        "region": "Europe",
        "population": 8654622,
        "flagUrl": "https://flagcdn.com/ch.svg",
        "unMember": true,
        "area": 41284.0
    },
    {
        "countryName": "Palestine",
        "countryCode": "PSE",
        "region": "Asia",
        "population": 4803269,
        "flagUrl": "https://flagcdn.com/ps.svg",
        "unMember": false,
        "area": 6220.0
    },
    {
        "countryName": "Ireland",
        "countryCode": "IRL",
        "region": "Europe",
        "population": 4994724,
        "flagUrl": "https://flagcdn.com/ie.svg",
        "unMember": true,
        "area": 70273.0
    },
    {
        "countryName": "Saint Martin",
        "countryCode": "MAF",
        "region": "Americas",
        "population": 38659,
        "flagUrl": "https://flagcdn.com/mf.svg",
        "unMember": false,
        "area": 53.0
    },
    {
        "countryName": "Syria",
        "countryCode": "SYR",
        "region": "Asia",
        "population": 17500657,
        "flagUrl": "https://flagcdn.com/sy.svg",
        "unMember": true,
        "area": 185180.0
    },
    {
        "countryName": "Bangladesh",
        "countryCode": "BGD",
        "region": "Asia",
        "population": 164689383,
        "flagUrl": "https://flagcdn.com/bd.svg",
        "unMember": true,
        "area": 147570.0
    },
    {
        "countryName": "Djibouti",
        "countryCode": "DJI",
        "region": "Africa",
        "population": 988002,
        "flagUrl": "https://flagcdn.com/dj.svg",
        "unMember": true,
        "area": 23200.0
    },
    {
        "countryName": "Ghana",
        "countryCode": "GHA",
        "region": "Africa",
        "population": 31072945,
        "flagUrl": "https://flagcdn.com/gh.svg",
        "unMember": true,
        "area": 238533.0
    },
    {
        "countryName": "Denmark",
        "countryCode": "DNK",
        "region": "Europe",
        "population": 5831404,
        "flagUrl": "https://flagcdn.com/dk.svg",
        "unMember": true,
        "area": 43094.0
    },
    {
        "countryName": "Oman",
        "countryCode": "OMN",
        "region": "Asia",
        "population": 5106622,
        "flagUrl": "https://flagcdn.com/om.svg",
        "unMember": true,
        "area": 309500.0
    },
    {
        "countryName": "Bouvet Island",
        "countryCode": "BVT",
        "region": "Antarctic",
        "population": 0,
        "flagUrl": "https://flagcdn.com/bv.svg",
        "unMember": false,
        "area": 49.0
    },
    {
        "countryName": "Bahamas",
        "countryCode": "BHS",
        "region": "Americas",
        "population": 393248,
        "flagUrl": "https://flagcdn.com/bs.svg",
        "unMember": true,
        "area": 13943.0
    },
    {
        "countryName": "Algeria",
        "countryCode": "DZA",
        "region": "Africa",
        "population": 44700000,
        "flagUrl": "https://flagcdn.com/dz.svg",
        "unMember": true,
        "area": 2381741.0
    },
    {
        "countryName": "Haiti",
        "countryCode": "HTI",
        "region": "Americas",
        "population": 11402533,
        "flagUrl": "https://flagcdn.com/ht.svg",
        "unMember": true,
        "area": 27750.0
    },
    {
        "countryName": "Ivory Coast",
        "countryCode": "CIV",
        "region": "Africa",
        "population": 26378275,
        "flagUrl": "https://flagcdn.com/ci.svg",
        "unMember": true,
        "area": 322463.0
    },
    {
        "countryName": "El Salvador",
        "countryCode": "SLV",
        "region": "Americas",
        "population": 6486201,
        "flagUrl": "https://flagcdn.com/sv.svg",
        "unMember": true,
        "area": 21041.0
    },
    {
        "countryName": "Netherlands",
        "countryCode": "NLD",
        "region": "Europe",
        "population": 16655799,
        "flagUrl": "https://flagcdn.com/nl.svg",
        "unMember": true,
        "area": 41850.0
    },
    {
        "countryName": "Philippines",
        "countryCode": "PHL",
        "region": "Asia",
        "population": 109581085,
        "flagUrl": "https://flagcdn.com/ph.svg",
        "unMember": true,
        "area": 342353.0
    },
    {
        "countryName": "Grenada",
        "countryCode": "GRD",
        "region": "Americas",
        "population": 112519,
        "flagUrl": "https://flagcdn.com/gd.svg",
        "unMember": true,
        "area": 344.0
    },
    {
        "countryName": "Norway",
        "countryCode": "NOR",
        "region": "Europe",
        "population": 5379475,
        "flagUrl": "https://flagcdn.com/no.svg",
        "unMember": true,
        "area": 323802.0
    },
    {
        "countryName": "Cook Islands",
        "countryCode": "COK",
        "region": "Oceania",
        "population": 18100,
        "flagUrl": "https://flagcdn.com/ck.svg",
        "unMember": false,
        "area": 236.0
    },
    {
        "countryName": "Andorra",
        "countryCode": "AND",
        "region": "Europe",
        "population": 77265,
        "flagUrl": "https://flagcdn.com/ad.svg",
        "unMember": true,
        "area": 468.0
    },
    {
        "countryName": "Cocos (Keeling) Islands",
        "countryCode": "CCK",
        "region": "Oceania",
        "population": 544,
        "flagUrl": "https://flagcdn.com/cc.svg",
        "unMember": false,
        "area": 14.0
    },
    {
        "countryName": "Mali",
        "countryCode": "MLI",
        "region": "Africa",
        "population": 20250834,
        "flagUrl": "https://flagcdn.com/ml.svg",
        "unMember": true,
        "area": 1240192.0
    },
    {
        "countryName": "Tokelau",
        "countryCode": "TKL",
        "region": "Oceania",
        "population": 1411,
        "flagUrl": "https://flagcdn.com/tk.svg",
        "unMember": false,
        "area": 12.0
    },
    {
        "countryName": "Tonga",
        "countryCode": "TON",
        "region": "Oceania",
        "population": 105697,
        "flagUrl": "https://flagcdn.com/to.svg",
        "unMember": true,
        "area": 747.0
    },
    {
        "countryName": "Benin",
        "countryCode": "BEN",
        "region": "Africa",
        "population": 12123198,
        "flagUrl": "https://flagcdn.com/bj.svg",
        "unMember": true,
        "area": 112622.0
    },
    {
        "countryName": "Togo",
        "countryCode": "TGO",
        "region": "Africa",
        "population": 8278737,
        "flagUrl": "https://flagcdn.com/tg.svg",
        "unMember": true,
        "area": 56785.0
    },
    {
        "countryName": "Madagascar",
        "countryCode": "MDG",
        "region": "Africa",
        "population": 27691019,
        "flagUrl": "https://flagcdn.com/mg.svg",
        "unMember": true,
        "area": 587041.0
    },
    {
        "countryName": "Anguilla",
        "countryCode": "AIA",
        "region": "Americas",
        "population": 13452,
        "flagUrl": "https://flagcdn.com/ai.svg",
        "unMember": false,
        "area": 91.0
    },
    {
        "countryName": "Canada",
        "countryCode": "CAN",
        "region": "Americas",
        "population": 38005238,
        "flagUrl": "https://flagcdn.com/ca.svg",
        "unMember": true,
        "area": 9984670.0
    },
    {
        "countryName": "Armenia",
        "countryCode": "ARM",
        "region": "Asia",
        "population": 2963234,
        "flagUrl": "https://flagcdn.com/am.svg",
        "unMember": true,
        "area": 29743.0
    },
    {
        "countryName": "British Indian Ocean Territory",
        "countryCode": "IOT",
        "region": "Africa",
        "population": 3000,
        "flagUrl": "https://flagcdn.com/io.svg",
        "unMember": false,
        "area": 60.0
    },
    {
        "countryName": "Nigeria",
        "countryCode": "NGA",
        "region": "Africa",
        "population": 206139587,
        "flagUrl": "https://flagcdn.com/ng.svg",
        "unMember": true,
        "area": 923768.0
    },
    {
        "countryName": "Belize",
        "countryCode": "BLZ",
        "region": "Americas",
        "population": 397621,
        "flagUrl": "https://flagcdn.com/bz.svg",
        "unMember": true,
        "area": 22966.0
    },
    {
        "countryName": "Saint Barth\u00e9lemy",
        "countryCode": "BLM",
        "region": "Americas",
        "population": 4255,
        "flagUrl": "https://flagcdn.com/bl.svg",
        "unMember": false,
        "area": 21.0
    },
    {
        "countryName": "Lithuania",
        "countryCode": "LTU",
        "region": "Europe",
        "population": 2794700,
        "flagUrl": "https://flagcdn.com/lt.svg",
        "unMember": true,
        "area": 65300.0
    },
    {
        "countryName": "New Caledonia",
        "countryCode": "NCL",
        "region": "Oceania",
        "population": 271960,
        "flagUrl": "https://flagcdn.com/nc.svg",
        "unMember": false,
        "area": 18575.0
    },
    {
        "countryName": "Russia",
        "countryCode": "RUS",
        "region": "Europe",
        "population": 144104080,
        "flagUrl": "https://flagcdn.com/ru.svg",
        "unMember": true,
        "area": 17098242.0
    },
    {
        "countryName": "Cayman Islands",
        "countryCode": "CYM",
        "region": "Americas",
        "population": 65720,
        "flagUrl": "https://flagcdn.com/ky.svg",
        "unMember": false,
        "area": 264.0
    },
    {
        "countryName": "Moldova",
        "countryCode": "MDA",
        "region": "Europe",
        "population": 2617820,
        "flagUrl": "https://flagcdn.com/md.svg",
        "unMember": true,
        "area": 33846.0
    },
    {
        "countryName": "Croatia",
        "countryCode": "HRV",
        "region": "Europe",
        "population": 4047200,
        "flagUrl": "https://flagcdn.com/hr.svg",
        "unMember": true,
        "area": 56594.0
    },
    {
        "countryName": "Serbia",
        "countryCode": "SRB",
        "region": "Europe",
        "population": 6908224,
        "flagUrl": "https://flagcdn.com/rs.svg",
        "unMember": true,
        "area": 88361.0
    },
    {
        "countryName": "Malta",
        "countryCode": "MLT",
        "region": "Europe",
        "population": 525285,
        "flagUrl": "https://flagcdn.com/mt.svg",
        "unMember": true,
        "area": 316.0
    },
    {
        "countryName": "French Polynesia",
        "countryCode": "PYF",
        "region": "Oceania",
        "population": 280904,
        "flagUrl": "https://flagcdn.com/pf.svg",
        "unMember": false,
        "area": 4167.0
    },
    {
        "countryName": "Latvia",
        "countryCode": "LVA",
        "region": "Europe",
        "population": 1901548,
        "flagUrl": "https://flagcdn.com/lv.svg",
        "unMember": true,
        "area": 64559.0
    },
    {
        "countryName": "Chile",
        "countryCode": "CHL",
        "region": "Americas",
        "population": 19116209,
        "flagUrl": "https://flagcdn.com/cl.svg",
        "unMember": true,
        "area": 756102.0
    },
    {
        "countryName": "Finland",
        "countryCode": "FIN",
        "region": "Europe",
        "population": 5530719,
        "flagUrl": "https://flagcdn.com/fi.svg",
        "unMember": true,
        "area": 338424.0
    },
    {
        "countryName": "Germany",
        "countryCode": "DEU",
        "region": "Europe",
        "population": 83240525,
        "flagUrl": "https://flagcdn.com/de.svg",
        "unMember": true,
        "area": 357114.0
    },
    {
        "countryName": "New Zealand",
        "countryCode": "NZL",
        "region": "Oceania",
        "population": 5084300,
        "flagUrl": "https://flagcdn.com/nz.svg",
        "unMember": true,
        "area": 270467.0
    },
    {
        "countryName": "Antarctica",
        "countryCode": "ATA",
        "region": "Antarctic",
        "population": 1000,
        "flagUrl": "https://flagcdn.com/aq.svg",
        "unMember": false,
        "area": 14000000.0
    },
    {
        "countryName": "Indonesia",
        "countryCode": "IDN",
        "region": "Asia",
        "population": 273523621,
        "flagUrl": "https://flagcdn.com/id.svg",
        "unMember": true,
        "area": 1904569.0
    },
    {
        "countryName": "Maldives",
        "countryCode": "MDV",
        "region": "Asia",
        "population": 540542,
        "flagUrl": "https://flagcdn.com/mv.svg",
        "unMember": true,
        "area": 300.0
    },
    {
        "countryName": "Pitcairn Islands",
        "countryCode": "PCN",
        "region": "Oceania",
        "population": 56,
        "flagUrl": "https://flagcdn.com/pn.svg",
        "unMember": false,
        "area": 47.0
    },
    {
        "countryName": "Cameroon",
        "countryCode": "CMR",
        "region": "Africa",
        "population": 26545864,
        "flagUrl": "https://flagcdn.com/cm.svg",
        "unMember": true,
        "area": 475442.0
    },
    {
        "countryName": "Western Sahara",
        "countryCode": "ESH",
        "region": "Africa",
        "population": 510713,
        "flagUrl": "https://flagcdn.com/eh.svg",
        "unMember": false,
        "area": 266000.0
    },
    {
        "countryName": "Brunei",
        "countryCode": "BRN",
        "region": "Asia",
        "population": 437483,
        "flagUrl": "https://flagcdn.com/bn.svg",
        "unMember": true,
        "area": 5765.0
    },
    {
        "countryName": "Guyana",
        "countryCode": "GUY",
        "region": "Americas",
        "population": 786559,
        "flagUrl": "https://flagcdn.com/gy.svg",
        "unMember": true,
        "area": 214969.0
    },
    {
        "countryName": "Tanzania",
        "countryCode": "TZA",
        "region": "Africa",
        "population": 59734213,
        "flagUrl": "https://flagcdn.com/tz.svg",
        "unMember": true,
        "area": 945087.0
    },
    {
        "countryName": "Chad",
        "countryCode": "TCD",
        "region": "Africa",
        "population": 16425859,
        "flagUrl": "https://flagcdn.com/td.svg",
        "unMember": true,
        "area": 1284000.0
    },
    {
        "countryName": "French Southern and Antarctic Lands",
        "countryCode": "ATF",
        "region": "Antarctic",
        "population": 400,
        "flagUrl": "https://flagcdn.com/tf.svg",
        "unMember": false,
        "area": 7747.0
    },
    {
        "countryName": "Cambodia",
        "countryCode": "KHM",
        "region": "Asia",
        "population": 16718971,
        "flagUrl": "https://flagcdn.com/kh.svg",
        "unMember": true,
        "area": 181035.0
    },
    {
        "countryName": "Qatar",
        "countryCode": "QAT",
        "region": "Asia",
        "population": 2881060,
        "flagUrl": "https://flagcdn.com/qa.svg",
        "unMember": true,
        "area": 11586.0
    },
    {
        "countryName": "Argentina",
        "countryCode": "ARG",
        "region": "Americas",
        "population": 45376763,
        "flagUrl": "https://flagcdn.com/ar.svg",
        "unMember": true,
        "area": 2780400.0
    },
    {
        "countryName": "Iraq",
        "countryCode": "IRQ",
        "region": "Asia",
        "population": 40222503,
        "flagUrl": "https://flagcdn.com/iq.svg",
        "unMember": true,
        "area": 438317.0
    },
    {
        "countryName": "Bhutan",
        "countryCode": "BTN",
        "region": "Asia",
        "population": 771612,
        "flagUrl": "https://flagcdn.com/bt.svg",
        "unMember": true,
        "area": 38394.0
    },
    {
        "countryName": "Niue",
        "countryCode": "NIU",
        "region": "Oceania",
        "population": 1470,
        "flagUrl": "https://flagcdn.com/nu.svg",
        "unMember": false,
        "area": 260.0
    },
    {
        "countryName": "South Korea",
        "countryCode": "KOR",
        "region": "Asia",
        "population": 51780579,
        "flagUrl": "https://flagcdn.com/kr.svg",
        "unMember": true,
        "area": 100210.0
    },
    {
        "countryName": "Hong Kong",
        "countryCode": "HKG",
        "region": "Asia",
        "population": 7500700,
        "flagUrl": "https://flagcdn.com/hk.svg",
        "unMember": false,
        "area": 1104.0
    },
    {
        "countryName": "North Macedonia",
        "countryCode": "MKD",
        "region": "Europe",
        "population": 2077132,
        "flagUrl": "https://flagcdn.com/mk.svg",
        "unMember": true,
        "area": 25713.0
    },
    {
        "countryName": "Burkina Faso",
        "countryCode": "BFA",
        "region": "Africa",
        "population": 20903278,
        "flagUrl": "https://flagcdn.com/bf.svg",
        "unMember": true,
        "area": 272967.0
    },
    {
        "countryName": "Puerto Rico",
        "countryCode": "PRI",
        "region": "Americas",
        "population": 3194034,
        "flagUrl": "https://flagcdn.com/pr.svg",
        "unMember": false,
        "area": 8870.0
    },
    {
        "countryName": "Ethiopia",
        "countryCode": "ETH",
        "region": "Africa",
        "population": 114963583,
        "flagUrl": "https://flagcdn.com/et.svg",
        "unMember": true,
        "area": 1104300.0
    }
]

const idCountryInfo = document.querySelector('#countryInfo');
function showCountryInfo() {
    idCountryInfo.innerHTML = ''; 
    let  str = '';
    for (country of countryList) {
         str += `<div class="col-md-4 col-sm-12 col-lg-3">
            <div class="card">
                <img src="${country.flagUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${country.countryName}</h5>
                <p class="card-text">
                    {
                    "countryCode": "${country.countryCode}",
                    "region": "${country.region}",
                    "population": ${country.population},
                    "unMember": ${country.unMember}
                    "area": ${country.area}
                    }
                </p>
                <a href="#" class="btn btn-primary">More...</a>
                </div>
            </div>
            </div>`
    }
    idCountryInfo.innerHTML = str;
}
showCountryInfo();