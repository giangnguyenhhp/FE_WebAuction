import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Identity'
  },
  {
    name: 'Roles',
    url: '/admin/role',
    iconComponent: { name: '' }
  },
  {
    name: 'Users',
    url: '/admin/user',
    iconComponent: { name: '' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Product',
    url: '/admin/product',
    iconComponent: { name: '' },
  },
  {
    name: 'Category',
    url: '/admin/category'
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
