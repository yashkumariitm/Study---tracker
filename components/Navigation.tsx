"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  CalendarDays,
  BotMessageSquare,
  BarChart3,
  Settings as SettingsIcon,
  PlusCircle,
  Timer,
  Search,
  Sparkles,
  BookOpen,
  MessageSquareHeart,
  Menu,
  X,
  Flame,
} from "lucide-react";
import { useStudyStore } from "@/store/useStudyStore";

export const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Subjects", href: "/subjects", icon: FolderKanban },
  { label: "Notes", href: "/notes", icon: BookOpen },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
  { label: "AI Mentor", href: "/ai-mentor", icon: BotMessageSquare, badge: "AI" },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: SettingsIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  const setIsAddPlaylistOpen = useStudyStore((s) => s.setIsAddPlaylistOpen);
  const setIsPomodoroOpen = useStudyStore((s) => s.setIsPomodoroOpen);
  const setCommandPaletteOpen = useStudyStore((s) => s.setCommandPaletteOpen);
  const setIsFeedbackOpen = useStudyStore((s) => s.setIsFeedbackOpen);

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-[#07070c]/90 backdrop-blur-xl border-r border-white/[0.08] z-30 select-none">
      {/* Brand Header */}
      <div className="h-16 px-6 flex items-center justify-between border-b border-white/[0.08]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f0ff] to-[#a855f7] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#07070c] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#00f0ff]" />
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
              STUDY<span className="text-[#00f0ff]">TRACKER</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gray-500 block uppercase">
              Command Center
            </span>
          </div>
        </Link>
      </div>

      {/* Quick Global Action Buttons */}
      <div className="p-4 space-y-2">
        <button
          onClick={() => setIsAddPlaylistOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] cursor-pointer"
        >
          <PlusCircle className="w-4 h-4 text-black stroke-[2.5]" />
          <span>Add Playlist</span>
          <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-black/30 text-black/90 font-mono">
            N
          </kbd>
        </button>

        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 hover:text-white hover:bg-white/[0.07] transition-all cursor-pointer"
        >
          <Search className="w-3.5 h-3.5 text-gray-400" />
          <span>Quick Find...</span>
          <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-white/10 font-mono text-gray-300">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group relative ${
                isActive
                  ? "bg-white/[0.08] text-white font-semibold shadow-inner border border-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
              )}
              <Icon
                className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? "text-[#00f0ff]" : "text-gray-400 group-hover:text-gray-200"
                }`}
              />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Pomodoro Timer Dock & Feedback in Sidebar Footer */}
      <div className="p-4 border-t border-white/[0.08] space-y-2">
        <button
          onClick={() => setIsPomodoroOpen(true)}
          className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.07] hover:border-[#ff2e97]/40 transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#ff2e97]/15 border border-[#ff2e97]/30 flex items-center justify-center text-[#ff2e97] group-hover:scale-105 transition-transform">
              <Timer className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-gray-200">Pomodoro</div>
              <div className="text-[10px] text-gray-500 font-mono">25m focus / 5m rest</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#ff2e97] bg-[#ff2e97]/10 px-2 py-0.5 rounded border border-[#ff2e97]/20">
            Start
          </span>
        </button>

        <button
          onClick={() => setIsFeedbackOpen(true)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#00f0ff]/30 text-gray-400 hover:text-white transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#00f0ff] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-medium">Feedback</span>
          </div>
          <span className="text-[10px] text-gray-500 font-mono">Share ideas</span>
        </button>
      </div>
    </aside>
  );
}

/**
 * MobileHeader: Top app bar displayed on mobile screens (< 768px).
 * Gives branding, quick search, Pomodoro toggle, and menu drawer toggle.
 */
export function MobileHeader() {
  const setCommandPaletteOpen = useStudyStore((s) => s.setCommandPaletteOpen);
  const setIsPomodoroOpen = useStudyStore((s) => s.setIsPomodoroOpen);
  const isMobileMenuOpen = useStudyStore((s) => s.isMobileMenuOpen);
  const setIsMobileMenuOpen = useStudyStore((s) => s.setIsMobileMenuOpen);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#07070c]/95 backdrop-blur-xl border-b border-white/[0.08] z-30 px-3.5 flex items-center justify-between select-none">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#00f0ff] to-[#a855f7] p-[1.5px] shadow-[0_0_10px_rgba(0,240,255,0.4)]">
          <div className="w-full h-full bg-[#07070c] rounded-[7px] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
          </div>
        </div>
        <div>
          <span className="font-heading font-bold text-sm tracking-wide text-white">
            STUDY<span className="text-[#00f0ff]">TRACKER</span>
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          aria-label="Quick Find"
        >
          <Search className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsPomodoroOpen(true)}
          className="p-2 rounded-xl text-gray-400 hover:text-[#ff2e97] hover:bg-[#ff2e97]/10 transition-colors cursor-pointer"
          aria-label="Pomodoro Timer"
        >
          <Timer className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-[#00f0ff]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}

/**
 * MobileMenuDrawer: Slide-over navigation panel providing access to all pages,
 * settings, timer, feedback, and quick actions on mobile.
 */
export function MobileMenuDrawer() {
  const pathname = usePathname();
  const isMobileMenuOpen = useStudyStore((s) => s.isMobileMenuOpen);
  const setIsMobileMenuOpen = useStudyStore((s) => s.setIsMobileMenuOpen);
  const setIsAddPlaylistOpen = useStudyStore((s) => s.setIsAddPlaylistOpen);
  const setIsPomodoroOpen = useStudyStore((s) => s.setIsPomodoroOpen);
  const setCommandPaletteOpen = useStudyStore((s) => s.setCommandPaletteOpen);
  const setIsFeedbackOpen = useStudyStore((s) => s.setIsFeedbackOpen);
  const settings = useStudyStore((s) => s.settings);

  // Close drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, setIsMobileMenuOpen]);

  // Lock body scroll when drawer is open on mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Drawer Container */}
      <div className="relative w-72 max-w-[85vw] h-full bg-[#090912] border-l border-white/10 shadow-2xl flex flex-col justify-between p-5 z-10 animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f0ff] to-[#a855f7] p-[1px]">
                <div className="w-full h-full bg-[#07070c] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#00f0ff]" />
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-white">
                  {settings.userName || "Study Tracker"}
                </span>
                <span className="text-[10px] font-mono text-gray-500 block">Command Center</span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Button */}
          <div className="pt-4 pb-2 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAddPlaylistOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#a855f7] text-black font-semibold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 stroke-[2.5]" />
              <span>Add YouTube Material</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setCommandPaletteOpen(true);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Quick Search (⌘K)</span>
            </button>
          </div>

          {/* Nav List */}
          <nav className="py-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/[0.08] text-white font-semibold border border-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-[#00f0ff]" : "text-gray-400"
                    }`}
                  />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-white/10 space-y-2">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsPomodoroOpen(true);
            }}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/10 text-xs hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Timer className="w-3.5 h-3.5 text-[#ff2e97]" />
              <span className="text-gray-200">Pomodoro Timer</span>
            </div>
            <span className="text-[10px] font-mono text-[#ff2e97]">25 min</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsFeedbackOpen(true);
            }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Share Feedback</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * MobileTabBar: Bottom 5-slot navigation bar with comfortable touch targets.
 */
