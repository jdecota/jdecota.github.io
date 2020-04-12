export default {
  menus: [
      { key: '/app', title: 'Blog Feed', icon: 'appstore', component: 'BlogFeed' },
      { key: '/app/zo-life', title: 'ZO Organized Life', icon: 'picture',
        subs: [
          { key: '/app/zo-life/financial', title: 'Financials', component: 'ComingSoon',
            subs: [
              { key: '/app/zo-life/financial', title: 'About Financial', component: 'Financial'},
              { key: '/app/zo-life/financial/cash', title: 'Cash Accounts', component: 'BlogFeed' },
              { key: '/app/zo-life/financial/investment', title: 'Investment Accounts', component: 'ComingSoon' },
              { key: '/app/zo-life/financial/vehicle', title: 'Vehicles', component: 'ComingSoon' },
              { key: '/app/zo-life/financial/inventory', title: 'Personal Inventory', component: 'ComingSoon' },
              { key: '/app/zo-life/financial/business', title: 'Business Effects', component: 'ComingSoon' },
              { key: '/app/zo-life/financial/records', title: 'Record Keeping', component: 'ComingSoon' },
              { key: '/app/zo-life/financial/forms', title: 'Financial Forms', component: 'ComingSoon' },
              { key: '/app/zo-life/financial/refs', title: 'Financial References', component: 'ComingSoon' },
              { key: '/app/zo-life/financial/other', title: 'Other Financials', component: 'ComingSoon' },
            ]
          },
          { key: '/app/zo-life/money', title: 'Money Management', component: 'ComingSoon',
            subs: [
            { key: '/app/zo-life/money', title: 'About Money', component: 'Money'},
            { key: '/app/zo-life/money/reports', title: 'Reports', component: 'ComingSoon' },
            { key: '/app/zo-life/money/manage', title: 'Managing Money', component: 'ComingSoon' },
            { key: '/app/zo-life/money/records', title: 'Record Keeping', component: 'ComingSoon' },
            { key: '/app/zo-life/money/forms', title: 'Money Forms', component: 'ComingSoon' },
            { key: '/app/zo-life/money/refs', title: 'Money References', component: 'ComingSoon' },
            ]
          },
          { key: '/app/zo-life/taxes', title: 'ZO Taxes', component: 'ComingSoon',
            subs: [
              { key: '/app/zo-life/taxes', title: 'About Taxes', component: 'Taxes'},
            ]
          },
          { key: '/app/zo-life/insurance', title: 'Insurance', component: 'ComingSoon',
          subs: [
            { key: '/app/zo-life/insurance', title: 'About Insurance', component: 'Insurance'},
          ]
          },
          { key: '/app/zo-life/safe-docs', title: 'Safe Docs', component: 'ComingSoon' ,
            subs: [
              { key: '/app/zo-life/safe-docs', title: 'About Safe Docs', component: 'SafeDocs'},
            ]
          },
        ],
      },
      { key: '/app/zo-home', title: 'ZO Organized Home', icon: 'home', component: 'ComingSoon' },
      { key: '/app/make-a-difference', title: 'Make a Difference', icon: 'copy', component: 'ComingSoon' },
  ],
  others: [
    { key: '/login', title: 'Log In', component: 'Login' },
    { key: '/404', title: 'Not Found', component: 'NotFound' }
  ]
}