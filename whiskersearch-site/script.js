let lastSearchQuery = '';
let canvaLink = 'https://www.canva.com/design/DAGrke6nXUY/OdOciaHr0CxE1haEmn-IeA/view?utm_content=DAGrke6nXUY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h31ec2b405b';
let currentTab = 'all';
let history = [];
let historyIndex = -1;

function goHome() {
  history = [];
  historyIndex = -1;
  document.getElementById('browserContent').innerHTML = `
    <div class="search-page">
      <div class="search-logo">🐱</div>
      <div class="search-box">
        <input type="text" class="search-input" id="searchInput" placeholder="ProfessorCat'ta ara..." onkeypress="handleSearch(event)">
        <button class="search-button" onclick="performSearch()">Ara</button>
      </div>
    </div>
  `;
}

function handleSearch(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
}

function performSearch() {
  const query = document.getElementById('searchInput').value;
  if (query.trim()) {
    lastSearchQuery = query;
    showAlert();
  }
}

function showAlert() {
  document.getElementById('alertOverlay').style.display = 'flex';
}

function confirmAlert() {
  document.getElementById('alertOverlay').style.display = 'none';
  showResults();
}

function switchTab(tabName) {
  currentTab = tabName;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById(`${tabName}-content`).classList.add('active');
}

function showResults() {
  const browserContent = document.getElementById('browserContent');
  const query = lastSearchQuery;

  const content = `
    <div style="display: flex; align-items: center; padding: 20px 30px; background: #f9f9f9; border-bottom: 1px solid #e0e0e0;">
      <div class="search-box" style="max-width: 600px; margin: 0;">
        <input 
          type="text" 
          class="search-input" 
          value="${query}" 
          onkeypress="handleSearch(event)" 
          style="max-width: none;"
        >
        <button class="search-button" onclick="performSearch()">Ara</button>
      </div>
    </div>

    <div class="tabs-container">
      <button class="tab active" onclick="switchTab('all')">🔍 Tümü</button>
      <button class="tab" onclick="switchTab('images')">🖼️ Görseller</button>
      <button class="tab" onclick="switchTab('videos')">🎬 Videolar</button>
      <button class="tab" onclick="switchTab('shopping')">🛍️ Alışveriş</button>
      <button class="tab" onclick="switchTab('ai')">✨ AI Modu</button>
    </div>

    <div id="all-content" class="tab-content active">
      <div class="results-container">
        <div style="margin-bottom: 10px; color: #999; font-size: 14px;">
          Sonuçlar: "${query}" için
        </div>
        <div class="result-item" onclick="openResult()">
          <div class="result-content">
            <div class="result-url">professorcatsearch.com › arama › ${query}</div>
            <div class="result-title">ProfessorCat'ın En İyi Sonucu</div>
            <div class="result-description">ProfessorCat sizin için özel olarak seçtiği bu kaynağı incelemenizi tavsiye eder.</div>
          </div>
        </div>
        <div class="result-item" onclick="openResult()">
          <div class="result-content">
            <div class="result-url">professorcatsearch.com › sonuç › ${query}</div>
            <div class="result-title">Başka Bir ProfessorCat Önerisi</div>
            <div class="result-description">ProfessorCat'ın dış dünyaya bakışını sizin de deneyimlemenizi çok isterim.</div>
          </div>
        </div>
        <div class="result-item" onclick="openResult()">
          <div class="result-content">
            <div class="result-url">professorcatsearch.com › tavsiye › ${query}</div>
            <div class="result-title">ProfessorCat'ın Özel Seçimi</div>
            <div class="result-description">Bu bağlantı ProfessorCat tarafından titizlikle incelendi ve onaylandı!</div>
          </div>
        </div>
      </div>
    </div>

    <div id="images-content" class="tab-content">
      <div class="images-grid">
        <div class="image-item" onclick="openResult()">😺</div>
        <div class="image-item" onclick="openResult()">😸</div>
        <div class="image-item" onclick="openResult()">😻</div>
        <div class="image-item" onclick="openResult()">😽</div>
        <div class="image-item" onclick="openResult()">😼</div>
        <div class="image-item" onclick="openResult()">😹</div>
        <div class="image-item" onclick="openResult()">😾</div>
        <div class="image-item" onclick="openResult()">😿</div>
        <div class="image-item" onclick="openResult()">🐱</div>
      </div>
    </div>

    <div id="videos-content" class="tab-content">
      <div class="videos-container">
        <div class="video-item" onclick="openResult()">▶️ 🐱</div>
        <div class="video-item" onclick="openResult()">▶️ 😹</div>
        <div class="video-item" onclick="openResult()">▶️ 😸</div>
        <div class="video-item" onclick="openResult()">▶️ 🐱</div>
        <div class="video-item" onclick="openResult()">▶️ 😻</div>
        <div class="video-item" onclick="openResult()">▶️ 😼</div>
      </div>
    </div>

    <div id="shopping-content" class="tab-content">
      <div class="shopping-container">
        <div class="product-item" onclick="openResult()">
          <div class="product-image">🐱</div>
          <div class="product-name">ProfessorCat Tişört</div>
          <div class="product-price">₺199</div>
        </div>
        <div class="product-item" onclick="openResult()">
          <div class="product-image">😸</div>
          <div class="product-name">Kedi Şapkası</div>
          <div class="product-price">₺149</div>
        </div>
        <div class="product-item" onclick="openResult()">
          <div class="product-image">😹</div>
          <div class="product-name">Mugs Kedi</div>
          <div class="product-price">₺79</div>
        </div>
        <div class="product-item" onclick="openResult()">
          <div class="product-image">😻</div>
          <div class="product-name">Kedi Bilezik</div>
          <div class="product-price">₺99</div>
        </div>
        <div class="product-item" onclick="openResult()">
          <div class="product-image">😼</div>
          <div class="product-name">Kedi Çorap</div>
          <div class="product-price">₺49</div>
        </div>
        <div class="product-item" onclick="openResult()">
          <div class="product-image">😽</div>
          <div class="product-name">Kedi Hoodie</div>
          <div class="product-price">₺299</div>
        </div>
      </div>
    </div>

    <div id="ai-content" class="tab-content">
      <div class="ai-chat-container">
        <div class="ai-messages" id="aiMessages">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: column; gap: 20px;">
            <div style="font-size: 80px;">🤖</div>
            <div style="font-size: 32px; font-weight: 700; color: #333;">CatAI</div>
            <div style="font-size: 16px; color: #666; max-width: 400px; text-align: center;">
              ProfessorCat'ın yapay zeka asistanı ile sohbet edin. Bir soru sorun ve hazır olun!
            </div>
          </div>
        </div>
        <div class="ai-input-area">
          <input type="text" class="ai-input" id="aiInput" placeholder="Bir soru sor..." onkeypress="handleAIMessage(event)">
          <button class="ai-send-button" onclick="sendAIMessage()">Gönder</button>
        </div>
      </div>
    </div>
  `;

  browserContent.innerHTML = content;
  
  historyIndex++;
  history = history.slice(0, historyIndex);
  history.push({ type: 'results', query: query });
}

