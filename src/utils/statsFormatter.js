export const formatStats = (data) => {
  return [
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
};