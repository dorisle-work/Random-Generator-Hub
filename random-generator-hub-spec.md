# Random Generator Hub — Product Concept & Specification

> **Tagline:** Random anything, instantly.
>
> **Mục tiêu:** Website tập hợp các công cụ tạo kết quả ngẫu nhiên, phục vụ học tập, công việc, giải trí và hoạt động nhóm; tối ưu SEO, tăng khả năng quay lại và kiếm tiền từ quảng cáo cùng gói trả phí.

## 1. Tổng quan sản phẩm

| Tiêu chí | Đề xuất |
|---|---|
| Tên gợi ý | Randomly / Pickly / Randify (cần kiểm tra tên miền, thương hiệu) |
| Loại | Utility Web / Micro SaaS |
| Thị trường | Global, ưu tiên tiếng Anh |
| Người dùng | Sinh viên, giáo viên, nhân viên văn phòng, creator, developer |
| Giá trị | Random nhanh, đẹp, miễn phí, không cần tài khoản |
| Nền tảng | Responsive Web + PWA |
| Frontend | Next.js + Tailwind CSS |
| Backend | Supabase khi cần tài khoản/đồng bộ |
| Monetization | Google AdSense + Premium |
| MVP dự kiến | 2–3 tuần với 5–8 công cụ, tùy nguồn lực |
| Tầm nhìn | 30–50+ công cụ, mỗi công cụ có landing page SEO |

**Định vị:** Không chỉ cung cấp thuật toán random mà còn tạo trải nghiệm nhanh, trực quan, tùy chỉnh và dễ chia sẻ.

## 2. Hệ sinh thái tính năng

### 2.1. Random Picker — Công cụ lựa chọn

| Công cụ | Chức năng | Ưu tiên |
|---|---|---|
| Spin the Wheel | Vòng quay lựa chọn ngẫu nhiên | P0 |
| Random Name Picker | Chọn tên ngẫu nhiên từ danh sách | P0 |
| Random Number Generator | Random số theo khoảng | P0 |
| Random Team Generator | Chia nhóm ngẫu nhiên | P0 |
| Yes or No Generator | Quyết định Có/Không | P0 |
| Coin Flip | Tung đồng xu | P0 |
| Dice Roller | Tung xúc xắc | P1 |
| Random Letter | Chọn chữ cái ngẫu nhiên | P1 |
| Random List Picker | Chọn phần tử từ danh sách | P1 |
| Secret Santa Generator | Ghép cặp tặng quà bí mật | P2 |

#### Chi tiết: Spin the Wheel

**Input ví dụ:** Pizza, Burger, Sushi, Ramen, Hotpot.

**Luồng:** Nhập danh sách → nhấn **SPIN** → hoạt ảnh vòng quay → kết quả → quay lại / chia sẻ / lưu.

**Tính năng:**
- Thêm, sửa, xóa lựa chọn.
- Tùy chỉnh màu từng phần, thời gian quay và âm thanh.
- Tự động loại bỏ lựa chọn đã trúng.
- Lưu lịch sử kết quả.
- Import danh sách từ CSV.
- Fullscreen cho trình chiếu.
- Lưu và chia sẻ vòng quay qua URL, ví dụ `/wheel/abc123`.

**Lưu ý:** Chia sẻ URL công khai cần thiết kế quyền truy cập và tránh đưa dữ liệu cá nhân nhạy cảm vào URL.

### 2.2. Education Random Tools

| Công cụ | Chức năng |
|---|---|
| Student Name Picker | Gọi tên học sinh ngẫu nhiên |
| Classroom Group Maker | Chia nhóm trong lớp |
| Random Question Picker | Bốc câu hỏi |
| Quiz Wheel | Vòng quay câu hỏi |
| Presentation Order | Random thứ tự thuyết trình |
| Random Topic Generator | Bốc chủ đề |
| Debate Topic Generator | Tạo chủ đề tranh luận |
| Random Seat Generator | Xếp chỗ ngồi ngẫu nhiên |

