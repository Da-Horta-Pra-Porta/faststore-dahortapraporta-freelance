import styles from "./about-features-section.module.scss";
import React from "react";
import { apple, leaf, lightbulb, truck } from "./icons";

const featuresData = [
  {
    icon: lightbulb,
    title: "Inovação e solução",
    description:
      "Nosso foco sempre é inovar e buscar soluções práticas em todas as etapas do processo. Temos tecnologia e serviços altamente qualificados em todas as fases do nosso processo desde o pedido até a entrega.",
  },
  {
    icon: leaf,
    title: "Bem estar e meio ambiente",
    description:
      "Além do constante compromisso com a segurança alimentar, o bem-estar dos nossos clientes é mais que uma prioridade; é o nosso foco, assim como o respeito ao meio-ambiente, evitando desperdícios de alimentos e danos à natureza",
  },
  {
    icon: truck,
    title: "Logística",
    description:
      "Nossa logística é um dos grandes diferenciais que fazem do nosso hortifrúti a escolha ideal para quem busca frescor e qualidade. Com uma cadeia de abastecimento ágil e eficiente, garantimos que nossos produtos cheguem até você sempre frescos, direto do campo para sua mesa.",
  },
  {
    icon: apple, 
    title: "Nossos Produtos",
    description:
      "Conquistamos nossos clientes pelo nosso trabalho, por esse motivo cumprirmos rigorosamente nossa Política de Qualidade e comprometimento em oferecer serviços altamente qualificados. Visamos sempre o alto padrão, frescor, sabor, aroma e variedade, para todos os gostos.",
  },
];

export function AboutFeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionHeading}>Nossos diferenciais</h2>
      <div className={styles.featuresGrid}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.iconContainer}>
              {/* Condicional para renderizar o ícone corretamente */}
              {typeof feature.icon === "string" ? (
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className={styles.featureIcon}
                />
              ) : (
                <feature.icon/>
              )}
            </div>
            <h2 className={styles.featureTitle}>{feature.title}</h2>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutFeaturesSection;
