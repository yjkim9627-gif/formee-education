# AI Social Media — 스타일 레퍼런스

Figma `FME_AI-Social-Media` 파일의 컴포넌트 라이브러리(node-id 1213-12226 개요 페이지, 3191-30848 아이콘 페이지)를 카테고리별로 스캔하여 정리한 **시각 패턴/규칙** 문서다. 개별 컴포넌트 인벤토리가 아니라 "이 제품에서 크기·radius·색상·state를 어떤 규칙으로 쓰는가"를 정리한 것이며, `tokens/tokens.css`를 대체하지 않는다. 토큰의 실제 px/hex 값은 여기 다시 적지 않고 항상 토큰 이름으로만 참조한다 — 값이 바뀌어도 이 문서를 고칠 필요가 없도록 하기 위함이다.

조사 방법: Figma MCP `get_screenshot`으로 각 섹션 전체를 훑고, 카테고리당 대표 컴포넌트 2~4개를 `get_design_context`/`get_variable_defs`로 확인해 실제 바인딩된 Figma Variable과 raw hex/px를 구분했다. Editor·AI Assistant처럼 컴포넌트 수가 많은 카테고리는 전수조사가 아니라 샘플링임을 표시해 둔다.

**변수 체계 일치 확인**: 이 파일은 `FME_Design-System` 자매 파일과 동일한 Variable 이름(`neutral/400`, `brand/primary`, `radius/lg`, `spacing/sm` 등)을 쓰고, 값도 `tokens.css`와 정확히 일치한다 (예: `neutral/400` = `#c8d1e1` = `--color-neutral-400`). 즉 이 문서에서 다루는 컴포넌트는 대부분 "같은 시스템 위에" 있다. 단, 아래에서 ⚠️로 표시한 지점은 raw hex/px가 그대로 박혀 있거나 tokens.css에 대응 토큰이 없는 곳이다.

---

## 1. Actions (버튼)