**Classroom Mode:** Giáo viên tạo lớp học (ví dụ 10A1, 35 học sinh), lưu danh sách và tái sử dụng cho gọi tên, chia nhóm, chọn nhóm trưởng, xếp chỗ ngồi, thứ tự thuyết trình. Đây là tính năng có tiềm năng tăng retention và phát triển Premium. Cần bảo vệ dữ liệu học sinh, nhất là trẻ vị thành niên.

### 2.3. Entertainment — Giải trí

| Công cụ | Chức năng |
|---|---|
| What Should I Eat? | Chọn món ăn |
| Random Movie Picker | Chọn phim để xem |
| Truth or Dare | Thật hay thách |
| Would You Rather | Trò chơi lựa chọn |
| Random Date Ideas | Gợi ý hoạt động hẹn hò |
| Random Challenge | Thử thách ngẫu nhiên |
| Random Conversation Starter | Chủ đề bắt chuyện |
| Random Drawing Prompt | Gợi ý chủ đề vẽ |
| Random Workout | Chọn bài tập |
| Random Weekend Activity | Gợi ý hoạt động cuối tuần |

**Ví dụ What Should I Eat?:** Chọn mood, budget, cuisine, meal → hệ thống lọc bộ dữ liệu món ăn → chọn ngẫu nhiên → hiển thị kết quả, Try Again, Save, Share, Favorites. MVP nên sử dụng dữ liệu có cấu trúc thay vì gọi AI mỗi lượt.

### 2.4. Creative & Developer Tools

| Công cụ | Chức năng |
|---|---|
| Random Color Generator | Tạo màu HEX/RGB |
| Random Gradient Generator | Tạo gradient |
| Random Password Generator | Tạo mật khẩu |
| UUID Generator | Tạo UUID |
| Random Username Generator | Gợi ý username |
| Random Emoji Generator | Chọn emoji |
| Random Lorem Ipsum | Tạo placeholder text |
| Random Date Generator | Tạo ngày ngẫu nhiên |
| Random Time Generator | Tạo thời gian |
| Random JSON Generator | Tạo dữ liệu giả phục vụ test |

**Bảo mật:** Công cụ mật khẩu phải dùng nguồn random an toàn như `crypto.getRandomValues`, không dùng `Math.random()`.

### 2.5. Business & Productivity

| Công cụ | Chức năng |
|---|---|
| Meeting Icebreaker | Random câu hỏi mở đầu cuộc họp |
| Random Task Assigner | Phân công nhiệm vụ |
| Random Team Leader | Chọn trưởng nhóm |
| Random Presentation Order | Xếp thứ tự trình bày |
| Random Giveaway Picker | Chọn người thắng từ danh sách |
| Random Decision Maker | Chọn phương án |
| Random Pair Generator | Ghép cặp thành viên |
| Random Coffee Chat | Ghép cặp trò chuyện |
| Random Brainstorm Prompt | Gợi ý ý tưởng |
| Random Priority Picker | Chọn công việc cần làm |

**Giveaway:** Công cụ chỉ chọn từ dữ liệu nhập vào; không tự xác minh tính hợp lệ của người tham gia. Các cuộc thi có giải thưởng cần cơ chế minh bạch, chống gian lận và kiểm tra quy định áp dụng.

### 2.6. Fun Generators

- Random Animal Generator
- Random Country Generator
- Random Superpower Generator
- Random Fantasy Name Generator
- Random Character Generator
- Random Story Prompt Generator
- Random Fun Fact Generator
- Random Birthday Activity Generator

Mỗi công cụ nên có bộ dữ liệu, nội dung và mục đích riêng để tránh tạo hàng loạt trang SEO trùng lặp.

## 3. Cấu trúc website & UX

### 3.1. Sitemap

