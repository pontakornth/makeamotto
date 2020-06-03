import { FunctionalComponent, h } from "preact";

import Generator from "./Generator";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    /*     let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

 */ return (
        <div id="app">
            <Generator />
        </div>
    );
};

export default App;