export function MobileTabBar() {
  const pathname = usePathname();
  const setIsAddPlaylistOpen = useStudyStore((s) => s.setIsAddPlaylistOpen);
  const setIsMobileMenuOpen = useStudyStore((s) => s.setIsMobileMenuOpen);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#07070c]/95 backdrop-blur-xl border-t border-white/[0.08] z-40 px-2 flex items-center justify-around pb-safe">
      {/* 1. Dashboard */}
      <Link
        href="/"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          pathname === "/" ? "text-[#00f0ff]" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        <LayoutDashboard className="w-5 h-5" />
        <span className="text-[9px] mt-0.5 font-medium tracking-tight">Dashboard</span>
      </Link>

      {/* 2. Subjects */}
      <Link
        href="/subjects"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          pathname === "/subjects" ? "text-[#00f0ff]" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        <FolderKanban className="w-5 h-5" />
        <span className="text-[9px] mt-0.5 font-medium tracking-tight">Subjects</span>
      </Link>

      {/* 3. Center Floating Add Button */}
      <button
        onClick={() => setIsAddPlaylistOpen(true)}
        className="w-11 h-11 -mt-5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#a855f7] flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,240,255,0.6)] cursor-pointer shrink-0 mx-1 active:scale-95 transition-transform"
        aria-label="Add Material"
      >
        <PlusCircle className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* 4. AI Mentor */}
      <Link
        href="/ai-mentor"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors relative ${
          pathname === "/ai-mentor" ? "text-[#00f0ff]" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        <BotMessageSquare className="w-5 h-5" />
        <span className="text-[9px] mt-0.5 font-medium tracking-tight">AI Mentor</span>
        <span className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
      </Link>

      {/* 5. Menu Drawer Trigger */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="flex flex-col items-center justify-center flex-1 py-1 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
        aria-label="More Options"
      >
        <Menu className="w-5 h-5" />
        <span className="text-[9px] mt-0.5 font-medium tracking-tight">More</span>
      </button>
    </div>
  );
}
