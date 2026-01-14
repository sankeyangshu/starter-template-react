import { useState } from 'react';
import { useTheme } from '@/components/common/theme-provider';
import { cn } from '@/lib/utils';

function SwitchDark() {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  // 判断当前是否为暗黑模式
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div
      className={cn(
        `
          relative inline-block size-[60px] cursor-pointer rounded-full border transition-all
          duration-300
        `,
        'border-background bg-background',
        isActive
          ? 'shadow-[inset_2px_2px_6px_#c5c5c5,inset_-2px_-2px_6px_#ffffff]'
          : `
            shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff]
            hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
          `,
        'dark:shadow-[inset_4px_4px_12px_#0d0d0d,inset_-4px_-4px_12px_#272727]',
        'dark:hover:shadow-[inset_6px_6px_16px_#000000,inset_-6px_-6px_16px_#2a2a2a]',
      )}
    >
      {/* SVG 图标 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width={24}
          height={24}
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
          className={cn(
            'text-gray-700 transition-all duration-400 ease-in-out',
            'dark:text-gray-300',
            isActive ? 'scale-90' : 'scale-100',
          )}
          style={{ transform: isDark ? 'rotate(40deg)' : 'rotate(90deg)' }}
        >
          <mask id="moon-mask-switch">
            <rect x={0} y={0} width={20} height={20} fill="white" />
            <circle
              cx={11}
              cy={3}
              r={8}
              fill="black"
              className="
                transition-transform duration-640 ease-[cubic-bezier(0.41,0.64,0.32,1.575)]
              "
              style={{
                transform: isDark ? 'translate(0px, 0px)' : 'translate(16px, -3px)',
              }}
            />
          </mask>
          <circle
            className="origin-center transition-transform duration-400 ease-in-out"
            cx={10}
            cy={10}
            r={8}
            mask="url(#moon-mask-switch)"
            style={{
              transform: isDark ? 'scale(1)' : 'scale(0.55)',
            }}
          />
          <g>
            <circle
              className="origin-center"
              cx={18}
              cy={10}
              r="1.5"
              style={{
                transform: isDark ? 'scale(0)' : 'scale(1)',
                animationName: isDark ? 'none' : 'showRay',
                animationDuration: '0.4s',
                animationTimingFunction: 'ease',
                animationDelay: '0s',
                animationIterationCount: '1',
                animationFillMode: 'forwards',
              }}
            />
            <circle
              className="origin-center"
              cx={14}
              cy="16.928"
              r="1.5"
              style={{
                transform: isDark ? 'scale(0)' : 'scale(1)',
                animationName: isDark ? 'none' : 'showRay',
                animationDuration: '0.4s',
                animationTimingFunction: 'ease',
                animationDelay: '0.05s',
                animationIterationCount: '1',
                animationFillMode: 'forwards',
              }}
            />
            <circle
              className="origin-center"
              cx={6}
              cy="16.928"
              r="1.5"
              style={{
                transform: isDark ? 'scale(0)' : 'scale(1)',
                animationName: isDark ? 'none' : 'showRay',
                animationDuration: '0.4s',
                animationTimingFunction: 'ease',
                animationDelay: '0.1s',
                animationIterationCount: '1',
                animationFillMode: 'forwards',
              }}
            />
            <circle
              className="origin-center"
              cx={2}
              cy={10}
              r="1.5"
              style={{
                transform: isDark ? 'scale(0)' : 'scale(1)',
                animationName: isDark ? 'none' : 'showRay',
                animationDuration: '0.4s',
                animationTimingFunction: 'ease',
                animationDelay: '0.17s',
                animationIterationCount: '1',
                animationFillMode: 'forwards',
              }}
            />
            <circle
              className="origin-center"
              cx={6}
              cy="3.1718"
              r="1.5"
              style={{
                transform: isDark ? 'scale(0)' : 'scale(1)',
                animationName: isDark ? 'none' : 'showRay',
                animationDuration: '0.4s',
                animationTimingFunction: 'ease',
                animationDelay: '0.25s',
                animationIterationCount: '1',
                animationFillMode: 'forwards',
              }}
            />
            <circle
              className="origin-center"
              cx={14}
              cy="3.1718"
              r="1.5"
              style={{
                transform: isDark ? 'scale(0)' : 'scale(1)',
                animationName: isDark ? 'none' : 'showRay',
                animationDuration: '0.4s',
                animationTimingFunction: 'ease',
                animationDelay: '0.29s',
                animationIterationCount: '1',
                animationFillMode: 'forwards',
              }}
            />
          </g>
        </svg>
      </div>

      {/* 隐藏的 checkbox */}
      <input
        type="checkbox"
        id="themeToggle"
        checked={isDark}
        onChange={handleToggle}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
        className="absolute top-0 left-0 z-10 size-full cursor-pointer opacity-0"
      />
    </div>
  );
}

export default SwitchDark;
