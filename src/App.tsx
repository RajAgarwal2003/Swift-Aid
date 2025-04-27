import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { useConvexAuth } from "convex/react";
import { toast } from "sonner";

export default function App() {
  const [activeTab, setActiveTab] = useState("blood");
  const { isAuthenticated } = useConvexAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">⚡ Swift-Aid</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <SignInForm />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">⚡ Swift-Aid</span>
            </div>
            <SignOutButton />
          </div>
          <nav className="mt-4">
            <div className="border-b border-gray-200">
              <div className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab("blood")}
                  className={`${
                    activeTab === "blood"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
                >
                  Blood Bank
                </button>
                <button
                  onClick={() => setActiveTab("ambulance")}
                  className={`${
                    activeTab === "ambulance"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
                >
                  Emergency Ambulance
                </button>
                <button
                  onClick={() => setActiveTab("vaccine")}
                  className={`${
                    activeTab === "vaccine"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
                >
                  Vaccination Records
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === "blood" && <BloodBank />}
        {activeTab === "ambulance" && <AmbulanceServices />}
        {activeTab === "vaccine" && <VaccineRecords />}
      </main>

      <footer className="bg-white border-t mt-12">
  <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="md:col-span-1">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Us</h3>
        <p className="mt-4 text-base text-gray-500">
          Swift-Aid is a comprehensive healthcare platform connecting blood donors, emergency services, and healthcare providers.
        </p>
      </div>
      <div className="md:col-span-1">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
        <ul className="mt-4 space-y-4">
          <li>
            <button onClick={() => setActiveTab("blood")} className="text-base text-gray-500 hover:text-gray-900">
              Blood Bank
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("ambulance")} className="text-base text-gray-500 hover:text-gray-900">
              Emergency Services
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("vaccine")} className="text-base text-gray-500 hover:text-gray-900">
              Health Records
            </button>
          </li>
        </ul>
      </div>
      <div className="md:col-span-1">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
        <ul className="mt-4 space-y-4">
          <li>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-1">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Developer</h3>
        <ul className="mt-4 space-y-4">
          <li>
            <p className="text-base text-gray-500">Raj Agarwal & Dhwani Saraogi</p>
          </li>
          <li>
            <p className="text-base text-gray-500">Phone: +91 8910925429</p>
          </li>
          <li>
            <a href="mailto:john.doe@example.com" className="text-base text-gray-500 hover:text-gray-900">
              Email: rajagar2018@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="md:col-span-1">
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
        <ul className="mt-4 space-y-4">
          <li>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-200 pt-8">
      <p className="text-base text-gray-400 text-center">
        &copy; 2024 Swift-Aid. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}

// Rest of the components (BloodBank, AmbulanceServices, VaccineRecords) remain the same
// Only updating button colors from red to blue to match new branding

function BloodBank() {
  const donations = useQuery(api.bloodBank.getAvailableBlood, { bloodType: undefined }) || [];
  const donate = useMutation(api.bloodBank.donate);
  const [formData, setFormData] = useState({
    donorName: "",
    bloodType: "",
    units: 1,
    contactNumber: "",
  });
  const [selectedBloodType, setSelectedBloodType] = useState<string | null>(null);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await donate(formData);
      toast.success("Blood donation recorded successfully!");
      setFormData({
        donorName: "",
        bloodType: "",
        units: 1,
        contactNumber: "",
      });
    } catch (error) {
      toast.error("Failed to record donation");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Blood Bank</h2>
        <p className="mt-1 text-gray-500">View available blood units and register donations</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => {
            const available = donations.filter((d) => d.bloodType === type);
            const units = available.reduce((sum, d) => sum + d.units, 0);
            return (
              <div
                key={type}
                className="bg-white rounded-lg border p-6 cursor-pointer hover:shadow-md"
                onClick={() => setSelectedBloodType(type)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{type}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      units > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {units} units
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedBloodType && (
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Donors for Blood Type: {selectedBloodType}
          </h2>
          <div className="space-y-4">
            {donations
              .filter((d) => d.bloodType === selectedBloodType)
              .map((donor, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    <strong>Donor Name:</strong> {donor.donorName}
                  </p>
                  <p className="text-gray-700">
                    <strong>Units Available:</strong> {donor.units}
                  </p>
                  <p className="text-gray-700">
                    <strong>Contact:</strong> {donor.contactNumber}
                  </p>
                </div>
              ))}
            {donations.filter((d) => d.bloodType === selectedBloodType).length === 0 && (
              <p className="text-gray-600">No donors available for this blood type.</p>
            )}
          </div>
          <button
            onClick={() => setSelectedBloodType(null)}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to Blood Types
          </button>
        </div>
      )}

      <div className="bg-gray-50 rounded-xl p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Donate Blood</h2>
          <p className="text-gray-600 mb-6">
            Your donation can save lives. Register your blood donation here.
          </p>
          <form onSubmit={handleDonate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Donor Name</label>
                <input
                  type="text"
                  value={formData.donorName}
                  onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                <select
                  value={formData.bloodType}
                  onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                >
                  <option value="">Select blood type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
                <input
                  type="number"
                  min="1"
                  value={formData.units}
                  onChange={(e) => setFormData({ ...formData, units: parseInt(e.target.value) })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register Donation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function AmbulanceServices() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const services = useQuery(api.ambulance.getAvailableServices, { location: selectedLocation }) || [];
  const addService = useMutation(api.ambulance.addService);
  const updateStatus = useMutation(api.ambulance.updateServiceStatus);

  const [formData, setFormData] = useState({
    serviceName: "",
    location: "",
    contactNumber: "",
    vehicleType: "",
    driverName: "",
    licenseNumber: "",
  });

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addService(formData);
      toast.success("Ambulance service added successfully!");
      setFormData({
        serviceName: "",
        location: "",
        contactNumber: "",
        vehicleType: "",
        driverName: "",
        licenseNumber: "",
      });
    } catch (error) {
      toast.error("Failed to add ambulance service");
    }
  };

  const locations = ["Dum Dum", "Bidhan Nagar", "Park Street", "Airport", "Newtown"];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Emergency Ambulance Services</h2>
        <p className="mt-1 text-gray-500">Find and contact nearby ambulance services</p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full max-w-xs rounded-md border border-gray-300 shadow-sm px-4 py-2"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service._id} className="bg-white rounded-lg border p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{service.serviceName}</h3>
                  <p className="text-gray-500">{service.location}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    service.onDuty
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {service.onDuty ? "Available" : "Busy"}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Response Time:</span> {service.onDuty ? "5-10 minutes" : "Unavailable"}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Vehicle:</span> {service.vehicleType}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Driver:</span> {service.driverName}
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <a
                    href={`tel:${service.contactNumber}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center"
                  >
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={() => updateStatus({ serviceId: service._id, onDuty: !service.onDuty })}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Toggle Status
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Register Ambulance Service</h2>
          <p className="text-gray-600 mb-6">
            Add your ambulance service to our emergency response network.
          </p>
          <form onSubmit={handleAddService} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                <input
                  type="text"
                  value={formData.serviceName}
                  onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                >
                  <option value="">Select location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                >
                  <option value="">Select vehicle type</option>
                  <option value="Basic Life Support">Basic Life Support</option>
                  <option value="Advanced Life Support">Advanced Life Support</option>
                  <option value="Patient Transport">Patient Transport</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Driver Name</label>
                <input
                  type="text"
                  value={formData.driverName}
                  onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                <input
                  type="text"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function VaccineRecords() {
  const records = useQuery(api.vaccines.getChildRecords) || [];
  const addRecord = useMutation(api.vaccines.addChildRecord);
  const addVaccine = useMutation(api.vaccines.addVaccine);

  const [childFormData, setChildFormData] = useState({
    childName: "",
    dateOfBirth: "",
  });

  const [vaccineFormData, setVaccineFormData] = useState({
    recordId: "",
    name: "",
    date: "",
    dueDate: "",
  });

  const handleAddChild = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addRecord({
        childName: childFormData.childName,
        dateOfBirth: new Date(childFormData.dateOfBirth).getTime(),
      });
      toast.success("Child record added successfully!");
      setChildFormData({
        childName: "",
        dateOfBirth: "",
      });
    } catch (error) {
      toast.error("Failed to add child record");
    }
  };

  const handleAddVaccine = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addVaccine({
        recordId: vaccineFormData.recordId as any,
        vaccine: {
          name: vaccineFormData.name,
          date: new Date(vaccineFormData.date).getTime(),
          dueDate: new Date(vaccineFormData.dueDate).getTime(),
          completed: false,
        },
      });
      toast.success("Vaccine added successfully!");
      setVaccineFormData({
        recordId: "",
        name: "",
        date: "",
        dueDate: "",
      });
    } catch (error) {
      toast.error("Failed to add vaccine");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Vaccination Records</h2>
        <p className="mt-1 text-gray-500">Manage children's vaccination records</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {records.map((record) => (
            <div key={record._id} className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold">{record.childName}</h3>
              <p className="text-gray-500">
                Born: {new Date(record.dateOfBirth).toLocaleDateString()}
              </p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900">Vaccines</h4>
                <ul className="mt-2 space-y-2">
                  {record.vaccines.map((vaccine, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{vaccine.name}</p>
                        <p className="text-xs text-gray-500">
                          Date: {new Date(vaccine.date).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-500">
                          Due: {new Date(vaccine.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          vaccine.completed
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {vaccine.completed ? "Completed" : "Pending"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Child Record</h2>
          <form onSubmit={handleAddChild} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
                <input
                  type="text"
                  value={childFormData.childName}
                  onChange={(e) => setChildFormData({ ...childFormData, childName: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={childFormData.dateOfBirth}
                  onChange={(e) => setChildFormData({ ...childFormData, dateOfBirth: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Child Record
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Vaccine Record</h2>
          <form onSubmit={handleAddVaccine} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Child</label>
                <select
                  value={vaccineFormData.recordId}
                  onChange={(e) =>
                    setVaccineFormData({ ...vaccineFormData, recordId: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                >
                  <option value="">Select a child</option>
                  {records.map((record) => (
                    <option key={record._id} value={record._id}>
                      {record.childName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vaccine Name</label>
                <input
                  type="text"
                  value={vaccineFormData.name}
                  onChange={(e) => setVaccineFormData({ ...vaccineFormData, name: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vaccination Date
                </label>
                <input
                  type="date"
                  value={vaccineFormData.date}
                  onChange={(e) => setVaccineFormData({ ...vaccineFormData, date: e.target.value })}
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  value={vaccineFormData.dueDate}
                  onChange={(e) =>
                    setVaccineFormData({ ...vaccineFormData, dueDate: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Vaccine Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
