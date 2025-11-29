export const getRegistro = (req, res) => {
    res.render("registro", {
        error: null,
    });
};

export const postRegistro = (req, res) => {
    res.send('hola');
}