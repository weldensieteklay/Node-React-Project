import Logout from '../components/common/Logout';
import Profile from '../components/common/Profile';
import Users from '../components/Users/Users'
import AddBalance from '../components/purchases/Add-Balance'
import Purchases from '../components/purchases/Purchases';
import Calls from '../components/call/CallHistory';
const routesConfig = [
    {
        path: '/add-balance',
        component: AddBalance,
        label: 'Add Balance',
        group: ['Add Balance']
    },
    {
        path: '/purchases',
        component: Purchases,
        label: 'Purchases',
        group: ['Purchases']
    },
    {
        path: '/call',
        component: Calls,
        label: 'Calls',
        group: ['Calls']
    },
    {
        path: '/profile',
        component: Profile,
        label: 'Profile',
        group: ['authentication']
    },
    {
        path: '/logout',
        component: Logout,
        label: 'Logout',
        group: ['authentication']
    },
    {
        path: '/users',
        component: Users,
        label: 'Users',
        group: ['admin']
    },
];

export default routesConfig;