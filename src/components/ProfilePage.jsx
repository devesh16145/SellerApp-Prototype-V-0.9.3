import React from 'react';
import {
  FiUser,
  FiMapPin,
  FiFileText,
  FiBarChart,
  FiLifeBuoy,
  FiLogOut,
  FiShieldOff,
  FiFile,
  FiSettings,
  FiShare2,
  FiList,
  FiStar,
  FiChevronRight, // For right arrow
  FiMessageSquare, // Example icon for Support
  FiBookOpen, // Example icon for University
  FiShoppingBag, // Example icon for My Products
  FiFileMinus, // Example icon for My Bills
  FiTrendingUp, // Example icon for Order Summary Stats
  FiBook, // Example icon for Terms and Condition
  FiSliders, // Example icon for Preferences
} from 'react-icons/fi'; // Importing icons from react-icons


export default function ProfilePage({ setActivePage }) {
  return (
    <div className="w-full"> {/* Setting width to full here */}
      <div className="bg-white rounded-none shadow-sm border"> {/* Full width panel, removed rounded corners */}
        <div className="p-4">
          {/* My Account Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-1">My account</h2>
            <p className="text-gray-600">8130913368</p> {/* Replace with actual seller ID if available */}
          </div>

          {/* Top Blocks - Seller Support, Leaderboard, University */}
          <div className="flex space-x-2 mb-4">
            <div className="flex-1 bg-agri-gray p-3 rounded-md flex flex-col items-center justify-center">
              <FiMessageSquare className="text-xl text-agri-green mb-1" />
              <span className="text-sm">Support</span>
            </div>
            <div className="flex-1 bg-agri-gray p-3 rounded-md flex flex-col items-center justify-center">
              <FiStar className="text-xl text-agri-green mb-1" /> {/* Using star for leaderboard, consider a more specific icon */}
              <span className="text-sm">Leaderboard</span>
            </div>
            <div className="flex-1 bg-agri-gray p-3 rounded-md flex flex-col items-center justify-center">
              <FiBookOpen className="text-xl text-agri-green mb-1" />
              <span className="text-sm">University</span>
            </div>
          </div>

          {/* YOUR INFORMATION Section */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">YOUR INFORMATION</h3>
            <div className="divide-y divide-gray-100">
              <button onClick={() => setActivePage('accountDetails')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiUser /></span>
                  <span>Account Details (Personal + Business)</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('addressDetails')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiMapPin /></span>
                  <span>Address Details</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('orders')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiList /></span>
                  <span>My Orders</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('products')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiShoppingBag /></span>
                  <span>My Products</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('myBills')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiFileMinus /></span>
                  <span>My Bills</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* ACCOUNT SETTINGS Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">ACCOUNT SETTINGS</h3>
            <div className="divide-y divide-gray-100">
              <button onClick={() => setActivePage('orderSummaryStats')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiTrendingUp /></span>
                  <span>Order Summary and Stats</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('sellerSupport')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiMessageSquare /></span>
                  <span>Seller Support</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button  className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiLogOut /></span>
                  <span>Log Out</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('privacyPolicy')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiShieldOff /></span>
                  <span>Privacy Policy</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('termsCondition')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiBook /></span>
                  <span>Terms and Condition</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('preferences')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiSliders /></span>
                  <span>Preferences</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('referApp')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiShare2 /></span>
                  <span>Refer App</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('myStatements')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiFileText /></span>
                  <span>My Statements</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
              <button onClick={() => setActivePage('sellerScore')} className="flex w-full p-3 text-left hover:bg-agri-gray justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-agri-green"><FiStar /></span>
                  <span>Seller Score</span>
                </div>
                <FiChevronRight className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
