import React from 'react';
import {
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Heart,
  CheckCircle2,
  MessageCircle,
  Building2,
  Send,
  PenTool,
  Library,
  Menu,
  X
} from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { Logo, LogoText } from './components/Logo';

// Internal Component: Card (Design Guidelines: border-radius 80px for large cards, 10px for small)
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-bg-surface p-8 rounded-sm border border-border shadow-minimal ${className}`} style={{ borderRadius: '10px' }}>
    {children}
  </div>
);

const ImageModal: React.FC<{ src: string | null; onClose: () => void }> = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative max-w-5xl max-h-[90vh] w-auto h-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X size={32} />
        </button>
        <img
          src={src}
          alt="Enlarged view"
          className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen text-body text-text-main pb-0">

      {/* Header - Fixed but simple */}
      <header className="fixed top-0 left-0 w-full z-50 bg-bg-light/95 backdrop-blur border-b border-border h-[64px] flex items-center">
        <div className="layout-container w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-[20px] h-[23px] md:w-[24px] md:h-[28px]" />
            <LogoText />
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="pt-[100px] pb-[60px] md:pt-[160px] md:pb-[80px] bg-bg-light">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              {/* Strict Typography: H1 (36px PC / 22px SP) */}
              <h1 className="text-h1-sp md:text-h1 mb-6 text-text-main font-bold leading-tight">
                組織の「節目」を<br className="hidden md:inline" />
                エンゲージメントが<br className="hidden md:inline" />
                高まる体験に。
              </h1>
              {/* Strict Typography: Body (14px) */}
              <p className="text-lead md:text-body text-text-sec mb-8 leading-relaxed">
                自社オリジナルデザイン × 社員同士のメッセージ。<br className="hidden md:inline" />
                組織の絆を深めるメッセージブック制作サービス。
              </p>
            </div>

            {/* Visual (Image) */}
            <div className="w-full md:w-1/2 px-4 md:px-0">
              <div className="relative overflow-hidden shadow-minimal aspect-[4/3] group" style={{ borderRadius: '15px' }}>
                <img
                  src="/images/hero-book-open.jpg"
                  alt="メッセージブックの冊子"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sympathy (Scenarios) */}
      <Section variant="off">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-h2-sp md:text-h2 mb-4">
            どの会社にも必ず訪れる組織の節目
          </h2>
          <p className="text-text-sec text-body">
            会社行事の中で、以下のようなシーンはどの企業にも存在します。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { img: "/images/anniversary.png", label: "周年記念" },
            { img: "/images/award.png", label: "社員の勤続・表彰" },
            { img: "/images/project_completion.png", label: "プロジェクト終了" },
            { img: "/images/welcome.png", label: "入社・転属" },
          ].map((item, idx) => (
            <div key={idx} className="bg-bg-surface p-6 flex flex-col items-center justify-center text-center border border-border h-full transition-all hover:shadow-minimal" style={{ borderRadius: '10px' }}>
              <p className="font-bold text-text-main text-body mb-4">{item.label}</p>
              <div className="w-24 h-24 md:w-32 md:h-32 object-contain">
                <img src={item.img} alt={item.label} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Problem */}
      <Section variant="light">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full md:w-5/12">
            <h2 className="text-h2-sp md:text-h2 mb-6">
              その節目、ただの「行事」で終わっていませんか？
            </h2>
            <p className="text-text-sec mb-6 text-body">
              実はこのタイミングをどう扱うかで、社員のモチベーションやエンゲージメントには大きな差が生まれます。
            </p>
          </div>

          <div className="w-full md:w-7/12 grid gap-4">
            {[
              "記念品を渡して終わりになっている",
              "表彰は会社からの一方通行で温度差がある",
              "研修が「やりっぱなし」で記憶に残らない",
              "入社・異動時の不安が解消されない"
            ].map((problem, i) => (
              <div key={i} className="flex items-center bg-bg-off p-6 border border-border" style={{ borderRadius: '10px' }}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-4 text-xs">!</span>
                <span className="text-text-main font-medium text-body">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Solution */}
      <Section variant="off">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-h2-sp md:text-h2 mb-8 leading-snug">
            エンゲージメントを高める鍵は、<br className="hidden md:inline" />
            <span className="border-b-4 border-primary/30">「社員同士のメッセージ」</span>にあります
          </h2>

          <Card className="text-left md:text-center">
            <p className="text-text-main font-bold mb-2 text-body">寄せ書きの新しい活用法</p>
            <p className="text-text-sec text-body">
              これまでは「送別」の場面で使われることが一般的でした。<br className="hidden md:block" />
              エンゲージメントを高める鍵は、<span className="text-text-main font-bold">「歓迎・在籍中」での活用</span>です。
            </p>
          </Card>
        </div>
      </Section>

      {/* 5. Scenes */}
      <Section variant="light">
        <div className="text-center mb-12">
          <h2 className="text-h2-sp md:text-h2">シーン別活用イメージ</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "周年記念",
              desc: "会社の未来に向けて、社員一人ひとりの想いを集め、組織のベクトルを再び一つにする節目に。",
              icon: <Building2 size={24} />
            },
            {
              title: "勤続・表彰",
              desc: "会社からだけでなく、仲間からの言葉があることで、「また頑張ろう」と心から思える体験に。",
              icon: <Award size={24} />
            },
            {
              title: "研修・プロジェクト終了",
              desc: "共に取り組んだ時間を言葉として残すことで、社員同士の絆と学びが記憶に刻まれる。",
              icon: <CheckCircle2 size={24} />
            },
            {
              title: "入社・転属（ウェルカム）",
              desc: "チームメンバーからの自己紹介メッセージで、不安を取り除き、スタート時点からチームとして機能する。",
              icon: <Users size={24} />
            }
          ].map((card, i) => (
            // Mobile Optimization: 
            // - flex-col on mobile (stack icon on top) to fit narrow screens.
            // - text-center on mobile for symmetry.
            // - md:flex-row md:text-left for PC.
            // - Border Radius: 10px (SP) / 50px 0px (PC) per guidelines
            <div key={i} className="bg-bg-surface p-8 border border-border flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 hover:border-primary/30 transition-colors text-center md:text-left rounded-sm md:rounded-card-pc">
              <div className="w-12 h-12 flex-shrink-0 bg-bg-off rounded-full flex items-center justify-center text-accent">
                {React.cloneElement(card.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <div>
                <h3 className="text-h3-sp md:text-h3 font-bold mb-3 text-text-main">{card.title}</h3>
                <p className="text-text-sec text-body leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5.5. Pricing Case Study */}
      <Section variant="off">
        <div className="text-center mb-12">
          <h2 className="text-h2-sp md:text-h2 text-text-main">
            料金説明
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <div className="bg-bg-surface p-6 md:p-8 border border-border" style={{ borderRadius: '10px' }}>
              <h3 className="text-h3-sp md:text-h3 font-bold mb-4 text-text-main border-b border-border pb-4">
                「勤続祝い」での活用事例
              </h3>

              <div className="mb-6">
                <p className="text-body text-text-main font-bold mb-2">対象従業員が10名の場合</p>
                <div className="flex items-end gap-2 text-primary font-bold">
                  <span className="text-h1-sp md:text-h2 leading-none">39,800</span>
                  <span className="text-body">円（税込）</span>
                </div>
              </div>

              <div className="bg-bg-off p-5 mb-4" style={{ borderRadius: '8px' }}>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-text-main flex-shrink-0">内訳：</span>
                  <p className="text-body text-text-sec">
                    1冊3,980円（50名分のメッセージ）が10冊
                  </p>
                </div>
                <p className="text-xs text-text-subtle">
                  ※オリジナルデザインが必要な場合は、別途費用が発生します。
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-start">
              <div className="flex flex-col gap-2 cursor-pointer group" onClick={() => setSelectedImage("/images/pricing_book_inside.jpg")}>
                <div className="shadow-md transition-transform duration-300 group-hover:scale-[1.02]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <img
                    src="/images/pricing_book_inside.jpg"
                    alt="製本カバーイメージ"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-xs text-text-subtle">表紙イメージ</p>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer group" onClick={() => setSelectedImage("/images/pricing_book_cover.jpg")}>
                <div className="shadow-md transition-transform duration-300 group-hover:scale-[1.02]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <img
                    src="/images/pricing_book_cover.jpg"
                    alt="製本中面イメージ"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-xs text-text-subtle">中面イメージ</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Service Intro */}
      <Section variant="light">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-h2-sp md:text-h2 mb-6">
              オンライン寄せ書きブック「スゴヨセ」
            </h2>
            <p className="text-text-sec mb-6 text-body">
              スゴヨセは、社員の想いを集め、編集し、1冊のメッセージブックとして残せるサービスです。
              Webで完結する手軽さと、製本までできる品質を兼ね備えています。
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-square overflow-hidden shadow-md" style={{ borderRadius: '15px' }}>
              <img
                src="/images/product-books-square.jpg"
                alt="Sugoyose Book Product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Features */}
      <Section variant="off">
        <div className="text-center mb-12">
          <h2 className="text-h2-sp md:text-h2 text-text-main">スゴヨセが選ばれる3つの理由</h2>
          <p className="mt-4 text-text-sec text-body">
            「スゴヨセ」独自の機能や特徴が、<br className="md:hidden" />
            特別な体験をつくります。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              point: "01",
              title: "豪華なブック形式で\n想いがしっかり伝わる！",
              desc: "高級感のあるハードカバーや、手触りの良い紙質。飾れるデザインで、一生の記念品になります。",
              image: "https://sugoyose.jp/_assets/images/page_001/hero_image1.jpg"
            },
            {
              point: "02",
              title: "ハイクオリティなデザインを誰でも手軽に",
              desc: "豊富なデザインテンプレートから選ぶだけ。デザイナーがいなくても、プロ並みの仕上がりに。",
              image: "https://sugoyose.jp/_assets/images/page_001/hero_image2.jpg"
            },
            {
              point: "03",
              title: "自由度の高い\nアルバム写真機能",
              desc: "思い出の写真もたっぷり掲載可能。レイアウトも自由自在で、オリジナリティ溢れる一冊に。",
              image: "https://sugoyose.jp/_assets/images/page_001/hero_image4.jpg"
            }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col h-full bg-bg-surface border border-border rounded-sm md:rounded-card shadow-minimal overflow-hidden group hover:shadow-md transition-shadow duration-300">
              {/* Image Area */}
              <div className="relative aspect-video">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Badge - Placed between image and title */}
                <div className="mb-4">
                  <span className="bg-accent text-white font-bold px-3 py-1 rounded-full text-sm tracking-widest shadow-sm inline-block">
                    POINT {feature.point}
                  </span>
                </div>

                <h3 className="font-bold text-h4 mb-4 whitespace-pre-line text-text-main leading-snug min-h-[3em]">
                  {feature.title}
                </h3>
                <p className="text-text-sec text-sm leading-relaxed whitespace-pre-wrap flex-grow">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Trust */}
      <Section variant="light">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-h2-sp md:text-h2 mb-6">法人での活用事例</h2>
            <div className="bg-bg-surface p-8 border border-border" style={{ borderRadius: '10px' }}>
              <h4 className="font-bold text-text-main mb-4 pb-2 border-b border-border text-body">導入実績例</h4>
              <ul className="space-y-4">
                {[
                  "IT企業：周年記念メッセージブック",
                  "メーカー：勤続表彰・定年記念",
                  "ベンチャー企業：新卒・中途入社ウェルカムブック",
                  "研修会社：研修プログラム修了記念"
                ].map((item, i) => (
                  <li key={i} className="flex items-start md:items-center text-body text-text-sec">
                    <CheckCircle2 size={20} className="text-accent mr-3 flex-shrink-0 mt-0.5 md:mt-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-h2-sp md:text-h2 mb-6">サポート体制</h2>
            <div className="grid gap-4">
              <div className="bg-bg-surface p-6 border border-border" style={{ borderRadius: '10px' }}>
                <h3 className="font-bold text-text-main mb-2 text-body">1. 企業ごとのオリジナルデザイン</h3>
                <p className="text-text-sec text-body">ブランドや周年テーマに合わせた表現も対応可能です。</p>
              </div>
              <div className="bg-bg-surface p-6 border border-border" style={{ borderRadius: '10px' }}>
                <h3 className="font-bold text-text-main mb-2 text-body">2. 制作サポート</h3>
                <p className="text-text-sec text-body">スタッフが制作をサポートするため、初めてでも安心して導入できます。</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. CTA */}
      <Section id="contact" variant="off">
        <div className="max-w-[800px] mx-auto text-center bg-bg-off border border-border p-8 md:p-12 rounded-md">
          <h2 className="text-h2-sp md:text-h2 mb-4 text-text-main">
            その「節目」を、<br className="hidden md:inline" />
            組織の力に変えませんか？
          </h2>
          <p className="text-text-sec mb-8 text-body">
            活用相談も承っております。お気軽にご連絡ください。
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button onClick={scrollToContact} className="min-w-[240px] md:min-w-[200px]">
              お問い合わせ
            </Button>
          </div>
        </div>
      </Section>

      <footer className="bg-bg-light border-t border-border py-8 md:py-12 text-center" style={{ backgroundColor: 'unset' }}>
        <div className="layout-container">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Logo className="w-6 h-6" />
            <span className="text-body font-bold">スゴヨセ</span>
          </div>
          <p className="text-text-subtle text-xs">© 2026 iUM inc. All Rights Reserved.</p>
        </div>
      </footer>
      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default App;