import { CartSection } from "./components/CartSection";
import { QuestionsCTA } from "./components/QuestionsCTA";

export default function CartPage() {
  return (
    <div className="pt-[var(--spacing-3xl)]">
      <CartSection />
      <QuestionsCTA />
    </div>
  );
}
