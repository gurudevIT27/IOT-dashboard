
import React from 'react';
import { SystemStatus } from '../types';
import { Droplets, Zap, ShieldCheck, PlayCircle, Power } from 'lucide-react';

interface StatusPanelProps {
  status: SystemStatus;
  waterGenerated: number;
  powerUsage: number;
}

export const StatusPanel: React.FC<StatusPanelProps> = ({
  status,
  waterGenerated,
  powerUsage,
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case SystemStatus.COOLING:
        return { label: 'COOLING', color: 'bg-green-500', glow: 'glow-green', icon: PlayCircle };
      case SystemStatus.SAFETY:
        return { label: 'SAFETY', color: 'bg-red-500', glow: 'glow-red', icon: ShieldCheck };
      default:
        return { label: 'IDLE', color: 'bg-blue-500', glow: 'glow-blue', icon: Power };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className="bg-[#151b2d] border border-slate-800 rounded-2xl p-6 h-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">System Status</span>
        <div className={`flex items-center gap-3 p-4 rounded-xl ${config.color} bg-opacity-10 border border-opacity-20 ${config.color.replace('bg-', 'border-')}`}>
          <div className={`w-3 h-3 rounded-full ${config.color} ${config.glow}`} />
          <Icon className={`w-5 h-5 ${config.color.replace('bg-', 'text-')}`} />
          <span className={`text-lg font-bold ${config.color.replace('bg-', 'text-')}`}>{config.label}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-2">
        <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <Droplets className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-slate-400">Water Generated</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{waterGenerated.toLocaleString()}</span>
            <span className="text-sm font-semibold text-slate-500">ml</span>
          </div>
        </div>

        <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-slate-400">Power Consumption</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{powerUsage.toLocaleString()}</span>
            <span className="text-sm font-semibold text-slate-500">Wh</span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-4 rounded-xl border border-indigo-500/20">
          <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider mb-1">AI Recommendation</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Atmospheric conditions optimal for peak efficiency. Cold plate temperature stable at target.
          </p>
        </div>
      </div>
    </div>
  );
};
