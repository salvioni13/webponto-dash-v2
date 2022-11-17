const { parseCookies, setCookie } = require("nookies");

export function setLoggedInUser(user) {
    let myDomain = process.env.REACT_APP_PUBLIC_DOMAIN;
    setCookie(null, "@SGSystem.User", JSON.stringify(user), {
        maxAge: 60 * 60 * 24,
        domain: myDomain,
        path: "/",
    });
}

export function getAuthenticatedUser() {
    const { "@SGSystem.User": cookieUser } = parseCookies();
    if (cookieUser && cookieUser !== undefined) {
        return JSON.parse(cookieUser);
    } else {
        return null;
    }
}