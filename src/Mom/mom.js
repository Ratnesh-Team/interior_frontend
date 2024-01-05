import React from "react";
import sofa from "./sofa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Home/Sidebar";
import Side from "../Home/Side";



const MinutesOfMeeting = () => {
  const getImageUrl = (itemName) => {
    // Replace this logic with the actual logic to get the image URL based on the item name
    // For example, you might have an object or database that maps item names to image URLs
    // For simplicity, I'm using placeholder URLs here
    const imageUrls = {
      Wardrobe: sofa,
      Matress: sofa,
      "Sleep Well": sofa,
    };

    return imageUrls[itemName] || sofa;
  };

  return (
    <div className="flex">
    <Side/>
    <div className="flex-1 container mx-auto p-4 bg-slate-100  relative  ">
      <div className=" bg-white p-6  shadow-lg mt-2 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 ">Minutes of Meeting</h1>
        <FontAwesomeIcon
          icon={faBell}
          className="text-xl absolute top-12  right-14 text-indigo-800"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2  mt-6 ">
        Discussed layouts for the living and the dining area
      </h2>
      <p className="text-gray-500 ">28 May 2022. Google Meet</p>

      <table className="table-auto w-full mt-4 rounded-lg">
        <thead className=" bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800">
          <tr>
            <th className="border px-4 py-2 w-16 ">Image</th>
            <th className="border px-4 py-2">Material Type</th>
            <th className="border px-4 py-2">Material Code</th>
            <th className="border px-4 py-2">Company Name</th>
            <th className="border px-4 py-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <img
                src={getImageUrl("Wardrobe")}
                alt="Wardrobe"
                className="max-w-full h-auto"
              />
            </td>
            <td className="border px-4 py-2">Laminate</td>
            <td className="border px-4 py-2">AB52E</td>
            <td className="border px-4 py-2">Kajaria</td>
            <td className="border px-4 py-2">Kajaria</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <img
                src={getImageUrl("Matress")}
                alt="Matress"
                className="max-w-full h-auto"
              />
            </td>
            <td className="border px-4 py-2">Laminate</td>
            <td className="border px-4 py-2">AB52E</td>
            <td className="border px-4 py-2">Godrej</td>
            <td className="border px-4 py-2">Kajaria</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <img
                src={getImageUrl("Sleep Well")}
                alt="Sleep Well"
                className="max-w-full h-auto"
              />
            </td>
            <td className="border px-4 py-2">Laminate</td>
            <td className="border px-4 py-2">AB52E</td>
            <td className="border px-4 py-2">Sleep Well</td>
            <td className="border px-4 py-2">Kajaria</td>
          </tr>
        </tbody>
      </table>

      {/* Additional code for displaying the attendee, remarks, and quantities goes here */}
    </div>
    </div>
  );
};

export default MinutesOfMeeting;
