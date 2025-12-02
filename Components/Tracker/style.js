export const globalStyle = `


:root {
    --primary-color: #6220ff;
    --border-color: rgba(0, 0, 0, 0.12);
    --neutral-color: #bcbcbc;
}


::selection {
    background-color: #6220ff;
    color: #fff;
}

*,
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6, p, ul, li, button, a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a,
a:hover {
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
}
a:hover {
    color: var(--primary-color, #6220ff);
}


::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-thumb {
    background-color: var(--primary-color, #6220ff);
    border-radius: 4px;
}

html,
body,
#__next,
#__app {
    
    display: flex;
    flex-direction: column;
}

.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}
@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}
@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}
@media (min-width: 1536px) {
    .container {
        max-width: 1536px;
    }
}

`;
