import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import DonateBlood from "./pages/Donar/DonateBlood";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Hospitals from "./pages/Hospital/Hospitals";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import AdminHome from "./pages/Admin/AdminHome";
import HomePage from "./pages/HomePage";
import DonationHistory from "./pages/Donar/DonationHistory";
import DonorHome from "./pages/Donar/DonorHome";
import PatientHome from "./pages/Patient/PatientHome";
import RequestBlood from "./pages/Patient/RequestBlood";
import RequestHistory from "./pages/Patient/RequestHistory";
import PatientList from "./pages/Admin/PatientList";
import Donations from "./pages/Admin/Donations";
import BloodRequests from "./pages/Admin/BloodRequests";
import HospitalDonations from "./pages/Hospital/HospitalDonations";
import HospitalBloodRequests from "./pages/Hospital/HospitalBloodRequests";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import LinkExpired from "./pages/LinkExpired";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/donar-list"
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/patient-list"
          element={
            <ProtectedRoute>
              <PatientList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/donations"
          element={
            <ProtectedRoute>
              <Donations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blood-requests"
          element={
            <ProtectedRoute>
              <BloodRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-dashboard"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital/donations"
          element={
            <ProtectedRoute>
              <HospitalDonations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital/blood-requests"
          element={
            <ProtectedRoute>
              <HospitalBloodRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar-dashboard"
          element={
            <ProtectedRoute>
              <DonorHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar/donate-blood"
          element={
            <ProtectedRoute>
              <DonateBlood />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar/donation-history"
          element={
            <ProtectedRoute>
              <DonationHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient-dashboard"
          element={
            <ProtectedRoute>
              <PatientHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/patient-request"
          element={
            <ProtectedRoute>
              <RequestBlood />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/patient-request-history"
          element={
            <ProtectedRoute>
              <RequestHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <PublicRoute>
                <Contact />
              </PublicRoute>
            }
          />
          <Route
            path="/services"
            element={
              <PublicRoute>
                <Services />
              </PublicRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/link-expired"
            element={
              <PublicRoute>
                <LinkExpired />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
