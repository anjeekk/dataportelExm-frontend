
import { INavbarData } from "./helper";

export const navbarData:INavbarData[]=[

    {
    routeLink: 'dashboard',  
  
    icon:'fas fa-home',
    label:'Dashboard',
    items:[
        {
            routeLink: 'dashboard/jobs',
            label:'Jobs',
        },
        {
            routeLink: 'dashboard/application',
            label:'Application',
        },
        {
            routeLink: 'dashboard/companies',
            label:'Companies',
        },
    ]

    },

    {
        routeLink: 'jobposting',
        icon:'fa fa-user-tie',       
        label:'Jobposting',
        items:[
            {
                routeLink:'jobposting/joblist',
                label:'JobList',

            },
            {
                routeLink:'jobposting/newjob',
                label:'Newjob',

            },

        ]

    },
    {
        routeLink:'vendor',
        icon:' fa fa-solid fa-users',   
        label:'Vendor',
        items:[
            {
                routeLink:'vendor/newvendor',
                label:'New Vendor',

            },
            {
                routeLink:'vendor/vendorprofile',
                label:'Vendor Profile',

            },
            {
                routeLink:'vendor/vendorlist',
                label:'Vendor List',

            },

        ]

    },
    {
        routeLink: 'client',
        icon:'fa fa-duotone fa-user-tie',     
        label:'Client',
        items:[
            {
                routeLink:'client/newclient',
                label:'New Client',

            },
            {
                routeLink:'client/clientlist',
                label:'Client List',

            },

        ]

    },
    {
        routeLink: 'candidate',
        icon:'fa fa-solid fa-user-plus',      
        label:'Candidate',
        items:[
            {
                routeLink:'candidate/newcandidate',
                label:'New Candidate',

            },
            {
                routeLink:'candidate/candidatelist',
                label:'Candidate List',

            },

        ]

    },
    {
        routeLink: 'settings',
        icon: 'fas fa-cog',
        label: 'Settings',
        expanded:false,
        items:[
            {
            routeLink:'settings/profile',
            label:'Profile'
            },
            {
                routeLink:'settings/customize',
                label:'Customize'
                },
        ]
    },

 
    
 
    
];