
<high_level_design>
## 1. Brand & Art Direction Overview

DeepSeek presents a **modern, minimalist, and tech-forward visual identity** characterized by:

- **Ethereal cloud/sky background**: Soft, dreamy gradient background with flowing cloud-like shapes in light blues, purples, and white
- **Clean, spacious layout**: Generous white space with centered content alignment
- **Subtle depth effects**: Glassmorphism (frosted glass) effects on card components
- **Professional tech aesthetic**: Balanced between approachable and sophisticated
- **Gradient-enhanced brand elements**: Multi-color gradients used in the logo SVG
- **Soft, muted color palette**: Low saturation colors with subtle blues, purples, and grays dominating
- **Typography-first design**: Large, bold headings with clear hierarchy

## 2. Color Palette (Light Theme - Exact Clones)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| Primary Brand (Blue) | #4D6BFE | Primary brand color, logo, links, CTAs | Core brand identity color |
| Text Primary | #475569 (slate-600) | Primary headings, body text | Main text color |
| Text Secondary | #64748B (slate-500) | Secondary text, descriptions | Supporting text |
| Text Muted | #94A3B8 (slate-400) | Tertiary text, placeholders, disabled states | Lowest contrast text |
| Text Dark | #334155 (slate-700) | Footer headings, emphasized text | Darker text variant |
| Background Hero | Linear gradient (light blue to purple to white) | Hero section background | Ethereal cloud effect |
| Card Background | rgba(255, 255, 255, 0.5) | Card backgrounds with backdrop blur | Glassmorphism effect |
| Border Light | #E2E8F0 (slate-200) | Section dividers, subtle borders | Light separators |
| Border Medium | #475569 (slate-600) | Link underlines, emphasized borders | Stronger borders |
| White | #FFFFFF | Base background, card overlays | Pure white |

## 3. Typography Scale (Exact Clones)

**Font Families:**
- Primary: System font stack with fallbacks
- Chinese: Optimized Chinese font stack

