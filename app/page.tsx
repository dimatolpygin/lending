import {
  BotIcon,
  CreditCardIcon,
  DatabaseIcon,
  GlobeIcon,
  LayoutIcon,
  MonitorIcon,
  ServerIcon,
  ShareIcon,
} from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar
        logo={null}
        name=""
        homeUrl="/"
        showNavigation={false}
        mobileLinks={[
          { text: "Услуги", href: "#services" },
          { text: "Обо мне", href: "#about" },
          { text: "FAQ", href: "#faq" },
          { text: "Контакты", href: "#contacts" },
        ]}
        actions={[]}
      />

      <Hero
        badge="70+ проектов на Kwork"
        title="Telegram-боты и автоматизация под ключ"
        description="Создаю ботов с GPT и приёмом оплат, настраиваю n8n на VPS, подключаю любые API. Работаю быстро, сдаю с документацией и поддержкой."
        buttons={false}
      />

      <ScrollReveal>
        <Section id="about">
          <div className="max-w-container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6 pl-4 md:pl-8">
              <p className="text-brand text-lg font-medium">JavaScript-разработчик &amp; n8n-специалист</p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Создаю Telegram-ботов с GPT и оплатами, автоматизирую процессы через n8n,
                разрабатываю API-интеграции и сайты под ключ. Работаю удалённо с клиентами
                по всей России.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-2xl font-bold">70+</span>
                  <p className="text-muted-foreground text-sm">заказов на Kwork</p>
                </div>
                <div>
                  <span className="text-2xl font-bold">50+</span>
                  <p className="text-muted-foreground text-sm">отзывов</p>
                </div>
                <div>
                  <span className="text-2xl font-bold">3+</span>
                  <p className="text-muted-foreground text-sm">года опыта</p>
                </div>
                <div>
                  <span className="text-2xl font-bold">100%</span>
                  <p className="text-muted-foreground text-sm">поддержка после сдачи</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image src="/photo.jpg" alt="Анастасия" fill className="object-cover object-top" />
            </div>
          </div>
        </Section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Logos
          title="Технологии, с которыми работаю"
          badge={false}
          logos={[
            <div key="tg" className="flex items-center gap-2 text-sm font-medium opacity-70">
              <BotIcon className="size-4" /> Telegram Bot API
            </div>,
            <div key="n8n" className="flex items-center gap-2 text-sm font-medium opacity-70">
              <ServerIcon className="size-4" /> n8n
            </div>,
            <div key="nodejs" className="flex items-center gap-2 text-sm font-medium opacity-70">
              <GlobeIcon className="size-4" /> Node.js
            </div>,
            <div key="pg" className="flex items-center gap-2 text-sm font-medium opacity-70">
              <DatabaseIcon className="size-4" /> PostgreSQL
            </div>,
            <div key="openai" className="flex items-center gap-2 text-sm font-medium opacity-70">
              <MonitorIcon className="size-4" /> OpenAI API
            </div>,
            <div key="nextjs" className="flex items-center gap-2 text-sm font-medium opacity-70">
              <LayoutIcon className="size-4" /> Next.js
            </div>,
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <div id="services">
          <Items
            title="Чем могу помочь"
            items={[
              {
                title: "Telegram-боты",
                description: "Бот принимает оплату и отвечает клиентам 24/7",
                icon: <BotIcon className="size-5 stroke-1" />,
              },
              {
                title: "Платёжные интеграции",
                description: "ЮKassa, Stripe, ЮMoney — встроены в ваш продукт",
                icon: <CreditCardIcon className="size-5 stroke-1" />,
              },
              {
                title: "Автопостинг и парсеры",
                description: "Контент публикуется сам — вы не тратите время",
                icon: <ShareIcon className="size-5 stroke-1" />,
              },
              {
                title: "Работа с БД",
                description: "Данные хранятся надёжно, доступны откуда угодно",
                icon: <DatabaseIcon className="size-5 stroke-1" />,
              },
              {
                title: "API-интеграции",
                description: "Любой внешний сервис интегрирован за 1–2 дня",
                icon: <GlobeIcon className="size-5 stroke-1" />,
              },
              {
                title: "n8n на VPS",
                description: "Автоматизация без кода — n8n на вашем VPS",
                icon: <ServerIcon className="size-5 stroke-1" />,
              },
              {
                title: "Лендинги и верстка",
                description: "Лендинг за неделю — от дизайна до деплоя",
                icon: <LayoutIcon className="size-5 stroke-1" />,
              },
              {
                title: "Next.js сайты",
                description: "Сайт с авторизацией, кабинетом и базой данных",
                icon: <MonitorIcon className="size-5 stroke-1" />,
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Section>
          <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl">Отзывы клиентов</h2>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col gap-4 pt-6 text-left">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    &ldquo;Анастасия сделала бота для моего магазина — с оплатой, каталогом и уведомлениями. Всё быстро, без лишних вопросов. Уже запустили и продаём.&rdquo;
                  </p>
                  <div>
                    <div className="text-sm font-medium">Михаил</div>
                    <div className="text-muted-foreground text-xs">Владелец онлайн-магазина</div>
                  </div>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-4 pt-6 text-left">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    &ldquo;Настроила n8n на моём VPS, подключила Google Sheets и Telegram. Теперь все заявки автоматически попадают в таблицу и я получаю уведомления. Шикарно!&rdquo;
                  </p>
                  <div>
                    <div className="text-sm font-medium">Ольга</div>
                    <div className="text-muted-foreground text-xs">Маркетолог</div>
                  </div>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-4 pt-6 text-left">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    &ldquo;Заказывал лендинг с личным кабинетом на Next.js. Сдала в срок, код чистый, всё задокументировано. Обязательно обращусь ещё раз.&rdquo;
                  </p>
                  <div>
                    <div className="text-sm font-medium">Дмитрий</div>
                    <div className="text-muted-foreground text-xs">Основатель стартапа</div>
                  </div>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </CardContent>
              </Card>
            </div>
            <a
              href="https://kwork.ru/user/anastasia9919"
              className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 transition-colors"
            >
              Все отзывы на Kwork →
            </a>
          </div>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <div id="faq">
          <FAQ
            title="Частые вопросы"
            items={[
              {
                question: "Как происходит работа над проектом?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px]">
                    Этапы работы: составляем ТЗ → я разрабатываю → тестируем вместе → сдача с документацией. На каждом этапе вы в курсе прогресса.
                  </p>
                ),
              },
              {
                question: "Сколько стоит разработка Telegram-бота?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px]">
                    Стоимость от 3000₽ и зависит от сложности: набор функций, интеграции, платёжные системы. Точную цену назову после изучения ТЗ — напишите в Telegram или оставьте заявку на Kwork.
                  </p>
                ),
              },
              {
                question: "Какие сроки разработки?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px]">
                    Простой бот — 3–5 дней. Бот с оплатами, GPT и базой данных — 1–2 недели. Лендинг или сайт — от 5 дней. Срок фиксируем в ТЗ.
                  </p>
                ),
              },
              {
                question: "Берёте предоплату?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px]">
                    Да, 50% предоплата перед началом работы, остаток — после сдачи и вашей проверки. Работаю через Kwork — платёж защищён платформой.
                  </p>
                ),
              },
              {
                question: "Что входит в поддержку после сдачи?",
                answer: (
                  <p className="text-muted-foreground mb-4 max-w-[640px]">
                    7 дней бесплатных исправлений по ТЗ после сдачи. Дальнейшее сопровождение, доработки и обновления — по договорённости.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div id="contacts">
          <CTA
            title="Начнём ваш проект — напишите в Telegram"
            description="Опишите задачу — отвечу в течение нескольких часов и предложу решение."
            buttons={[
              {
                href: "https://t.me/Polarasing",
                text: "Написать в Telegram",
                variant: "default",
              },
              {
                href: "https://kwork.ru/user/anastasia9919",
                text: "Заказать на Kwork",
                variant: "outline",
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <footer className="bg-background w-full border-t border-border px-4 py-8">
        <div className="max-w-container mx-auto flex flex-col items-center gap-6">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Обо мне</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <p className="text-muted-foreground text-xs text-center">
            © 2026 Анастасия. Все права защищены.
          </p>
        </div>
      </footer>
    </main>
  );
}