```text
/
├── /tools
├── /categories
│   ├── /random-picker
│   ├── /education
│   ├── /entertainment
│   ├── /creative-developer
│   ├── /productivity
│   └── /fun
├── /spin-the-wheel
├── /random-name-picker
├── /random-number-generator
├── /random-team-generator
├── /yes-or-no
├── /coin-flip
├── /dice-roller
├── /random-food-picker
├── /random-color-generator
├── /wheel/[shareId]
├── /favorites
├── /classroom
├── /pricing
├── /about
├── /privacy
└── /terms
```

### 3.2. Homepage wireframe

```text
┌──────────────────────────────────────────────┐
│ 🎲 Randomly       Explore   Favorites   EN   │
├──────────────────────────────────────────────┤
│         Make Every Choice More Fun.          │
│   Your favorite random tools in one place.   │
│   ┌──────────────────────────────────────┐   │
│   │ 🔍 Search random tools...            │   │
│   └──────────────────────────────────────┘   │
│   Popular: Spin Wheel · Name Picker · Dice   │
├──────────────────────────────────────────────┤
│  ✨ Popular Tools                            │
│  [Spin Wheel] [Dice Roller] [Team Maker]      │
│  [Number]     [Coin Flip]   [Color]          │
├──────────────────────────────────────────────┤
│  Browse by Category                          │
│  Random Picker / Education / Entertainment   │
│  Creative / Productivity / Fun               │
├──────────────────────────────────────────────┤
│  FAQ · Privacy · Terms · About               │
└──────────────────────────────────────────────┘
```

### 3.3. Tool page wireframe — Random Name Picker

```text
┌───────────────────────────────────────────────┐
│ Home > Random Picker > Name Picker             │
│           🎯 Random Name Picker               │
│   Pick a random name from your list.          │
│ ┌─────────────────────┬─────────────────────┐ │
│ │ YOUR NAMES          │ RESULT              │ │
│ │ Alice               │                     │ │
│ │ Bob                 │ 🎉 ALICE            │ │
│ │ Charlie             │                     │ │
│ │ David               │ [ PICK AGAIN ]      │ │
│ │ [+ Add Name]        │                     │ │
│ └─────────────────────┴─────────────────────┘ │
│ ⚙️ Settings                                  │
│ ☑ Remove selected names                      │
│ ☑ Enable animation                           │
│ ☐ Allow duplicate results                    │
│ 📋 History: Alice → David → Charlie          │
│ Share | Copy Link | Save                      │
├───────────────────────────────────────────────┤
│ How to use / Use cases / FAQ                  │
└───────────────────────────────────────────────┘
```

**Nguyên tắc:** Công cụ phải xuất hiện ngay đầu trang; ưu tiên mobile-first, thao tác ít bước, trạng thái rõ ràng, khả năng dùng không cần đăng nhập.

### 3.4. Design system

| Thành phần | Đề xuất |
|---|---|
| Phong cách | Playful Minimalism, trẻ trung nhưng trưởng thành |
| Background | `#F8F9FC` |
| Primary | `#635BFF` |
| Secondary | `#C4F2E3` |
| Accent | `#FFCF70` |
| Text | `#18181B` |
| Font | Inter / Plus Jakarta Sans |
| Border Radius | 16–24px |
| Card | Nền trắng, viền nhẹ |
| Layout | Bento Grid |
| Motion | Micro-interactions, spring animation |
| Theme | Light + Dark Mode |

Chỉ dùng màu nổi bật tại vùng tương tác; không lạm dụng màu và hiệu ứng gây phân tán.

## 4. Tính năng nền tảng dùng chung

