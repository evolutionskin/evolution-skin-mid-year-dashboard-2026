# Mid-Year Performance Report 2026
### แผนกธุรการประสานงาน เลขานุการ และ HR — Evolution Skin Co., Ltd.

Executive Dashboard เว็บไซต์หน้าเดียว (single-page) สำหรับนำเสนอสรุปผลงานครึ่งปีแรกของแผนกต่อผู้บริหาร สร้างด้วย React + TypeScript + Vite + Tailwind CSS + Recharts

## เทคโนโลยีที่ใช้

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Recharts (กราฟและ Data Visualization)
- lucide-react (ไอคอน)
- Google Fonts: Prompt (หัวข้อ) และ Noto Sans Thai (เนื้อหา)

## วิธีติดตั้งและใช้งาน

ต้องมี Node.js เวอร์ชัน 18 ขึ้นไป

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

### คำสั่งอื่น ๆ

```bash
npm run build     # ตรวจสอบ TypeScript และ build เป็นไฟล์ static ที่โฟลเดอร์ dist/
npm run preview   # เปิดดูไฟล์ที่ build แล้ว
npm run lint      # ตรวจสอบ code quality ด้วย oxlint
```

## โครงสร้างโปรเจกต์

```
src/
  data/
    reportData.ts        # ข้อมูลทั้งหมดของรายงาน (ตัวเลข, ข้อความ) — แหล่งข้อมูลเดียว
  components/
    charts/               # กราฟ Recharts ทั้ง 4 ชุด + Tooltip / Legend ที่ใช้ร่วมกัน
    Navigation.tsx         # Sticky nav พร้อม active section indicator + ปุ่ม Print
    Hero.tsx                # ส่วนหัวของหน้า (Navy background)
    KpiCard.tsx / KpiSection.tsx           # การ์ด KPI 6 ใบ พร้อม animated counter
    PerformanceSection.tsx                  # ส่วนกราฟทั้งหมด (6.1–6.4)
    WorkCategoryCard.tsx / WorkHighlightsSection.tsx   # Scope of Work + Key Achievements
    AchievementCard.tsx
    OngoingPlansSection.tsx                 # งานที่กำลังดำเนินการ + แผนครึ่งปีหลัง
    SwotQuadrantCard.tsx / SwotSection.tsx  # SWOT 4 Quadrants พร้อม Accordion
    InsightCard.tsx / PriorityCard.tsx / RecommendationsSection.tsx
    ScrollToTop.tsx / Footer.tsx / SectionHeading.tsx / ChartCard.tsx / Icon.tsx / EvoMark.tsx
  hooks/
    useReveal.ts           # Scroll-reveal animation (IntersectionObserver)
    useCountUp.ts           # Animated number counter
    useActiveSection.ts      # ติดตาม section ที่กำลังแสดงผลสำหรับ Navigation
  index.css                # Tailwind v4 theme tokens (สี, ฟอนต์), base styles, print rules
public/
  images/                  # โลโก้ Evolution Skin (logomark, two-line lockup)
```

## หลักการออกแบบ

- **Palette**: Navy (`#0F2747`) / Dark Navy (`#08192E`) เป็นสีหลัก, Gold (`#C9A24D`) ใช้เฉพาะจุดที่ต้องการเน้น (ตัวเลขสำคัญ, หัวข้อ, เส้น accent, แท่งกราฟสูงสุด)
- **Signature element**: กราฟิกแท่งขนาน (parallelogram) 3 ชิ้นที่ถอดแบบมาจากโลโก้มาร์กของ Evolution Skin ใช้แทน numbered bullet ทั่วไปใน section kicker และ timeline dot
- **Typography**: Prompt สำหรับหัวข้อ/ตัวเลข, Noto Sans Thai สำหรับเนื้อหา
- **Motion**: Scroll-reveal แบบนุ่มนวล, animated counter, ไม่มี bounce หรือ effect ที่มากเกินไป, เคารพ `prefers-reduced-motion`

## การพิมพ์ / บันทึกเป็น PDF

กดปุ่ม "Print Report" ที่มุมขวาบน หรือใช้คำสั่ง Print ของเบราว์เซอร์ (Ctrl/Cmd+P) — Navigation และปุ่มควบคุมทั้งหมดจะถูกซ่อนโดยอัตโนมัติในโหมดพิมพ์

## ข้อมูล

ตัวเลขและข้อความทั้งหมดอยู่ใน `src/data/reportData.ts` ไฟล์เดียว ไม่มีการฝังข้อมูลซ้ำใน Component ใด ๆ ดูหลักการคำนวณและข้อจำกัดของข้อมูลได้ที่ `DATA_NOTES.md`
