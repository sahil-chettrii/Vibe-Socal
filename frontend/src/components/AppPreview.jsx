import { useState } from 'react'
import { Sun, Moon, MessageCircle, Users, UserPlus, Paperclip, Send, Video } from 'lucide-react'
import mia from '../assets/avatar-mia.svg'
import noah from '../assets/avatar-noah.svg'
import theo from '../assets/avatar-theo.svg'
import ava from '../assets/avatar-ava.svg'
import desi from '../assets/avatar-desi.svg'

const tabs = [
  { id: 'light', label: 'Desktop · Light', icon: Sun },
  { id: 'dark', label: 'Desktop · Dark', icon: Moon },
  { id: 'mobile', label: 'Mobile chats', icon: MessageCircle },
  { id: 'group', label: 'Group chat', icon: Users },
  { id: 'friends', label: 'Friends', icon: UserPlus },
]

const chats = [
  { name: 'Weekend Crew', img: mia },
  { name: 'Ava Williams', img: ava },
  { name: 'Design Team', img: noah },
  { name: 'Theo Martin', img: theo },
  { name: 'Mia Chen', img: desi },
]

const groupMessages = [
  { from: 'Mia', img: mia, time: '9:36 AM', text: 'Are we still on for the park this Saturday?' },
  { from: 'Noah', img: noah, time: '9:37 AM', text: "I'm in! I can bring the speaker." },
  { from: 'Theo', img: theo, time: '9:37 AM', text: 'Count me in too. What time?' },
  { from: 'You', mine: true, time: '9:38 AM', text: 'Absolutely! I found the perfect spot by the lake.' },
  { from: 'Ava', img: ava, time: '9:40 AM', text: "Love it. I'll bring sandwiches for everyone." },
  { from: 'Mia', img: mia, time: '9:41 AM', text: "I'll bring snacks. See you all at 11!" },
]

/* Desktop chat: light and dark */
function DesktopChat({ dark }) {
  const box = dark ? 'border-white/10 bg-brand-dark text-white' : 'border-slate-200 bg-white'
  const line = dark ? 'border-white/10' : 'border-slate-100'
  const soft = dark ? 'bg-white/10' : 'bg-slate-100'

  return (
    <div className={`overflow-hidden rounded-xl border ${box}`}>
      <div className="grid min-h-[420px] sm:grid-cols-[240px_1fr]">

        {/* Chat list */}
        <aside className={`hidden border-r p-4 sm:block ${line}`}>
          <p className="mb-3 font-bold">Messages</p>
          <div className={`mb-3 rounded-lg px-3 py-2 text-xs text-slate-400 ${soft}`}>
            Search conversations
          </div>
          {chats.map((chat, i) => (
            <div
              key={chat.name}
              className={`flex items-center gap-2 rounded-xl p-2 ${i === 0 ? (dark ? 'bg-white/10' : 'bg-brand-soft') : ''}`}
            >
              <img src={chat.img} alt={chat.name} className="h-9 w-9 rounded-full" />
              <span className="truncate text-xs font-semibold">{chat.name}</span>
            </div>
          ))}
        </aside>

        {/* Conversation */}
        <div className="flex flex-col p-5">
          <div className={`mb-4 flex items-center gap-3 border-b pb-3 ${line}`}>
            <img src={mia} alt="Weekend Crew" className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">Weekend Crew</p>
              <p className="text-xs text-slate-400">6 members · 4 online</p>
            </div>
            <Video size={16} className="ml-auto text-slate-400" />
          </div>

          <div className={`w-fit rounded-2xl px-4 py-2 text-sm ${soft}`}>
            Are we still on for the park this Saturday?
          </div>
          <div className="ml-auto mt-4 w-fit max-w-[70%] rounded-2xl bg-brand px-4 py-2 text-sm text-white">
            Absolutely! I found the perfect spot by the lake.
          </div>

          <div className={`mt-auto flex items-center gap-3 rounded-xl border px-3 py-3 text-xs text-slate-400 ${line}`}>
            <Paperclip size={14} /> Write a message…
            <span className="ml-auto grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
              <Send size={14} />
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

/* Group chat */
function GroupChat() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="grid min-h-[420px] sm:grid-cols-[240px_1fr]">

        {/* Chat list */}
        <aside className="hidden border-r border-slate-100 p-4 sm:block">
          <p className="mb-3 font-bold">Messages</p>
          <div className="mb-3 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-400">
            Search conversations
          </div>
          {chats.map((chat, i) => (
            <div
              key={chat.name}
              className={`flex items-center gap-2 rounded-xl p-2 ${i === 0 ? 'bg-brand-soft' : ''}`}
            >
              <img src={chat.img} alt={chat.name} className="h-9 w-9 rounded-full" />
              <span className="truncate text-xs font-semibold">{chat.name}</span>
            </div>
          ))}
        </aside>

        {/* Group conversation */}
        <div className="flex flex-col p-5">

          {/* Header with members */}
          <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-3">
            <img src={mia} alt="Weekend Crew" className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-sm font-semibold">Weekend Crew</p>
              <p className="text-xs text-slate-400">6 members · 4 online</p>
            </div>
            <div className="ml-auto flex -space-x-2">
              {[mia, noah, theo, ava].map((img, i) => (
                <img key={i} src={img} alt="" className="h-7 w-7 rounded-full border-2 border-white" />
              ))}
              <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-slate-100 text-[10px] font-semibold text-slate-500">
                +2
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3">
            {groupMessages.map((m, i) =>
              m.mine ? (
                <div key={i} className="ml-auto max-w-[70%]">
                  <div className="rounded-2xl bg-brand px-4 py-2 text-sm text-white">{m.text}</div>
                  <p className="mt-1 text-right text-[10px] text-slate-400">{m.time}</p>
                </div>
              ) : (
                <div key={i} className="flex items-end gap-2">
                  <img src={m.img} alt={m.from} className="h-7 w-7 rounded-full" />
                  <div className="max-w-[70%]">
                    <p className="mb-1 text-[11px] text-slate-400">{m.from} · {m.time}</p>
                    <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm">{m.text}</div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Input */}
          <div className="mt-auto flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-3 text-xs text-slate-400">
            <Paperclip size={14} /> Write a message…
            <span className="ml-auto grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
              <Send size={14} />
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

/* Section with tabs */
export default function AppPreview() {
  const [active, setActive] = useState('light')

  return (
    <section id="community" className="mx-auto max-w-6xl px-5 py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-brand">Meet Vibe</p>
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        See the whole conversation.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
        A familiar, thoughtful experience for messages, friendships, communities,
        and everything you share between them.
      </p>

      {/* Tab buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
              active === tab.id
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white hover:bg-slate-50'
            }`}
          >
            <tab.icon size={15} /> {tab.label}
          </button>
        ))}
      </div>

      {/* Preview area */}
      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 text-left sm:p-12">
        {active === 'group' ? <GroupChat /> : <DesktopChat dark={active === 'dark'} />}
      </div>

      {['mobile', 'friends'].includes(active) && (
        <p className="mt-3 text-xs text-slate-400">
          This view is a placeholder. We'll build it later.
        </p>
      )}
    </section>
  )
}