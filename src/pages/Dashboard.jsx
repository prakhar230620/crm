import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import { useDashboardData } from '../hooks/useDashboardData';
import { formatStats } from '../utils/statsFormatter';

const Dashboard = () => {
  const { data, loading, error } = useDashboardData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading dashboard data</div>;

  const stats = formatStats(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Dashboard;