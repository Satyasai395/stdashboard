import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare

    
}from '@iconscout/react-unicons';
export const SidebarData=[
    {
        icon:UilEstate,
        heading:"Dashboard",
    },
    {
        icon:UilClipboardAlt,
        heading:"My Attendence",
    },
    {
        icon:UilUsersAlt,
        heading:"Test Results",
    },
    {
        icon:UilPackage,
        heading:"Mock Interviews",
    },
    {
        icon:UilChart,
        heading:"Performance",
    }, 
]

export const Cardsdata=[
    // {
    //     title:'Attendence',
    //     color:{
    //         backGround: 'linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)',
    //         boxShadow:'0px 10px 20px 0px #e0c6f5',
    //     },
    //     barValue:20,value:'25,970',png:UilUsdSquare,
    //     series:[
    //         {
    //             name:'Attendence',
    //             data:[1,40,28,51,42,109,100]
    //         }
    //     ]

    // },
    {
        title: "Test Results",
        color: {
          backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
          boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
          {
            name: "Test Results",
            data: [10, 100, 50, 70, 80, 30, 40],
          },
        ],
      },
      {
        title: "Mock",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
          {
            name: "Mock",
            data: [10, 25, 15, 30, 12, 15, 20],
          },
          
        ],
      },
]

export const attenddata=[
  {
    title:'Attendence',
    color:{
        backGround: 'linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)',
        boxShadow:'0px 10px 20px 0px #e0c6f5',
    },
    barValue:20,value:'25,970',png:UilUsdSquare,
    series:[
        {
            name:'Attendence',
            data:[1,40,28,51,42,109,100]
        }
    ]

},
]

