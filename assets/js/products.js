// NBPSIS Product Detail Data
const PRODUCTS = {
  liptint: {
    badge: 'BEST · MAKEUP',
    title: 'Glam Glow Lip Tint',
    body: `
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
        <div style="padding:12px 18px;background:var(--pink-light);border-radius:12px;">
          <p style="font-size:11px;color:var(--text-mid);margin-bottom:2px;">정가</p>
          <p style="font-size:15px;font-weight:700;text-decoration:line-through;color:var(--text-soft);">17,600원</p>
        </div>
        <div style="padding:12px 18px;background:var(--red);color:#fff;border-radius:12px;">
          <p style="font-size:11px;opacity:.85;margin-bottom:2px;">공식몰 할인가</p>
          <p style="font-size:16px;font-weight:700;">16,000원</p>
        </div>
      </div>

      <h4 style="margin-top:20px;font-size:15px;color:var(--text);">글램 플럼핑 립 글로스 2종</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li><b>01 트윙클</b> — 컬러 없이 영롱한 펄의 반짝임과 입체적인 플럼핑 볼륨</li>
        <li><b>02 달달수박</b> — 싱그러운 수박빛 생기와 탱글한 볼륨을 채워주는 컬러</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">글램 글로우 립 틴트 8종</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li><b>01 에프리콧</b> — 따스한 햇살을 담은 은은한 살구 빛</li>
        <li><b>02 체리</b> — 얼굴에 생기를 밝혀주는 선명한 체리 레드</li>
        <li><b>03 플럼</b> — 고혹적이고 오묘한 무드를 완성하는 딥 플럼</li>
        <li><b>04 인디핑크</b> — 차분하면서도 우아하게 물드는 데일리 인디 핑크</li>
        <li><b>05 모브로즈</b> — 분위기 있는 무드를 연출하는 뮤트한 모브 로즈</li>
        <li><b>06 캔디팝</b> — 입술에 톡 터지는 화사하고 맑은 생기 핑크 캔디</li>
        <li><b>07 롤리팝</b> — 과즙을 베어 문 듯 맑고 투명하게 빛나는 오렌지</li>
        <li><b>08 꿀토마토</b> — 과즙이 팡팡 터지는 상큼달콤 맑은 꿀토마토 레드</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">특징</h4>
      <p style="font-size:14px;line-height:1.8;">고점도 오일 블렌딩 시스템으로 요플레 현상이 없는 매끈한 텍스처. 6시간 이상 지속되는 컬러 롱래스팅 포뮬러이며 시어버터와 비타민E가 입술을 보호하고 영양을 공급합니다.</p>

      <h4 style="font-size:15px;color:var(--text);margin-top:20px;">자주 묻는 질문</h4>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 요플레 현상 없나요?</b><br>고점도 오일 블렌딩 시스템으로 뭉침 없이 매끈한 텍스처가 유지되며 시간이 지나도 뜯기지 않고 촉촉하게 밀착됩니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 끈적임 심한가요?</b><br>산뜻한 유리알 광택으로 마무리되어 발림성은 크리미하지만 지나친 끈적임 없이 부드럽게 밀착됩니다.</p>
    `
  },

  cushion: {
    badge: 'COLLABO · MAKEUP',
    title: 'Perfect Skin Fit Cushion',
    body: `
      <h4 style="font-size:15px;color:var(--text);">호수</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li><b>21호</b> 라이트베이지</li>
        <li><b>23호</b> 내추럴베이지</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">자외선 차단 지수</h4>
      <p style="font-size:14px;line-height:1.8;">생산분 <b>SPF50 / PA++++</b></p>

      <h4 style="font-size:15px;color:var(--text);margin-top:20px;">기능성</h4>
      <p style="font-size:14px;line-height:1.8;">미백 · 항주름 · 항산화 · 보습 기능성 화장품</p>

      <h4 style="font-size:15px;color:var(--text);margin-top:20px;">특징</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li>4,000cps 저점도 처방으로 산뜻하고 얇은 밀착</li>
        <li>스킨케어급 CICA 복합 성분 함유</li>
        <li>병풀추출물로 진정 효과</li>
        <li>물광/수분광채 사용감</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">자주 묻는 질문</h4>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 진정 성분이 있나요?</b><br>병풀추출물(CICA) 함유로 민감한 피부를 진정시키며 수분을 공급합니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 지속력은 어떤가요?</b><br>저점도 처방으로 산뜻하게 밀착되어 뭉침 없이 하루 종일 자연스러운 커버를 유지합니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 어떤 피부 고민에 추천하나요?</b><br>수분감이 있는 물광 마무리를 선호하는 분 건조하거나 민감한 피부에 추천드립니다.</p>
    `
  },

  balm: {
    badge: 'NEW · MULTI USE',
    title: 'Botanical Multi Balm',
    body: `
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
        <div style="padding:12px 18px;background:var(--pink-light);border-radius:12px;">
          <p style="font-size:11px;color:var(--text-mid);margin-bottom:2px;">정가</p>
          <p style="font-size:15px;font-weight:700;text-decoration:line-through;color:var(--text-soft);">17,600원</p>
        </div>
        <div style="padding:12px 18px;background:var(--red);color:#fff;border-radius:12px;">
          <p style="font-size:11px;opacity:.85;margin-bottom:2px;">공식몰 할인가</p>
          <p style="font-size:16px;font-weight:700;">16,000원</p>
        </div>
      </div>

      <h4 style="font-size:15px;color:var(--text);">2종 라인업</h4>

      <div style="background:var(--bg2);padding:16px 20px;border-radius:12px;margin:12px 0;">
        <p style="font-weight:700;font-size:15px;margin-bottom:6px;">비타밤 — 보태니컬 비타 브라이트 멀티밤</p>
        <p style="font-size:14px;line-height:1.8;color:var(--text-mid);">나이아신아마이드, 판테놀, 비오틴 함유. MELAWAY 컴플렉스로 칙칙한 피부에 생기와 탄력을 부여하며 노화 방지 케어를 함께합니다.</p>
      </div>

      <div style="background:var(--bg2);padding:16px 20px;border-radius:12px;margin:12px 0 20px;">
        <p style="font-weight:700;font-size:15px;margin-bottom:6px;">시카밤 — 보태니컬 시카 모이스처 멀티밤</p>
        <p style="font-size:14px;line-height:1.8;color:var(--text-mid);">Tannin Complex(6가지 유효성분)와 병풀추출물 시카 컴플렉스로 피부를 편안하게 진정, 8시간 이상 보습을 유지합니다.</p>
      </div>

      <h4 style="font-size:15px;color:var(--text);">사용 부위</h4>
      <p style="font-size:14px;line-height:1.8;">립 치크 아이 얼굴 전체 목 바디까지 사용 가능한 멀티 밤</p>

      <h4 style="font-size:15px;color:var(--text);margin-top:20px;">특징</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li>5無 클린 레시피 — 인공색소·합성향료·파라벤 배제</li>
        <li>슬림핏 텍스처로 휴대와 사용이 간편</li>
        <li>EWG 그린 등급 원료 사용</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">자주 묻는 질문</h4>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 비타밤과 시카밤의 차이는?</b><br>비타밤은 톤업·탄력 케어 시카밤은 진정·보습 케어에 초점이 맞춰져 있습니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 메이크업 위에 덧발라도 되나요?</b><br>가능합니다. 슬림핏 텍스처로 밀림 없이 자연스럽게 발립니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 예민한 피부도 사용 가능한가요?</b><br>5無 클린 레시피와 EWG 그린 등급 원료로 예민한 피부도 안심하고 사용하실 수 있습니다.</p>
    `
  },

  sun: {
    badge: 'COLLABO · SUN CARE',
    title: 'Cica Natural Tone up Cream',
    body: `
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
        <div style="padding:12px 18px;background:var(--pink-light);border-radius:12px;">
          <p style="font-size:11px;color:var(--text-mid);margin-bottom:2px;">정가</p>
          <p style="font-size:15px;font-weight:700;text-decoration:line-through;color:var(--text-soft);">20,900원</p>
        </div>
        <div style="padding:12px 18px;background:var(--red);color:#fff;border-radius:12px;">
          <p style="font-size:11px;opacity:.85;margin-bottom:2px;">공식몰 할인가</p>
          <p style="font-size:16px;font-weight:700;">19,000원</p>
        </div>
      </div>

      <h4 style="font-size:15px;color:var(--text);">자외선 차단 지수 / SPF 50+ / PA++++</h4>
      <p style="font-size:14px;line-height:1.8;">임상 시험 결과 SPF 52.1 / PFA 15.4 (한국피부과학연구원 KDFI 인증)</p>

      <h4 style="font-size:15px;color:var(--text);margin-top:20px;">특징</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li>혼합자차 포뮬러 (무기 + 유기)</li>
        <li>파데 프리 자연스러운 광채 톤업</li>
        <li>백탁 현상 최소화</li>
        <li>라이트업 피팅 포뮬러</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">안심 성분</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li>5-CICA 병풀 추출물</li>
        <li>AHP-8 펩타이드 (탄력·주름 케어)</li>
        <li>EWG 그린 등급 원료 사용</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">자주 묻는 질문</h4>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 화잘먹 선크림인 이유?</b><br>라이트업 피팅 포뮬러가 피부에 부드럽게 밀착되어 이후 메이크업의 발림성과 지속력을 높여줍니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 민감성 피부도 사용 가능한가요?</b><br>병풀추출물과 EWG 그린 등급 원료로 민감성 피부도 안심하고 사용하실 수 있습니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 주름 개선 성분이 있나요?</b><br>AHP-8 펩타이드가 탄력과 주름 케어를 함께합니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. UVA/UVB 차단은?</b><br>SPF 50+와 PA++++로 UVB와 UVA 모두 차단합니다.</p>
    `
  },

  cleanser: {
    badge: 'COLLABO · CLEANSER',
    title: 'Botanical Cica Foam Cleanser',
    body: `
      <h4 style="font-size:15px;color:var(--text);">특징</h4>
      <p style="font-size:14px;line-height:1.8;">시카(병풀) 성분이 함유된 진정 케어 폼 클렌저로 민감하고 예민한 피부도 안심하고 사용할 수 있는 저자극 처방입니다.</p>

      <h4 style="font-size:15px;color:var(--text);margin-top:20px;">기대 효과</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li>피부 유수분 밸런스 유지</li>
        <li>진정 · 리페어 케어</li>
        <li>부드럽고 풍부한 거품</li>
        <li>당김 없는 마무리</li>
      </ul>

      <p style="font-size:13px;color:var(--text-mid);margin-top:20px;padding:14px 18px;background:var(--bg2);border-radius:10px;">※ 정확한 pH 지수 주요 성분 민감 피부 사용 여부 등 상세 정보는 곧 업데이트 예정입니다.</p>
    `
  },

  roller: {
    badge: 'COLLABO · ALL-IN-ONE',
    title: 'Custom Mood-On Roller',
    body: `
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
        <div style="padding:12px 18px;background:var(--pink-light);border-radius:12px;">
          <p style="font-size:11px;color:var(--text-mid);margin-bottom:2px;">정가</p>
          <p style="font-size:15px;font-weight:700;text-decoration:line-through;color:var(--text-soft);">50,600원</p>
        </div>
        <div style="padding:12px 18px;background:var(--red);color:#fff;border-radius:12px;">
          <p style="font-size:11px;opacity:.85;margin-bottom:2px;">공식몰 할인가</p>
          <p style="font-size:16px;font-weight:700;">46,000원</p>
        </div>
        <div style="padding:12px 18px;background:var(--bg2);border-radius:12px;">
          <p style="font-size:11px;color:var(--text-mid);margin-bottom:2px;">총 용량</p>
          <p style="font-size:15px;font-weight:700;">7.6g</p>
        </div>
      </div>

      <h4 style="font-size:15px;color:var(--text);">구성품 8종</h4>

      <p style="font-size:13px;color:var(--text-mid);font-weight:700;margin:12px 0 4px;">[베이스]</p>
      <ul style="font-size:14px;line-height:1.85;margin:0 0 12px;padding-left:16px;">
        <li><b>08 파운데이션</b> — 21호 상아빛</li>
      </ul>

      <p style="font-size:13px;color:var(--text-mid);font-weight:700;margin:12px 0 4px;">[아이]</p>
      <ul style="font-size:14px;line-height:1.85;margin:0 0 12px;padding-left:16px;">
        <li><b>01 도로시</b> — 로즈 베이지 매트</li>
        <li><b>02 코랄캔디</b> — 코랄 피치 글리터</li>
        <li><b>03 멜라니</b> — 레드 브라운 매트 글리터</li>
        <li><b>04 마스카라</b> — 롱래스팅 블랙카라</li>
      </ul>

      <p style="font-size:13px;color:var(--text-mid);font-weight:700;margin:12px 0 4px;">[립]</p>
      <ul style="font-size:14px;line-height:1.85;margin:0 0 12px;padding-left:16px;">
        <li><b>05 멜팅립밤</b> — 말간 핑크</li>
        <li><b>06 크리미 로즈</b> — 소프트 로즈 매트</li>
        <li><b>07 브릭레드</b> — 톤다운 레드 매트</li>
      </ul>

      <p style="font-size:13px;color:var(--text-mid);font-weight:700;margin:12px 0 4px;">[툴]</p>
      <p style="font-size:14px;line-height:1.85;margin-bottom:20px;">듀얼 브러쉬 + 립 브러쉬 내장</p>

      <h4 style="font-size:15px;color:var(--text);">사용 방법</h4>
      <ol style="font-size:14px;line-height:1.85;margin:8px 0 20px;padding-left:20px;">
        <li>피부 : 08 파운데이션으로 베이스</li>
        <li>아이 : 01 도로시 → 02 코랄캔디 → 03 멜라니 → 04 마스카라</li>
        <li>립 : 05 멜팅립밤 → 06 크리미로즈 → 07 브릭레드</li>
      </ol>

      <h4 style="font-size:15px;color:var(--text);">활용 상황</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li>여행 / 출장</li>
        <li>이동 중 퀵 메이크업</li>
        <li>미니백 외출</li>
        <li>메이크업 초보자</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">안심 성분</h4>
      <ul style="font-size:14px;line-height:1.85;margin:8px 0 18px;padding-left:16px;">
        <li>자연주의 클린 레시피</li>
        <li>세레신 글리세린 카프릴릭</li>
        <li>EWG 그린 등급</li>
        <li>피부과 테스트 완료</li>
      </ul>

      <h4 style="font-size:15px;color:var(--text);">자주 묻는 질문</h4>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 눈가 / 입술 자극은 없나요?</b><br>피부과 테스트를 완료했으며 EWG 그린 등급 원료를 사용해 눈가와 입술에 안심하고 사용하실 수 있습니다.</p>
      <p style="font-size:14px;line-height:1.8;"><b>Q. 립스틱에 오일이 맺히는데 불량인가요?</b><br>오일이 맺히는 것은 자연 오일 성분이 표면으로 분리된 것으로 불량이 아닙니다. 티슈로 살짝 눌러 닦아낸 후 사용하시면 됩니다.</p>
    `
  }
};

function openProduct(id) {
  const p = PRODUCTS[id];
  if (!p) return;
  document.getElementById('productBadge').textContent = p.badge;
  document.getElementById('productTitle').textContent = p.title;
  document.getElementById('productBody').innerHTML = p.body;
  document.getElementById('productOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProduct() {
  document.getElementById('productOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', function() {
  const o = document.getElementById('productOverlay');
  if (o) o.addEventListener('click', e => { if (e.target === o) closeProduct(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProduct(); });
});
