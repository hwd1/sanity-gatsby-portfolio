export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e2b528ff808f5b1c84b690f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xzpzm3ks',
                  apiId: 'ab433a8d-c8d0-496e-aacf-4e966da83c3d'
                },
                {
                  buildHookId: '5e2b528ffd28ac73b4c8e40f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-portfolio-web-3z35g9c2',
                  apiId: '0e406db0-9a78-40ac-aa2b-aec249bf50de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hwd1/sanity-gatsby-portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-3z35g9c2.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
