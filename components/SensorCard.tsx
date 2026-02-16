
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SensorCardProps {
  label: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  statusText: string;
  colorClass: string;
  glowClass: string;
}

export const SensorCard: React.FC<SensorCardProps> = ({
  label,
  value,
  unit,
  icon: Icon,
  statusText,
  colorClass,
  glowClass,
}) => {
  return (
    <div className="bg-[#151b2d] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between transition-all hover:border-slate-700">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${colorClass} bg-opacity-20`}>
          <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${colorClass} ${glowClass}`} />
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            {statusText}
          </span>
        </div>
      </div>
      <div>
        <p className="text-slate-400 text-sm font-medium mb-1">{label}</p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
          <span className="text-lg font-semibold text-slate-500">{unit}</span>
        </div>
      </div>
    </div>
  );
};