1. **Guest-first:** Dùng các công cụ cơ bản không cần tài khoản.
2. **Local persistence:** LocalStorage hoặc IndexedDB cho danh sách, cấu hình, lịch sử, favorites.
3. **Sharing:** Link công cụ, link cấu hình, ảnh kết quả; lưu ý bảo mật dữ liệu trong link.
4. **Fullscreen:** Phù hợp lớp học, workshop, livestream.
5. **Đa ngôn ngữ:** English → Vietnamese → Spanish → Portuguese → Indonesian (triển khai dần).
6. **Đồng bộ cloud:** Tùy chọn đăng nhập khi cần lưu nhiều thiết bị.
7. **Accessibility:** Hỗ trợ bàn phím, nhãn screen reader, độ tương phản tốt, tùy chọn giảm chuyển động.
8. **Analytics:** Đo sự kiện sử dụng, kết quả, chia sẻ mà không thu thập dữ liệu nhạy cảm không cần thiết.

## 5. SEO & tăng trưởng

### 5.1. Landing page theo công cụ

| URL | Keyword mục tiêu |
|---|---|
| `/spin-the-wheel` | spin the wheel |
| `/random-name-picker` | random name picker |
| `/random-number-generator` | random number generator |
| `/random-team-generator` | random team generator |
| `/coin-flip` | flip a coin |
| `/dice-roller` | online dice roller |
| `/random-color-generator` | random color generator |
| `/random-food-picker` | what should I eat |
| `/yes-or-no` | yes or no generator |
| `/random-letter-generator` | random letter generator |

**Chưa xác minh search volume hoặc keyword difficulty.** Cần nghiên cứu thị trường và đối thủ trước khi chốt roadmap SEO.

### 5.2. Cấu trúc SEO của từng trang

- Title và meta description riêng.
- Công cụ hoạt động ngay phía trên fold.
- Hướng dẫn sử dụng ngắn.
- Use cases cụ thể.
- FAQ hữu ích, không nhồi từ khóa.
- Internal link đến công cụ liên quan.
- Canonical, sitemap XML, robots và metadata đa ngôn ngữ phù hợp.
- Không tạo nhiều trang chỉ thay tên từ khóa nhưng nội dung giống nhau.

### 5.3. Mục tiêu kỹ thuật

| Chỉ số | Mục tiêu |
|---|---|
| LCP | ≤ 2.5 giây |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| Responsive | Mobile-first |
| Rendering | SSR/SSG cho trang công khai |
| Sitemap | Tự động |
| Structured data | Theo loại nội dung phù hợp |

Các ngưỡng Core Web Vitals là mục tiêu trải nghiệm tốt, không bảo đảm xếp hạng SEO.

### 5.4. Growth loop

```text
Google Search / Social
        ↓
Trang công cụ miễn phí
        ↓
Người dùng tạo kết quả
        ↓
Chia sẻ link / ảnh / vòng quay
        ↓
Người khác mở công cụ
        ↓
Lưu danh sách / Favorites / Classroom
        ↓
Quay lại sử dụng
```

## 6. Monetization

### 6.1. Quảng cáo

Google AdSense ở vị trí ít cản trở: giữa danh sách công cụ, dưới khu vực thao tác, trong nội dung hướng dẫn. Không che nút random hay kết quả.

**Công thức minh họa:** `Revenue = Pageviews / 1,000 × Page RPM`.

| Pageviews/tháng | RPM giả định | Doanh thu giả định |
|---:|---:|---:|
| 10.000 | $1 | $10 |
| 50.000 | $2 | $100 |
| 100.000 | $3 | $300 |
| 300.000 | $3 | $900 |
| 1.000.000 | $4 | $4.000 |

Đây **không phải dự báo doanh thu**; RPM phụ thuộc thị trường, traffic, thiết bị, tỷ lệ quảng cáo và chính sách nền tảng.

### 6.2. Freemium — mức giá để thử nghiệm

| Gói | Giá giả định | Quyền lợi |
|---|---|---|
| Free | $0 | Công cụ cơ bản, lưu trên thiết bị, chia sẻ, có quảng cáo |
| Plus | $2.99/tháng | Không quảng cáo, lưu nhiều danh sách, đồng bộ, tùy chỉnh wheel, xuất kết quả |
| Team | $6.99/tháng | Workspace nhóm, danh sách thành viên, Classroom Mode, lịch sử và cấu hình chung |

