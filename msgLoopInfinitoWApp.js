async function enviarScript() {

    const msg = "MENSAGEM"; //coloque aqui sua mensagem entre ""!

    main = document.querySelector("#main");
    textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) throw new Error("A conversa n esta aberta");

    while (true) {
        textarea.focus();
        document.execCommand('insertText', false, msg);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 1000);

        await new Promise(resolve => setTimeout(resolve, 2500));
    }
}

enviarScript().catch(console.error);