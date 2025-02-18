import React, { useState } from 'react'
import { FiBell, FiUser } from 'react-icons/fi'
import { motion } from 'framer-motion'
import GlobalSearchPanel from './components/GlobalSearchPanel'
import ProductCard from './components/ProductCard'
import SellerTips from './components/SellerTips'
import DashboardMetrics from './components/DashboardMetrics'
import AddNewProductButton from './components/AddNewProductButton'
import TodoList from './components/TodoList'
import RecentOrders from './components/RecentOrders'
import BottomNav from './components/BottomNav'
import { products } from './data/products'
import DailySalesGraph from './components/DailySalesGraph'
import MyOrders from './components/MyOrders'
import MyProducts from './components/MyProducts'
import ProfilePage from './components/ProfilePage'
import AccountDetailsPage from './components/profile-pages/AccountDetailsPage';
import AddressDetailsPage from './components/profile-pages/AddressDetailsPage';
import MyBillsPage from './components/profile-pages/MyBillsPage';
import OrderSummaryStatsPage from './components/profile-pages/OrderSummaryStatsPage';
import SellerSupportPage from './components/profile-pages/SellerSupportPage';
import PrivacyPolicyPage from './components/profile-pages/PrivacyPolicyPage';
import TermsConditionPage from './components/profile-pages/TermsConditionPage';
import PreferencesPage from './components/profile-pages/PreferencesPage';
import ReferAppPage from './components/profile-pages/ReferAppPage';
import MyStatementsPage from './components/profile-pages/MyStatementsPage';
import SellerScorePage from './components/profile-pages/SellerScorePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useAuth } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function AppContent({ searchQuery, activePage, handleSearch }) {
  const { user, signOut } = useAuth();

    if (!user) {
      return <Navigate to="/signin" />;
    }

  return (
    <>
      <motion.nav
        className="bg-white shadow-sm p-2"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-agri-green text-lg font-bold">AgriSeller Pro</h1>
          <div className="flex items-center space-x-2">
            <motion.button
              className="p-1 hover:bg-agri-gray rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiBell className="text-base text-agri-green" />
            </motion.button>
            <motion.button
              className="p-1 hover:bg-agri-gray rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => signOut()}
            >
              <FiUser className="text-base text-agri-green" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

     {activePage === 'home' && <GlobalSearchPanel onSearch={handleSearch} setActivePage={setActivePage} />}

      <main className="p-2 space-y-3 pb-14">
        {activePage === 'home' ? (
          <>
            <SellerTips />
            <DashboardMetrics />
            <DailySalesGraph />
            <AddNewProductButton />
            <TodoList />
            <RecentOrders />
            <div className="bg-white rounded-lg overflow-hidden">
              <h2 className="font-bold text-lg p-3 border-b border-gray-100">Top Selling Products</h2>
              <div className="divide-y divide-gray-100 max-h-[300px] overflow-y-auto">
                {products.filter(product =>
                  product.name.toLowerCase().includes(searchQuery) ||
                  product.category.toLowerCase().includes(searchQuery)
                ).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </>
        ) : activePage === 'orders' ? (
          <MyOrders />
        ) : activePage === 'products' ? (
          <MyProducts />
        ) : activePage === 'profile' ? (
          <ProfilePage setActivePage={setActivePage} />
        ) : activePage === 'accountDetails' ? (
          <AccountDetailsPage />
        ) : activePage === 'addressDetails' ? (
          <AddressDetailsPage />
        ) : activePage === 'myBills' ? (
          <MyBillsPage />
        ) : activePage === 'orderSummaryStats' ? (
          <OrderSummaryStatsPage />
        ) : activePage === 'sellerSupport' ? (
          <SellerSupportPage />
        ) : activePage === 'privacyPolicy' ? (
          <PrivacyPolicyPage />
        ) : activePage === 'termsCondition' ? (
          <TermsConditionPage />
        ) : activePage === 'preferences' ? (
          <PreferencesPage />
        ) : activePage === 'referApp' ? (
          <ReferAppPage />
        ) : activePage === 'myStatements' ? (
          <MyStatementsPage />
        ) : activePage === 'sellerScore' ? (
          <SellerScorePage />
        ) : null}
      </main>

      <BottomNav setActivePage={setActivePage} activePage={activePage} />
    </>
  )
}


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState('home');
  const { user } = useAuth();

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };



  return (
      <Routes>
        <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
        <Route path="/signup" element={user ? <Navigate to="/" />:<SignUp />} />
        <Route path="/" element={<AppContent searchQuery={searchQuery} activePage={activePage} handleSearch={handleSearch} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
}
