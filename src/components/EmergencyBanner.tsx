import React from 'react';
import { SupportedLanguage } from '../types/health';
import { translations } from '../translations';
import { ShieldAlert, PhoneCall, AlertTriangle } from 'lucide-react';

interface EmergencyBannerProps {
  currentLanguage: SupportedLanguage;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="emergency-support" className="py-12 bg-rose-50/70 border-y border-rose-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-rose-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                <span>Immediate Safety First</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {t.emergencyTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.emergencySubtitle}
              </p>

              {/* Red-flag symptoms checklist */}
              <div className="pt-2">
                <span className="text-xs font-bold text-rose-900 block mb-1.5">
                  {t.emergencySignsTitle}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {t.emergencySigns.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Helpline Action Cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <div className="p-4 rounded-2xl bg-rose-600 text-white flex items-center gap-3 shadow-md shadow-rose-200">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-rose-100">
                    National Emergency Helpline
                  </div>
                  <div className="text-lg font-black tracking-tight">
                    {t.emergencyCall112}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-3 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Women's 24x7 Support
                  </div>
                  <div className="text-lg font-black tracking-tight text-white">
                    {t.emergencyCallWomen}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
