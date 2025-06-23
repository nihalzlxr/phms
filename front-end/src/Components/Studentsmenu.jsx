import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function Studentsmenu() {
  // Change to an object to track multiple selections
  const [selectedMeals, setSelectedMeals] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false
  });

  const user = JSON.parse(localStorage.getItem("user"));
  
  const handlesubmit =(e)=>{
    e.preventDefault();
    axios.post(`${import.meta.env.BACKEND_URL}/order`, 
      {studentname : user.studentname,
        food :selectedMealNames
      }
    )
    alert("Your order has been placed successfully!");

  }


  // Handle toggling meal selections
  const toggleMeal = (meal) => {
    setSelectedMeals(prev => ({
      ...prev,
      [meal]: !prev[meal]
    }));
  };

  // Get array of selected meal names for display
  const selectedMealNames = Object.keys(selectedMeals).filter(meal => selectedMeals[meal]);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-600">Today's Hostel Menu</h1>
      
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Breakfast Card */}
        <div className={`flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] ${selectedMeals.Breakfast ? "ring-2 ring-teal-500" : ""}`}>
          <div className="relative sm:w-1/3">
            <img 
              src="breakfast.png" 
              alt="Breakfast" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 bg-teal-500 text-white px-4 py-2 rounded-br-lg font-medium">
              Breakfast
            </div>
          </div>
          
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Morning Meal</h2>
              <div className="space-y-1 mb-3">
                <p className="text-sm text-gray-600">• Bread, Eggs & Fresh Fruits</p>
                <p className="text-sm text-gray-600">• Tea, Coffee & Juice Options</p>
              </div>
              <p className="text-sm text-gray-500">
                Served from 7:00 AM - 9:00 AM
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                className={`px-4 py-2 ${selectedMeals.Breakfast ? "bg-green-600 hover:bg-green-700" : "bg-teal-500 hover:bg-teal-600"} text-white rounded-lg flex items-center justify-center transition-colors duration-200 flex-1`}
                onClick={() => toggleMeal("Breakfast")}
              >
                {selectedMeals.Breakfast ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Selected
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Select Breakfast
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Lunch Card */}
        <div className={`flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] ${selectedMeals.Lunch ? "ring-2 ring-blue-500" : ""}`}>
          <div className="relative sm:w-1/3">
            <img 
              src="lunch.png" 
              alt="Lunch" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 bg-blue-500 text-white px-4 py-2 rounded-br-lg font-medium">
              Lunch
            </div>
          </div>
          
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Afternoon Meal</h2>
              <div className="space-y-1 mb-3">
                <p className="text-sm text-gray-600">• Rice, Curry & Protein Option</p>
                <p className="text-sm text-gray-600">• Fresh Salad & Seasonal Fruits</p>
              </div>
              <p className="text-sm text-gray-500">
                Served from 12:00 PM - 2:00 PM
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                className={`px-4 py-2 ${selectedMeals.Lunch ? "bg-green-600 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-600"} text-white rounded-lg flex items-center justify-center transition-colors duration-200 flex-1`}
                onClick={() => toggleMeal("Lunch")}
              >
                {selectedMeals.Lunch ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Selected
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Select Lunch
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dinner Card */}
        <div className={`flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] ${selectedMeals.Dinner ? "ring-2 ring-purple-500" : ""}`}>
          <div className="relative sm:w-1/3">
            <img 
              src="dinner.png" 
              alt="Dinner" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 bg-purple-500 text-white px-4 py-2 rounded-br-lg font-medium">
              Dinner
            </div>
          </div>
          
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Evening Meal</h2>
              <div className="space-y-1 mb-3">
                <p className="text-sm text-gray-600">• Pasta/Noodles & Protein</p>
                <p className="text-sm text-gray-600">• Soup & Dessert of the Day</p>
              </div>
              <p className="text-sm text-gray-500">
                Served from 7:00 PM - 9:00 PM
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                className={`px-4 py-2 ${selectedMeals.Dinner ? "bg-green-600 hover:bg-green-700" : "bg-purple-500 hover:bg-purple-600"} text-white rounded-lg flex items-center justify-center transition-colors duration-200 flex-1`}
                onClick={() => toggleMeal("Dinner")}
              >
                {selectedMeals.Dinner ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Selected
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Select Dinner
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Current Selection Display */}
      {selectedMealNames.length > 0 && (
        <div className="mt-8 p-5 bg-green-50 rounded-lg shadow-md border border-green-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Selections</h3>
          <p className="text-green-700 font-medium">
            You have selected: 
            <span className="font-bold"> {selectedMealNames.join(", ")}</span>
          </p>
        </div>
      )}

      {/* Submit Button */}
      {selectedMealNames.length > 0 && (
        <div className="mt-4 flex justify-end">
          <button 
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
            onClick={handlesubmit}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Confirm Selections
          </button>
        </div>
      )}

      <div className="mt-8 p-5 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Special Notes</h3>
        <p className="text-gray-600">
          • Special dietary requirements can be accommodated with 24-hour notice<br />
          • Weekend menu may vary<br />
          • Feedback on meals is highly appreciated<br />
          • You can select multiple meals for the day
        </p>
      </div>
    </div>
  )
}

export default Studentsmenu