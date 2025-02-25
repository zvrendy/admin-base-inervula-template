import ProductImage from '@/Assets/product-image.jpg';
import ProfileImage from '@/Assets/profile-image.jpg';
import { useTheme } from '@/Components/UseTheme';
import AppLayout from '@/Layouts/AppLayout';
import { Footer } from '@/Layouts/Partials/Footer';
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const overviewData = [
    {
        name: 'Jan',
        total: 1500,
    },
    {
        name: 'Feb',
        total: 2000,
    },
    {
        name: 'Mar',
        total: 1000,
    },
    {
        name: 'Apr',
        total: 5000,
    },
    {
        name: 'May',
        total: 2000,
    },
    {
        name: 'Jun',
        total: 5900,
    },
    {
        name: 'Jul',
        total: 2000,
    },
    {
        name: 'Aug',
        total: 5500,
    },
    {
        name: 'Sep',
        total: 2000,
    },
    {
        name: 'Oct',
        total: 4000,
    },
    {
        name: 'Nov',
        total: 1500,
    },
    {
        name: 'Dec',
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: 'Olivia Martin',
        email: 'olivia.martin@email.com',
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: 'James Smith',
        email: 'james.smith@email.com',
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: 'Sophia Brown',
        email: 'sophia.brown@email.com',
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: 'Noah Wilson',
        email: 'noah.wilson@email.com',
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: 'Emma Jones',
        email: 'emma.jones@email.com',
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: 'William Taylor',
        email: 'william.taylor@email.com',
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: 'Isabella Johnson',
        email: 'isabella.johnson@email.com',
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: 'Wireless Headphones',
        image: ProductImage,
        description: 'High-quality noise-canceling wireless headphones.',
        price: 99.99,
        status: 'In Stock',
        rating: 4.5,
    },
    {
        number: 2,
        name: 'Smartphone',
        image: ProductImage,
        description: 'Latest 5G smartphone with excellent camera features.',
        price: 799.99,
        status: 'In Stock',
        rating: 4.7,
    },
    {
        number: 3,
        name: 'Gaming Laptop',
        image: ProductImage,
        description: 'Powerful gaming laptop with high-end graphics.',
        price: 1299.99,
        status: 'In Stock',
        rating: 4.8,
    },
    {
        number: 4,
        name: 'Smartwatch',
        image: ProductImage,
        description: 'Stylish smartwatch with fitness tracking features.',
        price: 199.99,
        status: 'Out of Stock',
        rating: 4.4,
    },
    {
        number: 5,
        name: 'Bluetooth Speaker',
        image: ProductImage,
        description: 'Portable Bluetooth speaker with deep bass sound.',
        price: 59.99,
        status: 'In Stock',
        rating: 4.3,
    },
    {
        number: 6,
        name: '4K Monitor',
        image: ProductImage,
        description: 'Ultra HD 4K monitor with stunning color accuracy.',
        price: 399.99,
        status: 'In Stock',
        rating: 4.6,
    },
    {
        number: 7,
        name: 'Mechanical Keyboard',
        image: ProductImage,
        description: 'Mechanical keyboard with customizable RGB lighting.',
        price: 89.99,
        status: 'In Stock',
        rating: 4.7,
    },
    {
        number: 8,
        name: 'Wireless Mouse',
        image: ProductImage,
        description: 'Ergonomic wireless mouse with precision tracking.',
        price: 49.99,
        status: 'In Stock',
        rating: 4.5,
    },
    {
        number: 9,
        name: 'Action Camera',
        image: ProductImage,
        description: 'Waterproof action camera with 4K video recording.',
        price: 249.99,
        status: 'In Stock',
        rating: 4.8,
    },
    {
        number: 10,
        name: 'External Hard Drive',
        image: ProductImage,
        description: 'Portable 2TB external hard drive for data storage.',
        price: 79.99,
        status: 'Out of Stock',
        rating: 4.5,
    },
];

