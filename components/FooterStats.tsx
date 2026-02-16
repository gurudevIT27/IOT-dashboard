
import React from 'react';
import { Activity, Cpu, Clock } from 'lucide-react';

interface FooterStatsProps {
  efficiency: number;
  operatingMode: string;
  totalRuntime: string;
}

export const FooterStats: React.FC<FooterStatsProps> = ({
  efficiency,
  operatingMode,
  totalRuntime,
}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-[#151b2d] border border-slate-800 rounded-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Activity className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Efficiency</p>
            <p className="text-lg font-bold text-white">{efficiency}%</p>
          </div>
        </div>
        <div className="h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-1000"
            style={{ width: `${efficiency}%` }}
          />
        </div>
      </div>

      <div className="bg-[#151b2d] border border-slate-800 rounded-xl px-6 py-4 flex items-center gap-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Cpu className="w-5 h-5 text-indigo-500" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">Operating Mode</p>
          <p className="text-lg font-bold text-white">{operatingMode}</p>
        </div>
      </div>

      <div className="bg-[#151b2d] border border-slate-800 rounded-xl px-6 py-4 flex items-center gap-4">
        <div className="p-2 bg-amber-500/10 rounded-lg">
          <Clock className="w-5 h-5 text-amber-500" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">Total Runtime</p>
          <p className="text-lg font-bold text-white">{totalRuntime}</p>
        </div>
      </div>
    </div>
  );
};
