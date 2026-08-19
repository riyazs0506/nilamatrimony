import React from 'react';

interface KolamMotifProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  decorative?: boolean;
}

export const KolamMotif: React.FC<KolamMotifProps> = ({
  className = '',
  size = 24,
  color = '#D4AF37',
  strokeWidth = 1.5,
  decorative = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${className}`}
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : 'Kongu Nila Kolam motif'}
      focusable="false"
    >
      {/* =====================================================
          OUTER DECORATIVE RING
      ===================================================== */}

      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray="2.5 3.5"
        opacity="0.45"
      />

      {/* =====================================================
          OUTER DOTS
      ===================================================== */}

      <circle
        cx="50"
        cy="7"
        r="1.8"
        fill={color}
        opacity="0.75"
      />

      <circle
        cx="93"
        cy="50"
        r="1.8"
        fill={color}
        opacity="0.75"
      />

      <circle
        cx="50"
        cy="93"
        r="1.8"
        fill={color}
        opacity="0.75"
      />

      <circle
        cx="7"
        cy="50"
        r="1.8"
        fill={color}
        opacity="0.75"
      />


      {/* =====================================================
          INNER CIRCLE
      ===================================================== */}

      <circle
        cx="50"
        cy="50"
        r="34"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        opacity="0.75"
      />


      {/* =====================================================
          MAIN KOLAM / LOTUS
      ===================================================== */}

      <path
        d="
          M50 15
          C56 29 68 42 85 50
          C68 58 56 71 50 85
          C44 71 32 58 15 50
          C32 42 44 29 50 15
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill={`${color}12`}
      />


      {/* =====================================================
          INNER DIAMOND FLOW
      ===================================================== */}

      <path
        d="
          M27 27
          C39 36 46 43 50 50
          C54 43 61 36 73 27

          C64 39 57 46 50 50

          C57 54 64 61 73 73

          C61 64 54 57 50 50

          C46 57 39 64 27 73

          C36 61 43 54 50 50

          C43 46 36 39 27 27
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
        strokeLinejoin="round"
        opacity="0.7"
      />


      {/* =====================================================
          FOUR PETAL CONNECTIONS
      ===================================================== */}

      <path
        d="
          M50 25
          C55 35 65 45 75 50

          M75 50
          C65 55 55 65 50 75

          M50 75
          C45 65 35 55 25 50

          M25 50
          C35 45 45 35 50 25
        "
        stroke={color}
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
        opacity="0.65"
      />


      {/* =====================================================
          FOUR MAIN DOTS
      ===================================================== */}

      <circle
        cx="50"
        cy="19"
        r="2.5"
        fill={color}
      />

      <circle
        cx="81"
        cy="50"
        r="2.5"
        fill={color}
      />

      <circle
        cx="50"
        cy="81"
        r="2.5"
        fill={color}
      />

      <circle
        cx="19"
        cy="50"
        r="2.5"
        fill={color}
      />


      {/* =====================================================
          CENTER
      ===================================================== */}

      <circle
        cx="50"
        cy="50"
        r="6"
        fill={`${color}18`}
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <circle
        cx="50"
        cy="50"
        r="2.5"
        fill={color}
      />

    </svg>
  );
};