import { Button } from "@/components/ui/button";
import {
  Anchor,
  Wine,
  Sun,
  Bike,
  PartyPopper,
  Trophy,
  Fish,
  Flame,
  Sparkles,
  Send,
  Check,
  X,
  MapPin,
  Calendar,
  Users,
  Plane,
} from "lucide-react";

import heroYacht from "@/assets/hero-yacht.jpg";
import whiteParty from "@/assets/white-party.jpg";
import hydra from "@/assets/hydra.jpg";
import wildBay from "@/assets/wild-bay.jpg";
import bbqYacht from "@/assets/bbq-yacht.jpg";
import yachtSide from "@/assets/yacht-side.jpg";
import catamaranSide from "@/assets/catamaran-side.jpg";
import happyYacht from "@/assets/happy-yacht.jpg";
import quadBikes from "@/assets/quad-bikes.jpg";
import marinaDinner from "@/assets/marina-dinner.jpg";
import yachtLayout from "@/assets/yacht-layout.png";
import catamaranLayout from "@/assets/catamaran-layout.png";
import logoPadelBanda from "@/assets/logo-padelbanda.png";
import logoFleet5 from "@/assets/logo-fleet5.png";

const TG_URL = "https://t.me/verch_i";

const days = [
  {
    n: 1,
    date: "20 июня",
    title: "Welcome aboard",
    icon: Plane,
    image: heroYacht,
    items: [
      { t: "09:20", d: "Вылет рекомендуемого рейса из Варшавы" },
      { t: "13:00", d: "Прилёт в Афины, трансфер в марину Алимос" },
      { t: "18:00", d: "Welcome aboard. Размещаемся на яхтах. Просекко для всех гостей 🥂" },
      { t: "20:00", d: "Брифинг и инструктаж" },
    ],
    note: "Тех, кто прилетел заранее, трансфер заберёт из забронированной нами гостиницы.",
  },
  {
    n: 2,
    date: "21 июня",
    title: "Курс на Порос",
    icon: Anchor,
    image: wildBay,
    items: [
      { t: "09:00", d: "Выход в море. По пути купаемся, при ветре поднимаем паруса" },
      { t: "16:00", d: "Швартовка на Поросе. Короткий трек к башне с панорамным видом" },
      { t: "19:00", d: "«Ужин знакомств» — настоящая греческая кухня" },
    ],
  },
  {
    n: 3,
    date: "22 июня",
    title: "Эрмиони: квадроциклы и White Party",
    icon: PartyPopper,
    image: quadBikes,
    items: [
      { t: "10:00", d: "Исследуем остров Порос на квадроциклах (~30 € / чел., доп. оплата)" },
      { t: "13:00", d: "Выходим в море курсом на Эрмиони" },
      { t: "19:00", d: "White Party в честь самого длинного дня в году. Дресс-код — только белое!" },
    ],
  },
  {
    n: 4,
    date: "23 июня",
    title: "Специс и пляжная дискотека",
    icon: Trophy,
    image: whiteParty,
    items: [
      { t: "10:00", d: "Курс на Специс. По дороге купаемся в диких бухтах" },
      { t: "15:00", d: "Гонка на «тузиках» — победителей ждут крутые призы" },
      { t: "17:00", d: "Швартовка, ужин в одном из ресторанчиков на берегу" },
      { t: "22:00", d: "Дискотека на пляже" },
    ],
  },
  {
    n: 5,
    date: "24 июня",
    title: "Идра и Докос",
    icon: Fish,
    image: hydra,
    items: [
      { t: "07:00", d: "Желающие — на рыбный рынок за утренним уловом" },
      { t: "10:00", d: "Выход в море" },
      { t: "13:00", d: "Заходим на осмотр острова Идра" },
      { t: "19:00", d: "Ночёвка в марине острова Докос" },
    ],
  },
  {
    n: 6,
    date: "25 июня",
    title: "Дикая бухта Мони + BBQ",
    icon: Flame,
    image: bbqYacht,
    items: [
      { t: "09:00", d: "Курс на маленький, но очень красивый остров Мони" },
      { t: "16:00", d: "Якорь в дикой бухте — только наша флотилия и природа" },
      { t: "Вечер", d: "Готовим ужин из утреннего улова. Барбекю на флагманском судне 🔥" },
    ],
  },
  {
    n: 7,
    date: "26 июня",
    title: "Возвращение в Алимос",
    icon: Wine,
    image: marinaDinner,
    items: [
      { t: "08:00", d: "Снимаемся с якоря" },
      { t: "09:00", d: "Завтрак в одном из ресторанчиков городка Пердика" },
      { t: "16:00", d: "Швартуемся в «домашней» марине Алимос" },
      { t: "19:00", d: "Гала-ужин в ресторане у марины ✨" },
    ],
  },
  {
    n: 8,
    date: "27 июня",
    title: "До новых встреч",
    icon: Sun,
    image: wildBay,
    items: [
      { t: "09:00", d: "Покидаем яхты — путешествие официально закрыто" },
      { t: "10:00", d: "Трансфер в аэропорт" },
      { t: "14:00", d: "Вылет из Афин в Варшаву" },
    ],
    note: "Хотите остаться в Афинах? Подготовим экскурсии и забронируем отель по приятным ценам.",
  },
];

