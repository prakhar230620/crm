import React from 'react';
import StatCard from './StatCard';
import { useDashboardData } from '../hooks/useDashboardData';

const Dashboard = () => {
  const { data, loading, error } = useDashboardData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading dashboard data</div>;

  const stats = [
    {
      title: 'Active Leads',
      value: data.activeLeads,
      change: '+14%',
      icon: '👥'
    },
    {
      title: 'Listed Properties',
      value: data.listedProperties,
      change: '+5%',
      icon: '🏢'
    },
    {
      title: 'Closed Deals',
      value: data.closedDeals,
      change: '+23%',
      icon: '📈'
    },
    {
      title: 'Appointments',
      value: data.appointments,
      change: '+8%',
      icon: '📅'
    },
    {
      title: 'Revenue',
      value: `$${data.revenue}K`,
      change: '+18%',
      icon: '💰'
    },
    {
      title: 'Agent Performance',
      value: `${data.agentPerformance}%`,
      change: '+4%',
      icon: '📊'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Dashboard;