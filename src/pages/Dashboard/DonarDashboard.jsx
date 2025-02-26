import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import API from "../../services/API";
import moment from "moment";

const DonorDashboard = () => {
  const [bloodInventory, setBloodInventory] = useState([]);
  const [donationHistory, setDonationHistory] = useState([]);

  useEffect(() => {
    fetchBloodInventory();
    fetchDonationHistory();
  }, []);

  const fetchBloodInventory = async () => {
    try {
      const res = await API.get("/inventory/get-inventory");
      if (res?.data?.success) {
        setBloodInventory(res.data.inventory);
      }
    } catch (error) {
      console.error("Error fetching blood inventory:", error);
    }
  };

  const fetchDonationHistory = async () => {
    try {
      const res = await API.get("/donation/history");
      if (res?.data?.success) {
        setDonationHistory(res.data.history);
      }
    } catch (error) {
      console.error("Error fetching donation history:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Donor Dashboard</h1>

      {/* Blood Inventory Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {["O+", "A+", "B+", "AB-", "O-", "A-"].map((group) => (
          <Card key={group} className="p-4">
            <h2 className="text-lg font-semibold">Blood Group: {group}</h2>
            <p className="text-gray-600">
              Available:{" "}
              {bloodInventory.filter((b) => b.bloodGroup === group).length}{" "}
              Units
            </p>
          </Card>
        ))}
      </div>

      {/* Donation History */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Your Donation History</h2>
          <Table>
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Blood Group</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {donationHistory.length > 0 ? (
                donationHistory.map((record) => (
                  <tr key={record._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{record.bloodGroup}</td>
                    <td className="px-4 py-2">{record.quantity} (ML)</td>
                    <td className="px-4 py-2">
                      {moment(record.createdAt).format("DD/MM/YYYY")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    No donation history available.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardContent>
      </Card>

      {/* Call to Actions */}
      <div className="mt-6 flex gap-4">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white">
          Request Blood
        </Button>
        <Button className="bg-green-500 hover:bg-green-700 text-white">
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default DonorDashboard;
