import { useEffect, useState } from "react";

const TrainingSimulation = () => {
  const [epoch, setEpoch] = useState(1);
  const [loss, setLoss] = useState(2.45);
  const [accuracy, setAccuracy] = useState(0.18);

  const MAX_EPOCHS = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setEpoch(prev => (prev >= MAX_EPOCHS ? 1 : prev + 1));

      setLoss(prev =>
        prev <= 0.02 ? 2.45 : prev * (0.94 + Math.random() * 0.03)
      );

      setAccuracy(prev =>
        prev >= 0.99 ? 0.18 : prev + (1 - prev) * 0.04
      );
    }, 140);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs text-gray-400 space-y-3">
      <div className="flex justify-between border-b border-gray-800 pb-1 text-gray-500">
        <span>Epoch</span>
        <span>Loss</span>
        <span>Accuracy</span>
      </div>

      <div className="flex justify-between text-green-400">
        <span>{epoch}/{MAX_EPOCHS}</span>
        <span>{loss.toFixed(4)}</span>
        <span>{(accuracy * 100).toFixed(2)}%</span>
      </div>

      <div className="h-1.5 bg-gray-800 rounded overflow-hidden">
        <div
          className="h-full bg-[#00ffd5] transition-all duration-150"
          style={{ width: `${(epoch / MAX_EPOCHS) * 100}%` }}
        />
      </div>

      <p className="text-[10px] text-gray-500">
        Simulated Training Loop (UI Demo)
      </p>
    </div>
  );
};

export default TrainingSimulation;
