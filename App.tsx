
import React, { useState, useEffect } from 'react';
import { 
  Thermometer, 
  Droplet, 
  Snowflake, 
  Flame, 
  Wifi, 
  Clock as ClockIcon,
  Activity
} from 'lucide-react';
import { SensorCard } from './components/SensorCard';
import { StatusPanel } from './components/StatusPanel';
import { LiveChart } from './components/LiveChart';
import { FooterStats } from './components/FooterStats';
import { SystemStatus, SensorData } from './types';

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sensorHistory, setSensorHistory] = useState<SensorData[]>([]);
  const [status] = useState<SystemStatus>(SystemStatus.IDLE);
  const [waterGenerated] = useState(0);
  const [powerUsage] = useState(0);

  // Initialize data once and keep it at zero
  useEffect(() => {
    // Clock update
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    // Seed history with zero values
    const initialData: SensorData[] = Array.from({ length: 20 }).map((_, i) => ({
      temperature: 0,
      humidity: 0,
      coldPlateTemp: 0,
      heatSinkTemp: 0,
      timestamp: new Date(Date.now() - (20 - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }));
    setSensorHistory(initialData);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentData = sensorHistory[sensorHistory.length - 1] || {
    temperature: 0,
    humidity: 0,
    coldPlateTemp: 0,
    heatSinkTemp: 0,
  };

  return (
    <div className="flex flex-col h-screen max-h-screen p-6 gap-6 bg-[#0a0f1e] text-slate-200">
      
      {/* Header Bar */}
      <header className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-blue-500 rounded-full glow-blue" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
            Standby
          </span>
        </div>

        <h1 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
          <Activity className="w-6 h-6 text-indigo-500" />
          AtmosAI <span className="font-light text-slate-400">Monitoring Dashboard</span>
        </h1>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <Wifi className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-medium">Offline</span>
          </div>
          <div className="flex items-center gap-2 text-slate-200">
            <ClockIcon className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold tracking-wider">
              {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          </div>
        </div>
      </header>

      {/* Sensor Cards Row */}
      <div className="grid grid-cols-4 gap-6">
        <SensorCard 
          label="Ambient Temperature"
          value={currentData.temperature.toFixed(1)}
          unit="°C"
          icon={Thermometer}
          statusText="Standby"
          colorClass="bg-orange-500"
          glowClass="glow-orange"
        />
        <SensorCard 
          label="Relative Humidity"
          value={currentData.humidity.toFixed(0)}
          unit="%"
          icon={Droplet}
          statusText="Standby"
          colorClass="bg-blue-500"
          glowClass="glow-blue"
        />
        <SensorCard 
          label="Cold Plate Temp"
          value={currentData.coldPlateTemp.toFixed(1)}
          unit="°C"
          icon={Snowflake}
          statusText="Standby"
          colorClass="bg-sky-500"
          glowClass="glow-sky"
        />
        <SensorCard 
          label="Heat Sink Temp"
          value={currentData.heatSinkTemp.toFixed(1)}
          unit="°C"
          icon={Flame}
          statusText="Standby"
          colorClass="bg-red-500"
          glowClass="glow-red"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
        <div className="col-span-9 h-full">
          <LiveChart data={sensorHistory} />
        </div>
        <div className="col-span-3 h-full">
          <StatusPanel 
            status={status}
            waterGenerated={waterGenerated}
            powerUsage={powerUsage}
          />
        </div>
      </div>

      {/* Footer Metrics */}
      <FooterStats 
        efficiency={0}
        operatingMode="Standby"
        totalRuntime="0d 0h 0m"
      />

    </div>
  );
};

export default App;
