import styles from "./Main.module.css";
import Hero from "../Hero";
import Section from "../Section";

export default function Main() {
  const texto01 =
    "Na manhã deste domingo, o brasileiro João Marcos da Silva conquistou a medalha de ouro nos 400 metros rasos durante uma etapa internacional do circuito de atletismo realizada em Buenos Aires... Com a vitória, João Marcos também garantiu pontos importantes no ranking internacional, aproximando-se da zona de classificação para o campeonato mundial. Seu treinador destacou que o foco agora é aprimorar a técnica nas curvas e trabalhar a resistência para manter o ritmo nos metros finais da prova. A equipe acredita que, mantendo o desempenho atual, João Marcos pode se tornar um dos principais nomes do atletismo sul-americano na temporada.";
  const texto02 =
    "A seleção brasileira feminina de vôlei conquistou mais uma vitória nesta terça-feira ao superar a forte equipe da Argentina por 3 sets a 1... A partida também marcou o retorno da central Raquel Moreira, que estava afastada por lesão e contribuiu com excelentes atuações defensivas. Sua presença trouxe mais equilíbrio ao time, permitindo que o Brasil controlasse melhor as transições ofensivas e defensivas. A comissão técnica reforçou que a equipe está evoluindo no tempo ideal para alcançar o título da competição.";
  const texto03 =
    "O tenista brasileiro Lucas Ferraz, de apenas 19 anos, avançou às quartas de final do Torneio Internacional de Lisboa... A classificação de Lucas para as quartas reacendeu o entusiasmo dos torcedores brasileiros, que acompanham sua ascensão no circuito juvenil e profissional. Especialistas apontam que seu estilo agressivo e mentalidade competitiva são características promissoras para um futuro entre os grandes nomes do tênis mundial. Caso avance mais uma fase, Lucas pode alcançar o melhor resultado de sua carreira até o momento.";

  return (
    <main>
      <Hero />

      <div className={styles.mainContainer}>
        <Section
          id="atletismo"
          img="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
          alt="Atletismo"
          text={texto01}
        />

        <Section
          id="volei"
          img="https://images.unsplash.com/photo-1554068865-24cecd4e34b8"
          alt="Vôlei"
          text={texto02}
        />

        <Section
          id="tenis"
          img="https://images.unsplash.com/photo-1547347298-4074fc3086f0"
          alt="Tênis"
          text={texto03}
        />
      </div>
    </main>
  );
}
