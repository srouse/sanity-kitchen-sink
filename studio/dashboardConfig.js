export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '627010e1d5907a005e11ed10',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ksu3dwxi',
                  apiId: '35c8fe82-f71c-4926-ba00-c8a7ef2ad92e'
                },
                {
                  buildHookId: '627010e14d1da100a94e8262',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xwkjizv7',
                  apiId: 'df2dd0cb-36e8-4d47-9d78-50ce4f9d2290'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srouse/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xwkjizv7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
