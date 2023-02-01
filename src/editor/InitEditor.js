import { CssLoader } from "../utils/CssLoader.js";
import Events from "./Events.js";
import { JavascriptLoader } from "../utils/JavascriptLoader.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeHandler from "./NodeHandler.js";
import UiEditor from "./ui/ui-editor.js";

export const InitEditor = async (tema) => {
    await CssLoader('/css/editor/prism.css')
    await CssLoader('/css/editor/print.css')
    await CssLoader('/css/editor/line-number.css')
    await JavascriptLoader('/js/prism.js')
    await JavascriptLoader('/js/line-number.js')
    await JavascriptLoader('/js/showdown.js')

    
    const nodeHandler = new NodeHandler('#container');
    const nodeBuilder = new NodeBuilder(nodeHandler);

    const events = new Events(nodeHandler, nodeBuilder);
    const editor = new UiEditor();
    if (location.origin == 'http://127.0.0.1:8080') {
        const promise = editor.start();
        promise.then(() => {
            events.start();
        })
    }
    events.loadData(tema);
}
