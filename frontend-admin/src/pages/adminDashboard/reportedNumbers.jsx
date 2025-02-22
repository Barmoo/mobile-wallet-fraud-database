import React, { useState } from 'react';
import { CalendarIcon, ChevronDown, ExternalLink, Trash2 } from 'lucide-react';
import SearchInput from "../../../../frontend/src/components/searchInput"; // Ensure this path is correct
import RemovedReportModal from './RemovedReportModal'; 

const ReportedNumbersContent = () => {
  const data = [
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Removed", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Removed", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Removed", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Removed", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Removed", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Removed", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Removed", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "pending", comment: "Duped Someone of GHS12000, Sent......." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [showRemovedOnly, setShowRemovedOnly] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleToggleRemoved = () => {
    setShowRemovedOnly(!showRemovedOnly);
    setCurrentPage(1);
  };

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleCloseModal = () => {
    setSelectedReport(null);
  };

  // Filtered data based on checkbox selection
  const filteredData = showRemovedOnly ? data.filter((item) => item.status === 'Removed') : data;

  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-[#F9FAFB] h-[100vh]">
      <div className='flex justify-center items-center pt-6 space-x-48'>
        <div className='font-semibold text-xl'>{filteredData.length} Reported Cases</div>
        <div className='font-medium'>
          <input type="checkbox" name="showRemovedOnly" id="showRemovedOnly" checked={showRemovedOnly} onChange={handleToggleRemoved} className='w-8 border' /> Show removed reports
        </div>

        <div className='flex gap-2'>
          <SearchInput />
          <select className='border border-gray-400 w-24 h-10 rounded-md shadow-sm' name="category" id="category">
            <option>All Status</option>
            <option>Pending</option>
            <option>Public</option>
          </select>

          <div className='relative w-[125px]'>
            <select className='appearance-none border flex justify-center items-center w-full h-10 border-gray-400 rounded-md shadow-sm pl-10 pr-4' name="time" id="time">
              <option>All time</option>
              <option>Today</option>
              <option>Last 7 days</option>
              <option>Last Month</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 bottom-4 flex items-center px-2">
              <CalendarIcon className='w-6 h-4 text-black' />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 bottom-4 flex items-center px-2 text-gray-700">
              <ChevronDown className='w-5 text-black ' />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto pl-14 p-4">
        <table className="w-[98%] bg-white border-l-1 border-r-1 border border-gray-300 rounded-lg overflow-hidden">
          <thead className='h-12 flex-1 gap-6'>
            <tr>
              <th className="py-2 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">
                <input type="checkbox" name="checkbox" id="checkbox" className='w-8 border' /> NAME
              </th>
              <th className="py-2 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">PHONE NUMBER</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">NETWORK</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">DATE REPORTED</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">STATUS</th>
              <th className="py-2 px-4 pl-20 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">COMMENT</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} onClick={() => handleReportClick(item)} className='cursor-pointer'>
                <td className="py-2 px-6 border-b border-gray-300">
                  <input type="checkbox" name="checkbox" id="checkbox" className='w-8 border' /> {item.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{item.phone}</td>
                <td className="py-2 px-4 border-b pl-7 border-gray-300">{item.network}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.date}</td>
                <td className="py-0 px-2 border-b border-gray-300">
                  <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Removed' ? 'bg-red-200 text-red-800' : item.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : ''}`}>{item.status}</span>
                </td>
                <td className="py-2 px-2 border-b border-gray-300">{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='flex justify-between items-center pt-3'>
          <div className="flex justify-center items-center">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='bg-gray-200 px-4 py-2 rounded-md mr-2'>Previous</button>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className='bg-gray-200 px-4 py-2 rounded-md'>Next</button>
          </div>
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>

      {selectedReport && <RemovedReportModal report={selectedReport} onClose={handleCloseModal} />}
    </div>
  );
};

export default ReportedNumbersContent;