const included = [
  "Отдельная каюта на двоих",
  "Услуги капитана",
  "Услуги представителя компании",
  "Трансфер аэропорт – марина – аэропорт",
  "Топливо",
  "Постель и полотенца",
  "Финальная уборка яхты",
  "Все налоги, сборы и страховка яхты",
  "Информационная поддержка 24/7",
];

const notIncluded = [
  "Перелёт в Афины",
  "Питание и напитки",
  "Электричество и вода в маринах",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoPadelBanda} alt="Padel Banda" className="w-10 h-10 rounded-xl object-contain" />
            <span className="font-serif text-xl font-semibold text-navy">Padel Banda</span>
            <span className="hidden sm:inline text-navy/30 mx-1">×</span>
            <img src={logoFleet5} alt="Fleet5" className="hidden sm:block h-7 object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">О поездке</a>
            <a href="#timeline" className="hover:text-primary transition-colors">План</a>
            <a href="#fleet" className="hover:text-primary transition-colors">Флот</a>
            <a href="#price" className="hover:text-primary transition-colors">Цены</a>
          </nav>
          <Button asChild variant="default" className="bg-gradient-sunset hover:opacity-90 text-accent-foreground border-0 rounded-full shadow-soft">
            <a href={TG_URL} target="_blank" rel="noopener noreferrer">
              <Send className="w-4 h-4 mr-1" /> Бронь
            </a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-20">
        <img
          src={heroYacht}
          alt="Парусная яхта в греческой бухте на закате"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto relative z-10 py-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" /> 20 – 27 июня · Греция · Yacht Week
            </span>
            <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 drop-shadow-lg">
              Padel Banda
              <span className="block text-3xl md:text-5xl lg:text-6xl font-medium mt-3 text-white/95">
                Греция, паруса и правильные люди
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl drop-shadow">
              Это когда солнце, соль и ветер собирают вокруг тебя правильных людей,
              и ты вдруг понимаешь, что живёшь на полной скорости.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-sunset hover:opacity-90 text-accent-foreground border-0 rounded-full px-8 h-14 text-base shadow-glow">
                <a href={TG_URL} target="_blank" rel="noopener noreferrer">
                  Забронировать каюту <Send className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-background/90 backdrop-blur border-white/40">
                <a href="#timeline">Смотреть программу</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, k: "8", l: "дней приключений" },
              { icon: MapPin, k: "6+", l: "греческих островов" },
              { icon: Users, k: "Своя", l: "каюта на двоих" },
              { icon: Anchor, k: "Флот", l: "яхт и катамаранов" },
            ].map((f, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-card shadow-card">
                <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-serif font-bold text-navy break-words">{f.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">О поездке</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-navy text-balance">
                Неделя, после которой ничего не будет прежним
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Padel Banda — это не просто яхтинг. Это комьюнити людей, которые любят
                паддел, море и настоящие эмоции. Мы собрали программу, в которой каждый
                день — новая история.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Дикие бухты Эгейского моря, белые ночи на пляже, рыбный рынок на рассвете,
                BBQ под звёздами и ужины, после которых вы захотите остаться.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={happyYacht} alt="Счастливые друзья на яхте на закате" loading="lazy" className="rounded-3xl shadow-card aspect-[3/4] object-cover w-full" />
              <img src={hydra} alt="Остров Идра с воздуха" loading="lazy" className="rounded-3xl shadow-card aspect-[3/4] object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-20 md:py-28 bg-gradient-soft">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">План поездки</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-navy text-balance">
              8 дней, которые вы будете вспоминать всю жизнь
            </h2>
          </div>

          <div className="space-y-8 md:space-y-12">
            {days.map((day, idx) => {
              const Icon = day.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={day.n} className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${isEven ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card group">
                    <img src={day.image} alt={day.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/95 backdrop-blur text-xs font-semibold text-primary">
                      {day.date}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-12 h-12 rounded-full bg-gradient-sea grid place-items-center shadow-soft">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">День {day.n}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-navy mb-5">{day.title}</h3>
                    <ul className="space-y-3">
                      {day.items.map((it, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="font-mono text-sm font-semibold text-primary min-w-[60px] pt-0.5">{it.t}</span>
                          <span className="text-foreground/85 leading-relaxed">{it.d}</span>
                        </li>
                      ))}
                    </ul>
                    {day.note && (
                      <p className="mt-5 p-4 rounded-2xl bg-secondary/60 text-sm text-secondary-foreground italic">
                        ✦ {day.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Флот</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-navy text-balance">
              Яхта или катамаран — выбор за вами
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Все каюты — отдельные, на двоих, с собственным санузлом.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* YACHT CARD */}
            <div className="rounded-3xl bg-gradient-soft p-6 md:p-8 shadow-card">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9]">
                <img src={yachtSide} alt="Парусная яхта" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">Парусная яхта</h3>
              <p className="text-muted-foreground mb-6">Классика. 4 гостевые каюты, общий салон, кокпит для встреч на закате.</p>
              <div className="rounded-2xl bg-card p-4 shadow-soft border border-border/50">
                <div className="flex items-center justify-between mb-3 px-2">
                  <h4 className="font-semibold text-navy">Расположение кают</h4>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">до 8 гостей</span>
                </div>
                <img src={yachtLayout} alt="Схема кают парусной яхты Oceanis 46.1" loading="lazy" className="w-full h-auto" />
                <p className="text-xs text-muted-foreground mt-3 text-center">4 двухместные каюты · салон · камбуз · каюта капитана</p>
              </div>
            </div>

            {/* CAT CARD */}
            <div className="rounded-3xl bg-gradient-soft p-6 md:p-8 shadow-card">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9]">
                <img src={catamaranSide} alt="Парусный катамаран" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">Катамаран</h3>
              <p className="text-muted-foreground mb-6">Простор и стабильность. Два корпуса, большой салон, носовая сетка для загара.</p>
              <div className="rounded-2xl bg-card p-4 shadow-soft border border-border/50">
                <div className="flex items-center justify-between mb-3 px-2">
                  <h4 className="font-semibold text-navy">Расположение кают</h4>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">до 8 гостей</span>
                </div>
                <img src={catamaranLayout} alt="Схема кают катамарана Dufour 44" loading="lazy" className="w-full h-auto" />
                <p className="text-xs text-muted-foreground mt-3 text-center">4 двухместные каюты · просторный салон · каюта капитана</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${wildBay})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto relative">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-sm uppercase tracking-[0.2em] text-primary-glow font-semibold">Стоимость</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
              Выбирайте свою каюту
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <PriceCard title="Каюта на яхте" price="2 800 €" sub="за каюту на двоих" highlight={false} />
            <PriceCard title="Каюта на катамаране" price="3 300 €" sub="за каюту на двоих" highlight />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/10 backdrop-blur p-7 border border-white/15">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-glow" /> В стоимость входит
              </h4>
              <ul className="space-y-2.5 text-white/90">
                {included.map((i) => (
                  <li key={i} className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-primary-glow shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white/10 backdrop-blur p-7 border border-white/15">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-accent" /> Не входит
              </h4>
              <ul className="space-y-2.5 text-white/90">
                {notIncluded.map((i) => (
                  <li key={i} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-accent shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center rounded-[2rem] bg-gradient-soft p-10 md:p-16 shadow-card">
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-balance">
              Готовы войти в банду?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Количество кают ограничено. Бронируйте заранее, чтобы выбрать лучшую.
            </p>

            <div className="inline-flex flex-col items-center gap-4 p-6 rounded-2xl bg-card shadow-soft mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-sea grid place-items-center text-3xl text-primary-foreground font-serif font-bold">
                ИВ
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Контакт для бронирования</div>
                <div className="text-2xl font-serif font-semibold text-navy mt-1">Инга Верченко</div>
              </div>
            </div>

            <div>
              <Button asChild size="lg" className="bg-gradient-sunset hover:opacity-90 text-accent-foreground border-0 rounded-full px-10 h-14 text-base shadow-glow">
                <a href={TG_URL} target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" /> Написать в Telegram @verch_i
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* PARTNERS */}
      <section className="py-16 border-t border-border/50 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
              Поездку организуют
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="flex flex-col items-center gap-3">
              <img src={logoPadelBanda} alt="Padel Banda" className="h-24 w-24 object-contain" />
              <div className="text-sm font-semibold text-navy">Padel Banda</div>
              <div className="text-xs text-muted-foreground max-w-[200px] text-center">
                Комьюнити паддел-игроков, которые любят жить ярко
              </div>
            </div>
            <div className="text-3xl text-primary/40 font-serif hidden md:block">×</div>
            <div className="flex flex-col items-center gap-3">
              <img src={logoFleet5} alt="Fleet5" className="h-24 object-contain" />
              <div className="text-sm font-semibold text-navy">Fleet5</div>
              <div className="text-xs text-muted-foreground max-w-[220px] text-center">
                Многолетний опыт организации яхтенных путешествий
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border/50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logoFleet5} alt="Fleet5" className="h-6 object-contain" />
            <span>· Yacht Week 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span>в партнёрстве с</span>
            <img src={logoPadelBanda} alt="Padel Banda" className="w-8 h-8 object-contain" />
            <span className="font-serif text-base text-navy">Padel Banda</span>
          </div>
          <div>Сделано с ❤️ для тех, кто живёт на полной скорости</div>
        </div>
      </footer>
    </div>
  );
};

const PriceCard = ({ title, price, sub, highlight }: { title: string; price: string; sub: string; highlight?: boolean }) => (
  <div className={`rounded-3xl p-8 ${highlight ? "bg-gradient-sunset shadow-glow" : "bg-white/10 backdrop-blur border border-white/15"}`}>
    <div className={`text-sm uppercase tracking-widest ${highlight ? "text-white/90" : "text-primary-glow"} mb-3`}>{title}</div>
    <div className="text-5xl md:text-6xl font-serif font-bold text-white">{price}</div>
    <div className="text-white/80 mt-2">{sub}</div>
  </div>
);

export default Index;
