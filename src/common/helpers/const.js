export const asideMenu = [
  {
    icon: 'fa-tasks',
    link: '/document',
    name: 'Document'
  },
  {
    icon: 'fa-dollar',
    link: '/profile',
    name: 'Profile'
  },
  {
    icon: 'fa-dollar',
    link: '/',
    name: 'Member'
  }
]

export const statusDocument = {
  1: { code: 1, status: 'PENDDING', class: 'danger' },
  2: { code: 2, status: 'CLOSE', class: 'secondary' },
  3: { code: 3, status: 'ACEPTED', class: 'success' },
  4: { code: 4, status: 'REJECTED', class: 'dark' }
}