- **radius**: 기본 버튼은 `radius-lg` 안팎. Segment Button(Poster CTA류 큰 버튼)은 `radius-xl`로 한 단계 더 둥글다. 순수 아이콘 버튼(36px 정사각형: Icon Action, More Button, Refine, Notification 등)도 `radius-lg`를 공유한다.
- **크기**: 아이콘 전용 버튼은 36px 정사각형으로 통일. 텍스트 버튼은 세로 패딩 `spacing-sm`~`spacing-md` 기준 hug로 높이 38~40px 대역에 모인다.
- **색상/계층**: Style=Primary/Secondary/Ghost 세 단계가 존재하지만 **Primary가 브랜드 블루가 아니라 진회색~검정 그라디언트**(#323232→#222, AI 아이콘 포함)로 되어 있다. Secondary는 `neutral-0` 배경 + `neutral-400` 보더 + `neutral-700` 텍스트, Ghost는 배경 없이 `neutral-700` 텍스트만. 즉 이 라이브러리의 "Primary 버튼"은 AI 액션(스파클 아이콘) 전용 다크 버튼이며, 브랜드 블루(`--color-brand-primary`)는 버튼 채우기보다 텍스트/보더/배경 틴트(예: Poster CTA의 `brand/primary-dark` 텍스트, Focused 배경 `brand/primary-mid`)로 더 자주 쓰인다.
  - ⚠️ Primary 버튼의 그라디언트(`#323232`→`#222`)와 내부 inset shadow는 Variable에 바인딩되지 않은 raw hex다. tokens.css에 대응 토큰이 없다 — 새로 만들 필요가 있다면 하드코딩하지 말고 먼저 토큰 추가 여부를 논의해야 한다.
- **state**: Actions/Button/text와 Segment Button은 default→selected/focused 전환 시 텍스트 색이 `neutral-500`→`neutral-900`(진하게)로 바뀌거나, 배경이 흰색+그림자("떠 있는 pill")로 바뀌는 방식. Poster CTA의 Focused는 `brand/primary-mid` 배경 틴트 + `brand/primary-dark` 텍스트 유지 — 카드/리스트의 뉴트럴 선택 방식과 달리 **CTA류는 브랜드 컬러로 강조**한다(아래 "색상 계층 총정리" 참고).

## 2. Inputs & Controls

- **radius**: 필드/셀렉트/서치필드는 `radius-md`~`radius-lg`. 세그먼트/토글류(Segmented Control, Filter/Toggle, Segment Chip)는 트랙이 `radius-xl`, 내부 active pill은 `radius-lg`로 한 단계 작게 — "트랙보다 내부 필이 살짝 덜 둥글다"는 규칙이 반복된다. 체크박스는 `radius-sm`로 인풋류 중 가장 각짐. 스위치·아바타·프로그레스바 트랙은 `radius-full`.
- **크기**: 텍스트/드롭다운 인풋은 두 개 높이 티어로 명시돼 있다 — `Size=SM·36`과 `Size=MD·40`. 아이콘 액션류(Icon Action, Carousel Arrow 등)는 28px 히트 영역을 반복 사용. 체크박스/스위치 핸들은 각각 16px, 40×23px로 고정.
- **색상/계층**: 필드 기본 상태는 `neutral-0` 배경 + `neutral-400` 보더 + `neutral-900` 텍스트로 통일. 라벨은 `neutral-400`(회색, uppercase). **선택된 값 강조가 필요한 곳(체크박스 선택, 스위치 on, Segmented Toggle item selected)만 `brand/primary`로 채워지고**, 나머지 대부분의 "선택" 표현(세그먼트 칩 active, 필터 토글 selected)은 흰 배경 pill + 그림자(`shadow/sm`) + 텍스트 굵기/색 변화로 처리되어 브랜드 컬러를 쓰지 않는다.
- **state**: `[DS] Controls / Checkbox`, `[DS] Controls / Switch`는 Figma 컴포넌트 설명이 별도로 달려 있을 만큼 스펙이 명확하다(예: Switch = off일 때 `neutral-300` 트랙, on일 때 `brand/primary` 트랙, 40×23, radius 12). 반면 일반 `Controls/*` 컴포넌트는 설명 없이 네이밍과 variant만으로 구분된다 — `[DS]` 접두사가 붙은 것이 더 공식 스펙임을 시사한다.

## 3. Navigation

- **radius**: TopBar 안의 검색필드/인풋은 `radius-md`~`radius-lg`. Nav Tool Tab(에디터 좌측 도구 탭)은 selected일 때 `radius-lg`, default일 때 `radius-xl`로 미묘하게 달라진다 — Inputs 섹션의 "선택 시 radius가 한 단계 작아지는" 패턴과 반대 방향이라 통일된 규칙은 아니다(⚠️ 완전히 일관되지는 않음).
- **크기**: TopBar 높이 56px 고정. Tool Tab은 아이콘+라벨 세로 스택으로 56px 높이, 폭 58px. 아바타는 32px 원.
- **색상/계층**: TopBar는 `neutral-0` 배경 + 하단 `neutral-300` 보더 1px. 알림 아이콘의 "새 알림 점"은 `brand/accent`(핑크)로 눈에 띄게 처리 — 브랜드 컬러 중 accent 색상이 알림/뱃지류에만 국한되어 쓰이는 것으로 보인다. 아바타는 `brand/primary-mid` 배경 + `neutral-800` 이니셜.
- **state**: Tool Tab selected는 배경 `brand/primary-light`(연한 블루) 틴트 + 아이콘/텍스트가 `neutral-900`으로 진해짐 — Navigation은 Inputs/Data와 달리 **선택 상태에 브랜드 틴트를 쓰는 몇 안 되는 카테고리**다.

## 4. Feedback

- **radius**: Badge는 `radius-lg`, Progress Bar 트랙은 `radius-full`.
- **크기**: Badge는 세로 패딩 `spacing-2`로 매우 컴팩트한 pill. Progress Bar 트랙 두께는 6px 고정(별도 토큰 없음).
- **색상/계층**: Badge는 `--color-badge-*` 세트(green/blue/gray 등)를 그대로 text/bg 페어로 사용 — 이미 tokens.css에 정의된 배지 색상 규칙과 정확히 일치한다. Progress Bar는 fill에 `brand/primary`, 퍼센트 텍스트도 `brand/primary`, 캡션은 `neutral-500`.
- **state**: Figma 컴포넌트 설명에 "Fill width = track width × percent, 정적 mock이니 코드에서 값으로 구동하라"는 지침이 명시돼 있다 — 프로토타입에서 반드시 percent 값을 prop으로 받아 width를 계산해야 한다.
  - ⚠️ Progress Bar의 두 자식 사이 gap이 `spacing/10`(10px)으로 돼 있는데, tokens.css spacing 스케일에는 8px(`spacing-sm`)과 12px(`spacing-md`) 사이 값이 없다. 10px은 어느 토큰에도 매핑되지 않는 이탈 값이다.

## 5. Data Display

- **radius**: 카드류(Content Type Card, Palette Card)는 `radius-lg`. 아바타는 `radius-full`.
- **크기**: Content Type Card 180×114px 등 고정 크기 카드가 많고, 내부 아이콘은 24px(icon/lg 스케일과 일치).
- **색상/계층**: 기본 카드 = `neutral-0` 배경 + `neutral-400` 보더. **선택 카드 = `neutral-150` 배경 틴트 + `neutral-500` 보더**(더 진한 회색)로, 여기서도 브랜드 컬러가 아니라 뉴트럴 톤 강조를 쓴다 — Inputs·Navigation과 달리 "카드 그리드 선택"은 이 제품 전반에서 일관되게 뉴트럴 방식이다.
- **state**: 텍스트 색은 selected여도 `neutral-900`으로 동일(굵기·톤 변화 없음) — 카드 선택은 배경/보더로만 표현되고 텍스트는 그대로 유지된다.

## 6. Upload

- 가볍게 샘플링(Upload Dropzone 1개). **radius**: `radius-xl`, 파선(dashed) 보더 `neutral-400`. **색상**: 배경이 `neutral-75`로 아주 옅은 블루 틴트 — 순수 흰 배경(neutral-0)이 아니라 "드롭 가능 영역"임을 배경 틴트로 구분하는 패턴. 아이콘+타이틀은 `neutral-700` semibold, 서브텍스트는 `neutral-500`.
- 이 카테고리는 컴포넌트 수가 2개뿐이라 패턴을 일반화하기엔 표본이 매우 적다.

## 7. Editor

컴포넌트가 ~35개로 가장 많아 전수조사 대신 Panel Header, Color Swatch, Segmented Toggle 위주로 샘플링했다. 스크린샷 전체 스캔으로 다음 규칙을 추가 확인:

- **radius**: 패널 헤더/셀 등 구조적 요소는 `radius-lg`~`radius-md`. Segmented Toggle 트랙은 8px(라운드된 그루브), 내부 selected 세그먼트(흰 pill)는 6px로 트랙보다 한 단계 작다 — Inputs 섹션과 동일한 "트랙 > 내부 필" radius 축소 규칙이 Editor에도 반복된다.
- **크기**: Panel Header는 타이틀(Text/xl Bold) + 옵션 서브타이틀(Text/xs) 2단 구성이 표준 — Figma 설명에 "모든 툴/사이드패널 화면 상단에 쓰는 헤더, 서브타이틀은 옵션"이라고 명시. Color Swatch는 26px(기본) / 32px(현재 선택 강조, 삭제 X 배지 포함) 두 사이즈.
- **색상/계층**: Panel Header, Section Header, Layer Row 등은 전부 `neutral-900`/`neutral-500`의 텍스트 위계만 쓰고 브랜드 컬러가 거의 등장하지 않는다 — Editor 패널은 "작업 도구" 성격상 중립적 톤이 기본이고, 강조가 필요한 곳(Color Swatch 선택 링, Segmented Toggle selected 텍스트는 Figma 설명상 `brand/primary`)에서만 브랜드색이 들어간다.
- **state**: Color Swatch는 Default/Delete/Transparent 세 타입 × Selected 유무 조합이며, 선택 시 보더가 `neutral-400`→`neutral-500`으로 진해지는 동일한 뉴트럴 규칙. Transparent 타입은 대각선(사선) 아이콘으로 "색 없음"을 표현.
- **Editor - Video**(타임라인 확장 세트, node-id 2796:45122)는 별도 섹션으로 분리하지 않았다 — Playhead/Transport Bar/Waveform Clip 등은 스크린샷상 동일한 뉴트럴 팔레트(흰 배경, `neutral-400` 보더, `brand/primary` 포인트 컬러의 재생헤드/선택 클립)를 그대로 재사용하는 Editor 패턴의 연장이라 판단했다.

## 8. Product Selectors

- **radius**: 소셜 버튼/카드류는 `radius-lg`, 캐릭터 카드 썸네일은 `radius-xl`.
- **크기**: 소셜 버튼 높이 36px 고정(Inputs의 SM 티어와 동일). 캐릭터 카드는 246px 폭에 썸네일 295px 높이로 큰 그리드 카드.
- **색상/계층**: 소셜 버튼(Instagram/TikTok/YouTube/LinkedIn/Meta ads)은 브랜드 로고 자체 색(그라디언트, 빨강, 파랑 등)을 아이콘에 그대로 쓰지만 **버튼 껍데기(배경/보더/텍스트)는 뉴트럴 팔레트로 통일** — 로고 색이 곧 "제품 브랜드 primary"와 섞이지 않도록 분리돼 있다. 선택 상태는 Data Display와 동일하게 `neutral-100` 배경 + `neutral-500` 보더.
- **state**: "Add Account"처럼 아직 없는 항목은 파선(dashed) 보더 + `neutral-500` 텍스트로 placeholder 취급. 캐릭터 카드의 "New character" 카드도 동일하게 dashed 보더 + 중앙 정렬 plus 아이콘 — **빈 슬롯/추가 액션은 항상 dashed 보더로 구분**하는 규칙이 Upload Dropzone, Character Card, Social Button에서 공통으로 나타난다.

## 9. AI Assistant

- **radius**: Prompt Box는 `radius-lg`. Spark Button(원형 FAB)은 지름의 절반값 radius(사실상 `radius-full`과 동등)로 완전한 원.
- **크기**: Prompt Box는 readonly(컨텍스트 표시)/input(빈 입력)/ai(강조 입력) 3가지 타입이 같은 패밀리 안에 있고, 폭만 다르다(368px readonly vs 756px input/ai). Refine 아이콘 버튼은 다른 카테고리와 동일한 36px 정사각형을 재사용.
- **색상/계층**: readonly·input 타입은 `neutral-400` 보더로 무채색이지만, **"ai" 타입(실제로 AI가 관여/강조하는 입력창)만 보더가 `brand/primary` 블루 1.5px**로 바뀐다 — "AI가 지금 이 요소에 개입하고 있다"는 신호를 오직 이 카테고리에서만 브랜드 컬러 보더로 표현하는 셈이다. Spark Button은 `brand/primary` 배경 + 브랜드색 그림자(`shadow: 0 3px 8px rgba(79,109,230,.4)`)로 AI Assistant 진입점임을 강하게 강조.
  - ⚠️ AI Prompt Box의 "ai" 타입 보더 색이 `border-[#4f6de6]`로 **Variable 바인딩 없이 raw hex**로 박혀 있다. 값 자체는 `--color-brand-primary`와 동일하지만 Figma Variable에 연결돼 있지 않아 향후 브랜드 컬러가 바뀌면 이 요소만 갱신이 누락될 위험이 있다.
  - ⚠️ Prompt Box의 좌우 패딩이 `spacing/14`(14px)로, tokens.css의 `spacing-md`(12px)·`spacing-lg`(16px) 사이 이탈 값이다.

## 10. 아이콘 사용 방식 (01 Icons, node-id 3191-30848)

- **구성 방식**: 벡터 스트로크 기반 아이콘(Vector 패스, 채우기가 아닌 선)이 대부분이며, `ai`, `arrange`, `audio`, `color`, `content`, `data`, `edit`, `editing tool bar`, `flip`, `format`, `layer`, `menu`, `nav`, `pagebar`, `panel`, `social`, `spec`, `transition`, `ui`, `view` 20개 카테고리로 그룹핑돼 있다.
- **stroke-width**: 샘플링한 아이콘(undo, nav/home, content/reel 등) 모두 `icon/stroke-width` Variable에 바인딩돼 있고, `tokens.css`의 `--icon-stroke-width`/`--icon-stroke-width-16`과 정확히 일치. 다만 이번 샘플 범위에서는 `--icon-stroke-width-12`에 대응하는 실사용 사례를 찾지 못했다 — 이 파일에서는 12 stroke-width 변형이 실제로 쓰이는지 확인되지 않은 예약 토큰일 가능성이 있다.
- **사이즈 스케일**: 대부분의 UI 아이콘은 16 / 20 / 24px 세 가지로, 자매 파일의 `icon/size/sm|md|lg`(16/20/24) Variable 스케일과 일치한다. 단, `icon / social / *`(Instagram, TikTok 등 플랫폼 로고)만 32px로 그 스케일 밖에 있다 — 이는 "UI 아이콘"이 아니라 "브랜드 로고 마크"로 별도 취급되는 것으로 보이며, sm/md/lg 스케일에 억지로 맞추려 하지 않는 게 맞다.
- **색상**: 기본 아이콘은 고정 `currentColor` 방식이 아니라 **`neutral/500` Variable에 직접 바인딩**돼 색이 결정된다(선택/hover 시 상위 컴포넌트가 다른 색 아이콘 인스턴스로 스왑하는 방식 — 예: Nav Tool Tab selected는 별도 색의 아이콘 인스턴스를 사용). AI 관련 아이콘(sparkle 등)만 `brand/primary-dark`처럼 브랜드 컬러에 바인딩된 경우가 있다.
  - ⚠️ tokens.css에는 아이콘 전용 토큰 `--color-neutral-icon`(#8e97a8)이 정의돼 있지만, 실제 Figma 아이콘은 이 값이 아니라 `neutral/500`(`--color-neutral-500`, #8a93a8)에 바인딩돼 있다. 두 값이 매우 비슷하지만 동일하지 않다 — `--color-neutral-icon`이 실제로 쓰이는 곳인지, 아니면 이 아이콘 세트 기준으로는 `--color-neutral-500`을 써야 하는지 확인이 필요한 불일치다.

---

## 자주 쓰이는 spacing/사이즈 규칙 (카테고리 횡단)

- **아이콘 전용 버튼 = 36px 정사각형**이 Actions, Editor, Product Selectors 전반에서 반복되는 사실상의 표준 히트 영역이다(Icon Action, More Button, Refine, Notification, Favorite 등). 별도 사이즈 토큰은 없지만 관례로 굳어 있다고 봐도 된다.
- **인풋/필드 높이는 두 티어(36 / 40px)**로 나뉜다 — Controls/Input 컴포넌트가 `Size=SM·36`, `Size=MD·40`으로 명시. 소셜 선택 버튼(36px), Nav Tool Tab 아이콘 히트 영역 등도 이 SM 티어에 합류한다.
- **컨테이너 내부 패딩은 `spacing-sm`~`spacing-lg` 구간에 몰려 있고**, 카드/패널처럼 더 큰 여백이 필요한 곳은 `spacing-xl`까지 올라간다. `spacing-2xl` 이상은 TopBar 좌우 여백 등 화면 레벨 레이아웃에서만 등장한다.
- **radius는 "구조物(카드·패널·필드)은 lg~xl, 내부에서 떠 있는 pill/필은 한 단계 낮은 radius, 완전한 원형이 필요한 곳(아바타·스위치·프로그레스바 트랙·체크 아이콘 배경)은 radius-full"** 이라는 3단 규칙이 Inputs, Editor, Actions에서 공통으로 관찰된다.
- ⚠️ `spacing/10`(Progress Bar), `spacing/14`(AI Prompt Box) 등 tokens.css 8px 스텝 스케일에 없는 값이 최소 2곳에서 발견됐다 — 새 화면 작업 시 이런 이탈 값을 그대로 답습하지 말고, 가능하면 `spacing-sm`/`spacing-md`처럼 실제 토큰값으로 반올림하는 것을 권장한다.

## 색상 계층 총정리 (참고)

이 라이브러리를 종합하면 브랜드 컬러(`--color-brand-primary` 계열)는 다음 세 곳에서만 등장하고, **일반적인 "선택/활성" 표시는 뉴트럴 톤(보더·배경 진하게)으로 처리**하는 것이 지배적인 규칙이다:

1. 바이너리 on/off 컨트롤의 "on" 상태 — 체크박스, 스위치, Segmented Toggle의 selected 텍스트.
2. AI가 개입 중임을 알리는 요소 — AI Prompt Box(ai 타입) 보더, Spark Button, AI 관련 아이콘.
3. CTA성 강조 버튼의 텍스트/포커스 배경 틴트 — Poster CTA류(단, 채우기 버튼 자체는 다크 그라디언트를 쓰는 Primary 버튼과는 별개 패턴).

반대로 카드 그리드(Data Display, Product Selectors, Editor Color Swatch)의 "선택됨"은 거의 예외 없이 `neutral-400`→`neutral-500` 보더 강조 + 옅은 뉴트럴 배경 틴트(`neutral-100`/`150`)로 표현된다. 새 화면을 만들 때 "선택 상태에 무조건 브랜드 블루를 쓰고 싶은 충동"이 들 수 있는데, 이 라이브러리의 실제 관례는 그렇지 않다는 점을 기억할 것.
