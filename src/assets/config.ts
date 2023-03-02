const config = {
  state:['Andhra Pradesh','Assam','Bihar', 'Gujarat', 'Haryana', 'Karnataka', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'],
    finYear: [
        {
            value: 'FY2018-19',
            name: 'FY2018-19'
        },
        {
            value: 'FY2019-20',
            name: 'FY2019-20'
        },
        {
            value: 'FY2020-21',
            name: 'FY2020-21'
        },
        {
            value: 'FY2021-22',
            name: 'FY2021-22'
        },
        {
            value: 'FY2022-23',
            name: 'FY2022-23'
        }
    ],
    steps: ['Create Detailed Project Report', 'Trade Units', 'Accessories', 'New Property', 'Trade Address', 'Ownership Details', 'Documents Required'],
    projectList: [
      {
        "projectName": 'Project 1',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2024",
        "circle": "C2",
        "division": "D2",
        projectValue: "300Cr",
        executingAgency: "TPL",
        registeredAddress: "Mumbai",
        contactPerson: "S Ghosh",
        projectProgress: '12%'
      },
      {
        "projectName": 'Project 2',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2024",
        "circle": "C1",
        "division": "D1",
        projectValue: "200Cr",
        executingAgency: "L&T",
        registeredAddress: "Mumbai",
        contactPerson: "S Mehta",
        projectProgress: '89%'
      },
      {
        "projectName": 'Project 3',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2024",
        "circle": "C1",
        "division": "D1",
        projectValue: "200Cr",
        executingAgency: "NCC",
        registeredAddress: "Hyderabad",
        contactPerson: "S Muttu",
        projectProgress: '50%'
      },
      {
        "projectName": 'Project 4',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2024",
        "circle": "C2",
        "division": "D1",
        projectValue: "300Cr",
        executingAgency: "NCC",
        registeredAddress: "Hyderabad",
        contactPerson: "S Muttu",
        projectProgress: '43%'
      },
      {
        "projectName": 'Project 5',
        "projectType": "Mega",
        "projectStartDate": "04/01/2022",
        "projectEndDate": "03/30/2024",
        "circle": "C2",
        "division": "D1",
        projectValue: "300Cr",
        executingAgency: "Contractor 1",
        registeredAddress: "Demo Address",
        contactPerson: "Sailesh Das",
        projectProgress: '0%'
      }],
      milestoneList:[
        {
          milestone: 'Survey, Design & Drawing',
          startDate:'04/01/2022', 
          endDate: '09/30/2022', 
          payment:'2%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            }
          ]
        },
        {
          milestone: 'Construction of Intake Well',
          startDate:'10/01/2022', 
          endDate: '04/30/2023', 
          payment:'3%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            }
          ]
        },
        {
          milestone: 'Supply of pipes, laying ,fitting & fixing from Raw water rising main to WTP',
          startDate:'10/01/2022', 
          endDate: '05/31/2023', 
          payment:'5%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            }
          ]
        },
        {
          milestone: 'Completion of WTP work',
          startDate:'10/01/2022', 
          endDate: '08/31/2023', 
          payment:'20%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            },
            {
              milestone: 'Subcomponent C',
              amount: '756'
            },
          ]
        },
        {
          milestone: 'Supply of pipes, laying ,fitting & fixing from Clear water rising main to Elevated storage Reservoirs',
          startDate:'03/01/2023', 
          endDate: '08/31/2023', 
          payment:'20%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            }
          ]
        },
        {
          milestone: 'Design, Construction, Testing & Commissioning of ESR',
          startDate:'10/01/2022', 
          endDate: '08/31/2023', 
          payment:'20%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            },
            {
              milestone: 'Subcomponent C',
              amount: '756'
            },
            {
              milestone: 'Subcomponent D',
              amount: '756'
            }
          ]
        },
        {
          milestone: 'Supply of HDPE Pipes, laying and jointing to complete distribution system',
          startDate:'10/01/2022', 
          endDate: '08/31/2023',
          payment:'15%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            }
          ]
        },
        {
          milestone: 'Supplying, fitting & fixing of flow meter, PLC Scada and all other Instruments',
          startDate:'10/01/2023', 
          endDate: '11/30/2023', 
          payment:'5%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            }
          ]
        },
        {
          milestone: 'Completion of inspection, Testing, Trial Run & final Acceptance',
          startDate:'12/01/2023', 
          endDate: '02/28/2024', 
          payment:'10%',
          progress: '',
          children: [
            {
              milestone: 'Subcomponent A',
              amount: '756'
            },
            {
              milestone: 'Subcomponent B',
              amount: '756'
            }
          ]
        }
      ],
      riskDataList: [
        {
          descriptionOfRisk: 'Risk 4',
          riskLevel: 'High'
        },
        {
          descriptionOfRisk: 'Risk 3',
          riskLevel: 'Medium'
        },
        {
          descriptionOfRisk: 'Risk 2',
          riskLevel: 'Medium'
        },
        {
          descriptionOfRisk: 'Risk 1',
          riskLevel: 'Low'
        }
      ],
    mList: [
      {
        name: 'Fruit'
      }, {
        name: 'Vegetables',
        amount: '756',
        children: [
          {
            name: 'Green',
            amount: '756',
            children: [
              {name: 'Broccoli', count: 10,amount: '756',
                children: [
                  {name: 'Sub-Broccoli',count: 10, qnty: 10,unit: 'cum',rate: '156', amount: '756',action:'true'}
                ]
              }
            ]
          }
        ]
      },
    ],
    graphData: {
        "nodes": [
          {
            "id": "0",
            "name": "Myriel",
            "symbolSize": 19.12381,
            "x": -266.82776,
            "y": 299.6904,
            "value": 28.685715,
            "category": 0
          },
          {
            "id": "1",
            "name": "Napoleon",
            "symbolSize": 2.6666666666666665,
            "x": -418.08344,
            "y": 446.8853,
            "value": 4,
            "category": 0
          },
          {
            "id": "2",
            "name": "MlleBaptistine",
            "symbolSize": 6.323809333333333,
            "x": -212.76357,
            "y": 245.29176,
            "value": 9.485714,
            "category": 1
          },
          {
            "id": "3",
            "name": "MmeMagloire",
            "symbolSize": 6.323809333333333,
            "x": -242.82404,
            "y": 235.26283,
            "value": 9.485714,
            "category": 1
          },
          {
            "id": "4",
            "name": "CountessDeLo",
            "symbolSize": 2.6666666666666665,
            "x": -379.30386,
            "y": 429.06424,
            "value": 4,
            "category": 0
          },
          {
            "id": "5",
            "name": "Geborand",
            "symbolSize": 2.6666666666666665,
            "x": -417.26337,
            "y": 406.03506,
            "value": 4,
            "category": 0
          },
          {
            "id": "6",
            "name": "Champtercier",
            "symbolSize": 2.6666666666666665,
            "x": -332.6012,
            "y": 485.16974,
            "value": 4,
            "category": 0
          },
          {
            "id": "7",
            "name": "Cravatte",
            "symbolSize": 2.6666666666666665,
            "x": -382.69568,
            "y": 475.09113,
            "value": 4,
            "category": 0
          },
          {
            "id": "8",
            "name": "Count",
            "symbolSize": 2.6666666666666665,
            "x": -320.384,
            "y": 387.17325,
            "value": 4,
            "category": 0
          },
          {
            "id": "9",
            "name": "OldMan",
            "symbolSize": 2.6666666666666665,
            "x": -344.39832,
            "y": 451.16772,
            "value": 4,
            "category": 0
          },
          
          {
            "id": "11",
            "name": "Valjean",
            "symbolSize": 66.66666666666667,
            "x": -87.93029,
            "y": -6.8120565,
            "value": 100,
            "category": 1
          },
          {
            "id": "12",
            "name": "Marguerite",
            "symbolSize": 4.495239333333333,
            "x": -339.77908,
            "y": -184.69139,
            "value": 6.742859,
            "category": 1
          },
          {
            "id": "13",
            "name": "MmeDeR",
            "symbolSize": 2.6666666666666665,
            "x": -194.31313,
            "y": 178.55301,
            "value": 4,
            "category": 1
          },
          {
            "id": "14",
            "name": "Isabeau",
            "symbolSize": 2.6666666666666665,
            "x": -158.05168,
            "y": 201.99768,
            "value": 4,
            "category": 1
          },
          {
            "id": "15",
            "name": "Gervais",
            "symbolSize": 2.6666666666666665,
            "x": -127.701546,
            "y": 242.55057,
            "value": 4,
            "category": 1
          },
          
          {
            "id": "69",
            "name": "Babet",
            "symbolSize": 19.12381,
            "x": 150.35959,
            "y": -298.50797,
            "value": 28.685715,
            "category": 7
          },
          {
            "id": "70",
            "name": "Claquesous",
            "symbolSize": 19.12381,
            "x": 137.3717,
            "y": -410.2809,
            "value": 28.685715,
            "category": 7
          },
          {
            "id": "71",
            "name": "Montparnasse",
            "symbolSize": 17.295237333333333,
            "x": 234.87747,
            "y": -400.85983,
            "value": 25.942856,
            "category": 7
          },
          
        ],
        "links": [
          {
            "source": "1",
            "target": "0"
          },
          {
            "source": "2",
            "target": "0"
          },
          {
            "source": "3",
            "target": "0"
          },
          {
            "source": "3",
            "target": "2"
          },
          {
            "source": "4",
            "target": "0"
          },
          {
            "source": "5",
            "target": "0"
          },
          {
            "source": "6",
            "target": "0"
          },
          {
            "source": "7",
            "target": "0"
          },
          {
            "source": "8",
            "target": "0"
          },
          {
            "source": "9",
            "target": "0"
          },
          {
            "source": "11",
            "target": "0"
          },
          {
            "source": "11",
            "target": "2"
          },
          {
            "source": "11",
            "target": "3"
          },
          {
            "source": "11",
            "target": "10"
          },
          {
            "source": "12",
            "target": "11"
          },
          {
            "source": "13",
            "target": "11"
          },
          {
            "source": "14",
            "target": "11"
          },
          {
            "source": "15",
            "target": "11"
          },
          {
            "source": "17",
            "target": "16"
          },
          {
            "source": "18",
            "target": "16"
          },
          {
            "source": "18",
            "target": "17"
          },
          {
            "source": "19",
            "target": "16"
          },
          {
            "source": "19",
            "target": "17"
          },
          {
            "source": "19",
            "target": "18"
          },
          {
            "source": "20",
            "target": "16"
          },
          {
            "source": "20",
            "target": "17"
          },
          {
            "source": "20",
            "target": "18"
          },
          {
            "source": "20",
            "target": "19"
          },
          {
            "source": "21",
            "target": "16"
          },
          {
            "source": "21",
            "target": "17"
          },
          {
            "source": "21",
            "target": "18"
          },
          {
            "source": "21",
            "target": "19"
          },
          {
            "source": "21",
            "target": "20"
          },
          {
            "source": "22",
            "target": "16"
          },
          {
            "source": "22",
            "target": "17"
          },
          {
            "source": "22",
            "target": "18"
          },
          {
            "source": "22",
            "target": "19"
          },
          {
            "source": "22",
            "target": "20"
          },
          {
            "source": "22",
            "target": "21"
          },
          {
            "source": "23",
            "target": "11"
          },
          {
            "source": "23",
            "target": "12"
          },
          {
            "source": "23",
            "target": "16"
          },
          {
            "source": "23",
            "target": "17"
          },
          {
            "source": "23",
            "target": "18"
          },
          {
            "source": "23",
            "target": "19"
          },
          {
            "source": "23",
            "target": "20"
          },
          {
            "source": "23",
            "target": "21"
          },
          {
            "source": "23",
            "target": "22"
          },
          {
            "source": "24",
            "target": "11"
          },
          {
            "source": "24",
            "target": "23"
          },
          {
            "source": "25",
            "target": "11"
          },
          {
            "source": "25",
            "target": "23"
          },
          {
            "source": "25",
            "target": "24"
          },
          {
            "source": "26",
            "target": "11"
          },
          {
            "source": "26",
            "target": "16"
          },
          {
            "source": "26",
            "target": "24"
          },
          {
            "source": "26",
            "target": "25"
          },
          {
            "source": "27",
            "target": "11"
          },
          {
            "source": "27",
            "target": "23"
          },
          {
            "source": "27",
            "target": "24"
          },
          {
            "source": "27",
            "target": "25"
          },
          {
            "source": "27",
            "target": "26"
          },
          {
            "source": "28",
            "target": "11"
          },
          {
            "source": "28",
            "target": "27"
          },
          {
            "source": "29",
            "target": "11"
          },
          {
            "source": "29",
            "target": "23"
          },
          {
            "source": "29",
            "target": "27"
          },
          {
            "source": "30",
            "target": "23"
          },
          {
            "source": "31",
            "target": "11"
          },
          {
            "source": "31",
            "target": "23"
          },
          {
            "source": "31",
            "target": "27"
          },
          {
            "source": "31",
            "target": "30"
          },
          {
            "source": "32",
            "target": "11"
          },
          {
            "source": "33",
            "target": "11"
          },
          {
            "source": "33",
            "target": "27"
          },
          {
            "source": "34",
            "target": "11"
          },
          {
            "source": "34",
            "target": "29"
          },
          {
            "source": "35",
            "target": "11"
          },
          {
            "source": "35",
            "target": "29"
          },
          {
            "source": "35",
            "target": "34"
          },
          {
            "source": "36",
            "target": "11"
          },
          {
            "source": "36",
            "target": "29"
          },
          {
            "source": "36",
            "target": "34"
          },
          {
            "source": "36",
            "target": "35"
          },
          {
            "source": "37",
            "target": "11"
          },
          {
            "source": "37",
            "target": "29"
          },
          {
            "source": "37",
            "target": "34"
          },
          {
            "source": "37",
            "target": "35"
          },
          {
            "source": "37",
            "target": "36"
          },
          {
            "source": "38",
            "target": "11"
          },
          {
            "source": "38",
            "target": "29"
          },
          {
            "source": "38",
            "target": "34"
          },
          {
            "source": "38",
            "target": "35"
          },
          {
            "source": "38",
            "target": "36"
          },
          {
            "source": "38",
            "target": "37"
          },
          {
            "source": "39",
            "target": "25"
          },
          {
            "source": "40",
            "target": "25"
          },
          {
            "source": "41",
            "target": "24"
          },
          {
            "source": "41",
            "target": "25"
          },
          {
            "source": "42",
            "target": "24"
          },
          {
            "source": "42",
            "target": "25"
          },
          {
            "source": "42",
            "target": "41"
          },
          {
            "source": "43",
            "target": "11"
          },
          {
            "source": "43",
            "target": "26"
          },
          {
            "source": "43",
            "target": "27"
          },
          {
            "source": "44",
            "target": "11"
          },
          {
            "source": "44",
            "target": "28"
          },
          {
            "source": "45",
            "target": "28"
          },
          {
            "source": "47",
            "target": "46"
          },
          {
            "source": "48",
            "target": "11"
          },
          {
            "source": "48",
            "target": "25"
          },
          {
            "source": "48",
            "target": "27"
          },
          {
            "source": "48",
            "target": "47"
          },
          {
            "source": "49",
            "target": "11"
          },
          {
            "source": "49",
            "target": "26"
          },
          {
            "source": "50",
            "target": "24"
          },
          {
            "source": "50",
            "target": "49"
          },
          {
            "source": "51",
            "target": "11"
          },
          {
            "source": "51",
            "target": "26"
          },
          {
            "source": "51",
            "target": "49"
          },
          {
            "source": "52",
            "target": "39"
          },
          {
            "source": "52",
            "target": "51"
          },
          {
            "source": "53",
            "target": "51"
          },
          {
            "source": "54",
            "target": "26"
          },
          {
            "source": "54",
            "target": "49"
          },
          {
            "source": "54",
            "target": "51"
          },
          {
            "source": "55",
            "target": "11"
          },
          {
            "source": "55",
            "target": "16"
          },
          {
            "source": "55",
            "target": "25"
          },
          {
            "source": "55",
            "target": "26"
          },
          {
            "source": "55",
            "target": "39"
          },
          {
            "source": "55",
            "target": "41"
          },
          {
            "source": "55",
            "target": "48"
          },
          {
            "source": "55",
            "target": "49"
          },
          {
            "source": "55",
            "target": "51"
          },
          {
            "source": "55",
            "target": "54"
          },
          {
            "source": "56",
            "target": "49"
          },
          {
            "source": "56",
            "target": "55"
          },
          {
            "source": "57",
            "target": "41"
          },
          {
            "source": "57",
            "target": "48"
          },
          {
            "source": "57",
            "target": "55"
          },
          {
            "source": "58",
            "target": "11"
          },
          {
            "source": "58",
            "target": "27"
          },
          {
            "source": "58",
            "target": "48"
          },
          {
            "source": "58",
            "target": "55"
          },
          {
            "source": "58",
            "target": "57"
          },
          {
            "source": "59",
            "target": "48"
          },
          {
            "source": "59",
            "target": "55"
          },
          {
            "source": "59",
            "target": "57"
          },
          {
            "source": "59",
            "target": "58"
          },
          {
            "source": "60",
            "target": "48"
          },
          {
            "source": "60",
            "target": "58"
          },
          {
            "source": "60",
            "target": "59"
          },
          {
            "source": "61",
            "target": "48"
          },
          {
            "source": "61",
            "target": "55"
          },
          {
            "source": "61",
            "target": "57"
          },
          {
            "source": "61",
            "target": "58"
          },
          {
            "source": "61",
            "target": "59"
          },
          {
            "source": "61",
            "target": "60"
          },
          {
            "source": "62",
            "target": "41"
          },
          {
            "source": "62",
            "target": "48"
          },
          {
            "source": "62",
            "target": "55"
          },
          {
            "source": "62",
            "target": "57"
          },
          {
            "source": "62",
            "target": "58"
          },
          {
            "source": "62",
            "target": "59"
          },
          {
            "source": "62",
            "target": "60"
          },
          {
            "source": "62",
            "target": "61"
          },
          {
            "source": "63",
            "target": "48"
          },
          {
            "source": "63",
            "target": "55"
          },
          {
            "source": "63",
            "target": "57"
          },
          {
            "source": "63",
            "target": "58"
          },
          {
            "source": "63",
            "target": "59"
          },
          {
            "source": "63",
            "target": "60"
          },
          {
            "source": "63",
            "target": "61"
          },
          {
            "source": "63",
            "target": "62"
          },
          {
            "source": "64",
            "target": "11"
          },
          {
            "source": "64",
            "target": "48"
          },
          {
            "source": "64",
            "target": "55"
          },
          {
            "source": "64",
            "target": "57"
          },
          {
            "source": "64",
            "target": "58"
          },
          {
            "source": "64",
            "target": "59"
          },
          {
            "source": "64",
            "target": "60"
          },
          {
            "source": "64",
            "target": "61"
          },
          {
            "source": "64",
            "target": "62"
          },
          {
            "source": "64",
            "target": "63"
          },
          {
            "source": "65",
            "target": "48"
          },
          {
            "source": "65",
            "target": "55"
          },
          {
            "source": "65",
            "target": "57"
          },
          {
            "source": "65",
            "target": "58"
          },
          {
            "source": "65",
            "target": "59"
          },
          {
            "source": "65",
            "target": "60"
          },
          {
            "source": "65",
            "target": "61"
          },
          {
            "source": "65",
            "target": "62"
          },
          {
            "source": "65",
            "target": "63"
          },
          {
            "source": "65",
            "target": "64"
          },
          {
            "source": "66",
            "target": "48"
          },
          {
            "source": "66",
            "target": "58"
          },
          {
            "source": "66",
            "target": "59"
          },
          {
            "source": "66",
            "target": "60"
          },
          {
            "source": "66",
            "target": "61"
          },
          {
            "source": "66",
            "target": "62"
          },
          {
            "source": "66",
            "target": "63"
          },
          {
            "source": "66",
            "target": "64"
          },
          {
            "source": "66",
            "target": "65"
          },
          {
            "source": "67",
            "target": "57"
          },
          {
            "source": "68",
            "target": "11"
          },
          {
            "source": "68",
            "target": "24"
          },
          {
            "source": "68",
            "target": "25"
          },
          {
            "source": "68",
            "target": "27"
          },
          {
            "source": "68",
            "target": "41"
          },
          {
            "source": "68",
            "target": "48"
          },
          {
            "source": "69",
            "target": "11"
          },
          {
            "source": "69",
            "target": "24"
          },
          {
            "source": "69",
            "target": "25"
          },
          {
            "source": "69",
            "target": "27"
          },
          {
            "source": "69",
            "target": "41"
          },
          {
            "source": "69",
            "target": "48"
          },
          {
            "source": "69",
            "target": "68"
          },
          {
            "source": "70",
            "target": "11"
          },
          {
            "source": "70",
            "target": "24"
          },
          {
            "source": "70",
            "target": "25"
          },
          {
            "source": "70",
            "target": "27"
          },
          {
            "source": "70",
            "target": "41"
          },
          {
            "source": "70",
            "target": "58"
          },
          {
            "source": "70",
            "target": "68"
          },
          {
            "source": "70",
            "target": "69"
          },
          {
            "source": "71",
            "target": "11"
          },
          {
            "source": "71",
            "target": "25"
          },
          {
            "source": "71",
            "target": "27"
          },
          {
            "source": "71",
            "target": "41"
          },
          {
            "source": "71",
            "target": "48"
          },
          {
            "source": "71",
            "target": "68"
          },
          {
            "source": "71",
            "target": "69"
          },
          {
            "source": "71",
            "target": "70"
          },
          {
            "source": "72",
            "target": "11"
          },
          {
            "source": "72",
            "target": "26"
          },
          {
            "source": "72",
            "target": "27"
          },
          {
            "source": "73",
            "target": "48"
          },
          {
            "source": "74",
            "target": "48"
          },
          {
            "source": "74",
            "target": "73"
          },
          {
            "source": "75",
            "target": "25"
          },
          {
            "source": "75",
            "target": "41"
          },
          {
            "source": "75",
            "target": "48"
          },
          {
            "source": "75",
            "target": "68"
          },
          {
            "source": "75",
            "target": "69"
          },
          {
            "source": "75",
            "target": "70"
          },
          {
            "source": "75",
            "target": "71"
          },
          {
            "source": "76",
            "target": "48"
          },
          {
            "source": "76",
            "target": "58"
          },
          {
            "source": "76",
            "target": "62"
          },
          {
            "source": "76",
            "target": "63"
          },
          {
            "source": "76",
            "target": "64"
          },
          {
            "source": "76",
            "target": "65"
          },
          {
            "source": "76",
            "target": "66"
          }
        ],
        "categories": [
          {
            "name": "A"
          },
          {
            "name": "B"
          },
          {
            "name": "C"
          },
          {
            "name": "D"
          },
          {
            "name": "E"
          },
          {
            "name": "F"
          },
          {
            "name": "G"
          },
          {
            "name": "H"
          },
          {
            "name": "I"
          }
        ]
      }

}
export default config;