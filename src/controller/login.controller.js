export const getLogin = (req, res) => {
    res.render("login", {
        error: null,
    });
};

export const postLogin = (req, res) => {
    res.json({error: "funtion no implement"});
};