import axios from "axios";
import React, { useEffect, useState } from "react";

function Adminhome() {
  const [Food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // New state for meal counts
  const [mealCounts, setMealCounts] = useState({
    Breakfast: 0,
    Lunch: 0,
    Dinner: 0,
    Total: 0
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/foodlist")
      .then((response) => {
        setFood(response.data);
        calculateMealCounts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching food list:", err);
        setError("Failed to load data. Please try again.");
        setIsLoading(false);
      });
  }, []);
  
  // Function to calculate meal counts
  const calculateMealCounts = (data) => {
    const counts = {
      Breakfast: 0,
      Lunch: 0,
      Dinner: 0,
      Total: 0
    };
    
    data.forEach(item => {
      if (Array.isArray(item.food)) {
        item.food.forEach(meal => {
          if (counts[meal] !== undefined) {
            counts[meal] += 1;
            counts.Total += 1;
          }
        });
      }
    });
    
    setMealCounts(counts);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Hostel Meal Management
        </h1>

        {isLoading ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-500">Loading data...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <>
            {/* Meal count summary */}
            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">
                  Meal Count Summary
                </h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex flex-col items-center">
                    <span className="text-teal-600 font-semibold text-2xl">
                      {mealCounts.Breakfast}
                    </span>
                    <span className="text-teal-800 font-medium mt-1">
                      Breakfast
                    </span>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col items-center">
                    <span className="text-blue-600 font-semibold text-2xl">
                      {mealCounts.Lunch}
                    </span>
                    <span className="text-blue-800 font-medium mt-1">
                      Lunch
                    </span>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex flex-col items-center">
                    <span className="text-purple-600 font-semibold text-2xl">
                      {mealCounts.Dinner}
                    </span>
                    <span className="text-purple-800 font-medium mt-1">
                      Dinner
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                    <span className="text-gray-600 font-semibold text-2xl">
                      {mealCounts.Total}
                    </span>
                    <span className="text-gray-800 font-medium mt-1">
                      Total
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Student selections table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">
                  Student Meal Selections
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Food Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Food && Food.length > 0 ? (
                      Food.map((item, index) => (
                        <tr key={item._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-700">
                                {item.studentname
                                  ? item.studentname.charAt(0).toUpperCase()
                                  : "?"}
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.studentname}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {/* Handle food array display with proper checking */}
                            {Array.isArray(item.food) && item.food.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {item.food.map((meal, i) => (
                                  <span
                                    key={i}
                                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                                      meal === "Breakfast"
                                        ? "bg-teal-100 text-teal-800"
                                        : meal === "Lunch"
                                        ? "bg-blue-100 text-blue-800"
                                        : meal === "Dinner"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-green-100 text-green-800"
                                    }`}
                                  >
                                    {meal}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                                Not specified
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.food === "absent" ? (
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Absent
                              </span>
                            ) : Array.isArray(item.food) && item.food.length > 0 ? (
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Confirmed
                              </span>
                            ) : (
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Pending
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-6 py-4 text-center text-sm text-gray-500"
                        >
                          No meal selection data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Adminhome;
