// GENERATED from the family sheets and the Unions sheet by build-treedata.py — do not hand-edit.
// Source: wb21.xlsx
// Build: player
const TREE_DATA = {
 "Rhydian": {
  "pc": "Rhydian",
  "generations": [
   [
    {
     "id": "gp_pat",
     "label": "Paternal\nGrandparents",
     "role": "Paternal Grandparents",
     "status": "dead",
     "ghost": true
    },
    {
     "id": "gp_mat",
     "label": "Maternal\nGrandparents",
     "role": "Maternal Grandparents",
     "status": "dead",
     "ghost": true,
     "members": [
      {
       "id": "p0233",
       "label": "Elifer",
       "status": "dead",
       "role": "Maternal Grandfather"
      }
     ]
    }
   ],
   [
    {
     "id": "p0203",
     "label": "Iorwerth",
     "status": "unknown",
     "age": "45",
     "role": "Father",
     "parentId": "gp_pat",
     "isfather": true
    },
    {
     "id": "p0204",
     "label": "Cwyllog",
     "status": "dead",
     "age": "38",
     "role": "Mother",
     "parentId": "gp_mat",
     "ismother": true
    },
    {
     "id": "p0205",
     "label": "Erbin",
     "status": "alive",
     "age": "46",
     "note": "Married",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0207",
     "label": "Ergyriad",
     "status": "alive",
     "age": "30",
     "note": "Married",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0208",
     "label": "Gwenabwy",
     "status": "alive",
     "age": "35",
     "note": "Has a Woman's Gift.",
     "role": "Aunt Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0209",
     "label": "Leri",
     "status": "dead",
     "age": "29",
     "role": "Aunt Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0216",
     "label": "Hywel",
     "status": "dead",
     "age": "38",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0217",
     "label": "Erfyn",
     "status": "dead",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0219",
     "label": "Iorwenna",
     "status": "dead",
     "age": "31",
     "role": "Aunt Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0223",
     "label": "Dyfnwal",
     "status": "alive",
     "age": "37",
     "role": "Uncle Maternal (Guardian of Hywel’s daughters)",
     "parentId": "gp_mat"
    },
    {
     "id": "p0224",
     "label": "Maelog",
     "status": "alive",
     "age": "28",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0225",
     "label": "Dinan",
     "status": "alive",
     "age": "44",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0234",
     "label": "Eudaf",
     "status": "dead",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0235",
     "label": "Ffernfael",
     "status": "alive",
     "age": "48",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0236",
     "label": "Garbonian",
     "status": "dead",
     "age": "45",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    }
   ],
   [
    {
     "id": "p0198",
     "label": "Rhydian",
     "status": "alive",
     "age": "30",
     "union": "u1",
     "mad": "Mad since 494 (Love (Family) fumble) — whereabouts unknown",
     "standIn": "p0404",
     "role": "PC Knight",
     "pc": true,
     "parentId": "p0203"
    },
    {
     "id": "p0404",
     "label": "Galcas",
     "status": "alive",
     "note": "Rhydian's full brother (same father and mother). Played in Rhydian's place from 494 while Rhydian is mad.",
     "union": "u1",
     "playing": "Played while his brother Rhydian is mad",
     "role": "Brother",
     "parentId": "p0203"
    },
    {
     "id": "p0199",
     "label": "Heledd",
     "status": "alive",
     "age": "24",
     "note": "courageous but reckless,",
     "role": "Wife",
     "spouseOf": "p0198",
     "iswife": true
    },
    {
     "id": "p0206",
     "label": "Vaddon",
     "status": "alive",
     "age": "26",
     "note": "Knighted 494. Left on a quest 494 (kin event) — returns 499 (5 years). Gains 2£ and 300 Glory per year while away.",
     "away": "Away on a quest — expected back 499",
     "role": "Paternal cousin",
     "parentId": "p0205"
    },
    {
     "id": "p0210",
     "label": "Tegfan",
     "status": "alive",
     "age": "15",
     "role": "Paternal cousin",
     "parentId": "p0208"
    },
    {
     "id": "p0211",
     "label": "Morfwen",
     "status": "alive",
     "age": "12",
     "role": "Paternal cousin",
     "parentId": "p0208"
    },
    {
     "id": "p0212",
     "label": "Heilwen",
     "status": "alive",
     "age": "11",
     "role": "Paternal cousin",
     "parentId": "p0208"
    },
    {
     "id": "p0213",
     "label": "Anest",
     "status": "alive",
     "age": "9",
     "role": "Paternal cousin",
     "parentId": "p0209"
    },
    {
     "id": "p0214",
     "label": "Ryrid",
     "status": "alive",
     "age": "7",
     "role": "Paternal cousin",
     "parentId": "p0209"
    },
    {
     "id": "p0215",
     "label": "Gwenith",
     "status": "alive",
     "age": "6",
     "role": "Paternal cousin",
     "parentId": "p0209"
    },
    {
     "id": "p0218",
     "label": "Eleri",
     "status": "alive",
     "age": "14",
     "role": "Maternal cousin",
     "parentId": "p0217"
    },
    {
     "id": "p0220",
     "label": "Seiriol",
     "status": "alive",
     "age": "15",
     "role": "Maternal cousin",
     "parentId": "p0216"
    },
    {
     "id": "p0221",
     "label": "Tegwared",
     "status": "alive",
     "age": "13",
     "role": "Maternal cousin",
     "parentId": "p0216"
    },
    {
     "id": "p0222",
     "label": "Celain",
     "status": "alive",
     "age": "11",
     "role": "Maternal cousin",
     "parentId": "p0216"
    },
    {
     "id": "p0226",
     "label": "Gwenwyn",
     "status": "dead",
     "age": "22",
     "role": "Maternal cousin",
     "parentId": "p0225"
    },
    {
     "id": "p0227",
     "label": "Gromer",
     "status": "alive",
     "age": "24",
     "role": "Maternal cousin",
     "parentId": "p0225"
    },
    {
     "id": "p0228",
     "label": "Ifan",
     "status": "alive",
     "age": "22",
     "role": "Maternal cousin",
     "parentId": "p0225"
    },
    {
     "id": "p0229",
     "label": "Beofric",
     "status": "alive",
     "age": "30",
     "note": "Lineage man to Rhydian (winter 491). Left on a long quest 493 — returns 509 (3d6 = 16 years). Gains 2£ and 300 Glory per year while away. Carries a dove given by Rhydian.",
     "union": "u2",
     "away": "Away on a long quest — expected back 509",
     "role": "Half-Brother (Paternal)",
     "parentId": "p0203"
    },
    {
     "id": "p0230",
     "label": "Elffin",
     "status": "dead",
     "age": "28",
     "note": "Died at Terrabil 491 — took the blow meant for Rhydian.",
     "union": "u2",
     "died": "491",
     "role": "Half-Brother (Paternal)",
     "parentId": "p0203"
    },
    {
     "id": "p0237",
     "label": "Dafydd",
     "status": "alive",
     "age": "2",
     "parentId": "p0208",
     "role": "Paternal cousin"
    }
   ],
   [
    {
     "id": "p0200",
     "label": "Cattegirn",
     "status": "alive",
     "age": "8",
     "note": "Born 486 (GM, Oct 2026). 494: page to Sir Agragan at Cholderton.",
     "union": "u4",
     "role": "Son",
     "parentId": "p0198"
    },
    {
     "id": "p0201",
     "label": "Aeres",
     "status": "alive",
     "age": "6",
     "union": "u4",
     "role": "Daughter",
     "parentId": "p0198"
    },
    {
     "id": "p0202",
     "label": "Glast",
     "status": "alive",
     "age": "6",
     "union": "u4",
     "role": "Son",
     "parentId": "p0198"
    },
    {
     "id": "p0405",
     "label": "Gwladus",
     "status": "alive",
     "age": "0",
     "note": "Born winter 493/494, healthy. Mother: Heledd.",
     "union": "u4",
     "role": "Daughter",
     "parentId": "p0198"
    }
   ]
  ],
  "unions": [
   {
    "id": "u1",
    "type": "Marriage",
    "a": "p0203",
    "aName": "Iorwerth",
    "b": "p0204",
    "bName": "Cwyllog",
    "ended": "She died",
    "children": [
     "p0198",
     "p0404"
    ]
   },
   {
    "id": "u2",
    "type": "Liaison",
    "a": "p0203",
    "aName": "Iorwerth",
    "b": null,
    "bName": "another woman",
    "unnamed": true,
    "children": [
     "p0229",
     "p0230"
    ]
   },
   {
    "id": "u4",
    "type": "Marriage",
    "a": "p0198",
    "aName": "Rhydian",
    "b": "p0199",
    "bName": "Heledd",
    "began": "487",
    "children": [
     "p0200",
     "p0201",
     "p0202",
     "p0405"
    ]
   }
  ],
  "entourage": [
   {
    "id": "p0231",
    "label": "Pedrog",
    "role": "Chaplain",
    "status": "alive"
   },
   {
    "id": "p0232",
    "label": "Ithel",
    "role": "",
    "status": "alive"
   },
   {
    "id": "p0394",
    "label": "Bleddyn",
    "role": "Dog Boy",
    "status": "alive",
    "age": "18",
    "note": "Dog Boy of Stapleford — keeps the hounds."
   }
  ]
 },
 "Gwegon": {
  "pc": "Gwegon",
  "generations": [
   [
    {
     "id": "gp_pat",
     "label": "Paternal\nGrandparents",
     "role": "Paternal Grandparents",
     "status": "dead",
     "ghost": true
    },
    {
     "id": "gp_mat",
     "label": "Maternal\nGrandparents",
     "role": "Maternal Grandparents",
     "status": "dead",
     "ghost": true
    }
   ],
   [
    {
     "id": "p0245",
     "label": "Gwgawn",
     "status": "alive",
     "age": "50",
     "role": "Father",
     "parentId": "gp_pat",
     "isfather": true
    },
    {
     "id": "p0246",
     "label": "Glesni",
     "status": "dead",
     "age": "45",
     "note": "Died winter 490. Survival roll r1=2→r2=9.",
     "died": "490",
     "role": "Mother",
     "parentId": "gp_mat",
     "ismother": true
    },
    {
     "id": "p0247",
     "label": "Maelgwn",
     "status": "alive",
     "age": "86",
     "glory": "8420",
     "note": "illegitimate",
     "role": "Great Uncle Paternal · Knight",
     "parentId": "gp_pat"
    },
    {
     "id": "p0248",
     "label": "Glewlwyd",
     "status": "alive",
     "age": "56",
     "note": "illegitimate",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0249",
     "label": "Glinneu",
     "status": "alive",
     "age": "55",
     "note": "illegitimate",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0250",
     "label": "Gwallawg",
     "status": "dead",
     "age": "53",
     "note": "illegitimate",
     "died": "492",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0251",
     "label": "Gwenddoleu",
     "status": "alive",
     "age": "53",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0252",
     "label": "Arddun",
     "status": "alive",
     "age": "53",
     "note": "Has a Woman's Gift.",
     "role": "Aunt Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0253",
     "label": "Cyngar",
     "status": "alive",
     "age": "51",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0254",
     "label": "Gwrfoddw",
     "status": "alive",
     "age": "49",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0255",
     "label": "Gwriad",
     "status": "dead",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0256",
     "label": "Gwydre",
     "status": "alive",
     "age": "49",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0257",
     "label": "Ellylw",
     "status": "dead",
     "role": "Aunt Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0258",
     "label": "Gwaeddan",
     "status": "dead",
     "age": "43",
     "note": "Has a Woman's Gift.",
     "role": "Aunt Maternal",
     "parentId": "gp_mat"
    }
   ],
   [
    {
     "id": "p0238",
     "label": "Gwegon",
     "status": "alive",
     "age": "30",
     "union": "u5",
     "role": "PC Knight",
     "pc": true,
     "parentId": "p0245"
    },
    {
     "id": "p0239",
     "label": "Marchlew",
     "status": "alive",
     "age": "26",
     "glory": "500",
     "note": "Holds Shrewton (enfeoffed).",
     "union": "u5",
     "role": "Brother",
     "parentId": "p0245"
    },
    {
     "id": "p0022",
     "label": "Lady Adwen",
     "status": "alive",
     "age": "25",
     "glory": "740",
     "note": "Has a Woman's Gift. Her courage is contagious in a way that feels almost unnatural.",
     "role": "Wife",
     "spouseOf": "p0238",
     "iswife": true
    },
    {
     "id": "p0244",
     "label": "Anarawd",
     "status": "alive",
     "age": "29",
     "glory": "450",
     "role": "Concubine",
     "formerSpouseOf": "p0238"
    },
    {
     "id": "p0259",
     "label": "Gogyvwlch",
     "status": "alive",
     "age": "27",
     "role": "Paternal cousin",
     "parentId": "p0248"
    },
    {
     "id": "p0260",
     "label": "Gwenfrewy",
     "status": "dead",
     "age": "24",
     "note": "Died winter 490. Survival roll r1=1→r2=7.",
     "died": "490",
     "role": "Paternal cousin",
     "parentId": "p0248"
    },
    {
     "id": "p0261",
     "label": "Ceinwen",
     "status": "alive",
     "age": "26",
     "note": "Has a Woman's Gift.",
     "role": "Paternal cousin",
     "parentId": "p0248"
    },
    {
     "id": "p0262",
     "label": "Caradog",
     "status": "dead",
     "age": "22",
     "note": "Died winter 490. Survival roll r1=1→r2=4.",
     "died": "490",
     "role": "Paternal cousin",
     "parentId": "p0249"
    },
    {
     "id": "p0263",
     "label": "Cadrawd",
     "status": "alive",
     "age": "23",
     "role": "Paternal cousin",
     "parentId": "p0249"
    },
    {
     "id": "p0264",
     "label": "Einion",
     "status": "alive",
     "age": "22",
     "role": "Paternal cousin",
     "parentId": "p0250"
    },
    {
     "id": "p0265",
     "label": "Rhufon",
     "status": "alive",
     "age": "25",
     "role": "Paternal cousin",
     "parentId": "p0251"
    },
    {
     "id": "p0266",
     "label": "Gwair",
     "status": "alive",
     "age": "24",
     "role": "Paternal cousin",
     "parentId": "p0251"
    },
    {
     "id": "p0267",
     "label": "Gwenllian",
     "status": "alive",
     "age": "22",
     "note": "Has a Woman's Gift.",
     "role": "Paternal cousin",
     "parentId": "p0251"
    },
    {
     "id": "p0268",
     "label": "Teleri",
     "status": "alive",
     "age": "22",
     "note": "Has a Woman's Gift.",
     "role": "Paternal cousin",
     "parentId": "p0251"
    },
    {
     "id": "p0269",
     "label": "Preiddin",
     "status": "alive",
     "age": "22",
     "role": "Paternal cousin",
     "parentId": "p0252"
    },
    {
     "id": "p0270",
     "label": "Morfudd",
     "status": "alive",
     "age": "18",
     "role": "Paternal cousin",
     "parentId": "p0252"
    },
    {
     "id": "p0271",
     "label": "Ffraid",
     "status": "alive",
     "age": "18",
     "role": "Paternal cousin",
     "parentId": "p0252"
    },
    {
     "id": "p0272",
     "label": "Annwyl",
     "status": "alive",
     "age": "19",
     "role": "Paternal cousin",
     "parentId": "p0252"
    },
    {
     "id": "p0273",
     "label": "Bradwen",
     "status": "alive",
     "age": "26",
     "note": "Has a Woman's Gift.",
     "role": "Paternal cousin",
     "parentId": "p0252"
    },
    {
     "id": "p0274",
     "label": "Caerwyn",
     "status": "alive",
     "age": "26",
     "role": "Maternal cousin",
     "parentId": "p0254"
    },
    {
     "id": "p0275",
     "label": "Tanwen",
     "status": "alive",
     "age": "26",
     "note": "Has a Woman's Gift.",
     "role": "Maternal cousin",
     "parentId": "p0254"
    },
    {
     "id": "p0276",
     "label": "Morwenna",
     "status": "alive",
     "age": "18",
     "role": "Maternal cousin",
     "parentId": "p0254"
    },
    {
     "id": "p0277",
     "label": "Lleucu",
     "status": "alive",
     "age": "16",
     "role": "Maternal cousin",
     "parentId": "p0254"
    },
    {
     "id": "p0278",
     "label": "Cynhaval",
     "status": "alive",
     "age": "12",
     "role": "Maternal cousin",
     "parentId": "p0255"
    },
    {
     "id": "p0279",
     "label": "Dwynwen",
     "status": "alive",
     "age": "23",
     "note": "Has a Woman's Gift.",
     "role": "Maternal cousin",
     "parentId": "p0255"
    },
    {
     "id": "p0280",
     "label": "Elen",
     "status": "alive",
     "age": "21",
     "role": "Maternal cousin",
     "parentId": "p0255"
    },
    {
     "id": "p0281",
     "label": "Tesni",
     "status": "alive",
     "age": "6",
     "role": "Maternal cousin",
     "parentId": "p0255"
    },
    {
     "id": "p0282",
     "label": "Tegeirian",
     "status": "alive",
     "age": "26",
     "note": "Has a Woman's Gift.",
     "role": "Maternal cousin",
     "parentId": "p0255"
    },
    {
     "id": "p0283",
     "label": "Eluned",
     "status": "alive",
     "age": "25",
     "note": "Has a Woman's Gift.",
     "role": "Maternal cousin",
     "parentId": "p0255"
    },
    {
     "id": "p0284",
     "label": "Mabli",
     "status": "alive",
     "age": "22",
     "role": "Maternal cousin",
     "parentId": "p0256"
    },
    {
     "id": "p0285",
     "label": "Alarch",
     "status": "alive",
     "age": "18",
     "role": "Maternal cousin",
     "parentId": "p0256"
    },
    {
     "id": "p0286",
     "label": "Nesta",
     "status": "alive",
     "age": "18",
     "role": "Maternal cousin",
     "parentId": "p0256"
    },
    {
     "id": "p0287",
     "label": "Erfai",
     "status": "dead",
     "age": "14",
     "died": "492",
     "role": "Maternal cousin",
     "parentId": "p0257"
    },
    {
     "id": "p0288",
     "label": "Emyr",
     "status": "alive",
     "age": "14",
     "role": "Maternal cousin",
     "parentId": "p0257"
    },
    {
     "id": "p0289",
     "label": "Gwerful",
     "status": "alive",
     "age": "13",
     "role": "Maternal cousin",
     "parentId": "p0257"
    },
    {
     "id": "p0290",
     "label": "Edern",
     "status": "alive",
     "age": "26",
     "role": "Maternal cousin",
     "parentId": "p0258"
    },
    {
     "id": "p0291",
     "label": "Enniaun",
     "status": "alive",
     "age": "18",
     "role": "Maternal cousin",
     "parentId": "p0258"
    },
    {
     "id": "p0292",
     "label": "Creirwy",
     "status": "alive",
     "age": "25",
     "note": "Has a Woman's Gift.",
     "role": "Maternal cousin",
     "parentId": "p0258"
    },
    {
     "id": "p0293",
     "label": "Essyllt",
     "status": "alive",
     "age": "21",
     "note": "Has a Woman's Gift.",
     "role": "Maternal cousin",
     "parentId": "p0258"
    },
    {
     "id": "p0294",
     "label": "Hunydd",
     "status": "alive",
     "age": "17",
     "role": "Maternal cousin",
     "parentId": "p0258"
    }
   ],
   [
    {
     "id": "p0240",
     "label": "Owena",
     "status": "alive",
     "age": "3",
     "union": "u6",
     "role": "Daughter",
     "parentId": "p0238"
    },
    {
     "id": "p0241",
     "label": "Tathal",
     "status": "alive",
     "age": "2",
     "union": "u6",
     "role": "Son",
     "parentId": "p0238"
    },
    {
     "id": "p0242",
     "label": "Lleueu",
     "status": "alive",
     "union": "u7",
     "role": "Illegitimate Daughter",
     "parentId": "p0238",
     "illegitimate": true
    },
    {
     "id": "p0243",
     "label": "Gwrfelling",
     "status": "alive",
     "union": "u8",
     "role": "Illegitimate Son",
     "parentId": "p0238",
     "illegitimate": true
    },
    {
     "id": "p0295",
     "label": "Nest",
     "status": "alive",
     "age": "3",
     "note": "Born 490. Healthy girl. Mother: Creirwy.",
     "parentId": "p0292",
     "role": "First cousin once removed"
    },
    {
     "id": "p0296",
     "label": "Aeron",
     "status": "alive",
     "age": "3",
     "note": "Born 490. Healthy girl. Mother: Mabli.",
     "parentId": "p0284",
     "role": "First cousin once removed"
    },
    {
     "id": "p0297",
     "label": "Obie",
     "status": "alive",
     "union": "u9",
     "role": "Illegitimate Daughter",
     "parentId": "p0238",
     "illegitimate": true
    },
    {
     "id": "p0298",
     "label": "Bronwyn",
     "status": "alive",
     "union": "u10",
     "role": "Illegitimate Daughter",
     "parentId": "p0238",
     "illegitimate": true
    },
    {
     "id": "p0305",
     "label": "Rhian",
     "status": "alive",
     "age": "4",
     "parentId": "p0279",
     "role": "First cousin once removed"
    },
    {
     "id": "p0306",
     "label": "Luned",
     "status": "alive",
     "age": "4",
     "parentId": "p0289",
     "role": "First cousin once removed"
    },
    {
     "id": "p0307",
     "label": "Gwen",
     "status": "alive",
     "age": "3",
     "note": "Born 490. Healthy girl. Mother: Anarawd (concubine). Father: Gwegon.",
     "union": "u7",
     "role": "Illegitimate Daughter (of Anarawd)",
     "parentId": "p0238",
     "illegitimate": true
    },
    {
     "id": "p0308",
     "label": "Alwen",
     "status": "dead",
     "age": "2",
     "note": "Born 490. Healthy girl. Mother: Ceinwen. Died winter 492, age 2 — Illness.",
     "died": "492",
     "parentId": "p0261",
     "role": "First cousin once removed"
    },
    {
     "id": "p0309",
     "label": "Ysbail",
     "status": "alive",
     "age": "3",
     "note": "Born 490. SICKLY boy. Mother: Eluned.",
     "parentId": "p0283",
     "role": "First cousin once removed"
    },
    {
     "id": "p0400",
     "label": "Morganwg",
     "status": "alive",
     "age": "0",
     "note": "Born 494. Mother: Lady Adwen. Father: Gwegon.",
     "union": "u6",
     "role": "Son",
     "parentId": "p0238"
    }
   ]
  ],
  "unions": [
   {
    "id": "u5",
    "type": "Marriage",
    "a": "p0245",
    "aName": "Gwgawn",
    "b": "p0246",
    "bName": "Glesni",
    "ended": "490 — she died",
    "children": [
     "p0238",
     "p0239"
    ]
   },
   {
    "id": "u6",
    "type": "Marriage",
    "a": "p0238",
    "aName": "Gwegon",
    "b": "p0022",
    "bName": "Lady Adwen",
    "children": [
     "p0240",
     "p0241",
     "p0400"
    ]
   },
   {
    "id": "u7",
    "type": "Concubinage",
    "a": "p0238",
    "aName": "Gwegon",
    "b": "p0244",
    "bName": "Anarawd",
    "children": [
     "p0242",
     "p0307"
    ]
   },
   {
    "id": "u8",
    "type": "Liaison",
    "a": "p0238",
    "aName": "Gwegon",
    "b": null,
    "bName": "a woman of the manor",
    "unnamed": true,
    "children": [
     "p0243"
    ]
   },
   {
    "id": "u9",
    "type": "Liaison",
    "a": "p0238",
    "aName": "Gwegon",
    "b": null,
    "bName": "a village woman",
    "unnamed": true,
    "children": [
     "p0297"
    ]
   },
   {
    "id": "u10",
    "type": "Liaison",
    "a": "p0238",
    "aName": "Gwegon",
    "b": null,
    "bName": "a village woman",
    "unnamed": true,
    "children": [
     "p0298"
    ]
   },
   {
    "id": "u27",
    "type": "Liaison",
    "a": "p0238",
    "aName": "Gwegon",
    "b": "p0088",
    "bName": "Lunet",
    "children": []
   }
  ],
  "entourage": [
   {
    "id": "p0299",
    "label": "Tathan",
    "role": "Chaplain",
    "status": "alive"
   },
   {
    "id": "p0300",
    "label": "Idnerth",
    "role": "Ermit",
    "status": "alive",
    "age": "55+"
   },
   {
    "id": "p0301",
    "label": "Brynn",
    "role": "Fashion Help",
    "status": "alive"
   },
   {
    "id": "p0302",
    "label": "Aswine",
    "role": "Aswine",
    "status": "alive",
    "note": "He is honest but aggressive. Left Gwegon after the Battle of Lindsey (490) and went back to live with the Saxons."
   },
   {
    "id": "p0304",
    "label": "Syr Clydno",
    "role": "Allington (upon Bourne) — Demesne",
    "status": "alive"
   }
  ]
 },
 "Timotheus": {
  "pc": "Timotheus",
  "generations": [
   [
    {
     "id": "gp_pat",
     "label": "Paternal\nGrandparents",
     "role": "Paternal Grandparents",
     "status": "dead",
     "ghost": true
    },
    {
     "id": "gp_mat",
     "label": "Maternal\nGrandparents",
     "role": "Maternal Grandparents",
     "status": "dead",
     "ghost": true
    }
   ],
   [
    {
     "id": "p0314",
     "label": "Crautreic",
     "status": "dead",
     "age": "44",
     "role": "Father",
     "parentId": "gp_pat",
     "isfather": true
    },
    {
     "id": "p0315",
     "label": "Cynfarch",
     "status": "alive",
     "age": "44",
     "note": "Has a Woman's Gift.",
     "role": "Mother",
     "parentId": "gp_mat",
     "ismother": true
    },
    {
     "id": "p0316",
     "label": "Tegfedd",
     "status": "dead",
     "age": "46",
     "glory": "1420",
     "note": "Died winter 490. Survival roll=1.",
     "died": "490",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0317",
     "label": "Deort",
     "status": "alive",
     "age": "38",
     "glory": "1222",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0318",
     "label": "Owain",
     "status": "dead",
     "age": "33",
     "glory": "1120",
     "note": "Killed at Battle of Lindsey 490.",
     "died": "490",
     "role": "Uncle Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0319",
     "label": "Nwython",
     "status": "dead",
     "age": "24",
     "glory": "342",
     "role": "Uncle Maternal (Illegitimate)",
     "parentId": "gp_mat"
    },
    {
     "id": "p0320",
     "label": "Tryamour",
     "status": "alive",
     "age": "33",
     "glory": "54",
     "note": "Widow",
     "role": "Aunt Maternal",
     "parentId": "gp_mat"
    },
    {
     "id": "p0321",
     "label": "Melior",
     "status": "dead",
     "age": "26",
     "glory": "213",
     "note": "Died in childbirth winter 490. Child also died. Tragedy roll cb=20, d6=3.",
     "died": "490",
     "role": "Aunt Maternal",
     "parentId": "gp_mat"
    }
   ],
   [
    {
     "id": "p0310",
     "label": "Timotheus",
     "status": "alive",
     "age": "30",
     "note": "490: Sang at Lindsey victory feast — fumbled Love (Ygraine) passion 19→18. Named Uther's desire for Ygraine publicly before all great lords. Does not remember the words. Went melancholic ~18 weeks. Cared for by Indeg. Spoke to Gorlois in yard at Lincoln on Uther's behalf. | Pursued from 493 by Lady Heledwen, a rich widow. | 494: Letter from Rhydian & Mellyr asking for a true Barguest song. Impassioned Honor and fumbled — Honor −1, mad for one year (494–495); his player plays Elian meanwhile. His song failed; he spent the year trying versions in taverns, and it became famous as a ridiculous version — Rhydian and Mellyr are now known as heroes of the funny song. Holds a prisoner at Laverstock (identity TBD).",
     "union": "u12",
     "mad": "Mad for a year, 494–495 (Honor fumble) — Elian rides in his place",
     "role": "PC Knight",
     "pc": true,
     "parentId": "p0314"
    },
    {
     "id": "p0311",
     "label": "Indeg",
     "status": "alive",
     "age": "40",
     "glory": "2500",
     "note": "2P/14 Glory/Year for Trading | Woman's Gift \"Iron Memory\": never forgets a number, a debt or a deal — recalls every transaction she has witnessed, down to the exact sum and who blinked first.",
     "role": "Wife",
     "spouseOf": "p0310",
     "iswife": true
    },
    {
     "id": "p0322",
     "label": "Elian",
     "status": "alive",
     "age": "27",
     "note": "490: Married Seren (daughter of rich vassal knight) at Lindsey feast — Roderick-approved. | 494: Rode on the Estragales embassy (played while Timotheus was mad). Told Nanteleod he is proud of his cousin. Spent 1£ buying drinks on the road and made many connections.",
     "role": "Paternal cousin",
     "parentId": "p0316"
    },
    {
     "id": "p0323",
     "label": "Pryderi",
     "status": "alive",
     "age": "12",
     "role": "Maternal cousin",
     "parentId": "p0318"
    },
    {
     "id": "p0324",
     "label": "Blaen",
     "status": "alive",
     "age": "22",
     "union": "u12",
     "role": "Brother",
     "parentId": "p0314"
    },
    {
     "id": "p0325",
     "label": "Keepah",
     "status": "dead",
     "age": "21",
     "note": "Died in London, 490.",
     "union": "u12",
     "died": "490",
     "role": "Sister",
     "parentId": "p0314"
    },
    {
     "id": "p0326",
     "label": "Rhirid",
     "status": "alive",
     "age": "21",
     "union": "u12",
     "role": "Brother",
     "parentId": "p0314"
    },
    {
     "id": "p0327",
     "label": "Gwres",
     "status": "alive",
     "age": "20",
     "union": "u12",
     "role": "Brother",
     "parentId": "p0314"
    },
    {
     "id": "p0328",
     "label": "Camlach",
     "status": "alive",
     "age": "17",
     "union": "u12",
     "role": "Brother",
     "parentId": "p0314"
    },
    {
     "id": "p0329",
     "label": "Arianell",
     "status": "alive",
     "age": "14",
     "union": "u12",
     "role": "Sister",
     "parentId": "p0314"
    },
    {
     "id": "p0330",
     "label": "Seren",
     "status": "alive",
     "age": "22",
     "note": "Married Elian (cousin of Timotheus) at Lindsey feast 490. Daughter of a rich vassal knight.",
     "role": "Wife of Elian",
     "spouseOf": "p0322"
    }
   ],
   [
    {
     "id": "p0312",
     "label": "Kepeahr",
     "status": "alive",
     "age": "3",
     "note": "Heir. Born London 490. 492: with Kale now born, Timotheus moves to send Kepeahr away to Elian's household. Named Kepeahr after Keepah.",
     "union": "u13",
     "role": "Son (heir)",
     "parentId": "p0310"
    },
    {
     "id": "p0313",
     "label": "Kale",
     "status": "alive",
     "age": "1",
     "note": "Born 492 (miracle/fae-gift birth, age 39). Subject of the anonymous 'Lady of the Lake' note left at Laverstock. Timotheus's Oath: protect Indeg and Kale.",
     "union": "u13",
     "role": "Son",
     "parentId": "p0310"
    },
    {
     "id": "p0333",
     "label": "Nantcol",
     "status": "alive",
     "age": "6",
     "union": "u16",
     "role": "Illegitimate Son",
     "parentId": "p0310",
     "illegitimate": true
    },
    {
     "id": "p0334",
     "label": "Gwion",
     "status": "dead",
     "age": "4",
     "union": "u18",
     "role": "Illegitimate Son",
     "parentId": "p0310",
     "illegitimate": true
    },
    {
     "id": "p0335",
     "label": "Lleu",
     "status": "alive",
     "age": "8",
     "union": "u15",
     "role": "Illegitimate Son",
     "parentId": "p0310",
     "illegitimate": true
    },
    {
     "id": "p0336",
     "label": "Melangell",
     "status": "alive",
     "age": "8",
     "union": "u15",
     "role": "Illegitimate Daughter",
     "parentId": "p0310",
     "illegitimate": true
    },
    {
     "id": "p0337",
     "label": "Penarddun",
     "status": "alive",
     "age": "7",
     "union": "u17",
     "role": "Illegitimate Daughter",
     "parentId": "p0310",
     "illegitimate": true
    },
    {
     "id": "p0338",
     "label": "Non",
     "status": "alive",
     "age": "6",
     "union": "u16",
     "role": "Illegitimate Daughter",
     "parentId": "p0310",
     "illegitimate": true
    }
   ]
  ],
  "unions": [
   {
    "id": "u12",
    "type": "Marriage",
    "a": "p0314",
    "aName": "Crautreic",
    "b": "p0315",
    "bName": "Cynfarch",
    "ended": "He died",
    "children": [
     "p0310",
     "p0324",
     "p0325",
     "p0326",
     "p0327",
     "p0328",
     "p0329"
    ]
   },
   {
    "id": "u13",
    "type": "Marriage",
    "a": "p0310",
    "aName": "Timotheus",
    "b": "p0311",
    "bName": "Indeg",
    "began": "487",
    "children": [
     "p0312",
     "p0313"
    ]
   },
   {
    "id": "u15",
    "type": "Liaison",
    "a": "p0310",
    "aName": "Timotheus",
    "b": null,
    "bName": "a woman of the Laverstock region",
    "unnamed": true,
    "children": [
     "p0335",
     "p0336"
    ]
   },
   {
    "id": "u16",
    "type": "Liaison",
    "a": "p0310",
    "aName": "Timotheus",
    "b": null,
    "bName": "another woman of the Laverstock region",
    "unnamed": true,
    "children": [
     "p0333",
     "p0338"
    ]
   },
   {
    "id": "u17",
    "type": "Liaison",
    "a": "p0310",
    "aName": "Timotheus",
    "b": null,
    "bName": "a village woman",
    "unnamed": true,
    "children": [
     "p0337"
    ]
   },
   {
    "id": "u18",
    "type": "Liaison",
    "a": "p0310",
    "aName": "Timotheus",
    "b": null,
    "bName": "a village woman",
    "unnamed": true,
    "children": [
     "p0334"
    ]
   },
   {
    "id": "u19",
    "type": "Marriage",
    "a": "p0322",
    "aName": "Elian",
    "b": "p0330",
    "bName": "Seren",
    "began": "490",
    "children": []
   }
  ],
  "entourage": [
   {
    "id": "p0393",
    "label": "Father Elfodd",
    "role": "Chaplain",
    "status": "alive",
    "age": "42",
    "note": "Chaplain of Laverstock (493) after Cledwyn became Bishop of Salisbury."
   },
   {
    "id": "p0332",
    "label": "Tudwal",
    "role": "Monk",
    "status": "alive",
    "age": "51"
   },
   {
    "id": "p0339",
    "label": "Sioned",
    "role": "Nurse",
    "status": "alive"
   }
  ]
 },
 "Agragan": {
  "pc": "Agragan",
  "generations": [
   [
    {
     "id": "gp_pat",
     "label": "Paternal\nGrandparents",
     "role": "Paternal Grandparents",
     "status": "dead",
     "ghost": true
    },
    {
     "id": "gp_mat",
     "label": "Maternal\nGrandparents",
     "role": "Maternal Grandparents",
     "status": "dead",
     "ghost": true
    }
   ],
   [
    {
     "id": "p0345",
     "label": "Dagodoc",
     "status": "dead",
     "age": "59",
     "glory": "2241",
     "role": "Father",
     "parentId": "gp_pat",
     "isfather": true
    },
    {
     "id": "p0346",
     "label": "Govan",
     "status": "alive",
     "age": "59",
     "role": "Great Uncle Paternal",
     "parentId": "gp_pat"
    },
    {
     "id": "p0347",
     "label": "Sulbiu",
     "status": "dead",
     "age": "36",
     "role": "Uncle Paternal (Son of Govan)",
     "parentId": "gp_pat"
    },
    {
     "id": "p0353",
     "label": "Bodara",
     "status": "dead",
     "age": "52",
     "role": "Mother",
     "parentId": "gp_mat",
     "ismother": true
    }
   ],
   [
    {
     "id": "p0341",
     "label": "Agragan",
     "status": "alive",
     "age": "35",
     "note": "Enemy: Sir Bellias (mutual hate, insulted 489). Fumbled Love (Wife) passion 489 (value <15, not incapacitated).| Permanent scar on the chin (duel outside Eburacum 493, worsened by a later accident). Enemy's widow: Lady Angharad (r67). Three tarot omens running to winter 495. | 494: Estragales embassy. At the Carmarthen feast exposed Orcas, Canan's steward, as the poisoner and killed him in mortal combat (Didac refused mercy); cleared Didac. Nanteleod questioned him about Tisbury — now keen to learn what happened to Tarthan.",
     "union": "u20",
     "role": "PC Knight",
     "pc": true,
     "parentId": "p0345"
    },
    {
     "id": "p0023",
     "label": "Lady Gwiona",
     "status": "dead",
     "age": "26",
     "glory": "856",
     "note": "Died 490 struck by lightning (Tragedy roll). Twin boys Roderick and Sinar born 490. Previously noted as changeling — correct to twins.",
     "died": "490",
     "role": "Wife",
     "spouseOf": "p0341",
     "iswife": true
    },
    {
     "id": "p0011",
     "label": "Lady Calire",
     "status": "alive",
     "age": "24",
     "note": "Daughter of Sir Elad. Has a Woman's Gift. Betrothed to Agragan 490 at Lindsey feast; marriage delayed — Agragan away on campaign/trial through 491-492. Wedding held winter 492/493. Dowry 10£ from Sir Elad — also one of Agragan's defenders at the 492 treason trial. | 494: gained Love (Agragan) 10.",
     "role": "Wife (betrothed 490, married 492/493)",
     "spouseOf": "p0341",
     "iswife": true
    },
    {
     "id": "p0348",
     "label": "Sir Eudav",
     "status": "alive",
     "age": "35",
     "note": "Cheated in Oratorie",
     "role": "Maternal cousin",
     "parentId": "gp_mat"
    },
    {
     "id": "p0349",
     "label": "Gilber",
     "status": "alive",
     "age": "26",
     "role": "Paternal cousin",
     "parentId": "p0347"
    },
    {
     "id": "p0350",
     "label": "Gest",
     "status": "alive",
     "age": "28",
     "union": "u20",
     "role": "Younger Brother",
     "parentId": "p0345"
    },
    {
     "id": "p0384",
     "label": "Meleri",
     "status": "alive",
     "age": "28",
     "note": "Has a Woman's Gift.",
     "union": "u20",
     "role": "Sister",
     "parentId": "p0345"
    },
    {
     "id": "p0351",
     "label": "Sir Cynedyr",
     "status": "alive",
     "age": "41",
     "role": "Sister’s Husband (Married to Meleri)",
     "spouseOf": "p0384"
    },
    {
     "id": "p0352",
     "label": "Sir Lovel",
     "status": "dead",
     "age": "40",
     "note": "Died winter 490. Survival roll r1=1→r2=10.",
     "died": "490",
     "role": "Paternal cousin",
     "parentId": "p0346"
    }
   ],
   [
    {
     "id": "p0342",
     "label": "Edar",
     "status": "alive",
     "age": "7",
     "note": "Mother: Lady Gwiona. | 494: page to Sir Gwegon at Broughton.",
     "union": "u21",
     "role": "Son",
     "parentId": "p0341"
    },
    {
     "id": "p0343",
     "label": "Roderick",
     "status": "alive",
     "age": "5",
     "note": "Twin boy (elder). Born 490. Mother: Lady Gwiona (deceased). Father: Agragan.",
     "union": "u21",
     "role": "Son",
     "parentId": "p0341"
    },
    {
     "id": "p0344",
     "label": "Sinar",
     "status": "alive",
     "age": "5",
     "note": "Twin boy (younger). Born 490. Mother: Lady Gwiona (deceased). Father: Agragan.",
     "union": "u21",
     "role": "Son",
     "parentId": "p0341"
    },
    {
     "id": "p0354",
     "label": "Alys",
     "status": "alive",
     "age": "3",
     "note": "Born 490. Healthy girl. Mother: Meleri (Agragan’s sister). Father: Sir Cynedyr.",
     "union": "u24",
     "parentId": "p0384",
     "role": "Niece"
    },
    {
     "id": "p0364",
     "label": "Seren",
     "status": "alive",
     "age": "2",
     "note": "Agragan's daughter, living in Wales. (Consolidated with adjacent blank-relation row.)",
     "union": "u23",
     "role": "Illegitimate Daughter",
     "parentId": "p0341",
     "illegitimate": true
    }
   ]
  ],
  "unions": [
   {
    "id": "u20",
    "type": "Marriage",
    "a": "p0345",
    "aName": "Dagodoc",
    "b": "p0353",
    "bName": "Bodara",
    "ended": "Both dead",
    "children": [
     "p0341",
     "p0350",
     "p0384"
    ]
   },
   {
    "id": "u21",
    "type": "Marriage",
    "a": "p0341",
    "aName": "Agragan",
    "b": "p0023",
    "bName": "Lady Gwiona",
    "began": "485",
    "ended": "490 — she died",
    "children": [
     "p0342",
     "p0343",
     "p0344"
    ]
   },
   {
    "id": "u22",
    "type": "Marriage",
    "a": "p0341",
    "aName": "Agragan",
    "b": "p0011",
    "bName": "Lady Calire",
    "began": "492",
    "children": []
   },
   {
    "id": "u23",
    "type": "Liaison",
    "a": "p0341",
    "aName": "Agragan",
    "b": null,
    "bName": "a woman in Wales",
    "unnamed": true,
    "children": [
     "p0364"
    ]
   },
   {
    "id": "u24",
    "type": "Marriage",
    "a": "p0351",
    "aName": "Sir Cynedyr",
    "b": "p0384",
    "bName": "Meleri",
    "children": [
     "p0354"
    ]
   }
  ],
  "entourage": [
   {
    "id": "p0355",
    "label": "Robyn",
    "role": "Squire",
    "status": "alive",
    "age": "23",
    "note": "492: retained as squire (7£ keep-cost paid)."
   },
   {
    "id": "p0356",
    "label": "Grainne",
    "role": "Druid",
    "status": "alive",
    "age": "62",
    "note": "Midwife"
   },
   {
    "id": "p0357",
    "label": "Richerch",
    "role": "Pagan Priest",
    "status": "alive",
    "age": "55"
   },
   {
    "id": "p0358",
    "label": "Llemenig",
    "role": "Chaplain",
    "status": "alive",
    "age": "68"
   },
   {
    "id": "p0359",
    "label": "Sulien",
    "role": "Miller",
    "status": "alive"
   },
   {
    "id": "p0360",
    "label": "Tegfan",
    "role": "Miller's Son",
    "status": "alive"
   },
   {
    "id": "p0361",
    "label": "Cadi",
    "role": "Millers Daughter",
    "status": "alive"
   },
   {
    "id": "p0019",
    "label": "Sir Gwanon",
    "role": "Squire",
    "status": "alive",
    "age": "28"
   },
   {
    "id": "p0363",
    "label": "Syr Cunvelyn",
    "role": "Seargant",
    "status": "alive",
    "age": "59"
   },
   {
    "id": "p0020",
    "label": "Gorthyn",
    "role": "Squire",
    "status": "alive",
    "age": "24",
    "note": "Count Roderick's bastard. Formerly squire of Sir Caerau, now Agragan's squire."
   },
   {
    "id": "p0366",
    "label": "Sir Rhodri",
    "role": "Knight",
    "status": "alive",
    "age": "33",
    "note": "He is just but cruel, time on the border is hard, difficult decisions need to be made."
   },
   {
    "id": "p0367",
    "label": "Waldema",
    "role": "Boy",
    "status": "alive",
    "age": "19",
    "note": "Boy who looks for his family near Kent"
   },
   {
    "id": "p0368",
    "label": "Tarthan",
    "role": "Knight",
    "status": "dead",
    "age": "28",
    "note": "He is curious but flippant. They value being temperate. Their major passion is love(fey) 17.",
    "died": "492"
   },
   {
    "id": "p0391",
    "label": "Sir Tegid",
    "role": "Knight",
    "status": "alive",
    "note": "Knight of Sir Elad's household. Held Nether Wallop for Lady Calire; now holds it from Agragan (enfeoffed)."
   }
  ]
 },
 "Mellyr": {
  "pc": "Mellyr",
  "generations": [
   [
    {
     "id": "gp_pat",
     "label": "Paternal\nGrandparents",
     "role": "Paternal Grandparents",
     "status": "dead",
     "ghost": true
    },
    {
     "id": "gp_mat",
     "label": "Maternal\nGrandparents",
     "role": "Maternal Grandparents",
     "status": "dead",
     "ghost": true
    }
   ],
   [
    {
     "id": "p0372",
     "label": "Aled",
     "status": "dead",
     "role": "Father",
     "parentId": "gp_pat",
     "isfather": true
    },
    {
     "id": "p0373",
     "label": "Non",
     "status": "alive",
     "age": "43",
     "note": "Has a Woman's Gift.",
     "role": "Mother",
     "parentId": "gp_mat",
     "ismother": true
    },
    {
     "id": "p0374",
     "label": "Gwyn",
     "status": "dead",
     "role": "Uncle Paternal",
     "parentId": "gp_pat"
    }
   ],
   [
    {
     "id": "p0369",
     "label": "Mellyr",
     "status": "alive",
     "age": "25",
     "note": "Pagan. Survived dangerous hunt 489 (aging roll taken).",
     "union": "u25",
     "role": "PC Knight",
     "pc": true,
     "parentId": "p0372"
    },
    {
     "id": "p0370",
     "label": "Nesta",
     "status": "alive",
     "age": "21",
     "note": "Childbirth death rolled 490 and OVERRULED at the table — Nesta survived. Delivered a second daughter, Gwenllian (Blessed ❊ — guaranteed to survive to adulthood). Married Mellyr 489.",
     "role": "Wife",
     "spouseOf": "p0369",
     "iswife": true
    },
    {
     "id": "p0375",
     "label": "Bleddig",
     "status": "alive",
     "role": "Paternal cousin",
     "parentId": "p0374"
    },
    {
     "id": "p0376",
     "label": "Neddig",
     "status": "alive",
     "role": "Paternal cousin",
     "parentId": "p0374"
    },
    {
     "id": "p0377",
     "label": "Rhodri",
     "status": "dead",
     "note": "Died winter 493/494 (kin event at the table). Cause rolled: Violence → battle, fighting.",
     "died": "493",
     "role": "Paternal cousin",
     "parentId": "p0374"
    },
    {
     "id": "p0378",
     "label": "Rhun",
     "status": "unknown",
     "age": "9",
     "role": "Paternal cousin",
     "parentId": "p0374"
    },
    {
     "id": "p0379",
     "label": "Gwefrfawr",
     "status": "unknown",
     "age": "8",
     "role": "Paternal cousin",
     "parentId": "p0374"
    },
    {
     "id": "p0380",
     "label": "Buddfannan",
     "status": "unknown",
     "age": "5",
     "role": "Paternal cousin",
     "parentId": "p0374"
    },
    {
     "id": "p0197",
     "label": "Tangwen (of Anderida)",
     "status": "alive",
     "age": "27",
     "note": "Recovered from Haestingas captivity 492.",
     "role": "Maternal cousin",
     "parentId": "gp_mat"
    }
   ],
   [
    {
     "id": "p0371",
     "label": "Myfanwy",
     "status": "alive",
     "age": "4",
     "note": "Mellyr's daughter by Nesta, born 489.",
     "union": "u26",
     "role": "Daughter",
     "parentId": "p0369"
    },
    {
     "id": "p0383",
     "label": "Gwenllian",
     "status": "alive",
     "age": "3",
     "note": "Mellyr’s second daughter by Nesta, born 490. Blessed ❊ — guaranteed to survive to adulthood.",
     "union": "u26",
     "role": "Daughter",
     "parentId": "p0369"
    }
   ]
  ],
  "unions": [
   {
    "id": "u25",
    "type": "Marriage",
    "a": "p0372",
    "aName": "Aled",
    "b": "p0373",
    "bName": "Non",
    "ended": "He died",
    "children": [
     "p0369"
    ]
   },
   {
    "id": "u26",
    "type": "Marriage",
    "a": "p0369",
    "aName": "Mellyr",
    "b": "p0370",
    "bName": "Nesta",
    "children": [
     "p0371",
     "p0383"
    ]
   }
  ],
  "entourage": [
   {
    "id": "p0381",
    "label": "Bledri",
    "role": "Squire",
    "status": "alive"
   },
   {
    "id": "p0382",
    "label": "Sywno",
    "role": "Manor Priest",
    "status": "alive"
   }
  ]
 }
};
