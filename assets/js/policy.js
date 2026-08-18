// Policy modal content
const policyContent = {
  privacy: {
    title: '개인정보처리방침',
    body: `
<h4>1. 개인정보의 수집 및 이용 목적</h4>
<p>(주)엔비피시스(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
<p>· 비즈니스 제휴 및 문의 처리<br>· 서비스 제공 및 고객 응대<br>· 뉴스레터 및 마케팅 정보 발송 (동의한 경우)</p>

<h4>2. 수집하는 개인정보 항목</h4>
<p>· 이름, 이메일 주소, 연락처<br>· 회사명, 문의 내용</p>

<h4>3. 개인정보의 보유 및 이용 기간</h4>
<p>회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다. 문의 처리 완료 후 3년간 보관합니다.</p>

<h4>4. 개인정보의 제3자 제공</h4>
<p>회사는 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서만 처리하며, 정보주체의 동의 없이 제3자에게 제공하지 않습니다.</p>

<h4>5. 개인정보 보호책임자</h4>
<p>성명: 엔비피시스 개인정보 보호 담당자<br>이메일: min3015@daum.net<br>전화: 070-7773-2997</p>

<h4>6. 시행일</h4>
<p>본 방침은 2026년 1월 1일부터 시행됩니다.</p>`
  },
  terms: {
    title: '이용약관',
    body: `
<h4>제1조 (목적)</h4>
<p>이 약관은 (주)엔비피시스(이하 "회사")가 운영하는 NBPSIS 공식 웹사이트(nbpsis.com)에서 제공하는 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>

<h4>제2조 (정의)</h4>
<p>"사이트"란 회사가 운영하는 nbpsis.com 웹사이트를 의미합니다.<br>"이용자"란 본 사이트에 접속하여 서비스를 이용하는 자를 말합니다.</p>

<h4>제3조 (서비스의 내용)</h4>
<p>회사는 다음과 같은 서비스를 제공합니다.<br>· 브랜드 소개 및 제품 정보 제공<br>· 보도자료 및 미디어 콘텐츠 제공<br>· 비즈니스 문의 접수</p>

<h4>제4조 (지적재산권)</h4>
<p>본 사이트에 게재된 모든 콘텐츠(텍스트, 이미지, 로고 등)의 저작권은 회사 또는 해당 권리자에게 귀속됩니다. 무단 복제, 배포, 수정은 금지됩니다.</p>

<h4>제5조 (면책 조항)</h4>
<p>회사는 이용자가 서비스를 이용하여 기대하는 이익을 얻지 못하거나 서비스 자료에 대한 취사 선택으로 발생하는 손해 등에 대하여 책임을 지지 않습니다.</p>

<h4>제6조 (준거법 및 관할법원)</h4>
<p>본 약관은 대한민국 법률에 따라 규율되며, 분쟁 발생 시 서울중앙지방법원을 관할 법원으로 합니다.</p>

<h4>부칙</h4>
<p>본 약관은 2026년 1월 1일부터 시행됩니다.</p>`
  },
  email: {
    title: '이메일무단수집거부',
    body: `
<h4>이메일 무단수집 거부</h4>
<p>본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에 의해 형사처벌될 수 있습니다.</p>

<h4>관련 법령</h4>
<p>「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제50조의2(전자우편주소의 무단 수집행위 등 금지)<br><br>누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.</p>

<h4>문의</h4>
<p>이메일 무단수집 관련 문의: min3015@daum.net<br>전화: 070-7773-2997</p>

<h4>시행일</h4>
<p>2026년 1월 1일부터 시행</p>`
  }
};

function openPolicy(type) {
  const data = policyContent[type];
  if (!data) return;
  const overlay = document.getElementById('policyOverlay');
  document.getElementById('policyTitle').textContent = data.title;
  document.getElementById('policyBody').innerHTML = data.body;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePolicy() {
  document.getElementById('policyOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('policyOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closePolicy();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closePolicy();
    });
  }
});