Giá cần được kiểm chứng với người dùng; không nên triển khai subscription khi chưa chứng minh giá trị sử dụng lặp lại.

## 7. Kiến trúc kỹ thuật

```text
                     USER
                       │
                       ▼
                RANDOMLY WEB
                 Next.js App
                       │
           ┌───────────┴───────────┐
           │                       │
           ▼                       ▼
      RANDOM ENGINE            USER SYSTEM
       Client-side              Supabase
           │                       │
      ┌────┼─────┐            ┌────┼─────┐
      ▼    ▼     ▼            ▼    ▼     ▼
    Wheel Dice Picker        Auth Lists History
           │
           ▼
    LOCAL STORAGE / INDEXEDDB
```

**Frontend:** Next.js, React, Tailwind CSS; animation có thể dùng CSS/Framer Motion; responsive + PWA.

**Random engine:** Phần lớn công cụ chạy client-side để giảm latency, chi phí server và hỗ trợ offline. Những trường hợp cần random công bằng, kiểm chứng được hoặc có giá trị giải thưởng nên xử lý server-side, ghi nhận quy tắc, seed/bằng chứng phù hợp.

**Backend:** Supabase Auth, Postgres, Storage khi cần tài khoản, lưu danh sách, chia sẻ, lịch sử và gói trả phí.

**Analytics:** GA4 + Search Console; theo dõi `tool_open`, `tool_run`, `result_generated`, `share_clicked`, `list_saved`, `favorite_added`, `return_visit`, `upgrade_clicked`.

**Với Apps Script:** Có thể làm prototype một số công cụ và admin nhỏ; không nên chọn làm nền tảng chính cho website global SEO có nhiều landing page.

## 8. Roadmap triển khai

| Giai đoạn | Thời gian dự kiến | Phạm vi |
|---|---|---|
| MVP | Tuần 1–2 | Homepage, 5 công cụ, responsive, SEO cơ bản |
| Growth | Tuần 3–4 | Thêm 10 công cụ, chia sẻ link, analytics |
| Retention | Tháng 2 | Lưu danh sách, lịch sử, Classroom Mode |
| Monetization | Tháng 3+ | Thử nghiệm quảng cáo, Premium |
| Expansion | Tháng 4+ | Thêm công cụ dựa trên dữ liệu tìm kiếm và sử dụng |

*Ước lượng giả định một người phát triển toàn thời gian, tận dụng thư viện sẵn có và phạm vi MVP được kiểm soát.*

### 8.1. Năm công cụ nên ra mắt đầu tiên

1. **Spin the Wheel:** Trải nghiệm chủ lực, chia sẻ mạnh.
2. **Random Name Picker:** Phù hợp giáo viên và nhóm.
3. **Random Number Generator:** Dễ phát triển, intent tìm kiếm rõ.
4. **Random Team Generator:** Có cơ hội sử dụng lặp lại.
5. **Yes or No Generator:** Nhẹ, nhanh, thiên giải trí.

Coin Flip có thể là công cụ thứ sáu vì dễ bổ sung.

### 8.2. Phạm vi MVP nên bao gồm

- Header, footer, homepage, danh mục và trang công cụ.
- Search/filter công cụ.
- Random engine thống nhất, kiểm thử phân phối kết quả.
- Settings và lịch sử tại thiết bị.
- Responsive, loading/empty/error states.
- SEO metadata, sitemap, analytics, privacy và terms.
- Chia sẻ URL cho cấu hình không nhạy cảm (nếu kịp tiến độ).

**Chưa cần MVP:** Thanh toán, workspace nhiều thành viên, AI, hệ thống tài khoản phức tạp, 50 công cụ cùng lúc.

## 9. KPI & đo lường

