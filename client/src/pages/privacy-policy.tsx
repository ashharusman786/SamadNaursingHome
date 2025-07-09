import { useTranslation } from '@/hooks/use-translation';

export default function PrivacyPolicy() {
  const { t, currentLang } = useTranslation();
  const isHindi = currentLang === 'hi';

  return (
    <main className="min-h-screen flex items-center justify-center bg-white py-12 px-4">
      <section className="max-w-3xl w-full p-8 rounded-3xl shadow-2xl border border-gray-200 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-medical-teal text-center">
          {t(isHindi ? 'privacy-policy-title-hi' : 'privacy-policy-title')}
        </h1>
        <p className="mb-4 text-lg text-black">
          {t(isHindi ? 'privacy-policy-intro-hi' : 'privacy-policy-intro')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'privacy-policy-collection-title-hi' : 'privacy-policy-collection-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'privacy-policy-collection-body-hi' : 'privacy-policy-collection-body')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'privacy-policy-use-title-hi' : 'privacy-policy-use-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'privacy-policy-use-body-hi' : 'privacy-policy-use-body')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'privacy-policy-protection-title-hi' : 'privacy-policy-protection-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'privacy-policy-protection-body-hi' : 'privacy-policy-protection-body')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'privacy-policy-contact-title-hi' : 'privacy-policy-contact-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'privacy-policy-contact-body-hi' : 'privacy-policy-contact-body')}
        </p>
        <p className="mt-8 text-sm text-gray-600 text-center">
          {t(isHindi ? 'privacy-policy-last-updated-hi' : 'privacy-policy-last-updated')}
        </p>
      </section>
    </main>
  );
} 