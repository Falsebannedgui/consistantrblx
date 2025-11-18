import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MainPageProps {
  onNavigateToDashboard: () => void;
}

const MainPage = ({ onNavigateToDashboard }: MainPageProps) => {
  const navigate = useNavigate();
  
  const handleDiscordClick = () => {
    window.open('https://discord.gg/your-server', '_blank');
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-[10px] animate-fade-in">
      <div className="w-full max-w-[300px] bg-card border border-border p-[15px] text-center shadow-[0_0px_10px_hsl(var(--outline))] animate-slide-up">
        <h1 className="text-[28px] text-primary mb-[15px] font-normal tracking-wide animate-slide-down">
          Consistant
        </h1>
        <div className="flex flex-col gap-[5px]">
          <Button
            onClick={handleDiscordClick}
            variant="default"
            className="w-full bg-primary text-foreground border border-[hsl(var(--inline))] px-[8px] py-[1px] font-mono text-[11px] hover:bg-[hsl(var(--inline))] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Discord
          </Button>
          <Button
            onClick={onNavigateToDashboard}
            variant="default"
            className="w-full bg-primary text-foreground border border-[hsl(var(--inline))] px-[8px] py-[1px] font-mono text-[11px] hover:bg-[hsl(var(--inline))] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Purchase
          </Button>
          <Button
            onClick={() => navigate("/tos")}
            variant="ghost"
            className="w-full text-foreground hover:bg-[hsl(var(--inline))] px-[8px] py-[1px] font-mono text-[10px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] opacity-80 hover:opacity-100 mt-[5px]"
          >
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
