import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-2 text-white bg-primary hover:bg-primary/90 rounded transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
