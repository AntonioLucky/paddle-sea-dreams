import { Bed } from "lucide-react";

interface Cabin {
  label: string;
  type?: "double" | "twin" | "crew";
}

interface CabinLayoutProps {
  title: string;
  shape: "yacht" | "catamaran";
  cabins: Cabin[];
  totalGuests: number;
}

const cabinColor = (type?: string) => {
  if (type === "crew") return "bg-muted text-muted-foreground";
  if (type === "twin") return "bg-secondary text-secondary-foreground";
  return "bg-primary/10 text-primary border-primary/30";
};

export const CabinLayout = ({ title, shape, cabins, totalGuests }: CabinLayoutProps) => {
  // Yacht: 1 column of cabins. Catamaran: 2 columns (two hulls).
  const isCat = shape === "catamaran";

  return (
    <div className="rounded-3xl bg-card p-6 shadow-card border border-border/50">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-xl font-semibold text-navy">{title}</h4>
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          до {totalGuests} гостей
        </span>
      </div>

      {/* Stylized hull silhouette */}
      <div className="relative mx-auto" style={{ maxWidth: 360 }}>
        <div
          className={`relative bg-gradient-to-b from-secondary/60 to-secondary/30 border-2 border-primary/30 ${
            isCat ? "rounded-[3rem]" : "rounded-[3rem_3rem_5rem_5rem]"
          }`}
          style={{
            clipPath: isCat
              ? undefined
              : "polygon(15% 0, 85% 0, 100% 30%, 90% 100%, 10% 100%, 0 30%)",
            padding: "1.5rem 1rem",
          }}
        >
          {/* Bow label */}
          <div className="text-center text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
            ▲ нос
          </div>

          {isCat ? (
            <div className="grid grid-cols-2 gap-3">
              {/* Left hull */}
              <div className="space-y-2">
                {cabins
                  .filter((_, i) => i % 2 === 0)
                  .map((c, i) => (
                    <CabinBox key={`l-${i}`} cabin={c} />
                  ))}
              </div>
              {/* Right hull */}
              <div className="space-y-2">
                {cabins
                  .filter((_, i) => i % 2 === 1)
                  .map((c, i) => (
                    <CabinBox key={`r-${i}`} cabin={c} />
                  ))}
              </div>
              {/* Bridge / saloon */}
              <div className="col-span-2 mt-2 text-center text-xs text-muted-foreground py-2 border-t border-dashed border-primary/30">
                Салон · Камбуз · Кокпит
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {cabins.slice(0, Math.ceil(cabins.length / 2)).map((c, i) => (
                <CabinBox key={`f-${i}`} cabin={c} />
              ))}
              <div className="text-center text-xs text-muted-foreground py-2 border-y border-dashed border-primary/30 my-2">
                Салон · Камбуз
              </div>
              {cabins.slice(Math.ceil(cabins.length / 2)).map((c, i) => (
                <CabinBox key={`a-${i}`} cabin={c} />
              ))}
            </div>
          )}

          <div className="text-center text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
            ▼ корма
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-5 text-xs">
        <LegendDot className="bg-primary/20 border border-primary/40" label="Гостевая каюта" />
        <LegendDot className="bg-muted" label="Каюта капитана" />
      </div>
    </div>
  );
};

const CabinBox = ({ cabin }: { cabin: Cabin }) => (
  <div
    className={`rounded-xl border px-3 py-2 text-xs font-medium flex items-center gap-2 justify-center ${cabinColor(
      cabin.type
    )}`}
  >
    <Bed className="w-3.5 h-3.5" />
    {cabin.label}
  </div>
);

const LegendDot = ({ className, label }: { className: string; label: string }) => (
  <div className="flex items-center gap-2">
    <span className={`w-3 h-3 rounded-full ${className}`} />
    <span className="text-muted-foreground">{label}</span>
  </div>
);