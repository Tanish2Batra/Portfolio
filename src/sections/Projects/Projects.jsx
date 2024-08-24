import styles from './ProjectsStyles.module.css';
import chatbot from '../../assets/chatbot.png';
import currency from '../../assets/currency-converter.png';
import rockpaperscissors from '../../assets/rockpaperscissors.png';
import tictactoe from '../../assets/tictactoe.png';
import amazon from '../../assets/ecart.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chatbot}
          link="https://github.com/Tanish2Batra/Chatbot-for-customer-support"
          h3="Chatbot"
          p="Customer Support"
        />
        <ProjectCard
          src={currency}
          link="https://github.com/Tanish2Batra/Currency-Converter-Project"
          h3="Currency Converter"
          p="Latest Exchange Rate"
        />
        <ProjectCard
          src={rockpaperscissors}
          link="https://github.com/Tanish2Batra/Stone-Paper-Scissors"
          h3="Rock Paper Scissors"
          p="Can you beat the CPU?"
        />
        <ProjectCard
          src={tictactoe}
          link="https://github.com/Tanish2Batra/Tic-Tag-Toe-Game"
          h3="Tic Tac Toe"
          p="XOXO"
        />
        <ProjectCard
          src={amazon}
          link="https://github.com/Tanish2Batra/Amazon-Clone"
          h3="YourKart"
          p="eCommerce website clone"
        />
      </div>
    </section>
  );
}

export default Projects;
