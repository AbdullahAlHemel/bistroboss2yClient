import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaAddressBook, FaListCheck, FaUsers } from 'react-icons/fa6';
import { FaDollarSign } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, } from 'recharts';
import { PieChart, Pie } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: stats = {}}  = useQuery({
        queryKey:['/admin-stats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
   
    const {data: chartData = []} = useQuery({
        queryKey: ['order-stats'],
        queryFn:async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })


    //custom shape-ar
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      //custom shape of pie Chart
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );};

        const pieChartData = chartData.map(data => {
            return {name: data.category, value:data.revenue}
        })
      
    return (
        <>
        <div className=''>

            <h2>
                <span>Hi, Welcome  </span>
                {
                    user?.displayName ? user.displayName : 'welcome'
                }
            </h2>
            <div className="stats shadow">
        <div className="stat">
            <div className="stat-figure text-secondary ">
                <FaDollarSign className='text-4xl'></FaDollarSign>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats.revenue}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
            <div className="stat-figure text-secondary">
               <FaUsers className='text-4xl'></FaUsers>
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{stats.users}</div>
            <div className="stat-desc">↗︎ (22%)</div>
        </div>

        <div className="stat">
            <div className="stat-figure text-secondary">
              <FaAddressBook className='text-3xl'></FaAddressBook>
            </div>
            <div className="stat-title">Total Orders</div>
            <div className="stat-value">{stats.orders}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
            <div className="stat-figure text-secondary">
              <FaListCheck className='text-3xl'></FaListCheck>
            </div>
            <div className="stat-title">Total Products</div>
            <div className="stat-value">{stats.menuItems}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        </div>
       </div>
       <div className='flex'>
            <div className="w-1/2 mt-24">
            <BarChart
                width={400}
                height={250}
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            </div>

             <div className="w-1/2">
             <PieChart width={400} height={400}>
            <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % COLORS.length]} />
                ))}
            </Pie>
             <Legend/>
            </PieChart>
             </div>
       </div>
       </>
       
    )
};

export default AdminHome;