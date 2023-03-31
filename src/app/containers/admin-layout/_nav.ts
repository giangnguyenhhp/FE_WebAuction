import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Identity'
  },
  {
    name: 'Roles',
    url: '/admin/role',
    iconComponent: {name: ''}
  },
  {
    name: 'Users',
    url: '/admin/user',
    iconComponent: {name: ''}
  },
  {
    name: 'Entities Model',
    title: true
  },
  {
    name: 'Product',
    url: '/admin/product',
    iconComponent: {name: ''},
  },
  {
    name: 'Category',
    url: '/admin/category'
  },
  {
    name: 'Lot Product',
    url: '/admin/lot-product'
  },
  {
    name: 'Comment',
    url: '/admin/comment',
  },
  {
    name: 'Card Member',
    url: '/admin/card-member'
  },
  {
    name: 'Contact',
    url: '/admin/contact'
  },
  {
    name: 'Post',
    url: '/admin/post'
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/authentication',
    iconComponent: {name: 'cil-star'},
    children: [
      {
        name: 'Login',
        url: '/authentication/login'
      },
      {
        name: 'Register',
        url: '/authentication/register'
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
