import { calendar, cart, checkout, compareIcon } from "./icons";
import styles from "./subscription-how-to-section.module.scss";

const featuresData = [
  {
    icon: cart,
    title: "Monte seu carrinho",
    description: "Selecione os produtos desejados e adicione eles ao seu carrinho.",
  },
  {
    icon: checkout,
    title: "Vá para tela de checkout",
    description: "Vá para a tela de checkout para ver os detalhes de pagamentos.",
  },
  {
    icon: calendar,
    title: "Selecione a frequência",
    description: "Selecione de quanto em quanto tempo quer receber seu pedido.",
  },
  {
    icon: compareIcon,
    title: "Compare os preços",
    description: "Veja o valor dos produtos com e sem assinatura, fazendo um comparativo.",
  },
];

export function SubscriptionHowToSection() {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionHeading}>Como ativar?</h2>
      <div className={styles.featuresGrid}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.iconContainer}>
              {typeof feature.icon === "string" ? (
                <img src={feature.icon} alt={`${feature.title} icon`} className={styles.featureIcon} />
              ) : (
                <feature.icon />
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

export default SubscriptionHowToSection;
