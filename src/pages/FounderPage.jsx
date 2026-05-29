import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, Handshake, GraduationCap, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import FloatingCTA from '../components/FloatingCTA';

const CONVICTIONS = [
  {
    title: "Une CRO n'est pas un sous-traitant : c'est un partenaire stratégique.",
    text: "La qualité d'une étude clinique ne se mesure pas seulement à l'exécution. Elle se construit dans le dialogue entre le promoteur et la CRO, à chaque étape.",
    icon: Handshake,
  },
  {
    title: "La rigueur sans la pédagogie n'a aucun sens.",
    text: "Mon rôle n'est pas seulement d'exécuter l'étude, mais aussi de transmettre, pour que mes partenaires comprennent et défendent chaque décision réglementaire et opérationnelle prise sur leur projet.",
    icon: GraduationCap,
  },
  {
    title: "Chaque promoteur mérite un accompagnement adapté à sa réalité.",
    text: "Biotech early-stage, laboratoire établi, medtech innovante ou acteur académique : les besoins ne sont pas les mêmes. Le cadre méthodologique non plus.",
    icon: Users,
  },
];

const FounderPage = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#F9FAFD]" data-testid="founder-page">
      <SEO
        title={t('founder.metaTitle')}
        description={t('founder.metaDescription')}
        url="/founder"
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/img/background-2.jpg)' }}
        />
        <div className="absolute inset-0 bg-[#2B2B2B]/60" />

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="pt-24 pb-20 lg:pt-32 lg:pb-24">
            <div className="w-full text-center">
              <div className="overflow-hidden">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-0 leading-none">
                  {t('nav.founder')}
                </h1>
                <div className="mt-4 flex items-center justify-center gap-2 text-white/80 font-bold text-lg">
                  <Link to="/" className="text-white hover:text-white/80 transition-colors">Accueil</Link>
                  <span className="text-white/60">/</span>
                  <span className="text-white">{t('nav.founder')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Message From CEO & Company Overview ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">

          {/* Message From CEO */}
          <div className="flex flex-col lg:flex-row shadow-sm rounded-xl overflow-hidden bg-white">
            <div className="lg:w-4/12 relative min-h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: 'url(/assets/profile-linkedin-nadege.png)' }}
              />
            </div>
            <div className="lg:w-8/12 p-8 md:p-12 lg:p-16 flex items-center bg-white rounded-r-xl">
              <div>
                <h4 className="mt-2 text-2xl font-bold text-[#2B2B2B]">
                  Nadège KAMBOU
                </h4>
                <p className="text-[#573D4E] font-semibold text-sm mb-6">
                  Fondatrice et Directrice des Opérations
                </p>
                <p className="text-[#4B5563] text-lg leading-relaxed mb-4">
                  Forte de plus de 10 ans d'expérience en recherche clinique internationale, Nadège KAMBOU a bâti son expertise au sein des grandes CROs internationales.
                </p>
                <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                  Après avoir contribué à des études majeures en oncologie, pédiatrie et autres domaines complexes, elle fonde Freearcs Pharma Services pour offrir aux promoteurs un modèle plus humain, basé sur la proximité, la compréhension des besoins des clients et la transmission des bonnes pratiques.
                </p>
                <blockquote className="border-l-4 border-[#2E9013] pl-5">
                  <p className="text-[#573D4E] italic text-lg font-medium leading-relaxed">
                    « Combiner expertise technique et supervision opérationnelle solides pour accélérer l'innovation en santé. »
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Company Overview (Bio) */}
          <div className="mt-20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#573D4E]">{t('founder.bioTitle')}</h3>
              <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4 mb-8"></div>
            </div>
            <div className="bg-white p-8 md:p-12 lg:p-16 rounded-xl shadow-sm">
              <p className="text-[#4B5563] text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#2E9013] first-letter:mr-3 first-letter:float-left">
                {t('founder.text1')}
              </p>

              <blockquote className="my-10 ml-0 lg:ml-12 border-l-4 border-[#2E9013] pl-6">
                <h5 className="font-medium text-xl md:text-2xl text-[#573D4E] italic leading-relaxed">
                  "{t('founder.quote')}"
                </h5>
              </blockquote>

              <p className="text-[#4B5563] text-lg leading-relaxed">
                {t('founder.text2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mes convictions ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Mes convictions</h2>
            <p className="text-[#2E9013] italic mt-2">Trois principes qui guident chacune de mes missions.</p>
          </div>
          <div className="space-y-8">
            {CONVICTIONS.map(({ title, text, icon: Icon }) => (
              <div key={title} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EAF5E1] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#2E9013]" />
                </div>
                <div>
                  <p className="font-bold text-[#2B2B2B] text-lg mb-1">{title}</p>
                  <p className="text-[#4B5563] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aires thérapeutiques ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#573D4E]">{t('founder.therapeuticAreasTitle')}</h3>
            <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {t('founder.therapeuticAreas').map((area, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-[#EAF5E1] text-[#2E9013] rounded-full font-bold shadow-sm flex items-center gap-3 text-lg"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA
        label="Discutons de votre projet"
        href="/contact"
        triggerRef={heroRef}
      />
    </div>
  );
};

export default FounderPage;