export default function Dashboard() {
    const { theme, setTheme } = useTheme();
    return (
        <AppLayout>
            <div className="flex flex-col gap-y-4">
                <h1 className="title">Dashboard</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                <Package size={26} />
                            </div>
                            <p className="card-title">Total Products</p>
                        </div>
                        <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                                25,154
                            </p>
                            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                <TrendingUp size={18} />
                                25%
                            </span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                <DollarSign size={26} />
                            </div>
                            <p className="card-title">Total Paid Orders</p>
                        </div>
                        <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                                $16,000
                            </p>
                            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                <TrendingUp size={18} />
                                12%
                            </span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                <Users size={26} />
                            </div>
                            <p className="card-title">Total Customers</p>
                        </div>
                        <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                                15,400
                            </p>
                            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                <TrendingUp size={18} />
                                15%
                            </span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                <CreditCard size={26} />
                            </div>
                            <p className="card-title">Sales</p>
                        </div>
                        <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                                12,340
                            </p>
                            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                <TrendingUp size={18} />
                                19%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                        <div className="card-header">
                            <p className="card-title">Overview</p>
                        </div>
                        <div className="card-body p-0">
                            <ResponsiveContainer
                                width="100%"
                                height={300}
                            >
                                <AreaChart
                                    data={overviewData}
                                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient
                                            id="colorTotal"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#2563eb"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#2563eb"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip
                                        cursor={false}
                                        formatter={(value) => `$${value}`}
                                    />

                                    <XAxis
                                        dataKey="name"
                                        strokeWidth={0}
                                        stroke={theme === 'light' ? '#475569' : '#94a3b8'}
                                        tickMargin={6}
                                    />
                                    <YAxis
                                        dataKey="total"
                                        strokeWidth={0}
                                        stroke={theme === 'light' ? '#475569' : '#94a3b8'}
                                        tickFormatter={(value) => `$${value}`}
                                        tickMargin={6}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="total"
                                        stroke="#2563eb"
                                        fillOpacity={1}
                                        fill="url(#colorTotal)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                        <div className="card-header">
                            <p className="card-title">Recent Sales</p>
                        </div>
                        <div className="card-body h-[300px] overflow-auto p-0">
                            {recentSalesData.map((sale) => (
                                <div
                                    key={sale.id}
                                    className="flex items-center justify-between gap-x-4 py-2 pr-2"
                                >
                                    <div className="flex items-center gap-x-4">
                                        <img
                                            src={sale.image}
                                            alt={sale.name}
                                            className="size-10 flex-shrink-0 rounded-full object-cover"
                                        />
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-slate-900 dark:text-slate-50">${sale.total}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <p className="card-title">Top Orders</p>
                    </div>
                    <div className="card-body p-0">
                        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                            <table className="table">
                                <thead className="table-header">
                                    <tr className="table-row">
                                        <th className="table-head">#</th>
                                        <th className="table-head">Product</th>
                                        <th className="table-head">Price</th>
                                        <th className="table-head">Status</th>
                                        <th className="table-head">Rating</th>
                                        <th className="table-head">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {topProducts.map((product) => (
                                        <tr
                                            key={product.number}
                                            className="table-row"
                                        >
                                            <td className="table-cell">{product.number}</td>
                                            <td className="table-cell">
                                                <div className="flex w-max gap-x-4">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="size-14 rounded-lg object-cover"
                                                    />
                                                    <div className="flex flex-col">
                                                        <p>{product.name}</p>
                                                        <p className="font-normal text-slate-600 dark:text-slate-400">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-cell">${product.price}</td>
                                            <td className="table-cell">{product.status}</td>
                                            <td className="table-cell">
                                                <div className="flex items-center gap-x-2">
                                                    <Star
                                                        size={18}
                                                        className="fill-yellow-600 stroke-yellow-600"
                                                    />{' '}
                                                    {product.rating}
                                                </div>
                                            </td>
                                            <td className="table-cell">
                                                <div className="flex items-center gap-x-4">
                                                    <button className="text-blue-500 dark:text-blue-600">
                                                        <PencilLine size={20} />
                                                    </button>
                                                    <button className="text-red-500">
                                                        <Trash size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </AppLayout>
    );
}
