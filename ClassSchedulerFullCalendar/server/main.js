Meteor.startup(function () {

  if (touroMenClasses.find().count() === 0) {
   var touroMenClassesArray = 
      [
         {
            "code": "EBAN 201",
            "credits": 3,
            "crn": "11006",
            "department": "",
            "instructor": "Prof. S. Saltz",
            "notes": "P-EBAN 102",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Intermediate Accounting I"
         },
         {
            "code": "EBAN 209",
            "credits": 3,
            "crn": "15663",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBAN 102",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Financial Statement Analysis"
         },
         {
            "code": "EBAN 302",
            "credits": 3,
            "crn": "11025",
            "department": "",
            "instructor": "Prof. Y. Newman",
            "notes": "C-EBAN 201",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Not-for-Profit Accounting"
         },
         {
            "code": "EBAN 316",
            "credits": 3,
            "crn": "11031",
            "department": "",
            "instructor": "Prof. S. Bienenstock",
            "notes": "P-EBAN 201 & EBAN 314",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Corporation & Partnership Taxation"
         },
         {
            "code": "EBEN 102",
            "credits": 3,
            "crn": "11039",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBFN 321",
            "credits": 3,
            "crn": "15664",
            "department": "",
            "instructor": "Dr. M. Rosenberg",
            "notes": "P-MAT 120 and EBF 210 (Recommended Finance elective.)",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Portfolio Analysis"
         },
         {
            "code": "EBKN 201",
            "credits": 3,
            "crn": "11142",
            "department": "",
            "instructor": "Dr. J. Stern",
            "notes": "P-EBK 101 ",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Consumer Behavior"
         },
         {
            "code": "EBKN 204",
            "credits": 3,
            "crn": "11144",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBK 101",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Marketing Management"
         },
         {
            "code": "EBMN 101",
            "credits": 3,
            "crn": "11150",
            "department": "",
            "instructor": "Prof. S. Felder",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Principles of Management"
         },
         {
            "code": "EBMN 213",
            "credits": 3,
            "crn": "11152",
            "department": "",
            "instructor": "Prof. I. Klepfish",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Business Law I"
         },
         {
            "code": "EDUN 201",
            "credits": 3,
            "crn": "11162",
            "department": "",
            "instructor": "Prof. M. Ebbin",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Psychosocial Foundations"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "11166",
            "department": "",
            "instructor": "Prof. M. Davidowitz",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "LLEN 100",
            "credits": 3,
            "crn": "11172",
            "department": "",
            "instructor": "Dr. I. Gold",
            "notes": "P-EXAM",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Introduction to English Composition"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "11173",
            "department": "",
            "instructor": "Prof. A. Ratner",
            "notes": "P-LLE 100 or EXAM",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "11174",
            "department": "",
            "instructor": "Prof. M. Farberman",
            "notes": "P-LLE 101 or EXAM",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "LLEN 203",
            "credits": 3,
            "crn": "11176",
            "department": "",
            "instructor": "Dr. I. Elliott",
            "notes": "P-LLE 102 or EXAM",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Business Report Writing"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "11186",
            "department": "",
            "instructor": "Prof. E. Fukunaga",
            "notes": "P-EXAM",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "College Mathematics"
         },
         {
            "code": "MATN 120",
            "credits": 3,
            "crn": "11191",
            "department": "",
            "instructor": "Dr. L. Kaganovskiy",
            "notes": "P-MAT 111 or EXAM",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Pre-Calculus"
         },
         {
            "code": "MATN 121",
            "credits": 4,
            "crn": "11192",
            "department": "",
            "instructor": "Prof. S. Stern",
            "notes": "P-MAT 120",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:35pm"
               }
            ],
            "title": "Calculus I"
         },
         {
            "code": "MATN 202",
            "credits": 3,
            "crn": "15887",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-MAT 201",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Advanced Calculus II"
         },
         {
            "code": "MATN 331",
            "credits": 3,
            "crn": "15892",
            "department": "",
            "instructor": "Dr. B. Rabinowitz",
            "notes": "P-MAT 231",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Mathematics of Compound Interest"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "11244",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Computer Concepts with  Applications"
         },
         {
            "code": "MCON 264",
            "credits": 3,
            "crn": "11250",
            "department": "",
            "instructor": "Prof. Y. Novick",
            "notes": "P-MCO 232",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Data Structures I"
         },
         {
            "code": "POLN 103",
            "credits": 3,
            "crn": "15915",
            "department": "",
            "instructor": "Prof. T. Rozinski",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "International Relations"
         },
         {
            "code": "PSYN 102",
            "credits": 3,
            "crn": "15311",
            "department": "",
            "instructor": "Prof. S. Chavez",
            "notes": "P-PSY 101",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Social Psychology"
         },
         {
            "code": "PSYN 205",
            "credits": 3,
            "crn": "15312",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Psychology of Motivation"
         },
         {
            "code": "SPLN 101",
            "credits": 3,
            "crn": "16513",
            "department": "",
            "instructor": "Prof. P. Bottino",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Fundamentals of Speech"
         },
         {
            "code": "SPLN 308",
            "credits": 3,
            "crn": "16066",
            "department": "",
            "instructor": "Dr. V. Barnwell",
            "notes": "P-None",
            "section": "BA",
            "time": [
               {
                  "day": "MW",
                  "end": "7:00pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Introduction to Hearing & Acoustics"
         },
         {
            "code": "BION  304",
            "credits": 3,
            "crn": "16119",
            "department": "",
            "instructor": "Dr. M. Chowdhury",
            "notes": "P-BIO 102",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Endocrinology"
         },
         {
            "code": "EBAN 102",
            "credits": 3,
            "crn": "10739",
            "department": "",
            "instructor": "Prof. S. Bienenstock",
            "notes": "P-EBAN 101",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Principles of Accounting II"
         },
         {
            "code": "EBAN 202",
            "credits": 3,
            "crn": "11011",
            "department": "",
            "instructor": "Prof. S. Saltz",
            "notes": "P-EBAN 201 and screening exam",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Intermediate Accounting II"
         },
         {
            "code": "EBAN 213",
            "credits": 3,
            "crn": "11022",
            "department": "",
            "instructor": "Prof. B. Langer",
            "notes": "C-EBAN 201",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Cost Accounting"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "11036",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-None",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "EBEN 408",
            "credits": 3,
            "crn": "16153",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-EBE 101, EBE 102, EBF 101",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "International Trade and Monetary Systems"
         },
         {
            "code": "EBFN 220",
            "credits": 3,
            "crn": "16182",
            "department": "",
            "instructor": "Dr. M. Peikes",
            "notes": "P-EBF 101 and MAT 120",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Corporation Finance"
         },
         {
            "code": "EBFN 338",
            "credits": 3,
            "crn": "11106",
            "department": "",
            "instructor": "Dr. M. Rosenberg",
            "notes": "P-EBF 101 and MAT 120",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "International Financial Markets"
         },
         {
            "code": "EBKN 101",
            "credits": 3,
            "crn": "11127",
            "department": "",
            "instructor": "Prof. I. Fisher",
            "notes": "P-None",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Principles of Marketing"
         },
         {
            "code": "EBKN 202",
            "credits": 3,
            "crn": "11143",
            "department": "",
            "instructor": "Dr. J. Stern",
            "notes": "P-EBK 101",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Marketing Research"
         },
         {
            "code": "EBMN 101",
            "credits": 3,
            "crn": "16320",
            "department": "",
            "instructor": "Prof. S. Felder",
            "notes": "P-None",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Principles of Management"
         },
         {
            "code": "EBMN 214",
            "credits": 3,
            "crn": "14183",
            "department": "",
            "instructor": "Prof. I. Klepfish",
            "notes": "P-EBM 213",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Business Law II"
         },
         {
            "code": "EBMN 310",
            "credits": 3,
            "crn": "16322",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBM 101, EBK 101",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Multinational Business Management"
         },
         {
            "code": "HISN 251",
            "credits": 3,
            "crn": "16515",
            "department": "",
            "instructor": "Prof. M. Davidowitz",
            "notes": "P-None",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Jews and Arabs"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "14186",
            "department": "",
            "instructor": "Prof. A. Ratner",
            "notes": "P-LLE 100 or EXAM",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "13511",
            "department": "",
            "instructor": "Prof. M. Farberman",
            "notes": "P-LLE 101 or EXAM",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "LLEN 203",
            "credits": 3,
            "crn": "13515",
            "department": "",
            "instructor": "Dr. I. Elliott",
            "notes": "P-LLE 102 or EXAM",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Business Report Writing"
         },
         {
            "code": "LLEN 220",
            "credits": 3,
            "crn": "11183",
            "department": "",
            "instructor": "Dr. I. Gold",
            "notes": "P-LLE 102 or EXAM",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Survey of Modern Literature I"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "13522",
            "department": "",
            "instructor": "Prof. S. Stern",
            "notes": "P-EXAM",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "College Mathematics"
         },
         {
            "code": "MATN 232",
            "credits": 3,
            "crn": "11223",
            "department": "",
            "instructor": "Dr. B. Rabinowitz",
            "notes": "P-MAT 331",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Quantitative Methods"
         },
         {
            "code": "MATN 240",
            "credits": 3,
            "crn": "11225",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-MAT 120",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Finite Math"
         },
         {
            "code": "MATN 513",
            "credits": 3,
            "crn": "11233",
            "department": "",
            "instructor": "Dr. L. Kaganovskiy",
            "notes": "P-MAT 122",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Differential Equations"
         },
         {
            "code": "MCON 104",
            "credits": 4,
            "crn": "11236",
            "department": "",
            "instructor": "Prof. Y. Lehrman",
            "notes": "P-None. Recommended co-requisite: MCO 141. Not offered in the spring semester. For Computer Science majors.",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Computing Theory and Applications"
         },
         {
            "code": "MCON 148",
            "credits": 3,
            "crn": "11246",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-MCO 140, EBA 101, EBF 101; Not for Computer Majors.",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Advanced Computer Business Applications"
         },
         {
            "code": "POLN 310",
            "credits": 3,
            "crn": "16335",
            "department": "",
            "instructor": "Prof. T. Rozinski",
            "notes": "P-POL 101",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Supreme Court and Constitution"
         },
         {
            "code": "PSYN 210",
            "credits": 3,
            "crn": "11276",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Psychology of Learning"
         },
         {
            "code": "PSYN 335",
            "credits": 3,
            "crn": "11287",
            "department": "",
            "instructor": "Prof. S. Chavez",
            "notes": "P-PSY 101",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Abnormal Psychology"
         },
         {
            "code": "SPLN 101",
            "credits": 3,
            "crn": "14428",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Fundamentals of Speech"
         },
         {
            "code": "SPLN 208",
            "credits": 3,
            "crn": "16514",
            "department": "",
            "instructor": "Prof. P. Bottino",
            "notes": "P-None",
            "section": "BB",
            "time": [
               {
                  "day": "MW",
                  "end": "8:10pm",
                  "start": "7:05pm"
               }
            ],
            "title": "Phonetics"
         },
         {
            "code": "EBAN 301",
            "credits": 3,
            "crn": "11024",
            "department": "",
            "instructor": "Prof. S. Saltz",
            "notes": "P-EBAN 202 & Screening Exam",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Advanced Accounting"
         },
         {
            "code": "EBAN 308",
            "credits": 3,
            "crn": "11026",
            "department": "",
            "instructor": "Dr. C. Snow",
            "notes": "P-EBAN 202; screening exam and 3.0 GPA in Accounting.",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Auditing Principles"
         },
         {
            "code": "EBAN 314",
            "credits": 3,
            "crn": "11028",
            "department": "",
            "instructor": "Prof. S. Bienenstock",
            "notes": "C-EBAN 201",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Taxation I"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "13189",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-None",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "EBEN 212",
            "credits": 3,
            "crn": "16194",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-EBE 101, EBE 102",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Intermediate Microeconomics"
         },
         {
            "code": "EBFN 101",
            "credits": 3,
            "crn": "11066",
            "department": "",
            "instructor": "Dr. M. Peikes",
            "notes": "P-EBE 101 or EBE 102",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Finance"
         },
         {
            "code": "EBFN 210",
            "credits": 3,
            "crn": "11067",
            "department": "",
            "instructor": "Dr. M. Rosenberg",
            "notes": "P-EBF 101 and MAT 120",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Investment Principles"
         },
         {
            "code": "EBKN 315",
            "credits": 3,
            "crn": "11145",
            "department": "",
            "instructor": "Prof. A. Rovt",
            "notes": "P-EBK 101, EBM 101",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Advertising Management"
         },
         {
            "code": "EBKN 505",
            "credits": 3,
            "crn": "16211",
            "department": "",
            "instructor": "Prof. E. Rhein",
            "notes": "P-EBK 101, EBM 101 (This is a blended course with an online component. It meets in person Mondays only.)",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Ecommerce"
         },
         {
            "code": "EBMN 101",
            "credits": 3,
            "crn": "14130",
            "department": "",
            "instructor": "Prof. I. Fisher",
            "notes": "P-None",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Management"
         },
         {
            "code": "EBMN 202",
            "credits": 3,
            "crn": "11151",
            "department": "",
            "instructor": "Dr. J. Stern",
            "notes": "P-EBM 101",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Organizational Theory & Behavior"
         },
         {
            "code": "EBMN 214",
            "credits": 3,
            "crn": "11153",
            "department": "",
            "instructor": "Prof. I. Klepfish",
            "notes": "P-EBM 213",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Business Law II"
         },
         {
            "code": "HISN 221",
            "credits": 3,
            "crn": "11168",
            "department": "",
            "instructor": "Prof. M. Davidowitz",
            "notes": "P-None",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Survey of Modern History II"
         },
         {
            "code": "JSBN 151",
            "credits": 3,
            "crn": "16222",
            "department": "",
            "instructor": "Prof. I. Layosh",
            "notes": "P-None",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Book of Bereishis"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "13509",
            "department": "",
            "instructor": "Prof. J. Horowitz",
            "notes": "P-LLE 100 or  Exam",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "MATN 201",
            "credits": 3,
            "crn": "11194",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-MAT 122",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Advanced Calculus I"
         },
         {
            "code": "MATN 211",
            "credits": 3,
            "crn": "16224",
            "department": "",
            "instructor": "Dr. L. Kaganovskiy",
            "notes": "P-MAT 122",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Linear Algebra"
         },
         {
            "code": "MATN 240",
            "credits": 3,
            "crn": "13555",
            "department": "",
            "instructor": "Prof. S. Stern",
            "notes": "P-MAT 120",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Finite Mathematics"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "11229",
            "department": "",
            "instructor": "Dr. B. Rabinowitz",
            "notes": "P-MAT 111 or EXAM",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Statistics for Social Science Majors"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "13568",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-None",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Computer Concepts with Applications"
         },
         {
            "code": "MCON 141",
            "credits": 3,
            "crn": "11245",
            "department": "",
            "instructor": "TBA",
            "notes": "P/C – MCO 104",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to Programming"
         },
         {
            "code": "MCON 368",
            "credits": 3,
            "crn": "16256",
            "department": "",
            "instructor": "Prof. Y. Novick",
            "notes": "C-MCO 364",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Object Oriented Programming"
         },
         {
            "code": "POLN 101",
            "credits": 3,
            "crn": "11266",
            "department": "",
            "instructor": "Prof. J. Amsel",
            "notes": "P-None",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "American Politics"
         },
         {
            "code": "POLN 244",
            "credits": 3,
            "crn": "15667",
            "department": "",
            "instructor": "Prof. A. Mond",
            "notes": "P-POL 101",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Political Parties and the Electoral Process"
         },
         {
            "code": "PSYN 351",
            "credits": 3,
            "crn": "15313",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Biological Psychology"
         },
         {
            "code": "PSYN 400",
            "credits": 3,
            "crn": "15315",
            "department": "",
            "instructor": "Prof. S. Chavez",
            "notes": "P-PSY 101, This course is an elective in Psychology.",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to Behavioral Therapy"
         },
         {
            "code": "PSYN 402",
            "credits": 3,
            "crn": "16258",
            "department": "",
            "instructor": "Dr. M. Press",
            "notes": "P-PSY 101, This course is an elective in Psychology.",
            "section": "BC",
            "time": [
               {
                  "day": "MW",
                  "end": "9:25pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Clinical Psychology"
         },
         {
            "code": "BION 111",
            "credits": 4,
            "crn": "12824",
            "department": "",
            "instructor": "Dr. I. Fernandopulle",
            "notes": "P-None. For non-science majors. C-BIO 111 Lab Sunday 8:20 PM",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Human Biology Lecture (with Lab)"
         },
         {
            "code": "BION 113",
            "credits": 3,
            "crn": "10718",
            "department": "",
            "instructor": "Dr. I. Fernandopulle",
            "notes": "P-None.  For non-science majors. Not for Speech or Education majors.",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Human Biology Lecture (without Lab)"
         },
         {
            "code": "EBAN 101",
            "credits": 3,
            "crn": "10738",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Principles of Accounting I"
         },
         {
            "code": "EBAN 102",
            "credits": 3,
            "crn": "10981",
            "department": "",
            "instructor": "Prof. S. Bienenstock",
            "notes": "P-EBAN 101",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Principles of Accounting II"
         },
         {
            "code": "EBAN 302",
            "credits": 3,
            "crn": "16265",
            "department": "",
            "instructor": "Prof. B. Langer",
            "notes": "P-EBAN 201",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Not-for-Profit Accounting"
         },
         {
            "code": "EBEN 102",
            "credits": 3,
            "crn": "13205",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBEN 204",
            "credits": 3,
            "crn": "16267",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-EBE 101 and EBE 102",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Money and Banking"
         },
         {
            "code": "EBFN 101",
            "credits": 3,
            "crn": "13314",
            "department": "",
            "instructor": "Dr. M. Rosenberg",
            "notes": "P-MAT 111 & EBE 101 or EBE 102",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Principles of Finance"
         },
         {
            "code": "EBFN 310",
            "credits": 3,
            "crn": "11098",
            "department": "",
            "instructor": "Dr. M. Peikes",
            "notes": "P-EBF 210",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Security Analysis"
         },
         {
            "code": "EBKN 101",
            "credits": 3,
            "crn": "13331",
            "department": "",
            "instructor": "Prof. I. Fisher",
            "notes": "P-None",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Principles of Marketing"
         },
         {
            "code": "EBKN 207",
            "credits": 3,
            "crn": "16284",
            "department": "",
            "instructor": "Prof. E. Rhein",
            "notes": "P-EBK 101 and EBM 101; May be taken in lieu of EBK 408 (Required Marketing Course). (This is a blended course with an online component. It meets in person Mondays only.)",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Social Media Marketing (Mondays only)"
         },
         {
            "code": "EBKN 410",
            "credits": 3,
            "crn": "11147",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBK 101 and EBM 101",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Business to Business Marketing"
         },
         {
            "code": "EBMN 213",
            "credits": 3,
            "crn": "14131",
            "department": "",
            "instructor": "Prof. I. Klepfish",
            "notes": "P-None",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Business Law I"
         },
         {
            "code": "EBMN 320",
            "credits": 3,
            "crn": "11155",
            "department": "",
            "instructor": "Dr. J. Stern",
            "notes": "P-EBM 101",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Entrepreneurship & Small Business Management"
         },
         {
            "code": "EBMN 493",
            "credits": 3,
            "crn": "11156",
            "department": "",
            "instructor": "Prof. A. Rovt",
            "notes": "P-90 credits and 300 level Business courses.",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Business Policy"
         },
         {
            "code": "HISN 206",
            "credits": 3,
            "crn": "16286",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "The Immigrant Experience"
         },
         {
            "code": "LLEN 100",
            "credits": 3,
            "crn": "16288",
            "department": "",
            "instructor": "Prof. J. Horowitz",
            "notes": "P-EXAM",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Introduction to English Composition"
         },
         {
            "code": "MATN 120",
            "credits": 3,
            "crn": "13543",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-MAT 111 or EXAM",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Pre-Calculus"
         },
         {
            "code": "MATN 121",
            "credits": 4,
            "crn": "15352",
            "department": "",
            "instructor": "Prof. L. Kaganovskiy",
            "notes": "P-MAT 120",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:55pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Calculus I"
         },
         {
            "code": "MATN 122",
            "credits": 4,
            "crn": "11193",
            "department": "",
            "instructor": "Prof. S. Stern",
            "notes": "P-MAT 121",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:55pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Calculus II"
         },
         {
            "code": "MCON 517",
            "credits": 3,
            "crn": "11262",
            "department": "",
            "instructor": "Dr. Rabinowitz",
            "notes": "P-Dept. Approval. Does NOT satisfy core computer requirement.",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "VBA: Visual Basic Applications"
         },
         {
            "code": "PSYN 101",
            "credits": 3,
            "crn": "11274",
            "department": "",
            "instructor": "Dr. M. Press",
            "notes": "P-None.",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Introduction to Psychology"
         },
         {
            "code": "PSYN 432",
            "credits": 3,
            "crn": "15317",
            "department": "",
            "instructor": "Prof. S. Chavez",
            "notes": "P-PSY 101",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Neuropsychology"
         },
         {
            "code": "SPLN 101",
            "credits": 3,
            "crn": "16343",
            "department": "",
            "instructor": "Prof. E. Goodman",
            "notes": "P-None",
            "section": "BD",
            "time": [
               {
                  "day": "MW",
                  "end": "10:35pm",
                  "start": "9:30pm"
               }
            ],
            "title": "Fundamentals of Speech"
         },
         {
            "code": "BION 222",
            "credits": 4,
            "crn": "12825",
            "department": "",
            "instructor": "Prof. W. Merdian",
            "notes": "P-BIO 102  C- BIO 222 LAB",
            "section": "BE",
            "time": [
               {
                  "day": "F",
                  "end": "11:30am",
                  "start": " 9:00am"
               }
            ],
            "title": "Anatomy and Physiology I LEC"
         },
         {
            "code": "BION 222",
            "credits": 0,
            "crn": "16344",
            "department": "",
            "instructor": "Prof. W. Merdian",
            "notes": "C-BIO 222 LEC",
            "section": "BE",
            "time": [
               {
                  "day": "F",
                  "end": " 2:00pm",
                  "start": "11:35am"
               }
            ],
            "title": "Anatomy and Physiology I LAB"
         },
         {
            "code": "BION 211",
            "credits": 4,
            "crn": "10720",
            "department": "",
            "instructor": "Dr. B. Chiswell",
            "notes": "P-BIO 102 C-BIO 211 Lab",
            "section": "BE",
            "time": [
               {
                  "day": "F",
                  "end": "11:30am",
                  "start": "9:00am"
               }
            ],
            "title": "Genetics (Has accompanying LAB)"
         },
         {
            "code": "BION 211",
            "credits": 0,
            "crn": "16345",
            "department": "",
            "instructor": "Dr. B. Chiswell",
            "notes": "P-BIO 102 C-BIO 211 Lecture",
            "section": "BE",
            "time": [
               {
                  "day": "F",
                  "end": "2:00pm",
                  "start": "11:35am"
               }
            ],
            "title": "Genetics Lab"
         },
         {
            "code": "BION 311",
            "credits": 3,
            "crn": "10727",
            "department": "",
            "instructor": "Dr. B. Chiswell",
            "notes": "P-BIO 102",
            "section": "BE",
            "time": [
               {
                  "day": "F",
                  "end": "11:30am",
                  "start": "9:00am"
               }
            ],
            "title": "Human Genetics (No lab attached)"
         },
         {
            "code": "BION 113",
            "credits": 3,
            "crn": "16347",
            "department": "",
            "instructor": "Dr. I. Fernandopulle",
            "notes": "P-None.  For non-science majors.  Not for Speech or Education Majors.  Will satisfy science core requirement.",
            "section": "BN",
            "time": [
               {
                  "day": "MW",
                  "end": "5:50pm",
                  "start": "4:40pm"
               }
            ],
            "title": "Human Biology Lecture (with LAB)"
         },
         {
            "code": "BION 111",
            "credits": 4,
            "crn": "16347",
            "department": "",
            "instructor": "Dr. I. Fernandopulle",
            "notes": "P-None. For non-science majors. Will satisfy science core requirement. C-BIO 111 LAB Sunday 8:20 PM",
            "section": "BN",
            "time": [
               {
                  "day": "MW",
                  "end": "5:50pm",
                  "start": "4:40pm"
               }
            ],
            "title": "Human Biology Lecture (without LAB)"
         },
         {
            "code": "JSBN 271",
            "credits": 3,
            "crn": "16290",
            "department": "",
            "instructor": "Prof. I. Layosh",
            "notes": "P-None",
            "section": "BN",
            "time": [
               {
                  "day": "MW",
                  "end": "5:50pm",
                  "start": "4:40pm"
               }
            ],
            "title": "Book of Mishlei"
         },
         {
            "code": "LLEN 221",
            "credits": 3,
            "crn": "16292",
            "department": "",
            "instructor": "Prof. I. Gold",
            "notes": "P-LLE 102 or Exam",
            "section": "BN",
            "time": [
               {
                  "day": "MW",
                  "end": "5:50pm",
                  "start": "4:40pm"
               }
            ],
            "title": "Survey of Modern Literature II"
         },
         {
            "code": "POLN 261",
            "credits": 3,
            "crn": "16294",
            "department": "",
            "instructor": "Prof. A. Mond",
            "notes": "P-None.  May be used for Judaic Studies credit or Political Science credit but not for both.",
            "section": "BN",
            "time": [
               {
                  "day": "MW",
                  "end": "5:50pm",
                  "start": "4:40pm"
               }
            ],
            "title": "Government and Politics of Israel"
         },
         {
            "code": "PSY 101",
            "credits": 3,
            "crn": "16956",
            "department": "",
            "instructor": "Dr. M. Press",
            "notes": "P-None",
            "section": "BN",
            "time": [
               {
                  "day": "MW",
                  "end": "5:50pm",
                  "start": "4:40pm"
               }
            ],
            "title": "Introduction to Psychology"
         },
         {
            "code": "PEDN 160",
            "credits": 1,
            "crn": "11264",
            "department": "",
            "instructor": "Howard Furman",
            "notes": "Physical education courses are offered at Kingsway Jewish Center.",
            "section": "BU",
            "time": [
               {
                  "day": "R",
                  "end": "9:30pm",
                  "start": "7:15pm"
               }
            ],
            "title": "Swimming"
         },
         {
            "code": "PEDN 110",
            "credits": 1,
            "crn": "16957",
            "department": "",
            "instructor": "TBA",
            "notes": "Physical education courses are offered at Kingsway Jewish Center.",
            "section": "BU",
            "time": [
               {
                  "day": "R",
                  "end": "9:35pm",
                  "start": "7:15pm"
               }
            ],
            "title": "Basketball"
         },
         {
            "code": "PEDN 134",
            "credits": 1,
            "crn": "16958",
            "department": "",
            "instructor": "TBA",
            "notes": "Physical education courses are offered at Kingsway Jewish Center.",
            "section": "BU",
            "time": [
               {
                  "day": "R",
                  "end": "9:35pm",
                  "start": "7:15pm"
               }
            ],
            "title": "Physical Fitness"
         },
         {
            "code": "BION 101",
            "credits": 4,
            "crn": "10714",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "P-None, C – BIO 101 LAB Sunday Evening, 4:30 PM – 6:50 PM",
            "section": "BG-1",
            "time": [
               {
                  "day": "M",
                  "end": "8:10pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Principles of Biology I  Lecture"
         },
         {
            "code": "BION 101",
            "credits": 4,
            "crn": "10714",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "P-None, C – BIO 101 LAB (Wednesday, 5:55 PM – 8:10 PM)",
            "section": "BG-2",
            "time": [
               {
                  "day": "M",
                  "end": "8:10pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Principles of Biology I  Lecture"
         },
         {
            "code": "BION 228",
            "credits": 4,
            "crn": "14438",
            "department": "",
            "instructor": "Dr. Z. Leifer",
            "notes": "P-BIO 101 – 102; C-BIO 228 LAB/LEC (Sunday, 4:30 PM – 6:50 PM)",
            "section": "BG",
            "time": [
               {
                  "day": "M",
                  "end": "8:10pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Microbiology Lecture/Lab"
         },
         {
            "code": "CPCN 201",
            "credits": 4,
            "crn": "10737",
            "department": "",
            "instructor": "Dr. E. Kon",
            "notes": "P-CPC 102, C – CPC 201 LAB (Wednesday, 5:55 PM)",
            "section": "BG",
            "time": [
               {
                  "day": "M",
                  "end": "8:10pm",
                  "start": "5:15pm"
               }
            ],
            "title": "Organic Chemistry I Lecture & Recitation (Monday Only)"
         },
         {
            "code": "CPPN 101",
            "credits": 0,
            "crn": "14463",
            "department": "",
            "instructor": "Dr. W. Gutierrez",
            "notes": "P-MAT 120; C-CPP LEC  (Sunday, 4:30 PM)",
            "section": "BQK",
            "time": [
               {
                  "day": "M",
                  "end": "8:10pm",
                  "start": "5:55pm"
               }
            ],
            "title": "General Physics I LAB"
         },
         {
            "code": "BION 222",
            "credits": 4,
            "crn": "14459",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "P-BIO 102, C-BIO 222 LAB (Wed. 8:20-10:55 PM)",
            "section": "BH",
            "time": [
               {
                  "day": "M",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Anatomy and Physiology I  LEC"
         },
         {
            "code": "COCN 411",
            "credits": 3,
            "crn": "10735",
            "department": "",
            "instructor": "TBA",
            "notes": "P-COC 309 – offsite course",
            "section": "BU",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Auditory Rehabilitation"
         },
         {
            "code": "BION 101",
            "credits": 0,
            "crn": "16371",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "C-BIO 101 LEC (Monday, 5:55 PM – 8:10 PM)",
            "section": "BG2",
            "time": [
               {
                  "day": "W",
                  "end": "8:10pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Principles of Biology LAB"
         },
         {
            "code": "CPCN 101",
            "credits": 4,
            "crn": "10736",
            "department": "",
            "instructor": "Dr. E. Kon",
            "notes": "P-MAT 120; C-CPC 101 LAB (Sunday, 7:00 PM)",
            "section": "BK",
            "time": [
               {
                  "day": "W",
                  "end": "8:10pm",
                  "start": "5:15pm"
               }
            ],
            "title": "General Chemistry I LEC (Wednesdays)"
         },
         {
            "code": "CPCN 201",
            "credits": 0,
            "crn": "16372",
            "department": "",
            "instructor": "Dr. N. Abbassi",
            "notes": "P-MAT120; C-CPC 201  LEC (Monday, 5:15 PM)",
            "section": "BG",
            "time": [
               {
                  "day": "W",
                  "end": "8:10pm",
                  "start": "5:55pm"
               }
            ],
            "title": "Organic Chemistry I LAB "
         },
         {
            "code": "BION 222",
            "credits": 0,
            "crn": "16373",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "P-BIO 102, C-BIO 222 LEC (Monday,  8:20 PM -10:35 PM)",
            "section": "BH",
            "time": [
               {
                  "day": "W",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Anatomy and Physiology I  LAB"
         },
         {
            "code": "CPPN 101",
            "credits": 0,
            "crn": "16374",
            "department": "",
            "instructor": "Dr. W. Gutierrez",
            "notes": "P-MAT 120, C-CPP 101 Lecture. Sunday, 4:30 PM – 6:50 PM.",
            "section": "BQ",
            "time": [
               {
                  "day": "W",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "General Physics I LAB"
         },
         {
            "code": "BION 101",
            "credits": 0,
            "crn": "16351",
            "department": "",
            "instructor": "Dr. I. Fernandopulle",
            "notes": "C-BIO 101 LEC (Monday 5:55 – 8:10 PM)",
            "section": "BG1",
            "time": [
               {
                  "day": "",
                  "end": "7:30pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Principles of Biology I LAB"
         },
         {
            "code": "BION 228",
            "credits": 0,
            "crn": "10725",
            "department": "",
            "instructor": "Dr. Z. Leifer",
            "notes": "P-BIO 102; C – BIO 228 LEC (Monday)",
            "section": "BG",
            "time": [
               {
                  "day": "",
                  "end": "7:30pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Microbiology Lecture and Laboratory"
         },
         {
            "code": "CPPN 101",
            "credits": 4,
            "crn": "10953",
            "department": "",
            "instructor": "Dr. W. Gutierrez",
            "notes": "P-MAT 120, C-CPP 101 LAB (Wednesday, 8:20 PM– 10:55 PM)",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "7:20pm",
                  "start": "4:30pm"
               }
            ],
            "title": "General Physics I Lecture"
         },
         {
            "code": "CPPN 101",
            "credits": 4,
            "crn": "10953",
            "department": "",
            "instructor": "Dr. W. Gutierrez",
            "notes": "P-MAT 120, C-CPP 101 LAB (Monday, 5:55 PM – 8:10 PM)",
            "section": "BQK",
            "time": [
               {
                  "day": "",
                  "end": "7:20pm",
                  "start": "4:30pm"
               }
            ],
            "title": "General Physics I Lecture"
         },
         {
            "code": "EBAN 102",
            "credits": 3,
            "crn": "13157",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBA 101.",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "7:20pm",
                  "start": "4:45pm"
               }
            ],
            "title": "Principles of Accounting II"
         },
         {
            "code": "EBAN 302",
            "credits": 3,
            "crn": "15759",
            "department": "",
            "instructor": "Prof. Y. Newman",
            "notes": "C-EBA 201 & Dean of Business Permission.",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "7:20pm",
                  "start": "4:45pm"
               }
            ],
            "title": "Not-for-Profit Accounting"
         },
         {
            "code": "EBFN 220",
            "credits": 3,
            "crn": "15801",
            "department": "",
            "instructor": "Prof. E. Goldberg",
            "notes": "P-EBF 101 and MAT 120",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "7:20pm",
                  "start": "4:45pm"
               }
            ],
            "title": "Corporate Finance"
         },
         {
            "code": "EBMN 101",
            "credits": 3,
            "crn": "14125",
            "department": "",
            "instructor": "Prof. S. Felder",
            "notes": "P-None",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "7:20pm",
                  "start": "4:45pm"
               }
            ],
            "title": "Principles of Management"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "13581",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-None (Not for Computer Science Majors)",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "8:15pm",
                  "start": "5:40pm"
               }
            ],
            "title": "Computer Concepts with Computer Applications"
         },
         {
            "code": "PSYN 226",
            "credits": 3,
            "crn": "15314",
            "department": "",
            "instructor": "Prof. Glanzman",
            "notes": "P-PSY 101",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "8:15pm",
                  "start": "5:40pm"
               }
            ],
            "title": "Psychology of Leadership"
         },
         {
            "code": "PSYN 301",
            "credits": 3,
            "crn": "11279",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101, MAT 261, C-PSY 301.6 (This course is only offered in the Fall semester.)",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "8:15pm",
                  "start": "5:40pm"
               }
            ],
            "title": "Experimental Psychology"
         },
         {
            "code": "SASN 371",
            "credits": 3,
            "crn": "11272",
            "department": "",
            "instructor": "Dr. M. Verbit",
            "notes": "P-None can satisfy Judaic or sociology requirement, but not both.",
            "section": "BQ",
            "time": [
               {
                  "day": "",
                  "end": "8:15pm",
                  "start": "5:40pm"
               }
            ],
            "title": "American Jewish Community"
         },
         {
            "code": "BION 111",
            "credits": 0,
            "crn": "14455",
            "department": "",
            "instructor": "Dr. I. Fernandopulle",
            "notes": "P-None, C–BIO 111 LEC (Mon & Wed, 9:30 PM –  10:35 PM)",
            "section": "BD",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Human Biology (Non-Majors) LAB"
         },
         {
            "code": "BION 111",
            "credits": 0,
            "crn": "14456",
            "department": "",
            "instructor": "Dr. I. Fernandopulle",
            "notes": "P-None, C – BIO 111 LEC (Mon & Wed, 4:40 PM–5:50 PM)",
            "section": "BN",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Human Biology (Non-Majors) LAB"
         },
         {
            "code": "CPCN 101",
            "credits": 0,
            "crn": "16357",
            "department": "",
            "instructor": "Dr. N. Abassi",
            "notes": "P-MAT 120; C-CPC 101 LEC (Wednesday 5:00 PM–8:10 PM)",
            "section": "BK",
            "time": [
               {
                  "day": "",
                  "end": "10:30pm",
                  "start": "7:40pm"
               }
            ],
            "title": "Principles of General Chemistry I (LAB)"
         },
         {
            "code": "EBAN 101",
            "credits": 3,
            "crn": "16298",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Accounting I"
         },
         {
            "code": "EBAN 201",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Rosenbaum",
            "notes": "P-EBAN 102",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Intermediate Accounting I"
         },
         {
            "code": "EBAN 451",
            "credits": 4,
            "crn": "11032",
            "department": "",
            "instructor": "Prof. B. Englard",
            "notes": "P-EBAN 301 and C- EBA 308 and SEN and Screening Exam, and 3.0 GPA in accounting.",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:20pm",
                  "start": "7:00pm"
               }
            ],
            "title": "Contemporary Accounting Problems"
         },
         {
            "code": "EBMN 317",
            "credits": 3,
            "crn": "11154",
            "department": "",
            "instructor": "Dr. J. Stern",
            "notes": "P-EBE 101 or EBE 102 and EBM 101.",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Social & Governmental Environment of Business (Can be a substitute for Business Ethics)"
         },
         {
            "code": "EBMN 493",
            "credits": 3,
            "crn": "16301",
            "department": "",
            "instructor": "Prof. E. Goldberg",
            "notes": "P-60 credits and 300 Level Business Courses.",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Business Policy"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "13507",
            "department": "",
            "instructor": "Prof. M. Davidowitz",
            "notes": "P-None",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "PSYN 301.6",
            "credits": 1,
            "crn": "11280",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "C-PSY 301 (This course is only offered in the Fall semester)",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Experimental Psychology LAB"
         },
         {
            "code": "SASN 103",
            "credits": 3,
            "crn": "16302",
            "department": "",
            "instructor": "Dr. M. Verbit",
            "notes": "P-None",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to Sociology"
         },
         {
            "code": "SPLN 208",
            "credits": 3,
            "crn": "16530",
            "department": "",
            "instructor": "Prof. A. Silverstein",
            "notes": "P-BIO 111 or BIO 101",
            "section": "BR",
            "time": [
               {
                  "day": "",
                  "end": "10:00pm",
                  "start": "7:25pm"
               }
            ],
            "title": "Anatomy and Physiology of Speech"
         },
         {
            "code": "EDUN 318",
            "credits": 2,
            "crn": "16303",
            "department": "",
            "instructor": "Dr. D. Zelasko Prof. M. Wapner",
            "notes": "P-Dept.",
            "section": " ",
            "time": [
               {
                  "day": "",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Field Experience & Stud. Teaching I"
         },
         {
            "code": "SPEN 319",
            "credits": 2,
            "crn": "16339",
            "department": "",
            "instructor": "Dr. D. Zelasko Prof. M. Wapner",
            "notes": "P-Pass STAT, Approval of Edu Chair",
            "section": " ",
            "time": [
               {
                  "day": "",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Field Experience"
         },
         {
            "code": "SPEN 418",
            "credits": 3,
            "crn": "16314",
            "department": "",
            "instructor": "Dr. D. Zelasko Prof. M. Wapner",
            "notes": "P-Dept.",
            "section": " ",
            "time": [
               {
                  "day": "",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Field Experience & Stud. Teaching II"
         },
         {
            "code": "SPEN 419",
            "credits": 3,
            "crn": "16342",
            "department": "",
            "instructor": "Dr. D. Zelasko Prof. M. Wapner",
            "notes": "P-Pass EdSE 319 W/B, Approval of Edu Chair",
            "section": " ",
            "time": [
               {
                  "day": "",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Student Teaching"
         },
         {
            "code": "BION 493",
            "credits": 3,
            "crn": "10731",
            "department": "",
            "instructor": "Dr. R. S. Bressler",
            "notes": "P-SEN & DEPT PERM.  Required Conferences Every Other Wednesday at 5:30 PM.",
            "section": "BP",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Research Topics in Biology"
         },
         {
            "code": "BION 494",
            "credits": 3,
            "crn": "10732",
            "department": "",
            "instructor": "Dr. R. S. Bressler",
            "notes": "P-SEN & DEPT. (Must have an arrangement with a lab to register.)",
            "section": "BP",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Senior Honors Project in Biology"
         },
         {
            "code": "HISN 493",
            "credits": 3,
            "crn": "16378",
            "department": "",
            "instructor": "TBA",
            "notes": "P-DEPT.& SEN",
            "section": "BP",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Advanced Topics in the Social Sciences"
         },
         {
            "code": "MATN 493",
            "credits": 3,
            "crn": "11232",
            "department": "",
            "instructor": "Dr. B. Rabinowitz",
            "notes": "P-SEN, Dept.",
            "section": "BP1",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Senior Project in Math"
         },
         {
            "code": "MATN 493",
            "credits": 3,
            "crn": "14450",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-SEN, Dept",
            "section": "BP2",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Senior Project in Math"
         },
         {
            "code": "MCON 352",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MCO 141",
            "section": "B",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Structured Systems Analysis"
         },
         {
            "code": "MCO 452",
            "credits": 3,
            "crn": "16389",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-DEPT.",
            "section": "BI",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Internship in Computer Science"
         },
         {
            "code": "POL 485",
            "credits": 3,
            "crn": "16953",
            "department": "",
            "instructor": "TBA",
            "notes": "P-DEPT. & JUNIOR",
            "section": "BI",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Legislative Internship"
         },
         {
            "code": "POLN 486",
            "credits": 3,
            "crn": "16954",
            "department": "",
            "instructor": "TBA",
            "notes": "P-DEPT. & JUNIOR",
            "section": "BI",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Communal Internship"
         },
         {
            "code": "PSYN 485",
            "credits": 3,
            "crn": "11291",
            "department": "",
            "instructor": "Dr. M. Press",
            "notes": "P-21 Credits in Psychology and Departmental Permission",
            "section": "BI",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Internship in Psychology"
         },
         {
            "code": "PSYN 492",
            "credits": 3,
            "crn": "15316",
            "department": "",
            "instructor": "TBA",
            "notes": "P- 301; 21 Credits in Psychology and Departmental Permission.",
            "section": "BI",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Senior Honors Seminar in Psychology"
         },
         {
            "code": "COAN 101",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Grenadir",
            "notes": "P- None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Art of Western Civilization"
         },
         {
            "code": "EBAN 209",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Berger",
            "notes": "P-EBAN 102",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Financial Statement Analysis"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Rockove",
            "notes": "P- None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "EBE 102",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Rockove",
            "notes": "P- None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBFN  220",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. M. Rosenberg",
            "notes": "P-EBF 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Corporation Finance"
         },
         {
            "code": "EBKN 101",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Rovt",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Marketing"
         },
         {
            "code": "EBKN 340",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Vanek",
            "notes": "P-EBK 101, EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "International Marketing Management"
         },
         {
            "code": "EBLN 100",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Stern",
            "notes": "P-EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Gerontology"
         },
         {
            "code": "EBMN 318",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Seideman",
            "notes": "P-EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Legal Aspects In Long Term Care"
         },
         {
            "code": "EBMN 340",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Stern",
            "notes": "P-EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Long Term Care Administration"
         },
         {
            "code": "EDUN 201",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. C. Shapiro",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Psychosocial Foundations Growth, Development and Learning Birth thru Grade 6"
         },
         {
            "code": "EDUN 301",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Zelasko",
            "notes": "P or C EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Teach Read & Language Arts, Grades 1–6."
         },
         {
            "code": "EDUN 303",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. B. Carlin",
            "notes": "P or C EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Teach the Social Studies Spectrum Subjects, Grades 1-6."
         },
         {
            "code": "EDUN 304",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. B. Czeladnicki",
            "notes": "P or C EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Math, Science and Technology; Teaching and Remediation, Grades 1-6."
         },
         {
            "code": "EDUN 311",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Hamilton",
            "notes": "P or C EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Early Childhood Education"
         },
         {
            "code": "EDUN 316",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. G. Bell-Baptiste",
            "notes": "P or C EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Language Acquisition & Emergent Literacy I, Birth – Pre K"
         },
         {
            "code": "HISN 141",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Emergence of the U.S. I to 1877"
         },
         {
            "code": "HISN 155",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. H. Abramson",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "History of the Jewish People I"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "HISN 221",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Survey of Modern History II"
         },
         {
            "code": "HISN 271",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "American Jewish History"
         },
         {
            "code": "HISN 306",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. E. Hymes",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "History of New York City"
         },
         {
            "code": "HISN 450",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "American Cultural History"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Polyakov",
            "notes": "P- Exam",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "College Math"
         },
         {
            "code": "MATN 120",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MAT 111 or Exam",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Pre-Calculus"
         },
         {
            "code": "MATN 121",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MAT 120 or Exam",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Calculus I"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MAT 111 or Exam",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Statistics for Social Science majors"
         },
         {
            "code": "MCO 122",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Computer Literacy and Information Retrieval"
         },
         {
            "code": "MCO 140",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-None (not for computer science majors)",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Computer Concepts with Applications"
         },
         {
            "code": "MCO 148",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-MCO 140",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Computer Business Applications"
         },
         {
            "code": "MCO 245",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "UNIX"
         },
         {
            "code": "MCO 256",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Database Programming"
         },
         {
            "code": "MCO 275",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Robinson",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Advanced Internet Tools & Web PG DSG"
         },
         {
            "code": "MCO 358",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. M. Gutherc",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Web Programming"
         },
         {
            "code": "PSY 102",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Social Psychology"
         },
         {
            "code": "PSY 201",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Development Psychology"
         },
         {
            "code": "PSY 301",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101, MAT 261",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Experimental Psychology"
         },
         {
            "code": "PSY 301.6",
            "credits": 1,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "Co-Requisite, PSY 301 OL",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Experimental Psychology LAB"
         },
         {
            "code": "PSY 310",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Brownstein",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Personality"
         },
         {
            "code": "PSY 325",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Drugs and Behavior"
         },
         {
            "code": "PSY 335",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Brownstein",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Abnormal Psychology"
         },
         {
            "code": "PSY 345",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Psychology of Health and illness"
         },
         {
            "code": "PSY 351",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Biological Psychology"
         },
         {
            "code": "PSY 420",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. A. Geliebter",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Eating Disorders"
         },
         {
            "code": "SpEd 309",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. C. Christie",
            "notes": "P-EDU 301/303 or EDU 304",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Curriculum Development for Students with Disabilities, Grades 1-6."
         },
         {
            "code": "SpEd 313",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof S. Hamilton",
            "notes": "EDU 311 or EDU 312 and EDU 316 or EDU 317.",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Developmentally Appropriate  Learning Experience for Young Exceptional Children"
         },
         {
            "code": "EBF 504",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. M. Rosenberg",
            "notes": "P-Nine credits of Finance courses after taking EBF 101",
            "section": "OL",
            "time": [
               {
                  "day": "",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Seminar in Investment Analysis"
         }
      ];
    touroMenClassesArray.forEach(function(element) {
      touroMenClasses.insert(element);
    });
  }
  if (touroWomenClasses.find().count() === 0) {
    var touroWomenClassesArray = 
      [
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "10326",
            "department": "",
            "instructor": "Dr. T. Singer",
            "notes": "P-None",
            "section": "FJ",
            "time": [
               {
                  "day": "TR",
                  "end": "1:40pm",
                  "start": "12:30pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "13222",
            "department": "",
            "instructor": "Prof. S. Siegel",
            "notes": "P-MAT 111 or exam",
            "section": "FJ",
            "time": [
               {
                  "day": "TR",
                  "end": "1:40pm",
                  "start": "12:30pm"
               }
            ],
            "title": "Statistics for Social Sciences"
         },
         {
            "code": "PSYN 101",
            "credits": 3,
            "crn": "10624",
            "department": "",
            "instructor": "Dr. D. Steinman",
            "notes": "P-None",
            "section": "FJ",
            "time": [
               {
                  "day": "TR",
                  "end": "1:40pm",
                  "start": "12:30pm"
               }
            ],
            "title": "Introduction to Psychology"
         },
         {
            "code": "PSYN 301",
            "credits": 3,
            "crn": "10631",
            "department": "",
            "instructor": "Dr. B. Rumain",
            "notes": "P-PSY101, MAT 261, C-PSY 301.6",
            "section": "FJ",
            "time": [
               {
                  "day": "TR",
                  "end": "1:40pm",
                  "start": "12:30pm"
               }
            ],
            "title": "Experimental Psychology"
         },
         {
            "code": "PSYN 201",
            "credits": 3,
            "crn": "10626",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101. This is a blended course with an online component.",
            "section": "FJ",
            "time": [
               {
                  "day": "TR",
                  "end": "1:40pm",
                  "start": "12:30pm"
               }
            ],
            "title": "Developmental Psychology"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "10576",
            "department": "",
            "instructor": "Dr. G. Cohn",
            "notes": "P-None",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "EBMN 101",
            "credits": 3,
            "crn": "10585",
            "department": "",
            "instructor": "Prof. S. Felder",
            "notes": "P-None",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Principles of Management"
         },
         {
            "code": "HISN 221",
            "credits": 3,
            "crn": "10327",
            "department": "",
            "instructor": "Prof. Y. Krumbein",
            "notes": "P-None",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Survey of Modern History II"
         },
         {
            "code": "LLEN 221",
            "credits": 3,
            "crn": "10301",
            "department": "",
            "instructor": "Prof. J. Epstein",
            "notes": "P-LLE 102 or Exam.",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Survey of Modern Literature II"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "10318",
            "department": "",
            "instructor": "Prof. S. Siegel",
            "notes": "P-MAT 111 or Exam.",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Statistics for Social Sciences"
         },
         {
            "code": "POLN 543",
            "credits": 3,
            "crn": "15636",
            "department": "",
            "instructor": "Prof. D. Kupfer",
            "notes": "P-POL 101 or EBEN 101 or EBEN 102.",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Health Care Politics & Economics"
         },
         {
            "code": "PSYN 301.6",
            "credits": 1,
            "crn": "10689",
            "department": "",
            "instructor": "Dr. B. Rumain",
            "notes": "P-PSY 101, MAT 261, C-PSY 301.",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Experimental Psychology Lab"
         },
         {
            "code": "PSYN 345",
            "credits": 3,
            "crn": "10639",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101. This is a blended course with an online component.",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Psychology of Health and Illness"
         },
         {
            "code": "PSYN 493",
            "credits": 3,
            "crn": "14331",
            "department": "",
            "instructor": "Dr. D. Steinman",
            "notes": "P-PSY 301; 21 Credits in Psychology.",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Advanced Topics in Psychology"
         },
         {
            "code": "SASN 301",
            "credits": 3,
            "crn": "16839",
            "department": "",
            "instructor": "Prof. D. Ratti",
            "notes": "P-None",
            "section": "FG",
            "time": [
               {
                  "day": "TR",
                  "end": "3:00pm",
                  "start": "1:50pm"
               }
            ],
            "title": "Sociology of the Family"
         },
         {
            "code": "BION 111",
            "credits": 4,
            "crn": "10435",
            "department": "",
            "instructor": "TBA",
            "notes": "Not For Science Majors C-LAB (Sun 12:00 PM - 2:50 PM)",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Human Biology Lecture & Lab"
         },
         {
            "code": "BION 113",
            "credits": 3,
            "crn": "14333",
            "department": "",
            "instructor": "TBA",
            "notes": "Not For Science, Education, or Speech Majors. NO LAB",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Human Biology Lecture"
         },
         {
            "code": "COAN 101",
            "credits": 3,
            "crn": "10452",
            "department": "",
            "instructor": "Prof. R. Seidenberg",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Art of Western Civilization"
         },
         {
            "code": "COAN 224",
            "credits": 3,
            "crn": "10460",
            "department": "",
            "instructor": "Prof. A. Grenadir",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Studio Art: Drawing and Painting I"
         },
         {
            "code": "EBAN 102",
            "credits": 3,
            "crn": "16840",
            "department": "",
            "instructor": "Prof. B. Halberstam",
            "notes": "P-EBA 101",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Principles of Accounting II"
         },
         {
            "code": "EBAN 314",
            "credits": 3,
            "crn": "10572",
            "department": "",
            "instructor": "Prof. S. Bienenstock",
            "notes": "P-EBA 102",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Federal Taxation of Individuals"
         },
         {
            "code": "EBEN 102",
            "credits": 3,
            "crn": "13289",
            "department": "",
            "instructor": "Dr. G. Cohn",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBFN 101",
            "credits": 3,
            "crn": "16841",
            "department": "",
            "instructor": "Prof. M. Tsymuk",
            "notes": "P-EBE 101 or 102",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Principles of Finance"
         },
         {
            "code": "EBFN 210",
            "credits": 3,
            "crn": "16937",
            "department": "",
            "instructor": "Dr. W. Fischbein",
            "notes": "P-EBF 101",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Investment Principles"
         },
         {
            "code": "EBKN 101",
            "credits": 3,
            "crn": "10581",
            "department": "",
            "instructor": "Prof. S. Felder",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Principles of Marketing"
         },
         {
            "code": "EBKN 201",
            "credits": 3,
            "crn": "10582",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBK 101",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Consumer Behavior"
         },
         {
            "code": "EDUN 201",
            "credits": 3,
            "crn": "10593",
            "department": "",
            "instructor": "Dr. J. Dickstein",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Psychosocial Foundations of Growth, Development & Learning, Birth - Grade 6."
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "13324",
            "department": "",
            "instructor": "Dr. T. Singer",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "LLEN 100",
            "credits": 3,
            "crn": "13094",
            "department": "",
            "instructor": "TBA",
            "notes": "P-Exam",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Introduction to English Composition"
         },
         {
            "code": "LLEN 220",
            "credits": 3,
            "crn": "10109",
            "department": "",
            "instructor": "Prof. J. Epstein",
            "notes": "P-LLE 102 or EXAM",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Survey of Modern Literature I"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "10116",
            "department": "",
            "instructor": "Prof. S. Siegel",
            "notes": "P-EXAM",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "College Mathematics"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "10125",
            "department": "",
            "instructor": "Prof. D. Morgulis",
            "notes": "P-None (Not for computer science majors). Note: This course is offered in different time slots, including Monday afternoon.",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Computer Concepts with Applications"
         },
         {
            "code": "POLN 101",
            "credits": 3,
            "crn": "15642",
            "department": "",
            "instructor": "Prof. D. Kupfer",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "American Politics"
         },
         {
            "code": "PSYN 102",
            "credits": 3,
            "crn": "10625",
            "department": "",
            "instructor": "Dr. S. Pretter",
            "notes": "P-PSY 101",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Social Psychology"
         },
         {
            "code": "PSYN 312",
            "credits": 3,
            "crn": "10633",
            "department": "",
            "instructor": "Dr. R. Soffer",
            "notes": "P-PSY 101",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Cognition"
         },
         {
            "code": "PSYN 326",
            "credits": 3,
            "crn": "10634",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101. This is a blended course with an online component.",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Forensic Psychology"
         },
         {
            "code": "PSYN 332",
            "credits": 3,
            "crn": "10636",
            "department": "",
            "instructor": "Dr. D. Steinman",
            "notes": "P-PSY 101",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "History and Systems of Psychology"
         },
         {
            "code": "SASN 103",
            "credits": 3,
            "crn": "10650",
            "department": "",
            "instructor": "Prof. D. Ratti",
            "notes": "None. May not be used as a Psychology elective.",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Introduction to Sociology"
         },
         {
            "code": "SPLN 101",
            "credits": 3,
            "crn": "10463",
            "department": "",
            "instructor": "Prof. P. Schwartz",
            "notes": "P-None",
            "section": "FA",
            "time": [
               {
                  "day": "TR",
                  "end": "4:20pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Fundamentals of Speech"
         },
         {
            "code": "EBAN 101",
            "credits": 3,
            "crn": "10563",
            "department": "",
            "instructor": "Prof. B. Halberstam",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Principles of Accounting I"
         },
         {
            "code": "EBAN 201",
            "credits": 3,
            "crn": "10565",
            "department": "",
            "instructor": "Prof. S. Saltz",
            "notes": "P-EBA 102",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Intermediate Accounting I"
         },
         {
            "code": "EBAN 316",
            "credits": 3,
            "crn": "10573",
            "department": "",
            "instructor": "Prof. S. Bienenstock",
            "notes": "P-EBA 314",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Corporate Taxation"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "13257",
            "department": "",
            "instructor": "Dr. G. Cohn",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "EBFN 220",
            "credits": 3,
            "crn": "10580",
            "department": "",
            "instructor": "Dr. W. Fischbein",
            "notes": "P-EBF 101",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Corporate Finance"
         },
         {
            "code": "EBKN 101",
            "credits": 3,
            "crn": "13299",
            "department": "",
            "instructor": "Prof. M. Tsymuk",
            "notes": "P- None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Principles of Marketing"
         },
         {
            "code": "EBKN 207",
            "credits": 3,
            "crn": "15362",
            "department": "",
            "instructor": "TBA",
            "notes": "P- EBK 101",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Social Media & Marketing"
         },
         {
            "code": "EDUN 311",
            "credits": 3,
            "crn": "10596",
            "department": "",
            "instructor": "Prof. D. Vigilance",
            "notes": "P or C-EDU 201",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Principles of Early Childhood Education"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "13320",
            "department": "",
            "instructor": "Dr. T. Singer",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "HISN 334",
            "credits": 3,
            "crn": "10328",
            "department": "",
            "instructor": "Dr. D. Hertzberg",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Topics in Modern European Diplomatic History: From 1815"
         },
         {
            "code": "JSBN 172",
            "credits": 3,
            "crn": "10330",
            "department": "",
            "instructor": "Prof. M. Vatkin",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Psalms/Tehillim"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "10297",
            "department": "",
            "instructor": "TBA",
            "notes": "P-Exam or LLE 100",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "10298",
            "department": "",
            "instructor": "Prof. J. Epstein",
            "notes": "P-Exam or LLE 101",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "13221",
            "department": "",
            "instructor": "Prof. S. Siegel",
            "notes": "P-MAT 111 or Exam.",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Statistics for Social Sciences"
         },
         {
            "code": "MATN 222",
            "credits": 3,
            "crn": "15646",
            "department": "",
            "instructor": "Prof. Fukunaga",
            "notes": "P-MAT 122",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Modern Algebra"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "15647",
            "department": "",
            "instructor": "Prof. A. Zlotnikov",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Computer Concepts with Applications"
         },
         {
            "code": "MCON 141",
            "credits": 3,
            "crn": "10609",
            "department": "",
            "instructor": "Prof. D. Morgulis",
            "notes": "P/C MCO 104. Not offered in the spring semester.",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Introduction to Programming"
         },
         {
            "code": "POLN 261",
            "credits": 3,
            "crn": "15648",
            "department": "",
            "instructor": "Prof. A. Mond",
            "notes": "P-None. May be used for Judaic Studies credit or Political Science credit but not for both.",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Government & Politics of Israel"
         },
         {
            "code": "PSYN 205",
            "credits": 3,
            "crn": "10627",
            "department": "",
            "instructor": "TBA",
            "notes": "P-PSY 101",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Psychology of Motivation"
         },
         {
            "code": "PSYN 209",
            "credits": 3,
            "crn": "10628",
            "department": "",
            "instructor": "Prof. A. Grenadir",
            "notes": "P-PSY 101",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Art Therapy I"
         },
         {
            "code": "PSYN 335",
            "credits": 3,
            "crn": "10637",
            "department": "",
            "instructor": "Dr. S. Pretter",
            "notes": "P-PSY 101",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Abnormal Psychology"
         },
         {
            "code": "PSYN 492",
            "credits": 3,
            "crn": "10646",
            "department": "",
            "instructor": "Dr. B. Rumain",
            "notes": "P-21 credits in Psych. PSY 301.",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Honors Seminar in Psychology"
         },
         {
            "code": "PSYN 493",
            "credits": 3,
            "crn": "10647",
            "department": "",
            "instructor": "Dr. R. Soffer",
            "notes": "P-21cr. Psych., PSY 301.",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Advanced Topics in Psychology"
         },
         {
            "code": "SPLN 101",
            "credits": 3,
            "crn": "15643",
            "department": "",
            "instructor": "Prof. P. Schwartz",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Fundamentals of Speech"
         },
         {
            "code": "SPLN 208",
            "credits": 3,
            "crn": "10468",
            "department": "",
            "instructor": "Prof. R. Roitman",
            "notes": "P-None",
            "section": "FB",
            "time": [
               {
                  "day": "TR",
                  "end": "5:40pm",
                  "start": "4:30pm"
               }
            ],
            "title": "Phonetics"
         },
         {
            "code": "EDLN 072",
            "credits": 0,
            "crn": "16355",
            "department": "",
            "instructor": "Prof. E. Gutman",
            "notes": "For Open Curtain students only.",
            "section": "FO",
            "time": [
               {
                  "day": "MW",
                  "end": "4:50pm",
                  "start": "1:30pm"
               }
            ],
            "title": "Effective Reading and Writing"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "13120",
            "department": "",
            "instructor": "TBA",
            "notes": "P- LLE 101, for Open Curtain students only.",
            "section": "FO",
            "time": [
               {
                  "day": "M",
                  "end": "4:55pm",
                  "start": "2:15pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "COAN 2XX",
            "credits": 3,
            "crn": "16938",
            "department": "",
            "instructor": "Prof. J. Ayzman",
            "notes": "P-None",
            "section": "FL",
            "time": [
               {
                  "day": "M",
                  "end": "4:55pm",
                  "start": "2:15pm"
               }
            ],
            "title": "Fundamentals of Illustration"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "15649",
            "department": "",
            "instructor": "Prof. D. Morgulis",
            "notes": "P-None (Not for computer science majors)",
            "section": "FL",
            "time": [
               {
                  "day": "M",
                  "end": "4:55pm",
                  "start": "2:15pm"
               }
            ],
            "title": "Computer Concepts with Applications"
         },
         {
            "code": "PSYN 351",
            "credits": 3,
            "crn": "16375",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "FL",
            "time": [
               {
                  "day": "M",
                  "end": "4:55pm",
                  "start": "2:15pm"
               }
            ],
            "title": "Biological Psychology"
         },
         {
            "code": "BION 101",
            "credits": 4,
            "crn": "10123",
            "department": "",
            "instructor": "Dr. M. Schiffenbauer",
            "notes": "P-None; C - BIO 101 LAB (Thurs 3:15 PM – 5:55 PM)",
            "section": "FH",
            "time": [
               {
                  "day": "T",
                  "end": "5:40pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Principles of Biology I Lecture (Tuesday only)"
         },
         {
            "code": "BION 102",
            "credits": 0,
            "crn": "13085",
            "department": "",
            "instructor": "Dr. Z. Zheng",
            "notes": "P-BIO 101; C- BIO 102 LEC (Thurs 3:15 – 5:40 PM)",
            "section": "FK",
            "time": [
               {
                  "day": "T",
                  "end": "5:50pm",
                  "start": "3:05pm"
               }
            ],
            "title": "Principles of Biology II LAB (Tuesday only)"
         },
         {
            "code": "BION 222",
            "credits": 0,
            "crn": "15321",
            "department": "",
            "instructor": "Dr. J. Wells",
            "notes": "P-BIO 102; C – BIO 222 LEC (Thursday 3:15 PM – 5:40 PM)",
            "section": "FK",
            "time": [
               {
                  "day": "T",
                  "end": "5:50pm",
                  "start": "3:05pm"
               }
            ],
            "title": "Anatomy & Physiology I LAB (Tuesday only)"
         },
         {
            "code": "BION 223",
            "credits": 4,
            "crn": "15651",
            "department": "",
            "instructor": "Dr. J. Strickman",
            "notes": "P-BIO 222 C-BIO223 LAB (Thursday 3:10 PM – 5:40 PM",
            "section": "FH",
            "time": [
               {
                  "day": "T",
                  "end": "5:40pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Anatomy and Physiology II Lecture"
         },
         {
            "code": "CPCN 201",
            "credits": 4,
            "crn": "14343",
            "department": "",
            "instructor": "Dr. E. Mintzer",
            "notes": "C-CPC 201 LAB, (Thursday 3:15 PM - 5:55 PM)",
            "section": "FH",
            "time": [
               {
                  "day": "T",
                  "end": "5:40pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Organic Chemistry I LEC"
         },
         {
            "code": "LLEN 100",
            "credits": 3,
            "crn": "13130",
            "department": "",
            "instructor": "Dr. I. Gold",
            "notes": "For Open Curtain students only. P-Exam.",
            "section": "FO",
            "time": [
               {
                  "day": "W",
                  "end": "4:55pm",
                  "start": "1:20pm"
               }
            ],
            "title": "Introduction to Composition"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "16336",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None. For open curtain students only.",
            "section": "FO",
            "time": [
               {
                  "day": "W",
                  "end": "4:55pm",
                  "start": "1:20pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "BION 101",
            "credits": 0,
            "crn": "12962",
            "department": "",
            "instructor": "Dr. M. Schiffenbauer",
            "notes": "P-None; C- BIO 101 LEC (Tues 3:15 PM – 5:40 PM)",
            "section": "FH",
            "time": [
               {
                  "day": "R",
                  "end": "5:55pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Principles of Biology I LAB (Thursday only)"
         },
         {
            "code": "BION 102",
            "credits": 4,
            "crn": "10124",
            "department": "",
            "instructor": "Dr. Z. Zheng",
            "notes": "P- BIO 101; C- BIO 102 LAB (Tues 3:15 PM – 5:55 PM)",
            "section": "FK",
            "time": [
               {
                  "day": "R",
                  "end": "5:40pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Principles of Biology II LEC (Thursday only)"
         },
         {
            "code": "BION 222",
            "credits": 4,
            "crn": "14340",
            "department": "",
            "instructor": "Dr. J. Wells",
            "notes": "P–BIO 102; C– BIO 222 LAB (Tuesday 3:15 PM – 5:55 PM)",
            "section": "FK",
            "time": [
               {
                  "day": "R",
                  "end": "5:40pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Anatomy & Physiology I Lecture (Thursday only)"
         },
         {
            "code": "BION 223",
            "credits": 0,
            "crn": "15323",
            "department": "",
            "instructor": "Dr. J. Strickman",
            "notes": "P–BIO 222, C-BIO 223 LEC (Tuesday 3:15 PM – 5:40 PM)",
            "section": "FH",
            "time": [
               {
                  "day": "R",
                  "end": "5:40pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Anatomy and Physiology II LAB (Thursday only)"
         },
         {
            "code": "CPCN 201",
            "credits": 0,
            "crn": "16340",
            "department": "",
            "instructor": "TBA",
            "notes": "C-CPC 201 LEC (Tuesday 3:15 PM – 5:55 PM)",
            "section": "FH",
            "time": [
               {
                  "day": "R",
                  "end": "5:50pm",
                  "start": "3:10pm"
               }
            ],
            "title": "Organic Chemistry I LAB"
         },
         {
            "code": "BION 111",
            "credits": 4,
            "crn": "10711",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "Not For Science Majors C- LAB (Sunday 11:50 AM-2:30 PM)",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Human Biology Lecture"
         },
         {
            "code": "BION 113",
            "credits": 3,
            "crn": "14334",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "P-None. Not for Speech or Education Majors.",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Human Biology (No Lab)"
         },
         {
            "code": "BION 310",
            "credits": 3,
            "crn": "15324",
            "department": "",
            "instructor": "Dr. M. Chowdhury",
            "notes": "P-BIO 102, CPC 102",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Nutrition for Bio Majors"
         },
         {
            "code": "BION 228",
            "credits": 4,
            "crn": "15325",
            "department": "",
            "instructor": "Dr. Z. Leifer",
            "notes": "P-BIO 102 C-LAB (Sunday 12:00 PM)",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Microbiology Lecture"
         },
         {
            "code": "CPCN 201",
            "credits": 4,
            "crn": "16282",
            "department": "",
            "instructor": "Dr. E. Mintzer",
            "notes": "C-CPC 201 LAB (Thursday, 6:00 PM – 8:15 PM)",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Organic Chemistry I Lecture"
         },
         {
            "code": "CPPN 101",
            "credits": 0,
            "crn": "16276",
            "department": "",
            "instructor": "Dr. W. Gutierrez",
            "notes": "P-MAT 120; C-CPP 101 LEC (Sun. 9:00 AM – 11:45 AM)",
            "section": "FQ",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "5:45pm"
               }
            ],
            "title": "General Physics I LAB"
         },
         {
            "code": "EBAN 102",
            "credits": 3,
            "crn": "10564",
            "department": "",
            "instructor": "Prof. J. Edelstein",
            "notes": "P-EBA 101",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Principles of Accounting II"
         },
         {
            "code": "EBAN 213",
            "credits": 3,
            "crn": "10568",
            "department": "",
            "instructor": "Prof. D. Berger",
            "notes": "C-EBA 201",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Cost Accounting"
         },
         {
            "code": "EBAN 301",
            "credits": 3,
            "crn": "10569",
            "department": "",
            "instructor": "Prof. S. Saltz",
            "notes": "P-EBA 202. Senior Status",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Advanced Accounting"
         },
         {
            "code": "EBAN 302",
            "credits": 3,
            "crn": "10570",
            "department": "",
            "instructor": "Prof. J. Newman",
            "notes": "P-EBA 102; C-EBA 201",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Government & Not-For-Profit Accounting"
         },
         {
            "code": "EBEN 204",
            "credits": 3,
            "crn": "10578",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-EBE 101 and EBE 102",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Money & Banking"
         },
         {
            "code": "EBFN 410",
            "credits": 3,
            "crn": "15363",
            "department": "",
            "instructor": "Dr. W. Fischbein",
            "notes": "P-EBF 210",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Seminar In Options Trading"
         },
         {
            "code": "EBKN 315",
            "credits": 3,
            "crn": "10584",
            "department": "",
            "instructor": "Prof. A. Rovt",
            "notes": "P-EBK 101",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Advertising Management"
         },
         {
            "code": "EBKN 410",
            "credits": 3,
            "crn": "15364",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBK 204 (Required for marketing majors)",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Business to Business Marketing"
         },
         {
            "code": "EDUN 302",
            "credits": 3,
            "crn": "10595",
            "department": "",
            "instructor": "Dr. D. Zelasko",
            "notes": "P or C EDU 301",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Diagnosis and Correction of Reading Disabilities, Grades 1-6"
         },
         {
            "code": "EDUN 316",
            "credits": 3,
            "crn": "10597",
            "department": "",
            "instructor": "Prof. D. Sonnenschein",
            "notes": "P or C EDU 201",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Language Acq. & Emergent Literacy I"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "13323",
            "department": "",
            "instructor": "Dr. H. Nierman",
            "notes": "P-None",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "JSBN 172",
            "credits": 3,
            "crn": "15652",
            "department": "",
            "instructor": "Prof. I. Layosh",
            "notes": "P-None",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Book of Bereishis"
         },
         {
            "code": "LLEN 100",
            "credits": 3,
            "crn": "10295",
            "department": "",
            "instructor": "Prof. R. Reichman",
            "notes": "P-Exam",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to English Composition"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "13103",
            "department": "",
            "instructor": "Prof. Sugar",
            "notes": "P-LLE 100 or EXAM",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "13122",
            "department": "",
            "instructor": "Prof. D. Marvin",
            "notes": "P-LLE 101 or EXAM",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "LLEN 221",
            "credits": 3,
            "crn": "13151",
            "department": "",
            "instructor": "TBA",
            "notes": "P-LLE 102 or EXAM",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Survey of Modern Literature II"
         },
         {
            "code": "LLEN 222",
            "credits": 3,
            "crn": "15653",
            "department": "",
            "instructor": "Dr. M. Grossman",
            "notes": "P-LLE 102",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Shakespeare"
         },
         {
            "code": "MATN 120",
            "credits": 3,
            "crn": "10302",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-MAT 111 or exam",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Pre-Calculus"
         },
         {
            "code": "MATN 201",
            "credits": 3,
            "crn": "10315",
            "department": "",
            "instructor": "Dr. L. Kaganovskiy",
            "notes": "P-MAT 122",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Advanced Calculus I"
         },
         {
            "code": "MATN 654",
            "credits": 3,
            "crn": "10317",
            "department": "",
            "instructor": "Prof. E. Fukunaga",
            "notes": "P-Dept. Approval",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Special Topics in Geometry"
         },
         {
            "code": "MCDN 225",
            "credits": 3,
            "crn": "15657",
            "department": "",
            "instructor": "Prof. S. De Castro",
            "notes": "P-None",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Drawing and Painting II"
         },
         {
            "code": "MCDN 262",
            "credits": 3,
            "crn": "10602",
            "department": "",
            "instructor": "Prof. R. Levy",
            "notes": "P-MCD 155, MCD 230; MCD 231 and MCD 236. C-MCD 263 and MCD 267.",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Digital Multimedia Design III"
         },
         {
            "code": "MCDN 302",
            "credits": 3,
            "crn": "10605",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MCD; 264 C-MCD 490",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Web Page Design III"
         },
         {
            "code": "MCON 141",
            "credits": 3,
            "crn": "15660",
            "department": "",
            "instructor": "Prof. M. Plonczak",
            "notes": "P-None; C-MCO 104 This course is offered only during the Fall semester.",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to Programming"
         },
         {
            "code": "MCON 152",
            "credits": 3,
            "crn": "10611",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MCO 260",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Computer Methodology"
         },
         {
            "code": "POLN 101",
            "credits": 3,
            "crn": "16272",
            "department": "",
            "instructor": "Prof. A. Melamed",
            "notes": "P-None",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "American Politics"
         },
         {
            "code": "POLN 201",
            "credits": 3,
            "crn": "16939",
            "department": "",
            "instructor": "Prof. T. Rozinski",
            "notes": "P-None",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to Political Theory"
         },
         {
            "code": "PSYN 101",
            "credits": 3,
            "crn": "13606",
            "department": "",
            "instructor": "Dr. Y. Taler",
            "notes": "P-None",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to Psychology"
         },
         {
            "code": "PSYN 301",
            "credits": 3,
            "crn": "13615",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101 & MAT 261 C-PSY 301.6, Must take FD LAB.",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Experimental Psychology"
         },
         {
            "code": "PSYN 310",
            "credits": 3,
            "crn": "10632",
            "department": "",
            "instructor": "Dr. R. Kidron",
            "notes": "P-PSY 101",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Personality"
         },
         {
            "code": "PSYN 345",
            "credits": 3,
            "crn": "13653",
            "department": "",
            "instructor": "Dr. S. Pretter",
            "notes": "P-PSY 101",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Psychology of Health & Illness"
         },
         {
            "code": "PSYN 493",
            "credits": 3,
            "crn": "15306",
            "department": "",
            "instructor": "Dr. R. Soffer",
            "notes": "P-21cr. Psych., PSY 301",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Advanced Topics in Psychology"
         },
         {
            "code": "SASN 103",
            "credits": 3,
            "crn": "14332",
            "department": "",
            "instructor": "Dr. M. Verbit",
            "notes": "P-None. May not be used as a Psychology elective.",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to Sociology"
         },
         {
            "code": "SEDN 602",
            "credits": 3,
            "crn": "16352",
            "department": "",
            "instructor": "Dr. S. Luel",
            "notes": "P-Department Approval Upper Division status.",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to Teaching Students with Disabilities."
         },
         {
            "code": "SPLN 101",
            "credits": 3,
            "crn": "13229",
            "department": "",
            "instructor": "Prof. P. Schwartz",
            "notes": "P-None",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Fundamentals of Speech"
         },
         {
            "code": "SPLN 101",
            "credits": 3,
            "crn": "13230",
            "department": "",
            "instructor": "Prof. E. Goodman",
            "notes": "P-None for Open Curtain students.",
            "section": "FO",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Fundamentals of Speech"
         },
         {
            "code": "SPLN 209",
            "credits": 3,
            "crn": "10471",
            "department": "",
            "instructor": "Prof. D. Blau",
            "notes": "P-BIO 111 or 101",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Anatomy and Physiology of Speech"
         },
         {
            "code": "SPLN 401",
            "credits": 4,
            "crn": "10503",
            "department": "",
            "instructor": "Prof. R. Roitman",
            "notes": "P-COC 310",
            "section": "FC",
            "time": [
               {
                  "day": "T",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Speech Pathology II"
         },
         {
            "code": "BION 211",
            "credits": 4,
            "crn": "14335",
            "department": "",
            "instructor": "Dr. A. Babayan",
            "notes": "P-BIO 102, C-BIO 211 LAB (Thursday 8:20 PM – 10:35 PM)",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Genetics (Lecture)"
         },
         {
            "code": "BION 222",
            "credits": 4,
            "crn": "15329",
            "department": "",
            "instructor": "Prof. W. Merdian",
            "notes": "P-BIO 102; C – BIO 222, LAB (Thursday 8:20 PM-11:00 PM)",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Anatomy & Physiology I Lecture"
         },
         {
            "code": "BION 311",
            "credits": 3,
            "crn": "10443",
            "department": "",
            "instructor": "Dr. A. Babayan",
            "notes": "P-BIO 102 (No LAB attached)",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Human Genetics"
         },
         {
            "code": "COAN 222",
            "credits": 3,
            "crn": "10458",
            "department": "",
            "instructor": "Prof. A. Grenadir",
            "notes": "P-None",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Studio Art: Painting I"
         },
         {
            "code": "CPCN 101",
            "credits": 4,
            "crn": "16213",
            "department": "",
            "instructor": "Dr. E. Mintzer",
            "notes": "P-MAT 120; C-CPC 101 LAB (Thursday,8:30 PM – 10:50 PM)",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "General Chemistry I Lecture"
         },
         {
            "code": "CPPN 150",
            "credits": 3,
            "crn": "16349",
            "department": "",
            "instructor": "Dr. W. Fischbein",
            "notes": "P-MAT 111 or EXAM. Not for Science majors) [Note: Students must attend 4 two hour recitations held on selected Sunday afternoons.] This course satisfies the core science requirement.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "The Physical Universe (LEC and LAB)"
         },
         {
            "code": "EBAN 101",
            "credits": 3,
            "crn": "13238",
            "department": "",
            "instructor": "Prof. J. Edelstein",
            "notes": "P-None",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Accounting I"
         },
         {
            "code": "EBAN 201",
            "credits": 3,
            "crn": "13249",
            "department": "",
            "instructor": "Prof. D. Ehrlich",
            "notes": "P-EBA 102",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Intermediate Accounting I"
         },
         {
            "code": "EBAN 202",
            "credits": 3,
            "crn": "10566",
            "department": "",
            "instructor": "Prof. S. Saltz",
            "notes": "P-EBA 201 Screening exam.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Intermediate Accounting II"
         },
         {
            "code": "EBAN 308",
            "credits": 3,
            "crn": "10571",
            "department": "",
            "instructor": "Dr. C. Snow",
            "notes": "P-EBA 202, Screening exam, and 3.0 GPA in accounting.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Auditing Principles"
         },
         {
            "code": "EBEN 102",
            "credits": 3,
            "crn": "13290",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBFN 101",
            "credits": 3,
            "crn": "10579",
            "department": "",
            "instructor": "Prof. M. Slavina",
            "notes": "P-EBE 101; MAT 111",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Finance"
         },
         {
            "code": "EBFN 220",
            "credits": 3,
            "crn": "13298",
            "department": "",
            "instructor": "Prof. D. Berger",
            "notes": "P-EBF 101; MAT 111",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Corporate Finance"
         },
         {
            "code": "EBKN 204",
            "credits": 3,
            "crn": "10583",
            "department": "",
            "instructor": "Prof. A. Rovt",
            "notes": "P-EBK 101",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Marketing Management"
         },
         {
            "code": "EBKN 207",
            "credits": 3,
            "crn": "15365",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBK 101",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Social Media & Marketing"
         },
         {
            "code": "EBMN 202",
            "credits": 3,
            "crn": "15557",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBM 101",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Organizational Theory and Behavior"
         },
         {
            "code": "EBMN 213",
            "credits": 3,
            "crn": "10586",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Business Law I"
         },
         {
            "code": "EBMN 320",
            "credits": 3,
            "crn": "15662",
            "department": "",
            "instructor": "Prof. K. Dreifus",
            "notes": "P-EBM 101",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Entrepreneurship & Small Business Management"
         },
         {
            "code": "EDUN 201",
            "credits": 3,
            "crn": "10593",
            "department": "",
            "instructor": "Dr. S. Luel",
            "notes": "P-None",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Psychosocial Foundations of Growth, Development & Learning"
         },
         {
            "code": "HISN 221",
            "credits": 3,
            "crn": "13329",
            "department": "",
            "instructor": "Dr. H. Nierman",
            "notes": "P-None",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Survey of Modern History II"
         },
         {
            "code": "HISN 354",
            "credits": 3,
            "crn": "16940",
            "department": "",
            "instructor": "Dr. H. Abramson",
            "notes": "P- Department Permission This is a blended course with an online component. It meets in person every other Tuesday.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Selected Topics in Jewish History Antisemitism: The Longest Hatred"
         },
         {
            "code": "JSHN 258",
            "credits": 3,
            "crn": "10335",
            "department": "",
            "instructor": "Prof. I. Layosh",
            "notes": "P-None",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Book of Mishlei"
         },
         {
            "code": "LLEN 100",
            "credits": 3,
            "crn": "13097",
            "department": "",
            "instructor": "Prof. R. Reichman",
            "notes": "P-EXAM",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to English Composition"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "13107",
            "department": "",
            "instructor": "Prof. J. November",
            "notes": "P-LLE 100 or EXAM",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "13125",
            "department": "",
            "instructor": "Prof. D. Marvin",
            "notes": "P-LLE 101 or EXAM",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "13167",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EXAM",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "College Mathematics"
         },
         {
            "code": "MATN 120",
            "credits": 3,
            "crn": "13203",
            "department": "",
            "instructor": "Prof. E. Fukunaga",
            "notes": "P-MAT 111 or EXAM",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Pre-Calculus"
         },
         {
            "code": "MATN 121",
            "credits": 4,
            "crn": "10303",
            "department": "",
            "instructor": "Prof. E. Cohen",
            "notes": "P-MAT 120",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Calculus I"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "13224",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-MAT 111 or EXAM",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Statistics for Social Sciences"
         },
         {
            "code": "MATN 513",
            "credits": 3,
            "crn": "16612",
            "department": "",
            "instructor": "Dr. L. Kaganovskiy",
            "notes": "P-MAT 122",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Differential Equations"
         },
         {
            "code": "MCDN 235",
            "credits": 3,
            "crn": "10601",
            "department": "",
            "instructor": "Prof. T. O’hara",
            "notes": "C-MCD 150, MCD 230, MCO 140.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Computer Graphic Design I"
         },
         {
            "code": "MCDN 267",
            "credits": 3,
            "crn": "10604",
            "department": "",
            "instructor": "Prof. I. Goldfeder",
            "notes": "P-MCD 236; C-MCD 262",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Computer Graphic Design III"
         },
         {
            "code": "MCDN 490",
            "credits": 3,
            "crn": "10606",
            "department": "",
            "instructor": "Prof. R. Levy",
            "notes": "P- MCD 335. MCD 302",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Senior Portfolio"
         },
         {
            "code": "MCON 343",
            "credits": 3,
            "crn": "15721",
            "department": "",
            "instructor": "Prof. M. Plonczak",
            "notes": "P-MCO 232",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Database Concepts and Design"
         },
         {
            "code": "POL 201",
            "credits": 3,
            "crn": "1694110",
            "department": "",
            "instructor": "Prof. A. Mond",
            "notes": "P-POL 101",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to American Law"
         },
         {
            "code": "PSYN 201",
            "credits": 3,
            "crn": "13609",
            "department": "",
            "instructor": "Prof. D. Nierenberg",
            "notes": "P-PSY 101",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Developmental Psychology"
         },
         {
            "code": "PSYN 301.6",
            "credits": 1,
            "crn": "13625",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "C-PSY 301",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Experimental Psychology LAB"
         },
         {
            "code": "PSYN 335",
            "credits": 3,
            "crn": "13645",
            "department": "",
            "instructor": "Dr. E. Gampel",
            "notes": "P-PSY 101",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Abnormal Psychology"
         },
         {
            "code": "PSYN 351",
            "credits": 3,
            "crn": "10640",
            "department": "",
            "instructor": "Dr. R. Kidron",
            "notes": "P-PSY 101, Note: This course is also offered on Monday afternoons.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Biological Psychology"
         },
         {
            "code": "PSYN 401",
            "credits": 3,
            "crn": "10641",
            "department": "",
            "instructor": "Prof. L. Sheinhouse",
            "notes": "P-PSY 335 or Perm.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Psychology of the Exceptional Child"
         },
         {
            "code": "SASN 371",
            "credits": 3,
            "crn": "10653",
            "department": "",
            "instructor": "Dr. M. Verbit",
            "notes": "P-None; may be used to satisfy a Judaic Studies or Sociology requirement, but not both.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "The American Jewish Community"
         },
         {
            "code": "SPLN 309",
            "credits": 3,
            "crn": "10483",
            "department": "",
            "instructor": "Dr. E. Hurley",
            "notes": "P-COC 308",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to Audiology"
         },
         {
            "code": "SPLN 493",
            "credits": 3,
            "crn": "10510",
            "department": "",
            "instructor": "Prof. R. Roitman",
            "notes": "P-Senior Status, C-COC 310.",
            "section": "FD",
            "time": [
               {
                  "day": "T",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Senior Seminar"
         },
         {
            "code": "BION 101",
            "credits": 0,
            "crn": "13014",
            "department": "",
            "instructor": "Dr. M. Chowdhury",
            "notes": "P-None; C-BIO 101 LEC (Thursday 8:20 P.M.)",
            "section": "FF2",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Principles of Biology I LAB"
         },
         {
            "code": "BION 111",
            "credits": 4,
            "crn": "10712",
            "department": "",
            "instructor": "Prof. W. Merdian",
            "notes": "P-None Not for Science major C-LAB (Sunday 12:00 PM- 2:50 PM)",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Human Biology Lecture"
         },
         {
            "code": "BION 113",
            "credits": 3,
            "crn": "15333",
            "department": "",
            "instructor": "Prof. W. Merdian",
            "notes": "P-None; Not for Science, Education or Speech majors.",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Human Biology Lecture (only)"
         },
         {
            "code": "BION 246",
            "credits": 3,
            "crn": "10440",
            "department": "",
            "instructor": "Prof. R. Weinberger",
            "notes": "P-None. Satisfies science requirement for non-majors. Not for biology majors.",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Nutrition & Human Development"
         },
         {
            "code": "CPCN 101",
            "credits": 4,
            "crn": "15794",
            "department": "",
            "instructor": "Dr. E. Mintzer",
            "notes": "P-CPC 101; C-CPC 101 LAB (Sunday, 9:00 AM – 11:30 AM)",
            "section": "FEQ",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "5:45pm"
               }
            ],
            "title": "General Chemistry I LEC"
         },
         {
            "code": "CPCN 101",
            "credits": 4,
            "crn": "15844",
            "department": "",
            "instructor": "Dr. E. Mintzer",
            "notes": "P-CPC 101; C-CPC 101 LAB (Sunday, 11:50 AM – 2:10 PM)",
            "section": "FER",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "5:45pm"
               }
            ],
            "title": "General Chemistry I LEC"
         },
         {
            "code": "CPCN 201",
            "credits": 0,
            "crn": "16283",
            "department": "",
            "instructor": "Prof. A. Mahendran",
            "notes": "P-CPC 102, C-CPC 201, LEC (Tuesday, 5:45 PM – 8:15 PM)",
            "section": "FC",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Organic Chemistry I LAB"
         },
         {
            "code": "EBAN 302",
            "credits": 3,
            "crn": "15072",
            "department": "",
            "instructor": "Prof. J. Hirsch",
            "notes": "P-EBA 102, C-EBA 201",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Government and Not-For-Profit Accounting"
         },
         {
            "code": "EBAN 314",
            "credits": 3,
            "crn": "13251",
            "department": "",
            "instructor": "Prof. D Berger",
            "notes": "P-EBA 102, C-EBA 201",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Federal Income Taxation of Individuals"
         },
         {
            "code": "EBEN 102",
            "credits": 3,
            "crn": "13292",
            "department": "",
            "instructor": "Dr. M. Yarmish",
            "notes": "P-None",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBFN 101",
            "credits": 3,
            "crn": "13296",
            "department": "",
            "instructor": "Dr. W. Fischbein",
            "notes": "P-MAT 111; C-EBE 101 or EBE 102.",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Principles of Finance"
         },
         {
            "code": "EBKN 201",
            "credits": 3,
            "crn": "16037",
            "department": "",
            "instructor": "Prof. E. Popkoff",
            "notes": "P-EBK 101",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Consumer Behavior"
         },
         {
            "code": "EBMN 493",
            "credits": 3,
            "crn": "10589",
            "department": "",
            "instructor": "Prof. A. Rovt",
            "notes": "P-90 credits and 300 level business courses.",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Business Policy"
         },
         {
            "code": "EDUN 209",
            "credits": 3,
            "crn": "10594",
            "department": "",
            "instructor": "Dr. A. Brezak",
            "notes": "P or C-EDU 201",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Foundations of Parenting"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "13326",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None.",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "HISN 221",
            "credits": 3,
            "crn": "13330",
            "department": "",
            "instructor": "Dr. D. Hertzberg",
            "notes": "P-None",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Survey of Modern History II"
         },
         {
            "code": "JSBN 472",
            "credits": 3,
            "crn": "16181",
            "department": "",
            "instructor": "Prof. I. Layosh",
            "notes": "P-None",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Book of Daniel"
         },
         {
            "code": "LLEN 100",
            "credits": 3,
            "crn": "13128",
            "department": "",
            "instructor": "Prof. R. Reichman",
            "notes": "P-EXAM",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to English Composition"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "13132",
            "department": "",
            "instructor": "Prof. J. Horowitz",
            "notes": "P-LLE 100 or EXAM",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "13126",
            "department": "",
            "instructor": "Prof. J. November",
            "notes": "P-LLE 101 or EXAM",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "LLEN 220",
            "credits": 3,
            "crn": "13160",
            "department": "",
            "instructor": "Dr. M. Grossman",
            "notes": "P-LLE 102 or EXAM",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Survey of Modern Literature I"
         },
         {
            "code": "LLEN 221",
            "credits": 3,
            "crn": "13153",
            "department": "",
            "instructor": "Prof. H. Buchman",
            "notes": "P-LLE 102 or EXAM",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Survey of Modern Literature II"
         },
         {
            "code": "LLEN 510",
            "credits": 3,
            "crn": "16942",
            "department": "",
            "instructor": "Dr. B. Engelberg",
            "notes": "P-LLE 102 or Dept. Approval.",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Literature of the Self"
         },
         {
            "code": "LLYN 101",
            "credits": 3,
            "crn": "10592",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Elementary Yiddish I"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "16943",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EXAM",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "College Mathematics"
         },
         {
            "code": "MATN 232",
            "credits": 3,
            "crn": "10316",
            "department": "",
            "instructor": "Prof. E. Cohen",
            "notes": "P-MAT 331",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Quantitative Analysis"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "13225",
            "department": "",
            "instructor": "Prof. S. Silman",
            "notes": "P-MAT 111 or EXAM",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Statistics for Social Science"
         },
         {
            "code": "MCDN 150",
            "credits": 3,
            "crn": "15656",
            "department": "",
            "instructor": "Prof. C. Steen",
            "notes": "C-MCD 230, MCD 235, (No LAB)",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Foundations of Design I"
         },
         {
            "code": "MCDN 291",
            "credits": 3,
            "crn": "16189",
            "department": "",
            "instructor": "Prof. J. Ruelle",
            "notes": "P-MCD 235 or Dept. Approval.",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Fundamentals of 2-D Animation"
         },
         {
            "code": "MCON 104",
            "credits": 4,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Abrahamson",
            "notes": "P-None C-MCON 141",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Computing Theory and Application"
         },
         {
            "code": "MCON 264",
            "credits": 3,
            "crn": "16192",
            "department": "",
            "instructor": "Prof. M. Plonczak",
            "notes": "P-MCO 232",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Data Structures I"
         },
         {
            "code": "MCON 148",
            "credits": 3,
            "crn": "10610",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-MCO 140",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Advanced Computer Business Applications"
         },
         {
            "code": "POLN 244",
            "credits": 3,
            "crn": "16196",
            "department": "",
            "instructor": "Prof. A. Mond",
            "notes": "P-POL 101",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Political Parties and the Electoral Process"
         },
         {
            "code": "PSYN 101",
            "credits": 3,
            "crn": "13607",
            "department": "",
            "instructor": "Dr. R. Soffer",
            "notes": "P-None",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Introduction to Psychology"
         },
         {
            "code": "PSYN 102",
            "credits": 3,
            "crn": "13608",
            "department": "",
            "instructor": "Dr. R. Kidron",
            "notes": "P-PSY 101",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Social Psychology"
         },
         {
            "code": "PSYN 231",
            "credits": 3,
            "crn": "10630",
            "department": "",
            "instructor": "Dr. M. Zacharowicz",
            "notes": "P-PSY 101",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Psychological Testing"
         },
         {
            "code": "PSYN 310",
            "credits": 3,
            "crn": "15308",
            "department": "",
            "instructor": "Dr. E. Gampel",
            "notes": "P-PSY 101",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Personality"
         },
         {
            "code": "PSYN 325",
            "credits": 3,
            "crn": "16197",
            "department": "",
            "instructor": "Dr. D. Steinman",
            "notes": "P-PSY 101",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Drugs and Behavior"
         },
         {
            "code": "SPLN 210",
            "credits": 3,
            "crn": "10476",
            "department": "",
            "instructor": "Prof. P. Bottino",
            "notes": "P-None",
            "section": "FE",
            "time": [
               {
                  "day": "R",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Normal Speech and Language Development"
         },
         {
            "code": "SPLN 411",
            "credits": 3,
            "crn": "10507",
            "department": "",
            "instructor": "Dr. E. Hurley",
            "notes": "P-COC 309",
            "section": "FE",
            "time": [
               {
                  "day": "",
                  "end": "8:15pm",
                  "start": "6:00pm"
               }
            ],
            "title": "Auditory Rehabilitation"
         },
         {
            "code": "BION 101",
            "credits": 4,
            "crn": "10709",
            "department": "",
            "instructor": "Dr. M. Chowdhury",
            "notes": "P – None; C- Bio 101 LAB (Sunday 9:00 AM)",
            "section": "FF1",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Biology I Lecture"
         },
         {
            "code": "BION 101",
            "credits": 4,
            "crn": "10709",
            "department": "",
            "instructor": "Dr. M. Chowdhury",
            "notes": "P-None C-BIO 101 LAB (Thursday 6:00 PM)",
            "section": "FF2",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Biology I Lecture"
         },
         {
            "code": "BION 211",
            "credits": 0,
            "crn": "16198",
            "department": "",
            "instructor": "Dr. A. Babayan",
            "notes": "C-BIO 211 Lecture. (Tuesday, 8:20 PM)",
            "section": "FD",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Genetics Lab"
         },
         {
            "code": "BION 222",
            "credits": 0,
            "crn": "16200",
            "department": "",
            "instructor": "Prof. W. Merdian",
            "notes": "C-BIO 222 LEC (Tuesday 8:20 PM)",
            "section": "FD",
            "time": [
               {
                  "day": "R",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Anatomy and Physiology I LAB"
         },
         {
            "code": "COAN 221",
            "credits": 3,
            "crn": "10455",
            "department": "",
            "instructor": "Prof. S. Beck",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Studio Workshop: Drawing I"
         },
         {
            "code": "CPCN 101",
            "credits": 0,
            "crn": "16213",
            "department": "",
            "instructor": "Dr. N. Abbasi",
            "notes": "P-MAT 120, C-CPC 101 LEC (Tuesday, 8:20 PM – 10:55 PM)",
            "section": "FD",
            "time": [
               {
                  "day": "R",
                  "end": "10:55pm",
                  "start": "8:20pm"
               }
            ],
            "title": "General Chemistry I LAB"
         },
         {
            "code": "EBAN 316",
            "credits": 3,
            "crn": "13254",
            "department": "",
            "instructor": "Prof. D. Berger",
            "notes": "P-EBA 314 and EBA 201",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Corporation and Partnership Tax"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "13260",
            "department": "",
            "instructor": "Prof. M. Tsymuk",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "EBFN 210",
            "credits": 3,
            "crn": "16215",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBF 101",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Investment Principles"
         },
         {
            "code": "EBFN 338",
            "credits": 3,
            "crn": "16217",
            "department": "",
            "instructor": "Dr. W. Fischbein",
            "notes": "P-EBF 101",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "International Financial Markets"
         },
         {
            "code": "EBKN 101",
            "credits": 3,
            "crn": "16218",
            "department": "",
            "instructor": "TBA",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to Marketing"
         },
         {
            "code": "EBKN 505",
            "credits": 3,
            "crn": "16219",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBK 101, EBM 101",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "E-Commerce"
         },
         {
            "code": "EBMN 101",
            "credits": 3,
            "crn": "13300",
            "department": "",
            "instructor": "Prof. A. Rovt",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Principles of Management"
         },
         {
            "code": "EBMN 213",
            "credits": 3,
            "crn": "13306",
            "department": "",
            "instructor": "TBA",
            "notes": "P-EBM 101",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Business Law I"
         },
         {
            "code": "EBMN 224",
            "credits": 3,
            "crn": "16074",
            "department": "",
            "instructor": "Prof. S. Felder",
            "notes": "P-EBM 101 and EBE 101/102",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Human Resource Management"
         },
         {
            "code": "EBMN 317",
            "credits": 3,
            "crn": "10588",
            "department": "",
            "instructor": "Prof. E. Popkoff",
            "notes": "P-EBA 102",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "The Social & Governmental Environment of Business"
         },
         {
            "code": "EDSE 600",
            "credits": 3,
            "crn": "16350",
            "department": "",
            "instructor": "Dr. A. Brezak",
            "notes": "P-Department",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "History & Philosophy of Education & Special Education"
         },
         {
            "code": "HISN 221",
            "credits": 3,
            "crn": "16221",
            "department": "",
            "instructor": "Dr. D. Hertzberg",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Survey of Modern History II"
         },
         {
            "code": "JSLN 301",
            "credits": 3,
            "crn": "16227",
            "department": "",
            "instructor": "Prof. R. Weiss",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Topics in Kashrus"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "16228",
            "department": "",
            "instructor": "Prof. J. November",
            "notes": "P-LLE 101 or EXAM",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "LLEN 220",
            "credits": 3,
            "crn": "10100",
            "department": "",
            "instructor": "Prof. R. Shmulewitz",
            "notes": "P-LLE 102 or EXAM",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Survey of Modern Literature I"
         },
         {
            "code": "LLEN 523",
            "credits": 3,
            "crn": "16266",
            "department": "",
            "instructor": "Prof. H. Buchman",
            "notes": "P-LLE 102",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Development of the English Language"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "13178",
            "department": "",
            "instructor": "Dr. Oelbaum",
            "notes": "P-EXAM",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "College Mathematics"
         },
         {
            "code": "MATN 120",
            "credits": 3,
            "crn": "13206",
            "department": "",
            "instructor": "Prof. S. Silman",
            "notes": "P-MAT 111 or EXAM",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Pre-Calculus"
         },
         {
            "code": "MATN 333",
            "credits": 3,
            "crn": "10319",
            "department": "",
            "instructor": "Prof. E. Cohen",
            "notes": "P-MAT 231",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Actuarial Math I"
         },
         {
            "code": "MCDN 221",
            "credits": 3,
            "crn": "16945",
            "department": "",
            "instructor": "Prof. B. Rachman",
            "notes": "Suggested P-MCD 236",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Photography"
         },
         {
            "code": "MCDN 230",
            "credits": 3,
            "crn": "10600",
            "department": "",
            "instructor": "Prof. A. Finnel",
            "notes": "C-MCO 150, MCD 235 LAB",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Digital Multimedia Design I"
         },
         {
            "code": "MCDN 263",
            "credits": 3,
            "crn": "10603",
            "department": "",
            "instructor": "Prof. T. Borowski",
            "notes": "P-MCD 155, MCD 231, MCD 236. C-MCD 262 and 267.",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Web Page Design I"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "16269",
            "department": "",
            "instructor": "Prof. S. Abrahamson",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Comp. Concepts with Computer Applications"
         },
         {
            "code": "MCON 251",
            "credits": 3,
            "crn": "16270",
            "department": "",
            "instructor": "Prof. M. Erlbaum",
            "notes": "P-MCO 232",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Programming Languages"
         },
         {
            "code": "PSYN 201",
            "credits": 3,
            "crn": "15309",
            "department": "",
            "instructor": "Dr. M. Zacharowicz",
            "notes": "P-PSY 101",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Developmental Psychology"
         },
         {
            "code": "PSYN 226",
            "credits": 3,
            "crn": "10629",
            "department": "",
            "instructor": "Prof. E. Glanzman",
            "notes": "P-PSY 101. (Counts as a Psychology Elective.)",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Psychology of Leadership"
         },
         {
            "code": "PSYN 335",
            "credits": 3,
            "crn": "13697",
            "department": "",
            "instructor": "Dr. Gampel",
            "notes": "P-PSY 101",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Abnormal Psychology"
         },
         {
            "code": "PSYN 351",
            "credits": 3,
            "crn": "15310",
            "department": "",
            "instructor": "Dr. R. Kidron",
            "notes": "P-PSY 101, Note: This course is offered in different time slots, including Monday afternoons.",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Biological Psychology"
         },
         {
            "code": "SPLN 308",
            "credits": 3,
            "crn": "10479",
            "department": "",
            "instructor": "Prof. J. Holke",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to Hearing & Acoustics"
         },
         {
            "code": "SPLN 223",
            "credits": 3,
            "crn": "16544",
            "department": "",
            "instructor": "Prof. D. Wilbur",
            "notes": "P-None",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Introduction to Sign Language"
         },
         {
            "code": "SPLN 361",
            "credits": 3,
            "crn": "10491",
            "department": "",
            "instructor": "Prof. P. Bottino",
            "notes": "P-PSY 101, same as PSY 311.",
            "section": "FF",
            "time": [
               {
                  "day": "R",
                  "end": "10:35pm",
                  "start": "8:20pm"
               }
            ],
            "title": "Psycholinguistics"
         },
         {
            "code": "BION 101",
            "credits": 0,
            "crn": "13047",
            "department": "",
            "instructor": "TBA",
            "notes": "C- BIO 101 Lecture (Sunday 11:40 AM)",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:00am"
               }
            ],
            "title": "Principles of Biology I-LAB"
         },
         {
            "code": "BION 101",
            "credits": 0,
            "crn": "13065",
            "department": "",
            "instructor": "TBA",
            "notes": "C-BIO 101 Lecture (Thursday 8:20 PM)",
            "section": "FF1",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:00am"
               }
            ],
            "title": "Principles of Biology I-LAB"
         },
         {
            "code": "CPCN 101",
            "credits": 0,
            "crn": "15804",
            "department": "",
            "instructor": "Dr. N. Abbasi",
            "notes": "C-CPC 101 LEC (Thursday, 5:45PM - 8:15 PM)",
            "section": "FEQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:00am"
               }
            ],
            "title": "General Chemistry I LAB"
         },
         {
            "code": "CPPN 101",
            "credits": 4,
            "crn": "10534",
            "department": "",
            "instructor": "Dr. D. Goldberg",
            "notes": "C-CPP 101 LAB (Tuesday, 5:40 PM)",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:00am"
               }
            ],
            "title": "General Physics I LEC"
         },
         {
            "code": "EBAN 101",
            "credits": 3,
            "crn": "13239",
            "department": "",
            "instructor": "Prof. B. Halberstam",
            "notes": "P-None",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Principles of Accounting I"
         },
         {
            "code": "EBAN 302",
            "credits": 3,
            "crn": "16285",
            "department": "",
            "instructor": "Prof. J. Newman",
            "notes": "P-EBA 102, C-EBA 201",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Government & Not-For-Profit Accounting."
         },
         {
            "code": "EBEN 102",
            "credits": 3,
            "crn": "16287",
            "department": "",
            "instructor": "Prof. A. Panoff",
            "notes": "P-None",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBFN 220",
            "credits": 3,
            "crn": "16305",
            "department": "",
            "instructor": "Dr. E. Cohn",
            "notes": "P-EBF 101",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Corporate Finance"
         },
         {
            "code": "EBMN 214",
            "credits": 3,
            "crn": "10587",
            "department": "",
            "instructor": "Prof. I. Klepfish",
            "notes": "P-EBM 213",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Business Law II"
         },
         {
            "code": "EDUN 303",
            "credits": 3,
            "crn": "16946",
            "department": "",
            "instructor": "Prof. B. Carlin",
            "notes": "P-EDU 301. This is a hybrid course with an online component. It meets in person every second week.",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Teaching the Social Studies Spectrum Grades 1-6"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "13327",
            "department": "",
            "instructor": "Prof. M. Neghida",
            "notes": "P-None",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "LLEN 101",
            "credits": 3,
            "crn": "13133",
            "department": "",
            "instructor": "Prof. R. Reichman",
            "notes": "P-LLE 100 or Exam",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "English Composition I"
         },
         {
            "code": "LLEN 221",
            "credits": 3,
            "crn": "13155",
            "department": "",
            "instructor": "Prof. H. Buchman",
            "notes": "P-LLE 102 or Exam",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Survey of Modern Literature II"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "13183",
            "department": "",
            "instructor": "Prof. Z. Lipchik",
            "notes": "P-EXAM",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "College Mathematics"
         },
         {
            "code": "MATN 510",
            "credits": 3,
            "crn": "16314",
            "department": "",
            "instructor": "Dr. L. Kaganovskiy",
            "notes": "P-MAT 122",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Bio-Statistics"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "16315",
            "department": "",
            "instructor": "Prof. Y. Lehrman",
            "notes": "P-None. Not for computer Science majors.",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Computer Concepts with Computer Applications"
         },
         {
            "code": "PSYN 401",
            "credits": 3,
            "crn": "13659",
            "department": "",
            "instructor": "Dr. M. Zacharowicz",
            "notes": "P-PSY 101",
            "section": "FQ",
            "time": [
               {
                  "day": "S",
                  "end": "11:45am",
                  "start": "9:15am"
               }
            ],
            "title": "Psychology of the Exceptional Child"
         },
         {
            "code": "BION 101",
            "credits": 4,
            "crn": "15334",
            "department": "",
            "instructor": "TBA",
            "notes": "C- BIO 101 (LAB Sunday 9:00 AM)",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:30pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Principles of Biology I Lecture"
         },
         {
            "code": "BION 111",
            "credits": 0,
            "crn": "15320",
            "department": "",
            "instructor": "TBA",
            "notes": "C-BIO 111 LEC (Tues./Thurs. 3:15 PM)",
            "section": "FA",
            "time": [
               {
                  "day": "S",
                  "end": "2:50pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Human Biology LAB"
         },
         {
            "code": "BION 111",
            "credits": 0,
            "crn": "15327",
            "department": "",
            "instructor": "TBA",
            "notes": "C-BIO111 LEC (Tuesday 8:20 PM) – 10:35 PM",
            "section": "FD",
            "time": [
               {
                  "day": "S",
                  "end": "2:50pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Human Biology I LAB"
         },
         {
            "code": "BION 111",
            "credits": 0,
            "crn": "15332",
            "department": "",
            "instructor": "TBA",
            "notes": "C-BIO 111 LEC (Thursday 6:00 P.M.)",
            "section": "FE",
            "time": [
               {
                  "day": "S",
                  "end": "2:50pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Human Biology LAB"
         },
         {
            "code": "BION 228",
            "credits": 0,
            "crn": "15326",
            "department": "",
            "instructor": "Dr. Z. Leifer",
            "notes": "P – BIO 102; C – BIO 228 LEC (Tuesday 6:00 PM)",
            "section": "FC",
            "time": [
               {
                  "day": "S",
                  "end": "2:50pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Microbiology LAB"
         },
         {
            "code": "COAN 131",
            "credits": 3,
            "crn": "16316",
            "department": "",
            "instructor": "Prof. D. Hyman",
            "notes": "P-None",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:30pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Intro to Music"
         },
         {
            "code": "CPCN 101",
            "credits": 0,
            "crn": "15857",
            "department": "",
            "instructor": "Dr. N. Abbasi",
            "notes": "P-MAT 120; C-CPC 101, LEC (Thursday, 5:45 PM – 8:15 PM)",
            "section": "FER",
            "time": [
               {
                  "day": "S",
                  "end": "2:50pm",
                  "start": "12:00pm"
               }
            ],
            "title": "General Chemistry LAB"
         },
         {
            "code": "EBAN 102",
            "credits": 3,
            "crn": "13248",
            "department": "",
            "instructor": "Prof. B. Halberstam",
            "notes": "P-EBA 101",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:35pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Principles of Accounting II"
         },
         {
            "code": "EBAN 451",
            "credits": 4,
            "crn": "10574",
            "department": "",
            "instructor": "Prof. C. Herskowitz",
            "notes": "P-Senior status",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "3:25pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Contemporary Issues in Accounting"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "13261",
            "department": "",
            "instructor": "Dr. M. Szenberg",
            "notes": "P-None",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:30pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "LLEN 102",
            "credits": 3,
            "crn": "16317",
            "department": "",
            "instructor": "Prof. J. Epstein",
            "notes": "P-LLE 101 or EXAM",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:30pm",
                  "start": "12:00pm"
               }
            ],
            "title": "English Composition II"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "15347",
            "department": "",
            "instructor": "Prof. Z. Lipchik",
            "notes": "P-MAT 111 or EXAM",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:30pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Statistics for Social Science Majors"
         },
         {
            "code": "POLN 101",
            "credits": 3,
            "crn": "16318",
            "department": "",
            "instructor": "Prof. D. Kupfer",
            "notes": "P-None",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:30pm",
                  "start": "12:00pm"
               }
            ],
            "title": "American Politics"
         },
         {
            "code": "PSYN 231",
            "credits": 3,
            "crn": "13610",
            "department": "",
            "instructor": "Dr. M. Zacharowicz",
            "notes": "P-PSY 101",
            "section": "FR",
            "time": [
               {
                  "day": "S",
                  "end": "2:30pm",
                  "start": "12:00pm"
               }
            ],
            "title": "Psychological Testing"
         },
         {
            "code": "PEDN 110",
            "credits": 1,
            "crn": "10617",
            "department": "",
            "instructor": "TBA",
            "notes": "Offered at Kingsway Jewish Center 2902 Kings Highway.",
            "section": "FT",
            "time": [
               {
                  "day": "M",
                  "end": "9:30pm",
                  "start": "7:30pm"
               }
            ],
            "title": "Basketball & General Physical Education."
         },
         {
            "code": "PEDN 160",
            "credits": 1,
            "crn": "10618",
            "department": "",
            "instructor": "TBA",
            "notes": "Offered at Kingsway Jewish Center 2902 Kings Highway.",
            "section": "FT",
            "time": [
               {
                  "day": "M",
                  "end": "9:30pm",
                  "start": "7:30pm"
               }
            ],
            "title": "Swimming"
         },
         {
            "code": "PEDN 508",
            "credits": 1,
            "crn": "16947",
            "department": "",
            "instructor": "TBA",
            "notes": "Offered Kingsway Jewish Center 2902 Kings Highway.",
            "section": "FT",
            "time": [
               {
                  "day": "M",
                  "end": "9:30pm",
                  "start": "7:30pm"
               }
            ],
            "title": "Dance"
         },
         {
            "code": "BION 493",
            "credits": 3,
            "crn": "16948",
            "department": "",
            "instructor": "Dr. R. S. Bressler",
            "notes": "P-SEN & DEPT PERM. Required conferences every other Tuesday at 5:40 PM.",
            "section": "FP1",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Research Topics in Biology"
         },
         {
            "code": "BION 493",
            "credits": 3,
            "crn": "16949",
            "department": "",
            "instructor": "Dr. A. Levine",
            "notes": "P-SEN & DEPT PERM. Required Conferences Every Other Tuesday at 5:40 PM.",
            "section": "FP2",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Research Topics in Biology"
         },
         {
            "code": "BION 494",
            "credits": 3,
            "crn": "16950",
            "department": "",
            "instructor": "Dr. R. S. Bressler",
            "notes": "P-SEN & DEPT PERM. Students must arrange LAB placement in advance.",
            "section": "FP",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Senior Honors Project in Biology"
         },
         {
            "code": "HISN 493",
            "credits": 3,
            "crn": "10320",
            "department": "",
            "instructor": "TBA",
            "notes": "P-Permission",
            "section": "FP",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Advanced Topics in Social Sciences"
         },
         {
            "code": "MATN 493",
            "credits": 3,
            "crn": "13220",
            "department": "",
            "instructor": "Prof. D. Wohl",
            "notes": "P-DEPT",
            "section": "FP1",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Research Project In Mathematics"
         },
         {
            "code": "MATN 493",
            "credits": 3,
            "crn": "16321",
            "department": "",
            "instructor": "Dr. B. Rabinowitz",
            "notes": "P-DEPT",
            "section": "FP2",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Research Project In Mathematics"
         },
         {
            "code": "MCDN 498",
            "credits": 3,
            "crn": "10607",
            "department": "",
            "instructor": "Prof. S. DeCastro",
            "notes": "P-MCD 263.",
            "section": "FI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Internship in Digital Multimedia Design."
         },
         {
            "code": "MCON 452",
            "credits": 3,
            "crn": "16323",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-DEPT",
            "section": "FI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Internship in Computer Science"
         },
         {
            "code": "POLN 485",
            "credits": 3,
            "crn": "16325",
            "department": "",
            "instructor": "Dr. D. Chill",
            "notes": "P-DEPT",
            "section": "NI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Legislative Internship"
         },
         {
            "code": "POLN 486",
            "credits": 3,
            "crn": "16328",
            "department": "",
            "instructor": "Dr. D. Chill",
            "notes": "P-DEPT",
            "section": "NI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Communal Internship"
         },
         {
            "code": "POLN 494",
            "credits": 3,
            "crn": "16333",
            "department": "",
            "instructor": "Prof. T. Rozinski",
            "notes": "P-POL 493 and DEPT permission.",
            "section": "NI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Senior Honors Project in Political Science"
         },
         {
            "code": "PSYN 485",
            "credits": 3,
            "crn": "10644",
            "department": "",
            "instructor": "Dr. M. Press",
            "notes": "P-21 Credits In Psychology and permission.",
            "section": "FI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Internship in Psychology"
         },
         {
            "code": "PSYN 485",
            "credits": 3,
            "crn": "10644",
            "department": "",
            "instructor": "Dr. R. Soffer",
            "notes": "P-21 Credits In Psychology and permission.",
            "section": "FI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Internship in Psychology - Research"
         },
         {
            "code": "PSYN 486",
            "credits": 3,
            "crn": "16952",
            "department": "",
            "instructor": "Dr. R. Soffer",
            "notes": "P-21 Credits in Psychology and permission.",
            "section": "FI",
            "time": [
               {
                  "day": "TBA",
                  "end": "tba",
                  "start": "tba"
               }
            ],
            "title": "Internship in Psychology – Clinical"
         },
         {
            "code": "EDUN 318",
            "credits": 2,
            "crn": "16303",
            "department": "",
            "instructor": "Dr. D. Zelasko/ Prof. M. Wapner",
            "notes": "P-Approval of chair; Pass STAT",
            "section": " ",
            "time": [
               {
                  "day": "MTWRF",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Field Experience & Student Teaching I"
         },
         {
            "code": "SPEN 319",
            "credits": 2,
            "crn": "16339",
            "department": "",
            "instructor": "Dr. D. Zelasko/ Prof. M. Wapner",
            "notes": "P-Approval of chair; Pass STAT",
            "section": " ",
            "time": [
               {
                  "day": "MTWRF",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Field Experience"
         },
         {
            "code": "SPEN 418",
            "credits": 3,
            "crn": "16341",
            "department": "",
            "instructor": "Dr. D. Zelasko/ Prof. M. Wapner",
            "notes": "P-Approval of chair; Pass STAT",
            "section": " ",
            "time": [
               {
                  "day": "MTWRF",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Field Experience & Student Teaching II"
         },
         {
            "code": "SPEN 419",
            "credits": 3,
            "crn": "16342",
            "department": "",
            "instructor": "Dr. D. Zelasko/ Prof. M. Wapner",
            "notes": "P-Approval of chair; Pass STAT",
            "section": " ",
            "time": [
               {
                  "day": "MTWRF",
                  "end": "3:00pm",
                  "start": "9:00am"
               }
            ],
            "title": "Student Teaching"
         },
         {
            "code": "MCO 214",
            "credits": 1,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Mahat",
            "notes": "P-MCO 104",
            "section": "FV",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Spreadsheet Tutorial"
         },
         {
            "code": "MCO 215",
            "credits": 1,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Mahat",
            "notes": "P-MCO 141",
            "section": "FV",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Database Tutorial"
         },
         {
            "code": "MCO 216",
            "credits": 1,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Mahat",
            "notes": "P-MCO 104",
            "section": "FV",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Advanced Spreadsheet Tutorial"
         },
         {
            "code": "MCO 218",
            "credits": 1,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Mahat",
            "notes": "P-MCO 215 or MCO 343.",
            "section": "FV",
            "time": [
               {
                  "day": "TBA",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Advanced Database Tutorial"
         },
         {
            "code": "COAN 101",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Grenadir",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": "tba"
               }
            ],
            "title": "Art of Western Civilization"
         },
         {
            "code": "EBEN 101",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Rockove",
            "notes": "P- None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Macroeconomics"
         },
         {
            "code": "EBEN 102",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Rockove",
            "notes": "P- None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Microeconomics"
         },
         {
            "code": "EBFN 220",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. M. Rosenberg",
            "notes": "P- EBF 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Corporation Finance"
         },
         {
            "code": "EBKN 101",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Rovt",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Marketing"
         },
         {
            "code": "EBKN 340",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Vanek",
            "notes": "P-EBK 101, EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "International Marketing Management"
         },
         {
            "code": "EBLN 100",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Stern",
            "notes": "P-EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Gerontology"
         },
         {
            "code": "EBMN 318",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Seideman",
            "notes": "P-EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Legal Aspects In Long Term Care"
         },
         {
            "code": "EBMN 340",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Stern",
            "notes": "P-EBM 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Long Term Care Administration"
         },
         {
            "code": "EDUN 201",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. C. Shapiro",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Psychosocial Foundations Growth, Development and Learning Birth thru Grade 6"
         },
         {
            "code": "EDUN 301",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. D. Zelasko",
            "notes": "P or C-EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Teach Read & Language Arts, Grades 1–6."
         },
         {
            "code": "EDUN 303",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. B. Carlin",
            "notes": "P or C-EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Teach the Social Studies Spectrum Subjects, Grades 1-6."
         },
         {
            "code": "EDUN 304",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. B. Czeladnicki",
            "notes": "P or C-EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Math, Science and Technology; Teaching and Remediation, Grades 1-6"
         },
         {
            "code": "EDUN 311",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Hamilton",
            "notes": "P or C-EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Early Childhood Education"
         },
         {
            "code": "EDUN 316",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. G. Bell-Baptiste",
            "notes": "P or C-EDU 201",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Language Acquisition & Emergent Literacy I, Birth – Pre K"
         },
         {
            "code": "HISN 141",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Emergence of the U.S. I to 1877"
         },
         {
            "code": "HISN 155",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. H. Abramson",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "History of the Jewish People I"
         },
         {
            "code": "HISN 220",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Survey of Modern History I"
         },
         {
            "code": "HISN 221",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Survey of Modern History II"
         },
         {
            "code": "HISN 271",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "American Jewish History"
         },
         {
            "code": "HISN 306",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. E. Hymes",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "History of New York City"
         },
         {
            "code": "HISN 450",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. T. Lauer",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "American Cultural History"
         },
         {
            "code": "MATN 111",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Polyakov",
            "notes": "P- Exam",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "College Math"
         },
         {
            "code": "MATN 120",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MAT 111 or Exam",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Pre-Calculus"
         },
         {
            "code": "MATN 121",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "TBA",
            "notes": "P- MAT 120 or Exam",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Calculus I"
         },
         {
            "code": "MATN 261",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "TBA",
            "notes": "P-MAT 111 or Exam",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Statistics for Social Science majors"
         },
         {
            "code": "MCON 122",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Computer Literacy and Information Retrieval"
         },
         {
            "code": "MCON 140",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Fink",
            "notes": "P-None",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Computer Concepts with Applications"
         },
         {
            "code": "MCON 148",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-MCO 140",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Computer Business Applications"
         },
         {
            "code": "MCON 245",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "UNIX"
         },
         {
            "code": "MCON 256",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. S. Fink",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Database Programming"
         },
         {
            "code": "MCON 275",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. J. Robinson",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Advanced Internet Tools & Web PG DSG"
         },
         {
            "code": "MCON 358",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. M. Gutherc",
            "notes": "P-MCO 141",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Web Programming"
         },
         {
            "code": "PSYN 102",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. E. Litwin",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Social Psychology"
         },
         {
            "code": "PSYN 201",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. E. Litwin",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Development Psychology"
         },
         {
            "code": "PSYN 301",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101, MAT 261",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Experimental Psychology"
         },
         {
            "code": "PSYN 301.6",
            "credits": 1,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-Co-requisite, PSY 301 OL",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Experimental Psychology LAB"
         },
         {
            "code": "PSYN 310",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Brownstein",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Personality"
         },
         {
            "code": "PSYN 325",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Drugs and Behavior"
         },
         {
            "code": "PSYN 332",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "History and Systems"
         },
         {
            "code": "PSYN 335",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. A. Brownstein",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Abnormal Psychology"
         },
         {
            "code": "PSYN 345",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. E. Litwin",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Psychology of Health and illness"
         },
         {
            "code": "PSYN 351",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. C. Tarshish",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Biological Psychology"
         },
         {
            "code": "PSYN 420",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. A. Geliebter",
            "notes": "P-PSY 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Eating Disorders"
         },
         {
            "code": "SpEd 309",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof. C. Christie",
            "notes": "P-EDU 301/303 or EDU 304",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Principles of Curriculum Development for Students with Disabilities, Grades 1-6."
         },
         {
            "code": "SpEd 313",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Prof S. Hamilton",
            "notes": "EDU 311 or EDU 312 and EDU 316 or EDU 317.",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Developmentally Appropriate Learning Experience for Young Exceptional Children"
         },
         {
            "code": "EBFN 504",
            "credits": 3,
            "crn": "",
            "department": "",
            "instructor": "Dr. M. Rosenberg",
            "notes": "P-Nine credits of Finance courses after taking EBF 101",
            "section": "OL",
            "time": [
               {
                  "day": "ONLINE",
                  "end": " ",
                  "start": " "
               }
            ],
            "title": "Seminar in Investment Analysis"
         }
      ];
    touroWomenClassesArray.forEach(function(element) {
      touroWomenClasses.insert(element);
    })
  }

   if (sternClasses.find().count() === 0) {
      var sternClassesArray =
         [
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "34424",
               "department": "Accounting",
               "instructor": "Constance J. Crawford",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Accounting Principles I"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "36565",
               "department": "Accounting",
               "instructor": "Joel A. Hochman",
               "prereqs": "",
               "section": "K1",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Accounting Principles I"
            },
            {
               "code": "1002",
               "coreqs": "",
               "credits": 3,
               "crn": "34371",
               "department": "Accounting",
               "instructor": "David Hornung",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Accounting Principles II"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "34166",
               "department": "Accounting",
               "instructor": "David Hornung",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Intermediate Accounting I"
            },
            {
               "code": "3201",
               "coreqs": "",
               "credits": 3,
               "crn": "34220",
               "department": "Accounting",
               "instructor": "Martin A. Leibowitz",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Advanced Accounting"
            },
            {
               "code": "3851",
               "coreqs": "",
               "credits": 3,
               "crn": "34327",
               "department": "Accounting",
               "instructor": "Sidney J. Mehl",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Financial Statement Analysis"
            },
            {
               "code": "1050",
               "coreqs": "",
               "credits": 3,
               "crn": "34239",
               "department": "Art",
               "instructor": "Margaret Samu",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Introduction to Art"
            },
            {
               "code": "1050",
               "coreqs": "",
               "credits": 3,
               "crn": "34549",
               "department": "Art",
               "instructor": "Miriam Weinberg",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Introduction to Art"
            },
            {
               "code": "1050H",
               "coreqs": "",
               "credits": 3,
               "crn": "34548",
               "department": "Art",
               "instructor": "Marnin Young",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Introduction to Art"
            },
            {
               "code": "1051",
               "coreqs": "",
               "credits": 3,
               "crn": "34195",
               "department": "Art",
               "instructor": "Melanie Hanan",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "History of Art I"
            },
            {
               "code": "1052",
               "coreqs": "",
               "credits": 3,
               "crn": "34194",
               "department": "Art",
               "instructor": "Marnin Young",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "History of Art II"
            },
            {
               "code": "1350",
               "coreqs": "",
               "credits": 3,
               "crn": "35504",
               "department": "Art",
               "instructor": "Jacob Wisse",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Baroque Art"
            },
            {
               "code": "1432",
               "coreqs": "",
               "credits": 3,
               "crn": "35503",
               "department": "Art",
               "instructor": "Marnin Young",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Late-Nineteenth Century Art"
            },
            {
               "code": "1637H",
               "coreqs": "",
               "credits": 3,
               "crn": "34372",
               "department": "Art",
               "instructor": "John Kriskiewicz",
               "prereqs": "",
               "section": "FRI",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:30am"
                  }
               ],
               "title": "NYC Architecture &Urban Design"
            },
            {
               "code": "1750",
               "coreqs": "",
               "credits": 3,
               "crn": "35505",
               "department": "Art",
               "instructor": "Herb Leventer",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Philosophy of Art"
            },
            {
               "code": "1948",
               "coreqs": "",
               "credits": 3,
               "crn": "35506",
               "department": "Art",
               "instructor": "Elizabeth Anne Eisenberg",
               "prereqs": "",
               "section": "NPT",
               "time": [
                  {
                     "day": "T",
                     "end": "5:45pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "The Image of Jerusalem"
            },
            {
               "code": "2201",
               "coreqs": "",
               "credits": 3,
               "crn": "34216",
               "department": "Art",
               "instructor": "Mary Therese Creede",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Principles of Design"
            },
            {
               "code": "2301",
               "coreqs": "",
               "credits": 3,
               "crn": "34167",
               "department": "Art",
               "instructor": "John Jerard",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Principles of Drawing"
            },
            {
               "code": "2301Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34503",
               "department": "Art",
               "instructor": "John Jerard",
               "prereqs": "",
               "section": "NT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Principles of Drawing Lab"
            },
            {
               "code": "2511",
               "coreqs": "",
               "credits": 3,
               "crn": "34217",
               "department": "Art",
               "instructor": "Mary Therese Creede",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Beginning Painting"
            },
            {
               "code": "2511Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34505",
               "department": "Art",
               "instructor": "Mary Therese Creede",
               "prereqs": "",
               "section": "AW",
               "time": [
                  {
                     "day": "W",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Beginning Painting Lab"
            },
            {
               "code": "2511Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34506",
               "department": "Art",
               "instructor": "Mary Therese Creede",
               "prereqs": "",
               "section": "CM",
               "time": [
                  {
                     "day": "M",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Beginning Painting Lab"
            },
            {
               "code": "3009",
               "coreqs": "",
               "credits": 3,
               "crn": "34286",
               "department": "Art",
               "instructor": "Alexander Rysdon-Moulitsas",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Intro Computer Design"
            },
            {
               "code": "3012",
               "coreqs": "",
               "credits": 3,
               "crn": "34509",
               "department": "Art",
               "instructor": "TBA",
               "prereqs": "",
               "section": "KLR",
               "time": [
                  {
                     "day": "R",
                     "end": "1:00pm",
                     "start": "10:30am"
                  }
               ],
               "title": "Digital Photography"
            },
            {
               "code": "3014",
               "coreqs": "",
               "credits": 3,
               "crn": "35494",
               "department": "Art",
               "instructor": "Alexander Rysdon-Moulitsas",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Typography"
            },
            {
               "code": "3967",
               "coreqs": "",
               "credits": 3,
               "crn": "34510",
               "department": "Art",
               "instructor": "Barbara L Suhr",
               "prereqs": "",
               "section": "FGW",
               "time": [
                  {
                     "day": "W",
                     "end": "7:30pm",
                     "start": "5:00pm"
                  }
               ],
               "title": "Topics: Book Arts"
            },
            {
               "code": "4974",
               "coreqs": "",
               "credits": 0,
               "crn": "34613",
               "department": "Art",
               "instructor": "Mary Therese Creede",
               "prereqs": "",
               "section": "CLB",
               "time": [
                  {
                     "day": "W",
                     "end": "3:30pm",
                     "start": "2:45pm"
                  }
               ],
               "title": "Pre-Senior Project"
            },
            {
               "code": "4975",
               "coreqs": "",
               "credits": 1,
               "crn": "34511",
               "department": "Art",
               "instructor": "Mary Therese Creede",
               "prereqs": "",
               "section": "TB1",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Senior Project"
            },
            {
               "code": "1082",
               "coreqs": "",
               "credits": 3,
               "crn": "35541",
               "department": "Bible",
               "instructor": "Nechama Esther Price",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Intro to Exegesis II"
            },
            {
               "code": "1083H",
               "coreqs": "",
               "credits": 3,
               "crn": "35539",
               "department": "Bible",
               "instructor": "Michelle J. Levine",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Topics in Exegesis: Sforno"
            },
            {
               "code": "1085",
               "coreqs": "",
               "credits": 3,
               "crn": "35540",
               "department": "Bible",
               "instructor": "Naomi Cohen Grunhaus",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Methods of Peshat: Biblical Stylistics, building blocks of perushim"
            },
            {
               "code": "1086",
               "coreqs": "",
               "credits": 3,
               "crn": "35542",
               "department": "Bible",
               "instructor": "Smadar Rosensweig",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Tps in Exegesis: N. Leibowitz"
            },
            {
               "code": "1088H",
               "coreqs": "",
               "credits": 3,
               "crn": "34470",
               "department": "Bible",
               "instructor": "Mordechai Z. Cohen, Sara Enna Twersky ",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Biblical Exegetes II"
            },
            {
               "code": "1117",
               "coreqs": "",
               "credits": 3,
               "crn": "35543",
               "department": "Bible",
               "instructor": "Deena S. Rabinovich",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Weekly Portion"
            },
            {
               "code": "1160",
               "coreqs": "",
               "credits": 3,
               "crn": "34413",
               "department": "Bible",
               "instructor": "Smadar Rosensweig",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Women in Bible & Rabbinic Lit"
            },
            {
               "code": "1171",
               "coreqs": "",
               "credits": 3,
               "crn": "34234",
               "department": "Bible",
               "instructor": "Shoshana Schechter",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Personal Devlop in the Bible I"
            },
            {
               "code": "1204",
               "coreqs": "",
               "credits": 3,
               "crn": "35544",
               "department": "Bible",
               "instructor": "Shoshana Schechter",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Book of Genesis"
            },
            {
               "code": "1214",
               "coreqs": "",
               "credits": 2,
               "crn": "35545",
               "department": "Bible",
               "instructor": "Moshe M. Tessone",
               "prereqs": "",
               "section": "FGM",
               "time": [
                  {
                     "day": "M",
                     "end": "6:10pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Topics in Genesis"
            },
            {
               "code": "1303",
               "coreqs": "",
               "credits": 3,
               "crn": "34340",
               "department": "Bible",
               "instructor": "Mindy F. Eisenman",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Book of Exodus I"
            },
            {
               "code": "1303",
               "coreqs": "",
               "credits": 3,
               "crn": "34246",
               "department": "Bible",
               "instructor": "Mindy F. Eisenman",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Book of Exodus I"
            },
            {
               "code": "1305",
               "coreqs": "",
               "credits": 3,
               "crn": "34213",
               "department": "Bible",
               "instructor": "Elozor Preil",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Book of Exodus I"
            },
            {
               "code": "1407",
               "coreqs": "",
               "credits": 3,
               "crn": "34476",
               "department": "Bible",
               "instructor": "Deena S. Rabinovich",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Book of Leviticus"
            },
            {
               "code": "1411",
               "coreqs": "",
               "credits": 3,
               "crn": "35546",
               "department": "Bible",
               "instructor": "Moriah Rachel Rosensweig",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Topics in Leviticus"
            },
            {
               "code": "1512",
               "coreqs": "",
               "credits": 3,
               "crn": "35547",
               "department": "Bible",
               "instructor": "Gideon I. Shloush",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Topics in Numbers"
            },
            {
               "code": "1609",
               "coreqs": "",
               "credits": 2,
               "crn": "35548",
               "department": "Bible",
               "instructor": "Shoshana Schechter",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "2:15pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Book of Deuteronomy"
            },
            {
               "code": "2116",
               "coreqs": "",
               "credits": 3,
               "crn": "34422",
               "department": "Bible",
               "instructor": "Ronit Gross",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Book of Joshua"
            },
            {
               "code": "2121",
               "coreqs": "",
               "credits": 3,
               "crn": "35549",
               "department": "Bible",
               "instructor": "Ian Shaffer",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Judges"
            },
            {
               "code": "2149",
               "coreqs": "",
               "credits": 3,
               "crn": "34481",
               "department": "Bible",
               "instructor": "Ian Shaffer",
               "prereqs": "",
               "section": "P",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "Samuel I, Part II"
            },
            {
               "code": "2152",
               "coreqs": "",
               "credits": 3,
               "crn": "34251",
               "department": "Bible",
               "instructor": "Elozor Preil",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Samuel I - Part I"
            },
            {
               "code": "2156",
               "coreqs": "",
               "credits": 3,
               "crn": "34268",
               "department": "Bible",
               "instructor": "Smadar Rosensweig",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Samuel I"
            },
            {
               "code": "2506",
               "coreqs": "",
               "credits": 3,
               "crn": "35550",
               "department": "Bible",
               "instructor": "Naomi Cohen Grunhaus",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Isaiah: Geulah and the Messianic Era. Use to fulfil JPHIL requirement."
            },
            {
               "code": "2555",
               "coreqs": "",
               "credits": 3,
               "crn": "35551",
               "department": "Bible",
               "instructor": "Naomi Cohen Grunhaus",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Jeremiah. Confronting the false prophets. U.INT. Use to fulfill JPHIL"
            },
            {
               "code": "2653",
               "coreqs": "",
               "credits": 3,
               "crn": "34485",
               "department": "Bible",
               "instructor": "Ronit Gross",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Later Prophets: Yonah"
            },
            {
               "code": "3208",
               "coreqs": "",
               "credits": 3,
               "crn": "35555",
               "department": "Bible",
               "instructor": "Gideon I. Shloush",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Psalms II"
            },
            {
               "code": "3257",
               "coreqs": "",
               "credits": 3,
               "crn": "35558",
               "department": "Bible",
               "instructor": "Michelle J. Levine",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Proverbs"
            },
            {
               "code": "3710",
               "coreqs": "",
               "credits": 3,
               "crn": "35559",
               "department": "Bible",
               "instructor": "Moriah Rachel Rosensweig",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Esther"
            },
            {
               "code": "3807",
               "coreqs": "",
               "credits": 3,
               "crn": "35560",
               "department": "Bible",
               "instructor": "Michelle J. Levine",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Daniel"
            },
            {
               "code": "4002",
               "coreqs": "",
               "credits": 3,
               "crn": "34416",
               "department": "Bible",
               "instructor": "Ronit Gross",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Biblical Narrative"
            },
            {
               "code": "1005C",
               "coreqs": "",
               "credits": 4,
               "crn": "34295",
               "department": "Biology",
               "instructor": "Richard Bruce Weiss",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Human Biology"
            },
            {
               "code": "1005Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34296",
               "department": "Biology",
               "instructor": "Richard Bruce Weiss",
               "prereqs": "",
               "section": "AW",
               "time": [
                  {
                     "day": "W",
                     "end": "10:20am",
                     "start": "8:40am"
                  }
               ],
               "title": "Human Biology Lab"
            },
            {
               "code": "1005Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34297",
               "department": "Biology",
               "instructor": "Bill R Bassman",
               "prereqs": "",
               "section": "DW",
               "time": [
                  {
                     "day": "W",
                     "end": "3:10pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Human Biology Lab"
            },
            {
               "code": "1005Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34298",
               "department": "Biology",
               "instructor": "Bill R Bassman",
               "prereqs": "",
               "section": "NPT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:50pm",
                     "start": "3:10pm"
                  }
               ],
               "title": "Human Biology Lab"
            },
            {
               "code": "1011C",
               "coreqs": "",
               "credits": 4,
               "crn": "34342",
               "department": "Biology",
               "instructor": "Brenda Loewy",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Biology Principles"
            },
            {
               "code": "1011C",
               "coreqs": "",
               "credits": 4,
               "crn": "34343",
               "department": "Biology",
               "instructor": "Brenda Loewy",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Biology Principles"
            },
            {
               "code": "1011H",
               "coreqs": "",
               "credits": 4,
               "crn": "34345",
               "department": "Biology",
               "instructor": "Marina Kaufman Holz",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Biology Principles"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34346",
               "department": "Biology",
               "instructor": "Bill R Bassman",
               "prereqs": "",
               "section": "EFM",
               "time": [
                  {
                     "day": "M",
                     "end": "6:00pm",
                     "start": "3:30pm"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34347",
               "department": "Biology",
               "instructor": "Bill R Bassman",
               "prereqs": "",
               "section": "EFW",
               "time": [
                  {
                     "day": "W",
                     "end": "6:05pm",
                     "start": "3:35pm"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36562",
               "department": "Biology",
               "instructor": "Bill R Bassman",
               "prereqs": "",
               "section": "EM1",
               "time": [
                  {
                     "day": "M",
                     "end": "6:00pm",
                     "start": "3:30pm"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36114",
               "department": "Biology",
               "instructor": "Bill R Bassman",
               "prereqs": "",
               "section": "EW1",
               "time": [
                  {
                     "day": "W",
                     "end": "6:05pm",
                     "start": "3:35pm"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36567",
               "department": "Biology",
               "instructor": "Mana Mirjany",
               "prereqs": "",
               "section": "FR1",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:30am"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34348",
               "department": "Biology",
               "instructor": "Mana Mirjany",
               "prereqs": "",
               "section": "FRI",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:30am"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36564",
               "department": "Biology",
               "instructor": "Rafael M. Cuesta-Sanchez",
               "prereqs": "",
               "section": "JK1",
               "time": [
                  {
                     "day": "R",
                     "end": "11:45am",
                     "start": "9:15am"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34349",
               "department": "Biology",
               "instructor": "Rafael M. Cuesta-Sanchez",
               "prereqs": "",
               "section": "JKR",
               "time": [
                  {
                     "day": "R",
                     "end": "11:45am",
                     "start": "9:15am"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34350",
               "department": "Biology",
               "instructor": "Bill R Bassman",
               "prereqs": "",
               "section": "LMT",
               "time": [
                  {
                     "day": "T",
                     "end": "3:00pm",
                     "start": "12:30pm"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1011Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34351",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "MNR",
               "time": [
                  {
                     "day": "R",
                     "end": "4:15pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Bio Principles Lab"
            },
            {
               "code": "1376",
               "coreqs": "",
               "credits": 3,
               "crn": "35495",
               "department": "Biology",
               "instructor": "Daniel Lim",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Biochemistry Lecture"
            },
            {
               "code": "2730C",
               "coreqs": "",
               "credits": 4,
               "crn": "34168",
               "department": "Biology",
               "instructor": "Monica Smiddy",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Human Anatomy"
            },
            {
               "code": "2730Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34324",
               "department": "Biology",
               "instructor": "Jeffrey R. Mollin",
               "prereqs": "",
               "section": "EF",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:20pm",
                     "start": "3:40pm"
                  }
               ],
               "title": "Human Anatomy Laboratory"
            },
            {
               "code": "2730Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34169",
               "department": "Biology",
               "instructor": "Jeffrey R. Mollin",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:35pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Human Anatomy Laboratory"
            },
            {
               "code": "2730Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34170",
               "department": "Biology",
               "instructor": "Jeffrey R. Mollin",
               "prereqs": "",
               "section": "NP",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:55pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Human Anatomy Laboratory"
            },
            {
               "code": "3207C",
               "coreqs": "",
               "credits": 4,
               "crn": "35496",
               "department": "Biology",
               "instructor": "Marina Kaufman Holz",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Cell Biology"
            },
            {
               "code": "3207C",
               "coreqs": "",
               "credits": 4,
               "crn": "34308",
               "department": "Biology",
               "instructor": "Margarita Vigodner",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Cell Biology"
            },
            {
               "code": "3207Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34319",
               "department": "Biology",
               "instructor": "Anna Alayev",
               "prereqs": "",
               "section": "MNR",
               "time": [
                  {
                     "day": "R",
                     "end": "4:15pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Cell Biology Lab"
            },
            {
               "code": "3207Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34318",
               "department": "Biology",
               "instructor": "Margarita Vigodner",
               "prereqs": "",
               "section": "MNT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:15pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Cell Biology Lab"
            },
            {
               "code": "3221",
               "coreqs": "",
               "credits": 3,
               "crn": "34299",
               "department": "Biology",
               "instructor": "Raizy Weinreb",
               "prereqs": "",
               "section": "EFM",
               "time": [
                  {
                     "day": "M",
                     "end": "6:00pm",
                     "start": "3:30pm"
                  }
               ],
               "title": "Nutrition"
            },
            {
               "code": "3230C",
               "coreqs": "",
               "credits": 4,
               "crn": "35499",
               "department": "Biology",
               "instructor": "Victoria E Ruiz",
               "prereqs": "",
               "section": "A&C",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  },
                  {
                     "day": "MW",
                     "end": "1:10 pm",
                     "start": "11:55 am"
                  }
               ],
               "title": "Immunology"
            },
            {
               "code": "3241",
               "coreqs": "",
               "credits": 2,
               "crn": "34272",
               "department": "Biology",
               "instructor": "Richard Bruce Weiss",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "12:45pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Pharmacology"
            },
            {
               "code": "3513C",
               "coreqs": "",
               "credits": 4,
               "crn": "34173",
               "department": "Biology",
               "instructor": "Harvey J. Babich",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Genetics"
            },
            {
               "code": "3513Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34287",
               "department": "Biology",
               "instructor": "Harvey J. Babich",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Genetics Laboratory"
            },
            {
               "code": "3513Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34225",
               "department": "Biology",
               "instructor": "Harvey J. Babich",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Genetics Laboratory"
            },
            {
               "code": "3728C",
               "coreqs": "",
               "credits": 4,
               "crn": "34215",
               "department": "Biology",
               "instructor": "Levy Sztark Amar",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Human Physiology"
            },
            {
               "code": "3728Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34243",
               "department": "Biology",
               "instructor": "Levy Sztark Amar",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Human Physiology Lab"
            },
            {
               "code": "3728Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34254",
               "department": "Biology",
               "instructor": "Levy Sztark Amar",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Human Physiology Lab"
            },
            {
               "code": "3728Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34244",
               "department": "Biology",
               "instructor": "Levy Sztark Amar",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Human Physiology Lab"
            },
            {
               "code": "3730H",
               "coreqs": "",
               "credits": 2,
               "crn": "35500",
               "department": "Biology",
               "instructor": "Margarita Vigodner",
               "prereqs": "",
               "section": "NPR",
               "time": [
                  {
                     "day": "R",
                     "end": "4:55pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Reproductive Biology"
            },
            {
               "code": "3830R",
               "coreqs": "",
               "credits": 3,
               "crn": "34491",
               "department": "Biology",
               "instructor": "Amanda Mitchell",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Neurobiology"
            },
            {
               "code": "4023C",
               "coreqs": "",
               "credits": 4,
               "crn": "34344",
               "department": "Biology",
               "instructor": "Alyssa Gabrielle Schuck",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Microbiology"
            },
            {
               "code": "4023Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34320",
               "department": "Biology",
               "instructor": "Alyssa Gabrielle Schuck",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Microbiology Lab"
            },
            {
               "code": "4023Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34321",
               "department": "Biology",
               "instructor": "Alyssa Gabrielle Schuck",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Microbiology Lab"
            },
            {
               "code": "4930",
               "coreqs": "",
               "credits": 2,
               "crn": "35497",
               "department": "Biology",
               "instructor": "James Nussbaum",
               "prereqs": "",
               "section": "GHW",
               "time": [
                  {
                     "day": "W",
                     "end": "8:00pm",
                     "start": "6:20pm"
                  }
               ],
               "title": "Topics: Kinesiology"
            },
            {
               "code": "4936",
               "coreqs": "",
               "credits": 1,
               "crn": "35498",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "QRT",
               "time": [
                  {
                     "day": "T",
                     "end": "7:40pm",
                     "start": "6:00pm"
                  }
               ],
               "title": "Topics: Oncology"
            },
            {
               "code": "1012",
               "coreqs": "",
               "credits": 3,
               "crn": "34435",
               "department": "Business & Management",
               "instructor": "Francine Mellors-Rothenstein",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Business Communication"
            },
            {
               "code": "4741",
               "coreqs": "",
               "credits": 0,
               "crn": "34412",
               "department": "Business & Management",
               "instructor": "TBA",
               "prereqs": "",
               "section": "IN1",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Business Internship"
            },
            {
               "code": "1800H",
               "coreqs": "",
               "credits": 3,
               "crn": "34541",
               "department": "Business Law",
               "instructor": "Moses L. Pava",
               "prereqs": "",
               "section": "GM",
               "time": [
                  {
                     "day": "M",
                     "end": "7:15pm",
                     "start": "6:00pm"
                  }
               ],
               "title": "Business as Human Enterprise"
            },
            {
               "code": "2021",
               "coreqs": "",
               "credits": 3,
               "crn": "34283",
               "department": "Business Law",
               "instructor": "Robert Jay Greenberg",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Ethical & Legal Env Business"
            },
            {
               "code": "2111",
               "coreqs": "",
               "credits": 3,
               "crn": "34175",
               "department": "Business Law",
               "instructor": "Robert Jay Greenberg",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Business Law I"
            },
            {
               "code": "1010C",
               "coreqs": "",
               "credits": 4,
               "crn": "34256",
               "department": "Chemistry",
               "instructor": "Lora Danley",
               "prereqs": "",
               "section": "KLT",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  },
                  {
                     "day": "T",
                     "end": "1:30 pm",
                     "start": "11:50 am"
                  }
               ],
               "title": "Essentials of General Chem"
            },
            {
               "code": "1045C",
               "coreqs": "",
               "credits": 4,
               "crn": "34232",
               "department": "Chemistry",
               "instructor": "Chaya Rapp",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "General Chemistry"
            },
            {
               "code": "1045H",
               "coreqs": "",
               "credits": 4,
               "crn": "34354",
               "department": "Chemistry",
               "instructor": "Chaya Rapp",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "General Chemistry"
            },
            {
               "code": "1045R",
               "coreqs": "",
               "credits": 3,
               "crn": "36155",
               "department": "Chemistry",
               "instructor": "Chaya Rapp",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "General Chemistry Lecture"
            },
            {
               "code": "1045T",
               "coreqs": "",
               "credits": 0,
               "crn": "34407",
               "department": "Chemistry",
               "instructor": "TBA",
               "prereqs": "",
               "section": "FW",
               "time": [
                  {
                     "day": "W",
                     "end": "5:50pm",
                     "start": "5:00pm"
                  }
               ],
               "title": "General Chem Recitation"
            },
            {
               "code": "1045T",
               "coreqs": "",
               "credits": 0,
               "crn": "34355",
               "department": "Chemistry",
               "instructor": "Donald Estes",
               "prereqs": "",
               "section": "JR",
               "time": [
                  {
                     "day": "R",
                     "end": "10:15am",
                     "start": "9:25am"
                  }
               ],
               "title": "General Chem Recitation"
            },
            {
               "code": "1045T",
               "coreqs": "",
               "credits": 0,
               "crn": "34356",
               "department": "Chemistry",
               "instructor": "Donald Estes",
               "prereqs": "",
               "section": "KT",
               "time": [
                  {
                     "day": "T",
                     "end": "11:20am",
                     "start": "10:30am"
                  }
               ],
               "title": "General Chem Recitation"
            },
            {
               "code": "1045T",
               "coreqs": "",
               "credits": 0,
               "crn": "34357",
               "department": "Chemistry",
               "instructor": "TBA",
               "prereqs": "",
               "section": "PT",
               "time": [
                  {
                     "day": "T",
                     "end": "5:30pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "General Chem Recitation"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34423",
               "department": "Chemistry",
               "instructor": "Cecily Dobin",
               "prereqs": "",
               "section": "BCM",
               "time": [
                  {
                     "day": "M",
                     "end": "1:20pm",
                     "start": "10:20am"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34226",
               "department": "Chemistry",
               "instructor": "Donald Estes",
               "prereqs": "",
               "section": "DEW",
               "time": [
                  {
                     "day": "W",
                     "end": "4:30pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36560",
               "department": "Chemistry",
               "instructor": "Cecily Dobin",
               "prereqs": "",
               "section": "EF1",
               "time": [
                  {
                     "day": "M",
                     "end": "6:00pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34196",
               "department": "Chemistry",
               "instructor": "Cecily Dobin",
               "prereqs": "",
               "section": "EFM",
               "time": [
                  {
                     "day": "M",
                     "end": "6:00pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36563",
               "department": "Chemistry",
               "instructor": "Rosalyn Strauss",
               "prereqs": "",
               "section": "FR1",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:00am"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34257",
               "department": "Chemistry",
               "instructor": "Rosalyn Strauss",
               "prereqs": "",
               "section": "FRI",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:00am"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34198",
               "department": "Chemistry",
               "instructor": "Cecily Dobin",
               "prereqs": "",
               "section": "MNR",
               "time": [
                  {
                     "day": "R",
                     "end": "4:30pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34197",
               "department": "Chemistry",
               "instructor": "Cecily Dobin",
               "prereqs": "",
               "section": "MNT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:30pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36561",
               "department": "Chemistry",
               "instructor": "Cecily Dobin",
               "prereqs": "",
               "section": "MR1",
               "time": [
                  {
                     "day": "R",
                     "end": "4:30pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1045Y",
               "coreqs": "",
               "credits": 1,
               "crn": "36559",
               "department": "Chemistry",
               "instructor": "Cecily Dobin",
               "prereqs": "",
               "section": "MT1",
               "time": [
                  {
                     "day": "T",
                     "end": "4:30pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "General Chemistry Lab"
            },
            {
               "code": "1213C",
               "coreqs": "",
               "credits": 5,
               "crn": "34199",
               "department": "Chemistry",
               "instructor": "Evan Mintzer",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Organic Chemistry"
            },
            {
               "code": "1213Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34358",
               "department": "Chemistry",
               "instructor": "Donald Estes",
               "prereqs": "",
               "section": "DFM",
               "time": [
                  {
                     "day": "M",
                     "end": "2:15pm",
                     "start": "1:25pm"
                  },
                  {
                     "day": "M",
                     "end": "5:25 pm",
                     "start": "2:25 pm"
                  }
               ],
               "title": "Organic Chemistry Lab"
            },
            {
               "code": "1213Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34359",
               "department": "Chemistry",
               "instructor": "Donald Estes",
               "prereqs": "",
               "section": "FRI",
               "time": [
                  {
                     "day": "F",
                     "end": "9:50am",
                     "start": "9:00am"
                  },
                  {
                     "day": "F",
                     "end": "1:00 pm",
                     "start": "10:00 am"
                  }
               ],
               "title": "Organic Chemistry Lab"
            },
            {
               "code": "1213Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34360",
               "department": "Chemistry",
               "instructor": "Donald Estes",
               "prereqs": "",
               "section": "MPR",
               "time": [
                  {
                     "day": "R",
                     "end": "2:20pm",
                     "start": "1:30pm"
                  },
                  {
                     "day": "R",
                     "end": "5:30 pm",
                     "start": "2:30 pm"
                  }
               ],
               "title": "Organic Chemistry Lab"
            },
            {
               "code": "1213Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34361",
               "department": "Chemistry",
               "instructor": "Donald Estes",
               "prereqs": "",
               "section": "MPT",
               "time": [
                  {
                     "day": "T",
                     "end": "2:35pm",
                     "start": "1:45pm"
                  },
                  {
                     "day": "T",
                     "end": "5:45 pm",
                     "start": "2:45 pm"
                  }
               ],
               "title": "Organic Chemistry Lab"
            },
            {
               "code": "1376",
               "coreqs": "",
               "credits": 3,
               "crn": "35527",
               "department": "Chemistry",
               "instructor": "Daniel Lim",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Biochemistry Lecture"
            },
            {
               "code": "1415H",
               "coreqs": "",
               "credits": 3,
               "crn": "34363",
               "department": "Chemistry",
               "instructor": "Chaya Rapp",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Physical Chemistry I"
            },
            {
               "code": "1300C",
               "coreqs": "",
               "credits": 4,
               "crn": "34326",
               "department": "Computer Science",
               "instructor": "Alan J. Broder",
               "prereqs": "",
               "section": "EF",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "M",
                     "end": "5:25 pm",
                     "start": "4:35 pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  },
                  {
                     "day": "W",
                     "end": "5:50 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Intro to Computer Science"
            },
            {
               "code": "1300C",
               "coreqs": "",
               "credits": 4,
               "crn": "36002",
               "department": "Computer Science",
               "instructor": "Joshua Waxman",
               "prereqs": "",
               "section": "KL",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  },
                  {
                     "day": "TR",
                     "end": "12:50 pm",
                     "start": "12:00 pm"
                  }
               ],
               "title": "Intro to Computer Science"
            },
            {
               "code": "1504",
               "coreqs": "",
               "credits": 3,
               "crn": "34364",
               "department": "Computer Science",
               "instructor": "Michael Dalezman",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Discrete Structures"
            },
            {
               "code": "2115C",
               "coreqs": "",
               "credits": 4,
               "crn": "34432",
               "department": "Computer Science",
               "instructor": "Thomas M. Schmidt",
               "prereqs": "",
               "section": "EF",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "M",
                     "end": "5:25 pm",
                     "start": "4:35 pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  },
                  {
                     "day": "W",
                     "end": "5:50 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Computer Systems"
            },
            {
               "code": "2314C",
               "coreqs": "",
               "credits": 4,
               "crn": "34365",
               "department": "Computer Science",
               "instructor": "Alan J. Broder",
               "prereqs": "",
               "section": "CD",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  },
                  {
                     "day": "MW",
                     "end": "2:15 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "Applied Linux Prog & Scripting"
            },
            {
               "code": "2545",
               "coreqs": "",
               "credits": 3,
               "crn": "35186",
               "department": "Computer Science",
               "instructor": "Joshua Waxman",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Algorithms"
            },
            {
               "code": "3780",
               "coreqs": "",
               "credits": 3,
               "crn": "35187",
               "department": "Computer Science",
               "instructor": "Van Kelly",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Web Programming & Development"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34494",
               "department": "Economics",
               "instructor": "James Kahn",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Principles of Economics"
            },
            {
               "code": "1177",
               "coreqs": "",
               "credits": 3,
               "crn": "34410",
               "department": "Economics",
               "instructor": "Tadashi Hashimoto",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Game Theory & Behavioral Econ"
            },
            {
               "code": "1221",
               "coreqs": "",
               "credits": 3,
               "crn": "35508",
               "department": "Economics",
               "instructor": "James Kahn",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Money and Banking"
            },
            {
               "code": "1421",
               "coreqs": "",
               "credits": 3,
               "crn": "34366",
               "department": "Economics",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TBA",
                     "start": "0"
                  }
               ],
               "title": "Econometrics"
            },
            {
               "code": "2133",
               "coreqs": "",
               "credits": 3,
               "crn": "34301",
               "department": "Education",
               "instructor": "Chaya R. Gorsetman",
               "prereqs": "",
               "section": "DM",
               "time": [
                  {
                     "day": "M",
                     "end": "3:00pm",
                     "start": "1:20pm"
                  }
               ],
               "title": "Linguistic Tools & Literacy"
            },
            {
               "code": "2201",
               "coreqs": "",
               "credits": 3,
               "crn": "34317",
               "department": "Education",
               "instructor": "Miriam Ungar Hirsch",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Classroom Mangmt & Instruction"
            },
            {
               "code": "2301",
               "coreqs": "",
               "credits": 3,
               "crn": "34303",
               "department": "Education",
               "instructor": "Emily A. Witty",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Language and Literacy I"
            },
            {
               "code": "2303",
               "coreqs": "",
               "credits": 3,
               "crn": "34253",
               "department": "Education",
               "instructor": "Miriam Ungar Hirsch",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Teaching Social Studies"
            },
            {
               "code": "2930",
               "coreqs": "",
               "credits": 3,
               "crn": "34498",
               "department": "Education",
               "instructor": "Miriam Ungar Hirsch",
               "prereqs": "",
               "section": "MNT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:15pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Senior Seminar: Elem Edu"
            },
            {
               "code": "2935",
               "coreqs": "",
               "credits": 3,
               "crn": "34211",
               "department": "Education",
               "instructor": "Chaya R. Gorsetman",
               "prereqs": "",
               "section": "DEW",
               "time": [
                  {
                     "day": "W",
                     "end": "3:45pm",
                     "start": "1:15pm"
                  }
               ],
               "title": "Sr. Sem. in Early Childhood Ed"
            },
            {
               "code": "2940",
               "coreqs": "",
               "credits": 6,
               "crn": "34499",
               "department": "Education",
               "instructor": "Donna J. Greenberg",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "MWR",
                     "end": "4:00pm",
                     "start": "8:00am"
                  },
                  {
                     "day": "T",
                     "end": "12:00 pm",
                     "start": "8:00 am"
                  },
                  {
                     "day": "F",
                     "end": "12:00 pm",
                     "start": "8:00 am"
                  }
               ],
               "title": "Student Teaching: Elem Educ"
            },
            {
               "code": "2945",
               "coreqs": "",
               "credits": 6,
               "crn": "34191",
               "department": "Education",
               "instructor": "Chaya R. Gorsetman",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "MTR",
                     "end": "3:30pm",
                     "start": "8:30am"
                  },
                  {
                     "day": "W",
                     "end": "12:30 pm",
                     "start": "8:30 am"
                  },
                  {
                     "day": "F",
                     "end": "1:30 pm",
                     "start": "8:30 am"
                  }
               ],
               "title": "EC Student Teaching"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "36421",
               "department": "English",
               "instructor": "David McNamara",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Essentials of Writing"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "36422",
               "department": "English",
               "instructor": "David McNamara",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Essentials of Writing"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34219",
               "department": "English",
               "instructor": "Gina Grimaldi",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34221",
               "department": "English",
               "instructor": "Michael Shelichach",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34228",
               "department": "English",
               "instructor": "Michael Shelichach",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34227",
               "department": "English",
               "instructor": "Lauren Lee Fusilier",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34277",
               "department": "English",
               "instructor": "Lauren Lee Fusilier",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34171",
               "department": "English",
               "instructor": "Ann Peters",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34172",
               "department": "English",
               "instructor": "Jen DeGregorio",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34247",
               "department": "English",
               "instructor": "Sierra Ladan Tavasolian",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Composition and Rhetoric"
            },
            {
               "code": "1200H",
               "coreqs": "",
               "credits": 3,
               "crn": "34310",
               "department": "English",
               "instructor": "Seamus O'Malley",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Freshman Honors Seminar"
            },
            {
               "code": "1200H",
               "coreqs": "",
               "credits": 3,
               "crn": "34309",
               "department": "English",
               "instructor": "Joy Ladin",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Freshman Honors Seminar"
            },
            {
               "code": "1200H",
               "coreqs": "",
               "credits": 3,
               "crn": "35172",
               "department": "English",
               "instructor": "Matthew Ward Miller",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Freshman Honors Seminar"
            },
            {
               "code": "1500",
               "coreqs": "",
               "credits": 3,
               "crn": "34322",
               "department": "English",
               "instructor": "Lynda Johnson",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Media Studies"
            },
            {
               "code": "1503",
               "coreqs": "",
               "credits": 3,
               "crn": "35173",
               "department": "English",
               "instructor": "Avital Rachel Chizhik",
               "prereqs": "",
               "section": "FGW",
               "time": [
                  {
                     "day": "W",
                     "end": "8:00pm",
                     "start": "5:30pm"
                  }
               ],
               "title": "Columns & Editorials"
            },
            {
               "code": "1600",
               "coreqs": "",
               "credits": 3,
               "crn": "34556",
               "department": "English",
               "instructor": "Erik Mintz",
               "prereqs": "",
               "section": "QRT",
               "time": [
                  {
                     "day": "T",
                     "end": "8:30pm",
                     "start": "6:00pm"
                  }
               ],
               "title": "Advertising Copywriting"
            },
            {
               "code": "1650",
               "coreqs": "",
               "credits": 3,
               "crn": "34294",
               "department": "English",
               "instructor": "Deborah Schlueter",
               "prereqs": "",
               "section": "FGM",
               "time": [
                  {
                     "day": "M",
                     "end": "7:30pm",
                     "start": "5:00pm"
                  }
               ],
               "title": "Public Relations"
            },
            {
               "code": "1725",
               "coreqs": "",
               "credits": 3,
               "crn": "34523",
               "department": "English",
               "instructor": "Ted Birkhahn",
               "prereqs": "",
               "section": "NPR",
               "time": [
                  {
                     "day": "R",
                     "end": "5:45pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Topics: Digital Communication"
            },
            {
               "code": "1802",
               "coreqs": "",
               "credits": 3,
               "crn": "35174",
               "department": "English",
               "instructor": "Joy Ladin",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Writing Creative Nonfiction"
            },
            {
               "code": "1812",
               "coreqs": "",
               "credits": 3,
               "crn": "35175",
               "department": "English",
               "instructor": "Leslie Russell",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Screenwriting"
            },
            {
               "code": "2000",
               "coreqs": "",
               "credits": 3,
               "crn": "34279",
               "department": "English",
               "instructor": "Matthew Ward Miller",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Ways of Reading (formerly \"Gateway to Reading\")"
            },
            {
               "code": "2004",
               "coreqs": "",
               "credits": 3,
               "crn": "34402",
               "department": "English",
               "instructor": "Linda M. Shires",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Survey of British Lit II"
            },
            {
               "code": "2007",
               "coreqs": "",
               "credits": 3,
               "crn": "35176",
               "department": "English",
               "instructor": "Ann Peters",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Survey of American Lit II"
            },
            {
               "code": "2580",
               "coreqs": "",
               "credits": 3,
               "crn": "35177",
               "department": "English",
               "instructor": "Cynthia Wachtell",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "American Jewish Literature"
            },
            {
               "code": "2750",
               "coreqs": "",
               "credits": 3,
               "crn": "35535",
               "department": "English",
               "instructor": "Seamus O'Malley",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "The Graphic Novel"
            },
            {
               "code": "2880H",
               "coreqs": "",
               "credits": 3,
               "crn": "35536",
               "department": "English",
               "instructor": "Matthew Ward Miller",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Parents and Children in American Literature"
            },
            {
               "code": "2921",
               "coreqs": "",
               "credits": 3,
               "crn": "35178",
               "department": "English",
               "instructor": "Gina Grimaldi",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Topics: Shakespeare"
            },
            {
               "code": "2960",
               "coreqs": "",
               "credits": 3,
               "crn": "35179",
               "department": "English",
               "instructor": "Linda M. Shires",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Representations of Holocaust"
            },
            {
               "code": "2971",
               "coreqs": "",
               "credits": 3,
               "crn": "35538",
               "department": "English",
               "instructor": "Seamus O'Malley",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Literature of the First World War"
            },
            {
               "code": "3921",
               "coreqs": "",
               "credits": 3,
               "crn": "35537",
               "department": "English",
               "instructor": "Ann Peters",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Tps: Harlem Renaissance"
            },
            {
               "code": "4001",
               "coreqs": "",
               "credits": 1,
               "crn": "35182",
               "department": "English",
               "instructor": "Ann Peters",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Sr Exit Project Creative Writ"
            },
            {
               "code": "4002",
               "coreqs": "",
               "credits": 1,
               "crn": "36111",
               "department": "English",
               "instructor": "Erik Mintz",
               "prereqs": "",
               "section": "TB3",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Sr Exit Project Media Studies"
            },
            {
               "code": "4002",
               "coreqs": "",
               "credits": 1,
               "crn": "34337",
               "department": "English",
               "instructor": "Deborah Schlueter",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Sr Exit Project Media Studies"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "34245",
               "department": "Finance",
               "instructor": "Gabriela Coiculescu",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Principles of Finance"
            },
            {
               "code": "2505",
               "coreqs": "",
               "credits": 3,
               "crn": "34176",
               "department": "Finance",
               "instructor": "Joshua Krausz",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:40pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Investment Analysis"
            },
            {
               "code": "3851",
               "coreqs": "",
               "credits": 3,
               "crn": "34284",
               "department": "Finance",
               "instructor": "Sidney J. Mehl",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Financial Statement Analysis"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "34236",
               "department": "Hebrew",
               "instructor": "Rivka Weiner",
               "prereqs": "",
               "section": "CP",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  },
                  {
                     "day": "TR",
                     "end": "5:30 pm",
                     "start": "4:40 pm"
                  }
               ],
               "title": "Elementary Hebrew I"
            },
            {
               "code": "1102",
               "coreqs": "",
               "credits": 3,
               "crn": "34307",
               "department": "Hebrew",
               "instructor": "Rivka Weiner",
               "prereqs": "",
               "section": "D2P",
               "time": [
                  {
                     "day": "M",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  },
                  {
                     "day": "TR",
                     "end": "5:30 pm",
                     "start": "4:40 pm"
                  },
                  {
                     "day": "W",
                     "end": "2:40 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "Elementary Hebrew II"
            },
            {
               "code": "1103",
               "coreqs": "",
               "credits": 3,
               "crn": "34587",
               "department": "Hebrew",
               "instructor": "Sarah Hochfeld",
               "prereqs": "",
               "section": "APT",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  },
                  {
                     "day": "T",
                     "end": "5:30 pm",
                     "start": "4:40 pm"
                  }
               ],
               "title": "Lower Intermediate Hebrew I"
            },
            {
               "code": "1103",
               "coreqs": "",
               "credits": 3,
               "crn": "34405",
               "department": "Hebrew",
               "instructor": "Dawn Arussy",
               "prereqs": "",
               "section": "BQT",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  },
                  {
                     "day": "T",
                     "end": "6:50 pm",
                     "start": "6:00 pm"
                  }
               ],
               "title": "Lower Intermediate Hebrew I"
            },
            {
               "code": "1103",
               "coreqs": "",
               "credits": 3,
               "crn": "34304",
               "department": "Hebrew",
               "instructor": "Sarah Hochfeld",
               "prereqs": "",
               "section": "DPT",
               "time": [
                  {
                     "day": "M",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  },
                  {
                     "day": "T",
                     "end": "5:30 pm",
                     "start": "4:40 pm"
                  },
                  {
                     "day": "W",
                     "end": "2:40 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "Lower Intermediate Hebrew I"
            },
            {
               "code": "1104",
               "coreqs": "",
               "credits": 3,
               "crn": "34258",
               "department": "Hebrew",
               "instructor": "Sarah Hochfeld",
               "prereqs": "",
               "section": "BQT",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  },
                  {
                     "day": "T",
                     "end": "6:50 pm",
                     "start": "6:00 pm"
                  }
               ],
               "title": "Lower Intermediate Hebrew II"
            },
            {
               "code": "1104",
               "coreqs": "",
               "credits": 3,
               "crn": "34397",
               "department": "Hebrew",
               "instructor": "Sarah Hochfeld",
               "prereqs": "",
               "section": "CPT",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  },
                  {
                     "day": "T",
                     "end": "5:30 pm",
                     "start": "4:40 pm"
                  }
               ],
               "title": "Lower Intermediate Hebrew II"
            },
            {
               "code": "1105",
               "coreqs": "",
               "credits": 3,
               "crn": "34275",
               "department": "Hebrew",
               "instructor": "Osnat Bishko",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Intermediate Hebrew I"
            },
            {
               "code": "1105",
               "coreqs": "",
               "credits": 3,
               "crn": "34261",
               "department": "Hebrew",
               "instructor": "Osnat Bishko",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Intermediate Hebrew I"
            },
            {
               "code": "1105",
               "coreqs": "",
               "credits": 3,
               "crn": "34305",
               "department": "Hebrew",
               "instructor": "Dawn Arussy",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Intermediate Hebrew I"
            },
            {
               "code": "1106",
               "coreqs": "",
               "credits": 3,
               "crn": "34263",
               "department": "Hebrew",
               "instructor": "Hilla Goldwicht",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Intermediate Hebrew II"
            },
            {
               "code": "1106",
               "coreqs": "",
               "credits": 3,
               "crn": "34264",
               "department": "Hebrew",
               "instructor": "Hilla Goldwicht",
               "prereqs": "",
               "section": "D2",
               "time": [
                  {
                     "day": "M",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  },
                  {
                     "day": "W",
                     "end": "2:40 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "Intermediate Hebrew II"
            },
            {
               "code": "1106",
               "coreqs": "",
               "credits": 3,
               "crn": "34262",
               "department": "Hebrew",
               "instructor": "Rivka Weiner",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Intermediate Hebrew II"
            },
            {
               "code": "1107",
               "coreqs": "",
               "credits": 3,
               "crn": "34288",
               "department": "Hebrew",
               "instructor": "Ilona Ben-Moshe",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Intermediate Hebrew III"
            },
            {
               "code": "1107",
               "coreqs": "",
               "credits": 3,
               "crn": "34266",
               "department": "Hebrew",
               "instructor": "Osnat Bishko",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Intermediate Hebrew III"
            },
            {
               "code": "1107",
               "coreqs": "",
               "credits": 3,
               "crn": "34265",
               "department": "Hebrew",
               "instructor": "Osnat Bishko",
               "prereqs": "",
               "section": "D2",
               "time": [
                  {
                     "day": "M",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  },
                  {
                     "day": "W",
                     "end": "2:40 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "Intermediate Hebrew III"
            },
            {
               "code": "1108",
               "coreqs": "",
               "credits": 3,
               "crn": "34274",
               "department": "Hebrew",
               "instructor": "Zafrira Lidovsky Cohen",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Intermediate Hebrew IV"
            },
            {
               "code": "1108",
               "coreqs": "",
               "credits": 3,
               "crn": "34370",
               "department": "Hebrew",
               "instructor": "Zafrira Lidovsky Cohen",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Intermediate Hebrew IV"
            },
            {
               "code": "1205",
               "coreqs": "",
               "credits": 3,
               "crn": "34233",
               "department": "Hebrew",
               "instructor": "Hilla Goldwicht",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Upper Intermediate Hebrew I"
            },
            {
               "code": "1206",
               "coreqs": "",
               "credits": 3,
               "crn": "34329",
               "department": "Hebrew",
               "instructor": "Hilla Goldwicht",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Upper Intermediate Hebrew II"
            },
            {
               "code": "1233",
               "coreqs": "",
               "credits": 1,
               "crn": "34248",
               "department": "Hebrew",
               "instructor": "Hilla Goldwicht",
               "prereqs": "",
               "section": "CLB",
               "time": [
                  {
                     "day": "W",
                     "end": "3:30pm",
                     "start": "2:45pm"
                  }
               ],
               "title": "Advanced Hebrew Conversation"
            },
            {
               "code": "2669",
               "coreqs": "",
               "credits": 3,
               "crn": "35509",
               "department": "Hebrew",
               "instructor": "Zafrira Lidovsky Cohen",
               "prereqs": "",
               "section": "D2",
               "time": [
                  {
                     "day": "M",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  },
                  {
                     "day": "W",
                     "end": "2:40 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "Hebrew Short Story of 20th Cen"
            },
            {
               "code": "1401",
               "coreqs": "",
               "credits": 3,
               "crn": "35196",
               "department": "History",
               "instructor": "TBA",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "History of East Asia"
            },
            {
               "code": "2128",
               "coreqs": "",
               "credits": 3,
               "crn": "35567",
               "department": "History",
               "instructor": "Jeffrey Freedman",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Origins of Democratic Political Culture"
            },
            {
               "code": "2141",
               "coreqs": "",
               "credits": 3,
               "crn": "35193",
               "department": "History",
               "instructor": "Joshua D. Zimmerman",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Holocaust"
            },
            {
               "code": "2165",
               "coreqs": "",
               "credits": 3,
               "crn": "35568",
               "department": "History",
               "instructor": "Mario Kessler",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Europe Since 1945"
            },
            {
               "code": "2207",
               "coreqs": "",
               "credits": 3,
               "crn": "35566",
               "department": "History",
               "instructor": "Hadassa Kosak",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "New Deal & Great Depression"
            },
            {
               "code": "2520",
               "coreqs": "",
               "credits": 3,
               "crn": "35190",
               "department": "History",
               "instructor": "Douglas Burgess",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Atlantic World"
            },
            {
               "code": "2913",
               "coreqs": "",
               "credits": 3,
               "crn": "35194",
               "department": "History",
               "instructor": "Hadassa Kosak",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Immigrant Nations: US & Israel"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "34438",
               "department": "Information & Decision Science",
               "instructor": "Avi Naiman",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Business Algebra"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34300",
               "department": "Information & Decision Science",
               "instructor": "Kevin Brabazon",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Intro to Information Systems"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "35594",
               "department": "Information & Decision Science",
               "instructor": "Kevin Brabazon",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Intro to Information Systems"
            },
            {
               "code": "1131",
               "coreqs": "",
               "credits": 3,
               "crn": "34380",
               "department": "Information & Decision Science",
               "instructor": "Vladimir Kovtun",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Statistics for Business"
            },
            {
               "code": "1456",
               "coreqs": "",
               "credits": 3,
               "crn": "34331",
               "department": "Information & Decision Science",
               "instructor": "Vladimir Kovtun",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Quantitative Methods Managment"
            },
            {
               "code": "2030",
               "coreqs": "",
               "credits": 3,
               "crn": "34439",
               "department": "Information & Decision Science",
               "instructor": "Yitzchak S. Rosenthal",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Bus. Analytics & Programming"
            },
            {
               "code": "2460",
               "coreqs": "",
               "credits": 3,
               "crn": "35641",
               "department": "Information & Decision Science",
               "instructor": "Yitzchak S. Rosenthal",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Data Management-Bus Analytics"
            },
            {
               "code": "3216",
               "coreqs": "",
               "credits": 1,
               "crn": "34408",
               "department": "Jewish Education",
               "instructor": "Deena S. Rabinovich",
               "prereqs": "",
               "section": "JK",
               "time": [
                  {
                     "day": "T",
                     "end": "11:00am",
                     "start": "8:00am"
                  },
                  {
                     "day": "R",
                     "end": "11:45 am",
                     "start": "10:30 am"
                  }
               ],
               "title": "Jewish Education Field Work"
            },
            {
               "code": "3218",
               "coreqs": "",
               "credits": 1,
               "crn": "34316",
               "department": "Jewish Education",
               "instructor": "Deena S. Rabinovich",
               "prereqs": "",
               "section": "JK",
               "time": [
                  {
                     "day": "T",
                     "end": "11:00am",
                     "start": "8:00am"
                  },
                  {
                     "day": "R",
                     "end": "10:15 am",
                     "start": "9:00 am"
                  }
               ],
               "title": "Jewish Educ Field Work/Seminar"
            },
            {
               "code": "1329H",
               "coreqs": "",
               "credits": 2,
               "crn": "35501",
               "department": "Jewish History",
               "instructor": "Ephraim Kanarfogel",
               "prereqs": "",
               "section": "NPT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:55pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "History of Halakhah"
            },
            {
               "code": "1415",
               "coreqs": "",
               "credits": 3,
               "crn": "34278",
               "department": "Jewish History",
               "instructor": "Mordecai Paldiel",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "History of Zionism"
            },
            {
               "code": "1486",
               "coreqs": "",
               "credits": 3,
               "crn": "34260",
               "department": "Jewish History",
               "instructor": "Mordecai Paldiel",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Holocaust and Rescue"
            },
            {
               "code": "1577",
               "coreqs": "",
               "credits": 2,
               "crn": "34458",
               "department": "Jewish History",
               "instructor": "Jeffrey S. Gurock",
               "prereqs": "",
               "section": "CW",
               "time": [
                  {
                     "day": "W",
                     "end": "1:23pm",
                     "start": "11:43am"
                  }
               ],
               "title": "Jewish Religion in America"
            },
            {
               "code": "1807",
               "coreqs": "",
               "credits": 3,
               "crn": "34445",
               "department": "Jewish History",
               "instructor": "Jill C. Katz",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "History of Jerusalem"
            },
            {
               "code": "4932",
               "coreqs": "",
               "credits": 3,
               "crn": "35502",
               "department": "Jewish History",
               "instructor": "Ronnie Perelis",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Tps:Wanderers,Exiles&Merchants"
            },
            {
               "code": "1204",
               "coreqs": "",
               "credits": 3,
               "crn": "34200",
               "department": "Jewish Philosophy",
               "instructor": "David C. Shatz",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Jewish Ethics"
            },
            {
               "code": "1647",
               "coreqs": "",
               "credits": 2,
               "crn": "35529",
               "department": "Jewish Philosophy",
               "instructor": "Gamliel Shmalo",
               "prereqs": "",
               "section": "MR",
               "time": [
                  {
                     "day": "R",
                     "end": "3:14pm",
                     "start": "1:34pm"
                  }
               ],
               "title": "Phil of R.Yehuda HaLevi"
            },
            {
               "code": "1814",
               "coreqs": "",
               "credits": 2,
               "crn": "35528",
               "department": "Jewish Philosophy",
               "instructor": "Gamliel Shmalo",
               "prereqs": "",
               "section": "LR",
               "time": [
                  {
                     "day": "R",
                     "end": "1:30pm",
                     "start": "11:50am"
                  }
               ],
               "title": "Mod Jewish Thought Rav Kook II"
            },
            {
               "code": "4932",
               "coreqs": "",
               "credits": 2,
               "crn": "35530",
               "department": "Jewish Philosophy",
               "instructor": "Yosef Zvi Bronstein",
               "prereqs": "",
               "section": "NPT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:55pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Tps:Philo of Lubavitcher Rebbe"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "34224",
               "department": "Judaic Studies",
               "instructor": "Lawrence Moshiach Hajioff",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Intro to Judaism"
            },
            {
               "code": "1201",
               "coreqs": "",
               "credits": 3,
               "crn": "34282",
               "department": "Judaic Studies",
               "instructor": "David A. Pahmer",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Jewish Liturgy-Hilchot Tefilla"
            },
            {
               "code": "1203",
               "coreqs": "",
               "credits": 2,
               "crn": "35515",
               "department": "Judaic Studies",
               "instructor": "Elchanan A. Adler",
               "prereqs": "",
               "section": "MT",
               "time": [
                  {
                     "day": "T",
                     "end": "3:10pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Liturgy: Musaf of Shabbat"
            },
            {
               "code": "1350",
               "coreqs": "",
               "credits": 3,
               "crn": "34290",
               "department": "Judaic Studies",
               "instructor": "Lawrence Moshiach Hajioff",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Introduction to Jewish Beliefs"
            },
            {
               "code": "1403",
               "coreqs": "",
               "credits": 3,
               "crn": "34406",
               "department": "Judaic Studies",
               "instructor": "David A. Pahmer",
               "prereqs": "",
               "section": "D2",
               "time": [
                  {
                     "day": "M",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  },
                  {
                     "day": "W",
                     "end": "2:40 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "Basic Jewish Concepts"
            },
            {
               "code": "1406",
               "coreqs": "",
               "credits": 3,
               "crn": "35532",
               "department": "Judaic Studies",
               "instructor": "Lawrence Moshiach Hajioff",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Basic Jewish Concepts"
            },
            {
               "code": "1436",
               "coreqs": "",
               "credits": 4,
               "crn": "35517",
               "department": "Judaic Studies",
               "instructor": "Daniel E. Wolff",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:20pm"
                  }
               ],
               "title": "Kashrut"
            },
            {
               "code": "1440",
               "coreqs": "",
               "credits": 3,
               "crn": "34252",
               "department": "Judaic Studies",
               "instructor": "Mindy F. Eisenman",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Jewish Laws & Cust: Family Law"
            },
            {
               "code": "1443",
               "coreqs": "",
               "credits": 3,
               "crn": "34231",
               "department": "Judaic Studies",
               "instructor": "Nechama Esther Price",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Jewish Laws & Cust: Family Law"
            },
            {
               "code": "1443A",
               "coreqs": "",
               "credits": 2,
               "crn": "34192",
               "department": "Judaic Studies",
               "instructor": "Meir Fulda",
               "prereqs": "",
               "section": "PR",
               "time": [
                  {
                     "day": "R",
                     "end": "6:20pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "Jewish Laws & Cust: Family Law"
            },
            {
               "code": "1449",
               "coreqs": "",
               "credits": 3,
               "crn": "34187",
               "department": "Judaic Studies",
               "instructor": "Shlomo Hochberg",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Laws & Customs:Marriage"
            },
            {
               "code": "1450",
               "coreqs": "",
               "credits": 3,
               "crn": "34280",
               "department": "Judaic Studies",
               "instructor": "Nechama Esther Price",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Marriage in Halakhah I"
            },
            {
               "code": "1453",
               "coreqs": "",
               "credits": 3,
               "crn": "35519",
               "department": "Judaic Studies",
               "instructor": "Saul J. Berman",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Shabbat: Survey"
            },
            {
               "code": "1455",
               "coreqs": "",
               "credits": 3,
               "crn": "35523",
               "department": "Judaic Studies",
               "instructor": "Aaron Cohen",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Shabbat Survey"
            },
            {
               "code": "1457",
               "coreqs": "",
               "credits": 3,
               "crn": "35518",
               "department": "Judaic Studies",
               "instructor": "Daniel E. Wolff",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "The Sabbath"
            },
            {
               "code": "1465",
               "coreqs": "",
               "credits": 3,
               "crn": "34285",
               "department": "Judaic Studies",
               "instructor": "Aaron Cohen",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "The Festivals I: Survey"
            },
            {
               "code": "1486H",
               "coreqs": "",
               "credits": 2,
               "crn": "35516",
               "department": "Judaic Studies",
               "instructor": "Moshe Y. Kahn",
               "prereqs": "",
               "section": "EW",
               "time": [
                  {
                     "day": "W",
                     "end": "4:50pm",
                     "start": "3:10pm"
                  }
               ],
               "title": "Daily Life: Laws of Blessings"
            },
            {
               "code": "1488",
               "coreqs": "",
               "credits": 3,
               "crn": "35522",
               "department": "Judaic Studies",
               "instructor": "Kenneth Auman",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Daily Life: Birkat Hamazon"
            },
            {
               "code": "1508",
               "coreqs": "",
               "credits": 3,
               "crn": "35520",
               "department": "Judaic Studies",
               "instructor": "Gideon I. Shloush",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Topics In Jewish Law"
            },
            {
               "code": "1512",
               "coreqs": "",
               "credits": 3,
               "crn": "35526",
               "department": "Judaic Studies",
               "instructor": "Daniel E. Wolff",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Tps: Development of Jewish Law"
            },
            {
               "code": "1574",
               "coreqs": "",
               "credits": 3,
               "crn": "35521",
               "department": "Judaic Studies",
               "instructor": "Saul J. Berman",
               "prereqs": "",
               "section": "D2",
               "time": [
                  {
                     "day": "M",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  },
                  {
                     "day": "W",
                     "end": "2:40 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "The Individual in Society"
            },
            {
               "code": "1582",
               "coreqs": "",
               "credits": 3,
               "crn": "34292",
               "department": "Judaic Studies",
               "instructor": "Saul J. Berman",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Medical Ethics"
            },
            {
               "code": "1591H",
               "coreqs": "",
               "credits": 3,
               "crn": "35534",
               "department": "Judaic Studies",
               "instructor": "Kenneth Auman",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Jewish Civil Law"
            },
            {
               "code": "1603",
               "coreqs": "",
               "credits": 2,
               "crn": "35524",
               "department": "Judaic Studies",
               "instructor": "Jacob J. Schacter",
               "prereqs": "",
               "section": "LR",
               "time": [
                  {
                     "day": "R",
                     "end": "1:40pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Modern Jewish Problems"
            },
            {
               "code": "1841",
               "coreqs": "",
               "credits": 3,
               "crn": "34238",
               "department": "Judaic Studies",
               "instructor": "David A. Pahmer",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Intro to Talmud I"
            },
            {
               "code": "1843",
               "coreqs": "",
               "credits": 4,
               "crn": "34174",
               "department": "Judaic Studies",
               "instructor": "Moshe Y. Kahn",
               "prereqs": "",
               "section": "D",
               "time": [
                  {
                     "day": "MW",
                     "end": "3:00pm",
                     "start": "1:20pm"
                  }
               ],
               "title": "Intermediate Talmud I"
            },
            {
               "code": "1845H",
               "coreqs": "",
               "credits": 5,
               "crn": "34230",
               "department": "Judaic Studies",
               "instructor": "Moshe Y. Kahn",
               "prereqs": "",
               "section": "AJ",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  },
                  {
                     "day": "TR",
                     "end": "10:20 am",
                     "start": "8:40 am"
                  }
               ],
               "title": "Advanced Talmud"
            },
            {
               "code": "1852",
               "coreqs": "",
               "credits": 2,
               "crn": "35525",
               "department": "Judaic Studies",
               "instructor": "Meir Goldwicht",
               "prereqs": "",
               "section": "GHW",
               "time": [
                  {
                     "day": "W",
                     "end": "8:00pm",
                     "start": "6:20pm"
                  }
               ],
               "title": "Selected Rabbinic Literature"
            },
            {
               "code": "1854",
               "coreqs": "",
               "credits": 3,
               "crn": "34425",
               "department": "Judaic Studies",
               "instructor": "Aaron Cohen",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Rab Lit:Hashkafa of Vilna Gaon"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34209",
               "department": "Management",
               "instructor": "Judith Calvo-Ryba",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Mangmnt in a Global Environmnt"
            },
            {
               "code": "2110",
               "coreqs": "",
               "credits": 3,
               "crn": "35595",
               "department": "Management",
               "instructor": "Andrew M. Geller",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Organizational Behavior 35595  MAN 2110 - C"
            },
            {
               "code": "2370",
               "coreqs": "",
               "credits": 3,
               "crn": "34314",
               "department": "Management",
               "instructor": "Steven M. Nissenfeld",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Human Resources"
            },
            {
               "code": "2941",
               "coreqs": "",
               "credits": 3,
               "crn": "34381",
               "department": "Management",
               "instructor": "Robert Tufts",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Sports Marketing Management"
            },
            {
               "code": "3504",
               "coreqs": "",
               "credits": 3,
               "crn": "34440",
               "department": "Management",
               "instructor": "Jonathan M. Stern",
               "prereqs": "",
               "section": "EL",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Systematic Inventive Thinking"
            },
            {
               "code": "3780",
               "coreqs": "",
               "credits": 3,
               "crn": "34420",
               "department": "Management",
               "instructor": "Robert Tufts",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Principles of Entrepreneurship"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "34332",
               "department": "Marketing",
               "instructor": "Jesse Itzkowitz",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Principles of Marketing"
            },
            {
               "code": "2941",
               "coreqs": "",
               "credits": 3,
               "crn": "34384",
               "department": "Marketing",
               "instructor": "Robert Tufts",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Sports Marketing Management"
            },
            {
               "code": "3323",
               "coreqs": "",
               "credits": 3,
               "crn": "34431",
               "department": "Marketing",
               "instructor": "Erik Mintz",
               "prereqs": "",
               "section": "QRT",
               "time": [
                  {
                     "day": "T",
                     "end": "8:30pm",
                     "start": "6:00pm"
                  }
               ],
               "title": "Creative Advertising"
            },
            {
               "code": "3502",
               "coreqs": "",
               "credits": 3,
               "crn": "34429",
               "department": "Marketing",
               "instructor": "Johanna Goldstein",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Creative & Innovative Prod Dev"
            },
            {
               "code": "3504",
               "coreqs": "",
               "credits": 3,
               "crn": "34441",
               "department": "Marketing",
               "instructor": "Jonathan M. Stern",
               "prereqs": "",
               "section": "EL",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Systematic Inventive Thinking"
            },
            {
               "code": "3530",
               "coreqs": "",
               "credits": 3,
               "crn": "35642",
               "department": "Marketing",
               "instructor": "TBA",
               "prereqs": "",
               "section": "MNR",
               "time": [
                  {
                     "day": "R",
                     "end": "4:15pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Fashion Accessories"
            },
            {
               "code": "3720",
               "coreqs": "",
               "credits": 3,
               "crn": "34428",
               "department": "Marketing",
               "instructor": "Jesse Itzkowitz",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Marketing Capstone"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34281",
               "department": "Mathematics",
               "instructor": "Margarita R. Levin",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Excursions in Mathematics"
            },
            {
               "code": "1412",
               "coreqs": "",
               "credits": 4,
               "crn": "34242",
               "department": "Mathematics",
               "instructor": "Michael Dalezman",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Calculus I"
            },
            {
               "code": "1412T",
               "coreqs": "",
               "credits": 0,
               "crn": "34399",
               "department": "Mathematics",
               "instructor": "Wai Ting Lam",
               "prereqs": "",
               "section": "LT",
               "time": [
                  {
                     "day": "T",
                     "end": "12:50pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Calculus I Recitation"
            },
            {
               "code": "1412T",
               "coreqs": "",
               "credits": 0,
               "crn": "34404",
               "department": "Mathematics",
               "instructor": "Wai Ting Lam",
               "prereqs": "",
               "section": "MR",
               "time": [
                  {
                     "day": "R",
                     "end": "2:35pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Calculus I Recitation"
            },
            {
               "code": "1412T",
               "coreqs": "",
               "credits": 0,
               "crn": "34400",
               "department": "Mathematics",
               "instructor": "Wai Ting Lam",
               "prereqs": "",
               "section": "MT",
               "time": [
                  {
                     "day": "T",
                     "end": "2:35pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Calculus I Recitation"
            },
            {
               "code": "1413",
               "coreqs": "",
               "credits": 4,
               "crn": "34177",
               "department": "Mathematics",
               "instructor": "Morton Lowengrub",
               "prereqs": "",
               "section": "NL",
               "time": [
                  {
                     "day": "TR",
                     "end": "12:50pm",
                     "start": "12:00pm"
                  },
                  {
                     "day": "TR",
                     "end": "4:30 pm",
                     "start": "3:15 pm"
                  }
               ],
               "title": "Calculus II"
            },
            {
               "code": "1504",
               "coreqs": "",
               "credits": 3,
               "crn": "34306",
               "department": "Mathematics",
               "instructor": "Michael Dalezman",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Discrete Structures"
            },
            {
               "code": "1510",
               "coreqs": "",
               "credits": 4,
               "crn": "34368",
               "department": "Mathematics",
               "instructor": "Marian Gidea",
               "prereqs": "",
               "section": "AKR",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  },
                  {
                     "day": "R",
                     "end": "11:20 am",
                     "start": "10:30 am"
                  }
               ],
               "title": "Multivariable Calculus"
            },
            {
               "code": "1523",
               "coreqs": "",
               "credits": 3,
               "crn": "34497",
               "department": "Mathematics",
               "instructor": "Morton Lowengrub",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Intro to Analysis"
            },
            {
               "code": "2461",
               "coreqs": "",
               "credits": 3,
               "crn": "35514",
               "department": "Mathematics",
               "instructor": "Michael Dalezman",
               "prereqs": "",
               "section": "P",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "Probability Theory"
            },
            {
               "code": "1111",
               "coreqs": "",
               "credits": 3,
               "crn": "34273",
               "department": "Music",
               "instructor": "Marcia Young",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Sense of Music"
            },
            {
               "code": "1111",
               "coreqs": "",
               "credits": 3,
               "crn": "34293",
               "department": "Music",
               "instructor": "Marcia Young",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Sense of Music"
            },
            {
               "code": "1111",
               "coreqs": "",
               "credits": 3,
               "crn": "34229",
               "department": "Music",
               "instructor": "Stanley Dorn",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Sense of Music"
            },
            {
               "code": "1111",
               "coreqs": "",
               "credits": 3,
               "crn": "34426",
               "department": "Music",
               "instructor": "David Glaser",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Sense of Music"
            },
            {
               "code": "1350",
               "coreqs": "",
               "credits": 3,
               "crn": "35552",
               "department": "Music",
               "instructor": "David Glaser",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Baroque & Classical Music"
            },
            {
               "code": "2111",
               "coreqs": "",
               "credits": 3,
               "crn": "34276",
               "department": "Music",
               "instructor": "David Glaser",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Diatonic Harmony I"
            },
            {
               "code": "2111L",
               "coreqs": "",
               "credits": 1,
               "crn": "34222",
               "department": "Music",
               "instructor": "Stanley Dorn",
               "prereqs": "",
               "section": "DW",
               "time": [
                  {
                     "day": "W",
                     "end": "2:55pm",
                     "start": "1:40pm"
                  }
               ],
               "title": "Elem Ear Train & Key"
            },
            {
               "code": "3303",
               "coreqs": "",
               "credits": 1,
               "crn": "35553",
               "department": "Music",
               "instructor": "Marcia Young",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:30pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "5:50 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Choral Ensemble"
            },
            {
               "code": "3461",
               "coreqs": "",
               "credits": 1,
               "crn": "35554",
               "department": "Music",
               "instructor": "Marcia Young",
               "prereqs": "",
               "section": "NT",
               "time": [
                  {
                     "day": "T",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Chamber Ensemble"
            },
            {
               "code": "3462",
               "coreqs": "",
               "credits": 1,
               "crn": "35556",
               "department": "Music",
               "instructor": "Marcia Young",
               "prereqs": "",
               "section": "PT",
               "time": [
                  {
                     "day": "T",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "Chamber Ensemble"
            },
            {
               "code": "4112",
               "coreqs": "",
               "credits": 1,
               "crn": "35557",
               "department": "Music",
               "instructor": "Marcia Young",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Applied Music"
            },
            {
               "code": "2170",
               "coreqs": "",
               "credits": 3,
               "crn": "35531",
               "department": "Philosophy",
               "instructor": "David C. Shatz",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Ancient & Medieval Philosophy"
            },
            {
               "code": "2532",
               "coreqs": "",
               "credits": 3,
               "crn": "35533",
               "department": "Philosophy",
               "instructor": "Herb Leventer",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Philosophy of Art"
            },
            {
               "code": "3200",
               "coreqs": "",
               "credits": 3,
               "crn": "34376",
               "department": "Philosophy",
               "instructor": "Jamie Aroosi",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Classical Political Philosophy"
            },
            {
               "code": "3402",
               "coreqs": "",
               "credits": 3,
               "crn": "34377",
               "department": "Philosophy",
               "instructor": "David C. Shatz",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Philosophy of Law"
            },
            {
               "code": "1324A",
               "coreqs": "",
               "credits": 1,
               "crn": "34250",
               "department": "Physical Education",
               "instructor": "TBA",
               "prereqs": "",
               "section": "HRU",
               "time": [
                  {
                     "day": "MTWRU",
                     "end": "10:00pm",
                     "start": "8:00pm"
                  }
               ],
               "title": "Team Volleyball"
            },
            {
               "code": "1346",
               "coreqs": "",
               "credits": 1,
               "crn": "34178",
               "department": "Physical Education",
               "instructor": "Naomi Kaszovitz",
               "prereqs": "",
               "section": "HRU",
               "time": [
                  {
                     "day": "MTWRU",
                     "end": "10:00pm",
                     "start": "8:00pm"
                  }
               ],
               "title": "Team Tennis"
            },
            {
               "code": "1424",
               "coreqs": "",
               "credits": 1,
               "crn": "34179",
               "department": "Physical Education",
               "instructor": "Michael Alon",
               "prereqs": "",
               "section": "HRU",
               "time": [
                  {
                     "day": "MTWRU",
                     "end": "10:00pm",
                     "start": "8:00pm"
                  }
               ],
               "title": "Team Basketball"
            },
            {
               "code": "1511",
               "coreqs": "",
               "credits": 1,
               "crn": "34237",
               "department": "Physical Education",
               "instructor": "Gabe Haber",
               "prereqs": "",
               "section": "HRU",
               "time": [
                  {
                     "day": "MTWRU",
                     "end": "10:00pm",
                     "start": "8:00pm"
                  }
               ],
               "title": "Team Soccer"
            },
            {
               "code": "1610",
               "coreqs": "",
               "credits": 0.5,
               "crn": "34383",
               "department": "Physical Education",
               "instructor": "Steven Schucker",
               "prereqs": "",
               "section": "HU",
               "time": [
                  {
                     "day": "MWU",
                     "end": "10:00pm",
                     "start": "8:00pm"
                  }
               ],
               "title": "Team Softball"
            },
            {
               "code": "2316",
               "coreqs": "",
               "credits": 1,
               "crn": "34259",
               "department": "Physical Education",
               "instructor": "Stephen D. Begley",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Team Cross Country"
            },
            {
               "code": "2466",
               "coreqs": "",
               "credits": 1,
               "crn": "34180",
               "department": "Physical Education",
               "instructor": "Judith Cummins",
               "prereqs": "",
               "section": "HQT",
               "time": [
                  {
                     "day": "MTW",
                     "end": "9:00pm",
                     "start": "7:00pm"
                  },
                  {
                     "day": "F",
                     "end": "1:00 pm",
                     "start": "11:00 am"
                  }
               ],
               "title": "Team Fencing"
            },
            {
               "code": "1031C",
               "coreqs": "",
               "credits": 4,
               "crn": "35507",
               "department": "Physics",
               "instructor": "Lea F. Santos",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Introductory Physics"
            },
            {
               "code": "1031C",
               "coreqs": "",
               "credits": 4,
               "crn": "34386",
               "department": "Physics",
               "instructor": "Lea F. Santos",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Introductory Physics"
            },
            {
               "code": "1031T",
               "coreqs": "",
               "credits": 0,
               "crn": "34560",
               "department": "Physics",
               "instructor": "Lea F. Santos",
               "prereqs": "",
               "section": "GM",
               "time": [
                  {
                     "day": "M",
                     "end": "6:50pm",
                     "start": "6:00pm"
                  }
               ],
               "title": "Introductory Physics Rec"
            },
            {
               "code": "1031Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34387",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "DEW",
               "time": [
                  {
                     "day": "W",
                     "end": "4:10pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Introductory Physics Lab"
            },
            {
               "code": "1031Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34388",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "FGW",
               "time": [
                  {
                     "day": "W",
                     "end": "7:45pm",
                     "start": "5:00pm"
                  }
               ],
               "title": "Introductory Physics Lab"
            },
            {
               "code": "1031Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34389",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "JKT",
               "time": [
                  {
                     "day": "T",
                     "end": "11:45am",
                     "start": "9:00am"
                  }
               ],
               "title": "Introductory Physics Lab"
            },
            {
               "code": "1031Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34390",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "PQT",
               "time": [
                  {
                     "day": "T",
                     "end": "7:25pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "Introductory Physics Lab"
            },
            {
               "code": "1041C",
               "coreqs": "",
               "credits": 4,
               "crn": "34201",
               "department": "Physics",
               "instructor": "Anatoly I. Frenkel",
               "prereqs": "",
               "section": "BDM",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  },
                  {
                     "day": "M",
                     "end": "2:15 pm",
                     "start": "1:25 pm"
                  }
               ],
               "title": "General Physics I"
            },
            {
               "code": "1041Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34391",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "DEW",
               "time": [
                  {
                     "day": "W",
                     "end": "4:10pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "General Physics Lab"
            },
            {
               "code": "1041Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34392",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "FGW",
               "time": [
                  {
                     "day": "W",
                     "end": "7:45pm",
                     "start": "5:00pm"
                  }
               ],
               "title": "General Physics Lab"
            },
            {
               "code": "1041Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34393",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "JKT",
               "time": [
                  {
                     "day": "T",
                     "end": "11:45am",
                     "start": "9:00am"
                  }
               ],
               "title": "General Physics Lab"
            },
            {
               "code": "1041Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34394",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "PQT",
               "time": [
                  {
                     "day": "T",
                     "end": "7:25pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "General Physics Lab"
            },
            {
               "code": "4935",
               "coreqs": "",
               "credits": 1,
               "crn": "34270",
               "department": "Physics",
               "instructor": "Mark Edelman",
               "prereqs": "",
               "section": "LT",
               "time": [
                  {
                     "day": "T",
                     "end": "1:00pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Topics:Physics Colloquium"
            },
            {
               "code": "1201",
               "coreqs": "",
               "credits": 3,
               "crn": "34240",
               "department": "Political Science",
               "instructor": "Hill Krishnan",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Intro to Comparative Politics"
            },
            {
               "code": "1401",
               "coreqs": "",
               "credits": 3,
               "crn": "34396",
               "department": "Political Science",
               "instructor": "Jamie Aroosi",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Great Political Thinkers"
            },
            {
               "code": "1501",
               "coreqs": "",
               "credits": 3,
               "crn": "34249",
               "department": "Political Science",
               "instructor": "Joseph Luders",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Fundamentals of Pol Sci"
            },
            {
               "code": "2100",
               "coreqs": "",
               "credits": 3,
               "crn": "35613",
               "department": "Political Science",
               "instructor": "Joseph Luders",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "The American Presidency"
            },
            {
               "code": "2197",
               "coreqs": "",
               "credits": 3,
               "crn": "34395",
               "department": "Political Science",
               "instructor": "Joel B. Strauss",
               "prereqs": "",
               "section": "GHM",
               "time": [
                  {
                     "day": "M",
                     "end": "8:30pm",
                     "start": "6:00pm"
                  }
               ],
               "title": "Tps:Essentials of US Legal Sys"
            },
            {
               "code": "2299",
               "coreqs": "",
               "credits": 3,
               "crn": "35562",
               "department": "Political Science",
               "instructor": "Alper Yildiz",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Politics and Culture"
            },
            {
               "code": "2394",
               "coreqs": "",
               "credits": 3,
               "crn": "35563",
               "department": "Political Science",
               "instructor": "Joanna Phua",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Topics: UN & International Org"
            },
            {
               "code": "2397",
               "coreqs": "",
               "credits": 3,
               "crn": "35564",
               "department": "Political Science",
               "instructor": "Joanna Phua",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Topics: International Conflict"
            },
            {
               "code": "2497H",
               "coreqs": "",
               "credits": 3,
               "crn": "35565",
               "department": "Political Science",
               "instructor": "Matthew Holbreich",
               "prereqs": "",
               "section": "QRT",
               "time": [
                  {
                     "day": "T",
                     "end": "8:30pm",
                     "start": "6:00pm"
                  }
               ],
               "title": "Topics: Bible & Amer Democracy"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34325",
               "department": "Psychology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Introductory Psychology"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34235",
               "department": "Psychology",
               "instructor": "Shira Hochberg",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Introductory Psychology"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34339",
               "department": "Psychology",
               "instructor": "Shira Hochberg",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Introductory Psychology"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "34330",
               "department": "Psychology",
               "instructor": "Aharon Hersh Fried",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Theories of Human Development"
            },
            {
               "code": "1107",
               "coreqs": "",
               "credits": 3,
               "crn": "34403",
               "department": "Psychology",
               "instructor": "Aharon Hersh Fried",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Developmental Psyc: Life Span"
            },
            {
               "code": "2100C",
               "coreqs": "",
               "credits": 4,
               "crn": "34181",
               "department": "Psychology",
               "instructor": "Joshua H. Bacon",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Experimental Psychology"
            },
            {
               "code": "2100Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34443",
               "department": "Psychology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "EFM",
               "time": [
                  {
                     "day": "M",
                     "end": "5:00pm",
                     "start": "3:10pm"
                  }
               ],
               "title": "Experimental Psychology Lab"
            },
            {
               "code": "2100Y",
               "coreqs": "",
               "credits": 0,
               "crn": "36420",
               "department": "Psychology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "EW",
               "time": [
                  {
                     "day": "W",
                     "end": "4:50pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Experimental Psychology Lab"
            },
            {
               "code": "2100Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34182",
               "department": "Psychology",
               "instructor": "Jessica Hope Sloan",
               "prereqs": "",
               "section": "MR",
               "time": [
                  {
                     "day": "R",
                     "end": "3:10pm",
                     "start": "1:20pm"
                  }
               ],
               "title": "Experimental Psychology Lab"
            },
            {
               "code": "2100Y",
               "coreqs": "",
               "credits": 0,
               "crn": "36154",
               "department": "Psychology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "MT",
               "time": [
                  {
                     "day": "T",
                     "end": "3:10pm",
                     "start": "1:20pm"
                  }
               ],
               "title": "Experimental Psychology Lab"
            },
            {
               "code": "2100Y",
               "coreqs": "",
               "credits": 0,
               "crn": "34183",
               "department": "Psychology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "NPT",
               "time": [
                  {
                     "day": "T",
                     "end": "5:20pm",
                     "start": "3:30pm"
                  }
               ],
               "title": "Experimental Psychology Lab"
            },
            {
               "code": "2140",
               "coreqs": "",
               "credits": 3,
               "crn": "34519",
               "department": "Psychology",
               "instructor": "Rachel Ebner",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Learning"
            },
            {
               "code": "2150",
               "coreqs": "",
               "credits": 3,
               "crn": "34188",
               "department": "Psychology",
               "instructor": "Joshua H. Bacon",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Cognitive Psychology"
            },
            {
               "code": "2414",
               "coreqs": "",
               "credits": 3,
               "crn": "34189",
               "department": "Psychology",
               "instructor": "Terry DiLorenzo",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Abnormal Psychology"
            },
            {
               "code": "2430",
               "coreqs": "",
               "credits": 3,
               "crn": "35736",
               "department": "Psychology",
               "instructor": "Koby E. Frances",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Intro to Clinical Psychology"
            },
            {
               "code": "3105",
               "coreqs": "",
               "credits": 3,
               "crn": "34214",
               "department": "Psychology",
               "instructor": "Terry DiLorenzo",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Social Psychology"
            },
            {
               "code": "3214H",
               "coreqs": "",
               "credits": 3,
               "crn": "34223",
               "department": "Psychology",
               "instructor": "Terry DiLorenzo",
               "prereqs": "",
               "section": "JKT",
               "time": [
                  {
                     "day": "T",
                     "end": "11:40am",
                     "start": "9:40am"
                  }
               ],
               "title": "Research Seminar I"
            },
            {
               "code": "3610",
               "coreqs": "",
               "credits": 3,
               "crn": "34378",
               "department": "Psychology",
               "instructor": "Terry DiLorenzo",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Public Health"
            },
            {
               "code": "3800",
               "coreqs": "",
               "credits": 3,
               "crn": "34190",
               "department": "Psychology",
               "instructor": "Marcel Isaac Perlman",
               "prereqs": "",
               "section": "K",
               "time": [
                  {
                     "day": "TR",
                     "end": "11:45am",
                     "start": "10:30am"
                  }
               ],
               "title": "Personality"
            },
            {
               "code": "3804",
               "coreqs": "",
               "credits": 3,
               "crn": "34315",
               "department": "Psychology",
               "instructor": "Amanda Mitchell",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Psychobiology"
            },
            {
               "code": "3845",
               "coreqs": "",
               "credits": 3,
               "crn": "34520",
               "department": "Psychology",
               "instructor": "Aharon Hersh Fried",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Psychology & Religion"
            },
            {
               "code": "1236",
               "coreqs": "",
               "credits": 3,
               "crn": "35704",
               "department": "Public Health",
               "instructor": "Daniel Kimmel",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Epidemiology"
            },
            {
               "code": "3221",
               "coreqs": "",
               "credits": 3,
               "crn": "35709",
               "department": "Public Health",
               "instructor": "Raizy Weinreb",
               "prereqs": "",
               "section": "EFM",
               "time": [
                  {
                     "day": "M",
                     "end": "6:00pm",
                     "start": "3:30pm"
                  }
               ],
               "title": "Nutrition"
            },
            {
               "code": "3610",
               "coreqs": "",
               "credits": 3,
               "crn": "35708",
               "department": "Public Health",
               "instructor": "Terry DiLorenzo",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Public Health"
            },
            {
               "code": "1050",
               "coreqs": "",
               "credits": 3,
               "crn": "34323",
               "department": "Science",
               "instructor": "Lora Danley",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Science:Fundmntl & Application"
            },
            {
               "code": "1050",
               "coreqs": "",
               "credits": 3,
               "crn": "34367",
               "department": "Science",
               "instructor": "Lora Danley",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Science:Fundmntl & Application"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "34185",
               "department": "Sociology",
               "instructor": "Sidney Langer",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Introduction to Sociology"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "34184",
               "department": "Sociology",
               "instructor": "Roberta Farber",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Introduction to Sociology"
            },
            {
               "code": "1158",
               "coreqs": "",
               "credits": 3,
               "crn": "34186",
               "department": "Sociology",
               "instructor": "Sidney Langer",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Criminology"
            },
            {
               "code": "1205",
               "coreqs": "",
               "credits": 3,
               "crn": "35510",
               "department": "Sociology",
               "instructor": "Jill C. Katz",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Introduction to Anthropology: The Human Adventure"
            },
            {
               "code": "1233",
               "coreqs": "",
               "credits": 3,
               "crn": "34379",
               "department": "Sociology",
               "instructor": "Terry DiLorenzo",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Intro To Public Health"
            },
            {
               "code": "1236",
               "coreqs": "",
               "credits": 3,
               "crn": "35512",
               "department": "Sociology",
               "instructor": "Daniel Kimmel",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Epidemiology"
            },
            {
               "code": "1504",
               "coreqs": "",
               "credits": 3,
               "crn": "35511",
               "department": "Sociology",
               "instructor": "Roberta Farber",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Methods of Soc Research"
            },
            {
               "code": "4925",
               "coreqs": "",
               "credits": 3,
               "crn": "34333",
               "department": "Sociology",
               "instructor": "Terry DiLorenzo",
               "prereqs": "",
               "section": "B",
               "time": [
                  {
                     "day": "MW",
                     "end": "11:40am",
                     "start": "10:25am"
                  }
               ],
               "title": "Topics: Social Psychology"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "35513",
               "department": "Spanish",
               "instructor": "Marcelo Broitman",
               "prereqs": "",
               "section": "A",
               "time": [
                  {
                     "day": "MW",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Elementary Spanish - 35513 - SPAN 1101 - A"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34409",
               "department": "Speech",
               "instructor": "Robert Russell",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Speech Communication"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "36350",
               "department": "Speech",
               "instructor": "Robert Russell",
               "prereqs": "",
               "section": "L",
               "time": [
                  {
                     "day": "TR",
                     "end": "1:15pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Speech Communication"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34271",
               "department": "Speech",
               "instructor": "Robert Russell",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Speech Communication"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34436",
               "department": "Speech",
               "instructor": "Robert Russell",
               "prereqs": "",
               "section": "P",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  }
               ],
               "title": "Speech Communication"
            },
            {
               "code": "3001",
               "coreqs": "",
               "credits": 3,
               "crn": "34202",
               "department": "Speech Pathology and Audiology",
               "instructor": "Neva Goldstein",
               "prereqs": "",
               "section": "E",
               "time": [
                  {
                     "day": "M",
                     "end": "4:25pm",
                     "start": "3:10pm"
                  },
                  {
                     "day": "W",
                     "end": "4:50 pm",
                     "start": "3:35 pm"
                  }
               ],
               "title": "Development of Language"
            },
            {
               "code": "3012",
               "coreqs": "",
               "credits": 3,
               "crn": "34203",
               "department": "Speech Pathology and Audiology",
               "instructor": "Joseph Danto",
               "prereqs": "",
               "section": "M",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:00pm",
                     "start": "1:45pm"
                  }
               ],
               "title": "Hearing Mechanism"
            },
            {
               "code": "3024",
               "coreqs": "",
               "credits": 3,
               "crn": "34255",
               "department": "Speech Pathology and Audiology",
               "instructor": "Neva Goldstein",
               "prereqs": "",
               "section": "F",
               "time": [
                  {
                     "day": "M",
                     "end": "5:55pm",
                     "start": "4:40pm"
                  },
                  {
                     "day": "W",
                     "end": "6:15 pm",
                     "start": "5:00 pm"
                  }
               ],
               "title": "Communication Disorders Adults"
            },
            {
               "code": "3034",
               "coreqs": "",
               "credits": 3,
               "crn": "34204",
               "department": "Speech Pathology and Audiology",
               "instructor": "Joseph Danto",
               "prereqs": "",
               "section": "N",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:30pm",
                     "start": "3:15pm"
                  }
               ],
               "title": "Audiology II"
            },
            {
               "code": "3112",
               "coreqs": "",
               "credits": 3,
               "crn": "34205",
               "department": "Speech Pathology and Audiology",
               "instructor": "Ashley Danielle Small",
               "prereqs": "",
               "section": "P",
               "time": [
                  {
                     "day": "TR",
                     "end": "6:00pm",
                     "start": "4:45pm"
                  }
               ],
               "title": "Phonetics"
            },
            {
               "code": "3940",
               "coreqs": "",
               "credits": 2,
               "crn": "34369",
               "department": "Speech Pathology and Audiology",
               "instructor": "Susan Wilson",
               "prereqs": "",
               "section": "DW",
               "time": [
                  {
                     "day": "W",
                     "end": "2:25pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Clinical Observation"
            },
            {
               "code": "1021",
               "coreqs": "",
               "credits": 3,
               "crn": "34206",
               "department": "Statistics",
               "instructor": "George T. H. Fuller",
               "prereqs": "",
               "section": "C",
               "time": [
                  {
                     "day": "MW",
                     "end": "1:10pm",
                     "start": "11:55am"
                  }
               ],
               "title": "Intro to Statistics"
            },
            {
               "code": "1021",
               "coreqs": "",
               "credits": 3,
               "crn": "34313",
               "department": "Statistics",
               "instructor": "George T. H. Fuller",
               "prereqs": "",
               "section": "D1",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:40pm",
                     "start": "1:25pm"
                  }
               ],
               "title": "Intro to Statistics"
            },
            {
               "code": "1021",
               "coreqs": "",
               "credits": 3,
               "crn": "34334",
               "department": "Statistics",
               "instructor": "Jeffrey Glenn Portnoy",
               "prereqs": "",
               "section": "FP",
               "time": [
                  {
                     "day": "M",
                     "end": "6:30pm",
                     "start": "5:15pm"
                  },
                  {
                     "day": "T",
                     "end": "6:30 pm",
                     "start": "5:15 pm"
                  }
               ],
               "title": "Introduction to Statistics"
            },
            {
               "code": "1021",
               "coreqs": "",
               "credits": 3,
               "crn": "36545",
               "department": "Statistics",
               "instructor": "TBA",
               "prereqs": "",
               "section": "G",
               "time": [
                  {
                     "day": "M",
                     "end": "7:15pm",
                     "start": "6:00pm"
                  },
                  {
                     "day": "W",
                     "end": "7:35 pm",
                     "start": "6:20 pm"
                  }
               ],
               "title": "Intro to Statistics"
            },
            {
               "code": "6124",
               "coreqs": "",
               "credits": 3,
               "crn": "34269",
               "department": "Tax",
               "instructor": "Leonard Schlangel",
               "prereqs": "",
               "section": "J",
               "time": [
                  {
                     "day": "TR",
                     "end": "10:15am",
                     "start": "9:00am"
                  }
               ],
               "title": "Federal Income Taxation I"
            }
         ]
      ;
      sternClassesArray.forEach(function(element) {
         sternClasses.insert(element);
      })
   }

   if (ycClasses.find().count() === 0) {
      var ycClassesArray =
         [
            {
               "code": "1023H",
               "coreqs": "",
               "credits": 3,
               "crn": "35699",
               "department": "Art",
               "instructor": "Jacob Wisse, Meir Yakov Soloveichik ",
               "prereqs": "",
               "section": "621",
               "time": [
                  {
                     "day": "F",
                     "end": "12:30pm",
                     "start": "10:00am"
                  }
               ],
               "title": "Rembrandt and the Jews"
            },
            {
               "code": "1635H",
               "coreqs": "",
               "credits": 3,
               "crn": "35570",
               "department": "Art",
               "instructor": "Paul Glassman",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Evolution of the Skyscraper"
            },
            {
               "code": "1831",
               "coreqs": "",
               "credits": 3,
               "crn": "35643",
               "department": "Art",
               "instructor": "Paul Glassman",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Architectural Design Process"
            },
            {
               "code": "2301",
               "coreqs": "",
               "credits": 2,
               "crn": "33989",
               "department": "Art",
               "instructor": "Carla Aurich",
               "prereqs": "",
               "section": "281",
               "time": [
                  {
                     "day": "M",
                     "end": "10:30pm",
                     "start": "8:45pm"
                  }
               ],
               "title": "Principles of Drawing"
            },
            {
               "code": "2901",
               "coreqs": "",
               "credits": 2,
               "crn": "34028",
               "department": "Art",
               "instructor": "Carla Aurich",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "8:35pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Printmaking"
            },
            {
               "code": "1000",
               "coreqs": "",
               "credits": 2,
               "crn": "33969",
               "department": "Bible",
               "instructor": "Moshe J. Bernstein",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Bible:Text, Context, Tradition"
            },
            {
               "code": "1000",
               "coreqs": "",
               "credits": 2,
               "crn": "33972",
               "department": "Bible",
               "instructor": "Shalom Carmy",
               "prereqs": "",
               "section": "312",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Bible:Text, Context, Tradition"
            },
            {
               "code": "1000",
               "coreqs": "",
               "credits": 2,
               "crn": "33971",
               "department": "Bible",
               "instructor": "Moshe J. Bernstein",
               "prereqs": "",
               "section": "511",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Bible:Text, Context, Tradition"
            },
            {
               "code": "1000",
               "coreqs": "",
               "credits": 2,
               "crn": "33973",
               "department": "Bible",
               "instructor": "Shalom Carmy",
               "prereqs": "",
               "section": "512",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Bible:Text, Context, Tradition"
            },
            {
               "code": "1000",
               "coreqs": "",
               "credits": 2,
               "crn": "33970",
               "department": "Bible",
               "instructor": "Yaakov Elman",
               "prereqs": "",
               "section": "513",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Bible:Text, Context, Tradition"
            },
            {
               "code": "1220",
               "coreqs": "",
               "credits": 2,
               "crn": "33974",
               "department": "Bible",
               "instructor": "Elazar Hurvitz",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Biblical Midrashim"
            },
            {
               "code": "2000H",
               "coreqs": "",
               "credits": 2,
               "crn": "35571",
               "department": "Bible",
               "instructor": "Barry L. Eichler",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Genesis"
            },
            {
               "code": "2020H",
               "coreqs": "",
               "credits": 3,
               "crn": "35573",
               "department": "Bible",
               "instructor": "Shalom Carmy",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Exodus"
            },
            {
               "code": "2700",
               "coreqs": "",
               "credits": 2,
               "crn": "34637",
               "department": "Bible",
               "instructor": "Joseph L. Angel",
               "prereqs": "",
               "section": "511",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Psalms"
            },
            {
               "code": "2720",
               "coreqs": "",
               "credits": 2,
               "crn": "35569",
               "department": "Bible",
               "instructor": "Jeremy Wieder",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Proverbs"
            },
            {
               "code": "2740",
               "coreqs": "",
               "credits": 2,
               "crn": "33975",
               "department": "Bible",
               "instructor": "Elazar Hurvitz",
               "prereqs": "",
               "section": "511",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Job"
            },
            {
               "code": "2800",
               "coreqs": "",
               "credits": 2,
               "crn": "35575",
               "department": "Bible",
               "instructor": "J. Mitchell Orlian",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Daniel"
            },
            {
               "code": "2800",
               "coreqs": "",
               "credits": 2,
               "crn": "35572",
               "department": "Bible",
               "instructor": "J. Mitchell Orlian",
               "prereqs": "",
               "section": "511",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Daniel"
            },
            {
               "code": "1011L",
               "coreqs": "",
               "credits": 2,
               "crn": "33868",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "10:05pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Principles Lab"
            },
            {
               "code": "1011L",
               "coreqs": "",
               "credits": 2,
               "crn": "33869",
               "department": "Biology",
               "instructor": "Aaron Kogut",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "10:05pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Principles Lab"
            },
            {
               "code": "1011L",
               "coreqs": "",
               "credits": 2,
               "crn": "33870",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "10:05pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Principles Lab"
            },
            {
               "code": "1011L",
               "coreqs": "",
               "credits": 2,
               "crn": "37211",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "561",
               "time": [
                  {
                     "day": "R",
                     "end": "10:05pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Principles Lab"
            },
            {
               "code": "1011R",
               "coreqs": "",
               "credits": 3,
               "crn": "33872",
               "department": "Biology",
               "instructor": "Somdeb Mitra",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Principles Lectures"
            },
            {
               "code": "1376L",
               "coreqs": "",
               "credits": 2,
               "crn": "33873",
               "department": "Biology",
               "instructor": "Somdeb Mitra",
               "prereqs": "",
               "section": "561",
               "time": [
                  {
                     "day": "R",
                     "end": "10:05pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Biochemistry Lab"
            },
            {
               "code": "1376R",
               "coreqs": "",
               "credits": 3,
               "crn": "33874",
               "department": "Biology",
               "instructor": "Daniel Lim",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Biochemistry Lecture"
            },
            {
               "code": "3135C",
               "coreqs": "",
               "credits": 4,
               "crn": "33876",
               "department": "Biology",
               "instructor": "Vincent Chiappetta",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "T",
                     "end": "4:40pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "T",
                     "end": "10:05 pm",
                     "start": "6:45 pm"
                  }
               ],
               "title": "CELL STRUCTURE AND FUNCTION"
            },
            {
               "code": "3207C",
               "coreqs": "",
               "credits": 4,
               "crn": "33877",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:50pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "T",
                     "end": "10:05 pm",
                     "start": "6:45 pm"
                  }
               ],
               "title": "Cell Biology"
            },
            {
               "code": "3513C",
               "coreqs": "",
               "credits": 4,
               "crn": "33939",
               "department": "Biology",
               "instructor": "Josefa M. Steinhauer",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "3:50pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "W",
                     "end": "10:05 pm",
                     "start": "6:45 pm"
                  }
               ],
               "title": "Genetics"
            },
            {
               "code": "3728C",
               "coreqs": "",
               "credits": 4,
               "crn": "33940",
               "department": "Biology",
               "instructor": "Sumanta Goswami",
               "prereqs": "",
               "section": "551",
               "time": [
                  {
                     "day": "R",
                     "end": "6:40pm",
                     "start": "5:00pm"
                  },
                  {
                     "day": "R",
                     "end": "10:05 pm",
                     "start": "6:45 pm"
                  }
               ],
               "title": "Human & Animal Physiology"
            },
            {
               "code": "4023L",
               "coreqs": "",
               "credits": 2,
               "crn": "33920",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "10:05pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Microbiology Lab"
            },
            {
               "code": "4023R",
               "coreqs": "",
               "credits": 2,
               "crn": "33921",
               "department": "Biology",
               "instructor": "Moses D. Tendler",
               "prereqs": "",
               "section": "441",
               "time": [
                  {
                     "day": "W",
                     "end": "6:10pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Microbiology"
            },
            {
               "code": "4901",
               "coreqs": "",
               "credits": 0,
               "crn": "33978",
               "department": "Biology",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "901",
               "time": [
                  {
                     "day": "TBA",
                     "start": "0"
                  }
               ],
               "title": "Research in Biology"
            },
            {
               "code": "4930",
               "coreqs": "",
               "credits": 3,
               "crn": "35574",
               "department": "Biology",
               "instructor": "Esther Devorah Rollhaus",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Topics: Psychopharmacology"
            },
            {
               "code": "4934H",
               "coreqs": "",
               "credits": 2,
               "crn": "33977",
               "department": "Biology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "561",
               "time": [
                  {
                     "day": "R",
                     "end": "8:25pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Topics: Stem Cells"
            },
            {
               "code": "1045R",
               "coreqs": "",
               "credits": 3,
               "crn": "33878",
               "department": "Chemistry",
               "instructor": "James Camara",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  },
                  {
                     "day": "R",
                     "end": "6:40 pm",
                     "start": "5:50 pm"
                  }
               ],
               "title": "General Chemistry I Lec"
            },
            {
               "code": "1122H",
               "coreqs": "",
               "credits": 4,
               "crn": "34029",
               "department": "Chemistry",
               "instructor": "Jianfeng Jiang",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  },
                  {
                     "day": "W",
                     "end": "9:45 pm",
                     "start": "6:45 pm"
                  }
               ],
               "title": "Chemical Analysis"
            },
            {
               "code": "1213R",
               "coreqs": "",
               "credits": 3,
               "crn": "33879",
               "department": "Chemistry",
               "instructor": "Fabiola Barrios-Landeros",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  },
                  {
                     "day": "R",
                     "end": "6:40 pm",
                     "start": "5:50 pm"
                  }
               ],
               "title": "Organic Chemistry I Lec"
            },
            {
               "code": "1215L",
               "coreqs": "",
               "credits": 2,
               "crn": "33961",
               "department": "Chemistry",
               "instructor": "Daniel Lim",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "10:45pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Organic Chemistry Lab"
            },
            {
               "code": "1215L",
               "coreqs": "",
               "credits": 2,
               "crn": "33962",
               "department": "Chemistry",
               "instructor": "Racquel K. Malcolm-Whyte",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "10:45pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Organic Chemistry Lab"
            },
            {
               "code": "1215L",
               "coreqs": "",
               "credits": 2,
               "crn": "33963",
               "department": "Chemistry",
               "instructor": "Fabiola Barrios-Landeros",
               "prereqs": "",
               "section": "611",
               "time": [
                  {
                     "day": "F",
                     "end": "1:00pm",
                     "start": "9:00am"
                  }
               ],
               "title": "Organic Chemistry Lab"
            },
            {
               "code": "1376L",
               "coreqs": "",
               "credits": 2,
               "crn": "33927",
               "department": "Chemistry",
               "instructor": "Somdeb Mitra",
               "prereqs": "",
               "section": "561",
               "time": [
                  {
                     "day": "R",
                     "end": "10:05pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Biochemistry Lab"
            },
            {
               "code": "1376R",
               "coreqs": "",
               "credits": 3,
               "crn": "33928",
               "department": "Chemistry",
               "instructor": "Daniel Lim",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Biochemistry Lec"
            },
            {
               "code": "1415R",
               "coreqs": "",
               "credits": 4,
               "crn": "33932",
               "department": "Chemistry",
               "instructor": "Raji Viswanathan",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "M",
                     "end": "7:40 pm",
                     "start": "6:50 pm"
                  }
               ],
               "title": "Physical Chemistry I"
            },
            {
               "code": "4901",
               "coreqs": "",
               "credits": 0,
               "crn": "33979",
               "department": "Chemistry",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "901",
               "time": [
                  {
                     "day": "TBA",
                     "start": "0"
                  }
               ],
               "title": "Research in Chemistry"
            },
            {
               "code": "1300C",
               "coreqs": "",
               "credits": 4,
               "crn": "33985",
               "department": "Computer Science",
               "instructor": "Van Kelly",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Introduction to Computer Science"
            },
            {
               "code": "1300L",
               "coreqs": "",
               "credits": 0,
               "crn": "33955",
               "department": "Computer Science",
               "instructor": "Mahdokht Behravan",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "8:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intro to Computer Science-Lab"
            },
            {
               "code": "1300L",
               "coreqs": "",
               "credits": 0,
               "crn": "34129",
               "department": "Computer Science",
               "instructor": "Mahdokht Behravan",
               "prereqs": "",
               "section": "561",
               "time": [
                  {
                     "day": "R",
                     "end": "8:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intro to Computer Science-Lab"
            },
            {
               "code": "1320C",
               "coreqs": "",
               "credits": 4,
               "crn": "33936",
               "department": "Computer Science",
               "instructor": "TBA",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Data Structures"
            },
            {
               "code": "1320L",
               "coreqs": "",
               "credits": 0,
               "crn": "34030",
               "department": "Computer Science",
               "instructor": "TBA",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Data Structures Lab"
            },
            {
               "code": "1504C",
               "coreqs": "",
               "credits": 4,
               "crn": "33943",
               "department": "Computer Science",
               "instructor": "Arnold Lebow",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "R",
                     "end": "8:00 pm",
                     "start": "6:45 pm"
                  }
               ],
               "title": "Discrete Structures"
            },
            {
               "code": "1621",
               "coreqs": "",
               "credits": 3,
               "crn": "35896",
               "department": "Computer Science",
               "instructor": "Arnold Lebow",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Theory of Computation"
            },
            {
               "code": "3610",
               "coreqs": "",
               "credits": 3,
               "crn": "33922",
               "department": "Computer Science",
               "instructor": "TBA",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intro to Operating Systems"
            },
            {
               "code": "3780",
               "coreqs": "",
               "credits": 3,
               "crn": "33931",
               "department": "Computer Science",
               "instructor": "Van Kelly",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Web Programming & Development"
            },
            {
               "code": "1002",
               "coreqs": "",
               "credits": 3,
               "crn": "34023",
               "department": "Contemporary World Cultures",
               "instructor": "Elizabeth Stewart",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "COWC 1002: Diaspora Literature"
            },
            {
               "code": "1014",
               "coreqs": "",
               "credits": 3,
               "crn": "35644",
               "department": "Contemporary World Cultures",
               "instructor": "Jonathan Schapiro",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "American Musical Cultures"
            },
            {
               "code": "1017",
               "coreqs": "",
               "credits": 3,
               "crn": "35645",
               "department": "Contemporary World Cultures",
               "instructor": "Graciela Bazet de Broitman",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "The Spanish Civil War 35645 COWC 1017 361"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "35646",
               "department": "Contemporary World Cultures",
               "instructor": "Roberto Genoves",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Politics and Global Markets"
            },
            {
               "code": "1025",
               "coreqs": "",
               "credits": 3,
               "crn": "35579",
               "department": "Contemporary World Cultures",
               "instructor": "Jonathan J. Zisook",
               "prereqs": "",
               "section": "611",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:30am"
                  }
               ],
               "title": "Religion and Society"
            },
            {
               "code": "1003",
               "coreqs": "",
               "credits": 3,
               "crn": "34108",
               "department": "Cultures Over Time",
               "instructor": "David Lavinsky",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "The Monstrous"
            },
            {
               "code": "1003H",
               "coreqs": "",
               "credits": 3,
               "crn": "35647",
               "department": "Cultures Over Time",
               "instructor": "David Lavinsky",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "The Monstrous"
            },
            {
               "code": "1009",
               "coreqs": "",
               "credits": 3,
               "crn": "35648",
               "department": "Cultures Over Time",
               "instructor": "Rachel Mesch",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "France and its Others"
            },
            {
               "code": "1021",
               "coreqs": "",
               "credits": 3,
               "crn": "34132",
               "department": "Cultures Over Time",
               "instructor": "Jeffrey Freedman",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Origins of Democratic Political Culture"
            },
            {
               "code": "1026",
               "coreqs": "",
               "credits": 3,
               "crn": "35649",
               "department": "Cultures Over Time",
               "instructor": "Aaron J. Koller",
               "prereqs": "",
               "section": "611",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:30am"
                  }
               ],
               "title": "The History of the Alphabet, from its Invention to the Rise of Arabic"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "34082",
               "department": "Economics",
               "instructor": "Ran Shao",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Principles of Economics"
            },
            {
               "code": "1177",
               "coreqs": "",
               "credits": 3,
               "crn": "34002",
               "department": "Economics",
               "instructor": "Tadashi Hashimoto",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Game Theory"
            },
            {
               "code": "1201",
               "coreqs": "",
               "credits": 3,
               "crn": "33923",
               "department": "Economics",
               "instructor": "Omer Acikgoz",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Intermediate Macroeconomics"
            },
            {
               "code": "1221H",
               "coreqs": "",
               "credits": 3,
               "crn": "35846",
               "department": "Economics",
               "instructor": "Elias C. Grivoyannis",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Money and Banking"
            },
            {
               "code": "1421",
               "coreqs": "",
               "credits": 3,
               "crn": "33935",
               "department": "Economics",
               "instructor": "Orkideh Gharehgozli",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Econometrics"
            },
            {
               "code": "1701",
               "coreqs": "",
               "credits": 3,
               "crn": "35584",
               "department": "Economics",
               "instructor": "Elias C. Grivoyannis",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "International Economics"
            },
            {
               "code": "0010",
               "coreqs": "",
               "credits": 2,
               "crn": "33919",
               "department": "English",
               "instructor": "Norma Silbermintz",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "ESL: Intro to College"
            },
            {
               "code": "0011",
               "coreqs": "",
               "credits": 1,
               "crn": "33958",
               "department": "English",
               "instructor": "Norma Silbermintz",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Eng as Sec Lang I"
            },
            {
               "code": "0012",
               "coreqs": "",
               "credits": 1,
               "crn": "33959",
               "department": "English",
               "instructor": "Norma Silbermintz",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Eng as Sec Lang II"
            },
            {
               "code": "0013",
               "coreqs": "",
               "credits": 1,
               "crn": "33960",
               "department": "English",
               "instructor": "Norma Silbermintz",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Eng as Sec Lang III"
            },
            {
               "code": "1002",
               "coreqs": "",
               "credits": 3,
               "crn": "35652",
               "department": "English",
               "instructor": "Elizabeth Stewart",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Diaspora Literature"
            },
            {
               "code": "1003",
               "coreqs": "",
               "credits": 3,
               "crn": "35653",
               "department": "English",
               "instructor": "William Lamborn Lee",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Shakespeare and the Arts"
            },
            {
               "code": "1007",
               "coreqs": "",
               "credits": 3,
               "crn": "35654",
               "department": "English",
               "instructor": "Richard Leonard Nochimson",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Fiction & Artistic Imagination"
            },
            {
               "code": "1409",
               "coreqs": "",
               "credits": 3,
               "crn": "35656",
               "department": "English",
               "instructor": "Liesl Schwabe",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Writing the Essay: From Personal Narrative to Personal Statements"
            },
            {
               "code": "2052",
               "coreqs": "",
               "credits": 3,
               "crn": "35677",
               "department": "English",
               "instructor": "William Lamborn Lee",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Realisms: Mimetic to Magical"
            },
            {
               "code": "2317",
               "coreqs": "",
               "credits": 3,
               "crn": "35657",
               "department": "English",
               "instructor": "David Lavinsky",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "21st Century Chaucer: The Canterbury Tales"
            },
            {
               "code": "2963H",
               "coreqs": "",
               "credits": 3,
               "crn": "35658",
               "department": "English",
               "instructor": "Elizabeth Stewart",
               "prereqs": "",
               "section": "621",
               "time": [
                  {
                     "day": "F",
                     "end": "12:30pm",
                     "start": "10:00am"
                  }
               ],
               "title": "Graphic Novels and Animation"
            },
            {
               "code": "3065",
               "coreqs": "",
               "credits": 3,
               "crn": "35655",
               "department": "English",
               "instructor": "Rachel Mesch",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Gender and Literature"
            },
            {
               "code": "4001",
               "coreqs": "",
               "credits": 2,
               "crn": "33933",
               "department": "English",
               "instructor": "Lauren Fitzgerald",
               "prereqs": "",
               "section": "481",
               "time": [
                  {
                     "day": "W",
                     "end": "9:45pm",
                     "start": "8:15pm"
                  }
               ],
               "title": "Senior Colloquium"
            },
            {
               "code": "1002",
               "coreqs": "",
               "credits": 3,
               "crn": "34007",
               "department": "Experimental & Quant. Methods",
               "instructor": "Raji Viswanathan",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "M",
                     "end": "6:45pm",
                     "start": "4:30pm"
                  },
                  {
                     "day": "W",
                     "end": "5:45 pm",
                     "start": "4:30 pm"
                  }
               ],
               "title": "Analysis of Environmntl Toxins"
            },
            {
               "code": "1007",
               "coreqs": "",
               "credits": 3,
               "crn": "35578",
               "department": "Experimental & Quant. Methods",
               "instructor": "Daniel Kimmel",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Epidemiology"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34068",
               "department": "First Year Writing",
               "instructor": "Liesl Schwabe",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34069",
               "department": "First Year Writing",
               "instructor": "Liesl Schwabe",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34072",
               "department": "First Year Writing",
               "instructor": "Elizabeth Stewart",
               "prereqs": "",
               "section": "232",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34070",
               "department": "First Year Writing",
               "instructor": "Lauren Fitzgerald",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34076",
               "department": "First Year Writing",
               "instructor": "Norma Silbermintz",
               "prereqs": "",
               "section": "242",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "First Year Writing:ESL"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34117",
               "department": "First Year Writing",
               "instructor": "Barbara A. Blatner",
               "prereqs": "",
               "section": "244",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "35582",
               "department": "First Year Writing",
               "instructor": "Richard Leonard Nochimson",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34071",
               "department": "First Year Writing",
               "instructor": "Barbara A. Blatner",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "34073",
               "department": "First Year Writing",
               "instructor": "Barbara A. Blatner",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "33881",
               "department": "French",
               "instructor": "Raisa Rexer",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Elementary French I"
            },
            {
               "code": "1201",
               "coreqs": "",
               "credits": 3,
               "crn": "34119",
               "department": "French",
               "instructor": "Raisa Rexer",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Intermediate French I"
            },
            {
               "code": "1004",
               "coreqs": "",
               "credits": 3,
               "crn": "34012",
               "department": "Hebrew",
               "instructor": "Lori Linzer",
               "prereqs": "",
               "section": "201",
               "time": [
                  {
                     "day": "MWR",
                     "end": "12:50pm",
                     "start": "12:01pm"
                  },
                  {
                     "day": "T",
                     "end": "1:10 pm",
                     "start": "12:20 pm"
                  }
               ],
               "title": "Elementary Biblical Hebrew II"
            },
            {
               "code": "1004",
               "coreqs": "",
               "credits": 3,
               "crn": "33976",
               "department": "Hebrew",
               "instructor": "Lori Linzer",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MTWR",
                     "end": "2:50pm",
                     "start": "2:00pm"
                  }
               ],
               "title": "Elementary Biblical Hebrew II"
            },
            {
               "code": "1005",
               "coreqs": "",
               "credits": 3,
               "crn": "34013",
               "department": "Hebrew",
               "instructor": "Rachel Kra Schaum",
               "prereqs": "",
               "section": "201",
               "time": [
                  {
                     "day": "MWR",
                     "end": "12:50pm",
                     "start": "12:01pm"
                  },
                  {
                     "day": "T",
                     "end": "1:10 pm",
                     "start": "12:20 pm"
                  }
               ],
               "title": "Intermed. Biblical Hebrew I"
            },
            {
               "code": "1005",
               "coreqs": "",
               "credits": 3,
               "crn": "33952",
               "department": "Hebrew",
               "instructor": "Rachel Kra Schaum",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MWR",
                     "end": "1:55pm",
                     "start": "1:05pm"
                  },
                  {
                     "day": "T",
                     "end": "2:00 pm",
                     "start": "1:10 pm"
                  }
               ],
               "title": "Intermed. Biblical Hebrew I"
            },
            {
               "code": "1006",
               "coreqs": "",
               "credits": 3,
               "crn": "33948",
               "department": "Hebrew",
               "instructor": "Ezra H. Frazer",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MTWR",
                     "end": "2:25pm",
                     "start": "1:35pm"
                  }
               ],
               "title": "Intermed. Biblical Hebrew II"
            },
            {
               "code": "1006",
               "coreqs": "",
               "credits": 3,
               "crn": "34014",
               "department": "Hebrew",
               "instructor": "Ezra H. Frazer",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "T",
                     "end": "6:40 pm",
                     "start": "5:50 pm"
                  }
               ],
               "title": "Intermed. Biblical Hebrew II"
            },
            {
               "code": "1105",
               "coreqs": "",
               "credits": 3,
               "crn": "33953",
               "department": "Hebrew",
               "instructor": "Chaya Glaser",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MTWR",
                     "end": "2:25pm",
                     "start": "1:35pm"
                  }
               ],
               "title": "intermediate Hebrew"
            },
            {
               "code": "1105",
               "coreqs": "",
               "credits": 3,
               "crn": "34015",
               "department": "Hebrew",
               "instructor": "Chaya Glaser",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:20pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "T",
                     "end": "1:00 pm",
                     "start": "12:20 pm"
                  }
               ],
               "title": "intermediate Hebrew"
            },
            {
               "code": "1106",
               "coreqs": "",
               "credits": 3,
               "crn": "34016",
               "department": "Hebrew",
               "instructor": "Chaya Glaser",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "W",
                     "end": "12:50 pm",
                     "start": "12:01 pm"
                  }
               ],
               "title": "intermediate 2"
            },
            {
               "code": "1205",
               "coreqs": "",
               "credits": 3,
               "crn": "36037",
               "department": "Hebrew",
               "instructor": "Sarah Kasher-Bendet",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Upper Intermediate Hebrew I"
            },
            {
               "code": "1206",
               "coreqs": "",
               "credits": 3,
               "crn": "35662",
               "department": "Hebrew",
               "instructor": "Sigal Shalom",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Upper Intermediate Hebrew II"
            },
            {
               "code": "1206",
               "coreqs": "",
               "credits": 3,
               "crn": "34053",
               "department": "Hebrew",
               "instructor": "Samuel Schneider",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Upper Intermediate Hebrew II - 34053 - HEB 1206 - 231"
            },
            {
               "code": "1206",
               "coreqs": "",
               "credits": 3,
               "crn": "34017",
               "department": "Hebrew",
               "instructor": "Samuel Schneider",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Upper Intermediate Hebrew II - 34017 - HEB 1206 - 241"
            },
            {
               "code": "1206",
               "coreqs": "",
               "credits": 3,
               "crn": "35663",
               "department": "Hebrew",
               "instructor": "Samuel Schneider",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Upper Intermediate Hebrew II - 35663 - HEB 1206 - 261"
            },
            {
               "code": "1206",
               "coreqs": "",
               "credits": 3,
               "crn": "34054",
               "department": "Hebrew",
               "instructor": "Sigal Shalom",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Upper Intermediate Hebrew II"
            },
            {
               "code": "1306",
               "coreqs": "",
               "credits": 3,
               "crn": "34055",
               "department": "Hebrew",
               "instructor": "Sarah Kasher-Bendet",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Advanced Hebrew II - 34055 - HEB 1306 - 231"
            },
            {
               "code": "1306",
               "coreqs": "",
               "credits": 3,
               "crn": "34034",
               "department": "Hebrew",
               "instructor": "Sarah Kasher-Bendet",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Advanced Hebrew II - 34034 - HEB 1306 - 331"
            },
            {
               "code": "1306H",
               "coreqs": "",
               "credits": 3,
               "crn": "35664",
               "department": "Hebrew",
               "instructor": "Sarah Kasher-Bendet",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Advanced Hebrew II - 35664 - HEB 1306H - 241"
            },
            {
               "code": "1105",
               "coreqs": "",
               "credits": 3,
               "crn": "35602",
               "department": "History",
               "instructor": "Shalom E. Holtz",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "His. of the Ancient Near East"
            },
            {
               "code": "2127H",
               "coreqs": "",
               "credits": 3,
               "crn": "35666",
               "department": "History",
               "instructor": "Jeffrey Freedman",
               "prereqs": "",
               "section": "621",
               "time": [
                  {
                     "day": "F",
                     "end": "12:30pm",
                     "start": "10:00am"
                  }
               ],
               "title": "European Enlightenment"
            },
            {
               "code": "2128",
               "coreqs": "",
               "credits": 3,
               "crn": "34137",
               "department": "History",
               "instructor": "Jeffrey Freedman",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Origins of Democratic Political Culture"
            },
            {
               "code": "2165",
               "coreqs": "",
               "credits": 3,
               "crn": "35711",
               "department": "History",
               "instructor": "Mario Kessler",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Europe since 1945"
            },
            {
               "code": "2520",
               "coreqs": "",
               "credits": 3,
               "crn": "35604",
               "department": "History",
               "instructor": "Douglas Burgess",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Atlantic World"
            },
            {
               "code": "2604",
               "coreqs": "",
               "credits": 3,
               "crn": "35605",
               "department": "History",
               "instructor": "Douglas Burgess",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Piracy & the Nation State"
            },
            {
               "code": "4977H",
               "coreqs": "",
               "credits": 1,
               "crn": "33984",
               "department": "Honors",
               "instructor": "Gabriel Cwilich",
               "prereqs": "",
               "section": "HON",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Honors Thesis Proposal"
            },
            {
               "code": "4978H",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33929",
               "department": "Honors",
               "instructor": "TBA",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Honors Thesis Seminar I"
            },
            {
               "code": "4979H",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33930",
               "department": "Honors",
               "instructor": "TBA",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Honors Thesis Seminar II"
            },
            {
               "code": "4980H",
               "coreqs": "",
               "credits": 0,
               "crn": "33917",
               "department": "Honors",
               "instructor": "Gabriel Cwilich",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Honors Thesis: Preparation"
            },
            {
               "code": "4981H",
               "coreqs": "",
               "credits": 0,
               "crn": "33918",
               "department": "Honors",
               "instructor": "Gabriel Cwilich",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Honors Thesis: Writing"
            },
            {
               "code": "1006",
               "coreqs": "",
               "credits": 3,
               "crn": "34050",
               "department": "Human Behavior Soc Institution",
               "instructor": "Elias C. Grivoyannis",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Economics Efficiency & Justice"
            },
            {
               "code": "1007",
               "coreqs": "",
               "credits": 3,
               "crn": "33967",
               "department": "Human Behavior Soc Institution",
               "instructor": "Ariel Malka",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Psychology and Public Opinion"
            },
            {
               "code": "1007H",
               "coreqs": "",
               "credits": 3,
               "crn": "35583",
               "department": "Human Behavior Soc Institution",
               "instructor": "Ariel Malka",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Psychology and Public Opinion"
            },
            {
               "code": "1012",
               "coreqs": "",
               "credits": 3,
               "crn": "35585",
               "department": "Human Behavior Soc Institution",
               "instructor": "Akiva J. Covitz",
               "prereqs": "",
               "section": "621",
               "time": [
                  {
                     "day": "F",
                     "end": "12:30pm",
                     "start": "10:00am"
                  }
               ],
               "title": "Courts and Social Change"
            },
            {
               "code": "1014",
               "coreqs": "",
               "credits": 3,
               "crn": "35659",
               "department": "Human Behavior Soc Institution",
               "instructor": "Jamie Aroosi",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "American Public Policy"
            },
            {
               "code": "1016H",
               "coreqs": "",
               "credits": 3,
               "crn": "35660",
               "department": "Human Behavior Soc Institution",
               "instructor": "Amy Stuart",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Sociology of Race and Racism"
            },
            {
               "code": "1003",
               "coreqs": "",
               "credits": 3,
               "crn": "35606",
               "department": "Interpreting the Creative",
               "instructor": "William Lamborn Lee",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Shakespeare and the Arts"
            },
            {
               "code": "1007",
               "coreqs": "",
               "credits": 3,
               "crn": "35608",
               "department": "Interpreting the Creative",
               "instructor": "Richard Leonard Nochimson",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Fiction & Artistic Imagination"
            },
            {
               "code": "1016",
               "coreqs": "",
               "credits": 3,
               "crn": "33994",
               "department": "Interpreting the Creative",
               "instructor": "Jess J. Olson",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Culture of the Fin de Siecle"
            },
            {
               "code": "1018",
               "coreqs": "",
               "credits": 3,
               "crn": "34131",
               "department": "Interpreting the Creative",
               "instructor": "Daniel Beliavsky",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Aesthetic Revolutions"
            },
            {
               "code": "1022",
               "coreqs": "",
               "credits": 3,
               "crn": "35607",
               "department": "Interpreting the Creative",
               "instructor": "Ronnie Perelis",
               "prereqs": "",
               "section": "621",
               "time": [
                  {
                     "day": "F",
                     "end": "12:30pm",
                     "start": "10:00am"
                  }
               ],
               "title": "Travel Narratives"
            },
            {
               "code": "1023H",
               "coreqs": "",
               "credits": 3,
               "crn": "35688",
               "department": "Interpreting the Creative",
               "instructor": "Jacob Wisse, Meir Yakov Soloveichik ",
               "prereqs": "",
               "section": "621",
               "time": [
                  {
                     "day": "F",
                     "end": "12:30pm",
                     "start": "10:00am"
                  }
               ],
               "title": "Rembrandt and the Jews"
            },
            {
               "code": "1200",
               "coreqs": "",
               "credits": 3,
               "crn": "33986",
               "department": "Jewish History",
               "instructor": "Steven Fine",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Classical Jewish History"
            },
            {
               "code": "1300",
               "coreqs": "",
               "credits": 3,
               "crn": "33987",
               "department": "Jewish History",
               "instructor": "Chaviva Levin",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Medieval Jewish History"
            },
            {
               "code": "1300H",
               "coreqs": "",
               "credits": 3,
               "crn": "35611",
               "department": "Jewish History",
               "instructor": "Chaviva Levin",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Medieval Jewish History"
            },
            {
               "code": "1400",
               "coreqs": "",
               "credits": 3,
               "crn": "34006",
               "department": "Jewish History",
               "instructor": "Joshua Karlip",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Modern Jewish History"
            },
            {
               "code": "1400",
               "coreqs": "",
               "credits": 3,
               "crn": "35668",
               "department": "Jewish History",
               "instructor": "Jess J. Olson",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Modern Jewish History"
            },
            {
               "code": "1410",
               "coreqs": "",
               "credits": 3,
               "crn": "36386",
               "department": "Jewish History",
               "instructor": "Shalom Carmy",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Early Modern Intellectual JHI"
            },
            {
               "code": "2210H",
               "coreqs": "",
               "credits": 3,
               "crn": "35695",
               "department": "Jewish History",
               "instructor": "Moshe J. Bernstein",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Classical Intellectual JHI"
            },
            {
               "code": "1380",
               "coreqs": "",
               "credits": 3,
               "crn": "35610",
               "department": "Jewish Philosophy",
               "instructor": "Jonathan V. Dauber",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Early Kabbalah"
            },
            {
               "code": "1160",
               "coreqs": "",
               "credits": 4,
               "crn": "33882",
               "department": "Mathematics",
               "instructor": "Donald Taylor-Bruce",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "M",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  },
                  {
                     "day": "TR",
                     "end": "5:45 pm",
                     "start": "4:30 pm"
                  }
               ],
               "title": "Precalculus"
            },
            {
               "code": "1401",
               "coreqs": "",
               "credits": 0,
               "crn": "34040",
               "department": "Mathematics",
               "instructor": "Yan Li",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "M",
                     "end": "5:20pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Problem Seminar I - 34040 - MAT 1401 - 241"
            },
            {
               "code": "1401",
               "coreqs": "",
               "credits": 0,
               "crn": "33883",
               "department": "Mathematics",
               "instructor": "Yan Li",
               "prereqs": "",
               "section": "251",
               "time": [
                  {
                     "day": "M",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "Problem Seminar I - 33883 - MAT 1401 - 251"
            },
            {
               "code": "1401",
               "coreqs": "",
               "credits": 0,
               "crn": "33884",
               "department": "Mathematics",
               "instructor": "Yan Li",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "7:35pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Problem Seminar I - 33884 - MAT 1401 - 361"
            },
            {
               "code": "1402",
               "coreqs": "",
               "credits": 0,
               "crn": "33925",
               "department": "Mathematics",
               "instructor": "Yan Li",
               "prereqs": "",
               "section": "551",
               "time": [
                  {
                     "day": "R",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "Problem Seminar II - 33925 - MAT 1402 - 551"
            },
            {
               "code": "1403",
               "coreqs": "",
               "credits": 0,
               "crn": "33885",
               "department": "Mathematics",
               "instructor": "Donald Taylor-Bruce",
               "prereqs": "",
               "section": "551",
               "time": [
                  {
                     "day": "R",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "Problem Seminar III"
            },
            {
               "code": "1412",
               "coreqs": "",
               "credits": 4,
               "crn": "33886",
               "department": "Mathematics",
               "instructor": "Yan Li",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Calculus I - 33886 - MAT 1412 - 341"
            },
            {
               "code": "1413",
               "coreqs": "",
               "credits": 4,
               "crn": "33887",
               "department": "Mathematics",
               "instructor": "Wenxiong Chen",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Calculus II"
            },
            {
               "code": "1504C",
               "coreqs": "",
               "credits": 4,
               "crn": "33957",
               "department": "Mathematics",
               "instructor": "Arnold Lebow",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  },
                  {
                     "day": "R",
                     "end": "8:00 pm",
                     "start": "6:45 pm"
                  }
               ],
               "title": "Discrete Structures"
            },
            {
               "code": "1510",
               "coreqs": "",
               "credits": 4,
               "crn": "33888",
               "department": "Mathematics",
               "instructor": "Wenxiong Chen",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Multivariable Calculus"
            },
            {
               "code": "1520",
               "coreqs": "",
               "credits": 3,
               "crn": "33889",
               "department": "Mathematics",
               "instructor": "Wenxiong Chen",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Advanced Calculus I"
            },
            {
               "code": "2105",
               "coreqs": "",
               "credits": 3,
               "crn": "33942",
               "department": "Mathematics",
               "instructor": "Maxwell Musser",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Linear Algebra"
            },
            {
               "code": "2461",
               "coreqs": "",
               "credits": 3,
               "crn": "33890",
               "department": "Mathematics",
               "instructor": "Arnold Lebow",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Probability Theory"
            },
            {
               "code": "1014",
               "coreqs": "",
               "credits": 3,
               "crn": "35669",
               "department": "Music",
               "instructor": "Jonathan Schapiro",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "American Musical Cultures"
            },
            {
               "code": "1018",
               "coreqs": "",
               "credits": 3,
               "crn": "34135",
               "department": "Music",
               "instructor": "Daniel Beliavsky",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Aesthetic Revolutions"
            },
            {
               "code": "1350",
               "coreqs": "",
               "credits": 3,
               "crn": "33996",
               "department": "Music",
               "instructor": "Daniel Beliavsky",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Baroque & Classical Music"
            },
            {
               "code": "1829H",
               "coreqs": "",
               "credits": 3,
               "crn": "34074",
               "department": "Music",
               "instructor": "Harry Ballan",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Music and the Brain"
            },
            {
               "code": "2111",
               "coreqs": "",
               "credits": 3,
               "crn": "34018",
               "department": "Music",
               "instructor": "Daniel Beliavsky",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Diatonic Harmony&Counterpoint"
            },
            {
               "code": "2111L",
               "coreqs": "",
               "credits": 1,
               "crn": "34019",
               "department": "Music",
               "instructor": "Daniel Beliavsky",
               "prereqs": "",
               "section": "251",
               "time": [
                  {
                     "day": "M",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "Ear Training I"
            },
            {
               "code": "2113",
               "coreqs": "",
               "credits": 3,
               "crn": "33934",
               "department": "Music",
               "instructor": "Kurt Nelson",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Chromatic Harmony & Counterpoint I Mus 2113"
            },
            {
               "code": "2113L",
               "coreqs": "",
               "credits": 1,
               "crn": "35670",
               "department": "Music",
               "instructor": "Kurt Nelson",
               "prereqs": "",
               "section": "251",
               "time": [
                  {
                     "day": "MW",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "Ear Training III - 35670 - MUS 2113L - 251"
            },
            {
               "code": "2120",
               "coreqs": "",
               "credits": 2,
               "crn": "34042",
               "department": "Music",
               "instructor": "Jonathan Schapiro",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "3:50pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Introduction to Composition"
            },
            {
               "code": "3464",
               "coreqs": "",
               "credits": 1,
               "crn": "35616",
               "department": "Music",
               "instructor": "Daniel Beliavsky",
               "prereqs": "",
               "section": "901",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Performance: Chamber Ensemble"
            },
            {
               "code": "3469",
               "coreqs": "",
               "credits": 1,
               "crn": "35617",
               "department": "Music",
               "instructor": "Jonathan Schapiro",
               "prereqs": "",
               "section": "901",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Performance: Jazz Ensemble"
            },
            {
               "code": "4111",
               "coreqs": "",
               "credits": 1,
               "crn": "33937",
               "department": "Music",
               "instructor": "Daniel Beliavsky",
               "prereqs": "",
               "section": "901",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Applied Musical Study"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "35696",
               "department": "Natural World",
               "instructor": "TBA",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Frontiers of Science"
            },
            {
               "code": "1110",
               "coreqs": "",
               "credits": 3,
               "crn": "35697",
               "department": "Natural World",
               "instructor": "Gabriel Cwilich",
               "prereqs": "",
               "section": "611",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:30am"
                  }
               ],
               "title": "The Imagination of Nature"
            },
            {
               "code": "1100",
               "coreqs": "",
               "credits": 3,
               "crn": "35618",
               "department": "Philosophy",
               "instructor": "David R. Johnson",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Logic"
            },
            {
               "code": "2170H",
               "coreqs": "",
               "credits": 3,
               "crn": "34109",
               "department": "Philosophy",
               "instructor": "David R. Johnson",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Ancient & Medieval Philosophy"
            },
            {
               "code": "4930H",
               "coreqs": "",
               "credits": 3,
               "crn": "34146",
               "department": "Philosophy",
               "instructor": "Meir Yakov Soloveichik",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Topics: Judaism and Democracy"
            },
            {
               "code": "4931",
               "coreqs": "",
               "credits": 3,
               "crn": "35671",
               "department": "Philosophy",
               "instructor": "David R. Johnson",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Seminar: Paradoxes"
            },
            {
               "code": "4932",
               "coreqs": "",
               "credits": 3,
               "crn": "36144",
               "department": "Philosophy",
               "instructor": "Daniel Rynhold",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Seminar: Kant's First Critique"
            },
            {
               "code": "1120",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33956",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "20"
                  }
               ],
               "title": "Team Golf"
            },
            {
               "code": "1326",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33945",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "15"
                  }
               ],
               "title": "Team Volleyball"
            },
            {
               "code": "1346",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33944",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "15"
                  }
               ],
               "title": "Team Tennis"
            },
            {
               "code": "1426",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33904",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "42"
                  }
               ],
               "title": "Team Basketball"
            },
            {
               "code": "1511",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33905",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "30"
                  }
               ],
               "title": "Team Soccer"
            },
            {
               "code": "1611",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33906",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "30"
                  }
               ],
               "title": "Team Baseball"
            },
            {
               "code": "2316",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33907",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "20"
                  }
               ],
               "title": "Team Cross-Country"
            },
            {
               "code": "2466",
               "coreqs": "",
               "credits": 0.5,
               "crn": "33908",
               "department": "Physical Education",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "TBA",
               "time": [
                  {
                     "day": "TBA",
                     "start": "25"
                  }
               ],
               "title": "Team Fencing"
            },
            {
               "code": "1031L",
               "coreqs": "",
               "credits": 1,
               "crn": "33892",
               "department": "Physics",
               "instructor": "Neer Asherie",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "8:25pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intro Physics Lab"
            },
            {
               "code": "1031L",
               "coreqs": "",
               "credits": 1,
               "crn": "33964",
               "department": "Physics",
               "instructor": "TBA",
               "prereqs": "",
               "section": "411",
               "time": [
                  {
                     "day": "W",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Intro Physics Lab"
            },
            {
               "code": "1031L",
               "coreqs": "",
               "credits": 1,
               "crn": "33982",
               "department": "Physics",
               "instructor": "Clifford Marc Bastuscheck",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "8:25pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intro Physics Lab"
            },
            {
               "code": "1031R",
               "coreqs": "",
               "credits": 4,
               "crn": "33893",
               "department": "Physics",
               "instructor": "Neer Asherie",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Intro Physics Lecture"
            },
            {
               "code": "1031T",
               "coreqs": "",
               "credits": 0,
               "crn": "35634",
               "department": "Physics",
               "instructor": "Neer Asherie",
               "prereqs": "",
               "section": "251",
               "time": [
                  {
                     "day": "M",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "Intro Physics I - Recitation"
            },
            {
               "code": "1031T",
               "coreqs": "",
               "credits": 0,
               "crn": "35638",
               "department": "Physics",
               "instructor": "Neer Asherie",
               "prereqs": "",
               "section": "451",
               "time": [
                  {
                     "day": "W",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "Intro Physics I - Recitation"
            },
            {
               "code": "1051R",
               "coreqs": "",
               "credits": 4,
               "crn": "34010",
               "department": "Physics",
               "instructor": "Fredy Zypman",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Calculus Based Physics"
            },
            {
               "code": "1051T",
               "coreqs": "",
               "credits": 0,
               "crn": "35888",
               "department": "Physics",
               "instructor": "Mahdokht Behravan",
               "prereqs": "",
               "section": "251",
               "time": [
                  {
                     "day": "M",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "General Physics I-Recitation"
            },
            {
               "code": "1401",
               "coreqs": "",
               "credits": 3,
               "crn": "35676",
               "department": "Physics",
               "instructor": "Fredy Zypman",
               "prereqs": "",
               "section": "631",
               "time": [
                  {
                     "day": "F",
                     "end": "1:30pm",
                     "start": "11:00am"
                  }
               ],
               "title": "PHY Solid State"
            },
            {
               "code": "1510H",
               "coreqs": "",
               "credits": 3,
               "crn": "35672",
               "department": "Physics",
               "instructor": "Gabriel Cwilich",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Statistical Mechanics"
            },
            {
               "code": "1621",
               "coreqs": "",
               "credits": 3,
               "crn": "33926",
               "department": "Physics",
               "instructor": "Sergey V. Buldyrev",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intro to Quantum Mechanics"
            },
            {
               "code": "2051R",
               "coreqs": "",
               "credits": 4,
               "crn": "34088",
               "department": "Physics",
               "instructor": "Sergey V. Buldyrev",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "General Physics III"
            },
            {
               "code": "2051T",
               "coreqs": "",
               "credits": 0,
               "crn": "35678",
               "department": "Physics",
               "instructor": "Sergey V. Buldyrev",
               "prereqs": "",
               "section": "451",
               "time": [
                  {
                     "day": "W",
                     "end": "6:40pm",
                     "start": "5:50pm"
                  }
               ],
               "title": "General Physics III-Recitation"
            },
            {
               "code": "2061L",
               "coreqs": "",
               "credits": 1,
               "crn": "34087",
               "department": "Physics",
               "instructor": "Mahdokht Behravan",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "8:45pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "General Physics III Lab"
            },
            {
               "code": "2061L",
               "coreqs": "",
               "credits": 1,
               "crn": "35633",
               "department": "Physics",
               "instructor": "Mahdokht Behravan",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "8:45pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "General Physics III Lab"
            },
            {
               "code": "4901",
               "coreqs": "",
               "credits": 0,
               "crn": "34140",
               "department": "Physics",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "901",
               "time": [
                  {
                     "day": "TBA",
                     "start": "0"
                  }
               ],
               "title": "Research in Physics"
            },
            {
               "code": "4935",
               "coreqs": "",
               "credits": 1,
               "crn": "33941",
               "department": "Physics",
               "instructor": "Mahdokht Behravan",
               "prereqs": "",
               "section": "301",
               "time": [
                  {
                     "day": "T",
                     "end": "12:50pm",
                     "start": "12:00pm"
                  }
               ],
               "title": "Physics Colloquium"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "33981",
               "department": "Political Science",
               "instructor": "Jamie Aroosi",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Intro to American Politics"
            },
            {
               "code": "1105",
               "coreqs": "",
               "credits": 3,
               "crn": "34094",
               "department": "Political Science",
               "instructor": "Jamie Aroosi",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Intro American Public Policy"
            },
            {
               "code": "1305H",
               "coreqs": "",
               "credits": 3,
               "crn": "35620",
               "department": "Political Science",
               "instructor": "Maria N. Zaitseva",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "American Foreign Policy"
            },
            {
               "code": "1501",
               "coreqs": "",
               "credits": 3,
               "crn": "33988",
               "department": "Political Science",
               "instructor": "Ruth Bevan",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Fundamentals of Political Science"
            },
            {
               "code": "2320",
               "coreqs": "",
               "credits": 3,
               "crn": "35623",
               "department": "Political Science",
               "instructor": "Roberto Genoves",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Politics and Global Markets"
            },
            {
               "code": "2430",
               "coreqs": "",
               "credits": 3,
               "crn": "35622",
               "department": "Political Science",
               "instructor": "Ruth Bevan",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "American Political Thought"
            },
            {
               "code": "2505",
               "coreqs": "",
               "credits": 3,
               "crn": "35639",
               "department": "Political Science",
               "instructor": "Maria N. Zaitseva",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Writing Politics:Dir. Research"
            },
            {
               "code": "3115H",
               "coreqs": "",
               "credits": 3,
               "crn": "35621",
               "department": "Political Science",
               "instructor": "Joseph Lieberman, Ruth Bevan ",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Presidential Elections"
            },
            {
               "code": "3575",
               "coreqs": "",
               "credits": 3,
               "crn": "35843",
               "department": "Political Science",
               "instructor": "TBA",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Research Methods"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "33895",
               "department": "Psychology",
               "instructor": "Eliezer H. Schnall",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Introduction to Psychology"
            },
            {
               "code": "1010",
               "coreqs": "",
               "credits": 3,
               "crn": "35625",
               "department": "Psychology",
               "instructor": "Jenny Isaacs",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Introduction to Psychology"
            },
            {
               "code": "1021",
               "coreqs": "",
               "credits": 3,
               "crn": "33968",
               "department": "Psychology",
               "instructor": "Ariel Malka",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Statistics for Psychology"
            },
            {
               "code": "1110",
               "coreqs": "",
               "credits": 3,
               "crn": "33896",
               "department": "Psychology",
               "instructor": "Eliezer H. Schnall",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Developmental I: Child"
            },
            {
               "code": "1130",
               "coreqs": "",
               "credits": 3,
               "crn": "35626",
               "department": "Psychology",
               "instructor": "Stephen I. Glicksman",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Developmental 2: Adult"
            },
            {
               "code": "2100C",
               "coreqs": "",
               "credits": 5,
               "crn": "33897",
               "department": "Psychology",
               "instructor": "Bruno Galantucci",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  },
                  {
                     "day": "R",
                     "end": "7:45 pm",
                     "start": "6:00 pm"
                  }
               ],
               "title": "Experimental Psychology"
            },
            {
               "code": "2150",
               "coreqs": "",
               "credits": 3,
               "crn": "34112",
               "department": "Psychology",
               "instructor": "Bruno Galantucci",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Cognitive Psychology"
            },
            {
               "code": "2414",
               "coreqs": "",
               "credits": 3,
               "crn": "35998",
               "department": "Psychology",
               "instructor": "Jenny Isaacs",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Abnormal Psychology"
            },
            {
               "code": "3105",
               "coreqs": "",
               "credits": 3,
               "crn": "33898",
               "department": "Psychology",
               "instructor": "Eliezer H. Schnall",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Social Psychology"
            },
            {
               "code": "3110",
               "coreqs": "",
               "credits": 3,
               "crn": "34077",
               "department": "Psychology",
               "instructor": "Ariel Malka",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Psychology and Public Opinion"
            },
            {
               "code": "3110H",
               "coreqs": "",
               "credits": 3,
               "crn": "35624",
               "department": "Psychology",
               "instructor": "Ariel Malka",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Psychology and Public Opinion"
            },
            {
               "code": "3435",
               "coreqs": "",
               "credits": 3,
               "crn": "34047",
               "department": "Psychology",
               "instructor": "E. Hoffman",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Industrial & Organization Psyc"
            },
            {
               "code": "3440",
               "coreqs": "",
               "credits": 3,
               "crn": "35627",
               "department": "Psychology",
               "instructor": "Ari Shechter",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Drugs & Behavior"
            },
            {
               "code": "3804",
               "coreqs": "",
               "credits": 3,
               "crn": "33899",
               "department": "Psychology",
               "instructor": "Ido Davidesco",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Psychobiology"
            },
            {
               "code": "3829H",
               "coreqs": "",
               "credits": 3,
               "crn": "34075",
               "department": "Psychology",
               "instructor": "Harry Ballan",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Music and the Brain"
            },
            {
               "code": "4901",
               "coreqs": "",
               "credits": 0,
               "crn": "33980",
               "department": "Psychology",
               "instructor": "08/29-01/11",
               "prereqs": "",
               "section": "901",
               "time": [
                  {
                     "day": "TBA",
                     "start": "0"
                  }
               ],
               "title": "Research in Psychology"
            },
            {
               "code": "4930",
               "coreqs": "",
               "credits": 3,
               "crn": "35628",
               "department": "Psychology",
               "instructor": "Esther Devorah Rollhaus",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Topics: Psychopharmacology"
            },
            {
               "code": "4933",
               "coreqs": "",
               "credits": 3,
               "crn": "35842",
               "department": "Psychology",
               "instructor": "Jenny Isaacs",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:30pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Research Seminar"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33900",
               "department": "Sociology",
               "instructor": "Daniel Kimmel",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Introduction to Sociology"
            },
            {
               "code": "2105",
               "coreqs": "",
               "credits": 3,
               "crn": "35630",
               "department": "Sociology",
               "instructor": "Jonathan J. Zisook",
               "prereqs": "",
               "section": "611",
               "time": [
                  {
                     "day": "F",
                     "end": "12:00pm",
                     "start": "9:30am"
                  }
               ],
               "title": "Religion and Society"
            },
            {
               "code": "2306H",
               "coreqs": "",
               "credits": 3,
               "crn": "35629",
               "department": "Sociology",
               "instructor": "Amy Stuart",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Sociology of Race and Racism"
            },
            {
               "code": "2407",
               "coreqs": "",
               "credits": 3,
               "crn": "35632",
               "department": "Sociology",
               "instructor": "Daniel Kimmel",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Epidemiology"
            },
            {
               "code": "2701",
               "coreqs": "",
               "credits": 3,
               "crn": "34004",
               "department": "Sociology",
               "instructor": "Eliezer H. Schnall",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Social Psychology"
            },
            {
               "code": "3003",
               "coreqs": "",
               "credits": 3,
               "crn": "34003",
               "department": "Sociology",
               "instructor": "TBA",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Social Research Methods"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "33901",
               "department": "Spanish",
               "instructor": "Graciela Bazet de Broitman",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Elementary Spanish I 33901 SPA 1101 231"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "33902",
               "department": "Spanish",
               "instructor": "Graciela Bazet de Broitman",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "TR",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Elementary Spanish I 33902 SPA 1101  311"
            },
            {
               "code": "1201",
               "coreqs": "",
               "credits": 3,
               "crn": "36557",
               "department": "Spanish",
               "instructor": "Graciela Bazet de Broitman",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Intermediate Spanish I - 36557 - SPA 1201 - 241"
            },
            {
               "code": "1201",
               "coreqs": "",
               "credits": 3,
               "crn": "33903",
               "department": "Spanish",
               "instructor": "Graciela Bazet de Broitman",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Intermediate Spanish I - 33903 - SPA 1201 - 331"
            },
            {
               "code": "1231",
               "coreqs": "",
               "credits": 3,
               "crn": "36038",
               "department": "Spanish",
               "instructor": "Marcelo Broitman",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Advanced Spanish - 36038 - SPA 1231 - 241"
            },
            {
               "code": "1021",
               "coreqs": "",
               "credits": 3,
               "crn": "33909",
               "department": "Statistics",
               "instructor": "Andreas Kakolyris",
               "prereqs": "",
               "section": "621",
               "time": [
                  {
                     "day": "F",
                     "end": "12:30pm",
                     "start": "10:00am"
                  }
               ],
               "title": "Intro to Statistics"
            },
            {
               "code": "2910",
               "coreqs": "",
               "credits": 3,
               "crn": "35698",
               "department": "Theater Arts",
               "instructor": "Lin Snider",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Art of the Actor"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "36036",
               "department": "Yiddish",
               "instructor": "Jonathan L. Lerner",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Elementary Yiddish"
            }
         ]
      ;
      ycClassesArray.forEach(function(element) {
         ycClasses.insert(element);
      })
   }

   if (symsMenClasses.find().count() === 0) {
      var symsMenClassesArray =
         [
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33793",
               "department": "Accounting",
               "instructor": "Aliza Rotenstein",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Accounting Principles I"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33866",
               "department": "Accounting",
               "instructor": "Constance J. Crawford",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Accounting Principles I"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33817",
               "department": "Accounting",
               "instructor": "Constance J. Crawford",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Accounting Principles I"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33794",
               "department": "Accounting",
               "instructor": "Leonard Fuld",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Accounting Principles I"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "35635",
               "department": "Accounting",
               "instructor": "TBA",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Accounting Principles I"
            },
            {
               "code": "1002",
               "coreqs": "",
               "credits": 3,
               "crn": "33821",
               "department": "Accounting",
               "instructor": "Joel A. Hochman",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Accounting Principles II"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "33795",
               "department": "Accounting",
               "instructor": "Aliza Rotenstein",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Intermediate Accounting I"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "33796",
               "department": "Accounting",
               "instructor": "Aliza Rotenstein",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Intermediate Accounting I"
            },
            {
               "code": "1101",
               "coreqs": "",
               "credits": 3,
               "crn": "36423",
               "department": "Accounting",
               "instructor": "Francine Mellors-Rothenstein",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intermediate Accounting I"
            },
            {
               "code": "2403",
               "coreqs": "",
               "credits": 3,
               "crn": "33797",
               "department": "Accounting",
               "instructor": "He Huang",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Management Accounting"
            },
            {
               "code": "3201",
               "coreqs": "",
               "credits": 3,
               "crn": "33825",
               "department": "Accounting",
               "instructor": "Martin A. Leibowitz",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Advanced Accounting"
            },
            {
               "code": "3201",
               "coreqs": "",
               "credits": 3,
               "crn": "33798",
               "department": "Accounting",
               "instructor": "Martin A. Leibowitz",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Advanced Accounting"
            },
            {
               "code": "3851",
               "coreqs": "",
               "credits": 3,
               "crn": "33816",
               "department": "Accounting",
               "instructor": "Sidney J. Mehl",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Financial Statement Analysis"
            },
            {
               "code": "4741",
               "coreqs": "",
               "credits": 0,
               "crn": "33815",
               "department": "Business & Management",
               "instructor": "TBA",
               "prereqs": "",
               "section": "INT",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Business Internship"
            },
            {
               "code": "1800H",
               "coreqs": "",
               "credits": 3,
               "crn": "33851",
               "department": "Business Law",
               "instructor": "Moses L. Pava",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Business as Human Enterprise"
            },
            {
               "code": "2021",
               "coreqs": "",
               "credits": 3,
               "crn": "33799",
               "department": "Business Law",
               "instructor": "Daniel Feldman",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Ethical & Legal Env Business"
            },
            {
               "code": "2021",
               "coreqs": "",
               "credits": 3,
               "crn": "35661",
               "department": "Business Law",
               "instructor": "Daniel Feldman",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Ethical & Legal Env Business"
            },
            {
               "code": "2111",
               "coreqs": "",
               "credits": 3,
               "crn": "33800",
               "department": "Business Law",
               "instructor": "Robert Jay Greenberg",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "TR",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Business Law I"
            },
            {
               "code": "2111",
               "coreqs": "",
               "credits": 3,
               "crn": "33801",
               "department": "Business Law",
               "instructor": "Robert Jay Greenberg",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Business Law I"
            },
            {
               "code": "2500",
               "coreqs": "",
               "credits": 2,
               "crn": "33831",
               "department": "Business Law",
               "instructor": "Ozer Glickman",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Business and Jewish Law"
            },
            {
               "code": "2500",
               "coreqs": "",
               "credits": 2,
               "crn": "33822",
               "department": "Business Law",
               "instructor": "Daniel Feldman",
               "prereqs": "",
               "section": "312",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Business and Jewish Law"
            },
            {
               "code": "2500",
               "coreqs": "",
               "credits": 2,
               "crn": "33832",
               "department": "Business Law",
               "instructor": "Ozer Glickman",
               "prereqs": "",
               "section": "511",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Business and Jewish Law"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33802",
               "department": "Finance",
               "instructor": "Sidney J. Mehl",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Principles of Finance"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "35673",
               "department": "Finance",
               "instructor": "Rachel Calipha",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Principles of Finance"
            },
            {
               "code": "1408",
               "coreqs": "",
               "credits": 3,
               "crn": "35674",
               "department": "Finance",
               "instructor": "Joshua Krausz",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Corporate Finance"
            },
            {
               "code": "1408",
               "coreqs": "",
               "credits": 3,
               "crn": "33803",
               "department": "Finance",
               "instructor": "Gabriela Coiculescu",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Corporate Finance"
            },
            {
               "code": "2505",
               "coreqs": "",
               "credits": 3,
               "crn": "33804",
               "department": "Finance",
               "instructor": "Joshua Krausz",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Investment Analysis"
            },
            {
               "code": "3510",
               "coreqs": "",
               "credits": 3,
               "crn": "33844",
               "department": "Finance",
               "instructor": "Rachel Calipha",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Options and Futures"
            },
            {
               "code": "3720",
               "coreqs": "",
               "credits": 3,
               "crn": "33820",
               "department": "Finance",
               "instructor": "S. Abraham Ravid",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Fixed Income Securities"
            },
            {
               "code": "3851",
               "coreqs": "",
               "credits": 3,
               "crn": "33806",
               "department": "Finance",
               "instructor": "Sidney J. Mehl",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Financial Statement Analysis"
            },
            {
               "code": "1012",
               "coreqs": "",
               "credits": 3,
               "crn": "33827",
               "department": "First Year Seminar",
               "instructor": "Marc Spear",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Business Communication"
            },
            {
               "code": "1012",
               "coreqs": "",
               "credits": 3,
               "crn": "33853",
               "department": "First Year Seminar",
               "instructor": "Marc Spear",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Business Communication"
            },
            {
               "code": "1012",
               "coreqs": "",
               "credits": 3,
               "crn": "33852",
               "department": "First Year Seminar",
               "instructor": "Marc Spear",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Business Communication"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33858",
               "department": "First Year Writing",
               "instructor": "TBA",
               "prereqs": "",
               "section": "243",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33857",
               "department": "First Year Writing",
               "instructor": "TBA",
               "prereqs": "",
               "section": "262",
               "time": [
                  {
                     "day": "MW",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33860",
               "department": "First Year Writing",
               "instructor": "Timothy J. Berrigan",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "TR",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33859",
               "department": "First Year Writing",
               "instructor": "Timothy J. Berrigan",
               "prereqs": "",
               "section": "332",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33861",
               "department": "First Year Writing",
               "instructor": "Timothy J. Berrigan",
               "prereqs": "",
               "section": "342",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "36573",
               "department": "First Year Writing",
               "instructor": "TBA",
               "prereqs": "",
               "section": "343",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "First Year Writing"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33839",
               "department": "Information & Decision Science",
               "instructor": "Avi Naiman",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Business Algebra"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33840",
               "department": "Information & Decision Science",
               "instructor": "Avi Naiman",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Business Algebra"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33807",
               "department": "Information & Decision Science",
               "instructor": "Shu Han",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Intro to Information Systems"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33828",
               "department": "Information & Decision Science",
               "instructor": "Shu Han",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Intro to Information Systems"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33809",
               "department": "Information & Decision Science",
               "instructor": "Shu Han",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Intro to Information Systems"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "35679",
               "department": "Information & Decision Science",
               "instructor": "Kevin Brabazon",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Intro to Information Systems"
            },
            {
               "code": "1131",
               "coreqs": "",
               "credits": 3,
               "crn": "35680",
               "department": "Information & Decision Science",
               "instructor": "Vladimir Kovtun",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Statistics for Business"
            },
            {
               "code": "1131",
               "coreqs": "",
               "credits": 3,
               "crn": "33808",
               "department": "Information & Decision Science",
               "instructor": "Avi H. Giloni",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Statistics for Business"
            },
            {
               "code": "1131",
               "coreqs": "",
               "credits": 3,
               "crn": "33833",
               "department": "Information & Decision Science",
               "instructor": "Avi H. Giloni",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Statistics for Business"
            },
            {
               "code": "1456",
               "coreqs": "",
               "credits": 3,
               "crn": "33826",
               "department": "Information & Decision Science",
               "instructor": "Yasar Levent Kocaga",
               "prereqs": "",
               "section": "211",
               "time": [
                  {
                     "day": "MW",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Quantitative Methods Managment"
            },
            {
               "code": "1456",
               "coreqs": "",
               "credits": 3,
               "crn": "33810",
               "department": "Information & Decision Science",
               "instructor": "Yasar Levent Kocaga",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Quantitative Methods Managment"
            },
            {
               "code": "2030",
               "coreqs": "",
               "credits": 3,
               "crn": "33837",
               "department": "Information & Decision Science",
               "instructor": "Yitzchak S. Rosenthal",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Bus. Analytics & Programming"
            },
            {
               "code": "2160",
               "coreqs": "",
               "credits": 3,
               "crn": "33849",
               "department": "Information & Decision Science",
               "instructor": "Sriram Subramanian",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Decision Models"
            },
            {
               "code": "2460",
               "coreqs": "",
               "credits": 3,
               "crn": "35689",
               "department": "Information & Decision Science",
               "instructor": "Yitzchak S. Rosenthal",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Data Management-Bus Analytics"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 2,
               "crn": "33862",
               "department": "Jewish Values in Contemp Wrld",
               "instructor": "Jacob J. Schacter",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "M",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  },
                  {
                     "day": "T",
                     "end": "2:30 pm",
                     "start": "1:30 pm"
                  }
               ],
               "title": "Jewish Engagements"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 2,
               "crn": "33863",
               "department": "Jewish Values in Contemp Wrld",
               "instructor": "Jacob J. Schacter",
               "prereqs": "",
               "section": "511",
               "time": [
                  {
                     "day": "M",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  },
                  {
                     "day": "R",
                     "end": "2:30 pm",
                     "start": "1:30 pm"
                  }
               ],
               "title": "Jewish Engagements"
            },
            {
               "code": "1002",
               "coreqs": "",
               "credits": 2,
               "crn": "35690",
               "department": "Jewish Values in Contemp Wrld",
               "instructor": "Daniel Rynhold",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "T",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Jewish Values in Contemp Wrld"
            },
            {
               "code": "1002",
               "coreqs": "",
               "credits": 2,
               "crn": "35691",
               "department": "Jewish Values in Contemp Wrld",
               "instructor": "Daniel Rynhold",
               "prereqs": "",
               "section": "511",
               "time": [
                  {
                     "day": "R",
                     "end": "2:45pm",
                     "start": "1:05pm"
                  }
               ],
               "title": "Jewish Values in Contemp Wrld"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "35681",
               "department": "Management",
               "instructor": "Andrew M. Geller",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Mangmnt in a Global Environmnt"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33811",
               "department": "Management",
               "instructor": "Steven M. Nissenfeld",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Mangmnt in a Global Environmnt"
            },
            {
               "code": "1020",
               "coreqs": "",
               "credits": 3,
               "crn": "33812",
               "department": "Management",
               "instructor": "Steven M. Nissenfeld",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Mangmnt in a Global Environmnt"
            },
            {
               "code": "2800H",
               "coreqs": "",
               "credits": 3,
               "crn": "35710",
               "department": "Management",
               "instructor": "Laizer Kornwasser",
               "prereqs": "",
               "section": "261",
               "time": [
                  {
                     "day": "M",
                     "end": "9:00pm",
                     "start": "6:30pm"
                  }
               ],
               "title": "Entrepreneurial Leadership"
            },
            {
               "code": "2941",
               "coreqs": "",
               "credits": 3,
               "crn": "33843",
               "department": "Management",
               "instructor": "Robert Tufts",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Sports Marketing Management"
            },
            {
               "code": "2945",
               "coreqs": "",
               "credits": 2,
               "crn": "35693",
               "department": "Management",
               "instructor": "Laizer Kornwasser",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "8:25pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Real Estate Management"
            },
            {
               "code": "3015",
               "coreqs": "",
               "credits": 3,
               "crn": "33864",
               "department": "Management",
               "instructor": "Andrew M. Geller",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Management & Leadership"
            },
            {
               "code": "3504",
               "coreqs": "",
               "credits": 3,
               "crn": "33842",
               "department": "Management",
               "instructor": "Jonathan M. Stern",
               "prereqs": "",
               "section": "ONL",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Systematic Inventive Thinking"
            },
            {
               "code": "3780",
               "coreqs": "",
               "credits": 3,
               "crn": "33818",
               "department": "Management",
               "instructor": "Robert Tufts",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Principles of Entrepreneurship"
            },
            {
               "code": "3788",
               "coreqs": "",
               "credits": 2,
               "crn": "35692",
               "department": "Management",
               "instructor": "TBA",
               "prereqs": "",
               "section": "461",
               "time": [
                  {
                     "day": "W",
                     "end": "8:25pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Managing the Family Business"
            },
            {
               "code": "4002",
               "coreqs": "",
               "credits": 2,
               "crn": "35683",
               "department": "Management",
               "instructor": "Richard M. Joel",
               "prereqs": "",
               "section": "441",
               "time": [
                  {
                     "day": "W",
                     "end": "6:10pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Leadership in Non-Profit World"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33835",
               "department": "Marketing",
               "instructor": "Frederick Palumbo",
               "prereqs": "",
               "section": "311",
               "time": [
                  {
                     "day": "TR",
                     "end": "2:45pm",
                     "start": "1:30pm"
                  }
               ],
               "title": "Mar 1001 Principles of Marketing"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "33813",
               "department": "Marketing",
               "instructor": "Frederick Palumbo",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Mar 1001 Principles of Marketing"
            },
            {
               "code": "1001",
               "coreqs": "",
               "credits": 3,
               "crn": "35684",
               "department": "Marketing",
               "instructor": "Frederick Palumbo",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Mar 1001 Principles of Marketing"
            },
            {
               "code": "2501",
               "coreqs": "",
               "credits": 3,
               "crn": "35685",
               "department": "Marketing",
               "instructor": "Tamar Avnet",
               "prereqs": "",
               "section": "331",
               "time": [
                  {
                     "day": "TR",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Buyer Behavior"
            },
            {
               "code": "2621",
               "coreqs": "",
               "credits": 3,
               "crn": "33814",
               "department": "Marketing",
               "instructor": "Maria Blekher",
               "prereqs": "",
               "section": "231",
               "time": [
                  {
                     "day": "MW",
                     "end": "4:15pm",
                     "start": "3:00pm"
                  }
               ],
               "title": "Applied Research"
            },
            {
               "code": "2941",
               "coreqs": "",
               "credits": 3,
               "crn": "33846",
               "department": "Marketing",
               "instructor": "Robert Tufts",
               "prereqs": "",
               "section": "241",
               "time": [
                  {
                     "day": "MW",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Sports Marketing Management"
            },
            {
               "code": "3318",
               "coreqs": "",
               "credits": 3,
               "crn": "33838",
               "department": "Marketing",
               "instructor": "Tamar Avnet",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Social Media Marketing"
            },
            {
               "code": "3320",
               "coreqs": "",
               "credits": 3,
               "crn": "35686",
               "department": "Marketing",
               "instructor": "Nurit Shaul",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Digital Media"
            },
            {
               "code": "3328",
               "coreqs": "",
               "credits": 3,
               "crn": "35885",
               "department": "Marketing",
               "instructor": "TBA",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "T",
                     "end": "9:15pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Managing Sales in Hi-Tech Co."
            },
            {
               "code": "3504",
               "coreqs": "",
               "credits": 3,
               "crn": "33841",
               "department": "Marketing",
               "instructor": "Jonathan M. Stern",
               "prereqs": "",
               "section": "ONL",
               "time": [
                  {
                     "day": " ",
                     "start": "TBA"
                  }
               ],
               "title": "Systematic Inventive Thinking"
            },
            {
               "code": "6124",
               "coreqs": "",
               "credits": 3,
               "crn": "33823",
               "department": "Tax",
               "instructor": "Leonard Fuld",
               "prereqs": "",
               "section": "341",
               "time": [
                  {
                     "day": "TR",
                     "end": "5:45pm",
                     "start": "4:30pm"
                  }
               ],
               "title": "Federal Income Taxation I"
            },
            {
               "code": "6124",
               "coreqs": "",
               "credits": 3,
               "crn": "33824",
               "department": "Tax",
               "instructor": "Leonard Fuld",
               "prereqs": "",
               "section": "361",
               "time": [
                  {
                     "day": "TR",
                     "end": "8:00pm",
                     "start": "6:45pm"
                  }
               ],
               "title": "Federal Income Taxation I"
            }
         ]
      ;
      symsMenClassesArray.forEach(function(element) {
         symsMenClasses.insert(element);
      });
   }
});

Accounts.onCreateUser((options, user) => {

  user.courses = [];

  // Don't forget to return the new user object at the end!
  return user;
});