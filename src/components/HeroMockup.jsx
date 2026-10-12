import { Paperclip, Send } from 'lucide-react'
import mia from '../assets/avatar-mia.svg'
import noah from '../assets/avatar-noah.svg'
import theo from '../assets/avatar-theo.svg'
import ava from '../assets/avatar-ava.svg'

const chats = [
  { name: 'Weekend Crew', msg: "Mia: I'll bring snacks", time: '9:41', unread: 3, img: mia },
  { name: 'Ava Williams', msg: 'That sounds perfect', time: '9:18', img: ava },
  { name: 'Design Team', msg: 'Noah shared a file', time: 'Yesterday', unread: 1, img: noah },
  { name: 'Theo Martin', msg: 'Voice message · 0:18', time: 'Tue', img: theo },
]

function LightPhone() {
  return (
    <div className="w-[230px] rounded-[2.2rem] border-[6px] border-slate-900 bg-white p-4 shadow-2xl">
      <p className="text-xs text-slate-400">Welcome back</p>
      <p className="mb-3 text-xl font-bold">Messages</p>

      <div className="mb-3 rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-400">
        Search
      </div>

      {chats.map((chat) => (
        <div key={chat.name} className="flex items-center gap-2 py-2">
          <img src={chat.img} alt={chat.name} className="h-9 w-9 rounded-full" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold">{chat.name}</p>
            <p className="truncate text-[11px] text-slate-500">{chat.msg}</p>
          </div>
          <div className="text-right text-[10px] text-slate-400">
            {chat.time}
            {chat.unread && (
              <span className="ml-1 inline-grid h-4 w-4 place-items-center rounded-full bg-brand text-white">
                {chat.unread}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function DarkPhone() {
  return (
    <div className="w-[210px] rounded-[2.2rem] border-[6px] border-slate-900 bg-brand-dark p-4 text-white shadow-2xl">
      <div className="mb-4 flex items-center gap-2">
        <img src={mia} alt="Weekend Crew" className="h-8 w-8 rounded-full" />
        <span className="text-sm font-semibold">Weekend Crew</span>
      </div>

      <div className="mb-3 rounded-2xl bg-white/10 p-3 text-xs">
        Are we still on for the park this Saturday?
      </div>
      <div className="mb-24 ml-auto w-fit rounded-2xl bg-brand p-3 text-xs">
        Absolutely! Found the perfect spot.
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-white/10 p-2 text-[11px] text-white/50">
        <Paperclip size={12} /> Write a message…
        <Send size={12} className="ml-auto text-brand" />
      </div>
    </div>
  )
}

export default function HeroMockup() {
  return (
    <div className="flex justify-center gap-4 rounded-[2rem] border border-indigo-100 bg-brand-soft/60 p-8 sm:justify-end">
      <LightPhone />
      <div className="hidden pt-10 sm:block">
        <DarkPhone />
      </div>
    </div>
  )
}