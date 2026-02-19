"use client";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactElement;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  const handleTabClick = (tabId: string) => {
    // 현재 스크롤 위치 저장
    const currentScrollY = window.scrollY;

    // 탭 변경
    onTabChange(tabId);

    // 콘텐츠 렌더링 완료 후 스크롤 복원 (여러 프레임 대기)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: currentScrollY, behavior: 'instant' });
        }, 0);
      });
    });
  };

  return (
    <div className="sticky top-16 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-center gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              <span className="w-4 h-4">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
