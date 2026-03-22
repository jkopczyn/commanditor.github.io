import * as monaco from "../monaco";
import {
    EditorAction,
    registerEditorAction,
} from "monaco-editor/esm/vs/editor/browser/editorExtensions";

export class ToggleWordWrapAction extends EditorAction {
    static ID = "commanditor.action.toggleWordWrap";

    constructor() {
        super({
            id: ToggleWordWrapAction.ID,
            label: "Toggle Word Wrap",
            alias: "Toggle Word Wrap",
            precondition: undefined,
            kbOpts: {
                kbExpr: null,
                primary: monaco.KeyMod.Alt | monaco.KeyCode.KeyH,
                weight: 100,
            },
        });
    }

    run(accessor, editor) {
        const current = editor.getOption(monaco.editor.EditorOption.wordWrap);
        editor.updateOptions({ wordWrap: current === "off" ? "on" : "off" });
    }
}

registerEditorAction(ToggleWordWrapAction);
