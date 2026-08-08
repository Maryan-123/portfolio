import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-gradient text-7xl font-bold">404</p>
      <p className="mt-4 text-lg text-text-secondary">
        Looks like this page got lost in the code.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button as={Link} to="/">
          Return Home
        </Button>
        <Button as={Link} to="/#projects" variant="secondary">
          View Projects
        </Button>
      </div>
    </div>
  );
}
