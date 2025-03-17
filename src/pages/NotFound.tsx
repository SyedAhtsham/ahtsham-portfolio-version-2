
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30">
      <div className="glass-card p-10 max-w-md text-center animate-fade-in">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-sm mb-6 text-primary/70">
          You tried to access: {location.pathname}
        </p>
        <a
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
