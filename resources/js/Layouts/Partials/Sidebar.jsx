import logoDark from '@/Assets/logo-dark.svg';
import logoLight from '@/Assets/logo-light.svg';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import {
    ChartColumn,
    Home,
    NotepadText,
    Package,
    PackagePlus,
    Settings,
    ShoppingBag,
    UserCheck,
    UserPlus,
    Users,
} from 'lucide-react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const navbarLinks = [
    {
        title: 'Dashboard',
        links: [
            {
                label: 'Dashboard',
                icon: Home,
                path: '/',
            },
            {
                label: 'Analytics',
                icon: ChartColumn,
                path: '/',
            },
            {
                label: 'Reports',
                icon: NotepadText,
                path: '/',
            },
        ],
    },
    {
        title: 'Customers',
        links: [
            {
                label: 'Customers',
                icon: Users,
                path: '/',
            },
            {
                label: 'New Customer',
                icon: UserPlus,
                path: '/',
            },
            {
                label: 'Verified Customers',
                icon: UserCheck,
                path: '/',
            },
        ],
    },
    {
        title: 'Products',
        links: [
            {
                label: 'Products',
                icon: Package,
                path: '/',
            },
            {
                label: 'New Product',
                icon: PackagePlus,
                path: '/',
            },
            {
                label: 'Inventory',
                icon: ShoppingBag,
                path: '/',
            },
        ],
    },
    {
        title: 'Settings',
        links: [
            {
                label: 'Settings',
                icon: Settings,
                path: '/',
            },
        ],
    },
];

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn(
                'fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900',
                collapsed ? 'md:w-[70px]' : 'md:-w-[240px]',
                collapsed ? 'max-md:-left-full' : 'max-md:left-0',
            )}
        >
            <div className="flex gap-x-3 p-5">
                <img
                    src={logoLight}
                    alt="logolight"
                    className="dark:hidden"
                />
                <img
                    src={logoDark}
                    alt="logodark"
                    className="hidden dark:block"
                />
                {!collapsed && (
                    <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Logo</p>
                )}
            </div>
            <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
                {navbarLinks.map((navbarLink) => (
                    <nav
                        className={cn('sidebar-group', collapsed && 'md:items-center')}
                        key={navbarLink.title}
                    >
                        <p className={cn('sidebar-group-title', collapsed && 'md:w-[45px]')}>{navbarLink.title}</p>
                        {navbarLink.links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.path}
                                className={cn('sidebar-item', collapsed && 'md:w-[45px]')}
                            >
                                <link.icon
                                    size={22}
                                    className="flex-shrink-0"
                                />
                                {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </Link>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
