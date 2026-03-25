import { useState } from 'react';
import { EVENT_CONFIGS } from './eventConfigs';

const eventOptions = [
  { id: '', label: 'All events' },
  ...Object.values(EVENT_CONFIGS).map((e) => ({ id: e.id, label: e.title })),
];

export default function Admin() {
  const [password, setPassword] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [status, setStatus] = useState(null); // { ok, message }
  const [confirming, setConfirming] = useState(false);

  async function handleReset() {
    if (!confirming) {
      setConfirming(true);
      return;
    }

    setStatus(null);
    try {
      const body = { password };
      if (selectedEvent) body.event_id = selectedEvent;

      const res = await fetch('/api/admin/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, message: data.message });
        setPassword('');
      } else {
        setStatus({ ok: false, message: data.error });
      }
    } catch {
      setStatus({ ok: false, message: 'Network error.' });
    }
    setConfirming(false);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="font-[BioRhyme,serif] text-[#BA0C2F] text-2xl font-extrabold mb-2">
        Admin
      </h1>
      <p className="text-slate-500 text-sm mb-8">
        Reset the gallery database. This deletes submitted projects, votes, and comments.
      </p>

      <label className="block text-sm font-semibold text-slate-700 mb-1">
        Scope
      </label>
      <select
        value={selectedEvent}
        onChange={(e) => { setSelectedEvent(e.target.value); setConfirming(false); }}
        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#BA0C2F]/30 focus:border-[#BA0C2F] bg-white"
      >
        {eventOptions.map((opt) => (
          <option key={opt.id} value={opt.id}>{opt.label}</option>
        ))}
      </select>

      <label className="block text-sm font-semibold text-slate-700 mb-1">
        Admin password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); setConfirming(false); }}
        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#BA0C2F]/30 focus:border-[#BA0C2F]"
        placeholder="Enter password"
      />

      <button
        onClick={handleReset}
        disabled={!password}
        className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
          confirming
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-[#BA0C2F] hover:bg-[#9a0a27] text-white disabled:opacity-40 disabled:cursor-not-allowed'
        }`}
      >
        {confirming
          ? `Are you sure? This will clear ${selectedEvent ? `"${selectedEvent}"` : 'ALL'} projects.`
          : `Clear ${selectedEvent ? `"${selectedEvent}"` : 'all'} projects`}
      </button>

      {status && (
        <div className={`mt-4 p-3 rounded-lg text-sm ${
          status.ok ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {status.message}
        </div>
      )}
    </div>
  );
}