| Nhóm | Metric | Mục tiêu thử nghiệm |
|---|---|---|
| Acquisition | Organic Clicks | Tăng theo tháng |
| Acquisition | Indexed Tool Pages | Phần lớn trang hợp lệ được index; không thể bảo đảm 100% |
| Engagement | Tool Usage Rate | ≥ 50% |
| Engagement | Average Tools / Session | ≥ 1.5 |
| Retention | Returning Users | ≥ 15% |
| Growth | Shared Links | Tăng theo tháng |
| Revenue | Page RPM | Theo dõi theo quốc gia |
| Revenue | Premium Conversion | Đánh giá sau khi có đủ người dùng |

**Định nghĩa:** `Tool Usage Rate = số phiên có ≥1 lần tạo kết quả / tổng số phiên × 100%`.

Tất cả mục tiêu trên là giả thuyết ban đầu, cần hiệu chỉnh sau khi có dữ liệu thực tế.

## 10. Rủi ro & biện pháp

| Rủi ro | Hướng xử lý |
|---|---|
| Cạnh tranh lớn | Khác biệt bằng UX, lưu/chia sẻ và use case chuyên sâu |
| SEO tăng trưởng chậm | Tập trung công cụ ngách, theo dõi Search Console, tránh thin content |
| Người dùng chỉ ghé một lần | Favorites, Classroom Mode, danh sách dùng lại |
| Ads doanh thu thấp | Kiểm chứng nhu cầu Premium, tập trung traffic chất lượng |
| Dữ liệu người dùng nhạy cảm | Guest-first, lưu local mặc định, minh bạch chia sẻ và quyền riêng tư |
| Random bị nghi ngờ thiếu công bằng | Mô tả thuật toán, kiểm thử, chế độ server có bằng chứng khi cần |
| Scope quá lớn | Ra mắt 5 công cụ trước, ưu tiên dựa trên dữ liệu |

## 11. Hai hướng định vị

| | A — Random Utility Hub | B — Interactive Random Platform |
|---|---|---|
| Định vị | Bộ công cụ random miễn phí | Nền tảng tương tác ngẫu nhiên |
| Trọng tâm | SEO, traffic | Retention, sharing |
| Tính năng | 30–50 công cụ độc lập | Wheel, classroom, team, game |
| Người dùng | Đại chúng | Giáo viên, creator, doanh nghiệp |
| Kiếm tiền | Ads | Premium + Ads |
| Độ phức tạp | Thấp–trung bình | Trung bình–cao |
| Khả năng khác biệt | Thấp hơn | Cao hơn |

**Đề xuất:** Kết hợp cả hai nhưng triển khai tuần tự: dùng công cụ miễn phí để thu hút người dùng, sau đó phát triển khả năng tạo, lưu, tùy chỉnh, chia sẻ để tăng retention. Không nên chỉ xây một website có 50 nút random.

## 12. Tiêu chí đánh giá sau ra mắt

- Công cụ nào có nhiều organic impressions/clicks nhất?
- Công cụ nào có tỷ lệ thực hiện random cao nhất?
- Người dùng có quay lại cùng một công cụ không?
- Bao nhiêu lượt truy cập đến từ link chia sẻ?
- Giáo viên/người tổ chức có cần lưu danh sách và cấu hình không?
- Người dùng có sẵn sàng trả tiền để bỏ quảng cáo, đồng bộ hoặc sử dụng Classroom Mode không?

**Quy tắc quyết định:** Chỉ mở rộng mạnh một nhóm công cụ khi có bằng chứng về nhu cầu tìm kiếm, tương tác hoặc sử dụng lặp lại.

---

*Tài liệu tổng hợp ý tưởng và đặc tả sơ bộ. Các mức độ tiềm năng, KPI, giá và timeline là giả định để lập kế hoạch, chưa phải kết quả nghiên cứu thị trường hay cam kết hiệu quả.*
