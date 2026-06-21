let history = [];
let historyIndex = -1;

const pages = {
  'whiskersearch-nedir': {
    title: 'WhiskerSearch Nedir?',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>🐱 WhiskerSearch Nedir?</h2>
            <p>Tanım ve İşlevi</p>
          </div>
          <div class="detail-content">
            <div class="section">
              <h3>Tanım</h3>
              <p>WhiskerSearch, benim kişisel web sitelerimi tanıtmak amaçlıyla oluşturduğum ve Google arama motoru konseptine benzer bir sahte arama motorudur. Ziyaretçilere etkili bir deneyim sunarak sitelerim ve yetkinliklerim hakkında bilgi vermek için tasarlanmıştır.</p>
            </div>

            <div class="section">
              <h3>Temel Özellikler</h3>
              <ul class="list-items">
                <li>Gerçekçi arama motoru arayüzü</li>
                <li>Etkileşimli arama sonuçları</li>
                <li>Yapay zeka entegrasyonu (Cat-AI)</li>
                <li>4 aşamalı eğitim oyunu</li>
                <li>Google My Business entegrasyonu</li>
                <li>Google Search Console istatistikleri</li>
              </ul>
            </div>

            <div class="section">
              <h3>Sahte Arama Motoru Görselleri</h3>
              <div class="image-grid">
                <div class="image-placeholder-small">[Görsel 1: Arama Motoru Ana Sayfası]</div>
                <div class="image-placeholder-small">[Görsel 2: Arama Sonuçları]</div>
                <div class="image-placeholder-small">[Görsel 3: Detay Sayfası]</div>
              </div>
            </div>

            <div class="section">
              <h3>Hedef</h3>
              <p>WhiskerSearch ile insanlara beklemedikleri bir deneyim yaşatarak hayatlarında bir etki bırakmak ve kişisel web projelerim hakkında ilgi çekmektir.</p>
            </div>
          </div>
        </div>
      `;
    }
  },

  'whiskersearch-ozellikleri': {
    title: 'WhiskerSearch Özellikleri',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>✨ WhiskerSearch Özellikleri</h2>
            <p>İşlevler ve Yetenekler</p>
          </div>
          <div class="detail-content">
            <div class="section">
              <h3>AI Modu - CatAI</h3>
              <p>WhiskerSearch, Türkçe ve İngilizce konuşan yapay zeka asistanı CatAI ile entegre edilmiştir. Web-LLM ve MLC AI teknolojisi kullanılarak geliştirilmiştir. Ziyaretçiler sorularını sorabilir ve anlık cevaplar alabilirler.</p>
              <div class="image-placeholder">[Görsel: CatAI Chat Arayüzü]</div>
            </div>

            <div class="section">
              <h3>4 Aşamalı Eğitim Oyunu</h3>
              <p>WhiskerSearch'un en ilgi çekici özelliği olan bu oyun, eğlenceli ve öğretici bir deneyim sunmaktadır.</p>

              <h4>1. AŞAMA: Akademik Başarı</h4>
              <p>Bir öğrencinin ders başarısını yükseltmeye yönelik:</p>
              <ul class="list-items">
                <li>Ödev listeleri</li>
                <li>Sınav testleri</li>
                <li>Wordwall oyunları</li>
              </ul>
              <div class="image-grid">
                <div class="image-placeholder-small">[Görsel 1A]</div>
                <div class="image-placeholder-small">[Görsel 1B]</div>
                <div class="image-placeholder-small">[Görsel 1C]</div>
              </div>

              <h4>2. AŞAMA: Çevre Duyarlılığı</h4>
              <p>3 bölümde çevre bilinci geliştirme:</p>
              <ul class="list-items">
                <li><strong>Bölüm 1:</strong> Çöp Ayrıştırma</li>
                <li><strong>Bölüm 2:</strong> Ağaç Dikme</li>
                <li><strong>Bölüm 3:</strong> Restoran Sipariş Hazırlama</li>
              </ul>
              <div class="image-grid">
                <div class="image-placeholder-small">[Görsel 2A]</div>
                <div class="image-placeholder-small">[Görsel 2B]</div>
              </div>

              <h4>3. AŞAMA: Hizmet Kalitesi</h4>
              <p>Restorandaki müşteri hizmetini uş. Gelen siparişleri hazırlamak, multitasking yeteneklerini test etmek ve zaman yönetimi becerileri geliştirmek:</p>
              <div class="image-grid">
                <div class="image-placeholder-small">[Görsel 3A]</div>
                <div class="image-placeholder-small">[Görsel 3B]</div>
                <div class="image-placeholder-small">[Görsel 3C]</div>
              </div>

              <h4>4. AŞAMA: Ev Yönetimi</h4>
              <p>Evdeki farklı alanları temizleme görevleri:</p>
              <ul class="list-items">
                <li><strong>Salon Temizliği</strong> - Toz alma, düzenleme</li>
                <li><strong>Mutfak Temizliği</strong> - Yıkama, temizleme</li>
                <li><strong>Yatak Odası Temizliği</strong> - Tertip, düzenleme</li>
              </ul>
              <div class="image-grid">
                <div class="image-placeholder-small">[Görsel 4A]</div>
                <div class="image-placeholder-small">[Görsel 4B]</div>
                <div class="image-placeholder-small">[Görsel 4C]</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  'whiskersearch-istatistikleri': {
    title: 'WhiskerSearch İstatistikleri',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>📊 WhiskerSearch İstatistikleri</h2>
            <p>Google Search Console ve My Business Verileri</p>
          </div>
          <div class="detail-content">
            <div class="section">
              <h3>Google Search Console Verileri</h3>
              <div class="stats-container">
                <div class="stat-item">
                  <span class="stat-label">Toplam Tıklanma:</span>
                  <span class="stat-value">20+</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Toplam Gösterim:</span>
                  <span class="stat-value">150+</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Ortalama CTR:</span>
                  <span class="stat-value">%13,3</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Ortalama Sıralama:</span>
                  <span class="stat-value">7.5</span>
                </div>
              </div>
            </div>

            <div class="section">
              <h3>🎉 Başarı Mesajları</h3>
              <div class="success-message">✓ <strong>28 günde 20 tıklanmaya ulaştığınız için tebrikler!</strong> Bu başarı sizin sitelerinizin arama motorlarında güçlü bir konum almasını gösterir.</div>
              <div class="success-message">✓ <strong>Arama görünürlüğü sürekli artıyor!</strong> Her gün daha fazla kişi sizi bulabiliyor.</div>
              <div class="success-message">✓ <strong>Organik trafik hedefine yaklaşılıyor!</strong> Proje başarıyla ilerlemektedir.</div>
            </div>

            <div class="section">
              <h3>Google My Business Profili</h3>
              <p>Web sitem Google My Business üzerinden listelenmiş ve aşağıdaki veriler izlenmektedir:</p>
              <div class="image-placeholder">[Görsel: Google My Business Profili ve Yorumı]</div>
              <ul class="list-items">
                <li>İşletme Adı ve İletişim Bilgileri</li>
                <li>Müşteri Yorumları ve Puanlaması</li>
                <li>Profil Görüntüleme Sayısı</li>
                <li>İşletmeyi Araştıranlar</li>
                <li>Yönlendirme ve İletişim Talepleri</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    }
  },

  'diger-sitelerim': {
    title: 'Diğer Sitelerim',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>🌐 Diğer Sitelerim</h2>
            <p>Tüm Web Projelerime Göz Atın</p>
          </div>
          <div class="detail-content">
            <div class="section">
              <h3>Benim Tüm Projelerim</h3>
              <p>Aşağıda listelenen sitelere tıklayarak her bir projeyi detaylı olarak öğrenebilirsiniz:</p>
            </div>

            <div class="result-item" onclick="showPage('terminal')">
              <div class="result-url">whiskersearch.com › projelerim › terminal</div>
              <div class="result-title">1. Sahte Terminal</div>
              <div class="result-description">Linux komut satırı simülasyonu. Terminal nedir, nasıl çalışır, temel komutlar ve kullanım alanları hakkında bilgi edinin.</div>
            </div>

            <div class="result-item" onclick="showPage('cat-ai')">
              <div class="result-url">whiskersearch.com › projelerim › cat-ai</div>
              <div class="result-title">2. Cat-AI Chatbot</div>
              <div class="result-description">Türkçe ve İngilizce konuşan yapay zeka asistanı. Yapay zeka nedir, nasıl öğrenir ve günlük hayatmızda nasıl kullanıldığı hakkında bilgi edinin.</div>
            </div>

            <div class="result-item" onclick="showPage('contact')">
              <div class="result-url">whiskersearch.com › iletisim › contact</div>
              <div class="result-title">3. İletişim Formu</div>
              <div class="result-description">Benimle iletişime geçin. Sorularınız, önerileriniz ve geri bildirimleriniz için bana doğrudan ulaşabilirsiniz.</div>
            </div>

            <div class="result-item" onclick="showPage('degerlendirme')">
              <div class="result-url">whiskersearch.com › geri-bildirim › survey</div>
              <div class="result-title">4. Değerlendirme Formu</div>
              <div class="result-description">WhiskerSearch sunumu hakkında fikirleriniz ve değerlendirmelerinizi paylaşın. Tüm sonuçlar Google Sheets'e kaydedilmektedir.</div>
            </div>
          </div>
        </div>
      `;
    }
  },

  'terminal': {
    title: 'Sahte Terminal',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>💻 Sahte Terminal</h2>
            <p>Linux Komut Satırı Deneyimi</p>
          </div>
          <div class="detail-content">
            <button class="back-button" onclick="showResults('diger-sitelerim')">← Geri Dön</button>

            <div class="section">
              <h3>Terminal Nedir?</h3>
              <p>Terminal, bir bilgisayar ile komut satırı arayüzü üzerinden iletişim kurmamızı sağlayan bir uygulamadır. Metin tabanlı komutlar yazarak dosya yönetimi, yazılım kurulumu ve sistem yönetimi gibi işlemler yapılabilir.</p>
            </div>

            <div class="section">
              <h3>Sahte Terminal Özellikleri</h3>
              <ul class="list-items">
                <li>Gerçekçi Terminal Arayüzü - Orijinal Linux terminali gibi görünüş</li>
                <li>Komut Destekı - <code>about</code>, <code>contact</code>, <code>support</code> gibi komutlar</li>
                <li>Dil Değişimi - <code>TR</code> ve <code>ENG</code> komutlarıyla dil değiştirme</li>
                <li>Eğitim Amaçlı Örnekler - Help komutundan tüm komutları görebilirsiniz</li>
              </ul>
            </div>

            <div class="section">
              <h3>Temel Komutlar</h3>
              <ul class="list-items">
                <li><code>help</code> - Tüm komutları listele</li>
                <li><code>about</code> - WhiskerSearch hakkında bilgi al</li>
                <li><code>contact</code> - İletişim sayfasına git</li>
                <li><code>support</code> - Destek almak için komut</li>
                <li><code>website</code> - Web sitesini aç</li>
                <li><code>TR</code> - Dili Türkçe yap</li>
                <li><code>ENG</code> - Dili İngilizce yap</li>
                <li><code>clear</code> - Ekrani temizle</li>
              </ul>
            </div>

            <div class="section">
              <h3>Kod Mimarisi</h3>
              <p>Terminal.html dosyasında vanilla JavaScript kullanılarak gelimiştir. Web Önbellek (Local Storage) kullanılabilir ve cevaplar dinamik olarak üretilir.</p>
            </div>
          </div>
        </div>
      `;
    }
  },

  'cat-ai': {
    title: 'Cat-AI Chatbot',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>🤖 Cat-AI Chatbot</h2>
            <p>Türkçe ve İngilizce Konuşan Yapay Zeka</p>
          </div>
          <div class="detail-content">
            <button class="back-button" onclick="showResults('diger-sitelerim')">← Geri Dön</button>

            <div class="section">
              <h3>Yapay Zeka Nedir?</h3>
              <p>Yapay zeka (AI), bilgisayarların insan benzeri zekaca davranışlar göstermesi, öğrenmesi ve kararlar alması hakkında bilim branşıdır. Cat-AI, Web-LLM teknolojisi ve MLC AI kullanılarak oluşturulmuş, tamamen tarayıcıda çalışan, Türkçe ve İngilizce sorulara yanıt verebilen bir chatbottur.</p>
            </div>

            <div class="section">
              <h3>Cat-AI Yetenekleri</h3>
              <ul class="list-items">
                <li>Türkçe Dil Desteği - Aynı zamanda İngilizce de yanıt verir</li>
                <li>Doğal Dil İşleme - İnsan gibi anlama ve yanıt verme</li>
                <li>Tamamen Lokal - Veriler sunucuya gönderilmez, tarayıcıda işlenir</li>
                <li>Hızlı Yanıtlar - Gerçek zamanlı cevaplar</li>
                <li>Kullanıcı Dostu - Basit ve anlaşılır arayüz</li>
              </ul>
            </div>

            <div class="section">
              <h3>Teknik Altyapı</h3>
              <p><strong>Teknolojiler:</strong></p>
              <ul class="list-items">
                <li>Web-LLM - Tarayıcıda LLM çalıştırma</li>
                <li>MLC AI - Machine Learning Compilation</li>
                <li>WebGPU - GPU hızlandrılması (varsa)</li>
                <li>JavaScript - Frontend geliştirme</li>
              </ul>
              <p style="margin-top: 15px;">Cat-ai.html dosyasında tüm kodlar ve entegrasyonlar mevcuttur.</p>
            </div>
          </div>
        </div>
      `;
    }
  },

  'contact': {
    title: 'İletişim',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>📧 İletişim Formu</h2>
            <p>Benimle İletişime Geçin</p>
          </div>
          <div class="detail-content">
            <button class="back-button" onclick="showResults('diger-sitelerim')">← Geri Dön</button>

            <div class="section">
              <h3>Bana Ulaşın</h3>
              <p>Web sitelerim hakkında sorularınız, önerileriniz veya işbirliği teklifleriniz için lütfen iletişime geçiniz. En kısa sürede size dönüş yapacağım.</p>
            </div>

            <div class="section">
              <h3>İletişim Yolları</h3>
              <ul class="list-items">
                <li>📧 <strong>E-posta:</strong> ayse.akcin42@gmail.com</li>
                <li>👨‍💻 <strong>GitHub:</strong> github.com/ayse-create</li>
                <li>💼 <strong>LinkedIn:</strong> (Profil linki)</li>
                <li>📱 <strong>Sosyal Medya:</strong> (Sosyal medya hesapları)</li>
              </ul>
            </div>

            <div class="section">
              <h3>İletişim Formu Özellikleri</h3>
              <p>Contact.html dosyasında geliştirilmiş interaktif iletişim formu bulunmaktadır:</p>
              <ul class="list-items">
                <li>Konfeti Animasyonu - Güzel ve dinamik tasarım</li>
                <li>Güvenli İletişim - Formunuz güvenli şekilde işlenir</li>
                <li>Emoji Desteği - Eğlenceli ve renkli arayüz</li>
                <li>Responsive Tasarım - Tüm cihazlarda uyumlu</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    }
  },

  'degerlendirme': {
    title: 'Değerlendirme',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>📋 Değerlendirme Formu</h2>
            <p>Fikirleriniz Bizim İçin Değerli</p>
          </div>
          <div class="detail-content">
            <button class="back-button" onclick="showResults('diger-sitelerim')">← Geri Dön</button>

            <div class="section">
              <h3>Sunumunuz Hakkında Düşünceleriniz</h3>
              <p>WhiskerSearch sunumu hakkında fikirleriniz, eleştirileri ve tavsiyelerinizi paylaşabilirsiniz. Tüm cevaplar Google Sheets'e kaydedilmektedir ve gelecekteki geliştirmelerim için çok önemlidir.</p>
            </div>

            <div class="section">
              <h3>Değerlendirme Kriterleri</h3>
              <ul class="list-items">
                <li>Sunum İçeriği ve Açıklığı</li>
                <li>Teknik Altyapı ve Tasarım</li>
                <li>Etkileşimlilik ve Deneyim</li>
                <li>Genel İzlenim ve Başarı</li>
                <li>Yaratıcılık ve Yenilik</li>
              </ul>
            </div>

            <div class="section">
              <h3>Veri Depolama ve Gizlilik</h3>
              <p>Tüm değerlendirme sonuçları <strong>Google Sheets</strong> üzerinde kayıt altına alınmaktadır. Bu sayede verileriniz:</p>
              <ul class="list-items">
                <li>Güvenli ve şifreli şekilde saklanır</li>
                <li>Düzenli ve analiz edilebilir durumda tutulur</li>
                <li>Sadece geliştirme amacıyla kullanılır</li>
                <li>Üçüncü taraflarla paylaşılmaz</li>
              </ul>
              <div class="image-grid">
                <div class="image-placeholder-small">[Görsel 1: Değerlendirme Formu]</div>
                <div class="image-placeholder-small">[Görsel 2: Google Sheets Tablosu]</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  'destek': {
    title: 'WhiskerSearch Desteği',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>❤️ WhiskerSearch'a Destek Olun</h2>
            <p>Nasıl Yardımcı Olabilirim?</p>
          </div>
          <div class="detail-content">
            <div class="section">
              <h3>WhiskerSearch'a Destek Olmanın Yolları</h3>
              <p>WhiskerSearch projesi hakkında pozitif deneyim yaşadıysanız, aşağıdaki yollarla destek olabilirsiniz:</p>
            </div>

            <div class="section">
              <h4>🌟 1. Google My Business Yorumu Bırakın</h4>
              <p>Google My Business profilime olumlu yorum bırakarak diğer kullanıcılara yardımcı olabilirsiniz. Yorumlarınız:</p>
              <ul class="list-items">
                <li>Benim işimi ve güvenilirliğimi artırır</li>
                <li>Diğer ziyaretçilerin karar almasına yardımcı olur</li>
                <li>Arama motorlarında üst sıralara tırmanmama yardımcı olur</li>
              </ul>
            </div>

            <div class="section">
              <h4>📱 2. Siteleri Ziyaret Edin</h4>
              <ul class="list-items">
                <li>WhiskerSearch ana sitesini ziyaret edin</li>
                <li>Diğer sitelerime göz atın</li>
                <li>Tüm özellikleri deneyimleyin ve keşfedin</li>
              </ul>
            </div>

            <div class="section">
              <h4>💬 3. Sosyal Medyada Paylaşın</h4>
              <p>Web sitelerim hakkında sosyal medyada paylaşımlar yaparak beni ve projelerimi daha fazla kişiye duyurmaya yardımcı olabilirsiniz.</p>
            </div>

            <div class="section">
              <h4>💌 4. Geri Bildirim Gönderin</h4>
              <p>Değerlendirme formunu doldurup geri bildiriminizi gönderin. Bu bilgiler gelecekteki geliştirmelerim için çok önemlidir.</p>
            </div>

            <div class="section">
              <h4>🔗 5. Projeyi Paylaşın</h4>
              <p>Arkadaşlarınız, aile üyeleriniz ve tanıdıklarınız ile bu siteyi paylaşarak daha fazla kişiye ulaşmasına yardımcı olun.</p>
            </div>
          </div>
        </div>
      `;
    }
  },

  'platformlar': {
    title: 'Kullanılan Platformlar',
    render: function() {
      return `
        <div class="detail-page">
          <div class="detail-header">
            <h2>🛠️ Kullanılan Platformlar</h2>
            <p>WhiskerSearch'u Möglich Kılan Teknolojiler</p>
          </div>
          <div class="detail-content">
            <div class="section">
              <h3>WhiskerSearch Projesi Hangi Platformlarla Geliştirildi?</h3>
              <p>Bu sunum ve web sitesi aşağıdaki profesyonel platformlar ve araçlar kullanılarak geliştirilmiştir:</p>
            </div>

            <div class="section">
              <h4>1. Canva - Grafik Tasarım</h4>
              <div class="image-placeholder-small">[Canva Logo]</div>
              <p>Canva, kolay grafik tasarımları ile web sitesi ve sunum görselleri yapmayı kod yazmadan başka bir seviyeye çıkaran harika bir platformdur.</p>
              <div class="success-message">Canva ile tüm görseller ve tasarım öğeleri profesyonel bir şekilde hazırlanmıştır. Tasarım bilgisiz kişiler bile güzel görseller oluşturabilir.</div>
            </div>

            <div class="section">
              <h4>2. GitHub - Kod Depo Yönetimi</h4>
              <div class="image-placeholder-small">[GitHub Logo]</div>
              <p>GitHub, repo oluşturma, dosyaları düzenli bir arada tutarak kod yazma ve Copilot özelliği ile debugging'i en kolay seviyeye çıkaran bir platformdur.</p>
              <ul class="list-items">
                <li>Versiyon kontrolü ve değişim takibi</li>
                <li>GitHub Copilot - Yapay zeka destekli kod tamamlama</li>
                <li>Ekip işbirliği ve pull request'ler</li>
                <li>GitHub Pages - Statik siteler barındırma</li>
              </ul>
              <div class="success-message">GitHub Copilot ile hızlı ve etkili geliştirme yapılmış, tüm kodlar profesyonel şekilde yönetilmiştir.</div>
            </div>

            <div class="section">
              <h4>3. ChatGPT - Yapay Zeka Desteği</h4>
              <div class="image-placeholder-small">[ChatGPT Logo]</div>
              <p>ChatGPT, anlamadığım ve yapamadığım parçalanmış kodları telafi etmede ve bana yeni fikirler öneride bulunarak projeyi ileri götürmede çok işime yarışmiştır.</p>
              <ul class="list-items">
                <li>Kod analizi ve debug desteği</li>
                <li>Fikirler ve çözüm önerileri</li>
                <li>Yazım ve dil kontrolleri</li>
                <li>Yaratıcı çıkmazlarda ilham</li>
              </ul>
            </div>

            <div class="section">
              <h4>4. Google Gemini - Alternatif AI</h4>
              <div class="image-placeholder-small">[Gemini Logo]</div>
              <p>Google Gemini, farklı perspektifler sağlayan ve proje geliştirmede alternatif çözümler sunup projeyi çeşitlendiren harika bir yapay zeka aracıdır.</p>
              <ul class="list-items">
                <li>Başka bir perspektif sağlama</li>
                <li>Farklı yaklaşım önerileri</li>
                <li>Kod optimizasyonu</li>
                <li>Belge yazımı desteği</li>
              </ul>
            </div>

            <div class="section">
              <h3 style="color: #667eea; font-size: 20px; margin-top: 30px; margin-bottom: 10px;">Sonuç</h3>
              <p style="font-size: 16px; line-height: 1.8;">
                <strong style="font-size: 18px; color: #333;">Değerli konuklar,</strong> bir web sitesi yapmak kolay bir şeydir. Ancak <strong>önemli olan insanlara beklemedikleri bir deneyim yaşatarak hayatlarında bir etki bırakmaktır.</strong>
              </p>
              <p style="font-size: 16px; line-height: 1.8; margin-top: 15px;">
                Benim amacım bu oldu. WhiskerSearch aracılığıyla ziyaretçilere eğlenceli, interaktif ve öğretici bir deneyim sunmak istedim. Umarım başarılı oldum.
              </p>
              <p style="font-size: 16px; line-height: 1.8; margin-top: 15px;">
                Bu sunumu beğendiyseniz, <strong>lütfen program sonunda yanıma gelerek benden kartvizit alınız.</strong> Kişisel web sitelerim ve iletişim bilgilerim yazılı olacaktır.
              </p>
              <p style="font-size: 20px; font-weight: 600; color: #667eea; margin-top: 30px; text-align: center;">
                Beni dinlediğiniz için teşekkür ederim! 🙏
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }
};

