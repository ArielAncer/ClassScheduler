Meteor.startup(function () {
  if (touroMenClasses.find().count() === 0) {
   var touroMenClassesArray = 
      [
         {
            "code": "EBAN 201",
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "1",
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
            "credits": "1",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "2",
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
            "credits": "2",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
      ]
   ;
    touroMenClassesArray.forEach(function(element) {
      touroMenClasses.insert(element);
    });
  }
  if (touroWomenClasses.find().count() === 0) {
    var touroWomenClassesArray = 
      [
         {
            "code": "HISN 220",
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "0",
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
            "credits": "3",
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
            "credits": "4",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "1",
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
            "credits": "1",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "2",
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
            "credits": "2",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "1",
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
            "credits": "1",
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
            "credits": "1",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "1",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
            "credits": "3",
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
      ]
    ;
    touroWomenClassesArray.forEach(function(element) {
      touroWomenClasses.insert(element);
    })
  }
  if (sternClasses.find().count() === 0) {
    var sternClassesArray = [
    {
        "time1start": "9:30am",
        "time1finish": "12:00pm",
        "crse": "2510H",
        "title": "Turnaround Business Strategy",
        "time2start": "",
        "time2finish": "",
        "day1": "F",
        "credits": 3,
        "prof": "Andrew M. Geller",
        "crn": "35596"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "3504",
        "title": "Systematic Inventive Thinking",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 3,
        "prof": "Jonathan M. Stern",
        "crn": "34440"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "3501",
        "title": "Israel Business Environment",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Maria Blekher",
        "crn": "35598"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1020",
        "title": "Mangmnt in a Global Environmnt",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Judith Calvo-Ryba",
        "crn": "34209"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "3605",
        "title": "Cross Cultural Int. Business",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Judith Calvo-Ryba",
        "crn": "35597"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "2370",
        "title": "Human Resources",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Steven M. Nissenfeld",
        "crn": "34314"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2941",
        "title": "Sports Marketing Management",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Robert Tufts",
        "crn": "34381"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "2110",
        "title": "Organizational Behavior",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Andrew M. Geller",
        "crn": "35595"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "3780",
        "title": "Principles of Entrepreneurship",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Robert Tufts",
        "crn": "34420"
    },
    {
        "time1start": "9:40am",
        "time1finish": "11:40am",
        "crse": "3214H",
        "title": "Research Seminar I",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 3,
        "prof": "Terry DiLorenzo",
        "crn": "34223"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2150",
        "title": "Cognitive Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Joshua H. Bacon",
        "crn": "34188"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "2100C",
        "title": "Experimental Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Joshua H. Bacon",
        "crn": "34181"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "1107",
        "title": "Developmental Psyc: Life Span",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Aharon Hersh Fried",
        "crn": "34403"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1010",
        "title": "Introductory Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "TBA",
        "crn": "34235"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "2414",
        "title": "Abnormal Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Terry DiLorenzo",
        "crn": "34189"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "4931",
        "title": "Problems in Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Joshua H. Bacon",
        "crn": "34521"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "3845",
        "title": "Psychology & Religion",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Aharon Hersh Fried",
        "crn": "34520"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "3804",
        "title": "Psychobiology",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Amanda Mitchell",
        "crn": "34315",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "2140",
        "title": "Learning",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Rachel Ebner",
        "crn": "34519",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "2430",
        "title": "Intro to Clinical Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "TBA",
        "crn": "35736"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "3105",
        "title": "Social Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Terry DiLorenzo",
        "crn": "34214"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "3800",
        "title": "Personality",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Marcel Isaac Perlman",
        "crn": "34190"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "1010H",
        "title": "Introductory Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Robin Freyberg",
        "crn": "34374"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1010",
        "title": "Introductory Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": " Staff",
        "crn": "34339"
    },
    {
        "time1start": "5:20pm",
        "time1finish": "7:10pm",
        "crse": "2100Y",
        "title": "Experimental Psychology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 0,
        "prof": " Staff",
        "crn": "34182"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1100",
        "title": "Theories of Human Development",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Aharon Hersh Fried",
        "crn": "34330"
    },
    {
        "time1start": "3:30pm",
        "time1finish": "5:20pm",
        "crse": "2100Y",
        "title": "Experimental Psychology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "One Staff",
        "crn": "34183"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "3610",
        "title": "Public Health",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Terry DiLorenzo",
        "crn": "34378"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1131",
        "title": "Statistics for Business",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Vladimir Kovtun",
        "crn": "34380"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "2030",
        "title": "Bus. Analytics & Programming",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Yitzchak S. Rosenthal",
        "crn": "34439"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "2460",
        "title": "Data Management-Bus Analytics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Yitzchak S. Rosenthal",
        "crn": "35641"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1001",
        "title": "Business Algebra",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Avi Naiman",
        "crn": "34438"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1456",
        "title": "Quantitative Methods Managment",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Vladimir Kovtun",
        "crn": "34331"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1020",
        "title": "Intro to Information Systems",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Kevin Brabazon",
        "crn": "35594"
    },
    {
        "time1start": "4:45pm",
        "time1finish": "6:00pm",
        "crse": "3112",
        "title": "Phonetics",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ashley Danielle Small",
        "crn": "34205"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:25pm",
        "crse": "3940",
        "title": "Clinical Observation",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 2,
        "prof": "Susan Wilson",
        "crn": "34369"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "3012",
        "title": "Hearing Mechanism",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Joseph Danto",
        "crn": "34203"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "3034",
        "title": "Audiology II",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Joseph Danto",
        "crn": "34204"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "3001",
        "title": "Development of Language",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Neva Goldstein",
        "crn": "34202",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "3024",
        "title": "Communication Disorders Adults",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Neva Goldstein",
        "crn": "34255",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "1:34pm",
        "time1finish": "3:14pm",
        "crse": "1647",
        "title": "Phil of R.Yehuda HaLevi",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 2,
        "prof": "Gamliel Shmalo",
        "crn": "35529"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "1204",
        "title": "Jewish Ethics",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "David C. Shatz",
        "crn": "34200",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:55pm",
        "crse": "4932",
        "title": "Tps:Philo of Lubavitcher Rebbe",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 2,
        "prof": "Yosef Zvi Bronstein",
        "crn": "35530"
    },
    {
        "time1start": "11:50am",
        "time1finish": "1:30pm",
        "crse": "1814",
        "title": "Mod Jewish Thought Rav Kook II",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 2,
        "prof": "Gamliel Shmalo",
        "crn": "35528"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1001",
        "title": "Introduction to Sociology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Roberta Farber",
        "crn": "34184"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1236",
        "title": "Epidemiology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Daniel Kimmel",
        "crn": "35512"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1158",
        "title": "Criminology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Sidney Langer",
        "crn": "34186"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1001",
        "title": "Introduction to Sociology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Sidney Langer",
        "crn": "34185"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1233",
        "title": "Intro To Public Health",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Terry DiLorenzo",
        "crn": "34379"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1205",
        "title": "Intro to Anthropology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Jill C. Katz",
        "crn": "35510"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "4925",
        "title": "Topics: Social Psychology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Terry DiLorenzo",
        "crn": "34333"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1504",
        "title": "Methods of Soc Research",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Roberta Farber",
        "crn": "35511"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "3462",
        "title": "Chamber Ensemble",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 1,
        "prof": "Marcia Young",
        "crn": "35556"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1111",
        "title": "Sense of Music",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Marcia Young",
        "crn": "34293"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "2111L",
        "title": "Elem Ear Train & Key",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 1,
        "prof": "Stanley Dorn",
        "crn": "34222"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "2111",
        "title": "Diatonic Harmony I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "David Glaser",
        "crn": "34276"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1350",
        "title": "Baroque & Classical Music",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "David Glaser",
        "crn": "35552"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:30pm",
        "crse": "3303",
        "title": "Choral Ensemble",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 1,
        "prof": "Marcia Young",
        "crn": "35553",
        "time2finish": "5:50pm"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "1111",
        "title": "Sense of Music",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Stanley Dorn",
        "crn": "34229",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1111",
        "title": "Sense of Music",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "David Glaser",
        "crn": "34426"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "4112",
        "title": "Applied Music",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 1,
        "prof": "Marcia Young",
        "crn": "35557"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "1201",
        "title": "Intro to Comparative Politics",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "TBA",
        "crn": "34240",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1501",
        "title": "Fundamentals of Pol Sci",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Joseph Luders",
        "crn": "34249"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "2100",
        "title": "The American Presidency",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Joseph Luders",
        "crn": "35613"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "8:30pm",
        "crse": "2497H",
        "title": "Topics: Bible & Amer Democracy",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 3,
        "prof": "Matthew Holbreich",
        "crn": "35565"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1401",
        "title": "Great Political Thinkers",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Jamie Aroosi",
        "crn": "34396"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "8:30pm",
        "crse": "2197",
        "title": "Tps:Essentials of US Legal Sys",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 3,
        "prof": "Joel B. Strauss",
        "crn": "34395"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "2394",
        "title": "Topics: UN & International Org",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Joanna Phua",
        "crn": "35563"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "2299",
        "title": "Topics: Culture & Politics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Alper Yildiz",
        "crn": "35562"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2397",
        "title": "Topics: International Conflict",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Joanna Phua",
        "crn": "35564"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "2461",
        "title": "Probability Theory",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Michael Dalezman",
        "crn": "35514"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "1412",
        "title": "Calculus I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 4,
        "prof": "Michael Dalezman",
        "crn": "34242"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1510",
        "title": "Multivariable Calculus",
        "time2start": "10:30am",
        "day2": "R",
        "day1": "MW",
        "credits": 4,
        "prof": "Marian Gidea",
        "crn": "34368",
        "time2finish": "11:20am"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1504",
        "title": "Discrete Structures",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Michael Dalezman",
        "crn": "34306"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "12:50pm",
        "crse": "1413",
        "title": "Calculus II",
        "time2start": "3:15pm",
        "day2": "TR",
        "day1": "TR",
        "credits": 4,
        "prof": "TBA",
        "crn": "34177",
        "time2finish": "4:30pm"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "2:35pm",
        "crse": "1412T",
        "title": "Calculus I Recitation",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Wai Ting Lam",
        "crn": "34400"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1523",
        "title": "Intro to Analysis",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Morton Lowengrub",
        "crn": "34497"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1010",
        "title": "Excursions in Mathematics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Margarita R. Levin",
        "crn": "34281"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "3230C",
        "title": "Immunology",
        "time2start": "11:55am",
        "day2": "MW",
        "day1": "MW",
        "credits": 4,
        "prof": "Victoria E Ruiz",
        "crn": "35499",
        "time2finish": "1:10pm"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "7:40pm",
        "crse": "4936",
        "title": "Topics: Oncology",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 1,
        "prof": "TBA",
        "crn": "35498"
    },
    {
        "time1start": "8:40am",
        "time1finish": "10:20am",
        "crse": "1005Y",
        "title": "Human Biology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 0,
        "prof": "Richard Bruce Weiss",
        "crn": "34296"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "4023C",
        "title": "Microbiology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Alyssa Gabrielle Schuck",
        "crn": "34344"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:50pm",
        "crse": "1005Y",
        "title": "Human Biology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Bill R Bassman",
        "crn": "34298"
    },
    {
        "time1start": "12:30pm",
        "time1finish": "3:00pm",
        "crse": "1011Y",
        "title": "Bio Principles Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Bill R Bassman",
        "crn": "34350"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "4:15pm",
        "crse": "3207Y",
        "title": "Cell Biology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 0,
        "prof": "Anna Alayev",
        "crn": "34319"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "4023Y",
        "title": "Microbiology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 0,
        "prof": "Alyssa Gabrielle Schuck",
        "crn": "34321"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:00pm",
        "crse": "3730H",
        "title": "Reproductive Biology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 2,
        "prof": "Margarita Vigodner",
        "crn": "35500"
    },
    {
        "time1start": "9:30am",
        "time1finish": "12:00pm",
        "crse": "3207Y",
        "title": "Cell Biology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "F",
        "credits": 0,
        "prof": "Margarita Vigodner",
        "crn": "34490"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1011H",
        "title": "Biology Principles",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 4,
        "prof": "Marina Kaufman Holz",
        "crn": "34345"
    },
    {
        "time1start": "6:20pm",
        "time1finish": "8:00pm",
        "crse": "4930",
        "title": "Topics: Kinesiology",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 2,
        "prof": "James Nussbaum",
        "crn": "35497"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "3728Y",
        "title": "Human Physiology Lab",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 0,
        "prof": "Levy Sztark Amar",
        "crn": "34254",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1011C",
        "title": "Biology Principles",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Brenda Loewy",
        "crn": "34343"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1005C",
        "title": "Human Biology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Richard Bruce Weiss",
        "crn": "34295"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "3207C",
        "title": "Cell Biology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 4,
        "prof": "Marina Kaufman Holz",
        "crn": "35496"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "3830R",
        "title": "Neurobiology",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Amanda Mitchell",
        "crn": "34491",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "4:15pm",
        "crse": "3207Y",
        "title": "Cell Biology Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Benjamin Lucas",
        "crn": "34318"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "3513C",
        "title": "Genetics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Harvey J. Babich",
        "crn": "34173"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:55pm",
        "crse": "2730Y",
        "title": "Human Anatomy Laboratory",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 0,
        "prof": "Jeffrey R. Mollin",
        "crn": "34170"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "3513Y",
        "title": "Genetics Laboratory",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 0,
        "prof": "Harvey J. Babich",
        "crn": "34225"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "3207C",
        "title": "Cell Biology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 4,
        "prof": "Margarita Vigodner",
        "crn": "34308"
    },
    {
        "time1start": "3:30pm",
        "time1finish": "6:00pm",
        "crse": "3221",
        "title": "Nutrition",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 3,
        "prof": "Raizy Weinreb",
        "crn": "34299"
    },
    {
        "time1start": "11:55am",
        "time1finish": "12:45pm",
        "crse": "3241",
        "title": "Pharmacology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 2,
        "prof": "Richard Bruce Weiss",
        "crn": "34272"
    },
    {
        "time1start": "9:30am",
        "time1finish": "12:00pm",
        "crse": "1011Y",
        "title": "Bio Principles Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "F",
        "credits": 0,
        "prof": "Mana Mirjany",
        "crn": "34348"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "4:15pm",
        "crse": "1011Y",
        "title": "Bio Principles Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 0,
        "prof": "TBA",
        "crn": "34351"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1376",
        "title": "Biochemistry Lecture",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Daniel Lim",
        "crn": "35495"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2730C",
        "title": "Human Anatomy",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 4,
        "prof": "Monica Smiddy",
        "crn": "34168"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "3728C",
        "title": "Human Physiology",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Levy Sztark Amar",
        "crn": "34215"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "3728Y",
        "title": "Human Physiology Lab",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 0,
        "prof": "Benjamin Lucas",
        "crn": "34244",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1101",
        "title": "Elementary Spanish",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Marcelo Broitman",
        "crn": "35513"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "1010",
        "title": "Speech Communication",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Robert Russell",
        "crn": "34436"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "3851",
        "title": "Financial Statement Analysis",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Sidney J. Mehl",
        "crn": "34284"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1408",
        "title": "Corporate Finance",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Gabriela Coiculescu",
        "crn": "35592"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1001",
        "title": "Principles of Finance",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Gabriela Coiculescu",
        "crn": "34245"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:40pm",
        "crse": "2505",
        "title": "Investment Analysis",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Joshua Krausz",
        "crn": "34176"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "4:15pm",
        "crse": "3530",
        "title": "Fashion Accessories",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 3,
        "prof": "TBA",
        "crn": "35642"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1001",
        "title": "Principles of Marketing",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Jesse Itzkowitz",
        "crn": "34332"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "3720",
        "title": "Marketing Capstone",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Jesse Itzkowitz",
        "crn": "34428"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "3501",
        "title": "Israel Business Environment",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Maria Blekher",
        "crn": "35599"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2941",
        "title": "Sports Marketing Management",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Robert Tufts",
        "crn": "34384"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "3504",
        "title": "Systematic Inventive Thinking",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 3,
        "prof": "Jonathan M. Stern",
        "crn": "34441"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "8:30pm",
        "crse": "3323",
        "title": "Creative Advertising",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 3,
        "prof": "Erik Mintz",
        "crn": "34431"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "7:10pm",
        "crse": "3500",
        "title": "Fashion Fundamentals",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 3,
        "prof": "Michael Londrigan",
        "crn": "34385"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "8:30pm",
        "crse": "3320",
        "title": "Digital Media",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 3,
        "prof": "Nurit Shaul",
        "crn": "34547"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "3502",
        "title": "Creative & Innovative Prod Dev",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Johanna Goldstein",
        "crn": "34429"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "3402",
        "title": "Philosophy of Law",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "David C. Shatz",
        "crn": "34377",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "2170",
        "title": "Ancient & Medieval Philosophy",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "David C. Shatz",
        "crn": "35531"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "3200",
        "title": "Classical Political Philosophy",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Jamie Aroosi",
        "crn": "34376"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "2532",
        "title": "Philosophy of Art",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Herb Leventer",
        "crn": "35533",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "4932",
        "title": "Tps:Wanderers,Exiles&Merchants",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ronnie Perelis",
        "crn": "35502"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "1486",
        "title": "Holocaust and Rescue",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Mordecai Paldiel",
        "crn": "34260",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1807",
        "title": "Topics: History of Jerusalem",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Jill C. Katz",
        "crn": "34445"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:55pm",
        "crse": "1329H",
        "title": "History of Halakhah",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 2,
        "prof": "Ephraim Kanarfogel",
        "crn": "35501"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "1415",
        "title": "History of Zionism",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Mordecai Paldiel",
        "crn": "34278",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "11:43am",
        "time1finish": "1:23pm",
        "crse": "1577",
        "title": "Jewish Religion in America",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 2,
        "prof": "Jeffrey S. Gurock",
        "crn": "34458"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1021",
        "title": "Intro to Statistics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "George T. H. Fuller",
        "crn": "34313"
    },
    {
        "time1start": "5:15pm",
        "time1finish": "6:30pm",
        "crse": "1021",
        "title": "Intro to Statistics",
        "time2start": "5:15pm",
        "day2": "T",
        "day1": "M",
        "credits": 3,
        "prof": "Jeffrey Glenn Portnoy",
        "crn": "34334",
        "time2finish": "6:30pm"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1021",
        "title": "Intro to Statistics",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Robin Freyberg",
        "crn": "34442"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "1300C",
        "title": "Intro to Computer Science",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 4,
        "prof": "Alan J. Broder",
        "crn": "34326",
        "time2finish": "5:50pm"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "2545",
        "title": "Algorithms",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "TBA",
        "crn": "35186"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "2314C",
        "title": "Applied Linux Prog & Scripting",
        "time2start": "1:25pm",
        "day2": "MW",
        "day1": "MW",
        "credits": 4,
        "prof": "Alan J. Broder",
        "crn": "34365",
        "time2finish": "2:15pm"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "2115C",
        "title": "Computer Systems",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 4,
        "prof": "Thomas M. Schmidt",
        "crn": "34432",
        "time2finish": "5:50pm"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1504",
        "title": "Discrete Structures",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Michael Dalezman",
        "crn": "34364"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1300C",
        "title": "Intro to Computer Science",
        "time2start": "12:00pm",
        "day2": "TR",
        "day1": "TR",
        "credits": 4,
        "prof": "TBA",
        "crn": "36002",
        "time2finish": "12:50pm"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "3780",
        "title": "Web Development",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Van Kelly",
        "crn": "35187"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1854",
        "title": "Rab Lit:Hashkafa of Vilna Gaon",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Aaron Cohen",
        "crn": "34425"
    },
    {
        "time1start": "1:20pm",
        "time1finish": "3:00pm",
        "crse": "1843",
        "title": "Intermediate Talmud I",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Moshe Y. Kahn",
        "crn": "34174"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1453",
        "title": "Shabbat: Survey",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 1,
        "prof": "Saul J. Berman",
        "crn": "35519"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1450",
        "title": "Marriage in Halakhah I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Nechama Esther Price",
        "crn": "34280"
    },
    {
        "time1start": "1:20pm",
        "time1finish": "3:00pm",
        "crse": "1436",
        "title": "Kashrut",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 4,
        "prof": "Daniel E. Wolff",
        "crn": "35517"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "6:20pm",
        "crse": "1443A",
        "title": "Jewish Laws & Cust: Family Law",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 2,
        "prof": "Meir Fulda",
        "crn": "34192"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "1449",
        "title": "Laws & Customs:Marriage",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Shlomo Hochberg",
        "crn": "34187",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1350",
        "title": "Introduction to Jewish Beliefs",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Lawrence Moshiach Hajioff",
        "crn": "34290"
    },
    {
        "time1start": "6:20pm",
        "time1finish": "8:00pm",
        "crse": "1852",
        "title": "Selected Rabbinic Literature",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 2,
        "prof": "Meir Goldwicht",
        "crn": "35525"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1406",
        "title": "Basic Jewish Concepts",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Lawrence Moshiach Hajioff",
        "crn": "35532"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1841",
        "title": "Intro to Talmud I",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "David A. Pahmer",
        "crn": "34238"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:50pm",
        "crse": "1486H",
        "title": "Daily Life: Laws of Blessings",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 2,
        "prof": "Moshe Y. Kahn",
        "crn": "35516"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1201",
        "title": "Jewish Liturgy-Hilchot Tefilla",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "David A. Pahmer",
        "crn": "34282"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1488",
        "title": "Daily Life: Birkat Hamazon",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 1,
        "prof": "Kenneth Auman",
        "crn": "35522"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "1574",
        "title": "The Individual in Society",
        "time2start": "1:25pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Saul J. Berman",
        "crn": "35521",
        "time2finish": "2:40pm"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1443",
        "title": "Jewish Laws & Cust: Family Law",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Nechama Esther Price",
        "crn": "34231"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "1457",
        "title": "The Sabbath",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Daniel E. Wolff",
        "crn": "35518"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1508",
        "title": "Topics In Jewish Law",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 1,
        "prof": "Gideon I. Shloush",
        "crn": "35520"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1455",
        "title": "Shabbat Survey",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Aaron Cohen",
        "crn": "35523"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "1403",
        "title": "Basic Jewish Concepts",
        "time2start": "1:25pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "David A. Pahmer",
        "crn": "34406",
        "time2finish": "2:40pm"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1845H",
        "title": "Advanced Talmud",
        "time2start": "8:40am",
        "day2": "TR",
        "day1": "MW",
        "credits": 5,
        "prof": "Moshe Y. Kahn",
        "crn": "34230",
        "time2finish": "10:20am"
    },
    {
        "time1start": "1:30pm",
        "time1finish": "3:10pm",
        "crse": "1203",
        "title": "Liturgy: Musaf of Shabbat",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 2,
        "prof": "Elchanan A. Adler",
        "crn": "35515"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1512",
        "title": "Tps: Development of Jewish Law",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Daniel E. Wolff",
        "crn": "35526"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1001",
        "title": "Intro to Judaism",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Lawrence Moshiach Hajioff",
        "crn": "34224"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:40pm",
        "crse": "1603",
        "title": "Modern Jewish Problems",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 2,
        "prof": "Jacob J. Schacter",
        "crn": "35524"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1591H",
        "title": "Jewish Civil Law",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Kenneth Auman",
        "crn": "35534"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1440",
        "title": "Jewish Laws & Cust: Family Law",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Mindy F. Eisenman",
        "crn": "34252"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1582",
        "title": "Medical Ethics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Saul J. Berman",
        "crn": "34292"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1465",
        "title": "The Festivals I: Survey",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Aaron Cohen",
        "crn": "34285"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "3610",
        "title": "Public Health",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Terry DiLorenzo",
        "crn": "35708"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1236",
        "title": "Epidemiology",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Daniel Kimmel",
        "crn": "35704"
    },
    {
        "time1start": "3:30pm",
        "time1finish": "6:00pm",
        "crse": "3221",
        "title": "Nutrition",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 3,
        "prof": "Raizy Weinreb",
        "crn": "35709"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1303",
        "title": "Book of Exodus I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Mindy F. Eisenman",
        "crn": "34246"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1117",
        "title": "Weekly Portion",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Deena S. Rabinovich",
        "crn": "35543"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1160",
        "title": "Women in Bible & Rabbinic Lit",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Smadar Rosensweig",
        "crn": "34413"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1082",
        "title": "Intro to Exegesis II",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Nechama Esther Price",
        "crn": "35541"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1411",
        "title": "Topics in Leviticus",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Moriah Rachel Rosensweig",
        "crn": "35546"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1171",
        "title": "Personal Devlop in the Bible I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Shoshana Schechter",
        "crn": "34234"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1512",
        "title": "Topics in Numbers",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Gideon I. Shloush",
        "crn": "35547"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "2156",
        "title": "Samuel I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Smadar Rosensweig",
        "crn": "34268"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1088H",
        "title": "Biblical Exegetes II",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Mordechai Z. Cohen, Sara Enna Twersky ",
        "crn": "34470"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "2121",
        "title": "Judges",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ian Shaffer",
        "crn": "35549"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1085",
        "title": "Methods of Peshat: Biblical Stylistics, building blocks of perushim",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Naomi Cohen Grunhaus",
        "crn": "35540"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1083H",
        "title": "Topics in Exegesis: Sforno",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Michelle J. Levine",
        "crn": "35539"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2152",
        "title": "Samuel I - Part I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Elozor Preil",
        "crn": "34251"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1086",
        "title": "Tps in Exegesis: N. Leibowitz",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Smadar Rosensweig",
        "crn": "35542"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1204",
        "title": "Book of Genesis",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Shoshana Schechter",
        "crn": "35544"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "4002",
        "title": "Biblical Narrative",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Ronit Gross",
        "crn": "34416"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "2116",
        "title": "Book of Joshua",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Ronit Gross",
        "crn": "34422",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "3208",
        "title": "Psalms II",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Gideon I. Shloush",
        "crn": "35555"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1305",
        "title": "Book of Exodus I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Elozor Preil",
        "crn": "34213"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "2506",
        "title": "Isaiah: Geulah and the Messianic Era. Use to fulfil JPHIL requirement.",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Naomi Cohen Grunhaus",
        "crn": "35550"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "2653",
        "title": "Later Prophets: Yonah",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Ronit Gross",
        "crn": "34485"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1407",
        "title": "Book of Leviticus",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Deena S. Rabinovich",
        "crn": "34476"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:15pm",
        "crse": "1609",
        "title": "Book of Deuteronomy",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 2,
        "prof": "Shoshana Schechter",
        "crn": "35548"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "3807",
        "title": "Daniel",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Michelle J. Levine",
        "crn": "35560",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "2149",
        "title": "Samuel I, Part II",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ian Shaffer",
        "crn": "34481"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "2555",
        "title": "Jeremiah. Confronting the false prophets. U.INT. ",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Naomi Cohen Grunhaus",
        "crn": "35551"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "3710",
        "title": "Esther",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Moriah Rachel Rosensweig",
        "crn": "35559"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "3257",
        "title": "Proverbs",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Michelle J. Levine",
        "crn": "35558"
    },
    {
        "time1start": "4:30pm",
        "time1finish": "6:10pm",
        "crse": "1214",
        "title": "Topics in Genesis",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 2,
        "prof": "Moshe M. Tessone",
        "crn": "35545"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1012",
        "title": "Business Communication",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Robert Russell",
        "crn": "34437"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "4741",
        "title": "Business Internship",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 0,
        "prof": "TBA",
        "crn": "34412"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1050",
        "title": "Science:Fundmntl & Application",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Lora Danley",
        "crn": "34367"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1221",
        "title": "Money and Banking",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "James Kahn",
        "crn": "35508"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1010",
        "title": "Principles of Economics",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ran Shao",
        "crn": "34494"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1201",
        "title": "Intermediate Macroeconomics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "James Kahn",
        "crn": "34241"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "1421",
        "title": "Econometrics",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": " Staff",
        "crn": "34366"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1177",
        "title": "Game Theory & Behavioral Econ",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Tadashi Hashimoto",
        "crn": "34410"
    },
    {
        "time1start": "8:00am",
        "time1finish": "11:00am",
        "crse": "3218",
        "title": "Jewish Educ Field Work/Seminar",
        "time2start": "9:00am",
        "day2": "R",
        "day1": "T",
        "credits": 1,
        "prof": "Deena S. Rabinovich",
        "crn": "34316",
        "time2finish": "10:15am"
    },
    {
        "time1start": "8:00am",
        "time1finish": "11:00am",
        "crse": "3216",
        "title": "Jewish Education Field Work",
        "time2start": "10:30am",
        "day2": "R",
        "day1": "T",
        "credits": 1,
        "prof": "Deena S. Rabinovich",
        "crn": "34408",
        "time2finish": "11:45am"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "4001",
        "title": "Sr Exit Project Creative Writ",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 1,
        "prof": "Ann Peters",
        "crn": "35182"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "2007",
        "title": "Survey of American Lit II",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ann Peters",
        "crn": "35176"
    },
    {
        "time1start": "5:30pm",
        "time1finish": "8:00pm",
        "crse": "1503",
        "title": "Columns & Editorials",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 3,
        "prof": "Avital Rachel Chizhik",
        "crn": "35173"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1100",
        "title": "Composition and Rhetoric",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ann Peters",
        "crn": "34171"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2921",
        "title": "Topics: Shakespeare",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Gina Grimaldi",
        "crn": "35178"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1802",
        "title": "Writing Creative Nonfiction",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Joy Ladin",
        "crn": "35174"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "2880H",
        "title": "Parents and Children",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Matthew Ward Miller",
        "crn": "35536",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "2000",
        "title": "Ways of Reading",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Matthew Ward Miller",
        "crn": "34279",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "3921",
        "title": "Tps: Harlem Renaissance",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Ann Peters",
        "crn": "35537"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "2920",
        "title": "Tps:The Russian Short Novel",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Manfred Weidhorn",
        "crn": "34529"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1100",
        "title": "Composition and Rhetoric",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Lauren Lee Fusilier",
        "crn": "34277"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1500",
        "title": "Media Studies",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Lynda Johnson",
        "crn": "34322"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "5:45pm",
        "crse": "1725",
        "title": "Topics: Digital Communication",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 3,
        "prof": "Ted Birkhahn",
        "crn": "34523"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "1100",
        "title": "Composition and Rhetoric",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Maria Stracke",
        "crn": "34247"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1100",
        "title": "Composition and Rhetoric",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Michael Shelichach",
        "crn": "34228"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1200H",
        "title": "Freshman Honors Seminar",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Joy Ladin",
        "crn": "34309"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "2580",
        "title": "American Jewish Literature",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Cynthia Wachtell",
        "crn": "35177"
    },
    {
        "time1start": "5:00pm",
        "time1finish": "7:30pm",
        "crse": "1650",
        "title": "Public Relations",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 3,
        "prof": "Deborah Schlueter",
        "crn": "34294"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1100",
        "title": "Composition and Rhetoric",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Jen DeGregorio",
        "crn": "34172"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1200H",
        "title": "Freshman Honors Seminar",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Seamus O'Malley",
        "crn": "34310"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1100",
        "title": "Composition and Rhetoric",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Gina Grimaldi",
        "crn": "34219"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "2004",
        "title": "Survey of British Lit II",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Linda M. Shires",
        "crn": "34402"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "2960",
        "title": "Representations of Holocaust",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Linda M. Shires",
        "crn": "35179"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "2971",
        "title": "Literature and Social Change",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Seamus O'Malley",
        "crn": "35538"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "8:30pm",
        "crse": "1600",
        "title": "Advertising Copywriting",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 3,
        "prof": "Erik Mintz",
        "crn": "34556"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1812",
        "title": "Screenwriting",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Leslie Russell",
        "crn": "35175"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1200H",
        "title": "Freshman Honors Seminar",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "M. Miller",
        "crn": "35172"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "2750",
        "title": "The Graphic Novel",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Seamus O'Malley",
        "crn": "35535",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "4002",
        "title": "Sr Exit Project Media Studies",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 1,
        "prof": "Deborah Schlueter",
        "crn": "34337"
    },
    {
        "time1start": "8:00pm",
        "time1finish": "10:00pm",
        "crse": "1424",
        "title": "Team Basketball",
        "time2start": "",
        "time2finish": "",
        "day1": "MTWRU",
        "credits": 1,
        "prof": "Michael Alon",
        "crn": "34179"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "2316",
        "title": "Team Cross Country",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 1,
        "prof": "Stephen D. Begley",
        "crn": "34259"
    },
    {
        "time1start": "8:00pm",
        "time1finish": "10:00pm",
        "crse": "1324A",
        "title": "Team Volleyball",
        "time2start": "",
        "time2finish": "",
        "day1": "MTWRU",
        "credits": 1,
        "prof": "TBA",
        "crn": "34250"
    },
    {
        "time1start": "8:00pm",
        "time1finish": "10:00pm",
        "crse": "1346",
        "title": "Team Tennis",
        "time2start": "",
        "time2finish": "",
        "day1": "MTWRU",
        "credits": 1,
        "prof": "Naomi Kaszovitz",
        "crn": "34178"
    },
    {
        "time1start": "7:00pm",
        "time1finish": "9:00pm",
        "crse": "2466",
        "title": "Team Fencing",
        "time2start": "11:00am",
        "day2": "F",
        "day1": "MTW",
        "credits": 1,
        "prof": "Judith Cummins",
        "crn": "34180",
        "time2finish": "1:00pm"
    },
    {
        "time1start": "8:00pm",
        "time1finish": "10:00pm",
        "crse": "1511",
        "title": "Team Soccer",
        "time2start": "",
        "time2finish": "",
        "day1": "MTWRU",
        "credits": 1,
        "prof": "Gabe Haber",
        "crn": "34237"
    },
    {
        "time1start": "8:00pm",
        "time1finish": "10:00pm",
        "crse": "1610",
        "title": "Team Softball",
        "time2start": "",
        "time2finish": "",
        "day1": "MWU",
        "credits": 0.5,
        "prof": "Steven Schucker",
        "crn": "34383"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:20am",
        "crse": "1045T",
        "title": "General Chem Recitation",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Donald Estes",
        "crn": "34356"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1415H",
        "title": "Physical Chemistry I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Chaya Rapp",
        "crn": "34363"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1376",
        "title": "Biochemistry Lecture",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Daniel Lim",
        "crn": "35527"
    },
    {
        "time1start": "1:30pm",
        "time1finish": "4:30pm",
        "crse": "1045Y",
        "title": "General Chemistry Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Cecily Dobin",
        "crn": "34197"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:30pm",
        "crse": "1045T",
        "title": "General Chem Recitation",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "TBA",
        "crn": "34357"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "2:35pm",
        "crse": "1213Y",
        "title": "Organic Chemistry Lab",
        "time2start": "2:45pm",
        "day2": "T",
        "day1": "T",
        "credits": 0,
        "prof": "Donald Estes",
        "crn": "34361",
        "time2finish": "5:45pm"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1045H",
        "title": "General Chemistry",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 4,
        "prof": "Chaya Rapp",
        "crn": "34354"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1010C",
        "title": "Essentials of General Chem",
        "time2start": "11:50am",
        "day2": "T",
        "day1": "TR",
        "credits": 4,
        "prof": "Lora Danley",
        "crn": "34256",
        "time2finish": "1:30pm"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1213C",
        "title": "Organic Chemistry",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 5,
        "prof": "Evan Mintzer",
        "crn": "34199"
    },
    {
        "time1start": "1:30pm",
        "time1finish": "4:30pm",
        "crse": "1045Y",
        "title": "General Chemistry Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 0,
        "prof": "Donald Estes",
        "crn": "34226"
    },
    {
        "time1start": "9:00am",
        "time1finish": "12:00pm",
        "crse": "1045Y",
        "title": "General Chemistry Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "F",
        "credits": 0,
        "prof": "Rosalyn Strauss",
        "crn": "34257"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "7:25pm",
        "crse": "1041Y",
        "title": "General Physics Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Mark Edelman",
        "crn": "34394"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "6:50pm",
        "crse": "1031T",
        "title": "Introductory Physics Rec",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 0,
        "prof": "Lea F. Santos",
        "crn": "34560"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1031C",
        "title": "Introductory Physics",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 4,
        "prof": "Lea F. Santos",
        "crn": "34386"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "7:25pm",
        "crse": "1031Y",
        "title": "Introductory Physics Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "Mark Edelman",
        "crn": "34390"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:00pm",
        "crse": "4935",
        "title": "Topics:Physics Colloquium",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 1,
        "prof": "Mark Edelman",
        "crn": "34270"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1041C",
        "title": "General Physics I",
        "time2start": "9:25am",
        "day2": "W",
        "day1": "MW",
        "credits": 4,
        "prof": "Anatoly I. Frenkel",
        "crn": "34201",
        "time2finish": "10:15am"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "2111",
        "title": "Business Law I",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Robert Jay Greenberg",
        "crn": "34175"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "2021",
        "title": "Ethical & Legal Env Business",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Robert Jay Greenberg",
        "crn": "34283",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "6:00pm",
        "time1finish": "7:15pm",
        "crse": "1800H",
        "title": "Business as Human Enterprise",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 3,
        "prof": "Moses L. Pava",
        "crn": "34541"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "2207",
        "title": "New Deal & Great Depression",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Hadassa Kosak",
        "crn": "35566"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "2141",
        "title": "Holocaust",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Joshua D. Zimmerman",
        "crn": "35193"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "2913",
        "title": "Immigrant Nations: US & Israel",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Hadassa Kosak",
        "crn": "35194"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "2128",
        "title": "Democratic Political Culture",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Jeffrey Freedman",
        "crn": "35567"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2165",
        "title": "Europe Since 1945",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Mario Kessler",
        "crn": "35568"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1401",
        "title": "History of East Asia",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "TBA",
        "crn": "35196"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "2520",
        "title": "Atlantic World",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Douglas Burgess",
        "crn": "35190"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2201",
        "title": "Principles of Design",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Mary Therese Creede",
        "crn": "34216"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "3009",
        "title": "Intro Computer Design",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Alexander Rysdon-Moulitsas",
        "crn": "34286"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1050",
        "title": "Introduction to Art",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Miriam Weinberg",
        "crn": "34549"
    },
    {
        "time1start": "2:45pm",
        "time1finish": "3:30pm",
        "crse": "4974",
        "title": "Pre-Senior Project",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 0,
        "prof": "Mary Therese Creede",
        "crn": "34613"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1050H",
        "title": "Introduction to Art",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Marnin Young",
        "crn": "34548"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "1750",
        "title": "Philosophy of Art",
        "time2start": "5:00pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Herb Leventer",
        "crn": "35505",
        "time2finish": "6:15pm"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "2301",
        "title": "Principles of Drawing",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "John Jerard",
        "crn": "34167"
    },
    {
        "time1start": "10:30am",
        "time1finish": "1:00pm",
        "crse": "3020",
        "title": "Introduction to Video",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 3,
        "prof": "TBA",
        "crn": "34447"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "4:30pm",
        "crse": "2301Y",
        "title": "Principles of Drawing Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 0,
        "prof": "John Jerard",
        "crn": "34503"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1350",
        "title": "Baroque Art",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Jacob Wisse",
        "crn": "35504"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "2511",
        "title": "Beginning Painting",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Mary Therese Creede",
        "crn": "34217"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "1432",
        "title": "Late-Nineteenth Century Art",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Marnin Young",
        "crn": "35503"
    },
    {
        "time1start": "TBA",
        "time1finish": "ERROR",
        "crse": "4975",
        "title": "Senior Project",
        "time2start": "",
        "time2finish": "",
        "day1": "\u00a0",
        "credits": 1,
        "prof": "Mary Therese Creede",
        "crn": "34511"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "1052",
        "title": "History of Art II",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Marnin Young",
        "crn": "34194"
    },
    {
        "time1start": "1:25pm",
        "time1finish": "2:40pm",
        "crse": "1051",
        "title": "History of Art I",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Melanie Hanan",
        "crn": "34195"
    },
    {
        "time1start": "3:15pm",
        "time1finish": "5:45pm",
        "crse": "1948",
        "title": "The Image of Jerusalem",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 3,
        "prof": "TBA",
        "crn": "35506"
    },
    {
        "time1start": "4:40pm",
        "time1finish": "5:55pm",
        "crse": "2831",
        "title": "Creativity",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "John Jerard",
        "crn": "35493"
    },
    {
        "time1start": "5:00pm",
        "time1finish": "7:30pm",
        "crse": "3967",
        "title": "Topics: Book Arts",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 3,
        "prof": "Barbara L Suhr",
        "crn": "34510"
    },
    {
        "time1start": "9:30am",
        "time1finish": "12:00pm",
        "crse": "1637H",
        "title": "NYC Architecture &Urban Design",
        "time2start": "",
        "time2finish": "",
        "day1": "F",
        "credits": 3,
        "prof": "John Kriskiewicz",
        "crn": "34372"
    },
    {
        "time1start": "10:30am",
        "time1finish": "1:00pm",
        "crse": "3012",
        "title": "Digital Photography",
        "time2start": "",
        "time2finish": "",
        "day1": "R",
        "credits": 3,
        "prof": "TBA",
        "crn": "34509"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "2511Y",
        "title": "Beginning Painting Lab",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 0,
        "prof": "Mary Therese Creede",
        "crn": "34506"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "3014",
        "title": "Typography",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Alexander Rysdon-Moulitsas",
        "crn": "35494"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1050",
        "title": "Introduction to Art",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Margaret Samu",
        "crn": "34239"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "6124",
        "title": "Federal Income Taxation I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Leonard Schlangel",
        "crn": "34269"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "1102",
        "title": "Elementary Hebrew II",
        "time2start": "1:25pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Rivka Weiner",
        "crn": "34307",
        "time2finish": "2:40pm"
    },
    {
        "time1start": "2:45pm",
        "time1finish": "3:30pm",
        "crse": "1233",
        "title": "Advanced Hebrew Conversation",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 1,
        "prof": "Hilla Goldwicht",
        "crn": "34248"
    },
    {
        "time1start": "3:10pm",
        "time1finish": "4:25pm",
        "crse": "1106",
        "title": "Intermediate Hebrew II",
        "time2start": "3:35pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Rivka Weiner",
        "crn": "34262",
        "time2finish": "4:50pm"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1205",
        "title": "Upper Intermediate Hebrew I",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Hilla Goldwicht",
        "crn": "34233"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1104",
        "title": "Lower Intermediate Hebrew II",
        "time2start": "6:00pm",
        "day2": "T",
        "day1": "MW",
        "credits": 3,
        "prof": "TBA",
        "crn": "34258",
        "time2finish": "6:50pm"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1101",
        "title": "Elementary Hebrew I",
        "time2start": "4:40pm",
        "day2": "TR",
        "day1": "MW",
        "credits": 3,
        "prof": "Rivka Weiner",
        "crn": "34236",
        "time2finish": "5:30pm"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1206",
        "title": "Upper Intermediate Hebrew II",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Hilla Goldwicht",
        "crn": "34329"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "2669",
        "title": "Hebrew Short Story of 20th Cen",
        "time2start": "1:25pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Zafrira Lidovsky Cohen",
        "crn": "35509",
        "time2finish": "2:40pm"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "1103",
        "title": "Lower Intermediate Hebrew I",
        "time2start": "1:25pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "TBA",
        "crn": "34304",
        "time2finish": "2:40pm"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1107",
        "title": "Intermediate Hebrew III",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Yitzhak Lewis",
        "crn": "34288"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "1106",
        "title": "Intermediate Hebrew II",
        "time2start": "1:25pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Hilla Goldwicht",
        "crn": "34264",
        "time2finish": "2:40pm"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1105",
        "title": "Intermediate Hebrew I",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "TBA",
        "crn": "34305"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1104",
        "title": "Lower Intermediate Hebrew II",
        "time2start": "4:40pm",
        "day2": "T",
        "day1": "MW",
        "credits": 3,
        "prof": "Yitzhak Lewis",
        "crn": "34397",
        "time2finish": "5:30pm"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "1105",
        "title": "Intermediate Hebrew I",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Osnat Bishko",
        "crn": "34261"
    },
    {
        "time1start": "11:55am",
        "time1finish": "1:10pm",
        "crse": "1108",
        "title": "Intermediate Hebrew IV",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Zafrira Lidovsky Cohen",
        "crn": "34370"
    },
    {
        "time1start": "1:40pm",
        "time1finish": "2:55pm",
        "crse": "1107",
        "title": "Intermediate Hebrew III",
        "time2start": "1:25pm",
        "day2": "W",
        "day1": "M",
        "credits": 3,
        "prof": "Osnat Bishko",
        "crn": "34265",
        "time2finish": "2:40pm"
    },
    {
        "time1start": "10:25am",
        "time1finish": "11:40am",
        "crse": "3201",
        "title": "Advanced Accounting",
        "time2start": "",
        "time2finish": "",
        "day1": "MW",
        "credits": 3,
        "prof": "Martin A. Leibowitz",
        "crn": "34220"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "3:00pm",
        "crse": "3851",
        "title": "Financial Statement Analysis",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Sidney J. Mehl",
        "crn": "34327"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "1002",
        "title": "Accounting Principles II",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "David Hornung",
        "crn": "34371"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1101",
        "title": "Intermediate Accounting I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "David Hornung",
        "crn": "34166"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "1001",
        "title": "Accounting Principles I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Constance J. Crawford",
        "crn": "34424"
    },
    {
        "time1start": "12:00pm",
        "time1finish": "1:15pm",
        "crse": "2201",
        "title": "Classroom Mangmt & Instruction",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Miriam Ungar Hirsch",
        "crn": "34317"
    },
    {
        "time1start": "9:00am",
        "time1finish": "10:15am",
        "crse": "2301",
        "title": "Lang & Lit in Elem Edu I",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Emily A. Witty",
        "crn": "34303"
    },
    {
        "time1start": "1:15pm",
        "time1finish": "3:45pm",
        "crse": "2935",
        "title": "Sr. Sem. in Early Childhood Ed",
        "time2start": "",
        "time2finish": "",
        "day1": "W",
        "credits": 3,
        "prof": "Chaya R. Gorsetman",
        "crn": "34211"
    },
    {
        "time1start": "10:30am",
        "time1finish": "11:45am",
        "crse": "2303",
        "title": "Teaching Social Studies",
        "time2start": "",
        "time2finish": "",
        "day1": "TR",
        "credits": 3,
        "prof": "Miriam Ungar Hirsch",
        "crn": "34253"
    },
    {
        "time1start": "1:45pm",
        "time1finish": "4:15pm",
        "crse": "2930",
        "title": "Senior Seminar: Elem Edu",
        "time2start": "",
        "time2finish": "",
        "day1": "T",
        "credits": 3,
        "prof": "Miriam Ungar Hirsch",
        "crn": "34498"
    },
    {
        "time1start": "1:20pm",
        "time1finish": "3:00pm",
        "crse": "2133",
        "title": "Linguistic Tools & Literacy",
        "time2start": "",
        "time2finish": "",
        "day1": "M",
        "credits": 3,
        "prof": "Chaya R. Gorsetman",
        "crn": "34301"
    },
    {
        "time1start": "8:00am",
        "time1finish": "4:00pm",
        "crse": "2940",
        "title": "Student Teaching: Elem Educ",
        "time2start": "8:00am",
        "day2": "F",
        "day1": "MWR",
        "credits": 6,
        "prof": "Donna J. Greenberg",
        "crn": "34499",
        "time2finish": "12:00pm"
    },
    {
        "time1start": "8:30am",
        "time1finish": "3:30pm",
        "crse": "2945",
        "title": "EC Student Teaching",
        "time2start": "8:30am",
        "day2": "F",
        "day1": "MTR",
        "credits": 6,
        "prof": "Chaya R. Gorsetman",
        "crn": "34191",
        "time2finish": "1:30pm"
    }];

    sternClassesArray.forEach(function(element) {
      sternClasses.insert(element);
    })
  };

  if (symsMenClasses.find().count() === 0) {
    var symsMenClassesArray = [
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1012",
          "title": "Business Communication",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Marc Spear",
          "crn": "33852"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1020",
          "title": "Mangmnt in a Global Environmnt",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Steven M Nissenfeld",
          "crn": "33812"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "3015",
          "title": "Management & Leadership",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Andrew M Geller",
          "crn": "33864"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2941",
          "title": "Sports Marketing Management",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Robert Tufts",
          "crn": "33843"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:25pm",
          "crse": "3788",
          "title": "Managing the Family Business",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 2,
          "prof": "TBA",
          "crn": "35692"
      },
      {
          "time1start": "6:30pm",
          "time1finish": "9:00pm",
          "crse": "2800H",
          "title": "Entrepreneurial Leadership",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "Laizer Kornwasser",
          "crn": "35710"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "3504",
          "title": "Systematic Inventive Thinking",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 3,
          "prof": "Jonathan M Stern",
          "crn": "33842"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "6:10pm",
          "crse": "4002",
          "title": "Leadership in Non-Profit World",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 2,
          "prof": "Richard M Joel",
          "crn": "35683"
      },
      {
          "time1start": "9:30am",
          "time1finish": "12:00pm",
          "crse": "2510H",
          "title": "Turnaround Business Strategy",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Andrew M Geller",
          "crn": "35682"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1020",
          "title": "Mangmnt in a Global Environmnt",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Andrew M Geller",
          "crn": "35681"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "3780",
          "title": "Principles of Entrepreneurship",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Robert Tufts",
          "crn": "33818"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "4741",
          "title": "Business Internship",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 0,
          "prof": "TBA",
          "crn": "33815"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1408",
          "title": "Corporate Finance",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Gabriela Coiculescu",
          "crn": "33803"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "3851",
          "title": "Financial Statement Analysis",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 3,
          "prof": "Sidney J Mehl",
          "crn": "33806"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1408",
          "title": "Corporate Finance",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Joshua Krausz",
          "crn": "35674"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1001",
          "title": "Principles of Finance",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Rachel Calipha",
          "crn": "35673"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1001",
          "title": "Principles of Finance",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Sidney J Mehl",
          "crn": "33802"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "3510",
          "title": "Options and Futures",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Rachel Calipha",
          "crn": "33844"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2505",
          "title": "Investment Analysis",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Joshua Krausz",
          "crn": "33804"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "3720",
          "title": "Fixed Income Securities",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "S Abraham Ravid",
          "crn": "33820"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2621",
          "title": "Applied Research",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Maria Blekher",
          "crn": "33814"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "3318",
          "title": "Social Media Marketing",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Tamar Avnet",
          "crn": "33838"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2941",
          "title": "Sports Marketing Management",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Robert Tufts",
          "crn": "33846"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "3504",
          "title": "Systematic Inventive Thinking",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 3,
          "prof": "Jonathan M Stern",
          "crn": "33841"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1001",
          "title": "Principles of Marketing",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Frederick Palumbo",
          "crn": "35684"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "3320",
          "title": "Digital Media",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "Nurit Shaul",
          "crn": "35686"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2501",
          "title": "Buyer Behavior",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Tamar Avnet",
          "crn": "35685"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "3328",
          "title": "Managing Sales in Hi-Tech Co",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "TBA",
          "crn": "35885"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1601H",
          "title": "Operations Management",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Yasar Levent Kocaga",
          "crn": "35687"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "2160",
          "title": "Decision Models",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "Sriram Subramanian",
          "crn": "33849"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1131",
          "title": "Statistics for Business",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Avi H Giloni",
          "crn": "33833"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1131",
          "title": "Statistics for Business",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Vladimir Kovtun",
          "crn": "35680"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1456",
          "title": "Quantitative Methods Managment",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Yasar Levent Kocaga",
          "crn": "33810"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1001",
          "title": "Business Algebra",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Avi Naiman",
          "crn": "33840"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2030",
          "title": "Bus Analytics & Programming",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Yitzchak S Rosenthal",
          "crn": "33837"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2460",
          "title": "Data Management-Bus Analytics",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Yitzchak S Rosenthal",
          "crn": "35689"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1020",
          "title": "Intro to Information Systems",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Shu Han",
          "crn": "33809"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1020",
          "title": "Intro to Information Systems",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Kevin Brabazon",
          "crn": "35679"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "6124",
          "title": "Federal Income Taxation I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Leonard Fuld",
          "crn": "33824"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1020",
          "title": "First Year Writing",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "TBA",
          "crn": "33858"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1020",
          "title": "First Year Writing",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Timothy J Berrigan",
          "crn": "33861"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1101",
          "title": "Intermediate Accounting I",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Aliza Rotenstein",
          "crn": "33796"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1001",
          "title": "Accounting Principles I",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Constance J Crawford",
          "crn": "33817"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1002",
          "title": "Accounting Principles II",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "TBA",
          "crn": "33821"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "2403",
          "title": "Management Accounting",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "He Huang",
          "crn": "33797"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "3201",
          "title": "Advanced Accounting",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Martin A Leibowitz",
          "crn": "33798"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1001",
          "title": "Accounting Principles I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Leonard Fuld",
          "crn": "33794"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "3851",
          "title": "Financial Statement Analysis",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 3,
          "prof": "Sidney J Mehl",
          "crn": "33816"
      },
      {
          "time1start": "1:30pm",
          "time1finish": "2:45pm",
          "crse": "1001",
          "title": "Accounting Principles I",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Aliza Rotenstein",
          "crn": "33793"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1001",
          "title": "Accounting Principles I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "TBA",
          "crn": "35635"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1001",
          "title": "Jewish Engagements",
          "time2start": "1:30pm",
          "day2": "R",
          "day1": "M",
          "credits": 2,
          "prof": "Jacob J Schacter",
          "crn": "33863",
          "time2finish": "2:30pm"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "1002",
          "title": "Jewish Values in Contemp Wrld",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Daniel Rynhold",
          "crn": "35691"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2021",
          "title": "Ethical & Legal Env Business",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Daniel Feldman",
          "crn": "35661"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1800H",
          "title": "Business as Human Enterprise",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 3,
          "prof": "Moses L Pava",
          "crn": "33851"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2111",
          "title": "Business Law I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Robert Jay Greenberg",
          "crn": "33801"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "2500",
          "title": "Business and Jewish Law",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 2,
          "prof": "Daniel Feldman",
          "crn": "33822"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "2500",
          "title": "Business and Jewish Law",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Ozer Glickman",
          "crn": "33832"
      }
    ];

    symsMenClassesArray.forEach(function(element) {
      symsMenClasses.insert(element)
    })
  }

  if (ycClasses.find().count() === 0 ) {
    var ycClassesArray = [
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2701",
          "title": "Social Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Eliezer H Schnall",
          "crn": "34004"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2407",
          "title": "Epidemiology",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Daniel Kimmel",
          "crn": "35632"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1001",
          "title": "Introduction to Sociology",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Daniel Kimmel",
          "crn": "33900"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "3003",
          "title": "Social Research Methods",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "TBA",
          "crn": "34003"
      },
      {
          "time1start": "9:30am",
          "time1finish": "12:00pm",
          "crse": "2105",
          "title": "Religion and Society",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Jonathan J Zisook",
          "crn": "35630"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "2306H",
          "title": "Sociology of Race and Racism",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "Amy Stuart",
          "crn": "35629"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "3804",
          "title": "Psychobiology",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 3,
          "prof": "Ido Davidesco",
          "crn": "33899"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "3829H",
          "title": "Music and the Brain",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Harry Ballan",
          "crn": "34075"
      },
      {
          "time1start": "0",
          "time1finish": "ERROR",
          "crse": "4901",
          "title": "Research in Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "TBA",
          "credits": 0,
          "prof": "08/29-01/11",
          "crn": "33980"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2414",
          "title": "Abnormal Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jenny Isaacs",
          "crn": "35998"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "3105",
          "title": "Social Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Eliezer H Schnall",
          "crn": "33898"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "4933",
          "title": "Research Seminar",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "Jenny Isaacs",
          "crn": "35842"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "3435",
          "title": "Industrial & Organization Psyc",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "E Hoffman",
          "crn": "34047"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "3440",
          "title": "Drugs & Behavior",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "Ari Shechter",
          "crn": "35627"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "4930",
          "title": "Topics: Psychopharmacology",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Esther Devorah Rollhaus",
          "crn": "35628"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "1130",
          "title": "Developmental II",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "Stephen I Glicksman",
          "crn": "35626"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2150",
          "title": "Cognitive Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Bruno Galantucci",
          "crn": "34112"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1021",
          "title": "Statistics for Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Ariel Malka",
          "crn": "33968"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "1110",
          "title": "Developmental I: Child",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "Eliezer H Schnall",
          "crn": "33896"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1010",
          "title": "Introduction to Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Eliezer H Schnall",
          "crn": "33895"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1010",
          "title": "Introduction to Psychology",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jenny Isaacs",
          "crn": "35625"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "3110H",
          "title": "Psychology and Public Opinion",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Ariel Malka",
          "crn": "35624"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2100C",
          "title": "Experimental Psychology",
          "time2start": "6:00pm",
          "day2": "R",
          "day1": "TR",
          "credits": 5,
          "prof": "Bruno Galantucci",
          "crn": "33897",
          "time2finish": "7:45pm"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1380",
          "title": "Early Kabbalah",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jonathan V Dauber",
          "crn": "35610"
      },
      {
          "time1start": "10:00am",
          "time1finish": "12:30pm",
          "crse": "1021",
          "title": "Intro to Statistics",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Andreas Kakolyris",
          "crn": "33909"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "2111L",
          "title": "Ear Training I",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 1,
          "prof": "Daniel Beliavsky",
          "crn": "34019"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1829H",
          "title": "Music and the Brain",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Harry Ballan",
          "crn": "34074"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "3:50pm",
          "crse": "2120",
          "title": "Introduction to Composition",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 2,
          "prof": "Jonathan Schapiro",
          "crn": "34042"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1350",
          "title": "Baroque & Classical Music",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Daniel Beliavsky",
          "crn": "33996"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "4111",
          "title": "Applied Musical Study",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 1,
          "prof": "Daniel Beliavsky",
          "crn": "33937"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1018",
          "title": "Aesthetic Revolutions",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Daniel Beliavsky",
          "crn": "34135"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "3469",
          "title": "Performance: Jazz Ensemble",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 1,
          "prof": "Jonathan Schapiro",
          "crn": "35617"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2111",
          "title": "Diatonic Harmony&Counterpoint",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Daniel Beliavsky",
          "crn": "34018"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "3464",
          "title": "Performance: Chamber Ensemble",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 1,
          "prof": "Daniel Beliavsky",
          "crn": "35616"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1014",
          "title": "American Musical Cultures",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jonathan Schapiro",
          "crn": "35669"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2113",
          "title": "Chromatic Harmony I",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Kurt Nelson",
          "crn": "33934"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "2113L",
          "title": "Ear Training III",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 1,
          "prof": "Kurt Nelson",
          "crn": "35670"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "3115H",
          "title": "Presidential Elections",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Joseph Lieberman, Ruth Bevan ",
          "crn": "35621"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2430",
          "title": "American Political Thought",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Ruth Bevan",
          "crn": "35622"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "3575",
          "title": "Research Methods",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "TBA",
          "crn": "35843"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1101",
          "title": "Intro to American Politics",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Jamie Aroosi",
          "crn": "33981"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1501",
          "title": "Fundamentals of Political Sci",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Ruth Bevan",
          "crn": "33988"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2505",
          "title": "Writing Politics:Dir Research",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Maria N Zaitseva",
          "crn": "35639"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "2320",
          "title": "Politics and Global Markets",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Roberto Genoves",
          "crn": "35623"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1305H",
          "title": "American Foreign Policy",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Maria N Zaitseva",
          "crn": "35620"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1105",
          "title": "Intro American Public Policy",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Jamie Aroosi",
          "crn": "34094"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1020",
          "title": "First Year Writing",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "TBA",
          "crn": "34117"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1020",
          "title": "First Year Writing:ESL",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Norma Silbermintz",
          "crn": "34076"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "7:35pm",
          "crse": "1401",
          "title": "Problem Seminar I",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 0,
          "prof": "Yan Li",
          "crn": "33884"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1412",
          "title": "Calculus I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 4,
          "prof": "Yan Li",
          "crn": "33886"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "1402",
          "title": "Problem Seminar II",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 0,
          "prof": "Yan Li",
          "crn": "33925"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2105",
          "title": "Linear Algebra",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Maxwell Musser",
          "crn": "33942"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1413",
          "title": "Calculus II",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 4,
          "prof": "Wenxiong Chen",
          "crn": "33887"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1504C",
          "title": "Discrete Structures",
          "time2start": "6:45pm",
          "day2": "R",
          "day1": "TR",
          "credits": 4,
          "prof": "Arnold Lebow",
          "crn": "33957",
          "time2finish": "8:00pm"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "1160",
          "title": "Precalculus",
          "time2start": "4:30pm",
          "day2": "TR",
          "day1": "M",
          "credits": 4,
          "prof": "Donald Taylor-Bruce",
          "crn": "33882",
          "time2finish": "5:45pm"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2461",
          "title": "Probability Theory",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Arnold Lebow",
          "crn": "33890"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "1403",
          "title": "Problem Seminar III",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 0,
          "prof": "Donald Taylor-Bruce",
          "crn": "33885"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1520",
          "title": "Advanced Calculus I",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Wenxiong Chen",
          "crn": "33889"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1510",
          "title": "Multivariable Calculus",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 4,
          "prof": "Wenxiong Chen",
          "crn": "33888"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1021",
          "title": "Democratic Political Culture",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jeffrey Freedman",
          "crn": "34132"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1003H",
          "title": "The Monstrous",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "David Lavinsky",
          "crn": "35647"
      },
      {
          "time1start": "9:30am",
          "time1finish": "12:00pm",
          "crse": "1026",
          "title": "History of the Alphabet",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Aaron J Koller",
          "crn": "35649"
      },
      {
          "time1start": "1:30pm",
          "time1finish": "2:45pm",
          "crse": "1009",
          "title": "France and its Others",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Rachel Mesch",
          "crn": "35648"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1014",
          "title": "American Public Policy",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Jamie Aroosi",
          "crn": "35659"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "1016H",
          "title": "Sociology of Race and Racism",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "Amy Stuart",
          "crn": "35660"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1006",
          "title": "Economics Efficiency & Justice",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Elias C Grivoyannis",
          "crn": "34050"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1007H",
          "title": "Psychology and Public Opinion",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Ariel Malka",
          "crn": "35583"
      },
      {
          "time1start": "10:00am",
          "time1finish": "12:30pm",
          "crse": "1012",
          "title": "Courts and Social Change",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Akiva J Covitz",
          "crn": "35585"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "2910",
          "title": "Art of the Actor",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "Lin Snider",
          "crn": "35698"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "4930",
          "title": "Topics: Psychopharmacology",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Esther Devorah Rollhaus",
          "crn": "35574"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "6:10pm",
          "crse": "4023R",
          "title": "Microbiology",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 2,
          "prof": "Moses D Tendler",
          "crn": "33921"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "3:50pm",
          "crse": "3207C",
          "title": "Cell Biology",
          "time2start": "6:45pm",
          "day2": "T",
          "day1": "TR",
          "credits": 4,
          "prof": "Yakov Peter",
          "crn": "33877",
          "time2finish": "10:05pm"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1376R",
          "title": "Biochemistry Lecture",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Daniel Lim",
          "crn": "33874"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "10:05pm",
          "crse": "1376L",
          "title": "Biochemistry Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Somdeb Mitra",
          "crn": "33873"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "10:05pm",
          "crse": "1011L",
          "title": "Principles Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 2,
          "prof": "Aaron Kogut",
          "crn": "33869"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "10:05pm",
          "crse": "1011L",
          "title": "Principles Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 2,
          "prof": "Sondra Solomon",
          "crn": "33870"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "10:05pm",
          "crse": "4023L",
          "title": "Microbiology Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 2,
          "prof": "TBA",
          "crn": "33920"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "3:50pm",
          "crse": "3513C",
          "title": "Genetics",
          "time2start": "6:45pm",
          "day2": "W",
          "day1": "MW",
          "credits": 4,
          "prof": "Josefa M Steinhauer",
          "crn": "33939",
          "time2finish": "10:05pm"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:40pm",
          "crse": "3135C",
          "title": "Cell Structure & Function",
          "time2start": "6:45pm",
          "day2": "T",
          "day1": "T",
          "credits": 4,
          "prof": "Vincent Chiappetta",
          "crn": "33876",
          "time2finish": "10:05pm"
      },
      {
          "time1start": "0",
          "time1finish": "ERROR",
          "crse": "4901",
          "title": "Research in Biology",
          "time2start": "",
          "time2finish": "",
          "day1": "TBA",
          "credits": 0,
          "prof": "08/29-01/11",
          "crn": "33978"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:25pm",
          "crse": "4934H",
          "title": "Topics: Stem Cells",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Yakov Peter",
          "crn": "33977"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1011R",
          "title": "Principles Lectures",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Somdeb Mitra",
          "crn": "33872"
      },
      {
          "time1start": "5:00pm",
          "time1finish": "6:40pm",
          "crse": "3728C",
          "title": "Human & Animal Physiology",
          "time2start": "6:45pm",
          "day2": "R",
          "day1": "R",
          "credits": 4,
          "prof": "Sumanta Goswami",
          "crn": "33940",
          "time2finish": "10:05pm"
      },
      {
          "time1start": "1:30pm",
          "time1finish": "2:45pm",
          "crse": "1201",
          "title": "Intermediate Spanish I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Graciela Bazet de Broitman",
          "crn": "33903"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1101",
          "title": "Elementary Spanish I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Graciela Bazet de Broitman",
          "crn": "33902"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1100",
          "title": "Logic",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "David R Johnson",
          "crn": "35618"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "2170H",
          "title": "Ancient & Medieval Philosophy",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "David R Johnson",
          "crn": "34109"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "4931",
          "title": "Seminar: Paradoxes",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "David R Johnson",
          "crn": "35671"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "4930",
          "title": "Topics: Kant",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Daniel Rynhold",
          "crn": "35619"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "4930H",
          "title": "Topics: Judaism and Democracy",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Meir Yakov Soloveichik",
          "crn": "34146"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1400",
          "title": "Modern Jewish History",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jess J Olson",
          "crn": "35668"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2210H",
          "title": "Classical Intellectual JHI",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Moshe J Bernstein",
          "crn": "35695"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1200",
          "title": "Classical Jewish History",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Steven Fine",
          "crn": "33986"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2415",
          "title": "Modern Intellectual JHI",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Shalom Carmy",
          "crn": "35694"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1300H",
          "title": "Medieval Jewish History",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Chaviva Levin",
          "crn": "35611"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1400",
          "title": "Modern Jewish History",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Joshua Karlip",
          "crn": "34006"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1101",
          "title": "Elementary French I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Raisa Rexer",
          "crn": "33881"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1201",
          "title": "Intermediate French I",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Raisa Rexer",
          "crn": "34119"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1320C",
          "title": "Data Structures",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 4,
          "prof": "TBA",
          "crn": "33936"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "3780",
          "title": "Web Programming & Development",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Van Kelly",
          "crn": "33931"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:15pm",
          "crse": "1300L",
          "title": "Intro to Computer Science-Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 0,
          "prof": "Mahdokht Behravan",
          "crn": "34129"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1320L",
          "title": "Data Structures Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 0,
          "prof": "TBA",
          "crn": "34030"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1504C",
          "title": "Discrete Structures",
          "time2start": "6:45pm",
          "day2": "R",
          "day1": "TR",
          "credits": 4,
          "prof": "Arnold Lebow",
          "crn": "33943",
          "time2finish": "8:00pm"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1621",
          "title": "Theory of Computation",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Arnold Lebow",
          "crn": "35896"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1300C",
          "title": "Intro to Computer Science",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 4,
          "prof": "Van Kelly",
          "crn": "33985"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "3610",
          "title": "Intro to Operating Systems",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "TBA",
          "crn": "33922"
      },
      {
          "time1start": "9:30am",
          "time1finish": "12:00pm",
          "crse": "1110",
          "title": "The Imagination of Nature",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Gabriel Cwilich",
          "crn": "35697"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1010",
          "title": "Frontiers of Science",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "TBA",
          "crn": "35696"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "1220",
          "title": "Biblical Midrashim",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 2,
          "prof": "Elazar Hurvitz",
          "crn": "33974"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "2000H",
          "title": "Genesis",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 2,
          "prof": "Barry L Eichler",
          "crn": "35571"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2020H",
          "title": "Exodus",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Shalom Carmy",
          "crn": "35573"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "2700",
          "title": "Psalms",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Joseph L Angel",
          "crn": "34637"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "2720",
          "title": "Proverbs",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 2,
          "prof": "Jeremy Wieder",
          "crn": "35569"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "2800",
          "title": "Daniel",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "J Mitchell Orlian",
          "crn": "35572"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "1000",
          "title": "Bible:Text, Context, Tradition",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Yaakov Elman",
          "crn": "33970"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "1000",
          "title": "Bible:Text, Context, Tradition",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Moshe J Bernstein",
          "crn": "33971"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "1000",
          "title": "Bible:Text, Context, Tradition",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Shalom Carmy",
          "crn": "33973"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "2740",
          "title": "Job",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Elazar Hurvitz",
          "crn": "33975"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1701",
          "title": "International Economics",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Elias C Grivoyannis",
          "crn": "35584"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "1421",
          "title": "Econometrics",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "Aboozar Hadavand",
          "crn": "33935"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1010",
          "title": "Principles of Economics",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Ran Shao",
          "crn": "34082"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1221H",
          "title": "Money and Banking",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Elias C Grivoyannis",
          "crn": "35846"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1177",
          "title": "Game Theory",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Tadashi Hashimoto",
          "crn": "34002"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1201",
          "title": "Intermediate Macroeconomics",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Omer Acikgoz",
          "crn": "33923"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1014",
          "title": "American Musical Cultures",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jonathan Schapiro",
          "crn": "35644"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1020",
          "title": "Politics and Global Markets",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Roberto Genoves",
          "crn": "35646"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1002",
          "title": "Diaspora Literature",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Elizabeth Stewart",
          "crn": "34023"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1017",
          "title": "The Spanish Civil War",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Graciela Bazet de Broitman",
          "crn": "35645"
      },
      {
          "time1start": "9:30am",
          "time1finish": "12:00pm",
          "crse": "1025",
          "title": "Religion and Society",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Jonathan J Zisook",
          "crn": "35579"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "0010",
          "title": "ESL: Intro to College",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 2,
          "prof": "Norma Silbermintz",
          "crn": "33919"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "0013",
          "title": "Eng as Sec Lang III",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 1,
          "prof": "Norma Silbermintz",
          "crn": "33960"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "3065",
          "title": "Gender and Literature",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 3,
          "prof": "Rachel Mesch",
          "crn": "35655"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "0011",
          "title": "Eng as Sec Lang I",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 1,
          "prof": "Norma Silbermintz",
          "crn": "33958"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1007",
          "title": "Fiction & Artistic Imagination",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Richard Leonard Nochimson",
          "crn": "35654"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "0012",
          "title": "Eng as Sec Lang II",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 1,
          "prof": "Norma Silbermintz",
          "crn": "33959"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "2317",
          "title": "21st Century Chaucer",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "David Lavinsky",
          "crn": "35657"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1003",
          "title": "Shakespeare and the Arts",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "William Lamborn Lee",
          "crn": "35653"
      },
      {
          "time1start": "8:15pm",
          "time1finish": "9:45pm",
          "crse": "4001",
          "title": "Senior Colloquium",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 2,
          "prof": "Lauren Fitzgerald",
          "crn": "33933"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2052",
          "title": "Realisms: Mimetic to Magical",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "William Lamborn Lee",
          "crn": "35677"
      },
      {
          "time1start": "10:00am",
          "time1finish": "12:30pm",
          "crse": "2963H",
          "title": "Graphic Novels and Animation",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Elizabeth Stewart",
          "crn": "35658"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1002",
          "title": "Diaspora Literature",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Elizabeth Stewart",
          "crn": "35652"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1409",
          "title": "Writing the Essay",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Liesl Schwabe",
          "crn": "35656"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "10:05pm",
          "crse": "1376L",
          "title": "Biochemistry Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "R",
          "credits": 2,
          "prof": "Somdeb Mitra",
          "crn": "33927"
      },
      {
          "time1start": "0",
          "time1finish": "ERROR",
          "crse": "4901",
          "title": "Research in Chemistry",
          "time2start": "",
          "time2finish": "",
          "day1": "TBA",
          "credits": 0,
          "prof": "08/29-01/11",
          "crn": "33979"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1045R",
          "title": "General Chemistry I Lec",
          "time2start": "5:50pm",
          "day2": "R",
          "day1": "TR",
          "credits": 3,
          "prof": "James Camara",
          "crn": "33878",
          "time2finish": "6:40pm"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1213R",
          "title": "Organic Chemistry I Lec",
          "time2start": "5:50pm",
          "day2": "R",
          "day1": "TR",
          "credits": 3,
          "prof": "Fabiola Barrios-Landeros",
          "crn": "33879",
          "time2finish": "6:40pm"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "10:45pm",
          "crse": "1215L",
          "title": "Organic Chemistry Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 2,
          "prof": "Daniel Lim",
          "crn": "33961"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "10:45pm",
          "crse": "1215L",
          "title": "Organic Chemistry Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 2,
          "prof": "Racquel K Malcolm-Whyte",
          "crn": "33962"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1122H",
          "title": "Chemical Analysis",
          "time2start": "6:45pm",
          "day2": "W",
          "day1": "MW",
          "credits": 4,
          "prof": "Jianfeng Jiang",
          "crn": "34029",
          "time2finish": "9:45pm"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1376R",
          "title": "Biochemistry Lec",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Daniel Lim",
          "crn": "33928"
      },
      {
          "time1start": "9:00am",
          "time1finish": "1:00pm",
          "crse": "1215L",
          "title": "Organic Chemistry Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 2,
          "prof": "Fabiola Barrios-Landeros",
          "crn": "33963"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1415R",
          "title": "Physical Chemistry I",
          "time2start": "6:50pm",
          "day2": "M",
          "day1": "MW",
          "credits": 4,
          "prof": "Raji Viswanathan",
          "crn": "33932",
          "time2finish": "7:40pm"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1051R",
          "title": "General Physics I",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 4,
          "prof": "Fredy Zypman",
          "crn": "34010"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "1051T",
          "title": "General Physics I-Recitation",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 0,
          "prof": "Mahdokht Behravan",
          "crn": "35888"
      },
      {
          "time1start": "0",
          "time1finish": "ERROR",
          "crse": "4901",
          "title": "Research in Physics",
          "time2start": "",
          "time2finish": "",
          "day1": "TBA",
          "credits": 0,
          "prof": "08/29-01/11",
          "crn": "34140"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:25pm",
          "crse": "1031L",
          "title": "Intro Physics Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 1,
          "prof": "Clifford Marc Bastuscheck",
          "crn": "33982"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1031R",
          "title": "Intro Physics Lecture",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 4,
          "prof": "Neer Asherie",
          "crn": "33893"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2051R",
          "title": "General Physics III",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 4,
          "prof": "Sergey V Buldyrev",
          "crn": "34088"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1621",
          "title": "Intro to Quantum Mechanics",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Sergey V Buldyrev",
          "crn": "33926"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:45pm",
          "crse": "2061L",
          "title": "General Physics III Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 1,
          "prof": "Mahdokht Behravan",
          "crn": "35633"
      },
      {
          "time1start": "11:00am",
          "time1finish": "1:30pm",
          "crse": "1401",
          "title": "Intro to Solid State Physics",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Fredy Zypman",
          "crn": "35676"
      },
      {
          "time1start": "1:05pm",
          "time1finish": "2:45pm",
          "crse": "1031L",
          "title": "Intro Physics Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 1,
          "prof": "Sheldon J Rosenberg",
          "crn": "33964"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:15pm",
          "crse": "1510H",
          "title": "Statistical Mechanics",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "Gabriel Cwilich",
          "crn": "35672"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "2051T",
          "title": "General Physics III-Recitation",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 0,
          "prof": "Sergey V Buldyrev",
          "crn": "35678"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:25pm",
          "crse": "1031L",
          "title": "Intro Physics Lab",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 1,
          "prof": "Neer Asherie",
          "crn": "33892"
      },
      {
          "time1start": "5:50pm",
          "time1finish": "6:40pm",
          "crse": "1031T",
          "title": "Intro Physics I - Recitation",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 0,
          "prof": "Neer Asherie",
          "crn": "35638"
      },
      {
          "time1start": "12:00pm",
          "time1finish": "12:50pm",
          "crse": "4935",
          "title": "Physics Colloquium",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 1,
          "prof": "Mahdokht Behravan",
          "crn": "33941"
      },
      {
          "time1start": "10:00am",
          "time1finish": "12:30pm",
          "crse": "1022",
          "title": "Travel Narratives",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Ronnie Perelis",
          "crn": "35607"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1016",
          "title": "Culture of the Fin de Siecle",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jess J Olson",
          "crn": "33994"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1007",
          "title": "Fiction & Artistic Imagination",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Richard Leonard Nochimson",
          "crn": "35608"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1018",
          "title": "Aesthetic Revolutions",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Daniel Beliavsky",
          "crn": "34131"
      },
      {
          "time1start": "10:00am",
          "time1finish": "12:30pm",
          "crse": "1023H",
          "title": "Rembrandt and the Jews",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Jacob Wisse, Meir Yakov Soloveichik ",
          "crn": "35688"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1003",
          "title": "Shakespeare and the Arts",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "William Lamborn Lee",
          "crn": "35606"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "2604",
          "title": "Piracy & the Nation State",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Douglas Burgess",
          "crn": "35605"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1105",
          "title": "His of the Ancient Near East",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Shalom E Holtz",
          "crn": "35602"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "2128",
          "title": "Democratic Political Culture",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Jeffrey Freedman",
          "crn": "34137"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "2165",
          "title": "Europe since 1945",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Mario Kessler",
          "crn": "35711"
      },
      {
          "time1start": "10:00am",
          "time1finish": "12:30pm",
          "crse": "2127H",
          "title": "The European Enlightenment",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Jeffrey Freedman",
          "crn": "35666"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "2520",
          "title": "Atlantic World",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Douglas Burgess",
          "crn": "35604"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "1831",
          "title": "Architectural Design Process",
          "time2start": "",
          "time2finish": "",
          "day1": "W",
          "credits": 3,
          "prof": "Paul Glassman",
          "crn": "35643"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:35pm",
          "crse": "2901",
          "title": "Printmaking",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 2,
          "prof": "Carla Aurich",
          "crn": "34028"
      },
      {
          "time1start": "8:45pm",
          "time1finish": "10:30pm",
          "crse": "2301",
          "title": "Principles of Drawing",
          "time2start": "",
          "time2finish": "",
          "day1": "M",
          "credits": 2,
          "prof": "Carla Aurich",
          "crn": "33989"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "9:30pm",
          "crse": "1635H",
          "title": "Evolution of the Skyscraper",
          "time2start": "",
          "time2finish": "",
          "day1": "T",
          "credits": 3,
          "prof": "Paul Glassman",
          "crn": "35570"
      },
      {
          "time1start": "10:00am",
          "time1finish": "12:30pm",
          "crse": "1023H",
          "title": "Rembrandt and the Jews",
          "time2start": "",
          "time2finish": "",
          "day1": "F",
          "credits": 3,
          "prof": "Jacob Wisse, Meir Yakov Soloveichik ",
          "crn": "35699"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1106",
          "title": "Intermediate Hebrew II",
          "time2start": "12:00pm",
          "day2": "W",
          "day1": "TR",
          "credits": 3,
          "prof": "Chaya Glaser",
          "crn": "34016",
          "time2finish": "12:50pm"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1206",
          "title": "Upper Intermediate Hebrew II",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Sigal Shalom",
          "crn": "34054"
      },
      {
          "time1start": "6:45pm",
          "time1finish": "8:00pm",
          "crse": "1206",
          "title": "Upper Intermediate Hebrew II",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Samuel Schneider",
          "crn": "35663"
      },
      {
          "time1start": "1:35pm",
          "time1finish": "2:25pm",
          "crse": "1004",
          "title": "Elementary Biblical Hebrew II",
          "time2start": "",
          "time2finish": "",
          "day1": "MTWR",
          "credits": 3,
          "prof": "Lori Linzer",
          "crn": "33976"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1105",
          "title": "Intermediate Hebrew I",
          "time2start": "12:20pm",
          "day2": "T",
          "day1": "MW",
          "credits": 3,
          "prof": "Chaya Glaser",
          "crn": "34015",
          "time2finish": "1:10pm"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1306H",
          "title": "Advanced Hebrew II",
          "time2start": "",
          "time2finish": "",
          "day1": "MW",
          "credits": 3,
          "prof": "Sarah Kasher-Bendet",
          "crn": "35664"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1006",
          "title": "Intermed Biblical Hebrew II",
          "time2start": "5:50pm",
          "day2": "T",
          "day1": "MW",
          "credits": 3,
          "prof": "Ezra H Frazer",
          "crn": "34014",
          "time2finish": "6:40pm"
      },
      {
          "time1start": "3:00pm",
          "time1finish": "4:15pm",
          "crse": "1005",
          "title": "Intermed Biblical Hebrew I",
          "time2start": "5:50pm",
          "day2": "T",
          "day1": "MW",
          "credits": 3,
          "prof": "Rachel Kra Schaum",
          "crn": "33952",
          "time2finish": "6:40pm"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "4980H",
          "title": "Honors Thesis: Preparation",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 0,
          "prof": "Gabriel Cwilich",
          "crn": "33917"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "4977H",
          "title": "Honors Thesis Proposal",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 1,
          "prof": "Gabriel Cwilich",
          "crn": "33984"
      },
      {
          "time1start": "TBA",
          "time1finish": "ERROR",
          "crse": "4981H",
          "title": "Honors Thesis: Writing",
          "time2start": "",
          "time2finish": "",
          "day1": "\u00a0",
          "credits": 0,
          "prof": "Gabriel Cwilich",
          "crn": "33918"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "5:45pm",
          "crse": "1007",
          "title": "Epidemiology",
          "time2start": "",
          "time2finish": "",
          "day1": "TR",
          "credits": 3,
          "prof": "Daniel Kimmel",
          "crn": "35578"
      },
      {
          "time1start": "4:30pm",
          "time1finish": "6:45pm",
          "crse": "1002",
          "title": "Analysis of Environmntl Toxins",
          "time2start": "4:30pm",
          "day2": "W",
          "day1": "M",
          "credits": 3,
          "prof": "Raji Viswanathan",
          "crn": "34007",
          "time2finish": "5:45pm"
      }
    ];

    ycClassesArray.forEach(function(element) {
      ycClasses.insert(element);
    })
  }
})
   