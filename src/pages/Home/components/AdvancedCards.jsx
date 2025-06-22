/* eslint-disable no-unused-vars */
import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Eye,
  BarChart3,
  PieChart,
  Activity,
  User,
  Star,
  Calendar,
} from "lucide-react";

const AdvancedCards = () => {
  // Sample data for charts
  const barData = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 800 },
    { month: "Apr", value: 200 },
    { month: "May", value: 500 },
    { month: "Jun", value: 350 },
    { month: "Jul", value: 450 },
  ];

  const maxValue = Math.max(...barData.map((d) => d.value));

  const MetricCard = ({ icon: Icon, title, value, change, color, bgColor }) => (
    <div
      className={`${bgColor} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      {change && (
        <div className="flex items-center mt-3">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-green-500 text-sm font-medium">{change}</span>
        </div>
      )}
    </div>
  );

  const ChartCard = ({ title, children, className = "" }) => (
    <div
      className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 ${className}`}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );

  const BarChart = ({ data }) => (
    <div className="flex items-end justify-between h-32 space-x-2">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div
            className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm transition-all duration-500 hover:from-purple-600 hover:to-purple-500 animate-pulse"
            style={{ height: `${(item.value / maxValue) * 100}%` }}
          />
          <span className="text-xs text-gray-600 mt-2">{item.month}</span>
        </div>
      ))}
    </div>
  );

  const LineChart = () => (
    <div className="relative h-32">
      <svg className="w-full h-full" viewBox="0 0 300 100">
        <polyline
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          points="0,80 50,60 100,40 150,30 200,50 250,20 300,35"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const DonutChart = ({ percentage = 75 }) => (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 transform -rotate-90">
        <circle
          cx="12"
          cy="12"
          r="10"
          transform="translate(36, 36)"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          transform="translate(36, 36)"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={`${percentage} ${100 - percentage}`}
          className="text-orange-500 animate-pulse"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-900">{percentage}%</span>
      </div>
    </div>
  );

  const TableRow = ({ icon: Icon, name, amount, change, isPositive }) => (
    <div className="flex items-center justify-between py-3 hover:bg-gray-50 px-2 rounded-lg transition-colors duration-200">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <Icon className="w-4 h-4 text-purple-600" />
        </div>
        <span className="text-sm font-medium text-gray-900">{name}</span>
      </div>
      <div className="text-right">
        <div className="text-sm font-semibold text-gray-900">{amount}</div>
        <div
          className={`text-xs ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Advanced Cards
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          NovaDash Admin Template additionally provides 60+ Basic & Advanced
          Cards for eCommerce Analytics, CRM, Statistics, and Interactive
          Charts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            icon={Users}
            title="Subscribers"
            value="92.6k"
            change="+2.2%"
            color="bg-purple-500"
            bgColor="bg-white"
          />
          <MetricCard
            icon={ShoppingCart}
            title="Sessions"
            value="8.53k"
            change="+8.2%"
            color="bg-cyan-500"
            bgColor="bg-white"
          />
          <MetricCard
            icon={Eye}
            title="Page Views"
            value="3.42k"
            change="+3.1%"
            color="bg-orange-500"
            bgColor="bg-white"
          />
          <MetricCard
            icon={DollarSign}
            title="Revenue"
            value="$7713"
            change="+5.2%"
            color="bg-green-500"
            bgColor="bg-white"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Earning Reports */}
          <ChartCard title="Earning Reports" className="lg:col-span-1">
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2">
                {["Yearly", "Monthly", "Weekly", "Yesterday", "Today"].map(
                  (period, index) => (
                    <div
                      key={index}
                      className={`p-2 text-center rounded-lg text-xs transition-colors duration-200 hover:bg-purple-100 ${
                        index === 0
                          ? "bg-purple-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {period}
                    </div>
                  )
                )}
              </div>
              <BarChart data={barData} />
            </div>
          </ChartCard>

          {/* Transactions */}
          <ChartCard title="Transactions" className="lg:col-span-1">
            <div className="space-y-4">
              <div className="space-y-2">
                {[
                  { name: "Wallet", color: "bg-purple-500", amount: "-$75" },
                  {
                    name: "Bank Transfer",
                    color: "bg-cyan-500",
                    amount: "+$480",
                  },
                  { name: "Paypal", color: "bg-pink-500", amount: "+$590" },
                  {
                    name: "Mastercard",
                    color: "bg-orange-500",
                    amount: "-$12",
                  },
                  { name: "Transfer", color: "bg-green-500", amount: "+$98" },
                ].map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 ${transaction.color} rounded-full`}
                      ></div>
                      <span className="text-sm text-gray-900">
                        {transaction.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>

          {/* Monthly Campaign State */}
          <ChartCard title="Monthly Campaign State" className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Emails</span>
                <span className="text-sm font-semibold">12.1k</span>
                <span className="text-xs text-green-500">+0.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Opened</span>
                <span className="text-sm font-semibold">12.8k</span>
                <span className="text-xs text-green-500">+2.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Clicked</span>
                <span className="text-sm font-semibold">1.56k</span>
                <span className="text-xs text-red-500">-1.4%</span>
              </div>
              <div className="h-32 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <BarChart data={barData.slice(0, 5)} />
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Growth */}
          <ChartCard title="Revenue Growth" className="lg:col-span-1">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-gray-900">$75240</div>
              <LineChart />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">2020</span>
                  <div className="font-semibold">$50.5k</div>
                  <span className="text-green-500 text-xs">+2.1%</span>
                </div>
                <div>
                  <span className="text-gray-600">2021</span>
                  <div className="font-semibold">$84.9k</div>
                  <span className="text-green-500 text-xs">+8.1%</span>
                </div>
              </div>
            </div>
          </ChartCard>

          {/* Earnings */}
          <ChartCard title="Earnings" className="lg:col-span-1">
            <div className="space-y-4">
              <div className="text-center">
                <DonutChart percentage={75} />
                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900">$7849</div>
                  <div className="text-sm text-gray-600">
                    Earning this month
                  </div>
                  <div className="text-green-500 text-sm">
                    +4.2% than last month
                  </div>
                </div>
              </div>
            </div>
          </ChartCard>

          {/* Earning Reports */}
          <ChartCard title="Earning Reports" className="lg:col-span-1">
            <div className="space-y-3">
              <TableRow
                icon={User}
                name="Total Trading"
                amount="1.85k"
                change="+24.0%"
                isPositive={true}
              />
              <TableRow
                icon={Star}
                name="Total Income"
                amount="5.47k"
                change="+38.6%"
                isPositive={true}
              />
              <TableRow
                icon={Activity}
                name="Total Expenses"
                amount="365"
                change="-18.9%"
                isPositive={false}
              />
              <div className="h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                <BarChart data={barData.slice(0, 4)} />
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Overview */}
          <ChartCard title="Sales Overview">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Last 28 Days</span>
                <span className="text-2xl font-bold text-gray-900">$1,258</span>
              </div>
              <LineChart />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">86.2k</div>
                  <div className="text-xs text-gray-600">Orders</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">$52.5k</div>
                  <div className="text-xs text-gray-600">Sales</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">256</div>
                  <div className="text-xs text-gray-600">Profit</div>
                </div>
              </div>
            </div>
          </ChartCard>

          {/* Congratulations John */}
          <ChartCard title="Congratulations John! 🎉">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Best seller of the month
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  $48.9k
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  78% of target 🚀
                </div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors duration-200">
                  View Sales
                </button>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCards;
