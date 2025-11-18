import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ToS = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center p-[10px] animate-fade-in">
      <div className="w-full max-w-[600px] bg-card border border-border p-[20px] shadow-[0_0px_10px_hsl(var(--outline))] animate-slide-up">
        <div className="mb-[20px] flex items-center justify-between">
          <h1 className="text-[24px] text-primary font-normal tracking-wide">
            READ BEFORE BUYING
          </h1>
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-foreground hover:bg-[hsl(var(--inline))] transition-all duration-200 text-[11px] font-mono px-[10px] py-[5px]"
          >
            Back
          </Button>
        </div>

        <div className="space-y-[15px] text-left">
          <h2 className="text-[18px] text-primary font-bold mb-[15px] animate-slide-down">
            Terms of Service
          </h2>

          <div className="space-y-[12px] animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                1. No sharing loaders access licenses or anything like that
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                If it is paid or private do not hand it out thats very clear.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                2. No refunds unless you did not get the product
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                If you got it working then there is no refund.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                3. Reverse engineering anything means instant blacklist
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                Do not try to break crack or mess with the software.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                4. Lifetime means the lifetime of the product NOT your lifetime
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                If the product shutdown NO REFUNDS will be provided.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                5. Spamming support tickets without reading the fixes
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                If you keep making tickets for things already answered you muted or worse if reoccurred.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                6. We check HWIDs
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                We can tell when you are sharing your license so do not try it.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                7. Hate speech against staff
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                Hate Speech Against our team will result in being muted or worse if reoccurred.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                8. Reselling without permission
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                If you try to resell without approval you will get blacklisted and banned.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                9. We are not responsible if you buy from someone who is not an approved reseller
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                If they do not have the reseller role and you get scammed that is on you.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                10. We are not responsible if you download malicious code from people in DMs
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                If someone sends you shady files and you run them that is your problem not ours.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-[12px]">
              <h3 className="text-[13px] font-bold mb-[5px]">
                11. Do not ask or approach staff for invites THEY DO NOT manage it
              </h3>
              <p className="text-[11px] bg-[hsl(var(--inline))] p-[8px] border border-border opacity-90">
                They are not in charge of invites so do not bother them with it.
              </p>
            </div>
          </div>

          <div className="mt-[20px] pt-[15px] border-t border-border text-[10px] opacity-60 text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            we can change the terms of service at any time @Consistant 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToS;