function handleSearch(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
}

function performSearch() {
  const input = document.getElementById('searchInput');
  const query = input.value.toLowerCase().trim();
  
  if (!query) return;

  // Arama terimlerine göre yönlendir
  if (query.includes('whiskersearch') && query.includes('nedir')) {
    showPage('whiskersearch-nedir');
  } else if (query.includes('whiskersearch') && (query.includes('özellik') || query.includes('4 aşama'))) {
    showPage('whiskersearch-ozellikleri');
  } else if (query.includes('whiskersearch') && (query.includes('istatistik') || query.includes('google'))) {
    showPage('whiskersearch-istatistikleri');
  } else if ((query.includes('diğer') || query.includes('site')) && (query.includes('whiskersearch'))) {
    showPage('diger-sitelerim');
  } else if (query.includes('destek') || query.includes('nasıl')) {
    showPage('destek');
  } else if (query.includes('platform') || query.includes('teknoloji')) {
    showPage('platformlar');
  } else {
    // Varsayılan sonuçlar
    showResults('whiskersearch-nedir');
  }
}

function showResults(pageKey) {
  const browserContent = document.getElementById('browserContent');
  
  const content = `
    <div class="results-page">
      <div class="search-bar-top">
        <div class="search-box-results">
          <input type="text" class="search-input" id="searchInput" placeholder="WhiskerSearch'ta ara..." onkeypress="handleSearch(event)">
          <button class="search-button" onclick="performSearch()">Ara</button>
        </div>
      </div>
      <div class="content-area" id="contentArea">
      </div>
    </div>
  `;
  
  browserContent.innerHTML = content;
  addToHistory(pageKey);
  showPage(pageKey);
}

function showPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;
  
  const contentArea = document.getElementById('contentArea');
  if (contentArea) {
    contentArea.innerHTML = page.render();
  }
  
  addToHistory(pageKey);
}

function goHome() {
  history = [];
  historyIndex = -1;
  document.getElementById('browserContent').innerHTML = `
    <div class="home-page">
      <div class="logo-container">
        <div class="logo">🐱</div>
        <h1>WhiskerSearch</h1>
        <p>Benim Web Sitesi Sunumu</p>
      </div>
      <div class="search-box-home">
        <input type="text" class="search-input" id="searchInput" placeholder="WhiskerSearch'ta ara..." onkeypress="handleSearch(event)">
        <button class="search-button" onclick="performSearch()">Ara</button>
      </div>
    </div>
  `;
}

function goBack() {
  if (historyIndex > 0) {
    historyIndex--;
    showPage(history[historyIndex]);
  }
}

function goForward() {
  if (historyIndex < history.length - 1) {
    historyIndex++;
    showPage(history[historyIndex]);
  }
}

function addToHistory(pageKey) {
  if (historyIndex === -1 || history[historyIndex] !== pageKey) {
    history = history.slice(0, historyIndex + 1);
    history.push(pageKey);
    historyIndex = history.length - 1;
  }
}