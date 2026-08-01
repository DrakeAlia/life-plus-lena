const WOOD = "#6E4F35", GLOW = "#F5CE95";

type SceneProps = {
  kind: "desert" | "living" | "kitchen" | "bedroom" | "patio" | "portrait" | "cactus" | "still" | "exterior" | "gather";
};

export default function Scene({ kind }: SceneProps) {
  const box = { viewBox: "0 0 400 500", preserveAspectRatio: "xMidYMid slice" as const };

  const scenes = {
    desert: (
      <svg {...box}>
        <defs>
          <linearGradient id="s-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3E3226" /><stop offset="45%" stopColor="#B87F4C" />
            <stop offset="72%" stopColor="#EFC287" /><stop offset="100%" stopColor="#8A6440" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#s-sky)" />
        <circle cx="250" cy="322" r="30" fill="#FBE0B4" opacity=".85" />
        <path d="M0 330 L70 268 L128 318 L190 258 L268 330 L340 288 L400 332 V500 H0Z" fill="#6A4E36" opacity=".82" />
        <path d="M0 372 L82 330 L160 372 L246 336 L330 380 L400 356 V500 H0Z" fill="#4A3625" opacity=".9" />
        <g fill="#2A1F16">
          <rect x="60" y="330" width="15" height="170" rx="7" />
          <path d="M42 400v-32a10 10 0 0120 0v14h-9v-14a1 1 0 00-2 0v32z" />
          <path d="M93 388v-46a10 10 0 0120 0v40h-9v-40a1 1 0 00-2 0v46z" />
          <rect x="316" y="352" width="12" height="148" rx="6" />
          <path d="M300 412v-28a9 9 0 0017 0v12h-8v-12a1 1 0 00-1 0v28z" />
          <rect x="196" y="392" width="9" height="108" rx="4" />
        </g>
        <path d="M0 452q40-26 82-8t92-4 96 12 130-14V500H0Z" fill="#241A12" />
      </svg>
    ),

    living: (
      <svg {...box}>
        <rect width="400" height="500" fill="#E4D9C7" />
        <rect x="0" y="0" width="400" height="300" fill="#EDE4D5" />
        <rect x="132" y="70" width="136" height="200" fill="#BFB09A" />
        <rect x="146" y="84" width="108" height="172" fill="#3B2E22" />
        <path d="M186 250c-14-16-6-30 2-38 2 12 10 14 12 6 8 10 12 20 6 32z" fill={GLOW} />
        <rect x="132" y="264" width="136" height="14" fill="#A2937C" />
        <rect x="20" y="96" width="86" height="150" fill="#DED2BD" />
        <g fill="#C9BBA4">
          <rect x="28" y="128" width="70" height="6" /><rect x="28" y="176" width="70" height="6" />
          <circle cx="48" cy="118" r="9" /><circle cx="78" cy="120" r="7" />
          <circle cx="54" cy="166" r="8" /><rect x="72" y="158" width="14" height="18" />
        </g>
        <rect x="292" y="90" width="92" height="180" fill="#D8CBB5" />
        <ellipse cx="338" cy="300" rx="34" ry="12" fill="#B9A98F" />
        <path d="M320 300c-6-40 10-56 18-72 8 16 24 32 18 72z" fill="#8E9B7C" />
        <rect x="40" y="330" width="300" height="86" rx="12" fill="#DCD1BE" />
        <rect x="28" y="352" width="40" height="64" rx="10" fill="#D0C4AE" />
        <rect x="312" y="352" width="40" height="64" rx="10" fill="#D0C4AE" />
        <g fill="#C6B79E">
          <rect x="72" y="338" width="54" height="44" rx="8" />
          <rect x="140" y="338" width="54" height="44" rx="8" />
          <rect x="208" y="338" width="54" height="44" rx="8" />
        </g>
        <rect x="120" y="440" width="160" height="12" rx="3" fill={WOOD} />
        <rect x="150" y="452" width="8" height="26" fill={WOOD} />
        <rect x="244" y="452" width="8" height="26" fill={WOOD} />
        <rect x="0" y="466" width="400" height="34" fill="#C3B49B" />
      </svg>
    ),

    kitchen: (
      <svg {...box}>
        <rect width="400" height="500" fill="#E7DDCB" />
        <rect x="0" y="0" width="400" height="196" fill="#EFE7D8" />
        <rect x="118" y="40" width="164" height="150" fill="#DAD0BC" />
        <g stroke="#C4B69C" strokeWidth="3"><path d="M132 96l40 40M200 60l70 70M150 168l84-84" /></g>
        <rect x="0" y="30" width="104" height="160" fill="#E2D8C5" />
        <rect x="296" y="30" width="104" height="160" fill="#E2D8C5" />
        <g stroke="#CDBFA6" strokeWidth="2"><path d="M52 30v160M0 110h104M348 30v160M296 110h104" /></g>
        <g stroke="#3B2E22" strokeWidth="2"><path d="M100 0v54M200 0v42M300 0v54" /></g>
        <g fill="#4A3A2B"><path d="M82 54h36l10 26H72zM182 42h36l10 26h-56zM282 54h36l10 26h-56z" /></g>
        <g fill={GLOW} opacity=".5">
          <ellipse cx="100" cy="96" rx="22" ry="14" /><ellipse cx="200" cy="84" rx="22" ry="14" />
          <ellipse cx="300" cy="96" rx="22" ry="14" />
        </g>
        <rect x="46" y="238" width="308" height="24" rx="4" fill="#D9CDB6" />
        <rect x="58" y="262" width="284" height="112" fill="#C9BCA2" />
        <g stroke="#B5A68A" strokeWidth="2"><path d="M200 262v112M130 300h140" /></g>
        <ellipse cx="200" cy="228" rx="30" ry="10" fill="#B3A488" />
        <path d="M182 228c-6-36 12-50 18-64 6 14 24 28 18 64z" fill="#8C9979" />
        <g fill="#3B2E22">
          <rect x="86" y="386" width="46" height="10" rx="4" /><rect x="104" y="396" width="8" height="70" />
          <rect x="178" y="386" width="46" height="10" rx="4" /><rect x="196" y="396" width="8" height="70" />
          <rect x="270" y="386" width="46" height="10" rx="4" /><rect x="288" y="396" width="8" height="70" />
        </g>
        <rect x="0" y="466" width="400" height="34" fill="#BFAF94" />
      </svg>
    ),

    bedroom: (
      <svg {...box}>
        <rect width="400" height="500" fill="#E6DCCA" />
        <rect x="0" y="0" width="400" height="240" fill="#EEE5D6" />
        <rect x="272" y="46" width="128" height="196" fill="#CFC2A9" />
        <rect x="284" y="58" width="104" height="172" fill="#DCCFAF" />
        <path d="M284 230v-52l30-30 28 34 22-20 24 30v38z" fill="#A9A187" opacity=".7" />
        <rect x="96" y="52" width="120" height="88" fill="#DDD2BE" />
        <rect x="106" y="62" width="100" height="68" fill="#CFC3AC" />
        <rect x="60" y="150" width="230" height="88" rx="6" fill="#C8B99E" />
        <rect x="46" y="238" width="258" height="130" rx="8" fill="#F0E9DC" />
        <g fill="#E2D8C6">
          <rect x="66" y="222" width="86" height="46" rx="16" />
          <rect x="160" y="222" width="86" height="46" rx="16" />
          <rect x="104" y="250" width="100" height="38" rx="14" fill="#DACFB9" />
        </g>
        <rect x="46" y="330" width="258" height="38" fill="#C4B59A" />
        <rect x="52" y="368" width="12" height="34" fill={WOOD} />
        <rect x="286" y="368" width="12" height="34" fill={WOOD} />
        <rect x="316" y="286" width="66" height="82" fill="#BCAD92" />
        <rect x="330" y="240" width="38" height="46" rx="6" fill="#EFDCB8" />
        <rect x="344" y="286" width="10" height="10" fill="#8A7B62" />
        <rect x="0" y="440" width="400" height="60" fill="#BEAF95" />
        <ellipse cx="200" cy="430" rx="150" ry="16" fill="#C9BBA1" opacity=".6" />
      </svg>
    ),

    patio: (
      <svg {...box}>
        <defs>
          <linearGradient id="s-night" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B1611" /><stop offset="60%" stopColor="#3A2B1E" />
            <stop offset="100%" stopColor="#6E4B2E" />
          </linearGradient>
          <radialGradient id="s-fire" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#FFD79A" /><stop offset="100%" stopColor="#C8752A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#s-night)" />
        <path d="M0 300 L84 240 L156 296 L240 236 L320 300 L400 262 V500 H0Z" fill="#2A2018" />
        <g fill="#171209">
          <rect x="18" y="60" width="12" height="250" /><rect x="368" y="60" width="12" height="250" />
          <rect x="18" y="60" width="362" height="12" />
          <rect x="60" y="72" width="8" height="26" /><rect x="130" y="72" width="8" height="26" />
          <rect x="200" y="72" width="8" height="26" /><rect x="270" y="72" width="8" height="26" />
          <rect x="330" y="72" width="8" height="26" />
        </g>
        <rect x="44" y="330" width="150" height="70" rx="10" fill="#5B4632" />
        <rect x="44" y="316" width="150" height="22" rx="10" fill="#6C5540" />
        <rect x="230" y="336" width="120" height="64" rx="10" fill="#544029" />
        <ellipse cx="200" cy="430" rx="120" ry="46" fill="url(#s-fire)" opacity=".7" />
        <rect x="150" y="404" width="100" height="42" rx="4" fill="#3A2C1E" />
        <path d="M182 404c-10-14-4-26 2-32 2 10 8 12 10 5 6 9 10 17 5 27z" fill="#FFCC80" />
        <path d="M206 404c-7-10-3-19 2-24 1 8 6 9 7 4 5 7 7 13 4 20z" fill="#FFE2B0" />
        <rect x="0" y="452" width="400" height="48" fill="#241A12" />
      </svg>
    ),

    portrait: (
      <svg {...box}>
        <rect width="400" height="500" fill="#DFD3BE" />
        <rect x="150" y="0" width="250" height="380" fill="#F2E9D8" />
        <g stroke="#CDBFA6" strokeWidth="4"><path d="M262 0v380M150 190h250" /></g>
        <ellipse cx="300" cy="140" rx="90" ry="110" fill="#F7EFDC" opacity=".8" />
        <path d="M0 0h150v380H0z" fill="#2E2519" />
        <rect x="40" y="300" width="200" height="120" rx="16" fill="#D8CCB6" />
        <rect x="22" y="250" width="42" height="170" rx="16" fill="#CDC0A8" />
        <g fill="#3A2E21">
          <path d="M120 300c-4-40 6-70 30-70s34 28 30 70z" />
          <circle cx="150" cy="212" r="26" />
          <path d="M126 200c0-20 10-32 24-32s24 12 24 32c-6-10-16-14-24-14s-18 4-24 14z" fill="#241B12" />
          <rect x="150" y="286" width="110" height="26" rx="13" />
          <circle cx="196" cy="262" r="12" />
        </g>
        <ellipse cx="196" cy="256" rx="14" ry="6" fill="#F0E4CE" opacity=".7" />
        <rect x="40" y="418" width="220" height="16" rx="6" fill={WOOD} />
        <ellipse cx="330" cy="392" rx="30" ry="10" fill="#B7A88D" />
        <path d="M310 392c-8-46 14-64 20-84 6 20 28 38 20 84z" fill="#8B9878" />
        <rect x="0" y="440" width="400" height="60" fill="#C0B197" />
      </svg>
    ),

    cactus: (
      <svg {...box}>
        <defs>
          <linearGradient id="s-cbg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C79C6A" /><stop offset="100%" stopColor="#4C3A28" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#s-cbg)" />
        <g fill="#3E4A34">
          <rect x="150" y="60" width="52" height="440" rx="26" />
          <path d="M96 340V206a28 28 0 0156 0v58h-28v-58a5 5 0 00-10 0v134z" />
          <path d="M256 320V184a28 28 0 00-56 0v50h28v-50a5 5 0 0110 0v136z" />
          <rect x="246" y="230" width="44" height="270" rx="22" opacity=".85" />
          <rect x="62" y="300" width="38" height="200" rx="19" opacity=".7" />
        </g>
        <g stroke="#5C6B4C" strokeWidth="2" opacity=".7">
          <path d="M164 60v440M188 60v440M258 230v270M278 230v270" />
        </g>
        <path d="M0 470q60-22 120-6t140-4 140 10V500H0Z" fill="#33261A" />
      </svg>
    ),

    still: (
      <svg {...box}>
        <rect width="400" height="500" fill="#EDE4D3" />
        <rect x="0" y="0" width="400" height="330" fill="#E6DCC8" />
        <ellipse cx="120" cy="120" rx="120" ry="150" fill="#F4ECDB" opacity=".8" />
        <path d="M170 330c-16 0-28-16-24-46l10-72h72l10 72c4 30-8 46-24 46z" fill="#CBBCA2" />
        <g stroke="#6F7C5C" strokeWidth="4" fill="none">
          <path d="M200 212c0-50-20-80-46-100M200 212c0-44 16-72 44-92M200 212c0-30-4-58-2-84" />
        </g>
        <g fill="#8B9A74">
          <ellipse cx="150" cy="120" rx="13" ry="7" transform="rotate(-30 150 120)" />
          <ellipse cx="176" cy="152" rx="13" ry="7" transform="rotate(-25 176 152)" />
          <ellipse cx="244" cy="128" rx="13" ry="7" transform="rotate(28 244 128)" />
          <ellipse cx="222" cy="160" rx="13" ry="7" transform="rotate(22 222 160)" />
          <ellipse cx="198" cy="112" rx="11" ry="6" />
        </g>
        <rect x="44" y="290" width="130" height="14" rx="3" fill="#E8DFCB" />
        <rect x="50" y="304" width="124" height="14" rx="3" fill="#D6C9B0" />
        <rect x="56" y="318" width="118" height="14" rx="3" fill="#C2B49A" />
        <rect x="288" y="288" width="42" height="46" rx="6" fill="#F2EADA" />
        <path d="M309 288c-6-8-2-14 2-18 1 6 5 7 6 3 4 5 6 10 3 15z" fill="#F4C583" />
        <rect x="0" y="332" width="400" height="168" fill={WOOD} />
        <rect x="0" y="332" width="400" height="8" fill="#8A6844" />
      </svg>
    ),

    exterior: (
      <svg {...box}>
        <defs>
          <linearGradient id="s-ext" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E2519" /><stop offset="100%" stopColor="#9E7148" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#s-ext)" />
        <path d="M40 180h320v240H40z" fill="#8C755A" />
        <path d="M80 140h240v40H80z" fill="#7A6349" />
        <path d="M150 250h100v170H150z" fill="#3C2E20" />
        <path d="M150 250h100v20H150z" fill="#2A1F15" />
        <rect x="176" y="288" width="48" height="132" fill="#F2CD92" opacity=".65" />
        <g fill="#6E5942"><rect x="66" y="250" width="52" height="70" /><rect x="286" y="250" width="52" height="70" /></g>
        <g fill="#F5D49E" opacity=".55">
          <rect x="74" y="258" width="36" height="54" /><rect x="294" y="258" width="36" height="54" />
        </g>
        <path d="M0 420h400v80H0z" fill="#4C3927" />
        <path d="M160 420h80l40 80H120z" fill="#6E5A42" />
        <g fill="#F3C98B">
          <circle cx="118" cy="440" r="6" /><circle cx="286" cy="440" r="6" />
          <circle cx="96" cy="478" r="6" /><circle cx="308" cy="478" r="6" />
        </g>
        <g fill="#4A5940">
          <path d="M60 424c-6-30 4-46 8-58 4 12 14 28 8 58zM40 430c-8-24 0-38 4-48 4 10 12 24 6 48z" />
          <path d="M344 424c6-30-4-46-8-58-4 12-14 28-8 58z" />
        </g>
      </svg>
    ),

    gather: (
      <svg {...box}>
        <rect width="400" height="500" fill="#E9DFCC" />
        <rect x="0" y="0" width="400" height="300" fill="#DCD0B9" />
        <ellipse cx="200" cy="150" rx="150" ry="120" fill="#F0E7D3" opacity=".7" />
        <rect x="0" y="300" width="400" height="200" fill={WOOD} />
        <rect x="0" y="292" width="400" height="14" fill="#8A6844" />
        <g fill="#F6EEDC">
          <path d="M96 292c-14 0-22-10-22-24l6-32h32l6 32c0 14-8 24-22 24z" />
          <path d="M304 292c-14 0-22-10-22-24l6-32h32l6 32c0 14-8 24-22 24z" />
          <path d="M200 292c-14 0-22-10-22-24l6-32h32l6 32c0 14-8 24-22 24z" />
        </g>
        <g fill="#C97F49" opacity=".75">
          <path d="M84 240h24l-4 22H88zM288 240h24l-4 22h-16zM188 240h24l-4 22h-16z" />
        </g>
        <g fill="#3A2E21">
          <circle cx="128" cy="196" r="22" /><path d="M104 300c-4-58 10-84 24-84s28 26 24 84z" />
          <circle cx="272" cy="196" r="22" /><path d="M248 300c-4-58 10-84 24-84s28 26 24 84z" />
        </g>
        <ellipse cx="200" cy="70" rx="70" ry="30" fill={GLOW} opacity=".55" />
        <g fill="#4A3A2B"><rect x="196" y="0" width="8" height="46" /><path d="M180 46h40l10 24h-60z" /></g>
      </svg>
    ),
  };

  return scenes[kind] || scenes.still;
}
