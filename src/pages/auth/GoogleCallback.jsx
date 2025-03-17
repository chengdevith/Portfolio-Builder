// src/components/CallbackHandler.jsx
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const processedCode = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCallback = async () => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");

      if (!code) {
        setError("No authorization code received");
        return;
      }

      // Prevent reprocessing the same code
      if (processedCode.current === code) return;
      processedCode.current = code;

      try {
        console.log("Sending authorization code to backend...");

        const response = await fetch(
          "http://portify-api.eunglyzhia.social:3037/api/google/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          }
        );

        const data = await response.json();
        console.log("Response from backend:", data);

        if (!response.ok) {
          throw new Error(data.detail || "Login failed");
        }

        if (!data.user || !data.access_token) {
          throw new Error("Invalid response data");
        }

        // Store user info in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("token_type", data.token_type);
        navigate("/", { replace: true });
        console.log(data.access_token)
      } catch (error) {
        console.error("Login error:", error);
        setError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred"
        );
      }
    };

    handleCallback();
  }, [location.search, navigate]);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        <p>Error: {error}</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Return to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p>Processing login...</p>
      </div>
    </div>
  );
};

export default GoogleCallback;