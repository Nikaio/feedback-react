import { useState } from "react";

const FeedbackForm = () => {
    // Estado do formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [comentario, setComentario] = useState("");
    const [mensagem, setMensagem] = useState("");

    // Função de envio do formulário

    const handleSubmit = (e) => {
        e.preventDefault();


        //Validação Simples
        if (!nome || !email || !comentario) {
            setMensagem("⚠️ Por favor, preencha todos os campos.");
            return;
        }

       /*  alert(`
            Nome:${nome}
            Email:${email}
            Comentário:${comentario}
         `); */

         //Mostrar mensagem de sucesso
         setMensagem("✅ Feedback enviado com sucesso! Obrigado 😊");

         // Limpar o formulário
         setNome("");
         setEmail("");
         setComentario("");

         // Remove a mensagem após 3 segundos
         setTimeout(() => {
            setMensagem("");
         }, 8000);
    };

    return (
        <form className="feedback-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Seu Nome"
                value={nome}
                onChange={(e) =>setNome(e.target.value)}
            />
            <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
                placeholder="Digite seu comentário"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
            />

            {mensagem && <p className="feedback-mesage">{mensagem}</p>}

            <button type="submit">Enviar Feedback</button>
        </form>
    );
};

export default FeedbackForm;
