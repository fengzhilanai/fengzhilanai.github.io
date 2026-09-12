import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Loader2 } from 'lucide-react';
import { SplineScene } from '@/components/spline-scene';

// 复用当前应用内置的 Spline 3D 场景（官方组件自带场景），不新建、不替换。
const SPLINE_SCENE_URL = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

function StageFallback() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        backgroundColor: '#14100c',
        backgroundImage:
          'radial-gradient(circle at 62% 45%, rgba(250,109,15,0.22), transparent 55%), repeating-linear-gradient(135deg, rgba(250,109,15,0.08) 0 16px, transparent 16px 32px)',
      }}
    />
  );
}

/**
 * 全屏 Spline 3D 场域：完整承载官方 SplineScene 组件。
 * 墨黑底 + 加载中品牌占位 + 加载失败斜纹/光晕降级；纯装饰，不承载信息。
 */
export default function SplineStage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundColor: '#14100c' }}>
      <ErrorBoundary fallback={<StageFallback />}>
        <div className="absolute inset-0" aria-hidden="true">
          <SplineScene
            scene={SPLINE_SCENE_URL}
            className="h-full w-full"
            onLoad={() => setLoaded(true)}
          />
        </div>

        {!loaded && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3">
            <Loader2 className="size-7 animate-spin text-[#fa6d0f]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#f3ecdd]/70">
              正在进入场域
            </span>
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}
