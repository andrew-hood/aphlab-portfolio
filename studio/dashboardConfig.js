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
                  buildHookId: '6120e488df9c78cae9e749c0',
                  title: 'Sanity Studio',
                  name: 'aphlab-portfolio-studio',
                  apiId: 'bce873de-3c91-4c44-bdbc-68bfc419d4f3'
                },
                {
                  buildHookId: '6120e488b40c0ed0e1f23852',
                  title: 'Blog Website',
                  name: 'aphlab-portfolio',
                  apiId: '813995e4-9dae-487e-95d1-53ca7713f3d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrew-hood/aphlab-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://aphlab-portfolio.netlify.app', category: 'apps'}
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
