import { useTranslation } from '@/hooks/use-translation';

export default function TermsOfService() {
  const { t, currentLang } = useTranslation();
  const isHindi = currentLang === 'hi';

  return (
    <main className="min-h-screen flex items-center justify-center bg-white py-12 px-4">
      <section className="max-w-3xl w-full p-8 rounded-3xl shadow-2xl border border-gray-200 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-medical-teal text-center">
          {t(isHindi ? 'terms-title-hi' : 'terms-title')}
        </h1>
        <p className="mb-4 text-lg text-black">
          {t(isHindi ? 'terms-intro-hi' : 'terms-intro')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'terms-user-title-hi' : 'terms-user-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'terms-user-body-hi' : 'terms-user-body')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'terms-liability-title-hi' : 'terms-liability-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'terms-liability-body-hi' : 'terms-liability-body')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'terms-ip-title-hi' : 'terms-ip-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'terms-ip-body-hi' : 'terms-ip-body')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'terms-changes-title-hi' : 'terms-changes-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'terms-changes-body-hi' : 'terms-changes-body')}
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-medical-purple">
          {t(isHindi ? 'terms-contact-title-hi' : 'terms-contact-title')}
        </h2>
        <p className="mb-4 text-black">
          {t(isHindi ? 'terms-contact-body-hi' : 'terms-contact-body')}
        </p>
        <p className="mt-8 text-sm text-gray-600 text-center">
          {t(isHindi ? 'terms-last-updated-hi' : 'terms-last-updated')}
        </p>
      </section>
    </main>
  );
} 