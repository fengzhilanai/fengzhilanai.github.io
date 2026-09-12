import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';
import { MOCK_PATHS, type IPath } from '@/data/paths';
import { UPCOMING_PATH_IDS } from '@/lib/pathsMeta';
import Header from '@/components/Header';
import SplineStage from '@/components/SplineStage';

const ease = [0.16, 1, 0.3, 1] as const;

const CHAPTER: Record<IPath['accent'], string> = {
  orange: 'bg-[#fa6d0f] text-[#171310]',
  black: 'bg-[#f3ecdd] text-[#171310]',
  cream: 'border-2 border-[#f3ecdd] bg-transparent text-[#f3ecdd]',
};

function IdentityCard({ path, index }: { path: IPath; index: number }) {
  const upcoming = UPCOMING_PATH_IDS.has(path.id);
  const preview = path.audiences.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.35 + index * 0.1, ease }}
      className="h-full"
    >
      <UniversalLink
        to={path.url}
        aria-label={`${path.title}，进入专属页面`}
        className="group pointer-events-auto relative flex h-full flex-col border-2 border-[#f3ecdd]/25 bg-[#14100c]/60 p-5 backdrop-blur-md outline-none transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-[#fa6d0f] hover:bg-[#14100c]/80 hover:shadow-[7px_7px_0_#fa6d0f] focus-visible:-translate-x-1 focus-visible:-translate-y-1 focus-visible:border-[#fa6d0f] focus-visible:shadow-[7px_7px_0_#fa6d0f] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#fa6d0f] md:p-6"
      >
        <div className="flex items-start justify-between gap-2">
          <span
            className={`flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-[#f3ecdd]/80 text-sm font-black tracking-wider md:size-11 ${CHAPTER[path.accent]}`}
          >
            {path.no}
          </span>
          <div className="flex flex-col items-end gap-1.5">
            {upcoming && (
              <span className="border border-[#f3ecdd]/40 px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-[#f3ecdd]/60">
                即将开放
              </span>
            )}
            <span className="flex size-7 items-center justify-center border-2 border-[#f3ecdd]/70 text-[#f3ecdd] transition-colors duration-200 group-hover:border-[#fa6d0f] group-hover:bg-[#fa6d0f] group-hover:text-[#171310]">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>

        <h3 className="mt-4 text-lg font-black leading-snug text-[#f3ecdd] md:text-xl">
          {path.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[#f3ecdd]/65">{path.tagline}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {preview.map((audience) => (
            <span
              key={audience}
              className="border border-[#f3ecdd]/25 bg-[#f3ecdd]/5 px-1.5 py-0.5 text-[11px] font-medium text-[#f3ecdd]/70"
            >
              {audience}
            </span>
          ))}
          <span className="px-1 py-0.5 text-[11px] font-bold text-[#fa6d0f]">
            进入专属页面 ↗
          </span>
        </div>
      </UniversalLink>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#14100c] text-[#f3ecdd]"
    >
      {/* 3D 场域铺满整屏，作为主视觉/背景；卡片浮于其上层 */}
      <div className="absolute inset-0 z-0">
        <SplineStage />
      </div>

      {/* 可读性压暗：左侧与底部加墨黑渐变，纯装饰 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(105deg, rgba(20,16,12,0.92) 0%, rgba(20,16,12,0.72) 38%, rgba(20,16,12,0.25) 70%, rgba(20,16,12,0.45) 100%), linear-gradient(to top, rgba(20,16,12,0.95) 0%, rgba(20,16,12,0.35) 42%, rgba(20,16,12,0) 70%)',
        }}
      />

      {/* 前景内容层保持鼠标穿透，让远程 Spline 场景继续接收机器人跟随事件；卡片单独恢复交互。 */}
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col">
        <Header />

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-8 pt-2 md:px-8 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 border-2 border-[#fa6d0f] bg-[#fa6d0f]/10 px-2.5 py-1 text-xs font-black tracking-[0.22em] text-[#fa6d0f]">
              <span className="size-2 bg-[#fa6d0f]" />
              PICK YOUR PATH · 选择你的入口
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight md:text-6xl">
              你是谁？
              <br />
              从这里进入
              <span className="text-[#fa6d0f]"> 适合你的 </span>
              AI 路径
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#f3ecdd]/70 md:text-base">
              风之岚科技为三类团队准备了不同的起步方式。选一张最像你的卡片，一分钟对号入座，进入对应的服务页面。
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 md:mt-10 md:gap-5">
            {MOCK_PATHS.map((path, index) => (
              <IdentityCard key={path.id} path={path} index={index} />
            ))}
          </div>
        </div>

        <div className="relative z-10 border-t border-[#f3ecdd]/15">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-[11px] font-bold tracking-[0.14em] text-[#f3ecdd]/45 md:flex-row md:items-center md:justify-between md:px-8">
            <span>风之岚科技 · FENGZHILAN AI TECHNOLOGY</span>
            <span>先做可以实际试用、也方便后续接手的第一版</span>
          </div>
        </div>
      </div>
    </section>
  );
}