function handleAIMessage(event) {
  if (event.key === 'Enter') {
    sendAIMessage();
  }
}

async function sendAIMessage() {
  const input = document.getElementById('aiInput');
  const message = input.value.trim();
  
  if (!message) return;

  const messagesContainer = document.getElementById('aiMessages');
  
  const userMessageDiv = document.createElement('div');
  userMessageDiv.className = 'message user';
  userMessageDiv.innerHTML = `<div class="message-bubble">${message}</div>`;
  messagesContainer.appendChild(userMessageDiv);

  input.value = '';

  try {
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.className = 'message ai';
    aiMessageDiv.innerHTML = '<div class="message-bubble">CatAI düşünüyor...</div>';
    messagesContainer.appendChild(aiMessageDiv);

    const response = await window.engine.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Sen CatAI adlı Türkçe konuşan yardımcı bir yapay zekasın. Her zaman Türkçe cevap ver."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    aiMessageDiv.innerHTML = `<div class="message-bubble">${response.choices[0].message.content}</div>`;
  } catch (err) {
    const aiMessageDiv = document.createElement('div');
    aiMessageDiv.className = 'message ai';
    aiMessageDiv.innerHTML = `<div class="message-bubble">Hata: ${err.message}</div>`;
    messagesContainer.appendChild(aiMessageDiv);
  }

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function openResult() {
  window.open(canvaLink, '_blank', 'noopener,noreferrer');
}

function goBack() {
  if (historyIndex > 0) {
    historyIndex--;
    const page = history[historyIndex];
    if (page.type === 'results') {
      lastSearchQuery = page.query;
      showResults();
    }
  }
}

function goForward() {
  if (historyIndex < history.length - 1) {
    historyIndex++;
    const page = history[historyIndex];
    if (page.type === 'results') {
      lastSearchQuery = page.query;
      showResults();
    }
  }
}

function reload() {
  if (historyIndex >= 0 && history[historyIndex]) {
    const page = history[historyIndex];
    if (page.type === 'results') {
      lastSearchQuery = page.query;
      showResults();
    }
  }
}