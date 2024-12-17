export const getDashboardData = (req, res) => {
  const dashboardData = {
    activeLeads: 234,
    listedProperties: 45,
    closedDeals: 12,
    appointments: 28,
    revenue: 142,
    agentPerformance: 92
  };

  res.json(dashboardData);
};