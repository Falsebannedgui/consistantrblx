import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Dashboard = () => {
  const [countdown, setCountdown] = useState({ text: "365 days", percentage: 100 });

  useEffect(() => {
    const updateCountdown = () => {
      const licenseDate = new Date('2025-12-31');
      const now = new Date();
      const diff = licenseDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setCountdown({ text: 'Expired', percentage: 0 });
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      const totalDays = 365;
      const percentage = (days / totalDays) * 100;
      
      let text = '';
      if (days > 0) {
        text = `${days} days`;
      } else if (hours > 0) {
        text = `${hours}h ${minutes}m`;
      } else {
        text = `${minutes}m ${seconds}s`;
      }
      
      setCountdown({ text, percentage: Math.max(0, Math.min(100, percentage)) });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    toast.success("Download started!", {
      description: "Your file is being prepared",
      duration: 3000,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-[10px] animate-fade-in">
      <div className="w-full max-w-[350px] bg-card border border-border p-[15px] text-center shadow-[0_0px_10px_hsl(var(--outline))] animate-slide-up">
        <h2 className="text-[20px] text-primary mb-[15px] font-normal animate-slide-down">
          Dashboard
        </h2>
        
        <div className="mb-[15px] text-left space-y-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between py-[5px] border-b border-border text-[11px]">
            <span className="text-foreground opacity-70">Status:</span>
            <span className="text-[hsl(var(--success))] font-bold flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--success))] animate-pulse"></span>
              Updated
            </span>
          </div>
          <div className="flex justify-between py-[5px] border-b border-border text-[11px]">
            <span className="text-foreground opacity-70">License Valid Until:</span>
            <span className="text-foreground font-bold">2025-12-31</span>
          </div>
        </div>

        <div className="mb-[15px] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="mb-[5px] text-[11px] opacity-70">Time Remaining</div>
          <div className="relative">
            <div className="w-full h-[20px] bg-[hsl(var(--muted))] border border-border relative overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-linear"
                style={{ width: `${countdown.percentage}%` }}
              />
            </div>
            <div className="mt-[5px] text-[11px] text-center font-bold">
              {countdown.text}
            </div>
          </div>
        </div>

        <Button
          onClick={handleDownload}
          className="w-full bg-primary text-foreground border border-[hsl(var(--inline))] px-[5px] py-[5px] font-mono text-[12px] hover:bg-[hsl(var(--inline))] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
