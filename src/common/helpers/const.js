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
    link: '/member',
    name: 'Member'
  }
]

export const statusDocument = {
  0: { code: 0, status: 'PENDDING', class: 'danger' },
  1: { code: 1, status: 'CLOSE', class: 'secondary' },
  2: { code: 2, status: 'ACEPTED', class: 'success' },
  3: { code: 3, status: 'REJECTED', class: 'dark' }
}
export const statusMember = {
  0: { code: 0, status: 'BANNED', class: 'danger' },
  1: { code: 1, status: 'ACTIVE', class: 'success' }
}
