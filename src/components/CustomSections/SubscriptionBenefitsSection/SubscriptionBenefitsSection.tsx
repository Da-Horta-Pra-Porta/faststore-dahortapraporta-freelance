import styles from "./subscription-benefits-section.module.scss";

const benefitsData = [
  {
    title: "Praticidade, Frescor e Economia de tempo",
    text: "A comodidade de receber na sua porta produtos frescos diretamente da horta! Aproveite o conforto de ter frutas, verduras, legumes e proteínas entregues periodicamente na sua casa.",
  },
  {
    title: "Variedade e Qualidade Garantidas",
    text: "Assinantes têm acesso a uma seleção variada e de alta qualidade, com produtos frescos e da estação. Isso significa uma dieta mais equilibrada, rica em nutrientes e, claro, cheia de sabor.",
  },
  {
    title: "Sustentabilidade e Apoio Local",
    text: "Ao assinar, você apoia produtores locais e contribui para uma cadeia de alimentos mais sustentável, com menos desperdício e menos impacto ambiental, já que os produtos percorrem menos distância até você.",
  },
  {
    title: "Personalização e Flexibilidade",
    text: "Escolha os produtos que você mais gosta e personalize sua entrega de acordo com suas necessidades. Ajuste a frequência e o conteúdo da sua feirinha conforme sua rotina e aproveite o que a estação oferece de melhor.",
  },
];

export function SubscriptionBenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.sectionHeading}>Beneficios</h2>
      <div className={styles.benefitsGrid}>
        {benefitsData.map((benefit, index) => (
          <div key={index} className={styles.benefitContainer}>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitText}>{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubscriptionBenefitsSection;