**Scale:**

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Logo Text | 3xl (1.875rem/30px) | 700 (bold) | Normal | Normal | slate-600 |
| Hero Tagline | sm (0.875rem/14px) | 400 (regular) | Normal | Normal | slate-400 |
| Card Title | xl (1.25rem/20px) | 700 (bold) | Normal | Normal | Brand blue (#4D6BFE) |
| Card Description | base (1rem/16px) | 400 (regular) | 1.5 | Normal | slate-500 |
| Footer Section Title | base (1rem/16px) | 700 (bold) | Normal | Normal | slate-700 |
| Footer Link | base (1rem/16px) | 400 (regular) | Normal | Normal | slate-600 |
| Small Text | sm (0.875rem/14px) | 400 (regular) | Normal | Normal | slate-400 |

## 4. Spacing & Layout Grid (Exact Clones)

**Container:**
- Max width: 1280px (max-w-6xl for footer), 768px (max-w-3xl for hero cards)
- Centered with auto margins
- Horizontal padding: 2rem (px-8)

**Spacing Scale:**
- xs: 0.5rem (2px)
- sm: 0.75rem (3px)
- base: 1rem (4px)
- md: 1.5rem (6px)
- lg: 2rem (8px)
- xl: 2.5rem (10px)
- 2xl: 3rem (12px)
- 3xl: 4rem (16px)
- 4xl: 5rem (20px)

**Key Spacing:**
- Logo top/left: 1rem (top-4, left-4)
- Hero section top padding: 6rem on desktop (pt-24), 8rem on larger (md:pt-32)
- Hero section bottom padding: 5rem on desktop (pb-20), 10rem on larger (md:pb-40)
- Card grid gap: 2rem (gap-8)
- Footer top padding: 4rem (pt-16)
- Footer bottom margin: 4rem (mb-16)
- Footer column gap: 2.5rem (gap-10)

**Grid System:**
- Hero cards: 1 column mobile, 2 columns desktop (grid-cols-1 md:grid-cols-2)
- Footer: Responsive 1-6 columns (sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6)

## 5. Visual Effects & Treatments (Exact Clones)

**Glassmorphism (Cards):**
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(8px);
border-radius: 1rem;
```

**Card Hover State:**
- Animated outline border effect (absolute positioned element)
- Transition: all properties, 200ms ease-in-out

**Links:**
- Underline on specific elements (border-b)
- Color transition on hover: slate-400 → #4D6BFE
- Duration: 200ms ease-in-out

**Shadows:**
- Subtle, minimal shadows
- Focus on backdrop blur rather than drop shadows

**Border Radius:**
- Cards: 1rem (rounded-2xl)
- Buttons: rect (minimal rounding)

**Background Effects:**
- Hero background: Fixed position, full-width gradient image
- Background size: cover
- Background position: center

## 6. Component Styles (Exact Clones - Light Theme)

**Logo:**
- Max width: 7rem (max-w-28) in header
- Max width: 10rem (max-w-40) in footer
- Position: Absolute top-4 left-4 (header)

**Announcement Banner:**
- Text: slate-400, text-sm, centered
- Link with emoji prefix
- Margin bottom: 3rem (mb-12) mobile, 4rem (md:mb-16) desktop

**Hero Logo SVG:**
- Max width: 20rem (max-w-xs)
- Contains multiple linearGradient definitions
- Margin bottom: 1.5rem (mb-6)

**Banner Cards:**
- Background: white/50 with backdrop-blur-sm
- Padding: 1.5rem top (pt-6), 1.75rem bottom (pb-7), 2rem horizontal (px-8)
- Border radius: 1rem (rounded-2xl)
- Minimum width: 0 (min-w-0)
- Flex: 1
- Relative positioning for outline effect
- Title: text-xl, font-bold, mb-2, text-branding color
- Description: text-slate-500, line breaks for readability
- Hover outline: Absolute positioned, animated

**Top Navigation:**
- Position: Absolute right-6 top-4
- Gap: 1.5rem (gap-6)
- Links: text-sm, slate-600 or slate-400
- API Platform link: border-b border-slate-600, font-semibold

**Footer:**
- Border top: 1px solid slate-200
- Logo column: span 2 on sm+, order-last on mobile, order-first on xl+
- Social icons: 32x32, slate-400 color, hover to #4D6BFE
- Icon spacing: ml-6 between icons
- Copyright text: text-sm, slate-400, mt-6
- Link columns: gap-1, slate-600 text
- Section titles: slate-700, font-bold, mb-1

**Cookie Banner:**
- Fixed position overlay (when visible)
- White background with shadow
- Title, description, and two buttons
- Primary button: bordered secondary style
- Secondary button: borderless secondary style
- Button size: medium (m)
- Rect corners

**Buttons:**
- Style variations: secondary, bordered/borderless
- Size: medium (m)
- Border radius: rect (minimal)
- Hover states with transitions

## 7. Site Sections (Clone Structure)

1. **Navigation Bar** (Fixed top)
   - Logo (left)
   - API Platform link (right)
   - Language selector (right)

2. **Hero Section** (Full-width with background)
   - Announcement banner with link
   - Large SVG logo with gradients
   - Hero tagline text ("探索未至之境")
   - Two-column card grid:
     - "开始对话" card (clickable, with hover effect)
     - "获取手机 App" card (non-clickable)

3. **Footer Section**
   - Six-column responsive grid
   - Logo and social links column (spans 2, includes copyright)
   - Research column (列表链接)
   - Products column (列表链接)
   - Legal & Security column (列表链接)
   - Join Us column (列表链接)

4. **Cookie Banner** (Overlay, conditionally shown)
   - Title
   - Description with policy link
   - Two action buttons
</high_level_design>

<theme>
light
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/header-navigation.tsx</file_path>
    <design_instructions>
Clone the top navigation header with DeepSeek logo on the left, and "API 开放平台 ↗" link plus "English" language switcher on the right. Use a clean white/transparent background with subtle backdrop blur. The logo should be approximately 112px (max-w-28) in width. Navigation links should use slate-600 color with semibold font weight. The header should have fixed positioning at the top with appropriate padding (1rem on each side). Include hover states for links with smooth transitions. Ensure responsive behavior with flexbox layout maintaining space-between alignment.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/680359b0-13fc-47f1-bf01-9423db3da964-deepseek-com/assets/images/logo-1.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-section.tsx</file_path>
    <design_instructions>
Clone the hero section with a serene gradient background featuring soft blue-to-white flowing wave patterns. Center the large DeepSeek logo (SVG with gradient definitions) below an announcement banner. The announcement should be in slate-400 color with celebration emoji "🎉" and link to model release details. Below the logo, display the tagline "探索未至之境" in bold 3xl slate-600 font. Use full-width layout with top padding of 6rem-8rem (pt-24 md:pt-32) and bottom padding of 5rem-10rem (pb-20 md:pb-40). Background should use the wavy gradient image as cover with proper positioning. Ensure vertical flex column layout with items centered.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/680359b0-13fc-47f1-bf01-9423db3da964-deepseek-com/assets/images/banner-background-2.webp"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/action-cards.tsx</file_path>
    <design_instructions>
Clone the two-card grid layout featuring glassmorphic cards with white/50 background and backdrop blur. Create a responsive grid (1 column mobile, 2 columns md+) with 2rem gap. Left card: "开始对话" (Start Chat) with blue branding color heading, description about DeepSeek-V3.2 free conversation experience. Right card: "获取手机 App" (Get Mobile App) with same styling, description about official AI assistant features. Both cards should have rounded-2xl borders (1rem), padding pt-6 pb-7 px-8, relative positioning for animated outline effects on hover, and cursor-pointer for the first card. Include subtle animated outline border in branding blue color. Maximum width container of 48rem (max-w-3xl) centered with margin-bottom of 3rem-4rem.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the comprehensive footer section with top border (border-t-1 border-slate-200) and generous top padding (pt-16). Create a responsive grid layout: 1 column mobile, 2 on small, 3 on medium, 4 on large, 6 on xl screens, with 2.5rem gaps. Left column (spanning 2 columns on sm, order-last xl:order-first): DeepSeek logo (max-w-40), social media icons row (email, WeChat, GitHub, Twitter/X, Zhihu, Xiaohongshu) with slate-400 color and hover state changing to #4D6BFE. Below icons: copyright text "© 2025 杭州深度求索人工智能基础技术研究有限公司 版权所有" and legal links (ICP, business license, public security registration) in slate-400 text-sm. Other columns: "研究" (Research) with model links, "产品" (Products) with app/platform links, "法务 & 安全" (Legal & Security) with policy links, "加入我们" (Join Us) with careers link. All column headers in slate-700 bold with mb-1, links in slate-600 with proper spacing. Maximum width 72rem (max-w-6xl) centered with bottom margin 4rem. Include proper hover states for all links.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/680359b0-13fc-47f1-bf01-9423db3da964-deepseek-com/assets/images/logo-1.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/cookie-banner.tsx</file_path>
    <design_instructions>
Clone the cookie consent banner that appears at the bottom of the page. Include white background card with shadow, rounded corners, and padding. Display "Cookie 设置" as title in bold, followed by description text explaining cookie usage with link to Cookie Policy. Provide two action buttons: "仅接受必要 Cookies" (Accept Essential Only) as secondary bordered button, and "接受全部" (Accept All) as secondary borderless button. Use proper spacing between elements, ensure buttons are full-width on mobile and appropriately sized on desktop. Style with slate color scheme matching the site design. Include dismissible functionality and proper positioning (fixed or sticky at bottom initially).
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
