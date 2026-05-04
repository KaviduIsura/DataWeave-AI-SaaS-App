import React from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import {
  Plus,
  MessageSquare,
  Settings,
  User,
  Compass,
  Image,
  Mic,
  DollarSign,
  FileQuestion,
} from 'lucide-react';

function Sidebar() {
  return (
    <div className="h-screen flex bg-[#0B0F1A] p-2">
      <div className="flex  bg-[#10111a] backdrop-blur-md border border-[#3e414b] p-1 rounded-lg ">
        {/* LEFT ICON BAR */}
        <div className="w-14 rounded-l-lg bg-[#10111a] backdrop-blur-md border border-[#3e414b] flex flex-col justify-between items-center py-5">
          {/* Top */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-md bg-blue-500 shadow-md" />
            <div className="h-0.5 w-full bg-[#3e414b] mt-3 mb-4" />
            <div className="flex flex-col gap-4">
              {/* Safari - square with border */}
              <div className="w-9 h-9 rounded-lg border border-[#3e414b]  flex items-center justify-center hover:bg-[#1a1c26] transition-colors">
                <Compass className="w-5 h-5 text-white" />
              </div>

              {/* Image - square with border */}
              <div className="w-9 h-9 rounded-lg border border-[#3e414b] flex items-center justify-center hover:bg-[#1a1c26] transition-colors">
                <Image className="w-5 h-5 text-white" />
              </div>

              {/* Voice - square with border */}
              <div className="w-9 h-9 rounded-lg border border-[#3e414b] flex items-center justify-center hover:bg-[#1a1c26] transition-colors">
                <Mic className="w-5 h-5 text-white" />
              </div>

              {/* Dollar - square with border */}
              <div className="w-9 h-9 rounded-lg border border-[#3e414b] flex items-center justify-center hover:bg-[#1a1c26] transition-colors">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-4">
            <div className="h-0.5 w-full bg-[#3e414b] mb-2" />
            <div className="w-9 h-9 rounded-lg border border-[#3e414b] flex items-center justify-center">
              <FileQuestion className="w-5 h-5 text-white" />
            </div>
            <div className="w-9 h-9 rounded-lg   border border-[#3e414b] flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div className="w-9 h-9 rounded-lg border border-[#3e414b] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div className="w-65 rounded-r-lg bg-[#10111a] backdrop-blur-md border border-[#3e414b] flex flex-col p-3">
          {/* Header */}
          <div className="mt-2">
            <h2 className="text-white font-semibold text-lg">DataWave</h2>
          </div>
          <div className="h-0.5 w-full bg-[#3e414b] mt-4 mb-2" />
          {/* New Chat */}
          <Button className="w-full h-10 mb-2 bg-[#1a2131] hover:bg-[#1a2131]/80 text-white flex items-center justify-center">
            <Plus className="w-4 h-4 mr-2" />
            Add New Chat
          </Button>

          {/* Chat List */}
          <ScrollArea className="flex-1 pr-2">
            <Section title="Today" />
            <ChatItem active text="What is data wave?" />
            <ChatItem text="Explain AI models" />

            <Section title="Yesterday" />
            <ChatItem text="Dashboard design ideas" />
            <ChatItem text="API integration" />

            <Section title="Last Week" />
            <ChatItem text="React performance tips" />
          </ScrollArea>

          {/* Upgrade Card */}
          <div className="mt-4 p-3 rounded-lg bg-[#10111a] border border-[#3e414b] text-white shadow-lg">
            <p className="text-sm font-medium">Upgrade to Pro</p>
            <p className="text-xs text-white/70 mb-2">
              Faster responses & premium features
            </p>
            <Button
              size="sm"
              variant="secondary"
              className="w-full bg-gradient-to-t from-blue-600 to-gray-300"
            >
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

// 🔹 Reusable Components

function Icon() {
  return (
    <div className="w-8 h-8 rounded-md bg-white/10 hover:bg-blue-500/30 transition cursor-pointer" />
  );
}

function Section({ title }: { title: string }) {
  return <p className="text-xs text-gray-400 mt-4 mb-2 px-1">{title}</p>;
}

function ChatItem({ text, active }: { text: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition
        ${
          active
            ? 'bg-blue-600/30 text-white'
            : 'text-gray-300 hover:bg-white/10'
        }`}
    >
      <MessageSquare className="w-4 h-4" />
      <p className="text-sm truncate">{text}</p>
    </div>
  );
}
