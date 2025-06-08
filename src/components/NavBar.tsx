import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  return (
    <nav className="p-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Vistara</h1>
      <Button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </nav>
  );
}
