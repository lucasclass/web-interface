import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

import Montain from "@/public/images/montanha.jpg";
import Link from "next/link";

export default function HeroTwo() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 p-4 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Explore, compartilhe e armazene
              <br className="max-lg:hidden" />
              Dicas incríveis em um só lugar!
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Descubra as melhores dicas sobre sites, jogos, hardware e muito
                mais! Salve, compartilhe e inspire outros usuários com suas
                sugestões favoritas. Tudo o que você precisa, organizado e
                acessível em um único espaço.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="http://localhost:3000/signup"
                  >
                    <span className="relative inline-flex items-center">
                      Comece agora{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#planet"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div>
            <Image
              className="relative w-screen max-h-screen"
              src={Montain}
              alt="Montanha"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
