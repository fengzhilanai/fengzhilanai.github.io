// 一屏式门户顶栏：透明浮于 3D 场域之上，仅品牌识别 + 一句入口提示，不做导航菜单。
export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center border-2 border-[#f3ecdd] bg-[#fa6d0f] text-lg font-black text-[#171310] shadow-[3px_3px_0_#f3ecdd]">
            岚
          </span>
          <span className="leading-none">
            <span className="block text-base font-black tracking-tight text-[#f3ecdd]">
              风之岚科技
            </span>
            <span className="mt-1 block text-[10px] font-bold tracking-[0.22em] text-[#f3ecdd]/55">
              FENGZHILAN · AI
            </span>
          </span>
        </div>

        <span className="hidden items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#f3ecdd]/70 md:flex">
          <span className="size-2 bg-[#fa6d0f]" />
          三条 AI 路径 · 对号入座
        </span>
      </div>
    </header>
  );
}
