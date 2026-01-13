const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h2>Bem-vindos!</h2>
                <p>
                    Este é um projeto React no qual estou praticando o uso do hook
                    <strong> useState</strong> com formulários.
                </p>

                <a href="/feedback" className="btn-primary">
                    Enviar Feedback
                </a>
            </div>

            <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Equipe Trabalhando"
            />
        </section>
    );
};

export default Home;